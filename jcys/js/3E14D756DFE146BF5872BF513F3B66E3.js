var e, t = require("jcys/js/@babel/runtime/helpers/typeof.js"), o = (e = function(t, o) {
    return (e = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    })(t, o);
}, function(t, o) {
    if ("function" != typeof o && null !== o) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
    function r() {
        this.constructor = t;
    }
    e(t, o), t.prototype = null === o ? Object.create(o) : (r.prototype = o.prototype, 
    new r());
}), r = function(e, o, r, n) {
    var u, i = arguments.length, a = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, r) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, r, n); else for (var s = e.length - 1; s >= 0; s--) (u = e[s]) && (a = (i < 3 ? u(a) : i > 3 ? u(o, r, a) : u(o, r)) || a);
    return i > 3 && a && Object.defineProperty(o, r, a), a;
}, n = function(e, t, o, r) {
    return new (o || (o = Promise))(function(n, u) {
        function i(e) {
            try {
                s(r.next(e));
            } catch (e) {
                u(e);
            }
        }
        function a(e) {
            try {
                s(r.throw(e));
            } catch (e) {
                u(e);
            }
        }
        function s(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                e(t);
            })).then(i, a);
        }
        s((r = r.apply(e, t || [])).next());
    });
}, u = function(e, t) {
    var o, r, n, u, i = {
        label: 0,
        sent: function() {
            if (1 & n[0]) throw n[1];
            return n[1];
        },
        trys: [],
        ops: []
    };
    return u = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this;
    }), u;
    function a(u) {
        return function(a) {
            return function(u) {
                if (o) throw new TypeError("Generator is already executing.");
                for (;i; ) try {
                    if (o = 1, r && (n = 2 & u[0] ? r.return : u[0] ? r.throw || ((n = r.return) && n.call(r), 
                    0) : r.next) && !(n = n.call(r, u[1])).done) return n;
                    switch (r = 0, n && (u = [ 2 & u[0], n.value ]), u[0]) {
                      case 0:
                      case 1:
                        n = u;
                        break;

                      case 4:
                        return i.label++, {
                            value: u[1],
                            done: !1
                        };

                      case 5:
                        i.label++, r = u[1], u = [ 0 ];
                        continue;

                      case 7:
                        u = i.ops.pop(), i.trys.pop();
                        continue;

                      default:
                        if (!(n = i.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                            i = 0;
                            continue;
                        }
                        if (3 === u[0] && (!n || u[1] > n[0] && u[1] < n[3])) {
                            i.label = u[1];
                            break;
                        }
                        if (6 === u[0] && i.label < n[1]) {
                            i.label = n[1], n = u;
                            break;
                        }
                        if (n && i.label < n[2]) {
                            i.label = n[2], i.ops.push(u);
                            break;
                        }
                        n[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    u = t.call(e, i);
                } catch (e) {
                    u = [ 6, e ], r = 0;
                } finally {
                    o = n = 0;
                }
                if (5 & u[0]) throw u[1];
                return {
                    value: u[0] ? u[1] : void 0,
                    done: !0
                };
            }([ u, a ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = require("./A02C1207DFE146BFC64A7A00113A66E3"), a = require("./38A05F86DFE146BF5EC63781B6CC66E3"), s = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), c = require("./2C30C173DFE146BF4A56A9740F4D66E3"), f = require("./AB909F77DFE146BFCDF6F770FE3D66E3"), l = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), p = getApp(), h = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.info = {}, t;
    }
    return o(t, e), t.prototype.onLoad = function(t) {
        e.prototype.onLoad.call(this);
        var o = t.info || "";
        this.info = JSON.parse(f.decryptBase64(o)), this.getUserInfo();
    }, t.prototype.getUserInfo = function() {
        return n(this, void 0, void 0, function() {
            var e;
            return u(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4, c.request("/consumer/user/info") ];

                  case 1:
                    return 0 === (e = t.sent()).code && (this.userInfo = e.data.userInfo, this.formData = {
                        buyerName: 1 === this.info.orderInfo.invoiceType ? this.info.orderInfo.corpName : this.userInfo.trueName,
                        pushPhone: this.userInfo.mobilePhone
                    }), [ 2 ];
                }
            });
        });
    }, t.prototype.onInputChangedHandle = function(e) {
        var t = e.currentTarget.dataset.key, o = this.formData;
        o[t] = e.detail.value, this.formData = o;
    }, t.prototype.validateData = function() {
        var e = this.formData;
        if (!e.buyerName) return s.showToastNoIcon("请填写购方名称"), !1;
        if (1 === this.info.orderInfo.invoiceType) {
            if (!e.buyerTaxNum) return s.showToastNoIcon("请填写纳税人识别号"), !1;
            if (!e.buyerTel) return s.showToastNoIcon("请填写购买方电话"), !1;
            if (!e.buyerAddress) return s.showToastNoIcon("请填写购买方地址"), !1;
            if (!e.buyerAccountName) return s.showToastNoIcon("请填写购买方开户行"), !1;
            if (!e.buyerAccountNumber) return s.showToastNoIcon("请填写购买方开户行账号"), !1;
        }
        return !!e.pushPhone || (s.showToastNoIcon("请填写推送手机号"), !1);
    }, t.prototype.onClickHandle = function() {
        this.validateData() && this.save();
    }, t.prototype.save = function() {
        return n(this, void 0, void 0, function() {
            var e, t, o, r, n, i, a, c, f;
            return u(this, function(u) {
                switch (u.label) {
                  case 0:
                    return e = this.formData, t = e.buyerName, o = e.buyerTaxNum, r = e.buyerTel, n = e.buyerAddress, 
                    i = e.buyerAccountName, a = e.buyerAccountNumber, c = e.pushPhone, f = {
                        orderId: this.info.orderInfo.id,
                        buyerName: t,
                        pushPhone: c
                    }, 1 === this.info.orderInfo.invoiceType && (f.buyerTaxNum = o, f.buyerTel = r, 
                    f.buyerAddress = n, f.buyerAccountName = i, f.buyerAccountNumber = a), [ 4, this.simpleRequest("/consumer/order/invoice", f) ];

                  case 1:
                    return u.sent() && (s.showToastNoIcon("开票申请已提交成功"), setTimeout(function() {
                        p.globalData.refresh = !0, s.go("", l.Constant.LOGIN_JUMP_NAVIGATE_BACK);
                    }, 2e3)), [ 2 ];
                }
            });
        });
    }, r([ a.Data({}) ], t.prototype, "info", void 0), r([ a.Data({}) ], t.prototype, "userInfo", void 0), 
    r([ a.Data({}) ], t.prototype, "formData", void 0), t;
}(i.default);

exports.default = h;