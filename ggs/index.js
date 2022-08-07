// var getRawBody = require('raw-body');
// var getFormBody = require('body/form');
// var body = require('body');
var zhg = require('./zhg.js');

r = {}

r = JSON.parse(JSON.stringify(r))

let userId = "927734025257623552"
let userToken = "410ab0ff8a1348bc84e522b8faa5ff64"

sign = zhg.sign(userId, userToken, r)

console.log("68E1E3861368B04C81E452E77EDFF54F" === sign)
data = {
    totalPrice: 100,
    totalPromotionPrice: 50,
    totalCouponPrice: 20,
}

var t = data.totalPrice ? data.totalPrice - data.totalPromotionPrice : 0;
var e = data.totalCouponPrice ? data.totalCouponPrice : 0, o = t / 1e4 - Number(e / 1e4).toFixed(2);

o = t / 1e4 - Number(e / 1e4).toFixed(2)

console.log(o)
exports.handler = (req, resp, context) => {
    // var params = {
    //     path: req.path,
    //     queries: req.queries,
    //     headers: req.headers,
    //     method : req.method,
    //     requestURI : req.url,
    //     clientIP : req.clientIP,
    // }

    headers = req.headers

    let zhg_params = JSON.parse(headers["zhg_params"])
    let zhg_user_id = headers["zhg_user_id"]
    let zhg_user_token = headers["zhg_user_token"]

    sign = zhg.sign(zhg_user_id, zhg_user_token, zhg_params)

    getRawBody(req, function (err, body) {
        result = {
            "sign": sign,
        }
        resp.send(JSON.stringify(result));
    });


}