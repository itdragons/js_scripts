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
    var i, a = arguments.length, p = a < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, r) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) p = Reflect.decorate(t, o, r, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (p = (a < 3 ? i(p) : a > 3 ? i(o, r, p) : i(o, r)) || p);
    return a > 3 && p && Object.defineProperty(o, r, p), p;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n, i = require("./A02C1207DFE146BFC64A7A00113A66E3"), a = require("./38A05F86DFE146BF5EC63781B6CC66E3"), p = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), c = require("./15C09654DFE146BF73A6FE537B7D66E3"), s = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), u = require("./2C30C173DFE146BF4A56A9740F4D66E3"), l = require("./3272D8D0DFE146BF5414B0D7B48D66E3"), d = require("./E4281831DFE146BF824E7036A03D66E3"), f = getApp(), g = function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return o(e, t), e.prototype.onLoad = function(e) {
        t.prototype.onLoad.call(this, e), this.initNavBar(), this.getLocation();
    }, e.prototype.onShow = function() {
        this.isOpenSettingBack && this.getLocation();
    }, e.prototype.initNavBar = function() {
        var t = l.getMenuButtonBoundingClientRect();
        t && (this.navHeight = t.top + t.height + 8, this.menuHeight = t.height);
    }, e.prototype.getLocation = function() {
        var t = this;
        c.getLocation().then(function(e) {
            var o = e.latitude, r = e.longitude;
            t.latitude = o, t.longitude = r, f.globalData.position = {
                latitude: o,
                longitude: r
            }, t.getArea(o, r), t.getDataFromServer();
        }).catch(function(e) {
            "getLocation:fail auth deny" !== e.errMsg && "getLocation:fail authorize no response" !== e.errMsg || p.alert({
                content: "检查到未授权获取当前地理位置信息，将导致无法加载最近商家信息，请允许定位授权",
                confirmText: "前往授权",
                confirm: function() {
                    t.isOpenSettingBack = !0, wx.openSetting();
                }
            });
        });
    }, e.prototype.getArea = function(t, e) {
        var o = this;
        c.getAddressInfo(t, e, function(t) {
            var e = t.result.address_component, r = e.province, n = e.city, i = e.district;
            o.region = [ r, n, i ];
        }, function(r) {
            if ("此key每日调用量已达到上限" === r.message) return d.default.MAP_KEY = "FVVBZ-D6F66-I4NSW-E3FVV-K2P5V-4VB44", 
            void o.getArea(t, e);
            p.showToastNoIcon("定位失败");
        });
    }, e.prototype.getDataFromServer = function() {
        var t = this, e = u.request("/consumer/pro/common/sys/bannerListAndAdvertList", {
            bigType: s.Constant.GOODS_BIG_TYPE_O2O,
            typeNum: 8
        }), o = u.request("/consumer/pro/common/product/recommendList", {
            bigType: 2,
            proType: 1,
            limitNum: 20
        });
        Promise.all([ e, o ]).then(function(e) {
            if (0 === e[0].code) {
                var o = e[0].data;
                t.bannerList = o.bannerList || [], t.advertList = o.advertList || [], t.proTypeList = o.proTypeList || [];
            } else p.showToastNoIcon(e[0].message);
            0 === e[1].code ? t.recommendList = e[1].data : p.showToastNoIcon(e[1].message);
        }).catch(function(t) {
            console.log(t);
        });
    }, e.prototype.scroll = function(t) {
        var e = this;
        this.pageScrollTop = t.detail.scrollTop;
        var o = parseFloat((t.detail.scrollTop / 160).toFixed(1));
        o = Math.min(o, 1), (o = Math.max(o, 0)) < .1 && (o = 0), n && clearTimeout(n), 
        n = setTimeout(function() {
            e.percentage = o;
        }, 24);
    }, e.prototype.onSearchKeywordClickHandle = function(t) {
        var e = t.currentTarget.dataset.keyword;
        p.go("/pages/o2o_search/o2o_search?keyword=" + e);
    }, r([ a.Data(0) ], e.prototype, "navHeight", void 0), r([ a.Data(0) ], e.prototype, "menuHeight", void 0), 
    r([ a.Data(0) ], e.prototype, "percentage", void 0), r([ a.Data(0) ], e.prototype, "bannerList", void 0), 
    r([ a.Data([]) ], e.prototype, "advertList", void 0), r([ a.Data([]) ], e.prototype, "proTypeList", void 0), 
    r([ a.Data([]) ], e.prototype, "hotShopList", void 0), r([ a.Data(!1) ], e.prototype, "isOpenSettingBack", void 0), 
    r([ a.Data("") ], e.prototype, "latitude", void 0), r([ a.Data("") ], e.prototype, "longitude", void 0), 
    r([ a.Data([]) ], e.prototype, "region", void 0), r([ a.Data([]) ], e.prototype, "recommendList", void 0), 
    e;
}(i.default);

exports.default = g;