// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Sun, 22 Oct 2023
// Author: LafTools Team <work7z@outlook.com>
// Description:
// Copyright (C) 2023 - Present, https://codegen.cc
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

import { logutils } from "./LogUtils";
import _ from "lodash";
import TranslationUtils, { Dot } from "./cTranslationUtils";
import QS from "querystring";
import axios, { AxiosError, AxiosResponse } from "axios";
import gutils from "./GlobalUtils";
import { URL_PREFIX_LOCAL, URL_PREFIX_STATIC } from "../types/constants";
import devJson from "../static/dev.json";
import { AnyMapType, PayloadValueData } from "../types/constants";
import TokenUtils from "./TokenUtils";
import IDUtils from "./IDUtils";
import AjaxUtils from "./AjaxUtils";

export type FileInfo = {
  RefID: string;
  FileSize: number;
  FileName: string;
};

export default {
  readTempFileByRefID: async (refID: string): Promise<string> => {
    let r = await AjaxUtils.DoLocalRequestWithNoThrow<
      PayloadValueData<{ content: string }>
    >({
      url: "/os/temp/file/read",
      querystring: { refID },
    });
    if (r.error) {
      throw r.error;
    } else {
      return r.response?.data?.payload.value?.content as string;
    }
  },
  uploadFileToTempDir: async (file: File): Promise<FileInfo> => {
    let formData = new FormData();
    formData.append("file", file);
    let r = await AjaxUtils.DoLocalRequestWithNoThrow<
      PayloadValueData<FileInfo>
    >({
      isPOST: true,
      url: "/os/temp/file/upload",
      formData: formData,
    });
    if (r.error) {
      throw r.error;
    } else {
      return r.response?.data?.payload.value as FileInfo;
    }
  },
  // select a file from user
  selectFileByAsync: async (accept: string): Promise<File> => {
    return new Promise((resolve, reject) => {
      let input = document.createElement("input");
      input.type = "file";
      input.accept = accept;
      input.onchange = (e) => {
        if (e.target) {
          let b = e.target as HTMLInputElement;
          if (b && b.files && b.files.length > 0) {
            let file = b.files[0];
            resolve(file);
          }
        }
      };
      input.click();
    });
  },
  selectFile: (accept: string, callback: (file: File) => void) => {
    let input = document.createElement("input");
    input.type = "file";
    input.accept = accept;
    input.onchange = (e) => {
      if (e.target) {
        let b = e.target as HTMLInputElement;
        if (b && b.files && b.files.length > 0) {
          let file = b.files[0];
          callback(file);
        }
      }
    };
    input.click();
  },
  exportAsFile: (filename: string, content: string) => {
    convertRes2BlobAndDownload(filename, content);
  }
};

function convertRes2BlobAndDownload(filename, data) {
  const blob = new Blob([data], {
    type: "application/octet-stream",
  });
  const blobURL = window.URL.createObjectURL(blob);
  const tempLink = document.createElement("a");
  tempLink.style.display = "none";
  tempLink.href = blobURL;
  tempLink.setAttribute("download", decodeURI(filename));
  if (typeof tempLink.download === "undefined") {
    tempLink.setAttribute("target", "_blank");
  }
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  window.URL.revokeObjectURL(blobURL);
}