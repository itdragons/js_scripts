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
    function r() {
        this.constructor = e;
    }
    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, 
    new r());
}), r = function(t, n, r, o) {
    var i, a = arguments.length, u = a < 3 ? n : null === o ? o = Object.getOwnPropertyDescriptor(n, r) : o;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, n, r, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (u = (a < 3 ? i(u) : a > 3 ? i(n, r, u) : i(n, r)) || u);
    return a > 3 && u && Object.defineProperty(n, r, u), u;
}, o = function(t, e, n, r) {
    return new (n || (n = Promise))(function(o, i) {
        function a(t) {
            try {
                c(r.next(t));
            } catch (t) {
                i(t);
            }
        }
        function u(t) {
            try {
                c(r.throw(t));
            } catch (t) {
                i(t);
            }
        }
        function c(t) {
            var e;
            t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                t(e);
            })).then(a, u);
        }
        c((r = r.apply(t, e || [])).next());
    });
}, i = function(t, e) {
    var n, r, o, i, a = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
        },
        trys: [],
        ops: []
    };
    return i = {
        next: u(0),
        throw: u(1),
        return: u(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this;
    }), i;
    function u(i) {
        return function(u) {
            return function(i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;a; ) try {
                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 
                    0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                    switch (r = 0, o && (i = [ 2 & i[0], o.value ]), i[0]) {
                      case 0:
                      case 1:
                        o = i;
                        break;

                      case 4:
                        return a.label++, {
                            value: i[1],
                            done: !1
                        };

                      case 5:
                        a.label++, r = i[1], i = [ 0 ];
                        continue;

                      case 7:
                        i = a.ops.pop(), a.trys.pop();
                        continue;

                      default:
                        if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            a = 0;
                            continue;
                        }
                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                            a.label = i[1];
                            break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                            a.label = o[1], o = i;
                            break;
                        }
                        if (o && a.label < o[2]) {
                            a.label = o[2], a.ops.push(i);
                            break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = e.call(t, a);
                } catch (t) {
                    i = [ 6, t ], r = 0;
                } finally {
                    n = o = 0;
                }
                if (5 & i[0]) throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                };
            }([ i, u ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = require("./A02C1207DFE146BFC64A7A00113A66E3"), u = require("./38A05F86DFE146BF5EC63781B6CC66E3"), c = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), l = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), s = getApp(), p = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.tabList = [], e;
    }
    return n(e, t), e.prototype.onLoad = function() {
        t.prototype.onLoad.call(this), wx.hideHomeButton();
    }, e.prototype.onShow = function() {
        this.getCartList();
    }, e.prototype.getCartList = function() {
        return o(this, void 0, void 0, function() {
            var t, e, n, r, o, a;
            return i(this, function(i) {
                switch (i.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/order/shoppingTrolley/list", {
                        bigType: 1
                    }) ];

                  case 1:
                    if ((t = i.sent() || []).length) for (e = 0, n = t; e < n.length; e++) if ((r = n[e]).selected = !1, 
                    r.proList.length) for (o = 0, a = r.proList; o < a.length; o++) a[o].selected = !1;
                    return this.cartList = t, [ 2 ];
                }
            });
        });
    }, e.prototype.onQuantityChangedHandle = function(t) {
        var e = this;
        this.timer && clearTimeout(this.timer), this.timer = setTimeout(function(t) {
            e.updateQuantity(t);
        }, 300, t);
    }, e.prototype.updateQuantity = function(t) {
        return o(this, void 0, void 0, function() {
            return i(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/order/shoppingTrolley/change", t.detail) ];

                  case 1:
                    return e.sent() && this.getCartList(), [ 2 ];
                }
            });
        });
    }, e.prototype.onTabChangedHandle = function(t) {
        var e = "/" + t.detail.path;
        c.go(e, l.Constant.LOGIN_JUMP_REDIRECT_TO);
    }, r([ u.Data(void 0) ], e.prototype, "cartList", void 0), r([ u.Data(s.globalData.tab2List) ], e.prototype, "tabList", void 0), 
    e;
}(a.default);

exports.default = p;