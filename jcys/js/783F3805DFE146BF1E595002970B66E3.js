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
    function i() {
        this.constructor = e;
    }
    t(e, o), e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, 
    new i());
}), i = function(t, o, i, r) {
    var n, a = arguments.length, s = a < 3 ? o : null === r ? r = Object.getOwnPropertyDescriptor(o, i) : r;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, i, r); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (s = (a < 3 ? n(s) : a > 3 ? n(o, i, s) : n(o, i)) || s);
    return a > 3 && s && Object.defineProperty(o, i, s), s;
}, r = function(t, e, o, i) {
    return new (o || (o = Promise))(function(r, n) {
        function a(t) {
            try {
                c(i.next(t));
            } catch (t) {
                n(t);
            }
        }
        function s(t) {
            try {
                c(i.throw(t));
            } catch (t) {
                n(t);
            }
        }
        function c(t) {
            var e;
            t.done ? r(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                t(e);
            })).then(a, s);
        }
        c((i = i.apply(t, e || [])).next());
    });
}, n = function(t, e) {
    var o, i, r, n, a = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1];
        },
        trys: [],
        ops: []
    };
    return n = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
        return this;
    }), n;
    function s(n) {
        return function(s) {
            return function(n) {
                if (o) throw new TypeError("Generator is already executing.");
                for (;a; ) try {
                    if (o = 1, i && (r = 2 & n[0] ? i.return : n[0] ? i.throw || ((r = i.return) && r.call(i), 
                    0) : i.next) && !(r = r.call(i, n[1])).done) return r;
                    switch (i = 0, r && (n = [ 2 & n[0], r.value ]), n[0]) {
                      case 0:
                      case 1:
                        r = n;
                        break;

                      case 4:
                        return a.label++, {
                            value: n[1],
                            done: !1
                        };

                      case 5:
                        a.label++, i = n[1], n = [ 0 ];
                        continue;

                      case 7:
                        n = a.ops.pop(), a.trys.pop();
                        continue;

                      default:
                        if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                            a = 0;
                            continue;
                        }
                        if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                            a.label = n[1];
                            break;
                        }
                        if (6 === n[0] && a.label < r[1]) {
                            a.label = r[1], r = n;
                            break;
                        }
                        if (r && a.label < r[2]) {
                            a.label = r[2], a.ops.push(n);
                            break;
                        }
                        r[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    n = e.call(t, a);
                } catch (t) {
                    n = [ 6, t ], i = 0;
                } finally {
                    o = r = 0;
                }
                if (5 & n[0]) throw n[1];
                return {
                    value: n[0] ? n[1] : void 0,
                    done: !0
                };
            }([ n, s ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = require("./A02C1207DFE146BFC64A7A00113A66E3"), s = require("./38A05F86DFE146BF5EC63781B6CC66E3"), c = require("./D8E10552DFE146BFBE876D55522D66E3"), p = require("./2C30C173DFE146BF4A56A9740F4D66E3"), l = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), u = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.id = "", e.status = "", e.applicant = "", e.applicationUnitPhone = "", 
        e.businessLicense = "", e.applicationLetter = "", e.corporateIdentityCard = "", 
        e.qccScreenshot = "", e.enterpriseInvoice = "", e.legalPersonPowerOfAttorney = "", 
        e.idCardOfAuthorizedPerson = "", e.invitationCode = "", e.remark = "", e.disabled = !1, 
        e.pictureWidth = 0, e.pictureHeight = 0, e;
    }
    return o(e, t), e.prototype.onLoad = function() {
        t.prototype.onLoad.call(this), this.getDataFromServer();
    }, e.prototype.getDataFromServer = function() {
        return r(this, void 0, void 0, function() {
            var t;
            return n(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/user/getSmallClient") ];

                  case 1:
                    return (t = e.sent()) && (this.applicant = t.applyCompany, this.applicationUnitPhone = t.companyPhone, 
                    this.businessLicense = t.businessLicenseUrl, this.applicationLetter = t.applyLetterUrl, 
                    this.corporateIdentityCard = t.legalIdCardPositiveUrl, this.qccScreenshot = t.manageConditionUrl, 
                    this.enterpriseInvoice = t.billingInformationUrl, this.legalPersonPowerOfAttorney = t.agentAuthorizationUrl, 
                    this.idCardOfAuthorizedPerson = t.agentIdCardPositiveUrl, this.invitationCode = t.invitationCode, 
                    this.status = t.status, this.remark = t.remark, this.id = t.id, this.disabled = 0 === t.status || 1 === t.status), 
                    [ 2 ];
                }
            });
        });
    }, e.prototype.onChangedHandle = function(t) {
        this[t.currentTarget.dataset.key] = t.detail.value;
    }, e.prototype.onClickHandle = function(t) {
        var e = this;
        if (!this.disabled) {
            var o = t.currentTarget.dataset.key;
            wx.chooseImage({
                count: 1,
                sizeType: [ "compressed" ],
                sourceType: [ "album", "camera" ],
                success: function(t) {
                    var i = t.tempFilePaths[0];
                    e.processingPictures(o, i);
                }
            });
        }
    }, e.prototype.processingPictures = function(t, e) {
        return r(this, void 0, void 0, function() {
            var o, i;
            return n(this, function(r) {
                switch (r.label) {
                  case 0:
                    return [ 4, c.processingPictures(this, e, "pressCanvas", 640) ];

                  case 1:
                    return (o = r.sent()) || (o = e), l.showLoading({
                        title: "上传中..."
                    }), [ 4, p.uploadFile(o) ];

                  case 2:
                    return i = r.sent(), l.hideLoading(), 0 === i.code ? o = i.data.fileUrl : l.showToastNoIcon(i.message), 
                    this[t] = o, [ 2 ];
                }
            });
        });
    }, e.prototype.onSubmitHandle = function() {
        return r(this, void 0, void 0, function() {
            return n(this, function(t) {
                switch (t.label) {
                  case 0:
                    return this.disabled ? [ 2 ] : this.applicant ? this.applicationUnitPhone ? this.businessLicense ? this.applicationLetter ? this.corporateIdentityCard ? this.qccScreenshot ? this.enterpriseInvoice ? this.invitationCode ? [ 4, this.simpleRequest("/consumer/user/saveSmallClient", {
                        id: this.id,
                        applyCompany: this.applicant,
                        companyPhone: this.applicationUnitPhone,
                        businessLicenseUrl: this.businessLicense,
                        applyLetterUrl: this.applicationLetter,
                        legalIdCardPositiveUrl: this.corporateIdentityCard,
                        manageConditionUrl: this.qccScreenshot,
                        billingInformationUrl: this.enterpriseInvoice,
                        agentAuthorizationUrl: this.legalPersonPowerOfAttorney,
                        agentIdCardPositiveUrl: this.idCardOfAuthorizedPerson,
                        invitationCode: this.invitationCode
                    }, !0, "提交中...") ] : (l.showToastNoIcon("请输入企业邀请码"), [ 2 ]) : (l.showToastNoIcon("请上传企业发票信息"), 
                    [ 2 ]) : (l.showToastNoIcon("请上传企查查信息截图"), [ 2 ]) : (l.showToastNoIcon("请上传法人身份证正反面"), 
                    [ 2 ]) : (l.showToastNoIcon("请上传申请函"), [ 2 ]) : (l.showToastNoIcon("请上传营业执照"), [ 2 ]) : (l.showToastNoIcon("请输入企业联系电话"), 
                    [ 2 ]) : (l.showToastNoIcon("请输入申请企业"), [ 2 ]);

                  case 1:
                    return t.sent() && (wx.showToast({
                        title: "提交成功",
                        icon: "success"
                    }), this.getDataFromServer()), [ 2 ];
                }
            });
        });
    }, i([ s.Data("") ], e.prototype, "id", void 0), i([ s.Data(-1) ], e.prototype, "status", void 0), 
    i([ s.Data("") ], e.prototype, "applicant", void 0), i([ s.Data("") ], e.prototype, "applicationUnitPhone", void 0), 
    i([ s.Data("") ], e.prototype, "businessLicense", void 0), i([ s.Data("") ], e.prototype, "applicationLetter", void 0), 
    i([ s.Data("") ], e.prototype, "corporateIdentityCard", void 0), i([ s.Data("") ], e.prototype, "qccScreenshot", void 0), 
    i([ s.Data("") ], e.prototype, "enterpriseInvoice", void 0), i([ s.Data("") ], e.prototype, "legalPersonPowerOfAttorney", void 0), 
    i([ s.Data("") ], e.prototype, "idCardOfAuthorizedPerson", void 0), i([ s.Data("") ], e.prototype, "invitationCode", void 0), 
    i([ s.Data("") ], e.prototype, "remark", void 0), i([ s.Data(!1) ], e.prototype, "disabled", void 0), 
    i([ s.Data(0) ], e.prototype, "pictureWidth", void 0), i([ s.Data(0) ], e.prototype, "pictureHeight", void 0), 
    e;
}(a.default);

exports.default = u;