var e, t = require("jcys/js/@babel/runtime/helpers/typeof.js"), r = (e = function(t, r) {
    return (e = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    })(t, r);
}, function(t, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    function o() {
        this.constructor = t;
    }
    e(t, r), t.prototype = null === r ? Object.create(r) : (o.prototype = r.prototype, 
    new o());
}), o = function(e, r, o, n) {
    var c, p = arguments.length, u = p < 3 ? r : null === n ? n = Object.getOwnPropertyDescriptor(r, o) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) u = Reflect.decorate(e, r, o, n); else for (var i = e.length - 1; i >= 0; i--) (c = e[i]) && (u = (p < 3 ? c(u) : p > 3 ? c(r, o, u) : c(r, o)) || u);
    return p > 3 && u && Object.defineProperty(r, o, u), u;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = require("./A02C1207DFE146BFC64A7A00113A66E3"), c = require("./38A05F86DFE146BF5EC63781B6CC66E3"), p = require("./AB909F77DFE146BFCDF6F770FE3D66E3"), u = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.nodes = "", t;
    }
    return r(t, e), t.prototype.onLoad = function(t) {
        e.prototype.onLoad.call(this);
        var r = p.decryptBase64(t.nodes);
        "undefined" === r && (r = ""), this.nodes = r;
    }, o([ c.Data("") ], t.prototype, "nodes", void 0), t;
}(n.default);

exports.default = u;