const $tool = tool();
const reqUrl = getReqUrl();
const functionId = getReqFunctionId()
// key
const jdCookieKey = "jdCookie"
const jdServerConfigReqBodyKey = 'jdServerConfigReqBody'
const jdAvgRespCostKey = 'jdAvgRespCost'  
const jdAvgDelayKey = 'jdAvgDelay'
const jdSubmitOrderTimeKey = 'jdSubmitOrderTime'
const jdSubmitOrderRecordKey = 'jdSubmitOrderRecord'
// config
const payTimeSeconds = 3
const payTimeMilliSeconds = 500
const enableDelaySubmit = true

// 请求
if ($tool.isRequest) {

    if (functionId == "cart") {
        $tool.notify("jd", `加载购物车: ${dateFormat(new Date())}`);
        sleep(200).then(() => {
            console.log(currentDate())
            $done();
        })
    }
    /* cart 接口响应时间，4G：150-170ms， wifi： 90-120
     4G
     success: 1:00, 00:500, 00:200, 0:00(2)
     failed: 59:800, 59:900, 59:950
    *******************************************************
     WIFI 下单到付款2s
     00:500(1), 00:350(6,-3), 00:300(3,-1), 00:290(4,-2), 00:250(,-1), 00:200(2,-2), 00:150(1,-3), 00:120(2,-1), 00:100(5,-2), 00:80(1,-1), 00:50(,-1)
    */
    else if (functionId == "submitOrder") {
        $tool.notify("jd", `开始创建订单: ${dateFormat(new Date())}`);
        (async function() {
            while (enableDelaySubmit) {
                let dd = new Date()
                let seconds = dd.getSeconds()
                if (seconds == 0) {
                    console.log(`发送创建订单请求：${dateFormat(dd)}`)
                    break
                }
                await sleep(1);
            }
            $tool.write(new Date().getTime().toString(), jdSubmitOrderTimeKey)
            $done()
        })();
        
    }
    // if (functionId == 'platJDPayAcc') {
    //     console.log("进入支付页面 Request")
    //     console.log(currentDate())
    //     $done() 
    // }

    else {
        $done()
    }
}

// 响应
if ($tool.isResponse) {
    const body = $response.body;

    if (functionId == "cart") {
        let obj = JSON.parse(body);
        let cartInfo = obj["cartInfo"] 
        if (cartInfo && cartInfo["vendors"]) {
            cartInfo["vendors"][0].shopName = `【${currentDate()}】${cartInfo["vendors"][0].shopName}`
            console.log(`cart rewrite: ${cartInfo["vendors"][0].shopName}`)
        }

        $done({ body: JSON.stringify(obj) });
    }
    
    
    else if (functionId == "serverConfig") {
        let obj = JSON.parse(body);
        delete obj.serverConfig.httpdns;
        delete obj.serverConfig.dnsvip;
        delete obj.serverConfig.dnsvip_v6;
        
        $done({ body: JSON.stringify(obj) });
    }
    
    else if (functionId == "basicConfig") {
        let obj = JSON.parse(body);
        let JDHttpToolKit = obj.data.JDHttpToolKit;
        if (JDHttpToolKit) {
            delete obj.data.JDHttpToolKit.httpdns;
            delete obj.data.JDHttpToolKit.dnsvipV6;
        }
        $done({ body: JSON.stringify(obj) });
    }

    else if (functionId == 'platPayResult') {
        console.log('获取支付结果时间：' + currentDate())
        $done($response);
    }

    else if (functionId == 'submitOrder') {
        let obj = JSON.parse(body);
        if (obj.inputPassword) {
            $tool.notify("jd", '订单创建失败', `《需输入密码验证虚拟资产》\nbody: ${formatRespData(body)}`);
            $done($response);
        }
        let currentTime = new Date()
        let reqTime = new Date(parseInt($tool.read(jdSubmitOrderTimeKey)))
        let avgRespCost = parseInt($tool.read(jdAvgRespCostKey))
        let avgDelay = parseInt($tool.read(jdAvgDelayKey))
        let cost = currentTime - reqTime
        let msg = `响应耗时: ${cost}, 平均响应时长: ${avgRespCost}, 平均受理延迟: ${avgDelay}\n body:${body}`;
        $tool.notify("jd", '订单创建成功', msg);
        (async function() {
            while (true) {
                let currentTime_ = new Date()
                let seconds = currentTime_.getSeconds()
                let milliseconds = currentTime_.getMilliseconds()
                if ((seconds == payTimeSeconds && milliseconds >= payTimeMilliSeconds) || seconds > payTimeSeconds) {
                    break
                }
                await sleep(1);
            }
            $done($response);
        })();
    }

    else {
        $done($response);
    }
}


// run
if ($tool.isRun) {
    console.log("script run: ")
    
    showJdServerTime().then(() => {
        $done()
    })

}

async function showJdServerTime() {
    let runCount = 5
    let costSum = 0
    let delaySum = 0
    await requestServerConfig().then(async () => {
        await sleep(1000)
    })
    for (var i=0; i<runCount; i++) {
        let reqDate = new Date();
        console.log(`\n第${i + 1}次请求：ServerConfig`)
        console.log(`请求时间: ${dateFormat(reqDate)}`)
        requestServerConfig().then(data => {
            let respDate = new Date()
            let cost = respDate - reqDate
            console.log(`响应时间: ${dateFormat(respDate)}, 耗时：${cost}s`)
            let jdTime = new Date(data.serverConfig.currentTime)
            let delay = jdTime - reqDate
            console.log(`JD时间: ${dateFormat(jdTime)}`)
            console.log(`请求受理延迟: ${delay}`)
            costSum += cost
            delaySum += delay
        }).catch(err => {
            console.log(`err: ${err}`)
        })
        await sleep(1000)
    }
    let avgResp = costSum / runCount 
    let avgDelay = delaySum / runCount
    $tool.write(avgResp.toString(), jdAvgRespCostKey)
    $tool.write(avgDelay.toString(), jdAvgDelayKey)
    console.log(`\n\n平均响应时长：${avgResp}ms`)
    console.log(`请求受理平均延迟：${avgDelay}ms 【发送请求的本机时间 到达 服务端受理的时间延迟】`)
}

async function requestServerConfig() {
    const options = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "JD4iPhone/11.4.0 CFNetwork/1402.0.8 Darwin/22.2.0",
            "Cookie": $tool.read(jdCookieKey)
        },
        body: $tool.read(jdServerConfigReqBodyKey)
    };
    return new Promise(function (resolve, reject) {
        options.url = "https://api.m.jd.com/client.action?functionId=serverConfig";
        $tool.post(options, function (error, response, data) {
            if (!error) {
                resolve(JSON.parse(data));
            } else {
                reject(error);
            }
        });
    });
}

function printSupportPromise() {
    'use strict';
    new Promise(function () {});
    console.log('支持Promise!');
}

function formatRespData(body) {
    return JSON.stringify(JSON.parse(body), null, "\t")
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

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
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