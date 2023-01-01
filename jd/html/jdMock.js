// key
const jdAvgRespCostKey = 'jdAvgRespCost'  
const jdAvgDelayKey = 'jdAvgDelay'
const jdSubmitOrderRecordKey = 'jdSubmitOrderRecord'

// config
const firstSubmitOrderTime = [0, 0];
const noPwdSubmitOrderTime = [1, 500]
const payStartTime = [3, 500]
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


async function reqSubmitOrderHandler() {
    let orders = readJson(jdSubmitOrderRecordKey).orders
    let submitOrderCount = orders.length
    let delayMs = 0
    let msg = ''
    if (enableDelaySubmit) {
        if (submitOrderCount == 0) {
            delayMs = getMsFromNextMinute(firstSubmitOrderTime[0], firstSubmitOrderTime[1])
            msg = `【首次创建订单】`
        }
        else if(includeInputPasswordOrder(orders)) {
            writePasswordVerified()
            delayMs = getMsFromCurrentMinute(noPwdSubmitOrderTime[0], noPwdSubmitOrderTime[1])
            msg = `【已验证虚拟资产，本次创建订单不再需要支付密码】`
        }
    }
    $tool.notify("jd", `开始创建订单[${submitOrderCount + 1}]: ${dateFormat(new Date())}`, ` ${msg}, 将在 ${delayMs}ms 后发送请求.`);
    await sleep(delayMs);
    console.log(`开始创建订单：${dateFormat(new Date())}`)
    writeSubmitOrderRecord()
    $done()
}


async function respSubmitOrderHandler(body) {
    let order = writeSubmitOrderResp()
    let msg = `响应耗时: ${order["cost"]}, 平均响应时长: ${readAvgRespCost()}, 平均受理延迟: ${readAvgDelay()}\n`;
    let obj = JSON.parse(body);
    if (obj.inputPassword) {
        $tool.notify("jd", `订单创建失败: ${dateFormat(new Date())}`, `《需输入密码验证虚拟资产》\n${msg} \ndata: ${body}`);
        writeInputPasswordInOrderRecord()
        $done($response);
    } else {
        let submitOrderRecord = readJson(jdSubmitOrderRecordKey)
        let delayMs = 0
        // 如果该订单未验证虚拟资产，则需要验证支付密码完成支付
        if (!submitOrderRecord["passwordVerified"]) {
            delayMs = getMsFromCurrentMinute(payStartTime[0], payStartTime[1])
        }
        $tool.notify("jd", `订单创建成功: ${dateFormat(new Date())}`, `${msg}, 将在 ${delayMs}ms 后发送请求\ndata: ${body}`);
        await sleep(delayMs);
        $done($response)
    }
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
    // ms = getMsFromNextMinute(0, 0);
    (async function() {
        console.log("sleep: " + ms)
        await sleep(ms);
        console.log(dateFormat(new Date()))
    })(); 
}
