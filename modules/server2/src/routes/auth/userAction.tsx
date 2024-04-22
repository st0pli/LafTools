'use server'

import dao from "@/dao";
import { UserRole } from "@/dao/model"
import { getMD5, getSignatureFromStr } from "./auth";
import { UserModel as User } from '@/models/oldjava.model'
import handleAuthInfo, { fn_getCookie } from "./handleAuthInfo";
import { checkIfStrOnlyHasAlphanumeric } from "./utils";
import { CommonHandlePass } from "../auth.route";
import { CheckRules, fn_verifyVCode } from "./action-types";
import { fn_refresh_system_info_from_redis } from "./user-types";
import _ from "lodash";
import { key_sessionGroup } from "./constants";
import { hashPW } from "./op";

export type Elb3AuthBody = {
    userAcctId: string,
    userRole: UserRole
}

export type fn_setCookie = (name: string, value: string,) => void
export let signInWithUserId = async (userAcctId: string, rememberMe: boolean): Promise<SignInCredentials> => {
    let userInfo = await getUserInfoByUserAcctId(userAcctId)
    if (!userInfo) {
        throw new Error('user not found')
    }
    if (!userInfo.id) {
        throw new Error('user id not found')
    }
    let daoRef = await dao()
    // init set
    await daoRef.redis.sAdd(key_sessionGroup, userAcctId) // add user acct into the set

    let push: Elb3AuthBody = {
        userAcctId: userInfo.id + '',
        userRole: 'user', //userInfo.role
    }
    let elb3AuthBody = btoa(JSON.stringify(push))
    let expiredTime = 1000 * 60 * 60 * 24 * 30 * 12 * 30
    if (!rememberMe) {
        // only remember for 2 hours
        expiredTime = 1000 * 60 * 60 * 2
    }
    let expiredDate = new Date().getTime() + expiredTime // by default, 30 years expired
    let signature = getSignatureFromStr(elb3AuthBody)
    return {
        signed: true,
        signature: expiredDate + '.' + elb3AuthBody + '.' + (signature)
    }
}

export let getUserInfoByUserAcctId = async (userAcctId: string): Promise<User | null> => {
    await dao()
    let user = await User.findOne({
        where: {
            id: userAcctId
        }
    })
    return user;
}
export let getUserInfoByEmail = async (email: string): Promise<User | null> => {
    await dao()
    let user = await User.findOne({
        where: {
            email: email
        }
    })
    return user;
}

export type ValOrError<T> = {
    error?: string,
    value?: T
}

// export let verifySMSCode = async (formData: {
//     phoneNumber: string, msgCode: string, type: "activate-account" | "reset-password"
// }): Promise<ValOrError<{}>> => {
//     let authInfo = await handleAuthInfo()
//     if (!authInfo.signedIn) {
//         throw new Error('not signed in')
//     }
//     let userAcctId = authInfo.user?.userAcctId
//     if (!userAcctId) {
//         throw new Error('user acct id not found')
//     }
//     let daoRef = await dao()
//     let item = await SMSCodeRecord.findOne({
//         where: {
//             userAcctId: userAcctId,
//             code: formData.msgCode
//         }
//     })
//     let key = 'smstried' + userAcctId
//     let sms_code_tried_times = await daoRef.redis.get(key)
//     if (sms_code_tried_times == null || sms_code_tried_times == '') {
//         sms_code_tried_times = '1'
//     }
//     await daoRef.redis.setEx(key, 60 * 60 * 24, (parseInt(sms_code_tried_times) + 1) + '')
//     let max = 200
//     if (!item) {
//         return {
//             error: Dot("RYlJHHwg3", "SMS code is not correct. ") + `[${sms_code_tried_times}/${max}]`
//         }
//     }
//     if (parseInt(sms_code_tried_times) > max) {
//         return {
//             error: Dot("D_9sNBiZj", "You tried too many times, please try again later.")
//         }
//     }
//     await daoRef.db.transaction(async () => {
//         if (item) {
//             switch (formData.type) {
//                 case 'activate-account':
//                     if (authInfo.user) {
//                         await authInfo.user.update({
//                             status: 'normal'
//                         })
//                     }
//                     break;
//                 default:
//                     throw new Error('unknown logic')
//             }
//             await item.destroy()
//         }
//     })

//     return {}
// }



