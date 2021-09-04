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
    var u, i = arguments.length, c = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, r) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, o, r, n); else for (var p = e.length - 1; p >= 0; p--) (u = e[p]) && (c = (i < 3 ? u(c) : i > 3 ? u(o, r, c) : u(o, r)) || c);
    return i > 3 && c && Object.defineProperty(o, r, c), c;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = require("./A02C1207DFE146BFC64A7A00113A66E3"), u = require("./38A05F86DFE146BF5EC63781B6CC66E3"), i = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), c = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.getAgreement = !1, t;
    }
    return o(t, e), t.prototype.onLoad = function() {
        e.prototype.onLoad.call(this), wx.hideShareMenu(), wx.offCopyUrl();
    }, t.prototype.onClickAgreementHandle = function() {
        this.getAgreement = !0;
    }, t.prototype.onSubmitHandle = function() {
        this.getAgreement ? i.go("/pages/lucky_draw/home/home?source=1") : i.showToastNoIcon("请勾选预约及购买须知");
    }, r([ u.Data(!1) ], t.prototype, "getAgreement", void 0), t;
}(n.default);

exports.default = c;