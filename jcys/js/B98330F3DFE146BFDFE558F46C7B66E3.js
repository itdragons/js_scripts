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
    var i, a = arguments.length, s = a < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, r) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, o, r, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (s = (a < 3 ? i(s) : a > 3 ? i(o, r, s) : i(o, r)) || s);
    return a > 3 && s && Object.defineProperty(o, r, s), s;
}, n = function(e, t, o, r) {
    return new (o || (o = Promise))(function(n, i) {
        function a(e) {
            try {
                u(r.next(e));
            } catch (e) {
                i(e);
            }
        }
        function s(e) {
            try {
                u(r.throw(e));
            } catch (e) {
                i(e);
            }
        }
        function u(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                e(t);
            })).then(a, s);
        }
        u((r = r.apply(e, t || [])).next());
    });
}, i = function(e, t) {
    var o, r, n, i, a = {
        label: 0,
        sent: function() {
            if (1 & n[0]) throw n[1];
            return n[1];
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
                    if (o = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 
                    0) : r.next) && !(n = n.call(r, i[1])).done) return n;
                    switch (r = 0, n && (i = [ 2 & i[0], n.value ]), i[0]) {
                      case 0:
                      case 1:
                        n = i;
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
                        if (!(n = a.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            a = 0;
                            continue;
                        }
                        if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                            a.label = i[1];
                            break;
                        }
                        if (6 === i[0] && a.label < n[1]) {
                            a.label = n[1], n = i;
                            break;
                        }
                        if (n && a.label < n[2]) {
                            a.label = n[2], a.ops.push(i);
                            break;
                        }
                        n[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                } catch (e) {
                    i = [ 6, e ], r = 0;
                } finally {
                    o = n = 0;
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

var a = require("./A02C1207DFE146BFC64A7A00113A66E3"), s = require("./38A05F86DFE146BF5EC63781B6CC66E3"), u = require("./2C30C173DFE146BF4A56A9740F4D66E3"), c = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), l = require("./34D73CD2DFE146BF52B154D556BD66E3"), p = getApp(), d = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.cardNo = "", t.trueName = "", t.mobilePhone = "", t.userMobilePhone = "", 
        t.address = "", t.authenticationAddress = "", t.noticeMsg = {}, t.disabledUser = !1, 
        t.status = 1, t.todayIsPeople = !1, t.formData = {}, t.source = 0, t;
    }
    return o(t, e), t.prototype.onLoad = function(t) {
        var o;
        e.prototype.onLoad.call(this), console.log(t), wx.hideShareMenu(), wx.offCopyUrl(), 
        this.getDataFromServer(), this.userMobilePhone = null === (o = p.globalData.userInfo) || void 0 === o ? void 0 : o.mobilePhone, 
        this.source = +t.source;
    }, t.prototype.peopleTodayLotteryInfo = function() {
        return n(this, void 0, void 0, function() {
            var e;
            return i(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4, u.request("/consumer/pro/peopleTodayLotteryInfo") ];

                  case 1:
                    return (e = t.sent()) && (this.todayIsPeople = e.data.todayIsPeople), [ 2 ];
                }
            });
        });
    }, t.prototype.getProLotteryNotice = function() {
        return n(this, void 0, void 0, function() {
            var e;
            return i(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4, u.request("/consumer/pro/getProLotteryNotice") ];

                  case 1:
                    return (e = t.sent()) && (this.noticeMsg = e.data), [ 2 ];
                }
            });
        });
    }, t.prototype.getPhoneNumber = function(e) {
        var t = e.detail;
        console.log(t), "getPhoneNumber:ok" === t.errMsg ? this.bindMobilePhone(t) : "getPhoneNumber:fail user deny" !== t.errMsg && c.showToastNoIcon("获取手机号码失败");
    }, t.prototype.bindMobilePhone = function(e) {
        return n(this, void 0, void 0, function() {
            var t;
            return i(this, function(o) {
                switch (o.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/user/bindPhone", {
                        encryptedData: e.encryptedData,
                        iv: e.iv,
                        sessionKey: p.globalData.userInfo.sessionKey
                    }, !0, "绑定中...") ];

                  case 1:
                    return (t = o.sent()) && t.mobilePhone && (p.globalData.userInfo.mobilePhone = t.mobilePhone, 
                    this.userMobilePhone = p.globalData.userInfo.mobilePhone, l.wxApiToPromise(wx.showToast, {
                        icon: "success",
                        title: "绑定成功"
                    })), [ 2 ];
                }
            });
        });
    }, t.prototype.onPickerChangedHandle = function(e) {
        var t = this.formData;
        t.region = e.detail.value, t.code = e.detail.code, this.formData = t;
    }, t.prototype.tapDialogButton = function(e) {
        0 === e.detail.index && wx.navigateBack({
            delta: 1
        }), this.dialogShow = !1;
    }, t.prototype.getDataFromServer = function() {
        return n(this, void 0, void 0, function() {
            var e, t;
            return i(this, function(o) {
                switch (o.label) {
                  case 0:
                    return [ 4, u.request("/consumer/user/clientInfoGet") ];

                  case 1:
                    return (e = o.sent()) && (t = e.data, this.cardNo = t.userInfo.cardNo || "", this.trueName = t.userInfo.trueName || "", 
                    this.authenticationAddress = t.userInfo.authenticationAddress || "", this.cardNo && (this.status = 0), 
                    this.status = 1 === t.userInfo.isAuthentication ? 2 : 3, this.disabledUser = 1 === t.userInfo.isAuthentication, 
                    this.disabledUser ? (this.getProLotteryNotice(), this.peopleTodayLotteryInfo()) : wx.setNavigationBarTitle({
                        title: "实名认证"
                    })), [ 2 ];
                }
            });
        });
    }, t.prototype.onChangedHandle = function(e) {
        var t = e.currentTarget.dataset.key;
        console.log(e), this[t] = e.detail.value, "region" === t && (this.regionCode = e.detail.code);
    }, t.prototype.onSubmitHandle = function() {
        return n(this, void 0, void 0, function() {
            var e;
            return i(this, function(t) {
                switch (t.label) {
                  case 0:
                    return this.checkAuditTime("17:00", "17:30") ? this.formData.code ? this.address ? this.userMobilePhone ? this.cardNo ? this.cardNo.length < 18 ? (c.showToastNoIcon("输入的身份证号码有误"), 
                    [ 2 ]) : this.trueName ? (e = {
                        clientType: 0,
                        authenticationAddress: "" + this.formData.region[0] + this.formData.region[1] + this.formData.region[2] + this.address,
                        cardNo: this.cardNo,
                        trueName: this.trueName
                    }, [ 4, this.simpleRequest("/consumer/user/clientMaintain", e, !0, "提交中...") ]) : (c.showToastNoIcon("请输入姓名"), 
                    [ 2 ]) : (c.showToastNoIcon("请输入身份证号码"), [ 2 ]) : (c.showToastNoIcon("请授权绑定手机号"), 
                    [ 2 ]) : (c.showToastNoIcon("请填写详细地址"), [ 2 ]) : (c.showToastNoIcon("请选择收货地址"), 
                    [ 2 ]) : (c.showToastNoIcon("17:00到17:30为实名认证时间"), [ 2 ]);

                  case 1:
                    return t.sent() && (wx.showToast({
                        title: "提交成功",
                        icon: "success"
                    }), this.getDataFromServer()), [ 2 ];
                }
            });
        });
    }, t.prototype.checkAuditTime = function(e, t) {
        var o = new Date(), r = new Date(o), n = new Date(o), i = e.lastIndexOf(":"), a = e.substring(0, i), s = e.substring(i + 1, e.length);
        r.setHours(a, s, 0, 0);
        var u = t.lastIndexOf(":"), c = t.substring(0, u), l = t.substring(u + 1, t.length);
        return n.setHours(c, l, 0, 0), o.getTime() - r.getTime() >= 0 && o.getTime() <= n.getTime();
    }, t.prototype.onClickLuckyDraw = function() {
        this.checkAuditTime("8:30", "9:00") ? this.todayIsPeople ? c.showToastNoIcon("今日已参与摇号抽奖") : c.go("/pages/lucky_draw/apply/apply") : c.showToastNoIcon("8:30到9:00为预约时间");
    }, t.prototype.onClickLotteryReleased = function(e) {
        var t = e.currentTarget.dataset.type;
        console.log(t), c.go("/pages/lucky_draw/published_codes/published_codes?type=" + t);
    }, r([ s.Data("") ], t.prototype, "cardNo", void 0), r([ s.Data("") ], t.prototype, "trueName", void 0), 
    r([ s.Data("") ], t.prototype, "mobilePhone", void 0), r([ s.Data("") ], t.prototype, "userMobilePhone", void 0), 
    r([ s.Data("") ], t.prototype, "address", void 0), r([ s.Data("") ], t.prototype, "authenticationAddress", void 0), 
    r([ s.Data({}) ], t.prototype, "noticeMsg", void 0), r([ s.Data(!1) ], t.prototype, "disabledUser", void 0), 
    r([ s.Data(1) ], t.prototype, "status", void 0), r([ s.Data(!1) ], t.prototype, "todayIsPeople", void 0), 
    r([ s.Data({
        region: []
    }) ], t.prototype, "formData", void 0), r([ s.Data(0) ], t.prototype, "source", void 0), 
    t;
}(a.default);

exports.default = d;