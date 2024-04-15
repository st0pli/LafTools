

import { AsyncCreateResponse, CheckRules, fn_verifyVCode, validateEachRuleInArr } from "../../../../web2/app/[lang]/[category]/src/parts/user/register/action-types";
import _ from "lodash";
import { checkIfStrOnlyHasAlphanumeric } from "./utils";
import { randomUUID } from "crypto";
import { key_sessionGroup } from "../../../../web2/app/[lang]/[category]/src/parts/user/register/redis-types";
import path from "path";
import fs from 'fs'
import crypto from 'crypto'
import { isDevEnv } from "@/web2share-copy/env";

let dir = '' // getPreCompiledDir()
let privateKey = process.env.PRIVATE_KEY
if (isDevEnv()) {
    privateKey = 'jr_E9PUkV'
}

export let getSignatureFromStr = (str: string) => {
    return getMD5(str + privateKey) + 'v1' // signature plus version
}

export let getMD5 = (str: string) => {
    let md5 = crypto.createHash('md5')
    md5.update(str)
    return md5.digest('hex')
}
