var e, t = require("jcys/js/@babel/runtime/helpers/typeof.js"), r = (e = function(t, r) {
    return (e = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    })(t, r);
}, function(t, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    function o() {
        this.constructor = t;
    }
    e(t, r), t.prototype = null === r ? Object.create(r) : (o.prototype = r.prototype, 
    new o());
}), o = function(e, r, o, n) {
    var i, c = arguments.length, a = c < 3 ? r : null === n ? n = Object.getOwnPropertyDescriptor(r, o) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, r, o, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (c < 3 ? i(a) : c > 3 ? i(r, o, a) : i(r, o)) || a);
    return c > 3 && a && Object.defineProperty(r, o, a), a;
}, n = function(e, t, r, o) {
    return new (r || (r = Promise))(function(n, i) {
        function c(e) {
            try {
                u(o.next(e));
            } catch (e) {
                i(e);
            }
        }
        function a(e) {
            try {
                u(o.throw(e));
            } catch (e) {
                i(e);
            }
        }
        function u(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                e(t);
            })).then(c, a);
        }
        u((o = o.apply(e, t || [])).next());
    });
}, i = function(e, t) {
    var r, o, n, i, c = {
        label: 0,
        sent: function() {
            if (1 & n[0]) throw n[1];
            return n[1];
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
                for (;c; ) try {
                    if (r = 1, o && (n = 2 & i[0] ? o.return : i[0] ? o.throw || ((n = o.return) && n.call(o), 
                    0) : o.next) && !(n = n.call(o, i[1])).done) return n;
                    switch (o = 0, n && (i = [ 2 & i[0], n.value ]), i[0]) {
                      case 0:
                      case 1:
                        n = i;
                        break;

                      case 4:
                        return c.label++, {
                            value: i[1],
                            done: !1
                        };

                      case 5:
                        c.label++, o = i[1], i = [ 0 ];
                        continue;

                      case 7:
                        i = c.ops.pop(), c.trys.pop();
                        continue;

                      default:
                        if (!(n = c.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            c = 0;
                            continue;
                        }
                        if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                            c.label = i[1];
                            break;
                        }
                        if (6 === i[0] && c.label < n[1]) {
                            c.label = n[1], n = i;
                            break;
                        }
                        if (n && c.label < n[2]) {
                            c.label = n[2], c.ops.push(i);
                            break;
                        }
                        n[2] && c.ops.pop(), c.trys.pop();
                        continue;
                    }
                    i = t.call(e, c);
                } catch (e) {
                    i = [ 6, e ], o = 0;
                } finally {
                    r = n = 0;
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

var c = require("./A02C1207DFE146BFC64A7A00113A66E3"), a = require("./38A05F86DFE146BF5EC63781B6CC66E3"), u = function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return r(t, e), t.prototype.onLoad = function(t) {
        e.prototype.onLoad.call(this);
        var r = t.orderId, o = void 0 === r ? "" : r;
        this.orderId = o, this.getOrderInfo();
    }, t.prototype.getOrderInfo = function() {
        return n(this, void 0, void 0, function() {
            var e;
            return i(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/order/orderDetail", {
                        orderId: this.orderId
                    }) ];

                  case 1:
                    return (e = t.sent() || {}).orderLogisticsList = e.orderLogisticsList.sort(function(e, t) {
                        return Date.parse(t.occurTime) > Date.parse(e.occurTime) ? 1 : Date.parse(t.occurTime) === Date.parse(e.occurTime) ? 0 : -1;
                    }), this.addressSelected = e.orderAddress, this.orderInfo = e, [ 2 ];
                }
            });
        });
    }, o([ a.Data("") ], t.prototype, "orderId", void 0), o([ a.Data("") ], t.prototype, "orderInfo", void 0), 
    o([ a.Data({}) ], t.prototype, "addressSelected", void 0), t;
}(c.default);

exports.default = u;