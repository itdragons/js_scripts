var t, e = require("jcys/js/@babel/runtime/helpers/typeof.js"), n = (t = function(e, n) {
    return (t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    })(e, n);
}, function(e, n) {
    if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    function o() {
        this.constructor = e;
    }
    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
    new o());
}), o = function(t, n, o, r) {
    var a, i = arguments.length, u = i < 3 ? n : null === r ? r = Object.getOwnPropertyDescriptor(n, o) : r;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, n, o, r); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (u = (i < 3 ? a(u) : i > 3 ? a(n, o, u) : a(n, o)) || u);
    return i > 3 && u && Object.defineProperty(n, o, u), u;
}, r = function(t, e, n, o) {
    return new (n || (n = Promise))(function(r, a) {
        function i(t) {
            try {
                c(o.next(t));
            } catch (t) {
                a(t);
            }
        }
        function u(t) {
            try {
                c(o.throw(t));
            } catch (t) {
                a(t);
            }
        }
        function c(t) {
            var e;
            t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                t(e);
            })).then(i, u);
        }
        c((o = o.apply(t, e || [])).next());
    });
}, a = function(t, e) {
    var n, o, r, a, i = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1];
        },
        trys: [],
        ops: []
    };
    return a = {
        next: u(0),
        throw: u(1),
        return: u(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this;
    }), a;
    function u(a) {
        return function(u) {
            return function(a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;i; ) try {
                    if (n = 1, o && (r = 2 & a[0] ? o.return : a[0] ? o.throw || ((r = o.return) && r.call(o), 
                    0) : o.next) && !(r = r.call(o, a[1])).done) return r;
                    switch (o = 0, r && (a = [ 2 & a[0], r.value ]), a[0]) {
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
                        i.label++, o = a[1], a = [ 0 ];
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
                    a = [ 6, t ], o = 0;
                } finally {
                    n = r = 0;
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }([ a, u ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = require("./A02C1207DFE146BFC64A7A00113A66E3"), u = require("./9D37ECA4DFE146BFFB5184A3CEFC66E3"), c = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), s = require("./38A05F86DFE146BF5EC63781B6CC66E3"), l = require("./2C30C173DFE146BF4A56A9740F4D66E3"), p = function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return n(e, t), e.prototype.onLoad = function(e) {
        t.prototype.onLoad.call(this, e), this.getData(!0), this.getUserIntegral();
    }, e.prototype.getUserIntegral = function() {
        return r(this, void 0, void 0, function() {
            var t;
            return a(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4, l.request("/consumer/user/info") ];

                  case 1:
                    return 0 === (t = e.sent()).code && (this.userInfo = t.data.userInfo), [ 2 ];
                }
            });
        });
    }, e.prototype.getData = function(t) {
        return void 0 === t && (t = !0), r(this, void 0, void 0, function() {
            var e;
            return a(this, function(n) {
                switch (n.label) {
                  case 0:
                    return this.loadPaging || (this.loadPaging = new u.default({
                        path: "/consumer/pro/common/product/pageList",
                        params: {
                            bigType: c.Constant.GOODS_BIG_TYPE_MALL,
                            proType: 2,
                            status: 1
                        }
                    })), [ 4, this.loadPaging.loadData(t) ];

                  case 1:
                    return (e = n.sent()) && (this.noMore = !e.hasMore, this.list = e.list), [ 2 ];
                }
            });
        });
    }, e.prototype.onToLowerHandle = function() {
        this.noMore || this.getData(!1);
    }, o([ s.Data(!1) ], e.prototype, "noMore", void 0), o([ s.Data([]) ], e.prototype, "list", void 0), 
    o([ s.Data({}) ], e.prototype, "userInfo", void 0), e;
}(i.default);

exports.default = p;