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
    var i, s = arguments.length, a = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, r) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, r, n); else for (var u = t.length - 1; u >= 0; u--) (i = t[u]) && (a = (s < 3 ? i(a) : s > 3 ? i(o, r, a) : i(o, r)) || a);
    return s > 3 && a && Object.defineProperty(o, r, a), a;
}, n = function(t, e, o, r) {
    return new (o || (o = Promise))(function(n, i) {
        function s(t) {
            try {
                u(r.next(t));
            } catch (t) {
                i(t);
            }
        }
        function a(t) {
            try {
                u(r.throw(t));
            } catch (t) {
                i(t);
            }
        }
        function u(t) {
            var e;
            t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                t(e);
            })).then(s, a);
        }
        u((r = r.apply(t, e || [])).next());
    });
}, i = function(t, e) {
    var o, r, n, i, s = {
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
                if (o) throw new TypeError("Generator is already executing.");
                for (;s; ) try {
                    if (o = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 
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
                    i = e.call(t, s);
                } catch (t) {
                    i = [ 6, t ], r = 0;
                } finally {
                    o = n = 0;
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

var s = require("./A02C1207DFE146BFC64A7A00113A66E3"), a = require("./38A05F86DFE146BF5EC63781B6CC66E3"), u = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), c = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), l = require("./AB003BE7DFE146BFCD6653E01BBC66E3"), d = require("./2C30C173DFE146BF4A56A9740F4D66E3"), p = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.showChooseSpec = !1, e.showUserOrgPlanList = !1, e.id = "", e.clickType = 1, 
        e;
    }
    return o(e, t), e.prototype.onLoad = function(e) {
        t.prototype.onLoad.call(this);
        var o = e.id, r = void 0 === o ? "" : o, n = e.rushPurchaseId, i = e.sellingPrice, s = e.type, a = void 0 === s ? c.Constant.GOODS_TYPE : s;
        this.id = r, this.rushPurchaseId = n, this.type = a, this.sellingPrice = i || 0, 
        this.getDataFromServer();
    }, e.prototype.getDataFromServer = function() {
        return n(this, void 0, void 0, function() {
            var t;
            return i(this, function(e) {
                switch (e.label) {
                  case 0:
                    return t = this, [ 4, this.simpleRequest("/consumer/pro/common/product/detail", {
                        proId: this.id
                    }) ];

                  case 1:
                    return t.info = e.sent() || {}, 1 === parseInt(this.type) && this.getUserOrgPlanList(), 
                    [ 2 ];
                }
            });
        });
    }, e.prototype.onChooseUserOrgPlanWayHandle = function() {
        this.showUserOrgPlanList = !0;
    }, e.prototype.onUserOrgPlanChangedHandle = function(t) {
        this.showUserOrgPlanList = !1, -1 !== t.detail && (this.selectUserPlan = this.userOrgPlanList[t.detail]);
    }, e.prototype.onCreateOrderHandle2 = function() {
        3 !== this.info.proInfo.proType || this.selectUserPlan ? this.onCreateOrderHandle2Status() : this.buyLiquorQualification(2);
    }, e.prototype.onCreateOrderHandle2Status = function() {
        !this.userOrgPlanList.length || this.selectUserPlan ? (this.clickType = 2, this.showChooseSpec = !0) : u.showToastNoIcon("请选择计划");
    }, e.prototype.buyLiquorQualification = function(t) {
        var e = this;
        u.showLoading(), d.request("/consumer/pro/buyLiquorQualification/check").then(function(o) {
            u.hideLoading(), 0 === o.code ? o.data.have ? 2 === t ? e.onCreateOrderHandle2Status() : e.onAddCartHandle2Status() : u.alert({
                content: "你还没有购买资格哦，敬请期待下次机会吧"
            }) : u.showToastNoIcon(o.message);
        }).catch(function(t) {
            console.log(t), u.hideLoading();
        });
    }, e.prototype.onCreateOrderHandle = function(t) {
        return n(this, void 0, void 0, function() {
            var e, o, r, n, s, a;
            return i(this, function(i) {
                switch (i.label) {
                  case 0:
                    return e = t.detail.deliveryMethod, o = this.info, r = o.proInfo.orgId, n = void 0 === r ? "" : r, 
                    s = {
                        orderType: this.type,
                        orgId: n,
                        shipMode: t.detail.deliveryMethod,
                        orderDetailList: [ {
                            ostId: "",
                            proId: this.id,
                            quantity: t.detail.quantity
                        } ]
                    }, 1 === parseInt(this.type) && this.selectUserPlan && (s.contractPlanId = this.selectUserPlan.id, 
                    s.buyUnitPrice = this.selectUserPlan.userOrgContract.buyUnitPrice, s.buyNeedIntegral = this.selectUserPlan.userOrgContract.buyNeedIntegral), 
                    this.rushPurchaseId && (s.rushPurchaseId = this.rushPurchaseId), [ 4, this.simpleRequest("/consumer/order/addOrder", s, !0, "提交中...") ];

                  case 1:
                    return (a = i.sent()) && a.orderId && u.go("/pages/confirm_order/confirm_order?index=" + e + "&orderId=" + a.orderId), 
                    [ 2 ];
                }
            });
        });
    }, e.prototype.onAddCartHandle2 = function() {
        3 !== this.info.proInfo.proType ? this.onAddCartHandle2Status() : this.buyLiquorQualification(1);
    }, e.prototype.onAddCartHandle2Status = function() {
        this.clickType = 1, this.showChooseSpec = !0;
    }, e.prototype.getUserOrgPlanList = function() {
        return n(this, void 0, void 0, function() {
            var t, e, o;
            return i(this, function(r) {
                switch (r.label) {
                  case 0:
                    return t = this.info.proInfo.orgId, e = void 0 === t ? "" : t, [ 4, this.simpleRequest("/consumer/user/userOrgPlanList", {
                        orgId: e,
                        planType: this.info.proInfo.proType - 1,
                        canUse: !0
                    }) ];

                  case 1:
                    return (o = r.sent()) && (this.userOrgPlanList = o), [ 2 ];
                }
            });
        });
    }, e.prototype.onAddCartHandle = function(t) {
        return n(this, void 0, void 0, function() {
            return i(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/order/shoppingTrolley/change", {
                        proId: this.id,
                        quantity: t.detail.quantity,
                        shipMode: t.detail.deliveryMethod,
                        addQuantity: !0
                    }) ];

                  case 1:
                    return e.sent() && wx.showToast({
                        title: "添加成功",
                        icon: "success"
                    }), [ 2 ];
                }
            });
        });
    }, e.prototype.onHideHandle = function() {
        this.showUserOrgPlanList = !1, this.showChooseSpec = !1;
    }, e.prototype.onSureHandle = function(t) {
        var e = this.info;
        this.showChooseSpec = !1, e.proInfo.proCount < t.detail.quantity || (2 === this.clickType ? this.onCreateOrderHandle(t) : this.onAddCartHandle(t));
    }, e.prototype.onSpecChangedHandle = function(t) {
        this.id = t.detail, this.getDataFromServer();
    }, r([ a.Data(c.Constant.GOODS_TYPE) ], e.prototype, "type", void 0), r([ a.Data("") ], e.prototype, "info", void 0), 
    r([ a.Data(!1) ], e.prototype, "showChooseSpec", void 0), r([ a.Data("") ], e.prototype, "rushPurchaseId", void 0), 
    r([ a.Data(0) ], e.prototype, "sellingPrice", void 0), r([ a.Data([]) ], e.prototype, "userOrgPlanList", void 0), 
    r([ a.Data(!1) ], e.prototype, "showUserOrgPlanList", void 0), r([ a.Data("") ], e.prototype, "selectUserPlan", void 0), 
    r([ l.Method() ], e.prototype, "onSureHandle", null), e;
}(s.default);

exports.default = p;