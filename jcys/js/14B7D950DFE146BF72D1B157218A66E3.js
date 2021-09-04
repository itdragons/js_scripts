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
    function n() {
        this.constructor = t;
    }
    e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, 
    new n());
}), n = function(e, r, n, a) {
    var o, i = arguments.length, s = i < 3 ? r : null === a ? a = Object.getOwnPropertyDescriptor(r, n) : a;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, r, n, a); else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (s = (i < 3 ? o(s) : i > 3 ? o(r, n, s) : o(r, n)) || s);
    return i > 3 && s && Object.defineProperty(r, n, s), s;
}, a = function(e, t, r, n) {
    return new (r || (r = Promise))(function(a, o) {
        function i(e) {
            try {
                c(n.next(e));
            } catch (e) {
                o(e);
            }
        }
        function s(e) {
            try {
                c(n.throw(e));
            } catch (e) {
                o(e);
            }
        }
        function c(e) {
            var t;
            e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                e(t);
            })).then(i, s);
        }
        c((n = n.apply(e, t || [])).next());
    });
}, o = function(e, t) {
    var r, n, a, o, i = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1];
        },
        trys: [],
        ops: []
    };
    return o = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this;
    }), o;
    function s(o) {
        return function(s) {
            return function(o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (;i; ) try {
                    if (r = 1, n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 
                    0) : n.next) && !(a = a.call(n, o[1])).done) return a;
                    switch (n = 0, a && (o = [ 2 & o[0], a.value ]), o[0]) {
                      case 0:
                      case 1:
                        a = o;
                        break;

                      case 4:
                        return i.label++, {
                            value: o[1],
                            done: !1
                        };

                      case 5:
                        i.label++, n = o[1], o = [ 0 ];
                        continue;

                      case 7:
                        o = i.ops.pop(), i.trys.pop();
                        continue;

                      default:
                        if (!(a = i.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                            i = 0;
                            continue;
                        }
                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                            i.label = o[1];
                            break;
                        }
                        if (6 === o[0] && i.label < a[1]) {
                            i.label = a[1], a = o;
                            break;
                        }
                        if (a && i.label < a[2]) {
                            i.label = a[2], i.ops.push(o);
                            break;
                        }
                        a[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    o = t.call(e, i);
                } catch (e) {
                    o = [ 6, e ], n = 0;
                } finally {
                    r = a = 0;
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                };
            }([ o, s ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = require("./A02C1207DFE146BFC64A7A00113A66E3"), s = require("./38A05F86DFE146BF5EC63781B6CC66E3"), c = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.canAfterSalePageList = [], t.processingAfterSalePageList = [], t.afterSaleRecordPageList = [], 
        t.navIndex = 0, t;
    }
    return r(t, e), t.prototype.onLoad = function() {
        e.prototype.onLoad.call(this);
    }, t.prototype.onShow = function() {
        0 === this.navIndex ? this.getCanAfterSalePageList() : 1 === this.navIndex ? this.getAfterSalePageList() : this.getAfterSaleRecordPageList();
    }, t.prototype.getAfterSaleRecordPageList = function() {
        return a(this, void 0, void 0, function() {
            var e;
            return o(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/order/afterSalePageList", {
                        status: 2
                    }) ];

                  case 1:
                    return e = t.sent(), this.afterSaleRecordPageList = e.list, [ 2 ];
                }
            });
        });
    }, t.prototype.getCanAfterSalePageList = function() {
        return a(this, void 0, void 0, function() {
            var e, t, r, n, a, i, s, c, l;
            return o(this, function(o) {
                switch (o.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/order/canAfterSalePageList") ];

                  case 1:
                    for (e = o.sent(), t = e.list, r = [], n = 0, a = t; n < a.length; n++) for (i = a[n], 
                    s = 0, c = i.details; s < c.length; s++) (l = c[s]).integralStatus = i.integralStatus, 
                    l.affirmTime = i.affirmTime, l.status = i.status, l.orderId = i.id, l.paymentMode = i.paymentMode, 
                    l.shipMode = i.shipMode, l.status = i.status, r.push(l);
                    return this.canAfterSalePageList = r, [ 2 ];
                }
            });
        });
    }, t.prototype.getAfterSalePageList = function() {
        return a(this, void 0, void 0, function() {
            var e;
            return o(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/order/afterSalePageList", {
                        status: 1
                    }) ];

                  case 1:
                    return e = t.sent(), this.processingAfterSalePageList = e.list, [ 2 ];
                }
            });
        });
    }, t.prototype.onIndexChangedHandle = function(e) {
        switch (this.navIndex = 1 * e.detail, this.navIndex) {
          case 0:
            this.canAfterSalePageList.length || this.getCanAfterSalePageList();
            break;

          case 1:
            this.processingAfterSalePageList.length || this.getAfterSalePageList();
            break;

          case 2:
            this.afterSaleRecordPageList.length || this.getAfterSaleRecordPageList();
        }
    }, n([ s.Data([]) ], t.prototype, "canAfterSalePageList", void 0), n([ s.Data([]) ], t.prototype, "processingAfterSalePageList", void 0), 
    n([ s.Data([]) ], t.prototype, "afterSaleRecordPageList", void 0), n([ s.Data(0) ], t.prototype, "navIndex", void 0), 
    t;
}(i.default);

exports.default = c;