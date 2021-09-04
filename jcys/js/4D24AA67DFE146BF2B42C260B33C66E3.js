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
    var i, p = arguments.length, f = p < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, r) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) f = Reflect.decorate(e, o, r, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (f = (p < 3 ? i(f) : p > 3 ? i(o, r, f) : i(o, r)) || f);
    return p > 3 && f && Object.defineProperty(o, r, f), f;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = require("./A02C1207DFE146BFC64A7A00113A66E3"), i = require("./38A05F86DFE146BF5EC63781B6CC66E3"), p = require("./AB909F77DFE146BFCDF6F770FE3D66E3"), f = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), a = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.info = {}, t;
    }
    return o(t, e), t.prototype.onLoad = function(t) {
        e.prototype.onLoad.call(this), this.info = JSON.parse(p.decryptBase64(t.info)), 
        console.log(this.info);
    }, t.prototype.onClickHandle = function() {
        f.go("/pages/apply_for_after_sales/apply_for_after_sales?info=" + p.encryptBase64(JSON.stringify(this.info)));
    }, r([ i.Data({}) ], t.prototype, "info", void 0), t;
}(n.default);

exports.default = a;