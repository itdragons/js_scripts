const $tool = tool();
const reqUrl = getReqUrl();
const functionId = getReqFunctionId()
const jdCookieKey = "jdCookie"
const jdServerConfigReqBodyKey = 'jdServerConfigReqBody'

// 请求
if ($tool.isRequest) {

    if (functionId == "cart") {
        console.log(currentDate())
        sleep(500)
        $done();
    }
    /* cart 接口响应时间，4G：150-170ms， wifi： 90-120
     4G
     success: 1:00, 00:500, 00:200, 0:00(2)
     failed: 59:800, 59:900, 59:950
    *******************************************************
     WIFI 下单到付款2s
     00:500(1), 00:350(6,-3), 00:300(3,-1), 00:290(4,-2), 00:250(,-1), 00:200(2,-2), 00:150(1,-3), 00:120(2,-1), 00:100(5,-2), 00:80(1,-1), 00:50(,-1)
    */
    if (functionId == "submitOrder") {
        console.log("提交订单Request")
        while (true) {
            let dd = new Date()
            let seconds = dd.getSeconds()
            let milliSeconds = dd.getMilliseconds()
            if (seconds == 0 && milliSeconds >= 365) {
                console.log(seconds + 's:' + milliSeconds)
                $done();
            }
        }
    }
    // if (functionId == 'platJDPayAcc') {
    //     console.log("进入支付页面 Request")
    //     console.log(currentDate())
    // }
    if (functionId == "serverConfig") {
        $tool.write($request.headers.Cookie, jdCookieKey)
        $tool.write($request.body, jdServerConfigReqBodyKey)
    }
    $done();
}

// 响应
if ($tool.isResponse) {
    const body = $response.body;

    if (functionId == "cart") {
        let obj = JSON.parse(body);
        if (obj["cartInfo"] && obj["cartInfo"]["vendors"]) {
            obj["cartInfo"]["vendors"][0].shopName = currentDate() + "_" + obj["cartInfo"]["vendors"][0].shopName
        }
        console.log("cart rewrite:" +  JSON.stringify(obj))
        $done({ body: JSON.stringify(obj) });
    }
    
    
    if (functionId == "serverConfig") {
        let obj = JSON.parse(body);
        delete obj.serverConfig.httpdns;
        delete obj.serverConfig.dnsvip;
        delete obj.serverConfig.dnsvip_v6;
        // let localDate = new Date()
        // let serverTime = obj.serverConfig.currentTime;
        // if (serverTime) {
        //     let jdDate = new Date(serverTime);
        //     let dateDiff = localDate - jdDate;
        //     let msg = `Local Time: ${dateFormat(localDate)}\nJd Time: ${dateFormat(jdDate)}`
        //     $tool.notify("Jd ServerConfig", msg, `Local time Vs Jd：${dateDiff}\n` + JSON.stringify($request));
        //     console.log("JD Time:" + dateFormat(jdDate));
        //     console.log("Local Time:" + dateFormat(localDate));
        //     console.log("Local vs Jd：" + dateDiff);
        // }
        $done({ body: JSON.stringify(obj) });
    }
    
    if (functionId == "basicConfig") {
        // console.log(basicConfigPath + ":" +  body)
        let obj = JSON.parse(body);
        let JDHttpToolKit = obj.data.JDHttpToolKit;
        if (JDHttpToolKit) {
            delete obj.data.JDHttpToolKit.httpdns;
            delete obj.data.JDHttpToolKit.dnsvipV6;
        }
        $done({ body: JSON.stringify(obj) });
    }

    if (functionId == 'platPayResult') {
        console.log('获取支付结果时间：' + currentDate())
    }
    $done();
}



// run
if ($tool.isRun) {
    console.log("run: ")
    printSupportPromise()
    // let cookie = $tool.read(jdCookieKey)
    // let serverConfigReqBody = $tool.read(jdServerConfigReqBodyKey)
    // console.log(`cookie: ${cookie}`)
    // console.log(`serverConfigReqBody: ${serverConfigReqBody}`)
    let msg = "";
    // request_serverConfig().then((data) => {
    //     msg = data
    // })
    // .catch((error) => (msg = "获取失败"))
    // .finally(() => {
    //     console.log(msg)
    //     $done();
    // });
    // const options = {
    //     headers: {
    //         "Content-Type": "application/json; charset=utf-8",
    //         // "User-Agent": "JD4iPhone/11.4.0 CFNetwork/1402.0.8 Darwin/22.2.0",
    //         "Cookie": $tool.read(jdCookieKey)
    //     },
    //     body: $tool.read(jdServerConfigReqBodyKey),
    //     url: 'https://api.hnbmc.com/app/login'
    //     // url: "https://api.m.jd.com/client.action?functionId=serverConfig"
    // }
    // options = {
    //     headers: {},
    //     url: 'https://api.hnbmc.com/app/login',
    //     body: {
    //         username: 'username',
    //         password: '123'
    //     }
    // }
    // console.log(`option: ${options}`)

    // $tool.post(options, function (error, response, data) {
    //     console.log(`response: ${response}`)
    // })
    submitUser(1)

    // $done()
}


