/*
最汇购

> 代码已同时兼容 Surge & QuanX & Loon, 使用同一份脚本即可


## 配置 (Surge & Loon)

```properties
[MITM]
prod.ggszhg.com

[Script]
http-request ^https\:\/\/yqpt\.xa\.gov\.cn\/neusoft-appt\/appt-vfic\/app\/* script-path=zhg.js
cron "0,30 7-15 * * *" script-path=zhg.js
```

## 配置 (QuanX)

```properties
[MITM]
prod.ggszhg.com

[rewrite_local]
^https\:\/\/yqpt\.xa\.gov\.cn\/neusoft-appt\/appt-vfic\/app\/*  url script-request-header zhg.js

[task_local]
0,30 7-15 * * * zhg.js
```

## 说明

1. 先把prod.ggszhg.com`加到`[MITM]`
2. 再配置重写规则:
   - Surge: 把脚本放到`[Script]`
   - QuanX: 把`zhg.js`传到`On My iPhone - Quantumult X - Scripts` (传到 iCloud 相同目录也可, 注意要打开 quanx 的 iCloud 开关)

*/

const appName = '最汇购'

const userTokenKey = 'zhg_userToken'
const userIdKey = 'zhg_userId'
const osKey = 'zhg_os'
const osVersionKey = 'zhg_osVersion'

const tmpKey = "zhg_tmp"

let query_params = {
    "os": "APPLET",
    "osVersion": "1.0.0",
    "userId": "0",
    "userToken": "0",
}

const UserAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.12(0x18000c28) NetType/WIFI Language/zh_CN'

const orgMap = {
    贵州航食: "727549979857518592",
    贵州空港新元: "817425775685795840"
}

var $nobyda = nobyda();
merge = {};

if (typeof $request != "undefined") {
    if($request.url.indexOf("/findDefaultAddress") !== -1){
        updateData(tmpKey, JSON.stringify($request))
        // updateData(tmpKey, "")
    }
    loadUserInfo()
    $nobyda.done($request);
} else {
    // console.log(`zhg_tmp: ${$nobyda.read(tmpKey)}`)
    console.log("start job working!")
    jobWork().then(() => {
        $nobyda.done()
    })
}


function loadUserInfo() {
    if ($request.method === 'OPTIONS') {
        return
    }
    loadAuthorization()
}

function loadAuthorization() {
    params = getParams()
    userToken = params["userToken"]
    if (userToken !== $nobyda.read(userTokenKey)) {
        updateData(userTokenKey, userToken)
        updateData(osKey, params["os"], false)
        updateData(userIdKey, params["userId"], false)
        updateData(osVersionKey, params["osVersion"], false)
    }
}

function getParams() {
    url = $request.url
    query = url.substring(url.indexOf("?") + 1, url.length).split('&')
    var params = {}
    for (let i = 0; i < query.length; i++) {
        let q = query[i].split('=')
        if (q.length === 2) {
            params[q[0]] = q[1]
        }
    }
    return params
}

async function jobWork() {
    load_query_params()
    // await req_product_search()
    await get_default_address()

}

async function req_product_search() {
    merge.req_product_search = {};
    fc_url = await get_invoke_url("/xgt-app/applet/product/search", {
        "categoryId": "868250804694396928",
        "topLevelId": "868250804392407040",
        "keyword": null,
        "page": 1,
        "size": 10,
        "sort": null,
        "mobile": null,
        "levelId": null,
        "levelCode": null,
        "integralType": null
    })
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            $nobyda.post(fc_url, function (error, response, data) {
                try {
                    // console.log(`获取商品列表：${data}`)
                    if (response.status !== 200) {
                        console.log(`获取商品列表失败: response.status=${response.status}`)
                        return resolve({})
                    }
                    return resolve(data)
                    // result = JSON.parse(data)
                    // if (result.code === 200) {
                    //     $nobyda.notify(appName, result.code, result.message)
                    //     return resolve(result.data)
                    // }
                    // throw new Error()
                } catch (eor) {
                    $nobyda.AnError("获取商品列表", "req_product_search", eor, response, data)
                }
            })
        }, 500)
    }).then(data => {
        return data
    }, () => {
    });
}

