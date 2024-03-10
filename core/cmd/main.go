// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Wed, 20 Sep 2023
// Author: LafTools Team <work7z@outlook.com>
// Description:
// Copyright (C) 2023 - Present, https://laftools.dev and https://codegen.cc
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

package cmd

import (
	"fmt"
	"laftools-go/core/global"
	"laftools-go/core/project/base/env"
	"laftools-go/core/project/base/extra"
	itools "laftools-go/core/project/tools"
	"laftools-go/core/tools"
	"os"

	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:   "run",
	Short: "LafTools would be an epoch-striking software.",
	Long:  `More detail please visit https://codegen.cc`,
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("Do nothing with root command")
	},
}

func init() {
	// global env
	rootCmd.PersistentFlags().BoolVar(&tools.IsDevMode, "debug", true, "whether enable release mode or not")

	// init run server
	runServerCmd.PersistentFlags().StringVar(&tools.Mode, "mode", "regular", "application mode")
	runServerCmd.PersistentFlags().StringVar(&tools.RefId, "ref-id", "dkzhZ.json", "stats report")
	runServerCmd.PersistentFlags().IntVar(&env.ProdPortStartFrom, "port", -1, "port")
	runServerCmd.PersistentFlags().StringVar(&tools.LafToolsAppBaseDir, "root", env.DefaultLafToolsRoot, "system root path")
	runServerCmd.PersistentFlags().StringVar(&tools.LafToolsHomeConfigDir, "home", global.GetDefaultAppConfigDir(), "config home path")

	// init run extra
	devExtraCmd.PersistentFlags().StringVar(&extra.ConfigFilePath, "config", "", "config file")

	// init middleware
	// TODO: depreciated one
	itools.Unused__InitCMD(middlewareCmd)

	// add commands
	rootCmd.AddCommand(devExtraCmd)
	rootCmd.AddCommand(runServerCmd)
	rootCmd.AddCommand(middlewareCmd)
	rootCmd.AddCommand(runTestCmd)
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}