export let validateEachRuleInArr = async (rules: CheckRules[], formData: any, p: CommonHandlePass): Promise<AsyncCreateResponse<{}> | null> => {
    let { Dot } = p
    let valid = true;
    let lastMsg = ''
    for (let rule of rules) {
        if (rule.type === "non-empty") {
            lastMsg = Dot("wCctGPJZK", "{0} should not be empty", rule.label)
            if (!formData[rule.name]) {
                valid = false;
                break;
            }
        }
        if (rule.type === "valid-email") {
            lastMsg = Dot("wCcPJZK", "{0} is not a valid email", rule.label)
            if (!formData[rule.name].includes("@")) {
                valid = false;
                break;
            }
        }
        if (rule.type === "check-fn" && rule.validateFn) {
            let result = await rule.validateFn(formData[rule.name])
            if (result) {
                lastMsg = result
                valid = false;
                break;
            }
        }
        if (rule.type === "valid-phone" && rule.validateFn) {
            if (formData[rule.name].length != 11) {
                lastMsg = Dot("CuHqw9m", "{0} is not a valid phone number, currently system accept 11 digits telephone number only.", rule.label)
                valid = false;
                break;
            }
        }
    }
    if (valid) return null;
    return {
        error: lastMsg || "invalid form data"
    }
}

// export let sendSMSCodeWithVerificationCode = async (formData: {
//     phoneNumber: string, vcode: string,
// }, getCookie: fn_getCookie): Promise<ValOrError<{}>> => {
//     await dao()
//     let authInfo = await handleAuthInfo(getCookie)
//     if (!authInfo.signedIn) {
//         throw new Error('not signed in')
//     }
//     let userAcctId = authInfo.user?.id
//     if (!userAcctId) {
//         throw new Error('user acct id not found')
//     }
//     console.log('sms code auth info', authInfo)
//     let { phoneNumber } = formData
//     let r = await validateEachRuleInArr([fn_verifyVCode()], formData)
//     if (r?.error) {
//         return {
//             error: r.error
//         }
//     }
//     let r2 = await sendSMSCodeForUser(userAcctId, phoneNumber)
//     return r2;
// }

// export let sendSMSCodeForUser = async (userAcctId: string, phoneNumber: string): Promise<ValOrError<{}>> => {
//     phoneNumber = _.trim(phoneNumber)
//     let daoRef = await dao()
//     let sms_code = _.random(100000, 999999) + ''
//     let momentDate = moment().format("YYYY-MM-DD");
//     let ctn = await SMSCodeRecord.count({
//         where: {
//             userAcctId: userAcctId,
//             phoneNumber: phoneNumber,
//             dateValue: momentDate
//         }
//     })
//     if (ctn > 8) {
//         return {
//             error: Dot("-dxG-aEe4w", "The maximum number of SMS verification codes sent today has been reached.")
//         }
//     }
//     await SMSCodeRecord.create({
//         id: 0,
//         userAcctId: userAcctId,
//         phoneNumber: phoneNumber,
//         code: sms_code,
//         dateValue: momentDate
//     })
//     // TODO: send sms code
//     return {}
// }



export type AsyncCreateResponse<T> = {
    message?: string, // normal message
    error?: string, // error
    data?: T
}
export type SignInCredentials = {
    signed: boolean,
    signature: string | null,
}
export async function handleSignIn(formData: {
    userAcctId: string,
    password: string,
    phoneNumber: string,
    type: string,
    rememberMe: boolean,
    randomID: string,
    vcode: string
}, p: CommonHandlePass): Promise<AsyncCreateResponse<SignInCredentials | {}>> {
    let daoRef = await dao()
    let { Dot, Info, getCookie, setCookie } = p
    let res: SignInCredentials = {
        signed: false,
        signature: null
    };
    let rules: CheckRules[] = [
        formData.type == 'username' ? {
            type: "non-empty",
            name: "userAcctId",
            label: Dot("oHQNQ4mRw", "User ID"),
        } :
            {
                type: 'non-empty',
                name: 'phoneNumber',
                label: Dot("Te3h_wK", "Telephone Number"),
            },
        {
            type: "non-empty",
            name: "password",
            label: Dot("TXdh_K", "Password"),
        },
        {
            type: "non-empty",
            name: "vcode",
            label: Dot("TqXddh_K", "Verification Code"),
        },
        fn_verifyVCode(formData.randomID, p),
        {
            type: 'check-fn',
            name: 'userAcctId',
            validateFn: async (val) => {
                let user: User | null = null;
                user = await getUserInfoByUserAcctId(formData.userAcctId)
                if (!user) {
                    user = await getUserInfoByEmail(formData.phoneNumber)
                }
                if (!user) {
                    return Dot("dsdfqw", "User does not exist")
                }
                if (user.newUserPassword != hashPW(formData.password)) {
                    return Dot("eqwee", "Password is not correct")
                }
                // LOGIN SUCCESS
                await daoRef.db_work7z.transaction(async () => {
                    if (!user) return;
                    let r = await signInWithUserId(user.id + '', formData.rememberMe)
                    res = r
                    // TODO: user login log
                    // await UserLoginLog.create({
                    //     userId: user.id || -1,
                    //     loginIp: '',
                    //     loginTime: new Date(),
                    // })
                })
            }
        },
    ].filter(x => x)

    let validObj = await validateEachRuleInArr(rules, formData, p);
    if (validObj) {
        return validObj
    }

    return {
        data: res,
    }
}