function load_query_params() {
    query_params = {
        "os": $nobyda.read(osKey),
        "osVersion": $nobyda.read(osVersionKey),
        "userId": $nobyda.read(userIdKey),
        "userToken": $nobyda.read(userTokenKey),
    }
}

async function get_default_address() {
    invoke_count = 0
    while (true) {
        invoke_count++
        console.log(`\n>>>  获取默认地址信息, 第${invoke_count}次  <<<`)
        result = await req_default_address()
        console.log(`address id: ${result.id}`)
        console.log(`address mobile: ${result.mobile}`)
        if (result.mobile !== undefined) {
            consignee = {
                "address": result.id,
                "addressId": result.id,
                "mobile": result.mobile,
                "name": result.name
            }
            break
            // code = await parse_base_image(result.baseImage)
            // uuid = result.uuid
            // console.log(`解析验证码: code= ${code}, uuid= ${uuid}`)
            // return {
            //     "code": code,
            //     "uuid": uuid
            // }
            // break;
        }
    }
}

async function order_settlement(consignee){
    invoke_count = 0
    while (true) {
        invoke_count++
        console.log(`\n>>>  提交订单, 第${invoke_count}次  <<<`)
        result = await req_default_address()
        console.log(`address id: ${result.id}`)
        console.log(`address mobile: ${result.mobile}`)
        if (result.mobile !== undefined) {
            break
            // code = await parse_base_image(result.baseImage)
            // uuid = result.uuid
            // console.log(`解析验证码: code= ${code}, uuid= ${uuid}`)
            // return {
            //     "code": code,
            //     "uuid": uuid
            // }
            // break;
        }
    }
}

async function req_order_settlement(params){
    merge.req_order_settlement = {};
    fc_url = await get_invoke_url("/xgt-app/applet/order/orderSettlement", params)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            $nobyda.post(fc_url, function (error, response, data) {
                try {
                    if (response.status !== 200) {
                        console.log(`提交订单失败: response.status=${response.status}`)
                        return resolve({"code": response.status})
                    }
                    result = JSON.parse(data)
                    if (result.code === 200) {
                        return resolve(result.data)
                    }
                    return resolve({"code": result.code, "msg": result.msg})
                } catch (eor) {
                    $nobyda.AnError("提交订单", "req_order_settlement", eor, response, data)
                }
            })
        }, 0)
    }).then(data => {
        return data
    }, () => {
    });
}


async function req_address() {
    merge.req_address = {};
    fc_url = await get_invoke_url("/xgt-app/applet/personalCenter/getAllAddress", {"page":0,"size":10})
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            $nobyda.post(fc_url, function (error, response, data) {
                try {
                    // console.log(`req_default_address：${data}`)
                    if (response.status !== 200) {
                        console.log(`获取地址信息失败: response.status=${response.status}`)
                        return resolve({})
                    }
                    // result = JSON.parse(data)
                    // if (result.code === 200) {
                    //     $nobyda.notify(appName, result.code, result.message)
                    //     return resolve(result.data)
                    // }
                    throw new Error()
                } catch (eor) {
                    $nobyda.AnError("获取地址", "req_address", eor, response, data)
                }
            })
        }, 500)
    }).then(data => {
        return data
    }, () => {
    });
}

async function req_default_address() {
    merge.req_default_address = {};
    fc_url = await get_invoke_url("/xgt-app/applet/personalCenter/findDefaultAddress", {})
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            $nobyda.post(fc_url, function (error, response, data) {
                try {
                    if (response.status !== 200) {
                        console.log(`获取默认地址信息失败: response.status=${response.status}`)
                        return resolve({})
                    }
                    console.log(`address: ${data}`)
                    result = JSON.parse(data)
                    if (result.code === 200) {
                        return resolve(result.data)
                    }
                    throw new Error()
                } catch (eor) {
                    $nobyda.AnError("获取默认地址", "req_default_address", eor, response, data)
                }
            })
        }, 0)
    }).then(data => {
        return data
    }, () => {
    });
}


