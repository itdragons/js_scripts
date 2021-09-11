/*
健康西安

> 代码已同时兼容 Surge & QuanX & Loon, 使用同一份脚本即可


## 配置 (Surge & Loon)

```properties
[MITM]
yqpt.xa.gov.cn

[Script]
http-request ^https\:\/\/yqpt\.xa\.gov\.cn\/neusoft-appt\/appt-vfic\/app\/* script-path=jkxa.js
cron "0,30 7-15 * * *" script-path=jkxa.js
```

## 配置 (QuanX)

```properties
[MITM]
yqpt.xa.gov.cn

[rewrite_local]
^https\:\/\/yqpt\.xa\.gov\.cn\/neusoft-appt\/appt-vfic\/app\/*  url script-request-header jkxa.js

[task_local]
0,30 7-15 * * * jkxa.js
```

## 说明

1. 先把yqpt.xa.gov.cn`加到`[MITM]`
2. 再配置重写规则:
   - Surge: 把脚本放到`[Script]`
   - QuanX: 把`jkxa.js`传到`On My iPhone - Quantumult X - Scripts` (传到 iCloud 相同目录也可, 注意要打开 quanx 的 iCloud 开关)


> 进入`健康西安`小程序，点`我的预约`，脚本会获取cookie信息。进入个人新冠疫苗接种页面，脚本会更新经纬度信息。

> 每天7点到15点【0分、30分】各执行一次.
*/

//vaccinateTime 0不限制 n表示只打第n针
//limitVmCode 5601:Vero  5603:CHO
const appName = '健康西安'
const AuthorizationKey = 'jkxa_Authorization'
const longitudeKey = 'jkxa_longitude'
const latitudeKey = 'jkxa_latitude'

const vaccinateTimesKey = 'jkxa_vaccinateTimes'
const limitVmCodeKey = 'jkxa_limitVmCode'


const requestKey = 'jkxa_request'

const UserAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.6(0x18000632) NetType/WIFI Language/zh_CN'


var $nobyda = nobyda();
merge = {};

if (typeof $request != "undefined") {
    loadUserInfo()
} else {
    jobWork().then(() => {})
}

async function jobWork() {
    await getProjectList(1)
    await getProjectList(2)
    await getProjectList(3)
}

function isMatchFilter(item){
    vaccinateTimes = $nobyda.read(vaccinateTimesKey)
    limitVmCode = $nobyda.read(limitVmCodeKey)
    hasVaccinateTimes = vaccinateTimes !== undefined
    hasLimitVmCode = limitVmCode !== undefined
    if (!hasVaccinateTimes && !hasLimitVmCode){
        return true
    }
    isMatchLimitVmCode = true
    if (hasLimitVmCode){
        // console.log(`item.limitVmCode: ${item.limitVmCode}`)
        isMatchLimitVmCode = limitVmCode === item.limitVmCode
    }
    isMatchVaccinateTime = true
    if (hasVaccinateTimes){
        // console.log(`item.vaccinateTime: ${item.vaccinateTime}`)
        isMatchVaccinateTime = item.vaccinateTime === 0 || vaccinateTimes.indexOf(item.vaccinateTime) !== -1
    }
    isMatch = isMatchLimitVmCode && isMatchVaccinateTime
    console.log(`${item.collectLocationName} -> ${item.fullName} -> ${isMatch ? "next": "jump"}`)
    return isMatch
}

function getProjectList(pageNum) {
    merge.apptProjectList = {};
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apptProjectListUrl = {
                url: `https://yqpt.xa.gov.cn/neusoft-appt/appt-vfic/app/getApptProjectList?projectType=1&pageSize=10&pageNum=${pageNum}`,
                headers: {
                    Authorization: $nobyda.read(AuthorizationKey),
                    "Content-Type": `application/json`
                },
                body: {
                    "longitude": $nobyda.read(longitudeKey),
                    "latitude": $nobyda.read(latitudeKey),
                }
            };
            console.log(`\n\n开始获取接种点列表数据: 第 ${pageNum} 页\n\n`)
            $nobyda.post(apptProjectListUrl, async function (error, response, data) {
                try {
                    if (error) {
                        throw new Error(error)
                    } else {
                        let dataObj = JSON.parse(data)
                        if (200 !== dataObj.code) {
                            return $nobyda.notify(appName, "", `获取接种点列表失败,code:${dataObj.code}`)
                        }
                        for (const item of dataObj.data) {
                            if (isMatchFilter(item)){
                                await getProjectInfo(item.projectId, item.collectLocationName)
                            }
                        }
                    }
                } catch (eor) {
                    $nobyda.notify(appName, "", "获取接种点列表异常‼️")
                    $nobyda.AnError("获取接种点列表", "apptProjectList", eor, response, data)
                } finally {
                    reject()
                }
            })
        }, 0)
    }).then(data => {
    }, () => {
    });
}

