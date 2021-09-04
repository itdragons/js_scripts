a = require("./js/E4281831DFE146BF824E7036A03D66E3.js")
t = require("./js/AB909F77DFE146BFCDF6F770FE3D66E3.js")
const e = require("./js/@babel/runtime/helpers/typeof.js");
nonceStr = function () {
    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = 16 * Math.random() | 0;
        return ("x" === e ? t : 3 & t | 8).toString(16);
    })
}

sign = function(n, o, r, s, i) {
    o = o.replace(a.default.HOST, "")
    for (var c = "", u = 0, l = Object.keys(n).sort(); u < l.length; u++) {
        var d = l[u], f = n[d];
        if ("object" === e(f) && null !== f) {
            var x = JSON.stringify(n[d]);
            c += d + "=" + (x = x.split("").sort().join("")) + "&";
        } else 0 === f || f ? c += d + "=" + n[d] + "&" : (n[d] = "", c += d + "=&");
    }
    return c += "url=" + o + "&", c += r ? "accessToken=" + r + "&" : "", c += "timestamp=" + s + "&",
        c += "nonceStr=" + i + "&", c += "key=" + a.default.PLAM_KEY, t.md5Encrypt(c);
}

timestamp = function () {
    return parseInt(String(new Date().getTime() / 1e3))
}

module.exports = {
    timestamp,
    nonceStr,
    sign
}