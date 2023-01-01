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
        if (order["inputPassword" == true]) {
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
    $tool.notify("jd", `开始创建订单[${submitOrderCount + 1}]: ${dateFormat(new Date())}`);
    if (enableDelaySubmit) {
        if (submitOrderCount == 0) {

            while (true) {
                let dd = new Date()
                let seconds = dd.getSeconds()
                if (seconds == submitOrderSeconds) {
                    console.log(`延迟发送请求[创建订单]：${dateFormat(dd)}`)
                    break
                }
                await sleep(1);
            }
        }
        else if(includeInputPasswordOrder(orders)) {
            // 验证虚拟资产已完成
            writePasswordVerified()
        }
    }
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
        // 如果虚拟资产已验证
        if (submitOrderRecord["passwordVerified"]) {
            // 延迟提交订单
        } else {
            while (true) {
                let currentTime_ = new Date()
                let seconds = currentTime_.getSeconds()
                let milliseconds = currentTime_.getMilliseconds()
                if ((seconds == payTimeSeconds && milliseconds >= payTimeMilliSeconds) || seconds > payTimeSeconds) {
                    break
                }
                await sleep(1);
            }
        }
        $done($response)
    }
}


function test() {
    let dd = new Date()
    console.log(dateFormat(dd))
}
