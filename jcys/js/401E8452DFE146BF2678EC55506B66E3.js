var e, t = (e = function(t, n) {
    return (e = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    })(t, n);
}, function(t, n) {
    if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    function o() {
        this.constructor = t;
    }
    e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
    new o());
}), n = function(e, t, n, o) {
    return new (n || (n = Promise))(function(r, i) {
        function u(e) {
            try {
                s(o.next(e));
            } catch (e) {
                i(e);
            }
        }
        function a(e) {
            try {
                s(o.throw(e));
            } catch (e) {
                i(e);
            }
        }
        function s(e) {
            var t;
            e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                e(t);
            })).then(u, a);
        }
        s((o = o.apply(e, t || [])).next());
    });
}, o = function(e, t) {
    var n, o, r, i, u = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1];
        },
        trys: [],
        ops: []
    };
    return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this;
    }), i;
    function a(i) {
        return function(a) {
            return function(i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;u; ) try {
                    if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 
                    0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                    switch (o = 0, r && (i = [ 2 & i[0], r.value ]), i[0]) {
                      case 0:
                      case 1:
                        r = i;
                        break;

                      case 4:
                        return u.label++, {
                            value: i[1],
                            done: !1
                        };

                      case 5:
                        u.label++, o = i[1], i = [ 0 ];
                        continue;

                      case 7:
                        i = u.ops.pop(), u.trys.pop();
                        continue;

                      default:
                        if (!(r = u.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            u = 0;
                            continue;
                        }
                        if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                            u.label = i[1];
                            break;
                        }
                        if (6 === i[0] && u.label < r[1]) {
                            u.label = r[1], r = i;
                            break;
                        }
                        if (r && u.label < r[2]) {
                            u.label = r[2], u.ops.push(i);
                            break;
                        }
                        r[2] && u.ops.pop(), u.trys.pop();
                        continue;
                    }
                    i = t.call(e, u);
                } catch (e) {
                    i = [ 6, e ], o = 0;
                } finally {
                    n = r = 0;
                }
                if (5 & i[0]) throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                };
            }([ i, a ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = require("./A02C1207DFE146BFC64A7A00113A66E3"), i = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), u = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), a = require("./34D73CD2DFE146BF52B154D556BD66E3"), s = getApp(), c = function(e) {
    function r() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(r, e), r.prototype.getPhoneNumber = function(e) {
        var t = e.detail;
        console.log(t), "getPhoneNumber:ok" === t.errMsg ? this.bindMobilePhone(t) : "getPhoneNumber:fail user deny" !== t.errMsg && i.showToastNoIcon("获取手机号码失败");
    }, r.prototype.bindMobilePhone = function(e) {
        return n(this, void 0, void 0, function() {
            var t;
            return o(this, function(n) {
                switch (n.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/user/bindPhone", {
                        encryptedData: e.encryptedData,
                        iv: e.iv,
                        sessionKey: s.globalData.userInfo.sessionKey
                    }, !0, "绑定中...") ];

                  case 1:
                    return (t = n.sent()) && t.mobilePhone && (s.globalData.userInfo.mobilePhone = t.mobilePhone, 
                    a.wxApiToPromise(wx.showToast, {
                        icon: "success",
                        title: "绑定成功"
                    }), setTimeout(function() {
                        i.go("", u.Constant.LOGIN_JUMP_NAVIGATE_BACK);
                    }, 200)), [ 2 ];
                }
            });
        });
    }, r.prototype.onBackHandle = function() {
        i.go("", u.Constant.LOGIN_JUMP_NAVIGATE_BACK);
    }, r;
}(r.default);

exports.default = c;