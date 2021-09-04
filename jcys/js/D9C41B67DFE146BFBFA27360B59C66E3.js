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
    var i, a = arguments.length, s = a < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, r) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, r, n); else for (var l = t.length - 1; l >= 0; l--) (i = t[l]) && (s = (a < 3 ? i(s) : a > 3 ? i(o, r, s) : i(o, r)) || s);
    return a > 3 && s && Object.defineProperty(o, r, s), s;
}, n = function(t, e, o, r) {
    return new (o || (o = Promise))(function(n, i) {
        function a(t) {
            try {
                l(r.next(t));
            } catch (t) {
                i(t);
            }
        }
        function s(t) {
            try {
                l(r.throw(t));
            } catch (t) {
                i(t);
            }
        }
        function l(t) {
            var e;
            t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                t(e);
            })).then(a, s);
        }
        l((r = r.apply(t, e || [])).next());
    });
}, i = function(t, e) {
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
                    i = e.call(t, a);
                } catch (t) {
                    i = [ 6, t ], r = 0;
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

var a = require("./A02C1207DFE146BFC64A7A00113A66E3"), s = require("./38A05F86DFE146BF5EC63781B6CC66E3"), l = require("./9D37ECA4DFE146BFFB5184A3CEFC66E3"), c = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.isIntegralShop = 0, e.isRecommend = 0, e.orgType = 1, e;
    }
    return o(e, t), e.prototype.onLoad = function(e) {
        t.prototype.onLoad.call(this), this.isIntegralShop = e.isIntegralShop || 0, this.isRecommend = e.isRecommend || 0, 
        this.orgType = e.orgType || 1, 1 * this.isIntegralShop == 1 ? wx.setNavigationBarTitle({
            title: "积分门店"
        }) : 1 * this.isRecommend == 1 && wx.setNavigationBarTitle({
            title: "推荐门店"
        }), this.getDataFromServer(!0);
    }, e.prototype.getDataFromServer = function(t) {
        return void 0 === t && (t = !0), n(this, void 0, void 0, function() {
            var e;
            return i(this, function(o) {
                switch (o.label) {
                  case 0:
                    return this.loadPaging || (this.loadPaging = new l.default({
                        path: "/consumer/pro/common/product/sysOrgList"
                    })), 1 * this.isRecommend == 1 ? this.loadPaging.params.isRecommend = 1 : 1 * this.isIntegralShop == 1 && (this.loadPaging.params.isIntegralShop = 1), 
                    1 * this.orgType == 2 ? this.loadPaging.params.orgType = 2 : this.loadPaging.params.orgType = 1, 
                    [ 4, this.loadPaging.loadData(t) ];

                  case 1:
                    return e = o.sent(), console.log(e), e && (this.noMore = !e.hasMore, this.list = e.list), 
                    [ 2 ];
                }
            });
        });
    }, e.prototype.onToLowerHandle = function() {
        this.noMore || this.getDataFromServer(!1);
    }, r([ s.Data(!1) ], e.prototype, "noMore", void 0), r([ s.Data([]) ], e.prototype, "list", void 0), 
    r([ s.Data(0) ], e.prototype, "isIntegralShop", void 0), r([ s.Data(0) ], e.prototype, "isRecommend", void 0), 
    r([ s.Data(1) ], e.prototype, "orgType", void 0), e;
}(a.default);

exports.default = c;