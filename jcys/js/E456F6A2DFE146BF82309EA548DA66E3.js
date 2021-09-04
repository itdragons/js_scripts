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
    var a, i = arguments.length, c = i < 3 ? o : null === r ? r = Object.getOwnPropertyDescriptor(o, n) : r;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, o, n, r); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (c = (i < 3 ? a(c) : i > 3 ? a(o, n, c) : a(o, n)) || c);
    return i > 3 && c && Object.defineProperty(o, n, c), c;
}, r = function(t, e, o, n) {
    return new (o || (o = Promise))(function(r, a) {
        function i(t) {
            try {
                s(n.next(t));
            } catch (t) {
                a(t);
            }
        }
        function c(t) {
            try {
                s(n.throw(t));
            } catch (t) {
                a(t);
            }
        }
        function s(t) {
            var e;
            t.done ? r(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                t(e);
            })).then(i, c);
        }
        s((n = n.apply(t, e || [])).next());
    });
}, a = function(t, e) {
    var o, n, r, a, i = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1];
        },
        trys: [],
        ops: []
    };
    return a = {
        next: c(0),
        throw: c(1),
        return: c(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this;
    }), a;
    function c(a) {
        return function(c) {
            return function(a) {
                if (o) throw new TypeError("Generator is already executing.");
                for (;i; ) try {
                    if (o = 1, n && (r = 2 & a[0] ? n.return : a[0] ? n.throw || ((r = n.return) && r.call(n), 
                    0) : n.next) && !(r = r.call(n, a[1])).done) return r;
                    switch (n = 0, r && (a = [ 2 & a[0], r.value ]), a[0]) {
                      case 0:
                      case 1:
                        r = a;
                        break;

                      case 4:
                        return i.label++, {
                            value: a[1],
                            done: !1
                        };

                      case 5:
                        i.label++, n = a[1], a = [ 0 ];
                        continue;

                      case 7:
                        a = i.ops.pop(), i.trys.pop();
                        continue;

                      default:
                        if (!(r = i.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                            i = 0;
                            continue;
                        }
                        if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                            i.label = a[1];
                            break;
                        }
                        if (6 === a[0] && i.label < r[1]) {
                            i.label = r[1], r = a;
                            break;
                        }
                        if (r && i.label < r[2]) {
                            i.label = r[2], i.ops.push(a);
                            break;
                        }
                        r[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = e.call(t, i);
                } catch (t) {
                    a = [ 6, t ], n = 0;
                } finally {
                    o = r = 0;
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }([ a, c ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = require("./A02C1207DFE146BFC64A7A00113A66E3"), c = require("./38A05F86DFE146BF5EC63781B6CC66E3"), s = require("./9D37ECA4DFE146BFFB5184A3CEFC66E3"), u = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), l = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), p = getApp(), d = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.categoryList = [], e.categoryIndex = 0, e.tabList = [], e;
    }
    return o(e, t), e.prototype.onLoad = function(e) {
        t.prototype.onLoad.call(this), wx.hideHomeButton(), this.getCategoryList(0);
    }, e.prototype.onNavIndexChangedHandle = function(t) {
        var e = t.detail;
        this.navIndex = e, this.getCategoryList(e);
    }, e.prototype.getCategoryList = function(t) {
        return r(this, void 0, void 0, function() {
            var e;
            return a(this, function(o) {
                switch (o.label) {
                  case 0:
                    return this.categoryIndex = 0, e = this, [ 4, this.simpleRequest("/consumer/pro/common/product/getProTypeList", {
                        bigType: 0 === t ? 2 : 1
                    }) ];

                  case 1:
                    return e.categoryList = o.sent(), this.loadProductList(!0), [ 2 ];
                }
            });
        });
    }, e.prototype.onClickHandle = function(t) {
        this.categoryIndex = 1 * t.currentTarget.dataset.index, this.loadProductList(!0);
    }, e.prototype.onToLowerHandle = function() {
        this.noMore || this.loadProductList(!1);
    }, e.prototype.loadProductList = function(t) {
        return r(this, void 0, void 0, function() {
            var e;
            return a(this, function(o) {
                switch (o.label) {
                  case 0:
                    return this.loadPaging || (this.loadPaging = new s.default({
                        path: "/consumer/pro/common/product/pageList"
                    })), this.loadPaging.params.typeId = this.categoryList[this.categoryIndex].id, this.loadPaging.params.bigType = 0 === this.navIndex ? 2 : 1, 
                    [ 4, this.loadPaging.loadData(t) ];

                  case 1:
                    return e = o.sent(), this.list = e.list, this.noMore = !e.hasMore, t && (this.scrollTop = 0), 
                    [ 2 ];
                }
            });
        });
    }, e.prototype.onTabChangedHandle = function(t) {
        var e = "/" + t.detail.path;
        u.go(e, l.Constant.LOGIN_JUMP_REDIRECT_TO);
    }, n([ c.Data([]) ], e.prototype, "categoryList", void 0), n([ c.Data(0) ], e.prototype, "categoryIndex", void 0), 
    n([ c.Data(!1) ], e.prototype, "noMore", void 0), n([ c.Data("") ], e.prototype, "list", void 0), 
    n([ c.Data(0) ], e.prototype, "scrollTop", void 0), n([ c.Data(0) ], e.prototype, "navIndex", void 0), 
    n([ c.Data(p.globalData.tab2List) ], e.prototype, "tabList", void 0), e;
}(i.default);

exports.default = d;