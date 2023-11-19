// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Tue, 19 Sep 2023
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
	"laftools-go/core/gutils"
	"laftools-go/core/log"
	"laftools-go/core/nocycle"
	"laftools-go/core/url"
	"path"
	"strings"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/gzip"
	"github.com/gin-gonic/gin"
)

func ConfigSystemRouter(r *gin.Engine) {
	r.Use(gzip.Gzip(gzip.DefaultCompression))
	r.Use(AuthMiddleware)
	doGET_ := func(relativePath string, handlers gin.HandlerFunc) gin.IRoutes {
		return r.GET(url.FormatThatPathGlobally(relativePath), handlers)
	}
	doPOST := func(relativePath string, handlers gin.HandlerFunc) gin.IRoutes {
		return r.POST(url.FormatThatPathGlobally(relativePath), handlers)
	}
	// root
	r.GET("/", func(c *gin.Context) {
		c.Redirect(302, url.CONFIG_URL_APP_FRONT_END_APP_PREFIX)
	})

	// app and static
	if nocycle.IsDevMode() {
		r.Static(url.CONFIG_URL_APP_FRONT_END_APP_PREFIX, gutils.GetFrontEndRootAppDir())
		r.Static(url.CONFIG_URL_APP_FRONT_END_STATIC_PREFIX, gutils.GetFrontEndStaticDir())
	} else {
		log.Ref().Fatal("Not yet supported this app and static")
	}

	// setup for SPA
	r.NoRoute(func(c *gin.Context) {
		fullPath := c.FullPath()
		if strings.Index(fullPath, url.CONFIG_URL_APP_FRONT_END_APP_PREFIX) == 0 {
			c.File(path.Join(gutils.GetFrontEndRootAppDir(), "index.html"))
		}
	})

	// cross-origin
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return true
		},
		MaxAge: 12 * time.Hour,
	}))
	_visitor_can_ := func(path string) string {
		url.CONFIG_URL_VISIT_URLS = append(url.CONFIG_URL_VISIT_URLS, path)
		return path
	}
	// _admin_only_ := func(path string) string {
	// 	url.CONFIG_URL_ADMIN_URLS = append(url.CONFIG_URL_ADMIN_URLS, path)
	// 	return path
	// }
	/**
	About the routes:
		- _visitor_can_ means the API can be accessible without token
		- _admin_only_ means the API can only be accessible to for admin only
		- Other APIs without any prefix means the API can be accessible only to users and be prohibited to unauthorized visitors.
	*/
	// user
	doGET_(_visitor_can_("/user/one/getByToken"), API_VisitGetByToken)
	doGET_(_visitor_can_("/user/all/getUserNameList"), API_GetUsernameAsResult)
	doGET_(_visitor_can_("/admin/init/info"), API_VISIT_GetAdminInitStatus)
	doPOST(_visitor_can_("/admin/init/create"), API_VISIT_CreateAdminInitStatus)
	doGET_(_visitor_can_("/system/init/info"), API_VISIT_GetInitInfoSystem)
	doGET_(_visitor_can_("/node-rpc/getAllJobs"), API_Node_getAllJobs)
	doPOST(_visitor_can_("/user/local/pw/calc"), API_USER_CalcPassword)
	doPOST(_visitor_can_("/user/local/verify"), API_USER_VerifyUserServlet)
	doPOST("/user/local/new", API_USER_CreateNewAccount)
	doPOST("/user/local/pw/reset", API_USER_ResetPasswordByOldPassword)
	doGET_("/user/local/key/get", API_USER_GetAnyKeyByUserId)
	doPOST("/user/local/key/set", API_USER_SetAnyKeyByUserId)

	// admin
	// TODO:
	// doPOST(_admin_only_("/user/local/pw/reset"), ResetPasswordByAdmin)

	// extension
	doGET_("/tool/exts/listCategory", ListCategory)
	doGET_("/tool/exts/listSubCategory", ListSubCategory)
	doGET_("/tool/exts/getExtDetail", GetOneExtUnderSpecificCategory)
	doPOST("/tool/exts/convertText", DoActionForConvertingText)

	// os
	doPOST("/os/temp/file/upload", API_TEMP_FILE_UPLOAD)
	doGET_("/os/temp/file/read", API_TEMP_FILE_READ)

	// ws(note that ws has separate auth logic)
	doGET_("/ws/system", API_SYSTEM_WebSocket)
	doGET_("/ws/node-rpc", API_Node_Websocket)
	doGET_("/ws/post-job", API_PostJob_WebSocket)

	// system
	doGET_("/system/stats", API_SYSTEM_Stats)
	doGET_("/system/getOneMotto", API_VISIT_GetMotto)

	// static folders
	nonPDir := gutils.GetResourceNonProhibitedDir()
	r.Static(url.FormatThatPathGlobally(_visitor_can_("/res/non-prohibited")), nonPDir)
}
