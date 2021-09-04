var o, e = require("jcys/js/@babel/runtime/helpers/typeof.js"), t = (o = function(e, t) {
    return (o = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(o, e) {
        o.__proto__ = e;
    } || function(o, e) {
        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (o[t] = e[t]);
    })(e, t);
}, function(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    function r() {
        this.constructor = e;
    }
    o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, 
    new r());
}), r = function(o, t, r, n) {
    var i, s = arguments.length, a = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(o, t, r, n); else for (var d = o.length - 1; d >= 0; d--) (i = o[d]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, r, a) : i(t, r)) || a);
    return s > 3 && a && Object.defineProperty(t, r, a), a;
}, n = function(o, e, t, r) {
    return new (t || (t = Promise))(function(n, i) {
        function s(o) {
            try {
                d(r.next(o));
            } catch (o) {
                i(o);
            }
        }
        function a(o) {
            try {
                d(r.throw(o));
            } catch (o) {
                i(o);
            }
        }
        function d(o) {
            var e;
            o.done ? n(o.value) : (e = o.value, e instanceof t ? e : new t(function(o) {
                o(e);
            })).then(s, a);
        }
        d((r = r.apply(o, e || [])).next());
    });
}, i = function(o, e) {
    var t, r, n, i, s = {
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
                if (t) throw new TypeError("Generator is already executing.");
                for (;s; ) try {
                    if (t = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 
                    0) : r.next) && !(n = n.call(r, i[1])).done) return n;
                    switch (r = 0, n && (i = [ 2 & i[0], n.value ]), i[0]) {
                      case 0:
                      case 1:
                        n = i;
                        break;

                      case 4:
                        return s.label++, {
                            value: i[1],
                            done: !1
                        };

                      case 5:
                        s.label++, r = i[1], i = [ 0 ];
                        continue;

                      case 7:
                        i = s.ops.pop(), s.trys.pop();
                        continue;

                      default:
                        if (!(n = s.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                            s.label = i[1];
                            break;
                        }
                        if (6 === i[0] && s.label < n[1]) {
                            s.label = n[1], n = i;
                            break;
                        }
                        if (n && s.label < n[2]) {
                            s.label = n[2], s.ops.push(i);
                            break;
                        }
                        n[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    i = e.call(o, s);
                } catch (o) {
                    i = [ 6, o ], r = 0;
                } finally {
                    t = n = 0;
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

var s, a = require("./A02C1207DFE146BFC64A7A00113A66E3"), d = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), u = require("./38A05F86DFE146BF5EC63781B6CC66E3"), p = require("./E4281831DFE146BF824E7036A03D66E3"), c = require("./34D73CD2DFE146BF52B154D556BD66E3"), f = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), h = require("./2C30C173DFE146BF4A56A9740F4D66E3"), l = getApp(), y = function(o) {
    function e() {
        var e = null !== o && o.apply(this, arguments) || this;
        return e.showCouponsList = !1, e.isCouponsHaveBeenSubmitted = !1, e;
    }
    return t(e, o), e.prototype.onLoad = function(e) {
        o.prototype.onLoad.call(this);
        var t = e.index, r = void 0 === t ? 1 : t, n = e.orderId, i = void 0 === n ? "" : n, s = e.from, a = void 0 === s ? f.Constant.ORDER_FROM_CREATE_ORDER : s;
        this.type = 1 * r, this.from = a, this.orderId = i, this.getOrderInfo();
    }, e.prototype.onShow = function() {
        var o = wx.getStorageSync("choose_address");
        o && (this.addressSelected = JSON.parse(o), wx.removeStorageSync("choose_address"), 
        this.updateAddress());
    }, e.prototype.onChooseCouponsWayHandle = function() {
        this.showCouponsList = !0;
    }, e.prototype.onHideHandle = function() {
        this.showCouponsList = !1;
    }, e.prototype.onCouponsChangedHandle = function(o) {
        console.log(this.couponList[o.detail]), this.showCouponsList = !1, -1 !== o.detail && (this.couponInfo = this.couponList[o.detail], 
        this.couponAmount = this.couponList[o.detail].couponAmount);
    }, e.prototype.getOrderInfo = function() {
        return n(this, void 0, void 0, function() {
            var o, e;
            return i(this, function(t) {
                switch (t.label) {
                  case 0:
                    return o = this, [ 4, this.simpleRequest("/consumer/order/orderDetail", {
                        orderId: this.orderId
                    }) ];

                  case 1:
                    return o.orderInfo = t.sent() || {}, this.payWay = this.orderInfo.orderInfo.paymentMode - 1, 
                    this.couponAmount = this.orderInfo.orderInfo.couponAmount, this.couponAmount && this.couponAmount > 0 && (this.isCouponsHaveBeenSubmitted = !0), 
                    3 === this.orderInfo.orderInfo.paymentMode ? (this.orderChangeObj = this.orderInfo.orderInfo, 
                    this.loaded = !0) : this.choicePayWay(this.payWay), 2 !== this.orderInfo.orderInfo.proType && 3 !== this.orderInfo.orderInfo.proType || this.getUserIntegral(), 
                    this.orderInfo.orderInfo.overTime && (e = this, s = setInterval(function() {
                        var o = ("" + d.getDateValue("" + new Date(), e.orderInfo.orderInfo.overTime.replace(/-/g, "/"), 0)).split(",");
                        (o = o.map(function(o) {
                            return parseInt(o);
                        }))[0] <= 0 && o[1] <= 0 && o[2] <= 0 && o[3] <= 0 && (o = [], clearInterval(s)), 
                        e.timeList = o;
                    }, 1e3)), [ 2 ];
                }
            });
        });
    }, e.prototype.getUserIntegral = function() {
        return n(this, void 0, void 0, function() {
            var o;
            return i(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4, h.request("/consumer/user/info") ];

                  case 1:
                    return 0 === (o = e.sent()).code && (this.userInfo = o.data.userInfo), [ 2 ];
                }
            });
        });
    }, e.prototype.choicePayWay = function(o) {
        return n(this, void 0, void 0, function() {
            var e;
            return i(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/order/choicePayWay", {
                        orderId: this.orderId,
                        payWay: o + 1
                    }) ];

                  case 1:
                    return e = t.sent(), this.orderChangeObj = e, this.getCouponList(), [ 2 ];
                }
            });
        });
    }, e.prototype.getCouponList = function() {
        return n(this, void 0, void 0, function() {
            var o;
            return i(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/coupon/record/list", {
                        stockType: this.orderInfo.orderInfo.orderType,
                        orgId: this.orderInfo.orderInfo.orgId,
                        status: 0,
                        mobilePhone: l.globalData.userInfo.mobilePhone
                    }) ];

                  case 1:
                    return o = e.sent(), this.couponList = o, 1 === this.type ? this.getShippingAddress() : this.loaded = !0, 
                    [ 2 ];
                }
            });
        });
    }, e.prototype.getShippingAddress = function() {
        return n(this, void 0, void 0, function() {
            var o, e, t = this;
            return i(this, function(r) {
                switch (r.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/user/userAddress/list") ];

                  case 1:
                    if (o = r.sent() || [], this.loaded = !0, o.length) {
                        if ((e = o.find(function(o) {
                            var e = t.orderInfo;
                            return o.orgId && o.orgId === e.orderInfo.orgId;
                        })) && e.length || (e = o.find(function(o) {
                            return 1 === o.isDefault;
                        })), e) return this.addressSelected = e, this.updateAddress(), [ 2 ];
                        this.addressSelected = o[0], this.updateAddress();
                    }
                    return [ 2 ];
                }
            });
        });
    }, e.prototype.onChooseAddressHandle = function() {
        d.go("/pages/address_management/address_management?from=1");
    }, e.prototype.getPrice = function() {
        return (this.orderChangeObj.paymentAmount / 100 - (this.couponAmount || 0)).toFixed(2);
    }, e.prototype.pay = function() {
        return n(this, void 0, void 0, function() {
            var o, e, t = this;
            return i(this, function(r) {
                switch (r.label) {
                  case 0:
                    return o = this.addressSelected, [ 4, this.simpleRequest("/consumer/order/payOrder", {
                        orderId: this.orderId,
                        couponId: this.couponInfo.id ? this.couponInfo.id : null,
                        appid: p.default.APPID,
                        openid: l.globalData.userInfo.openId,
                        userAddressId: o.id,
                        remark: this.remark,
                        payWay: this.payWay + 1
                    }) ];

                  case 1:
                    return (e = r.sent().extraData) ? (c.wxApiToPromise(wx.requestPayment, e).then(function(o) {
                        "requestPayment:ok" === o.errMsg ? (d.showToastNoIcon("支付成功"), setTimeout(function() {
                            1 === t.orderInfo.orderInfo.orderType ? d.go("/pages/my_order/my_order", f.Constant.LOGIN_JUMP_REDIRECT_TO) : d.go("/pages/my_order_for_o2o/my_order_for_o2o", f.Constant.LOGIN_JUMP_REDIRECT_TO);
                        }, 5e3)) : (d.showToastNoIcon(o.errMsg), t.goOrder());
                    }, function() {
                        d.showToastNoIcon("支付失败"), t.goOrder();
                    }).catch(function() {
                        d.showToastNoIcon("未知错误"), t.goOrder();
                    }), [ 2 ]) : (1 === this.payWay ? (d.showToastNoIcon("支付成功"), setTimeout(function() {
                        t.goOrder();
                    }, 3e3)) : this.goOrder(), [ 2 ]);
                }
            });
        });
    }, e.prototype.onClickHandle = function() {
        var o = this, e = this.orderInfo, t = this.addressSelected;
        if (1 === this.type) {
            if (!(null == t ? void 0 : t.trueName)) return void d.showToastNoIcon("请填写收货地址");
            if (console.log(t), 2 === e.orderInfo.proType || 3 === e.orderInfo.proType) {
                if (this.userInfo.trueName !== (null == t ? void 0 : t.trueName)) return void d.showToastNoIcon("收货人与实名信息不一致");
                if (this.userInfo.mobilePhone !== (null == t ? void 0 : t.mobilePhone)) return void d.showToastNoIcon("收货手机号与实名信息不一致");
                if (this.userInfo.authenticationAddress !== "" + (null == t ? void 0 : t.provinceName) + (null == t ? void 0 : t.cityName) + (null == t ? void 0 : t.countyName) + (null == t ? void 0 : t.fullAddress)) return void d.showToastNoIcon("收货地址与与实名地址不一致");
            }
        }
        3 === e.orderInfo.paymentMode ? d.alert({
            content: "将会从您所在企业余额中扣除" + this.getPrice() + "元，请问确认支付吗？",
            showCancel: !0,
            confirmText: "确认",
            confirm: function() {
                o.pay();
            }
        }) : 1 === this.payWay ? d.alert({
            content: "将会从您一卡通余额中扣除" + this.getPrice() + "元，订单暂不支持退款。是否确认支付吗？",
            showCancel: !0,
            confirmText: "确认",
            confirm: function() {
                o.pay();
            }
        }) : this.pay();
    }, e.prototype.goOrder = function() {
        var o = this;
        setTimeout(function() {
            1 === o.orderInfo.orderInfo.orderType ? d.go("/pages/my_order/my_order", f.Constant.LOGIN_JUMP_REDIRECT_TO) : d.go("/pages/my_order_for_o2o/my_order_for_o2o", f.Constant.LOGIN_JUMP_REDIRECT_TO);
        }, 2e3);
    }, e.prototype.updateAddress = function() {
        return n(this, void 0, void 0, function() {
            var o, e, t;
            return i(this, function(r) {
                switch (r.label) {
                  case 0:
                    return (o = this.addressSelected).id ? [ 4, this.simpleRequest("/consumer/order/updateFreightAmount", {
                        orderId: this.orderId,
                        userAddressId: o.id
                    }) ] : [ 2 ];

                  case 1:
                    return (e = r.sent()) && !0 !== e && ((t = this.orderInfo).orderInfo.freightAmount = e.freightAmount, 
                    t.orderInfo.paymentAmount = e.paymentAmount, this.orderInfo = t), e || (this.forbiddenToPay = !0), 
                    [ 2 ];
                }
            });
        });
    }, e.prototype.onRemarkChangedHandle = function(o) {
        this.remark = o.detail.value;
    }, e.prototype.onChoosePayWayHandle = function(o) {
        this.payWay = 1 * o.currentTarget.dataset.index, this.choicePayWay(this.payWay);
    }, r([ u.Data(1) ], e.prototype, "type", void 0), r([ u.Data(0) ], e.prototype, "couponAmount", void 0), 
    r([ u.Data({}) ], e.prototype, "couponInfo", void 0), r([ u.Data([]) ], e.prototype, "couponList", void 0), 
    r([ u.Data(!1) ], e.prototype, "showCouponsList", void 0), r([ u.Data(!1) ], e.prototype, "isCouponsHaveBeenSubmitted", void 0), 
    r([ u.Data(0) ], e.prototype, "payWay", void 0), r([ u.Data({}) ], e.prototype, "orderChangeObj", void 0), 
    r([ u.Data("") ], e.prototype, "orderId", void 0), r([ u.Data({}) ], e.prototype, "orderInfo", void 0), 
    r([ u.Data({}) ], e.prototype, "userInfo", void 0), r([ u.Data({}) ], e.prototype, "addressSelected", void 0), 
    r([ u.Data(!1) ], e.prototype, "loaded", void 0), r([ u.Data(!1) ], e.prototype, "forbiddenToPay", void 0), 
    r([ u.Data("") ], e.prototype, "remark", void 0), r([ u.Data([]) ], e.prototype, "timeList", void 0), 
    e;
}(a.default);

exports.default = y;