async function do_zhg() {
    result = await get_people_code()
    uuid = result.uuid
    code = result.code
    orgId = orgMap.贵州航食
    invoke_count = 0
    while (true) {
        invoke_count++
        console.log(`\n>>>  提交预约, 第${invoke_count}次  <<<`)
        success = await req_do_people(orgId, uuid, code)
        if (success) {
            console.log("脚本执行完成🎉")
            break
        }
    }
}

async function get_people_code() {
    invoke_count = 0
    while (true) {
        invoke_count++
        console.log(`\n>>>  获取验证码, 第${invoke_count}次  <<<`)
        result = await req_people_code()
        if (result.baseImage !== undefined) {
            code = await parse_base_image(result.baseImage)
            uuid = result.uuid
            console.log(`解析验证码: code= ${code}, uuid= ${uuid}`)
            return {
                "code": code,
                "uuid": uuid
            }
            break;
        }
    }
}

async function req_do_people(orgId, uuid, code) {
    merge.req_do_people = {};
    console.log(`预约参数: orgId= ${orgId}, uuid= ${uuid}, code= ${code}`)
    fc_url = await get_invoke_url("https://prod.ggszhg.com/api/consumer/pro/doPeople", {
        "orgId": orgId,
        "uuid": uuid,
        "code": code
    })
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            $nobyda.post(fc_url, function (error, response, data) {
                try {
                    if (response.status !== 200) {
                        console.log(`提交预约失败: response.status=${response.status}`)
                        return resolve(false)
                    }
                    result = JSON.parse(data)
                    if (result.code === 0) {
                        $nobyda.notify(appName, result.code, result.message)
                        return resolve(true)
                    }
                    throw new Error()
                    // return resolve(false)
                } catch (eor) {
                    $nobyda.AnError("提交预约", "req_do_people", eor, response, data)
                }
            })
        }, 500)
    }).then(data => {
        return data
    }, () => {
    });
}


async function req_people_code() {
    merge.req_people_code = {};
    fc_url = await get_invoke_url("https://prod.ggszhg.com/api/consumer/pro/peopleCode", {})
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            $nobyda.post(fc_url, function (error, response, data) {
                try {
                    is_mock = false
                    if (response.status == 404) {
                        console.log("<<< 获取验证码404，生成mock数据 >>>")
                        data = JSON.stringify({
                            "message": "操作成功",
                            "code": 0,
                            "data": {
                                "baseImage": "",
                                "uuid": "89a6e906b5dd49eda209cdd84f6952aa"
                            }
                        })
                        is_mock = true
                    }

                    if (!is_mock && response.status !== 200) {
                        console.log(`请求验证码失败: response.status=${response.status}`)
                        return resolve()
                    }

                    result = JSON.parse(data)
                    if (result.code === 0) {
                        return resolve(result.data)
                    }
                    throw new Error()
                } catch (eor) {
                    $nobyda.AnError("获取验证码", "req_people_code", eor, response, data)
                }
            })
        }, 500)
    }).then(data => {
        data = data === undefined ? {} : data
        return {
            baseImage: data.baseImage,
            uuid: data.uuid
        }
    }, () => {
    });
}


async function parse_base_image(base64Image) {
    merge.parse_base_image = {};
    console.log("start parse_base_image >>>")
    fc_url = {
        headers: {},
        url: 'http://api.ttshitu.com/predict',
        body: {
            username: 'itdragons',
            password: '2312321',
            typeid: '3',
            image: base64Image
        }
    }
    return new Promise((resolve, reject) => {
        $nobyda.post(fc_url, function (error, response, data) {
            try {
                if (error) {
                    throw new Error(error)
                }
                return resolve(data)
            } catch (eor) {
                $nobyda.AnError("解析验证码失败", "parse_base_image", eor, response, data)
            }
        })
    }).then(data => {
        dataOjb = JSON.parse(data)
        return dataOjb.data.result
    }, () => {
    });
}


