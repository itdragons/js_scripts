var e = require("jcys/js/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getDateValue = exports.needBindMobilePhone = exports.tencentGraphicVerification = exports.checkUpdate = exports.getModel = exports.go = exports.goHome = exports.compareVersion = exports.hideLoading = exports.showLoading = exports.alert = exports.isJsonString = exports.showToastNoIcon = exports.formatTime = exports.formatNumber = void 0;

var o = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), t = require("./34D73CD2DFE146BF52B154D556BD66E3");

function n(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

function a(e) {
    var o = void 0 === e ? {} : e, t = o.title, n = void 0 === t ? "提示" : t, a = o.content, r = void 0 === a ? "描述信息" : a, i = o.showCancel, s = void 0 !== i && i, c = o.confirmText, l = void 0 === c ? "我知道了" : c, p = o.cancelText, d = void 0 === p ? "取消" : p, u = o.confirmColor, x = void 0 === u ? "#333333" : u, f = o.cancelColor, h = void 0 === f ? "#999999" : f, g = o.confirm, m = void 0 === g ? function() {} : g, v = o.cancel, w = void 0 === v ? function() {} : v;
    wx.showModal({
        title: n,
        content: r,
        showCancel: s,
        confirmText: l,
        cancelText: d,
        confirmColor: x,
        cancelColor: h,
        success: function(e) {
            e.confirm ? m() : e.cancel && w();
        }
    });
}

function r(e, t, n) {
    switch (void 0 === e && (e = ""), void 0 === t && (t = o.Constant.LOGIN_JUMP_NAVIGATE_TO), 
    void 0 === n && (n = 1), t) {
      case o.Constant.LOGIN_JUMP_REDIRECT_TO:
        wx.redirectTo({
            url: e
        });
        break;

      case o.Constant.LOGIN_JUMP_RELAUNCH:
        wx.reLaunch({
            url: e
        });
        break;

      case o.Constant.LOGIN_JUMP_SWITCHTAB:
        wx.switchTab({
            url: e
        });
        break;

      case o.Constant.LOGIN_JUMP_NAVIGATE_BACK:
        wx.navigateBack({
            delta: n
        });
        break;

      default:
        wx.navigateTo({
            url: e
        });
    }
}

exports.formatNumber = n, exports.formatTime = function(e) {
    var o = e.getFullYear(), t = e.getMonth() + 1, a = e.getDate(), r = e.getHours(), i = e.getMinutes(), s = e.getSeconds();
    return [ o, t, a ].map(n).join("-") + " " + [ r, i, s ].map(n).join(":");
}, exports.showToastNoIcon = function(e) {
    setTimeout(function() {
        wx.showToast({
            title: e,
            icon: "none",
            duration: 3e3
        });
    }, 100);
}, exports.isJsonString = function(o) {
    try {
        if ("object" === e(JSON.parse(o))) return !0;
    } catch (e) {
        return !1;
    }
    return !1;
}, exports.alert = a, exports.showLoading = function(e) {
    var o = void 0 === e ? {} : e, t = o.title, n = void 0 === t ? "加载中..." : t, a = o.mask, r = void 0 === a || a;
    wx.showLoading({
        title: n,
        mask: r
    });
}, exports.hideLoading = function() {
    wx.hideLoading();
}, exports.compareVersion = function(e, o) {
    for (var t = e.split("."), n = o.split("."), a = Math.max(t.length, n.length); t.length < a; ) t.push("0");
    for (;n.length < a; ) n.push("0");
    for (var r = 0; r < a; r++) {
        var i = parseInt(t[r], 10), s = parseInt(n[r], 10);
        if (i > s) return 1;
        if (i < s) return -1;
    }
    return 0;
}, exports.goHome = function(e) {
    var o = getCurrentPages().length, t = e ? o - 2 : o - 1;
    t > 0 && wx.navigateBack({
        delta: t
    });
}, exports.go = r, exports.getModel = function(e) {
    var o = wx.getSystemInfoSync();
    e.globalData.model = o.model + "&" + o.system, -1 !== o.model.toLowerCase().search("iphone x") ? e.globalData.mobilePhoneMode = 1 : -1 !== o.model.toLowerCase().search("iphone") ? e.globalData.mobilePhoneMode = 0 : o.windowHeight * o.pixelRatio == 1920 ? e.globalData.mobilePhoneMode = 2 : e.globalData.mobilePhoneMode = 3;
}, exports.checkUpdate = function() {
    if (wx.canIUse("getUpdateManager")) {
        var e = wx.getUpdateManager();
        e.onCheckForUpdate(function(o) {
            o.hasUpdate && e.onUpdateReady(function() {
                a({
                    title: "更新提示",
                    content: "新版本已经准备好，是否重启应用？",
                    confirmText: "重启",
                    confirm: function() {
                        e.applyUpdate();
                    }
                });
            });
        });
    }
}, exports.tencentGraphicVerification = function() {
    return t.wxApiToPromise(wx.navigateToMiniProgram, {
        appId: "wx5a3a7366fd07e119",
        path: "/pages/captcha/index",
        extraData: {
            appId: "2018995427"
        }
    });
}, exports.needBindMobilePhone = function() {
    var e = getApp().globalData.userInfo;
    return null === e.mobilePhone ? (r("/pages/login/login"), !0) : !!e.needUploadIdCard && (r("/pages/authentication/authentication"), 
    !0);
}, exports.getDateValue = function(e, o, t, n) {
    var a = Date.parse(o) - (Date.parse(e) + t), r = Math.floor(a / 864e5);
    a %= 864e5;
    var i = Math.floor(a / 36e5);
    a %= 36e5;
    var s = Math.floor(a / 6e4);
    a %= 6e4;
    var c = Math.floor(a / 1e3);
    switch (n) {
      case "d":
        return r;

      case "h":
        return i;

      case "m":
        return s;

      case "s":
        return c;

      default:
        return r + "," + i + "," + s + "," + c;
    }
};