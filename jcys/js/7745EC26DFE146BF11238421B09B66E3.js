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
    function r() {
        this.constructor = e;
    }
    t(e, o), e.prototype = null === o ? Object.create(o) : (r.prototype = o.prototype, 
    new r());
}), r = function(t, o, r, n) {
    var a, i = arguments.length, u = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, r) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, o, r, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (u = (i < 3 ? a(u) : i > 3 ? a(o, r, u) : a(o, r)) || u);
    return i > 3 && u && Object.defineProperty(o, r, u), u;
}, n = function(t, e, o, r) {
    return new (o || (o = Promise))(function(n, a) {
        function i(t) {
            try {
                c(r.next(t));
            } catch (t) {
                a(t);
            }
        }
        function u(t) {
            try {
                c(r.throw(t));
            } catch (t) {
                a(t);
            }
        }
        function c(t) {
            var e;
            t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                t(e);
            })).then(i, u);
        }
        c((r = r.apply(t, e || [])).next());
    });
}, a = function(t, e) {
    var o, r, n, a, i = {
        label: 0,
        sent: function() {
            if (1 & n[0]) throw n[1];
            return n[1];
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
                if (o) throw new TypeError("Generator is already executing.");
                for (;i; ) try {
                    if (o = 1, r && (n = 2 & a[0] ? r.return : a[0] ? r.throw || ((n = r.return) && n.call(r), 
                    0) : r.next) && !(n = n.call(r, a[1])).done) return n;
                    switch (r = 0, n && (a = [ 2 & a[0], n.value ]), a[0]) {
                      case 0:
                      case 1:
                        n = a;
                        break;

                      case 4:
                        return i.label++, {
                            value: a[1],
                            done: !1
                        };

                      case 5:
                        i.label++, r = a[1], a = [ 0 ];
                        continue;

                      case 7:
                        a = i.ops.pop(), i.trys.pop();
                        continue;

                      default:
                        if (!(n = i.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                            i = 0;
                            continue;
                        }
                        if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                            i.label = a[1];
                            break;
                        }
                        if (6 === a[0] && i.label < n[1]) {
                            i.label = n[1], n = a;
                            break;
                        }
                        if (n && i.label < n[2]) {
                            i.label = n[2], i.ops.push(a);
                            break;
                        }
                        n[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = e.call(t, i);
                } catch (t) {
                    a = [ 6, t ], r = 0;
                } finally {
                    o = n = 0;
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

var i = require("./A02C1207DFE146BFC64A7A00113A66E3"), u = require("./38A05F86DFE146BF5EC63781B6CC66E3"), c = require("./9D37ECA4DFE146BFFB5184A3CEFC66E3"), l = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), p = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), s = getApp(), f = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.homeInfo = {}, e.tabList = [], e;
    }
    return o(e, t), e.prototype.onLoad = function() {
        t.prototype.onLoad.call(this), wx.hideHomeButton(), this.getDataFromServer();
    }, e.prototype.getDataFromServer = function() {
        return n(this, void 0, void 0, function() {
            var t;
            return a(this, function(e) {
                switch (e.label) {
                  case 0:
                    return t = this, [ 4, this.simpleRequest("/consumer/pro/common/product/storeHomeData", {
                        type1: 2,
                        type2: 3,
                        type3: 3,
                        type4: 3,
                        type5: 3,
                        type6: 0,
                        type7: 3
                    }) ];

                  case 1:
                    return t.homeInfo = e.sent(), this.loadProductList(!0), [ 2 ];
                }
            });
        });
    }, e.prototype.onToLowerHandle = function() {
        this.noMore || this.loadProductList(!1);
    }, e.prototype.loadProductList = function(t) {
        return n(this, void 0, void 0, function() {
            var e;
            return a(this, function(o) {
                switch (o.label) {
                  case 0:
                    return this.loadPaging || (this.loadPaging = new c.default({
                        path: "/consumer/pro/common/product/pageList",
                        pageSize: 9,
                        params: {
                            bigType: 1,
                            isGoodStuff: 1
                        }
                    })), [ 4, this.loadPaging.loadData(t) ];

                  case 1:
                    return e = o.sent(), this.list = e.list, this.noMore = !e.hasMore, [ 2 ];
                }
            });
        });
    }, e.prototype.onMoreHandle = function(t) {
        var e = t.currentTarget.dataset.type;
        l.go("/pages/mall_search/mall_search?type=" + e + "&proType=1");
    }, e.prototype.onTabChangedHandle = function(t) {
        var e = "/" + t.detail.path;
        l.go(e, p.Constant.LOGIN_JUMP_REDIRECT_TO);
    }, r([ u.Data({}) ], e.prototype, "homeInfo", void 0), r([ u.Data(!1) ], e.prototype, "noMore", void 0), 
    r([ u.Data([]) ], e.prototype, "list", void 0), r([ u.Data(s.globalData.tab2List) ], e.prototype, "tabList", void 0), 
    e;
}(i.default);

exports.default = f;