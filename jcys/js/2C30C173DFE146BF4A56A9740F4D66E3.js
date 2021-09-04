var e = require("jcys/js/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.uploadFile = exports.request = exports.isAbsoluteUrl = void 0;

var t = require("./AB909F77DFE146BFCDF6F770FE3D66E3"), a = require("./E4281831DFE146BF824E7036A03D66E3"), n = require("./69F364A2DFE146BF0F950CA5BF9D66E3");

function o(e) {
    return /(^[a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
}

function r(n, o, r, s, i) {
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

exports.isAbsoluteUrl = o;

var s = 0;

function i(e, t, n, o, i, u, l) {
    return new Promise(function(d, f) {
        var x = getApp(), g = "";
        x.globalData.userInfo && (g = x.globalData.userInfo.accessToken);
        var p = {
            url: e,
            method: t,
            success: function(t) {
                if (t.data.message = "No message available" === t.data.message ? "接口不存在，请检查！" : t.data.message, 
                118 === t.data.code && "用户在异地登陆，请重新登陆" === t.data.message || 115 === t.data.code) {
                    if (++s >= 2) return t.data.message = "token已失效,请重新进入小程序", void d(t.data);
                    !function(e, t, n, o) {
                        var r = getApp();
                        new Promise(function(e, t) {
                            wx.login({
                                success: function(n) {
                                    c("/consumer/user/common/applet/code", {
                                        code: n.code,
                                        appId: a.default.APPID
                                    }).then(function(t) {
                                        var a = t.data;
                                        r.globalData.userInfo = a, e(t);
                                    }, function(e) {
                                        console.log(e), t();
                                    });
                                },
                                fail: function(e) {
                                    console.log(e), t();
                                }
                            });
                        }).then(function() {
                            c(e, t).then(function(e) {
                                n(e);
                            }, function(e) {
                                console.log(e), o();
                            });
                        }, function(e) {
                            console.log(e), o();
                        });
                    }(e, l, d, f);
                } else (n || o) && 0 === t.data.code && (s = 0, wx.setStorageSync(i, JSON.stringify(t.data)), 
                wx.setStorageSync(u, Date.now())), t.data.backFromCache = !1, d(t.data);
            },
            fail: function(e) {
                console.log(e), f();
            }
        }, m = parseInt(String(new Date().getTime() / 1e3)), v = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" == e ? t : 3 & t | 8).toString(16);
        }), S = {
            timestamp: m,
            nonceStr: v
        };
        if ("POST" === t) S.sign = r(l, p.url.replace(a.default.HOST, ""), g, m, v), p.data = l; else {
            for (var y = p.url + "?", b = 0, h = Object.keys(l); b < h.length; b++) {
                var P = h[b];
                y += P + "=" + l[P] + "&";
            }
            y = y.substring(0, y.length - 1), p.url = y, S.sign = r({}, p.url.replace(a.default.HOST, ""), g, m, v);
        }
        g && (S.accessToken = g), p.header = S, wx.request(p);
    });
}

function c(e, n, r, s, c) {
    var u;
    void 0 === n && (n = {}), void 0 === r && (r = !1), void 0 === s && (s = !1), void 0 === c && (c = "POST"), 
    e = o(u = e) ? u : a.default.HOST.replace(/\/+$/, "") + "/" + u.replace(/^\/+/, "");
    var l = t.encryptByDESModeEBC(e + JSON.stringify(n)), d = l + t.encryptByDESModeEBC("time");
    if (r && !s) {
        var f = wx.getStorageSync(d);
        if (f && "undefined" !== l && (f = parseInt(f, 10), Date.now() - f < a.default.CACHE_EXPIRE_TIME)) {
            var x = wx.getStorageSync(l);
            if (x && "undefined" !== x) {
                console.log("==== 缓存查询数据返回 ====");
                var g = JSON.parse(x);
                return g.backFromCache = !0, Promise.resolve(g);
            }
        }
    }
    return console.log("==== 网络查询数据返回 ===="), i(e, c, r, s, l, d, n);
}

exports.request = c, exports.uploadFile = function(e, t, o) {
    return void 0 === t && (t = {
        thumbnail: 1
    }), new Promise(function(r, s) {
        var i = {
            url: a.default.UPLOAD_FILE_PATH,
            filePath: e,
            formData: t,
            name: "file",
            header: {
                "Content-Type": "multipart/form-data"
            },
            success: function(e) {
                r(n.isJsonString(e.data) ? JSON.parse(e.data) : {
                    code: -1,
                    message: "数据解析异常"
                });
            },
            fail: function(e) {
                s(e);
            }
        };
        wx.uploadFile(i).onProgressUpdate(function(e) {
            o && o(e);
        });
    });
};