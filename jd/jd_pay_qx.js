
const $tool = new Tool()
const resp = isUndefined($response) ? null : $response;
const cartPath = "cart"
const reportEvent = "report_event"
const bypass = "bypass"
const bypassinfo = "bypassinfo"

if (!$tool.isResponse) {
    console.log("request 脚本")
    const url = $request.url;
    console.log(JSON.stringify($request))
    if (url.indexOf(reportEvent) != -1) {
        sleep(5000)
    }
    if (url.indexOf(bypass) != -1) {
        sleep(8000)
    }
    if (url.indexOf(cartPath) != -1) {
        sleep(5000)
    }
    if (url.indexOf(bypassinfo) != -1) {
        sleep(bypassinfo)
    }
    $done()
    // const urlDecode = decodeURIComponent(url);
    // const videos = urlDecode.match(/"videos","(\d+)"/);
    // const videoID = videos[1];
    // const map = getTitleMap();
    // const title = map[videoID];
    // const isEnglish = url.match(/languages=en/) ? true : false;
    // if (!title && !isEnglish) {
    //     const currentSummary = urlDecode.match(/\["videos","(\d+)","current","summary"\]/);
    //     if (currentSummary) {
    //         url = url.replace("&path=" + encodeURIComponent(currentSummary[0]), "");
    //     }
    //     url = url.replace(/&languages=(.*?)&/, "&languages=en-US&");
    // }
    // url += "&path=" + encodeURIComponent(`[${videos[0]},"details"]`);
    $done({ url });
} else {
    console.log("开始处理 Response 响应");
    console.log(resp)
    let body = JSON.parse(resp.body);
    console.log(body)
    sleep(5000)
    console.log("sleep 结束")
    $.done({ body: JSON.stringify(body) });
} 

function sleep(delay) {
    console.log("sleep: " + delay)
    for (var t = Date.now(); Date.now() - t <= delay;);
}

function isUndefined(obj) {
    return typeof obj === "undefined";
}

function Tool() {
    _node = (() => {
        if (typeof require == "function") {
            const request = require('request')
            return ({ request })
        } else {
            return (null)
        }
    })()
    _isSurge = typeof $httpClient != "undefined"
    _isQuanX = typeof $task != "undefined"
    this.isSurge = _isSurge
    this.isQuanX = _isQuanX
    this.isResponse = typeof $response != "undefined"
    this.notify = (title, subtitle, message) => {
        if (_isQuanX) $notify(title, subtitle, message)
        if (_isSurge) $notification.post(title, subtitle, message)
        if (_node) console.log(JSON.stringify({ title, subtitle, message }));
    }
    this.write = (value, key) => {
        if (_isQuanX) return $prefs.setValueForKey(value, key)
        if (_isSurge) return $persistentStore.write(value, key)
    }
    this.read = (key) => {
        if (_isQuanX) return $prefs.valueForKey(key)
        if (_isSurge) return $persistentStore.read(key)
    }
    this.get = (options, callback) => {
        if (_isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "GET"
            $task.fetch(options).then(response => { callback(null, _status(response), response.body) }, reason => callback(reason.error, null, null))
        }
        if (_isSurge) $httpClient.get(options, (error, response, body) => { callback(error, _status(response), body) })
        if (_node) _node.request(options, (error, response, body) => { callback(error, _status(response), body) })
    }
    this.post = (options, callback) => {
        if (_isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "POST"
            $task.fetch(options).then(response => { callback(null, _status(response), response.body) }, reason => callback(reason.error, null, null))
        }
        if (_isSurge) $httpClient.post(options, (error, response, body) => { callback(error, _status(response), body) })
        if (_node) _node.request.post(options, (error, response, body) => { callback(error, _status(response), body) })
    }
    _status = (response) => {
        if (response) {
            if (response.status) {
                response["statusCode"] = response.status
            } else if (response.statusCode) {
                response["status"] = response.statusCode
            }
        }
        return response
    }
}