export default async function handleSignUp(formData: {
    preview: boolean,
    userAcctId: string,
    password: string,
    email: string,
    randomID: string,
    invitationCode: string,
    rememberMe: boolean,
    confirmPassword: string,
    vcode: string
}, p: CommonHandlePass): Promise<AsyncCreateResponse<{ newUser?: User }>> {
    let { Dot } = p
    console.log('formData', formData)
    let daoRef = await dao()
    let rules: CheckRules[] = [
        {
            type: "non-empty",
            name: "userAcctId",
            label: Dot("oHQNQ4mRw", "User ID"),
        },
        {
            type: "non-empty",
            name: "password",
            label: Dot("TXdh_K", "Password"),
        },
        {
            type: "non-empty",
            name: "confirmPassword",
            label: Dot("TqXdh_K", "Confirm Password"),
        },
        {
            type: 'non-empty',
            name: 'phoneNumber',
            label: Dot("TqXdd3h_wK", "Telephone Number"),
        },
        {
            type: "non-empty",
            name: "invitationCode",
            label: Dot("Xddh_wK", "Invitation Code"),
        },
        {
            type: "non-empty",
            name: "vcode",
            label: Dot("TqXddh_K", "Verification Code"),
        },
        {
            type: "valid-phone",
            name: "phoneNumber",
            label: Dot("TdXddh_wK", "Telephone Number"),
        },
        {
            type: 'check-fn',
            name: 'userAcctId',
            validateFn: async (val) => {
                let user = await getUserInfoByUserAcctId(val)
                if (user) {
                    return Dot("8sVG1RdXhx", "User ID already exists")
                }
                let ok = checkIfStrOnlyHasAlphanumeric(val)
                if (!ok) {
                    return Dot("8sVGdXhx", "User ID should only contain letters and numbers")
                }
                if (val.length < 2) {
                    return Dot("8sVG1kqXhx", "User ID should be at least 2 characters")
                }
                let prohibittedArr = [
                    "admin",
                    "administrator",
                    "root",
                    "superuser",
                    "system",
                    "systemadmin",
                    "sysadmin",
                    "user",
                    "username",
                    "useracctid",
                    "undefined",
                    "null",
                    "fuck",
                    "suck"
                ]
                // check if contains in prohibiteedArr
                let lVal = _.toLower(val)
                for (let item of prohibittedArr) {
                    if (lVal.indexOf(_.toLower(item)) != -1) {
                        return Dot("K2UEY4ddl", "The user ID contains invalid words, please avoid using {0}", item)
                    }
                }
            }
        },
        {
            type: "check-fn",
            name: "password",
            validateFn: async (val) => {
                if (val.length < 6) {
                    return Dot("8sVG1RXhx", "password should be at least 6 characters")
                }
            }
        },
        {
            type: "check-fn",
            name: "confirmPassword",
            validateFn: async (val) => {
                if (val !== formData.password) {
                    return Dot("Y-svpKvUz", "two passwords do not match")
                }
            }
        },
        // {
        //     type: "check-fn",
        //     name: "invitationCode",
        //     validateFn: async (val) => {
        //         if (val.length > 0) {
        //             let item = invitationCodeItem
        //             if (!item) {
        //                 return Dot("8s1dX", "The invitation code does not exist in system, please check if there is a case sensitive issue.")
        //             }
        //             if (item.expiredAt < new Date()) {
        //                 return Dot("8saIR-LCjyChx", "Invitation code has expired")
        //             }
        //             if (item.useCount > item.maxUseCount) {
        //                 return Dot("8saIt5r5nGxwwChx", "Invitation code has been used up")
        //             }
        //             // all good
        //         } else {
        //             return Dot("8s1R5nChx", "Invitation code is empty, this community is not open to public but limited to invited users.")
        //         }
        //     }
        // },
        formData.preview ? null : fn_verifyVCode(formData.randomID, p)
    ].filter(x => x)

    let validObj = await validateEachRuleInArr(rules, formData, p);
    if (validObj) {
        return validObj
    }

    if (formData.preview) {
        return {
            data: undefined
        };
    }

    let newUser = await daoRef.db_work7z.transaction(async () => {
        let newUser = await User.create({
            id: parseInt(formData.userAcctId),
            userPwMd5: hashPW(formData.password + ''),
            email: formData.email,
        })

        // await invitationCodeItem?.update({
        //     useCount: invitationCodeItem.useCount - 1
        // })

        await signInWithUserId(formData.userAcctId + '', formData.rememberMe)

        await fn_refresh_system_info_from_redis()

        // await sendSMSCodeForUser(formData.userId, formData.email)

        return newUser
    })
    if (!newUser) {
        return {
            error: "create user failed"
        }
    }
    return {
        data: {
            newUser: newUser
        },
    }
}