function submitUser(userId) {
    let userInfo = {
        "name": 'itdragons'
    }
    console.log('userInfo:' + JSON.stringify(userInfo))
    fc_url = {
        headers: {},
        url: 'http://192.168.31.207:5000/apis/jcys/user/sync',
        body: {
            userId: userId
        }
    }
    console.log("fc_url：" + fc_url.url)
    return new Promise((resolve, reject) => {
        $tool.post(fc_url, function (error, response, data) {
            try {
                console.log("同步响应：" + data)
                if (error) {
                    throw new Error(error)
                }
                return resolve(data)
            } catch (eor) {
                console.log("err!!!")
            }
        })
    })
}


// async function request_serverConfig() {
//     const options = {
//         headers: {
//             "Content-Type": "application/json; charset=utf-8",
//             "User-Agent": "JD4iPhone/11.4.0 CFNetwork/1402.0.8 Darwin/22.2.0",
//             "Cookie": $tool.read(jdCookieKey)
//         },
//         body: $tool.read(jdServerConfigReqBodyKey)
//     };
//     console.log(`option: ${options}`)
//     const data = new Promise(function (resolve, reject) {
//         options.url = "https://api.m.jd.com/client.action?functionId=serverConfig";
//         $tool.post(options, function (error, response, data) {
//             console.log(`response: ${response}`)
//             if (!error) {
//                 console.log(data)
//                 resolve(JSON.parse(data));
//             } else {
//                 reject(error);
//             }
//         });
//     });
//     console.log("request finished!")
//     let result = await data
//     console.log("request_serverConfig data:" + result)
//     return result;
// }

function printSupportPromise() {
    'use strict';
    new Promise(function () {});
    console.log('支持Promise!');
}

function getReqFunctionId() {
    return getQueryString("functionId")
}

function getReqUrl() {
    if ($request) {
        return $request.url
    }
    return ""
}


function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = getReqParamsString().substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    };
    return null;
}

function getReqParamsString() {
    if (reqUrl.split('?').length > 1) {
        return '?' + reqUrl.split('?')[1]
    }
    return ""
}

function currentDate() {
    let dd = new Date()
    return dateFormat(dd)
}

function dateFormat(dd) {
    return dd.getHours() + ':' + dd.getMinutes() + ':' + dd.getSeconds() + "." + dd.getMilliseconds()
}


function sleep(delay) {
    console.log("sleep: " + delay)
    for (var t = Date.now(); Date.now() - t <= delay;);
}

async function request_history_price(share_url) {
    const options = {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    };

    const priceTrend = new Promise(function (resolve, reject) {
        options.url = "https://price.icharle.com/?product_id=" + share_url;
        $tool.get(options, function (error, response, data) {
            if (!error) {
                resolve(JSON.parse(data));
            } else {
                reject(error);
            }
        });
    });
    const priceTrendData = await priceTrend;
    return priceTrendData;
}


Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

function tool() {
    const isSurge = typeof $httpClient != "undefined";
    const isQuanX = typeof $task != "undefined";
    const isResponse = typeof $response != "undefined";
    const isRequest = !isResponse && typeof $request != "undefined";
    const isRun = !isRequest && !isResponse
    const node = (() => {
        if (typeof require == "function") {
            const request = require("request");
            return { request };
        } else {
            return null;
        }
    })();
    const notify = (title, subtitle, message) => {
        if (isQuanX) $notify(title, subtitle, message);
        if (isSurge) $notification.post(title, subtitle, message);
        if (node) console.log(JSON.stringify({ title, subtitle, message }));
    };
    const write = (value, key) => {
        if (isQuanX) return $prefs.setValueForKey(value, key);
        if (isSurge) return $persistentStore.write(value, key);
    };
    const read = (key) => {
        if (isQuanX) return $prefs.valueForKey(key);
        if (isSurge) return $persistentStore.read(key);
    };
    const adapterStatus = (response) => {
        if (response) {
            if (response.status) {
                response["statusCode"] = response.status;
            } else if (response.statusCode) {
                response["status"] = response.statusCode;
            }
        }
        return response;
    };
    const get = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options };
            options["method"] = "GET";
            $task.fetch(options).then(
                (response) => {
                    callback(null, adapterStatus(response), response.body);
                },
                (reason) => callback(reason.error, null, null)
            );
        }
        if (isSurge)
            $httpClient.get(options, (error, response, body) => {
                callback(error, adapterStatus(response), body);
            });
        if (node) {
            node.request(options, (error, response, body) => {
                callback(error, adapterStatus(response), body);
            });
        }
    };
    const post = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options };
            options["method"] = "POST";
            $task.fetch(options).then(
                (response) => {
                    callback(null, adapterStatus(response), response.body);
                },
                (reason) => callback(reason.error, null, null)
            );
        }
        if (isSurge) {
            $httpClient.post(options, (error, response, body) => {
                callback(error, adapterStatus(response), body);
            });
        }
        if (node) {
            node.request.post(options, (error, response, body) => {
                callback(error, adapterStatus(response), body);
            });
        }
    };
    return { isQuanX, isSurge, isRequest, isResponse, isRun, notify, write, read, get, post };
}