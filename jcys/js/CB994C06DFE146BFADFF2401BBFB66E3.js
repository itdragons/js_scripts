var t, e = require("jcys/js/@babel/runtime/helpers/typeof.js"), r = (t = function(e, r) {
    return (t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    })(e, r);
}, function(e, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    function n() {
        this.constructor = e;
    }
    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, 
    new n());
}), n = function(t, r, n, o) {
    var i, u = arguments.length, a = u < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, n) : o;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, r, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (u < 3 ? i(a) : u > 3 ? i(r, n, a) : i(r, n)) || a);
    return u > 3 && a && Object.defineProperty(r, n, a), a;
}, o = function(t, e, r, n) {
    return new (r || (r = Promise))(function(o, i) {
        function u(t) {
            try {
                c(n.next(t));
            } catch (t) {
                i(t);
            }
        }
        function a(t) {
            try {
                c(n.throw(t));
            } catch (t) {
                i(t);
            }
        }
        function c(t) {
            var e;
            t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                t(e);
            })).then(u, a);
        }
        c((n = n.apply(t, e || [])).next());
    });
}, i = function(t, e) {
    var r, n, o, i, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
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
                if (r) throw new TypeError("Generator is already executing.");
                for (;u; ) try {
                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 
                    0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                    switch (n = 0, o && (i = [ 2 & i[0], o.value ]), i[0]) {
                      case 0:
                      case 1:
                        o = i;
                        break;

                      case 4:
                        return u.label++, {
                            value: i[1],
                            done: !1
                        };

                      case 5:
                        u.label++, n = i[1], i = [ 0 ];
                        continue;

                      case 7:
                        i = u.ops.pop(), u.trys.pop();
                        continue;

                      default:
                        if (!(o = u.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            u = 0;
                            continue;
                        }
                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                            u.label = i[1];
                            break;
                        }
                        if (6 === i[0] && u.label < o[1]) {
                            u.label = o[1], o = i;
                            break;
                        }
                        if (o && u.label < o[2]) {
                            u.label = o[2], u.ops.push(i);
                            break;
                        }
                        o[2] && u.ops.pop(), u.trys.pop();
                        continue;
                    }
                    i = e.call(t, u);
                } catch (t) {
                    i = [ 6, t ], n = 0;
                } finally {
                    r = o = 0;
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

var u = require("./A02C1207DFE146BFC64A7A00113A66E3"), a = require("./38A05F86DFE146BF5EC63781B6CC66E3"), c = function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return r(e, t), e.prototype.onLoad = function(e) {
        t.prototype.onLoad.call(this), this.orgId = e.orgId;
    }, e.prototype.onShow = function() {
        this.getCartList();
    }, e.prototype.getCartList = function() {
        return o(this, void 0, void 0, function() {
            var t, e, r, n, o, u;
            return i(this, function(i) {
                switch (i.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/order/shoppingTrolley/list", {
                        bigType: 2,
                        orgId: this.orgId
                    }) ];

                  case 1:
                    if ((t = i.sent() || []).length) for (e = 0, r = t; e < r.length; e++) if ((n = r[e]).selected = !1, 
                    n.proList.length) for (o = 0, u = n.proList; o < u.length; o++) u[o].selected = !1;
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
    }, n([ a.Data(void 0) ], e.prototype, "cartList", void 0), n([ a.Data("") ], e.prototype, "orgId", void 0), 
    e;
}(u.default);

exports.default = c;