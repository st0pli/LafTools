// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Thu, 11 Jan 2024
// Author: LafTools Team - FX <work7z@outlook.com>
// Ryan Laf <work7z@outlook.com>
// Description: 
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc
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

import { useEffect } from "react";
import LoadingBar from 'react-top-loading-bar'
import exportUtils from "../../utils/ExportUtils";
import { ACTION_callInitAllDataAtOnceFromInitSystemEnv } from "../../reducers/systemSlice";
import _ from "lodash";
import AlertUtils from "../../utils/AlertUtils";
import './index.scss'
let colorList = [
    '#ADFF2F', // GreenYellow
    "#13C9BA",
    "#D4F17E",
    "#62D96B",
    "#68C1EE",
    "#D69FD6",
    "#BDADFF",
    "#7961DB",
    "#F5498B",
    "#D0B090",
    "#FBD065",
    "#FF66A1",
    "#FBB360",
    "#8ABBFF",
    "#238551",
    "#EC9A3C",
    "#5C255C"
]
let randomColor = _.get(colorList, _.random(0, _.size(colorList) - 1));

export default () => {
    let forgeObj = exportUtils.useSelector((val) => ({
        dark: val.forge.DarkThemeMode,
    }));
    let systemObj = exportUtils.useSelector((val) => ({
        LoadSystemData: val.system.LoadSystemData,
    }));
    let isEnvNotLoad = !systemObj.LoadSystemData;

    let sysObj = exportUtils.useSelector((val) => ({
        LoadSystemData: val.system.LoadSystemData,
        ProgressText: val.system.SysInitStatus.ProgressText,
        ProgressError: val.system.SysInitStatus.ProgressError,
        HasError: val.system.SysInitStatus.HasError,
        SysInitStatus: val.system.SysInitStatus,
        ProgressBarValue: val.system.SysInitStatus.ProgressBarValue,
    }));

    // let statusList = [
    //     sysObj.SysInitStatus.IsLangPacksOK,
    //     sysObj.SysInitStatus.IsSystemPrefOK,
    //     sysObj.SysInitStatus.IsSystemUpdatesOK,
    // ]
    // let okStatusListSize = _.filter(statusList, (val) => val).length;
    useEffect(() => {
        if (!sysObj.HasError) {
            return;
        }
        AlertUtils.win_alert({
            id: "xfnxf",
            msg: sysObj.ProgressError + "",
        })
    }, [sysObj.HasError])

    if (true) {
        return ''
    }

    return <LoadingBar
        progress={sysObj.HasError ? 60 : sysObj.ProgressBarValue || 1}
        waitingTime={1300}
        className="animated-loading-bar"
        color={sysObj.HasError ? "red" : randomColor}
        height={2}
    />
}