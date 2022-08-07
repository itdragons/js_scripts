/*
机场云商

> 代码已同时兼容 Surge & QuanX & Loon, 使用同一份脚本即可


## 配置 (Surge & Loon)

```properties
[MITM]
www.gza-e.com

[Script]
http-request ^https\:\/\/yqpt\.xa\.gov\.cn\/neusoft-appt\/appt-vfic\/app\/* script-path=jcys.js
cron "0,30 7-15 * * *" script-path=jcys.js
```

## 配置 (QuanX)

```properties
[MITM]
www.gza-e.com

[rewrite_local]
^https\:\/\/yqpt\.xa\.gov\.cn\/neusoft-appt\/appt-vfic\/app\/*  url script-request-header jcys.js

[task_local]
0,30 7-15 * * * jcys.js
```

## 说明

1. 先把www.gza-e.com`加到`[MITM]`
2. 再配置重写规则:
   - Surge: 把脚本放到`[Script]`
   - QuanX: 把`jcys.js`传到`On My iPhone - Quantumult X - Scripts` (传到 iCloud 相同目录也可, 注意要打开 quanx 的 iCloud 开关)


> 进入`健康西安`小程序，点`我的预约`，脚本会获取cookie信息。进入个人新冠疫苗接种页面，脚本会更新经纬度信息。

> 每天7点到15点【0分、30分】各执行一次.
*/

const appName = '机场云商'
const accessTokenKey = 'jcys_accessToken'
const mobileKey = 'jcys_mobile'

const UserAgent = ' Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.12(0x18000c25) NetType/WIFI Language/zh_CN'

const orgMap = {
    贵州航食: "727549979857518592",
    贵州空港新元: "817425775685795840"
}

var $nobyda = nobyda();
merge = {};

if (typeof $request != "undefined") {
    loadUserInfo()
    $nobyda.done($request);
} else {
    console.log("start job working!")
    jobWork().then(() => {
        $nobyda.done()
    })
}


function loadUserInfo() {
    if ($request.method === 'OPTIONS') {
        return
    }
    if ($request.headers) {
        loadAuthorization()
    }
}

function loadAuthorization() {
    accessToken = $request.headers['accessToken']
    if (typeof accessToken === "undefined") {
        return
    }
    console.log("accessToken:" + accessToken)
    updateData(accessTokenKey, accessToken)
}

async function jobWork() {
    // await get_user_info()
    await do_jcys()
}

async function do_jcys() {
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
    fc_url = await get_invoke_url("https://www.gza-e.com/api/consumer/pro/doPeople", {"orgId": orgId, "uuid": uuid, "code": code})
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
    }, () => {});
}


async function req_people_code() {
    merge.req_people_code = {};
    fc_url = await get_invoke_url("https://www.gza-e.com/api/consumer/pro/peopleCode", {})
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
                                "baseImage": "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",
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
    }, () => {});
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
    }, () => {});
}


async function get_invoke_url(req_url, req_params) {
    sign_params = await get_sign_params(req_url, req_params)
    result = {
        url: req_url,
        headers: get_req_headers(sign_params),
        body: req_params
    }
    console.log(`get_invoke_url finished: ${req_url}`)
    return result
}

function get_req_headers(sign_params) {
    return {
        "Content-Type": `application/json`,
        "accessToken": $nobyda.read(accessTokenKey),
        "timestamp": sign_params.timestamp,
        "nonceStr": sign_params.nonceStr,
        "sign": sign_params.sign,
        "Referer": "https://servicewechat.com/wx88c590140de89f92/81/page-frame.html",
        "Accept-Encoding": "gzip,compress,br,deflate",
    }
}

async function get_user_info() {
    merge.get_user_info = {};
    console.log("start get_user_info!")
    req_url = "https://www.gza-e.com/api/consumer/user/info"
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

async function get_sign_params(url, params) {
    merge.get_sign_params = {};
    const fc_url = {
        url: `https://1198853003001738.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/scripts/jcys/`,
        headers: {
            "Content-Type": `application/json`,
            "ys_access_token": $nobyda.read(accessTokenKey),
            "ys_url": url,
            "ys_params": JSON.stringify(params)
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
    }, () => {});
}

function is_error_code(code) {
    // 115: tokeon失效
    // 104: 当前时间不在预约时段内
    error_codes = [115, 104]
    return error_codes.indexOf(code) !== -1
}

function updateData(key, value) {
    try {
        let dataRead = $nobyda.read(key)
        if (dataRead) {
            if (dataRead !== value) {
                if (!$nobyda.write(value, key)) {
                    $nobyda.notify(appName, "", "更新" + key + "数据失败 ‼️");
                } else {
                    $nobyda.notify(appName, "", "更新" + key + "数据成功 🎉");
                }
            }
        } else {
            if (!$nobyda.write(value, key)) {
                $nobyda.notify(appName, "", "首次写入" + key + "数据失败 ‼️");
            } else {
                $nobyda.notify(appName, "", "首次写入" + key + "数据成功 🎉");
            }
        }
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


function getQueryString(url, name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    let r = url.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
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
        // if (options.body) options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
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
            // options.headers['X-Surge-Skip-Scripting'] = false
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