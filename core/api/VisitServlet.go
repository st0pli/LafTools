// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Sun, 8 Oct 2023
// Author: LafTools Team <work7z@outlook.com>
// Description:
// Copyright (C) 2023 - Present, https://laf-tools.com and https://codegen.cc
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

package api

import (
	"codegen-go/core/config"
	"codegen-go/core/context"
	"codegen-go/core/ext"
	"codegen-go/core/gutils"
	"codegen-go/core/log"
	"codegen-go/core/nocycle"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
)

func API_VISIT_GetInitInfoSystem(c *gin.Context) {
	OKLa(c, DoValueRes(gin.H{
		"UserConfigFile": config.GetUserConfigFile(),
		"UserConfigDir":  config.GetUserConfigDir(),
		"UserPWDir":      config.GetUserPWDir(),
	}))
}

type ResFoundByToken struct {
	Obj   *config.UserConfig
	Found bool
	Msg   string
}

func API_GetUsernameAsResult(c *gin.Context) {
	a, _ := config.GetUserConfigFromFile()
	usernames := []string{}
	for _, uc := range a {
		usernames = append(usernames, uc.Username)
	}
	OKLa(c, DoValueRes(gin.H{
		"Usernames": usernames,
	}))
}

func API_VisitGetByToken(c *gin.Context) {
	token := strings.TrimSpace(c.Query("userToken"))
	if token == "" {
		OKLa(c, DoValueRes(ResFoundByToken{
			Msg:   "token is empty",
			Obj:   nil,
			Found: false,
		}))
		return
	}
	a, _ := config.GetUserConfigFromFile()
	item, item_f := config.GetItemByToken(a, token)
	if item_f {
		OKLa(c, DoValueRes(ResFoundByToken{
			Obj:   item,
			Found: true,
			Msg:   "item found",
		}))
	} else {
		OKLa(c, DoValueRes(ResFoundByToken{
			Obj:   nil,
			Found: false,
			Msg:   "item not found",
		}))
	}
}

func API_VISIT_GetAdminInitStatus(c *gin.Context) {
	a, _ := config.GetUserConfigFromFile()
	anyAdmin := false
	if a != nil {
		for _, userConfig := range a {
			if userConfig.IsAdmin {
				anyAdmin = true
			}
		}
	}
	OKLa(c, DoValueRes(gin.H{
		"HasAdminInit":    anyAdmin,
		"LastUpdatedTime": time.Now(),
	}))
}

type API_VISIT_CreateAdminInitStatusForm struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func API_VISIT_CreateAdminInitStatus(c *gin.Context) {
	wc := context.NewWC(c)
	form := &API_VISIT_CreateAdminInitStatusForm{}
	_ = c.BindJSON(form)
	if "" == (form.Username) || "" == (form.Password) {
		IncompleteParam(wc)
		return
	}
	s_adminToken := config.GetAdminInitToken()
	u_adminToken := c.GetHeader(nocycle.HEADER_ADMIN_TOKEN)
	log.Ref().Debug("admin token: ", s_adminToken+" <-> ", u_adminToken)
	if u_adminToken != s_adminToken {
		ErrLa2(c, wc.Dot("2157", "Admin Token is required, please use valid initialization URL to starts with."))
		return
	}
	userConfigMap, e2 := config.GetUserConfigFromFile()
	if e2 != nil {
		ErrLa(c, e2)
		return
	}
	e := FN_verifyUserStatus(userConfigMap, form.Username, wc)
	if e {
		return
	}
	userConfig := config.UserConfig{
		Id:             gutils.UUID(),
		Username:       form.Username,
		Password:       config.EncryptUserPassword(form.Password),
		Token:          gutils.UUID(),
		CreateTime:     time.Now(),
		IsAdmin:        true,
		InvitationCode: gutils.UUID(),
	}
	userConfigMap[userConfig.Id] = userConfig
	err := config.SetUserConfigIntoFile(userConfigMap)
	if HasError(wc, err) {
		return
	}
	// update system info
	systemInfo := config.GetCurrentSystemInfo()
	systemInfo.HasAdminInit = true
	config.SaveCurrentSystemInfo(systemInfo)
	OKLa(c, DoValueRes(userConfigMap))
}

// Provide an API that randomly pick one string from GetMottoList(), and call OKLa return it by DoValueRes
func API_VISIT_GetMotto(c *gin.Context) {
	wc := context.NewWC(c)
	list := ext.GetMottoList(&wc)
	pickOne := gutils.RandomPickOneFromList(list)
	OKLa(c, DoValueRes(pickOne()))
}