function getProjectInfo(projectId, projectName) {
    merge.projectInfo = {};
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const projectInfoUrl = {
                url: `https://yqpt.xa.gov.cn/neusoft-appt/appt-vfic/app/getProjectInfoById`,
                headers: {
                    Authorization: $nobyda.read(AuthorizationKey),
                    "Content-Type": `application/json`
                },
                body: {
                    "date": formatDate(new Date()),
                    "projectId": projectId,
                }
            };
            $nobyda.post(projectInfoUrl, async function (error, response, data) {
                try {
                    if (error) {
                        throw new Error(error)
                    } else {
                        let dataObj = JSON.parse(data)
                        if (200 !== dataObj.code) {
                            return $nobyda.notify(appName, "", `获取接种点详情失败,code:${dataObj.code}`)
                        }
                        for (const dayItem of dataObj.data.dayList) {
                            for (const timeItem of dayItem.time) {
                                remaining = timeItem.sumCount - timeItem.apptCount
                                if (remaining !== 0) {
                                    return $nobyda.notify(appName, "", `${projectName} 剩余${remaining}个预约名额 🎉`)
                                }
                            }
                        }
                    }
                } catch (eor) {
                    $nobyda.notify(appName, "", "获取接种点详情异常‼️")
                    $nobyda.AnError("获取接种点详情", "projectInfo", eor, response, data)
                } finally {
                    reject()
                }
            })
        }, 2000)
    }).then(data => {
    }, () => {
    });
}

function loadUserInfo() {
    if ($request.method === 'OPTIONS') {
        return
    }
    try {
        if ($request.headers && $request.url.indexOf("getApptList") !== -1) {
            loadAuthorization()
        }
        if ($request.url.indexOf("getApptProjectList") !== -1) {
            loadLatitudeAndLongitude()
            loadConfigFromReqUrl()
        }
    } finally {
        $nobyda.done()
    }
}

function loadConfigFromReqUrl(){
    let collectLocationName = getQueryString($request.url, "collectLocationName");
    if (collectLocationName === undefined || collectLocationName === ''){
        return
    }
    name = ""
    vaccinateTimes = collectLocationName
    if(collectLocationName.indexOf('V') !== -1 || collectLocationName.indexOf('v') !== -1){
        name = "Vero两针疫苗:"
        updateData(limitVmCodeKey, "5601")
        vaccinateTimes = collectLocationName.substr(1)
    }
    else if(collectLocationName.indexOf('c') !== -1 || collectLocationName.indexOf('C') !== -1){
        name = "CHO三针疫苗:"
        updateData(limitVmCodeKey, "5603")
        vaccinateTimes = collectLocationName.substr(1)
    } else {
        updateData(limitVmCodeKey, "")
    }
    updateData(vaccinateTimesKey, vaccinateTimes)
    $nobyda.notify(appName, "监控配置", name + "第" + vaccinateTimes + "针余量");
}

function loadLatitudeAndLongitude() {
    console.log("开始获取经纬度");
    updateData(longitudeKey, getQueryString($request.url, "longitude"))
    updateData(latitudeKey, getQueryString($request.url, "latitude"), "经纬度")
}

function loadAuthorization() {
    console.log("开始获取Authorization");
    let AuthorizationValue = $request.headers['Authorization'];
    updateData(AuthorizationKey, AuthorizationValue)
}

function updateData(key, value, notifyContent = "") {
    try {
        value = value !== undefined ? value : ""
        let dataRead = $nobyda.read(key)
        let notifyMsg = ""
        if (dataRead) {
            if (dataRead !== value) {
                if ($nobyda.write(value, key)) {
                    notifyMsg = "更新" + notifyContent + "数据成功 🎉"
                } else {
                    notifyMsg = "更新" + notifyContent + "数据失败 ‼️"
                }
            }
        } else {
            if (!$nobyda.write(value, key)) {
                notifyMsg = "首次写入" + notifyContent + "数据失败 ‼️"
            } else {
                notifyMsg = "首次写入" + notifyContent + "数据成功 🎉"
            }
        }
        if (notifyContent !== '' && notifyMsg !== '') {
            $nobyda.notify(appName, "", notifyMsg);
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
