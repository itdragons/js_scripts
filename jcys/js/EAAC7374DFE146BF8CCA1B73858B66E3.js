require("jcys/js/@babel/runtime/helpers/Arrayincludes.js");

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
}), r = function(e, o, r, i) {
    var s, n = arguments.length, a = n < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, r) : i;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, r, i); else for (var p = e.length - 1; p >= 0; p--) (s = e[p]) && (a = (n < 3 ? s(a) : n > 3 ? s(o, r, a) : s(o, r)) || a);
    return n > 3 && a && Object.defineProperty(o, r, a), a;
}, i = function(e, t, o, r) {
    return new (o || (o = Promise))(function(i, s) {
        function n(e) {
            try {
                p(r.next(e));
            } catch (e) {
                s(e);
            }
        }
        function a(e) {
            try {
                p(r.throw(e));
            } catch (e) {
                s(e);
            }
        }
        function p(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                e(t);
            })).then(n, a);
        }
        p((r = r.apply(e, t || [])).next());
    });
}, s = function(e, t) {
    var o, r, i, s, n = {
        label: 0,
        sent: function() {
            if (1 & i[0]) throw i[1];
            return i[1];
        },
        trys: [],
        ops: []
    };
    return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this;
    }), s;
    function a(s) {
        return function(a) {
            return function(s) {
                if (o) throw new TypeError("Generator is already executing.");
                for (;n; ) try {
                    if (o = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 
                    0) : r.next) && !(i = i.call(r, s[1])).done) return i;
                    switch (r = 0, i && (s = [ 2 & s[0], i.value ]), s[0]) {
                      case 0:
                      case 1:
                        i = s;
                        break;

                      case 4:
                        return n.label++, {
                            value: s[1],
                            done: !1
                        };

                      case 5:
                        n.label++, r = s[1], s = [ 0 ];
                        continue;

                      case 7:
                        s = n.ops.pop(), n.trys.pop();
                        continue;

                      default:
                        if (!(i = n.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                            n = 0;
                            continue;
                        }
                        if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                            n.label = s[1];
                            break;
                        }
                        if (6 === s[0] && n.label < i[1]) {
                            n.label = i[1], i = s;
                            break;
                        }
                        if (i && n.label < i[2]) {
                            n.label = i[2], n.ops.push(s);
                            break;
                        }
                        i[2] && n.ops.pop(), n.trys.pop();
                        continue;
                    }
                    s = t.call(e, n);
                } catch (e) {
                    s = [ 6, e ], r = 0;
                } finally {
                    o = i = 0;
                }
                if (5 & s[0]) throw s[1];
                return {
                    value: s[0] ? s[1] : void 0,
                    done: !0
                };
            }([ s, a ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = require("./A02C1207DFE146BFC64A7A00113A66E3"), a = require("./38A05F86DFE146BF5EC63781B6CC66E3"), p = require("./D8E10552DFE146BFBE876D55522D66E3"), l = require("./2C30C173DFE146BF4A56A9740F4D66E3"), u = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), h = require("./34D73CD2DFE146BF52B154D556BD66E3"), c = getApp(), d = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.clientTypeList = [], t.clientType = 0, t.corpIndustryList = [], t.corpIndustry = 0, 
        t.remark = "", t.status = -1, t.cardNo = "", t.trueName = "", t.mobilePhone = "", 
        t.corpNumber = "", t.corpName = "", t.registeredCapital = "", t.legalPerson = "", 
        t.legalIdNumber = "", t.businessTerm = "", t.isConsignor = 0, t.isChoice1 = 0, t.isChoice2 = 0, 
        t.isChoice3 = 0, t.isChoice4 = 0, t.isChoice5 = 0, t.isChoice6 = 0, t.corpType = 1, 
        t.investAmount = "", t.povertyAmount = "", t.contributeAmount = "", t.conditionDescribe = "", 
        t.lastYearRevenue = "", t.lastYearTaxes = "", t.legalIdCardPositiveUrl = "", t.legalIdCardReverseUrl = "", 
        t.agentAuthorizationUrl = "", t.agentIdCardPositiveUrl = "", t.agentIdCardReverseUrl = "", 
        t.agentSocialProveUrl = "", t.businessLicenseUrl = "", t.applyLetterUrl = "", t.lastYearTaxesApplyUrl = "", 
        t.lastYearTaxesCompleteUrl = "", t.enterpriseQuery1Url = "", t.enterpriseQuery2Url = "", 
        t.enterpriseQuery3Url = "", t.enterpriseQuery4Url = "", t.invitationCode = "", t.disabled = !1, 
        t.disabledUser = !1, t.pictureWidth = 0, t.pictureHeight = 0, t.storeIndex = 0, 
        t.storeList = [], t.applyForWineIndex = 0, t.applyForWineList = [], t.dialogShow = !1, 
        t.dialogButton = [], t.userMobilePhone = "", t.address = "", t.authenticationAddress = "", 
        t.formData = {}, t.isCheckAuditTime = !1, t;
    }
    return o(t, e), t.prototype.onLoad = function() {
        var t;
        e.prototype.onLoad.call(this), wx.hideShareMenu(), wx.offCopyUrl(), this.isCheckAuditTime = this.checkAuditTime("17:00", "17:30"), 
        this.openConfirm(), this.userOrgApplyProList(), this.userMobilePhone = null === (t = c.globalData.userInfo) || void 0 === t ? void 0 : t.mobilePhone;
    }, t.prototype.getPhoneNumber = function(e) {
        var t = e.detail;
        console.log(t), "getPhoneNumber:ok" === t.errMsg ? this.bindMobilePhone(t) : "getPhoneNumber:fail user deny" !== t.errMsg && u.showToastNoIcon("获取手机号码失败");
    }, t.prototype.checkAuditTime = function(e, t) {
        var o = new Date(), r = new Date(o), i = new Date(o), s = e.lastIndexOf(":"), n = e.substring(0, s), a = e.substring(s + 1, e.length);
        r.setHours(n, a, 0, 0);
        var p = t.lastIndexOf(":"), l = t.substring(0, p), u = t.substring(p + 1, t.length);
        return i.setHours(l, u, 0, 0), o.getTime() - r.getTime() >= 0 && o.getTime() <= i.getTime();
    }, t.prototype.bindMobilePhone = function(e) {
        return i(this, void 0, void 0, function() {
            var t;
            return s(this, function(o) {
                switch (o.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/user/bindPhone", {
                        encryptedData: e.encryptedData,
                        iv: e.iv,
                        sessionKey: c.globalData.userInfo.sessionKey
                    }, !0, "绑定中...") ];

                  case 1:
                    return (t = o.sent()) && t.mobilePhone && (c.globalData.userInfo.mobilePhone = t.mobilePhone, 
                    this.userMobilePhone = c.globalData.userInfo.mobilePhone, h.wxApiToPromise(wx.showToast, {
                        icon: "success",
                        title: "绑定成功"
                    })), [ 2 ];
                }
            });
        });
    }, t.prototype.onPickerChangedHandle = function(e) {
        var t = this.formData;
        t.region = e.detail.value, t.code = e.detail.code, this.formData = t;
    }, t.prototype.openConfirm = function() {
        this.dialogShow = !0;
    }, t.prototype.tapDialogButton = function(e) {
        0 === e.detail.index && wx.navigateBack({
            delta: 1
        }), this.dialogShow = !1;
    }, t.prototype.onClickCheckType = function(e) {
        if (!this.disabled) {
            var t = e.currentTarget.dataset.index;
            this.clientType = this.clientTypeList[t].id;
        }
    }, t.prototype.getDataFromServer = function() {
        return i(this, void 0, void 0, function() {
            var e, t;
            return s(this, function(o) {
                switch (o.label) {
                  case 0:
                    return [ 4, l.request("/consumer/user/clientInfoGet") ];

                  case 1:
                    return (e = o.sent()) && (t = e.data, this.cardNo = t.userInfo.cardNo || "", this.trueName = t.userInfo.trueName || "", 
                    this.authenticationAddress = t.userInfo.authenticationAddress || "", this.cardNo && (this.status = 0), 
                    t.userOrg && t.orgCorp && (this.clientType = t.userOrg.majorAccount || 0, this.mobilePhone = t.userOrg.mobilePhone || "", 
                    this.storeIndex = this.storeList.findIndex(function(e) {
                        return e.id === t.userOrg.orgId;
                    }), this.applyForWineIndex = this.applyForWineList.findIndex(function(e) {
                        return e.proIdentification === t.orgCorp.proIdentification;
                    }), this.corpName = t.orgCorp.corpName || "", this.legalPerson = t.orgCorp.legalPerson || "", 
                    this.legalIdNumber = t.orgCorp.legalIdNumber || "", this.corpIndustry = t.orgCorp.corpIndustry, 
                    this.isConsignor = t.orgCorp.isConsignor, this.isChoice1 = t.orgCorp.isChoice1, 
                    this.isChoice2 = t.orgCorp.isChoice2, this.isChoice3 = t.orgCorp.isChoice3, this.isChoice4 = t.orgCorp.isChoice4, 
                    this.isChoice5 = t.orgCorp.isChoice5, this.isChoice6 = t.orgCorp.isChoice6, this.registeredCapital = t.orgCorp.registeredCapital || "", 
                    this.povertyAmount = t.orgCorp.povertyAmount || "", this.investAmount = t.orgCorp.investAmount || "", 
                    this.conditionDescribe = t.orgCorp.conditionDescribe || "", this.contributeAmount = t.orgCorp.contributeAmount || "", 
                    this.lastYearRevenue = t.orgCorp.lastYearRevenue || "", this.lastYearTaxes = t.orgCorp.lastYearTaxes || "", 
                    this.corpNumber = t.orgCorp.corpNumber, this.legalIdCardPositiveUrl = t.orgCorp.legalIdCardPositiveUrl, 
                    this.legalIdCardReverseUrl = t.orgCorp.legalIdCardReverseUrl, this.agentIdCardPositiveUrl = t.orgCorp.agentIdCardPositiveUrl, 
                    this.agentIdCardReverseUrl = t.orgCorp.agentIdCardReverseUrl, this.agentSocialProveUrl = t.orgCorp.agentSocialProveUrl, 
                    this.businessLicenseUrl = t.orgCorp.businessLicenseUrl, this.applyLetterUrl = t.orgCorp.applyLetterUrl, 
                    this.lastYearTaxesApplyUrl = t.orgCorp.lastYearTaxesApplyUrl, this.lastYearTaxesCompleteUrl = t.orgCorp.lastYearTaxesCompleteUrl, 
                    this.enterpriseQuery1Url = t.orgCorp.enterpriseQuery1Url, this.enterpriseQuery2Url = t.orgCorp.enterpriseQuery2Url, 
                    this.enterpriseQuery3Url = t.orgCorp.enterpriseQuery3Url, this.enterpriseQuery4Url = t.orgCorp.enterpriseQuery4Url, 
                    this.agentAuthorizationUrl = t.orgCorp.agentAuthorizationUrl, this.businessTerm = t.orgCorp.businessTerm, 
                    this.invitationCode = t.orgCorp.invitationCode, this.corpType = t.orgCorp.corpType, 
                    this.disabled = 1 === t.orgCorp.status || 2 === t.orgCorp.status || 1 === t.userOrg.status || 2 === t.userOrg.status, 
                    this.disabled && (this.status = 1), 3 !== t.orgCorp.status && 3 !== t.userOrg.status || (this.status = 2, 
                    this.remark = t.orgCorp.remark), t.orgCorp.auditNum >= 10 && !this.disabled && (this.invitationCode = "")), 
                    this.disabledUser = 1 === t.userInfo.isAuthentication), [ 2 ];
                }
            });
        });
    }, t.prototype.userOrgApplyProList = function() {
        return i(this, void 0, void 0, function() {
            var e;
            return s(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4, l.request("/consumer/user/userOrgApplyProList") ];

                  case 1:
                    return e = t.sent(), console.log(e), e && (this.applyForWineList = e.data), this.getOrgInfoToSelect(), 
                    [ 2 ];
                }
            });
        });
    }, t.prototype.getOrgInfoToSelect = function() {
        return i(this, void 0, void 0, function() {
            var e;
            return s(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4, l.request("/consumer/pro/getOrgInfoToSelect") ];

                  case 1:
                    return (e = t.sent()) && (this.storeList = e.data), this.getDataFromServer(), [ 2 ];
                }
            });
        });
    }, t.prototype.onChangedHandle = function(e) {
        var t = e.currentTarget.dataset.key;
        console.log(e);
        if ([ "isConsignor", "isChoice1", "isChoice2", "isChoice3", "isChoice4", "isChoice5", "isChoice6", "corpType" ].includes(t)) {
            if (this.disabled) return;
            this[t] = 1 * e.currentTarget.dataset.type;
        } else this[t] = e.detail.value, "region" === t && (this.regionCode = e.detail.code);
    }, t.prototype.onClickHandle = function(e) {
        var t = this;
        if (!this.disabled) {
            var o = e.currentTarget.dataset.key;
            wx.chooseImage({
                count: 1,
                sizeType: [ "compressed" ],
                sourceType: [ "album", "camera" ],
                success: function(e) {
                    var r = e.tempFilePaths[0];
                    t.processingPictures(o, r);
                }
            });
        }
    }, t.prototype.processingPictures = function(e, t) {
        return i(this, void 0, void 0, function() {
            var o, r;
            return s(this, function(i) {
                switch (i.label) {
                  case 0:
                    return [ 4, p.processingPictures(this, t, "pressCanvas", 640) ];

                  case 1:
                    return (o = i.sent()) || (o = t), u.showLoading({
                        title: "上传中..."
                    }), [ 4, l.uploadFile(o) ];

                  case 2:
                    return r = i.sent(), u.hideLoading(), 0 === r.code ? o = r.data.fileUrl : u.showToastNoIcon(r.message), 
                    this[e] = o, [ 2 ];
                }
            });
        });
    }, t.prototype.onSubmitHandle = function() {
        return i(this, void 0, void 0, function() {
            var e;
            return s(this, function(t) {
                switch (t.label) {
                  case 0:
                    if (this.disabled && this.clientType || !this.clientType && this.disabledUser) return [ 2 ];
                    if (0 === this.clientType) {
                        if (!this.formData.code) return u.showToastNoIcon("请选择收货地址"), [ 2 ];
                        if (!this.address) return u.showToastNoIcon("请填写详细地址"), [ 2 ];
                        if (!this.userMobilePhone) return u.showToastNoIcon("请授权绑定手机号"), [ 2 ];
                    }
                    if (!this.cardNo) return u.showToastNoIcon("请输入" + (this.clientType ? "联系人" : "") + "身份证号码"), 
                    [ 2 ];
                    if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.cardNo)) return u.showToastNoIcon("输入的" + (this.clientType ? "联系人" : "") + "身份证号码有误"), 
                    [ 2 ];
                    if (!this.trueName) return u.showToastNoIcon("请输入" + (this.clientType ? "联系人" : "") + "姓名"), 
                    [ 2 ];
                    if (this.clientType) {
                        if (!this.mobilePhone) return u.showToastNoIcon("请输入联系人手机号"), [ 2 ];
                        if (-1 === this.applyForWineIndex) return u.showToastNoIcon("请选择申请酒品"), [ 2 ];
                        if (this.mobilePhone.length < 11) return u.showToastNoIcon("输入的联系人手机号有误"), [ 2 ];
                        if (-1 === this.storeIndex) return u.showToastNoIcon("请选择注册店铺"), [ 2 ];
                        if (1 === this.corpType) {
                            if (!this.corpName) return u.showToastNoIcon("请输入公司名称"), [ 2 ];
                            if (-1 === this.corpIndustry) return u.showToastNoIcon("请选择公司所属行业"), [ 2 ];
                            if (!this.corpNumber) return u.showToastNoIcon("请输入统一社会信用代码"), [ 2 ];
                            if (!this.registeredCapital) return u.showToastNoIcon("请输入注册资本"), [ 2 ];
                            if (!this.legalPerson) return u.showToastNoIcon("请输入法人姓名"), [ 2 ];
                            if (!this.legalIdNumber) return u.showToastNoIcon("请输入法人身份证号码"), [ 2 ];
                            if (this.isChoice1 && !this.investAmount) return u.showToastNoIcon("请输入在黔投资金额"), 
                            [ 2 ];
                            if (this.isChoice2 && !this.povertyAmount) return u.showToastNoIcon("请输入在黔扶贫金额"), 
                            [ 2 ];
                            if (this.isChoice3 && !this.contributeAmount) return u.showToastNoIcon("请输入在黔捐款金额"), 
                            [ 2 ];
                            if (!this.conditionDescribe) return u.showToastNoIcon("请输入相关情况描述"), [ 2 ];
                            if (!this.lastYearRevenue) return u.showToastNoIcon("请输入上年营收总额"), [ 2 ];
                            if (!this.lastYearTaxes) return u.showToastNoIcon("请输入上年纳税总额"), [ 2 ];
                            if (!this.legalIdCardPositiveUrl) return u.showToastNoIcon("请上传法人身份证人像面"), [ 2 ];
                            if (!this.legalIdCardReverseUrl) return u.showToastNoIcon("请上传法人身份证国徽面"), [ 2 ];
                            if (this.isConsignor) {
                                if (!this.agentAuthorizationUrl) return u.showToastNoIcon("请上传法人授权委托书"), [ 2 ];
                                if (!this.agentIdCardPositiveUrl) return u.showToastNoIcon("请上传委托办理人身份证人像面"), [ 2 ];
                                if (!this.agentIdCardReverseUrl) return u.showToastNoIcon("请上传委托办理人身份证国徽面"), [ 2 ];
                            }
                            if (!this.businessLicenseUrl) return u.showToastNoIcon("请上传营业执照"), [ 2 ];
                            if (!this.applyLetterUrl) return u.showToastNoIcon("请上传购买申请函"), [ 2 ];
                            if (!this.enterpriseQuery1Url) return u.showToastNoIcon("请上传主体信息"), [ 2 ];
                            if (!this.enterpriseQuery2Url) return u.showToastNoIcon("请上传经营风险"), [ 2 ];
                            if (!this.enterpriseQuery3Url) return u.showToastNoIcon("请上传经营信息"), [ 2 ];
                            if (!this.enterpriseQuery4Url) return u.showToastNoIcon("请上传法律风险"), [ 2 ];
                        }
                        if (!this.invitationCode) return u.showToastNoIcon("请输入邀请码"), [ 2 ];
                    }
                    if (e = {
                        clientType: this.clientType,
                        cardNo: this.cardNo,
                        trueName: this.trueName
                    }, this.clientType) e.orgId = this.storeList[this.storeIndex].id, e.mobilePhone = this.mobilePhone, 
                    1 === this.corpType ? e.orgCorp = {
                        proIdentification: this.applyForWineList[this.applyForWineIndex].proIdentification,
                        proName: this.applyForWineList[this.applyForWineIndex].proName,
                        corpType: this.corpType,
                        corpIndustry: this.corpIndustry,
                        corpNumber: this.corpNumber,
                        corpName: this.corpName,
                        registeredCapital: this.registeredCapital,
                        legalPerson: this.legalPerson,
                        legalIdNumber: this.legalIdNumber,
                        businessTerm: this.businessTerm,
                        isConsignor: this.isConsignor,
                        isChoice1: this.isChoice1,
                        isChoice2: this.isChoice2,
                        isChoice3: this.isChoice3,
                        isChoice4: this.isChoice4,
                        isChoice5: this.isChoice5,
                        isChoice6: this.isChoice6,
                        investAmount: this.investAmount,
                        povertyAmount: this.povertyAmount,
                        contributeAmount: this.contributeAmount,
                        conditionDescribe: this.conditionDescribe,
                        lastYearRevenue: this.lastYearRevenue,
                        lastYearTaxes: this.lastYearTaxes,
                        legalIdCardPositiveUrl: this.legalIdCardPositiveUrl,
                        legalIdCardReverseUrl: this.legalIdCardReverseUrl,
                        agentIdCardPositiveUrl: this.agentIdCardPositiveUrl,
                        agentIdCardReverseUrl: this.agentIdCardReverseUrl,
                        agentSocialProveUrl: this.agentSocialProveUrl,
                        businessLicenseUrl: this.businessLicenseUrl,
                        applyLetterUrl: this.applyLetterUrl,
                        lastYearTaxesApplyUrl: this.lastYearTaxesApplyUrl,
                        lastYearTaxesCompleteUrl: this.lastYearTaxesCompleteUrl,
                        enterpriseQuery1Url: this.enterpriseQuery1Url,
                        enterpriseQuery2Url: this.enterpriseQuery2Url,
                        enterpriseQuery3Url: this.enterpriseQuery3Url,
                        enterpriseQuery4Url: this.enterpriseQuery4Url,
                        agentAuthorizationUrl: this.agentAuthorizationUrl,
                        invitationCode: this.invitationCode
                    } : e.orgCorp = {
                        proIdentification: this.applyForWineList[this.applyForWineIndex].proIdentification,
                        proName: this.applyForWineList[this.applyForWineIndex].proName,
                        corpType: this.corpType,
                        invitationCode: this.invitationCode
                    }; else {
                        if (!this.checkAuditTime("17:00", "17:30")) return u.showToastNoIcon("17:00到17:30为实名认证时间"), 
                        [ 2 ];
                        e.authenticationAddress = "" + this.formData.region[0] + this.formData.region[1] + this.formData.region[2] + this.address;
                    }
                    return [ 4, this.simpleRequest("/consumer/user/clientMaintain", e, !0, "提交中...") ];

                  case 1:
                    return t.sent() && (wx.showToast({
                        title: "提交成功",
                        icon: "success"
                    }), this.getDataFromServer()), [ 2 ];
                }
            });
        });
    }, r([ a.Data([ {
        id: 0,
        name: "个人客户"
    } ]) ], t.prototype, "clientTypeList", void 0), r([ a.Data(0) ], t.prototype, "clientType", void 0), 
    r([ a.Data([ "其他", "农、林、牧、渔业", "采矿业", "制造业", "电力、燃气及水生产和供应业", "建筑业", "信息传输、计算机服务和软件业", "批发和零售业", "房地产业", "租赁和商务服务业", "水利、环境和公共设施管理业", "居民服务和其他服务业", "交通运输、仓储和邮政业", "住宿和餐饮业", "金融业", "科学研究、技术服务和地质勘察业" ]) ], t.prototype, "corpIndustryList", void 0), 
    r([ a.Data(-1) ], t.prototype, "corpIndustry", void 0), r([ a.Data("") ], t.prototype, "remark", void 0), 
    r([ a.Data(-1) ], t.prototype, "status", void 0), r([ a.Data("") ], t.prototype, "cardNo", void 0), 
    r([ a.Data("") ], t.prototype, "trueName", void 0), r([ a.Data("") ], t.prototype, "mobilePhone", void 0), 
    r([ a.Data("") ], t.prototype, "corpNumber", void 0), r([ a.Data("") ], t.prototype, "corpName", void 0), 
    r([ a.Data("") ], t.prototype, "registeredCapital", void 0), r([ a.Data("") ], t.prototype, "legalPerson", void 0), 
    r([ a.Data("") ], t.prototype, "legalIdNumber", void 0), r([ a.Data("") ], t.prototype, "businessTerm", void 0), 
    r([ a.Data(0) ], t.prototype, "isConsignor", void 0), r([ a.Data(0) ], t.prototype, "isChoice1", void 0), 
    r([ a.Data(0) ], t.prototype, "isChoice2", void 0), r([ a.Data(0) ], t.prototype, "isChoice3", void 0), 
    r([ a.Data(0) ], t.prototype, "isChoice4", void 0), r([ a.Data(0) ], t.prototype, "isChoice5", void 0), 
    r([ a.Data(0) ], t.prototype, "isChoice6", void 0), r([ a.Data(1) ], t.prototype, "corpType", void 0), 
    r([ a.Data("") ], t.prototype, "investAmount", void 0), r([ a.Data("") ], t.prototype, "povertyAmount", void 0), 
    r([ a.Data("") ], t.prototype, "contributeAmount", void 0), r([ a.Data("") ], t.prototype, "conditionDescribe", void 0), 
    r([ a.Data("") ], t.prototype, "lastYearRevenue", void 0), r([ a.Data("") ], t.prototype, "lastYearTaxes", void 0), 
    r([ a.Data("") ], t.prototype, "legalIdCardPositiveUrl", void 0), r([ a.Data("") ], t.prototype, "legalIdCardReverseUrl", void 0), 
    r([ a.Data("") ], t.prototype, "agentAuthorizationUrl", void 0), r([ a.Data("") ], t.prototype, "agentIdCardPositiveUrl", void 0), 
    r([ a.Data("") ], t.prototype, "agentIdCardReverseUrl", void 0), r([ a.Data("") ], t.prototype, "agentSocialProveUrl", void 0), 
    r([ a.Data("") ], t.prototype, "businessLicenseUrl", void 0), r([ a.Data("") ], t.prototype, "applyLetterUrl", void 0), 
    r([ a.Data("") ], t.prototype, "lastYearTaxesApplyUrl", void 0), r([ a.Data("") ], t.prototype, "lastYearTaxesCompleteUrl", void 0), 
    r([ a.Data("") ], t.prototype, "enterpriseQuery1Url", void 0), r([ a.Data("") ], t.prototype, "enterpriseQuery2Url", void 0), 
    r([ a.Data("") ], t.prototype, "enterpriseQuery3Url", void 0), r([ a.Data("") ], t.prototype, "enterpriseQuery4Url", void 0), 
    r([ a.Data("") ], t.prototype, "invitationCode", void 0), r([ a.Data(!1) ], t.prototype, "disabled", void 0), 
    r([ a.Data(!1) ], t.prototype, "disabledUser", void 0), r([ a.Data(0) ], t.prototype, "pictureWidth", void 0), 
    r([ a.Data(0) ], t.prototype, "pictureHeight", void 0), r([ a.Data(-1) ], t.prototype, "storeIndex", void 0), 
    r([ a.Data([]) ], t.prototype, "storeList", void 0), r([ a.Data(-1) ], t.prototype, "applyForWineIndex", void 0), 
    r([ a.Data([]) ], t.prototype, "applyForWineList", void 0), r([ a.Data(!1) ], t.prototype, "dialogShow", void 0), 
    r([ a.Data([ {
        text: "不同意"
    }, {
        text: "同意"
    } ]) ], t.prototype, "dialogButton", void 0), r([ a.Data("") ], t.prototype, "userMobilePhone", void 0), 
    r([ a.Data("") ], t.prototype, "address", void 0), r([ a.Data("") ], t.prototype, "authenticationAddress", void 0), 
    r([ a.Data({
        region: []
    }) ], t.prototype, "formData", void 0), r([ a.Data(!1) ], t.prototype, "isCheckAuditTime", void 0), 
    t;
}(n.default);

exports.default = d;