async function get_invoke_url(req_url, req_params) {
    sign_params = await get_sign_params(req_params)
    req_url = populate_req_url(req_url, sign_params.sign)
    result = {
        url: req_url,
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(req_params)
    }
    return result
}

function populate_req_url(url, sign) {
    return `https://prod.ggszhg.com${url}?os=${query_params.os}&osVersion=${query_params.osVersion}&userId=${query_params.userId}&userToken=${query_params.userToken}&sign=${sign}`
}

function get_req_headers() {
    return {
    }
}

async function get_user_info() {
    merge.get_user_info = {};
    console.log("start get_user_info!")
    req_url = "https://prod.ggszhg.com/api/consumer/user/info"
    req_params = {
        "queryArray": [{
            "orderType": 1,
            "status": 0
        }, {
            "orderType": 1,
            "status": 10,
            "shipMode": 1
        }, {
            "orderType": 1,
            "status": 12,
            "shipMode": 1
        }, {
            "orderType": 1,
            "status": 10,
            "shipMode": 2
        }, {
            "orderType": 1,
            "status": 11,
            "shipMode": 2
        }, {
            "orderType": 2,
            "status": 0
        }, {
            "orderType": 2,
            "status": 10
        }, {
            "orderType": 2,
            "status": 11,
            "shipMode": 1
        }, {
            "orderType": 2,
            "status": 11,
            "shipMode": 2
        }, {
            "orderType": 2,
            "status": 13
        }]
    }
    fc_url = await get_invoke_url(req_url, req_params)
    $nobyda.post(fc_url, function (error, response, data) {
        try {
            if (error || response.status !== 200) {
                throw new Error(error)
            }
            dataObj = JSON.parse(data)
            if (dataObj.code === 0) {
                userInfo = dataObj.data.userInfo
                $nobyda.notify(appName, userInfo.trueName, userInfo.cardNo)
            }

        } catch (eor) {
            $nobyda.AnError("获取用户信息", "get_user_info", eor, response, data)
        }
    })
}

async function get_sign_params(params) {
    merge.get_sign_params = {};
    const fc_url = {
        url: `https://1198853003001738.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/scripts/zhg/`,
        headers: {
            "Content-Type": `application/json`,
            "zhg_user_id": query_params.userId,
            "zhg_user_token": query_params.userToken,
            "zhg_params": JSON.stringify(params)
        },
        body: params
    };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            $nobyda.post(fc_url, function (error, response, data) {
                try {
                    if (error) {
                        throw new Error(error)
                    }
                    return resolve(data)
                } catch (eor) {
                    $nobyda.AnError("获取签名参数", "get_sign_params", eor, response, data)
                }
            })
        }, 0)
    }).then(data => {
        return JSON.parse(data)
    }, () => {
    });
}

function is_error_code(code) {
    // 115: tokeon失效
    // 104: 当前时间不在预约时段内
    error_codes = [115, 104]
    return error_codes.indexOf(code) !== -1
}

function updateData(key, value, isNotify = true) {
    try {
        value = value !== undefined ? value : ""
        let dataRead = $nobyda.read(key)
        let notifyMsg = ""
        success = false
        if (dataRead) {
            if (dataRead !== value) {
                if ($nobyda.write(value, key)) {
                    success = true
                    notifyMsg = "更新" + key + "数据成功 🎉"
                } else {
                    notifyMsg = "更新" + key + "数据失败 ‼️"
                }
            }
        } else {
            if (!$nobyda.write(value, key)) {
                success = true
                notifyMsg = "首次写入" + key + "数据失败 ‼️"
            } else {
                notifyMsg = "首次写入" + key + "数据成功 🎉"
            }
        }
        if (isNotify && notifyMsg !== '') {
            $nobyda.notify(appName, "", notifyMsg);
        }
        return success
    } catch (eor) {
        $nobyda.write("", key)
        $nobyda.notify(appName, "写入" + key + "数据失败", '已尝试清空历史数据, 请重试 ⚠️')
        console.log(`\n"写入${key}数据出现错误 ‼️\n${JSON.stringify(eor)}\n\n${eor}\n\n${JSON.stringify($request.headers)}\n`)
    }
}

