// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Sat, 30 Sep 2023
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
import TranslationUtils, { Dot } from "./TranslationUtils";
import QS from "querystring";
import axios, { AxiosError, AxiosResponse } from "axios";
import gutils from "./GlobalUtils";
import { URL_PREFIX_LOCAL, URL_PREFIX_STATIC } from "../styles/config";
import devJson from "../static/dev.json";
import { AnyMapType } from "../styles/var";
import TokenUtils from "./TokenUtils";
import IDUtils from "./IDUtils";

interface CommonRequest {
  url: string;
  noHost?: boolean;
  isPOST?: boolean;
  querystring?: { [key: string]: any };
  formData?: any;
  data?: AnyMapType;
  host?: string;
  prefix?: string;
}
type AjaxPromise = Promise<AxiosResponse<any, any>>;

export type LocalRes<T> = {
  error: AxiosError | null;
  response: AxiosResponse<T> | null;
};

const AjaxUtils = {
  JSONtoFormData(obj): FormData {
    let formData = new FormData();
    _.forEach(obj, (x, d, n) => {
      formData.append(d, x);
    });
    return formData;
  },
  getHeaders: () => {
    return {
      "Content-Type": "application/json",
      "X-LOCAL-PAGE-ID": IDUtils.PAGE_ID,
      "X-LOCAL-CLIENT-ID": IDUtils.CLIENT_ID,
      "X-LOCAL-USER-LANG": TranslationUtils.CurrentLanguage,
      "X-LOCAL-USER-TOKEN": TokenUtils.getLocalUserToken(),
      "X-LOCAL-ADMIN-TOKEN": TokenUtils.getSystemInitToken(),
      "X-LOCAL-USER-ID": TokenUtils.getLocalUserId(),
    };
  },
  getQSStr(obj: CommonRequest): string {
    let querystring = obj.querystring;
    return !_.isEmpty(querystring) ? "?" + QS.stringify(querystring) : "";
  },
  DoLocalRequestWithNoThrow: async function <T3>(
    obj: CommonRequest
  ): Promise<LocalRes<T3>> {
    let { url, isPOST, querystring, noHost, host = "", prefix = "" } = obj;
    if (!_.startsWith(url, "/")) {
      url = "/" + url;
    }
    url = URL_PREFIX_LOCAL + url;
    let finalData = obj.formData ? obj.formData : obj.data;
    // var formData = new FormData();
    // _.forEach(obj.data, (x, d, n) => {
    //   if (!_.isNil(x)) {
    //     formData.append(d, x);
    //   }
    // });
    let thatHeaders = {
      ...AjaxUtils.getHeaders(),
    };
    if (obj.formData) {
      thatHeaders["Content-Type"] = "multipart/form-data";
    }
    try {
      let b = await axios({
        headers: thatHeaders,
        data: finalData,
        method: isPOST ? "POST" : "GET",
        url: host + prefix + url + AjaxUtils.getQSStr(obj),
      });
      let data_errors = _.get(b, "data.errors");
      if (!_.isEmpty(data_errors)) {
        return {
          response: null,
          error: data_errors,
        };
      }
      return {
        response: b,
        error: null,
      };
    } catch (e) {
      let error = e as AxiosError;
      logutils.log("error", e);
      return {
        error: error,
        response: null,
      };
    }
  },
  GetStaticPrefix: () => {
    return URL_PREFIX_STATIC;
  },
  DoStaticRequest: (obj: CommonRequest): AjaxPromise => {
    let finalURL: string =
      AjaxUtils.GetStaticPrefix() + obj.url + AjaxUtils.getQSStr(obj);
    logutils.log("Do static request", obj, finalURL);
    return axios({
      headers: AjaxUtils.getHeaders(),
      method: obj.isPOST ? "POST" : "GET",
      url: finalURL,
      data: obj.data,
    });
  },
};

export default AjaxUtils;
