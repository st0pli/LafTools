// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Tue, 5 Dec 2023
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
	"encoding/json"
	"laftools-go/core/config"
	"laftools-go/core/context"
	"laftools-go/core/log"
	"laftools-go/core/nocycle"
	"sync"

	"github.com/gin-gonic/gin"
)

var tmpReducerValueMap map[string]interface{} = make(map[string]interface{})
var lock = &sync.Mutex{}

func API_Sync_Reducer_Get(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	// get reducer
	reducerName := c.Query("name")
	wc := context.NewWC(c)
	crtKey := reducerName + wc.GetUserID() + wc.GetWorkspaceID()
	reducer := tmpReducerValueMap[crtKey]
	if reducer == nil {
		ErrLa2(c, "Reducer not found")
		return
	}
	// get state
	OKLa(c, DoValueRes(reducer))
}

func API_Sync_Reducer_Save(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()

	// get reducer
	reducerName := c.Query("name")
	wc := context.NewWC(c)
	crtKey := reducerName + wc.GetUserID() + wc.GetWorkspaceID()
	// get state
	var state interface{}
	if err := c.BindJSON(&state); err != nil {
		ErrLa(c, err)
		return
	}
	// save state
	tmpReducerValueMap[crtKey] = state
	OKLa(c, DoValueRes("saved"))
}

func init() {
	reducerSyncFile := config.GetCurrentReducerSyncFile()
	if nocycle.IsFileExist(reducerSyncFile) {
		str, err := nocycle.ReadFileAsStr(reducerSyncFile)
		if err != nil {
			log.Ref().Warn("unable to read reducer sync file: ", err)
		} else {
			// rename reducer sync file as *.bak
			nocycle.RenameFile(reducerSyncFile, reducerSyncFile+".bak"+nocycle.GetRandomString(8))
			// unmarhsla str to tmpReducerValueMap
			err2 := json.Unmarshal([]byte(str), &tmpReducerValueMap)
			if err2 != nil {
				log.Ref().Warn("unable to unmarshal reducer sync file: ", err2)
			}
		}
	}
	go func() {
		// every 3 seconds, write tmpReducerValueMap to reducerSyncFile
		for {
			nocycle.WriteFileAsStr(reducerSyncFile, nocycle.ToJson(tmpReducerValueMap))
			nocycle.Sleep(3000)
		}
	}()
}
