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
 * @author j433866 [j433866@gmail.com]
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */

import Operation from "../Operation.mjs";
import OperationError from "../errors/OperationError.mjs";
import { isImage } from "../lib/FileType.mjs";
import { toBase64 } from "../lib/Base64.mjs";
import { isWorkerEnvironment } from "../Utils.mjs";
// import jimp from "jimp";
var jimp = require('jimp')

/**
 * Contain Image operation
 */
class ContainImage extends Operation {

    /**
     * ContainImage constructor
     */
    constructor() {
        super();

        this.name = "Contain Image";
        this.module = "Image";
        this.description = "Scales an image to the specified width and height, maintaining the aspect ratio. The image may be letterboxed.";
        this.infoURL = "";
        this.inputType = "ArrayBuffer";
        this.outputType = "ArrayBuffer";
        this.presentType = "html";
        this.args = [
            {
                name: "Width",
                type: "number",
                value: 100,
                min: 1
            },
            {
                name: "Height",
                type: "number",
                value: 100,
                min: 1
            },
            {
                name: "Horizontal align",
                type: "option",
                value: [
                    "Left",
                    "Center",
                    "Right"
                ],
                defaultIndex: 1
            },
            {
                name: "Vertical align",
                type: "option",
                value: [
                    "Top",
                    "Middle",
                    "Bottom"
                ],
                defaultIndex: 1
            },
            {
                name: "Resizing algorithm",
                type: "option",
                value: [
                    "Nearest Neighbour",
                    "Bilinear",
                    "Bicubic",
                    "Hermite",
                    "Bezier"
                ],
                defaultIndex: 1
            },
            {
                name: "Opaque background",
                type: "boolean",
                value: true
            }
        ];
    }

    /**
     * @param {ArrayBuffer} input
     * @param {Object[]} args
     * @returns {byteArray}
     */
    async run(input, args) {
        const [width, height, hAlign, vAlign, alg, opaqueBg] = args;

        const resizeMap = {
            "Nearest Neighbour": jimp.RESIZE_NEAREST_NEIGHBOR,
            "Bilinear": jimp.RESIZE_BILINEAR,
            "Bicubic": jimp.RESIZE_BICUBIC,
            "Hermite": jimp.RESIZE_HERMITE,
            "Bezier": jimp.RESIZE_BEZIER
        };

        const alignMap = {
            "Left": jimp.HORIZONTAL_ALIGN_LEFT,
            "Center": jimp.HORIZONTAL_ALIGN_CENTER,
            "Right": jimp.HORIZONTAL_ALIGN_RIGHT,
            "Top": jimp.VERTICAL_ALIGN_TOP,
            "Middle": jimp.VERTICAL_ALIGN_MIDDLE,
            "Bottom": jimp.VERTICAL_ALIGN_BOTTOM
        };

        if (!isImage(input)) {
            throw new OperationError("Invalid file type.");
        }

        let image;
        try {
            image = await jimp.read(input);
        } catch (err) {
            throw new OperationError(`Error loading image. (${err})`);
        }
        try {
            if (isWorkerEnvironment())
                self.sendStatusMessage("Containing image...");
            image.contain(width, height, alignMap[hAlign] | alignMap[vAlign], resizeMap[alg]);

            if (opaqueBg) {
                const newImage = await jimp.read(width, height, 0x000000FF);
                newImage.blit(image, 0, 0);
                image = newImage;
            }

            let imageBuffer;
            if (image.getMIME() === "image/gif") {
                imageBuffer = await image.getBufferAsync(jimp.MIME_PNG);
            } else {
                imageBuffer = await image.getBufferAsync(jimp.AUTO);
            }
            return imageBuffer.buffer;
        } catch (err) {
            throw new OperationError(`Error containing image. (${err})`);
        }
    }

    /**
     * Displays the contained image using HTML for web apps
     * @param {ArrayBuffer} data
     * @returns {html}
     */
    present(data) {
        if (!data.byteLength) return "";
        const dataArray = new Uint8Array(data);

        const type = isImage(dataArray);
        if (!type) {
            throw new OperationError("Invalid file type.");
        }

        return `<img src="data:${type};base64,${toBase64(dataArray)}">`;
    }

}

export default ContainImage;
