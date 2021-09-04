var t, e = require("jcys/js/@babel/runtime/helpers/typeof.js"), o = (t = function(e, o) {
    return (t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    })(e, o);
}, function(e, o) {
    if ("function" != typeof o && null !== o) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
    function n() {
        this.constructor = e;
    }
    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, 
    new n());
}), n = function(t, o, n, r) {
    var a, i = arguments.length, s = i < 3 ? o : null === r ? r = Object.getOwnPropertyDescriptor(o, n) : r;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, n, r); else for (var u = t.length - 1; u >= 0; u--) (a = t[u]) && (s = (i < 3 ? a(s) : i > 3 ? a(o, n, s) : a(o, n)) || s);
    return i > 3 && s && Object.defineProperty(o, n, s), s;
}, r = function(t, e, o, n) {
    return new (o || (o = Promise))(function(r, a) {
        function i(t) {
            try {
                u(n.next(t));
            } catch (t) {
                a(t);
            }
        }
        function s(t) {
            try {
                u(n.throw(t));
            } catch (t) {
                a(t);
            }
        }
        function u(t) {
            var e;
            t.done ? r(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                t(e);
            })).then(i, s);
        }
        u((n = n.apply(t, e || [])).next());
    });
}, a = function(t, e) {
    var o, n, r, a, i = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1];
        },
        trys: [],
        ops: []
    };
    return a = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this;
    }), a;
    function s(a) {
        return function(s) {
            return function(a) {
                if (o) throw new TypeError("Generator is already executing.");
                for (;i; ) try {
                    if (o = 1, n && (r = 2 & a[0] ? n.return : a[0] ? n.throw || ((r = n.return) && r.call(n), 
                    0) : n.next) && !(r = r.call(n, a[1])).done) return r;
                    switch (n = 0, r && (a = [ 2 & a[0], r.value ]), a[0]) {
                      case 0:
                      case 1:
                        r = a;
                        break;

                      case 4:
                        return i.label++, {
                            value: a[1],
                            done: !1
                        };

                      case 5:
                        i.label++, n = a[1], a = [ 0 ];
                        continue;

                      case 7:
                        a = i.ops.pop(), i.trys.pop();
                        continue;

                      default:
                        if (!(r = i.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                            i = 0;
                            continue;
                        }
                        if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                            i.label = a[1];
                            break;
                        }
                        if (6 === a[0] && i.label < r[1]) {
                            i.label = r[1], r = a;
                            break;
                        }
                        if (r && i.label < r[2]) {
                            i.label = r[2], i.ops.push(a);
                            break;
                        }
                        r[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = e.call(t, i);
                } catch (t) {
                    a = [ 6, t ], n = 0;
                } finally {
                    o = r = 0;
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }([ a, s ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = require("./A02C1207DFE146BFC64A7A00113A66E3"), s = require("./38A05F86DFE146BF5EC63781B6CC66E3"), u = require("./9D37ECA4DFE146BFFB5184A3CEFC66E3"), l = getApp(), c = [ {
    text: "可使用",
    selected: !0
}, {
    text: "已使用",
    selected: !1
}, {
    text: "已过期",
    selected: !1
} ], p = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.cardVoucherStatus = [], e.statusIndex = 0, e;
    }
    return o(e, t), e.prototype.onLoad = function() {
        t.prototype.onLoad.call(this), this.getCouponsList(!0);
    }, e.prototype.onNavIndexChanged = function(t) {
        for (var e = 0; e < c.length; e++) c[e].selected = t.detail === e;
        this.cardVoucherStatus = c, this.statusIndex = 1 * t.detail, this.getCouponsList(!0);
    }, e.prototype.getCouponsList = function(t) {
        return void 0 === t && (t = !0), r(this, void 0, void 0, function() {
            var e;
            return a(this, function(o) {
                switch (o.label) {
                  case 0:
                    return this.loadPaging || this.initLoadPaging(), this.loadPaging.params.status = 2 === this.statusIndex ? 9 : this.statusIndex, 
                    [ 4, this.loadPaging.loadData(t) ];

                  case 1:
                    return (e = o.sent()) && (t && (this.scrollTop = 0), this.noMore = !e.hasMore, this.list = e.list), 
                    [ 2 ];
                }
            });
        });
    }, e.prototype.initLoadPaging = function() {
        this.loadPaging = new u.default({
            path: "/consumer/coupon/record/pageList",
            params: {
                mobilePhone: l.globalData.userInfo.mobilePhone
            }
        });
    }, e.prototype.onToLowerHandle = function() {
        this.noMore || this.getCouponsList(!1);
    }, n([ s.Data(!1) ], e.prototype, "noMore", void 0), n([ s.Data([]) ], e.prototype, "list", void 0), 
    n([ s.Data(0) ], e.prototype, "scrollTop", void 0), n([ s.Data(c) ], e.prototype, "cardVoucherStatus", void 0), 
    n([ s.Data(0) ], e.prototype, "statusIndex", void 0), e;
}(i.default);

exports.default = p;