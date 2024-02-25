// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Thu, 22 Feb 2024
// Author:   
// Description: 
// Copyright (C) 2024 - Present, https://laf-tools.com and https://codegen.cc
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

"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    // HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();


  let [mounted, setMount] = useState(false)
  useEffect(() => {
    setMount(true)
  }, [])



  useEffect(() => {
    import("preline/preline").then(x => {
      setTimeout(() => {
        window["HSStaticMethods"] && window["HSStaticMethods"].autoInit();
      }, 100);
    })
  }, []);

  // useEffect(() => {
  // }, [path]);
  if (!mounted) {
    return '';
  }

  return '';
}