function formatDate(date) {
    let myyear = date.getFullYear();
    let mymonth = date.getMonth() + 1;
    let myweekday = date.getDate();

    if (mymonth < 10) {
        mymonth = "0" + mymonth;
    }
    if (myweekday < 10) {
        myweekday = "0" + myweekday;
    }
    return (myyear + "-" + mymonth + "-" + myweekday);
}


function nobyda() {
    const start = Date.now()
    const isRequest = typeof $request != "undefined"
    const isSurge = typeof $httpClient != "undefined"
    const isQuanX = typeof $task != "undefined"
    const isLoon = typeof $loon != "undefined"
    const isJSBox = typeof $app != "undefined" && typeof $http != "undefined"
    const isNode = typeof require == "function" && !isJSBox;
    const NodeSet = 'CookieSet.json'
    const node = (() => {
        if (isNode) {
            const request = require('request');
            const fs = require("fs");
            return ({
                request,
                fs
            })
        } else {
            return (null)
        }
    })()
    const notify = (title, subtitle, message, rawopts) => {
        const Opts = (rawopts) => { //Modified from https://github.com/chavyleung/scripts/blob/master/Env.js
            if (!rawopts) return rawopts
            if (typeof rawopts === 'string') {
                if (isLoon) return rawopts
                else if (isQuanX) return {
                    'open-url': rawopts
                }
                else if (isSurge) return {
                    url: rawopts
                }
                else return undefined
            } else if (typeof rawopts === 'object') {
                if (isLoon) {
                    let openUrl = rawopts.openUrl || rawopts.url || rawopts['open-url']
                    let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
                    return {
                        openUrl,
                        mediaUrl
                    }
                } else if (isQuanX) {
                    let openUrl = rawopts['open-url'] || rawopts.url || rawopts.openUrl
                    let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
                    return {
                        'open-url': openUrl,
                        'media-url': mediaUrl
                    }
                } else if (isSurge) {
                    let openUrl = rawopts.url || rawopts.openUrl || rawopts['open-url']
                    return {
                        url: openUrl
                    }
                }
            } else {
                return undefined
            }
        }
        console.log(`${title}\n${subtitle}\n${message}`)
        if (isQuanX) $notify(title, subtitle, message, Opts(rawopts))
        if (isSurge) $notification.post(title, subtitle, message, Opts(rawopts))
        if (isJSBox) $push.schedule({
            title: title,
            body: subtitle ? subtitle + "\n" + message : message
        })
    }
    const write = (value, key) => {
        if (isQuanX) return $prefs.setValueForKey(value, key)
        if (isSurge) return $persistentStore.write(value, key)
        if (isLoon) return $peristentStore.write(value, key)
        if (isNode) {
            try {
                if (!node.fs.existsSync(NodeSet)) node.fs.writeFileSync(NodeSet, JSON.stringify({}));
                const dataValue = JSON.parse(node.fs.readFileSync(NodeSet));
                if (value) dataValue[key] = value;
                if (!value) delete dataValue[key];
                return node.fs.writeFileSync(NodeSet, JSON.stringify(dataValue));
            } catch (er) {
                return AnError('Node.js持久化写入', null, er);
            }
        }
        if (isJSBox) {
            if (!value) return $file.delete(`shared://${key}.txt`);
            return $file.write({
                data: $data({
                    string: value
                }),
                path: `shared://${key}.txt`
            })
        }
    }
    const read = (key) => {
        if (isQuanX) return $prefs.valueForKey(key)
        if (isSurge) return $persistentStore.read(key)
        if (isLoon) return $peristentStore.read(key);
        if (isNode) {
            try {
                if (!node.fs.existsSync(NodeSet)) return null;
                const dataValue = JSON.parse(node.fs.readFileSync(NodeSet))
                return dataValue[key]
            } catch (er) {
                return AnError('Node.js持久化读取', null, er)
            }
        }
        if (isJSBox) {
            if (!$file.exists(`shared://${key}.txt`)) return null;
            return $file.read(`shared://${key}.txt`).string
        }
    }
    const adapterStatus = (response) => {
        if (response) {
            if (response.status) {
                response["statusCode"] = response.status
            } else if (response.statusCode) {
                response["status"] = response.statusCode
            }
        }
        return response
    }
    const get = (options, callback) => {
        options.headers['User-Agent'] = UserAgent
        if (isQuanX) {
            if (typeof options == "string") options = {
                url: options
            }
            options["method"] = "GET"
            //options["opts"] = {
            //  "hints": false
            //}
            $task.fetch(options).then(response => {
                callback(null, adapterStatus(response), response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) {
            options.headers['X-Surge-Skip-Scripting'] = false
            $httpClient.get(options, (error, response, body) => {
                callback(error, adapterStatus(response), body)
            })
        }
        if (isNode) {
            node.request(options, (error, response, body) => {
                callback(error, adapterStatus(response), body)
            })
        }
        if (isJSBox) {
            if (typeof options == "string") options = {
                url: options
            }
            options["header"] = options["headers"]
            options["handler"] = function (resp) {
                let error = resp.error;
                if (error) error = JSON.stringify(resp.error)
                let body = resp.data;
                if (typeof body == "object") body = JSON.stringify(resp.data);
                callback(error, adapterStatus(resp.response), body)
            };
            $http.get(options);
        }
    }
    const post = (options, callback) => {
        options.headers['User-Agent'] = UserAgent
        options.headers['accept'] = "*/*"
        // options.headers['Content-Type'] = "application/json;charset=utf-8"
        if (isQuanX) {
            if (typeof options == "string") options = {
                url: options
            }
            options["method"] = "POST"
            $task.fetch(options).then(response => {
                callback(null, adapterStatus(response), response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) {
            $httpClient.post(options, (error, response, body) => {
                callback(error, adapterStatus(response), body)
            })
        }
        if (isNode) {
            node.request.post(options, (error, response, body) => {
                callback(error, adapterStatus(response), body)
            })
        }
        if (isJSBox) {
            if (typeof options == "string") options = {
                url: options
            }
            options["header"] = options["headers"]
            options["handler"] = function (resp) {
                let error = resp.error;
                if (error) error = JSON.stringify(resp.error)
                let body = resp.data;
                if (typeof body == "object") body = JSON.stringify(resp.data)
                callback(error, adapterStatus(resp.response), body)
            }
            $http.post(options);
        }
    }
    const AnError = (name, keyname, er, resp, body) => {
        if (typeof (merge) != "undefined" && keyname) {
            if (!merge[keyname].notify) {
                merge[keyname].notify = `${name}: 异常, 已输出日志 ‼️`
            } else {
                merge[keyname].notify += `\n${name}: 异常, 已输出日志 ‼️ (2)`
            }
            merge[keyname].error = 1
        }
        return console.log(`\n‼️${name}发生错误\n‼️名称: ${er.name}\n‼️描述: ${er.message}${JSON.stringify(er).match(/\"line\"/) ? `\n‼️行列: ${JSON.stringify(er)}` : ``}${resp && resp.status ? `\n‼️状态: ${resp.status}` : ``}${body ? `\n‼️响应: ${resp && resp.status !== 503 ? body : `Omit.`}` : ``}`)
    }
    const time = () => {
        const end = ((Date.now() - start) / 1000).toFixed(2)
        return console.log('\n执行用时: ' + end + ' 秒')
    }
    const done = (value = {}) => {
        if (isQuanX) return $done(value)
        if (isSurge) isRequest ? $done(value) : $done()
    }
    return {
        AnError,
        isRequest,
        isJSBox,
        isSurge,
        isQuanX,
        isLoon,
        isNode,
        notify,
        write,
        read,
        get,
        post,
        time,
        done
    }
};