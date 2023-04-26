const $tool = tool();
const reqUrl = getReqUrl();

// 选择票档确定：/h5/mtop.trade.order.build.h5/4.0
// 响应
if ($tool.isResponse) {
    const body = $response.body;
    if (reqUrl.indexOf('/h5/mtop.alibaba.damai.detail.getdetail/1.2/2.0') != -1) {
        let obj = JSON.parse(body);
        let result = JSON.parse(obj.data.result)
        let item = result.detailViewComponentMap.item.item
        item.sellStartTimeStr = "04月26日 20:00"
        item.sellStartTime = "1682510400000"
        item.buyBtnStatus = "204"
        item.buyBtnOrigin = "12"
        item.buyBtnText = "哒哒-Go"
        delete item["countDown"]
        delete item["rcdt"]
        delete item["notifyCustomerTimeBeforeSellStart"]
        obj.data.result = JSON.stringify(result)
        $done({ body: JSON.stringify(obj)});
    }
    
    $done({body: body});
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