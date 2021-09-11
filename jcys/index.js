var getRawBody = require('raw-body');
var getFormBody = require('body/form');
var body = require('body');
var jcys = require("./jcys.js");


exports.handler = (req, resp, context) => {
    console.log('hello world');

    var params = {
        path: req.path,
        queries: req.queries,
        headers: req.headers,
        method : req.method,
        requestURI : req.url,
        clientIP : req.clientIP,
    }

    headers = req.headers

    let ysParams = JSON.parse(headers["ys_params"])
    let ysUrl = headers["ys_url"]
    let ysAccessToken = headers["ys_access_token"]
    let timestamp = jcys.timestamp()
    let nonceStr = jcys.nonceStr()

    sign = jcys.sign(ysParams, ysUrl, ysAccessToken, timestamp, nonceStr)


    getRawBody(req, function(err, body) {
        result = {
            "timestamp": timestamp,
            "nonceStr": nonceStr,
            "sign": sign,
        }
        resp.send(JSON.stringify(result));
    });


}