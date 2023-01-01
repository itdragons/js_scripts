// key
const jdAvgRespCostKey = 'jdAvgRespCost'  
const jdAvgDelayKey = 'jdAvgDelay'
const jdSubmitOrderRecordKey = 'jdSubmitOrderRecord'

// config
const submitOrderSeconds = new Date().getSeconds() + 2;
const payTimeSeconds = new Date().getSeconds() + 2;
const payTimeMilliSeconds = 500
const enableDelaySubmit = true

let $response = {}

function reqRoute(functionId) {

    if (functionId == 'cart') {
        $tool.notify("jd", `加载购物车: ${dateFormat(new Date())}`);
        sleep(200).then(() => {
            initSubmitOrderRecord()
            $done();
        })
    }

    else {
        (async function() {
            if (functionId == "submitOrder") {
                await reqSubmitOrderHandler()
            } else {
                $done()
            }
        })();
    }
}

function responseRoute(functionId, body) {
    $response = {
        "type": "响应",
        "functionId": functionId
    }
    body = JSON.stringify(body);
    (async function() {
        if (functionId == "submitOrder") {
            await respSubmitOrderHandler(body)
        } else {
            $done($response)
        }
    })();
}

function initSubmitOrderRecord() {
    $tool.write(JSON.stringify({orders: []}), jdSubmitOrderRecordKey)
}

function writeSubmitOrderRecord() {
    let submitOrderRecord = readJson(jdSubmitOrderRecordKey)
    let orders = submitOrderRecord["orders"] || []
    orders.push({
        "requestTime": new Date().getTime()
    })
    submitOrderRecord["orders"] = orders
    $tool.write(JSON.stringify(submitOrderRecord), jdSubmitOrderRecordKey)
}

function writeInputPasswordInOrderRecord() {
    let submitOrderRecord = readJson(jdSubmitOrderRecordKey)
    let orders = submitOrderRecord.orders
    let lastOrder = orders[orders.length - 1]
    lastOrder["inputPassword"] = true
    $tool.write(JSON.stringify(submitOrderRecord), jdSubmitOrderRecordKey)
}

function writePasswordVerified() {
    let submitOrderRecord = readJson(jdSubmitOrderRecordKey)
    submitOrderRecord["passwordVerified"] = true
    $tool.write(JSON.stringify(submitOrderRecord), jdSubmitOrderRecordKey)
}

function writeSubmitOrderResp() {
    let submitOrderRecord = readJson(jdSubmitOrderRecordKey)
    let orders = submitOrderRecord.orders
    let lastOrder = orders[orders.length - 1]
    let currentTime = new Date().getTime()
    lastOrder["responseTime"] = currentTime
    lastOrder["cost"] =  currentTime - parseInt(lastOrder["requestTime"])
    $tool.write(JSON.stringify(submitOrderRecord), jdSubmitOrderRecordKey)
    return lastOrder
}

function includeInputPasswordOrder (orders) {
    for (let i in orders) {
        let order = orders[i]
        if (order["inputPassword"] == true) {
            return true
        }
    }
    return false
}


function readAvgRespCost() {
    return parseInt($tool.read(jdAvgRespCostKey))
}

function readAvgDelay() {
    return parseInt($tool.read(jdAvgDelayKey))
}

async function reqSubmitOrderHandler() {
    let orders = readJson(jdSubmitOrderRecordKey).orders
    let submitOrderCount = orders.length
    let delayMs = 0
    if (enableDelaySubmit) {
        if (submitOrderCount == 0) {
            delayMs = getMsFromNextMinute(0, 0)
        }
        else if(includeInputPasswordOrder(orders)) {
            // 已验证虚拟资产，该请求会创建订单并支持，需要延迟提交
            writePasswordVerified()
            console.log("已验证虚拟资产，该请求会创建订单并支持，需要延迟提交")
        }
    }
    $tool.notify("jd", `开始创建订单[${submitOrderCount + 1}]: ${dateFormat(new Date())}`, `将延迟 ${delayMs}ms 发送请求`);
    await sleep(delayMs);
    writeSubmitOrderRecord()
    $done()
}


async function respSubmitOrderHandler(body) {
    let order = writeSubmitOrderResp()
    let msg = `响应耗时: ${order["cost"]}, 平均响应时长: ${readAvgRespCost()}, 平均受理延迟: ${readAvgDelay()}\n body:${body}`;
    let obj = JSON.parse(body);
    if (obj.inputPassword) {
        $tool.notify("jd", '订单创建失败', `《需输入密码验证虚拟资产》\n${msg}`);
        writeInputPasswordInOrderRecord()
        $done($response);
    } else {
        $tool.notify("jd", '订单创建成功', msg);
        let submitOrderRecord = readJson(jdSubmitOrderRecordKey)
        // 如果该订单还未验证虚拟资产
        if (!submitOrderRecord["passwordVerified"]) {
            let ms = getMsFromCurrentMinute(payTimeSeconds, payTimeMilliSeconds) 
            await sleep(ms);
        }
        $done($response)
    }
}

function getMsFromCurrentMinute(seconds, milliseconds) {
    let dd = new Date()
    let currentSeconds = dd.getSeconds()
    if ((currentSeconds == seconds && dd.getMilliseconds() >= milliseconds) || currentSeconds > seconds) {
        return 0
    }
    time = dd.getTime()
    dd.setTime(time - dd.getMilliseconds() - (dd.getSeconds() * 1000) + seconds * 1000 + milliseconds)
    return dd.getTime() - time
}

function getMsFromNextMinute(seconds, milliseconds) {
    let dd = new Date()
    let time = dd.getTime()
    dd.setTime(time - dd.getMilliseconds() - (dd.getSeconds() * 1000) + 60000 + seconds * 1000 + milliseconds)
    return dd.getTime() - time 
}

function test() {
    let ms = getMsFromCurrentMinute(30, 802);
    ms = getMsFromNextMinute(0, 0);
    (async function() {
        console.log("sleep: " + ms)
        await sleep(ms);
        console.log(dateFormat(new Date()))
    })(); 
}
