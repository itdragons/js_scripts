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
    function n() {
        this.constructor = e;
    }
    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, 
    new n());
}), n = function(t, o, n, r) {
    var i, a = arguments.length, s = a < 3 ? o : null === r ? r = Object.getOwnPropertyDescriptor(o, n) : r;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, n, r); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(o, n, s) : i(o, n)) || s);
    return a > 3 && s && Object.defineProperty(o, n, s), s;
}, r = function(t, e, o, n) {
    return new (o || (o = Promise))(function(r, i) {
        function a(t) {
            try {
                c(n.next(t));
            } catch (t) {
                i(t);
            }
        }
        function s(t) {
            try {
                c(n.throw(t));
            } catch (t) {
                i(t);
            }
        }
        function c(t) {
            var e;
            t.done ? r(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                t(e);
            })).then(a, s);
        }
        c((n = n.apply(t, e || [])).next());
    });
}, i = function(t, e) {
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
                    i = e.call(t, a);
                } catch (t) {
                    i = [ 6, t ], n = 0;
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

var a, s = require("./A02C1207DFE146BFC64A7A00113A66E3"), c = require("./38A05F86DFE146BF5EC63781B6CC66E3"), u = require("./3272D8D0DFE146BF5414B0D7B48D66E3"), p = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), l = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), f = [ "商城推荐", "畅销排行" ], h = function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return o(e, t), e.prototype.onLoad = function(e) {
        t.prototype.onLoad.call(this, e), this.initNavBar(), this.getBannerListAndAdvertList();
    }, e.prototype.initNavBar = function() {
        var t = u.getMenuButtonBoundingClientRect();
        t && (this.navHeight = t.top + t.height + 8, this.menuHeight = t.height);
    }, e.prototype.getBannerListAndAdvertList = function() {
        return r(this, void 0, void 0, function() {
            var t;
            return i(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/pro/common/sys/bannerListAndAdvertList", {
                        typeNum: 8
                    }) ];

                  case 1:
                    return t = e.sent() || [], this.bannerList = t.bannerList || [], this.advertList = t.advertList || [], 
                    this.proTypeList = t.proTypeList || [], this.getRecommendList(), [ 2 ];
                }
            });
        });
    }, e.prototype.getRecommendList = function() {
        return r(this, void 0, void 0, function() {
            var t;
            return i(this, function(e) {
                switch (e.label) {
                  case 0:
                    return this.recommendList.length ? [ 3, 2 ] : (t = this, [ 4, this.simpleRequest("/consumer/pro/common/product/recommendList", {
                        limitNum: 20
                    }) ]);

                  case 1:
                    t.recommendList = e.sent() || [], e.label = 2;

                  case 2:
                    return this.currentList = this.recommendList, [ 2 ];
                }
            });
        });
    }, e.prototype.getTopSalesList = function() {
        return r(this, void 0, void 0, function() {
            var t;
            return i(this, function(e) {
                switch (e.label) {
                  case 0:
                    return this.topSalesList.length ? [ 3, 2 ] : (t = this, [ 4, this.simpleRequest("/consumer/pro/common/product/topSalesList", {
                        limitNum: 20
                    }) ]);

                  case 1:
                    t.topSalesList = e.sent() || [], e.label = 2;

                  case 2:
                    return this.currentList = this.topSalesList, [ 2 ];
                }
            });
        });
    }, e.prototype.onHomeNavSwitchHandle = function(t) {
        1 * t.detail == 0 ? this.getRecommendList() : this.getTopSalesList();
    }, e.prototype.scroll = function(t) {
        var e = this;
        this.pageScrollTop = t.detail.scrollTop;
        var o = parseFloat((t.detail.scrollTop / 160).toFixed(1));
        o = Math.min(o, 1), (o = Math.max(o, 0)) < .1 && (o = 0), a && clearTimeout(a), 
        a = setTimeout(function() {
            e.percentage = o;
        }, 24);
    }, e.prototype.onClickHandle = function() {
        p.go("/pages/o2o/o2o", l.Constant.LOGIN_JUMP_SWITCHTAB);
    }, e.prototype.onSearchKeywordClickHandle = function(t) {
        var e = t.currentTarget.dataset.keyword;
        p.go("/pages/mall_search/mall_search?keyword=" + e);
    }, n([ c.Data(0) ], e.prototype, "navHeight", void 0), n([ c.Data(0) ], e.prototype, "menuHeight", void 0), 
    n([ c.Data(0) ], e.prototype, "percentage", void 0), n([ c.Data(f) ], e.prototype, "items", void 0), 
    n([ c.Data([]) ], e.prototype, "bannerList", void 0), n([ c.Data([]) ], e.prototype, "advertList", void 0), 
    n([ c.Data([]) ], e.prototype, "proTypeList", void 0), n([ c.Data([]) ], e.prototype, "recommendList", void 0), 
    n([ c.Data([]) ], e.prototype, "topSalesList", void 0), n([ c.Data([]) ], e.prototype, "currentList", void 0), 
    e;
}(s.default);

exports.default = h;