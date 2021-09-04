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
    function n() {
        this.constructor = t;
    }
    e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, 
    new n());
}), n = function(e, o, n, r) {
    var i, a = arguments.length, s = a < 3 ? o : null === r ? r = Object.getOwnPropertyDescriptor(o, n) : r;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, o, n, r); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(o, n, s) : i(o, n)) || s);
    return a > 3 && s && Object.defineProperty(o, n, s), s;
}, r = function(e, t, o, n) {
    return new (o || (o = Promise))(function(r, i) {
        function a(e) {
            try {
                c(n.next(e));
            } catch (e) {
                i(e);
            }
        }
        function s(e) {
            try {
                c(n.throw(e));
            } catch (e) {
                i(e);
            }
        }
        function c(e) {
            var t;
            e.done ? r(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                e(t);
            })).then(a, s);
        }
        c((n = n.apply(e, t || [])).next());
    });
}, i = function(e, t) {
    var o, n, r, i, a = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1];
        },
        trys: [],
        ops: []
    };
    return i = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this;
    }), i;
    function s(i) {
        return function(s) {
            return function(i) {
                if (o) throw new TypeError("Generator is already executing.");
                for (;a; ) try {
                    if (o = 1, n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n), 
                    0) : n.next) && !(r = r.call(n, i[1])).done) return r;
                    switch (n = 0, r && (i = [ 2 & i[0], r.value ]), i[0]) {
                      case 0:
                      case 1:
                        r = i;
                        break;

                      case 4:
                        return a.label++, {
                            value: i[1],
                            done: !1
                        };

                      case 5:
                        a.label++, n = i[1], i = [ 0 ];
                        continue;

                      case 7:
                        i = a.ops.pop(), a.trys.pop();
                        continue;

                      default:
                        if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            a = 0;
                            continue;
                        }
                        if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                            a.label = i[1];
                            break;
                        }
                        if (6 === i[0] && a.label < r[1]) {
                            a.label = r[1], r = i;
                            break;
                        }
                        if (r && a.label < r[2]) {
                            a.label = r[2], a.ops.push(i);
                            break;
                        }
                        r[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                } catch (e) {
                    i = [ 6, e ], n = 0;
                } finally {
                    o = r = 0;
                }
                if (5 & i[0]) throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                };
            }([ i, s ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = require("./A02C1207DFE146BFC64A7A00113A66E3"), s = require("./38A05F86DFE146BF5EC63781B6CC66E3"), c = require("./34D73CD2DFE146BF52B154D556BD66E3"), u = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), p = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), l = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.companies = [], t.index = 0, t.shipmentNumber = "", t.companyName = "", 
        t.id = "", t;
    }
    return o(t, e), t.prototype.onLoad = function(t) {
        e.prototype.onLoad.call(this), this.id = t.id;
    }, t.prototype.onScanHandle = function() {
        return r(this, void 0, void 0, function() {
            var e;
            return i(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4, c.wxApiToPromise(wx.scanCode, {
                        scanType: [ "barCode" ]
                    }) ];

                  case 1:
                    return "scanCode:ok" === (e = t.sent()).errMsg ? this.shipmentNumber = e.result : u.showToastNoIcon("扫码失败"), 
                    [ 2 ];
                }
            });
        });
    }, t.prototype.onChooseTypeHandle = function(e) {
        this.index = 1 * e.detail.value, 0 === this.index || this.index === this.companies.length - 1 ? this.companyName = "" : this.companyName = this.companies[this.index];
    }, t.prototype.onInputHandle = function(e) {
        this[e.currentTarget.dataset.key] = e.detail.value.trim();
    }, t.prototype.onSubmitHandle = function() {
        0 !== this.index ? this.companyName ? this.shipmentNumber ? this.simpleRequest("/consumer/order/afterUploadMailInfo", {
            id: this.id,
            userLogisticsName: this.companyName,
            userLogisticsNo: this.shipmentNumber
        }, !0, "提交中...") && (wx.showToast({
            icon: "success",
            title: "提交成功"
        }), setTimeout(function() {
            u.go("", p.Constant.LOGIN_JUMP_NAVIGATE_BACK);
        }, 3e3)) : u.showToastNoIcon("物流单号不能为空") : u.showToastNoIcon("物流公司不能为空") : u.showToastNoIcon("请选择物流公司");
    }, n([ s.Data([ "请选择物流公司", "圆通", "中通", "申通", "顺丰", "EMS", "天天", "百世", "宅急送", "全峰", "德邦", "邮政包裹", "其他" ]) ], t.prototype, "companies", void 0), 
    n([ s.Data(0) ], t.prototype, "index", void 0), n([ s.Data("") ], t.prototype, "shipmentNumber", void 0), 
    n([ s.Data("") ], t.prototype, "companyName", void 0), n([ s.Data("") ], t.prototype, "id", void 0), 
    t;
}(a.default);

exports.default = l;