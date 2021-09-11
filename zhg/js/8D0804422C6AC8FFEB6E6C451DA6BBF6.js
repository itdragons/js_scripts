var e = require("./@babel/runtime/helpers/interopRequireDefault.js")(require("./C1BA98F32C6AC8FFA7DCF0F43E76BBF6.js")), t = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
};

module.exports = {
    formatNumber: t,
    tsFormatTime: function(e, n) {
        var r = [ "Y", "M", "D", "h", "m", "s" ], a = [];
        if (null == e || null == e || "" == e) return "";
        var o = new Date(e), u = o.getFullYear(), c = o.getMonth() + 1, i = o.getDate(), p = o.getHours(), m = o.getMinutes(), l = o.getSeconds();
        for (var s in a.push(u, c, i, p, m, l), a = a.map(t)) n = n.replace(r[s], a[s]);
        return n;
    },
    countDown: function(e) {
        var n = e.length;
        if (n <= 8) {
            var r = new Date();
            e = [ r.getFullYear(), r.getMonth() + 1, r.getDate() ].map(t).join("-") + " " + e;
        }
        e = e.replace(/-/g, "/");
        var a = new Date(e).getTime() - new Date().getTime(), o = parseInt(a / 864e5), u = parseInt(a % 864e5 / 36e5), c = parseInt(a % 36e5 / 6e4), i = parseInt(a % 6e4 / 1e3);
        return i < 0 ? null : n > 8 && "00" != [ o ].map(t)[0] ? [ o ].map(t)[0] + "天 " + [ u, c, i ].map(t).join(":") : [ u, c, i ].map(t).join(":");
    },
    countDownSec: function(e) {
        if ("number" != typeof e || e < 0) return !1;
        var n = parseInt(e / 864e5), r = parseInt(e % 864e5 / 36e5), a = parseInt(e % 36e5 / 6e4), o = parseInt(e % 6e4 / 1e3);
        return n ? [ n ].map(t)[0] + "天 " + [ r, a, o ].map(t).join(":") : [ r, a, o ].map(t).join(":");
    },
    c: function(t, n) {
        var r = [];
        for (var a in t) r.push("".concat(a, "=").concat(t[a]));
        var o = "".concat(r.join("&")).concat("e348db70-2e67-4a72-9578-8b40ad809cbb");
        return n && (o = "".concat(o).concat(JSON.stringify(n))), o = o.replace(/a/gm, "c").replace(/e/gm, "g").replace(new RegExp(" ", "gm"), ""), 
        (0, e.default)(o);
    }
};