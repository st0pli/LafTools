// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Sun, 14 Jan 2024
// Second Author: Ryan Laf 
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

/**
 * @author d98762625 [d98762625@gmail.com]
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */


import DishType from "./DishType.mjs";
import Utils from "../Utils.mjs";

/**
 * Translation methods for string dishes
 */
class DishString extends DishType {

    /**
     * convert the given value to a ArrayBuffer
     */
    static toArrayBuffer() {
        DishString.checkForValue(this.value);
        this.value = this.value ? Utils.strToArrayBuffer(this.value) : new ArrayBuffer;
    }

    /**
     * convert the given value from a ArrayBuffer
     */
    static fromArrayBuffer() {
        DishString.checkForValue(this.value);
        this.value = this.value ? Utils.arrayBufferToStr(this.value) : "";
    }
}

export default DishString;
