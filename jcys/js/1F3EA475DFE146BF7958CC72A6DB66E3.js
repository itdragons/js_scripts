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
    var a, i = arguments.length, s = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, r) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, r, n); else for (var u = t.length - 1; u >= 0; u--) (a = t[u]) && (s = (i < 3 ? a(s) : i > 3 ? a(o, r, s) : a(o, r)) || s);
    return i > 3 && s && Object.defineProperty(o, r, s), s;
}, n = function(t, e, o, r) {
    return new (o || (o = Promise))(function(n, a) {
        function i(t) {
            try {
                u(r.next(t));
            } catch (t) {
                a(t);
            }
        }
        function s(t) {
            try {
                u(r.throw(t));
            } catch (t) {
                a(t);
            }
        }
        function u(t) {
            var e;
            t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                t(e);
            })).then(i, s);
        }
        u((r = r.apply(t, e || [])).next());
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
            }([ a, s ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = require("./A02C1207DFE146BFC64A7A00113A66E3"), s = require("./38A05F86DFE146BF5EC63781B6CC66E3"), u = require("./9D37ECA4DFE146BFFB5184A3CEFC66E3"), c = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), d = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), l = [ {
    text: "全部",
    selected: !0
}, {
    text: "待付款",
    selected: !1
}, {
    text: "待确认",
    selected: !1
}, {
    text: "待配送",
    selected: !1
}, {
    text: "待自提",
    selected: !1
}, {
    text: "已完成",
    selected: !1
}, {
    text: "待评价",
    selected: !1
} ], p = getApp(), h = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.statusIndex = -1, e.tabList = [], e;
    }
    return o(e, t), e.prototype.onLoad = function(e) {
        t.prototype.onLoad.call(this), wx.hideHomeButton();
        var o = e.index;
        void 0 !== o && (this.statusIndex = 1 * o, this.initData(1 * o)), this.getShopsOrder(!0, this.getStatus(this.statusIndex));
    }, e.prototype.onShow = function() {
        p.globalData.refresh && (p.globalData.refresh = !1, this.getShopsOrder(!0, this.getStatus(this.statusIndex)));
    }, e.prototype.initData = function(t) {
        for (var e = 0; e < l.length; e++) l[e].selected = t === e;
        this.currentNavData = l;
    }, e.prototype.onNavIndexChanged = function(t) {
        this.extractCode = "";
        for (var e = 0; e < l.length; e++) l[e].selected = t.detail === e;
        this.currentNavData = l, this.statusIndex = 1 * t.detail, this.loadDataForStatus(1 * t.detail);
    }, e.prototype.initLoadPaging = function() {
        this.loadPaging = new u.default({
            path: "/consumer/order/orderPageList",
            params: {
                orderType: d.Constant.O2O_GOODS_TYPE
            }
        });
    }, e.prototype.getShopsOrder = function(t, e) {
        return void 0 === t && (t = !0), n(this, void 0, void 0, function() {
            var o;
            return a(this, function(r) {
                switch (r.label) {
                  case 0:
                    return this.loadPaging || this.initLoadPaging(), -1 === e ? delete this.loadPaging.params.status : this.loadPaging.params.status = e, 
                    11 === e && 4 === this.statusIndex ? this.loadPaging.params.shipMode = 2 : 11 === e && 3 === this.statusIndex ? this.loadPaging.params.shipMode = 1 : delete this.loadPaging.params.shipMode, 
                    19 === e ? (delete this.loadPaging.params.status, this.loadPaging.params.orderStatus = 3) : delete this.loadPaging.params.orderStatus, 
                    [ 4, this.loadPaging.loadData(t) ];

                  case 1:
                    return (o = r.sent()) && (t && (this.scrollTop = 0), this.noMore = !o.hasMore, this.list = o.list), 
                    [ 2 ];
                }
            });
        });
    }, e.prototype.onToLowerHandle = function() {
        if (!this.noMore) {
            var t = this.getStatus(this.statusIndex);
            this.getShopsOrder(!1, t);
        }
    }, e.prototype.getStatus = function(t) {
        var e = -1;
        switch (t) {
          case 1:
            e = 0;
            break;

          case 2:
            e = 10;
            break;

          case 3:
          case 4:
            e = 11;
            break;

          case 5:
            e = 19;
            break;

          case 6:
            e = 13;
        }
        return e;
    }, e.prototype.loadDataForStatus = function(t) {
        var e = this.getStatus(t);
        this.noMore = !1, this.getShopsOrder(!0, e);
    }, e.prototype.cancelOrder = function(t) {
        return n(this, void 0, void 0, function() {
            return a(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/order/cancel", {
                        orderId: t
                    }, !0, "取消中...") ];

                  case 1:
                    return e.sent() && this.loadDataForStatus(this.statusIndex), [ 2 ];
                }
            });
        });
    }, e.prototype.onCancelOrderHandle = function(t) {
        var e = this, o = t.detail;
        c.alert({
            content: "确认取消当前订单吗？",
            showCancel: !0,
            confirmText: "确认",
            confirm: function() {
                e.cancelOrder(o);
            }
        });
    }, e.prototype.onPayHandle = function(t) {
        return n(this, void 0, void 0, function() {
            var e, o, r;
            return a(this, function(n) {
                return e = t.detail, o = e.orderId, r = e.type, c.go("/pages/confirm_order/confirm_order?index=" + r + "&orderId=" + o + "&from=" + d.Constant.ORDER_FROM_ORDER_LIST), 
                [ 2 ];
            });
        });
    }, e.prototype.onPickupCodeHandle = function(t) {
        return n(this, void 0, void 0, function() {
            var e;
            return a(this, function(o) {
                switch (o.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/order/extractCode", {
                        orderId: t.detail
                    }, !0, "加载中...") ];

                  case 1:
                    return e = o.sent().extractCode, this.extractCode = e, this.show = !0, [ 2 ];
                }
            });
        });
    }, e.prototype.onConfirmReceiptHandle = function(t) {
        return n(this, void 0, void 0, function() {
            return a(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/order/confirmReceipt", {
                        orderId: t.detail
                    }, !0, "确认中...") ];

                  case 1:
                    return e.sent() && (this.onNavIndexChanged({
                        detail: 6
                    }), this.loadDataForStatus(this.statusIndex)), [ 2 ];
                }
            });
        });
    }, e.prototype.onHideHandle = function() {
        this.show = !1;
    }, e.prototype.onRequestRefundHandle = function(t) {
        var e = this, o = t.detail.id;
        c.alert({
            content: "确定申请退款吗？",
            showCancel: !0,
            confirmText: "确定",
            confirm: function() {
                e.requestRefund(o);
            }
        });
    }, e.prototype.requestRefund = function(t) {
        this.simpleRequest("/consumer/order/applicationForDrawback", {
            orderId: t
        }, !0, "请求中...") && this.loadDataForStatus(this.statusIndex);
    }, e.prototype.onTabChangedHandle = function(t) {
        var e = "/" + t.detail.path;
        c.go(e, d.Constant.LOGIN_JUMP_REDIRECT_TO);
    }, r([ s.Data(l) ], e.prototype, "currentNavData", void 0), r([ s.Data(!1) ], e.prototype, "noMore", void 0), 
    r([ s.Data([]) ], e.prototype, "list", void 0), r([ s.Data(0) ], e.prototype, "scrollTop", void 0), 
    r([ s.Data("") ], e.prototype, "extractCode", void 0), r([ s.Data(!1) ], e.prototype, "show", void 0), 
    r([ s.Data(-1) ], e.prototype, "statusIndex", void 0), r([ s.Data(p.globalData.tab1List) ], e.prototype, "tabList", void 0), 
    e;
}(i.default);

exports.default = h;