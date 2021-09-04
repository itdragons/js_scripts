var e, t = require("jcys/js/@babel/runtime/helpers/typeof.js"), o = (e = function(t, o) {
    return (e = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    })(t, o);
}, function(t, o) {
    if ("function" != typeof o && null !== o) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
    function r() {
        this.constructor = t;
    }
    e(t, o), t.prototype = null === o ? Object.create(o) : (r.prototype = o.prototype, 
    new r());
}), r = function(e, o, r, n) {
    var a, u = arguments.length, i = u < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, r) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, o, r, n); else for (var s = e.length - 1; s >= 0; s--) (a = e[s]) && (i = (u < 3 ? a(i) : u > 3 ? a(o, r, i) : a(o, r)) || i);
    return u > 3 && i && Object.defineProperty(o, r, i), i;
}, n = function(e, t, o, r) {
    return new (o || (o = Promise))(function(n, a) {
        function u(e) {
            try {
                s(r.next(e));
            } catch (e) {
                a(e);
            }
        }
        function i(e) {
            try {
                s(r.throw(e));
            } catch (e) {
                a(e);
            }
        }
        function s(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                e(t);
            })).then(u, i);
        }
        s((r = r.apply(e, t || [])).next());
    });
}, a = function(e, t) {
    var o, r, n, a, u = {
        label: 0,
        sent: function() {
            if (1 & n[0]) throw n[1];
            return n[1];
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        throw: i(1),
        return: i(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this;
    }), a;
    function i(a) {
        return function(i) {
            return function(a) {
                if (o) throw new TypeError("Generator is already executing.");
                for (;u; ) try {
                    if (o = 1, r && (n = 2 & a[0] ? r.return : a[0] ? r.throw || ((n = r.return) && n.call(r), 
                    0) : r.next) && !(n = n.call(r, a[1])).done) return n;
                    switch (r = 0, n && (a = [ 2 & a[0], n.value ]), a[0]) {
                      case 0:
                      case 1:
                        n = a;
                        break;

                      case 4:
                        return u.label++, {
                            value: a[1],
                            done: !1
                        };

                      case 5:
                        u.label++, r = a[1], a = [ 0 ];
                        continue;

                      case 7:
                        a = u.ops.pop(), u.trys.pop();
                        continue;

                      default:
                        if (!(n = u.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                            u = 0;
                            continue;
                        }
                        if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                            u.label = a[1];
                            break;
                        }
                        if (6 === a[0] && u.label < n[1]) {
                            u.label = n[1], n = a;
                            break;
                        }
                        if (n && u.label < n[2]) {
                            u.label = n[2], u.ops.push(a);
                            break;
                        }
                        n[2] && u.ops.pop(), u.trys.pop();
                        continue;
                    }
                    a = t.call(e, u);
                } catch (e) {
                    a = [ 6, e ], r = 0;
                } finally {
                    o = n = 0;
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }([ a, i ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var u = require("./A02C1207DFE146BFC64A7A00113A66E3"), i = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), s = require("./2C30C173DFE146BF4A56A9740F4D66E3"), l = require("./38A05F86DFE146BF5EC63781B6CC66E3"), c = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), p = getApp(), f = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.userInfo = {}, t.mallOrderNum = [], t.o2oOrderNum = [], t.success = !1, 
        t.tabList = [], t;
    }
    return o(t, e), t.prototype.onLoad = function() {
        e.prototype.onLoad.call(this), wx.hideHomeButton();
    }, t.prototype.onShow = function() {
        var e = this, t = s.request("/consumer/user/info", {
            queryArray: [ {
                orderType: 1,
                status: 0
            }, {
                orderType: 1,
                status: 10,
                shipMode: 1
            }, {
                orderType: 1,
                status: 12,
                shipMode: 1
            }, {
                orderType: 1,
                status: 10,
                shipMode: 2
            }, {
                orderType: 1,
                status: 11,
                shipMode: 2
            }, {
                orderType: 2,
                status: 0
            }, {
                orderType: 2,
                status: 10
            }, {
                orderType: 2,
                status: 11,
                shipMode: 1
            }, {
                orderType: 2,
                status: 11,
                shipMode: 2
            }, {
                orderType: 2,
                status: 13
            } ]
        });
        Promise.all([ t ]).then(function(t) {
            if (console.log(t), 0 === t[0].code) {
                e.userInfo = t[0].data.userInfo, e.balance = t[0].data.balance;
                var o = t[0].data.orderNumArray, r = o.splice(5, 5);
                e.mallOrderNum = o, e.o2oOrderNum = r;
            }
        }).catch(function(e) {
            console.log(e);
        });
    }, t.prototype.callHotLine = function(e) {
        var t = e.currentTarget.dataset.no;
        wx.makePhoneCall({
            phoneNumber: t
        });
    }, t.prototype.onClickDuplicateContent = function(e) {}, t.prototype.onUserInfoHandle = function(e) {
        return n(this, void 0, void 0, function() {
            return a(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/user/updateInfo", {
                        nickName: e.detail.nickName,
                        headImgUrl: e.detail.avatarUrl,
                        sex: e.detail.gender
                    }, !0, "同步中...") ];

                  case 1:
                    return t.sent() && (wx.showToast({
                        title: "同步成功",
                        icon: "success"
                    }), p.globalData.userInfo.nickName = e.detail.nickName, p.globalData.userInfo.headImgUrl = e.detail.avatarUrl, 
                    p.globalData.userInfo.sex = e.detail.gender, this.success = !0), [ 2 ];
                }
            });
        });
    }, t.prototype.onTabChangedHandle = function(e) {
        var t = "/" + e.detail.path;
        i.go(t, c.Constant.LOGIN_JUMP_REDIRECT_TO);
    }, t.prototype.onClickGoUrl = function(e) {
        var t = e.currentTarget.dataset.url;
        console.log(t), i.go("/pages/" + t + "/" + t);
    }, r([ l.Data({}) ], t.prototype, "userInfo", void 0), r([ l.Data([]) ], t.prototype, "mallOrderNum", void 0), 
    r([ l.Data([]) ], t.prototype, "o2oOrderNum", void 0), r([ l.Data("") ], t.prototype, "balance", void 0), 
    r([ l.Data(!1) ], t.prototype, "success", void 0), r([ l.Data(p.globalData.tab1List) ], t.prototype, "tabList", void 0), 
    t;
}(u.default);

exports.default = f;