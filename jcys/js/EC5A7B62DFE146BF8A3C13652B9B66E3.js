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
}), r = function(t, o, r, a) {
    var n, i = arguments.length, s = i < 3 ? o : null === a ? a = Object.getOwnPropertyDescriptor(o, r) : a;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, r, a); else for (var p = t.length - 1; p >= 0; p--) (n = t[p]) && (s = (i < 3 ? n(s) : i > 3 ? n(o, r, s) : n(o, r)) || s);
    return i > 3 && s && Object.defineProperty(o, r, s), s;
}, a = function(t, e, o, r) {
    return new (o || (o = Promise))(function(a, n) {
        function i(t) {
            try {
                p(r.next(t));
            } catch (t) {
                n(t);
            }
        }
        function s(t) {
            try {
                p(r.throw(t));
            } catch (t) {
                n(t);
            }
        }
        function p(t) {
            var e;
            t.done ? a(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                t(e);
            })).then(i, s);
        }
        p((r = r.apply(t, e || [])).next());
    });
}, n = function(t, e) {
    var o, r, a, n, i = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1];
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
                for (;i; ) try {
                    if (o = 1, r && (a = 2 & n[0] ? r.return : n[0] ? r.throw || ((a = r.return) && a.call(r), 
                    0) : r.next) && !(a = a.call(r, n[1])).done) return a;
                    switch (r = 0, a && (n = [ 2 & n[0], a.value ]), n[0]) {
                      case 0:
                      case 1:
                        a = n;
                        break;

                      case 4:
                        return i.label++, {
                            value: n[1],
                            done: !1
                        };

                      case 5:
                        i.label++, r = n[1], n = [ 0 ];
                        continue;

                      case 7:
                        n = i.ops.pop(), i.trys.pop();
                        continue;

                      default:
                        if (!(a = i.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                            i = 0;
                            continue;
                        }
                        if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                            i.label = n[1];
                            break;
                        }
                        if (6 === n[0] && i.label < a[1]) {
                            i.label = a[1], a = n;
                            break;
                        }
                        if (a && i.label < a[2]) {
                            i.label = a[2], i.ops.push(n);
                            break;
                        }
                        a[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    n = e.call(t, i);
                } catch (t) {
                    n = [ 6, t ], r = 0;
                } finally {
                    o = a = 0;
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

var i = require("./A02C1207DFE146BFC64A7A00113A66E3"), s = require("./38A05F86DFE146BF5EC63781B6CC66E3"), p = require("./9D37ECA4DFE146BFFB5184A3CEFC66E3"), l = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), c = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.type = 0, e.isOpenSettingBack = !1, e.isPrefecture = !1, e;
    }
    return o(e, t), e.prototype.onLoad = function(e) {
        t.prototype.onLoad.call(this);
        var o = e.prefectureId, r = e.id, a = e.type, n = e.proType;
        this.id = r, this.prefectureId = o, this.type = a, this.proType = n, this.searchKey = e.keyword, 
        o && (this.isPrefecture = !0), this.getData(), this.getCartList();
    }, e.prototype.onClickHandle = function(t) {
        var e = t.detail;
        this.index = e;
        for (var o = this.sortType, r = 0; r < o.length; r++) r === e ? (o[r].sort && o[r].selected && (o[r].sort = "ASC" === o[r].sort ? "DESC" : "ASC"), 
        o[r].selected = !0) : o[r].selected = !1;
        this.sortType = o, this.getData(!0);
    }, e.prototype.onToLowerHandle = function() {
        this.noMore || this.getData(!1);
    }, e.prototype.getSort = function() {
        var t = 0;
        switch (this.index) {
          case 0:
            t = 2;
            break;

          case 1:
            t = 3;
            break;

          case 2:
            t = 4;
            break;

          case 3:
            t = 1;
        }
        return t;
    }, e.prototype.getData = function(t) {
        return void 0 === t && (t = !0), a(this, void 0, void 0, function() {
            var e, o;
            return n(this, function(r) {
                switch (r.label) {
                  case 0:
                    return this.loadPaging || (this.loadPaging = new p.default({
                        path: "/consumer/pro/common/product/pageList",
                        params: {
                            proType: this.proType,
                            bigType: l.Constant.GOODS_BIG_TYPE_MALL,
                            status: 1
                        }
                    })), this.id ? this.loadPaging.params.typeId = this.id : delete this.loadPaging.params.typeId, 
                    this.searchKey ? this.loadPaging.params.proName = this.searchKey : delete this.loadPaging.params.proName, 
                    4 !== this.index ? (delete this.loadPaging.params.oneselfGain, e = this.getSort(), 
                    this.loadPaging.params.sortKey = e, this.loadPaging.params.sortValue = 3 === e ? this.sortType[1].sort : "DESC") : (this.loadPaging.params.oneselfGain = 1, 
                    delete this.loadPaging.params.sortKey, delete this.loadPaging.params.sortValue), 
                    1 * this.type === l.Constant.MALL_NEW_PRODUCT ? this.loadPaging.params.isRecommend = 1 : 1 * this.type === l.Constant.MALL_HOLIDAY_PACKAGE ? this.loadPaging.params.isGiftBag = 1 : 1 * this.type === l.Constant.MALL_HOT_GOODS ? (this.loadPaging.params.sortKey = 3, 
                    this.loadPaging.params.sortValue = "DESC") : 1 * this.type === l.Constant.MALL_FEATURED_GOODS ? this.loadPaging.params.isChoiceness = 1 : 1 * this.type === l.Constant.POINTS_HOT_GOODS ? (this.loadPaging.params.sortKey = 3, 
                    this.loadPaging.params.sortValue = "DESC") : 1 * this.type === l.Constant.POINTS_EXCHANGE_GOODS ? this.loadPaging.params.canGetInteger = 1 : (1 * this.type === l.Constant.MALL_PREFECTURE_GOODS || this.isPrefecture) && (this.loadPaging.params.prefectureId = this.prefectureId), 
                    [ 4, this.loadPaging.loadData(t) ];

                  case 1:
                    return (o = r.sent()) && (t && (this.scrollTop = 0), this.noMore = !o.hasMore, this.list = o.list), 
                    [ 2 ];
                }
            });
        });
    }, e.prototype.onConfirmHandle = function(t) {
        this.searchKey = t.detail, this.getData(!0);
    }, e.prototype.getCartList = function() {
        return a(this, void 0, void 0, function() {
            var t, e, o, r, a, i, s, p;
            return n(this, function(n) {
                switch (n.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/order/shoppingTrolley/list", {
                        bigType: 1
                    }) ];

                  case 1:
                    for (t = n.sent() || [], e = 0, o = 0, r = t; o < r.length; o++) for (a = r[o], 
                    i = 0, s = a.proList; i < s.length; i++) p = s[i], e += p.quantity;
                    return this.count = e, [ 2 ];
                }
            });
        });
    }, e.prototype.onAddCartHandle = function(t) {
        return a(this, void 0, void 0, function() {
            return n(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/order/shoppingTrolley/change", {
                        proId: t.detail.id,
                        quantity: 1,
                        shipMode: t.detail.shipMode,
                        addQuantity: !0
                    }, !0, "添加中...") ];

                  case 1:
                    return e.sent() && (wx.showToast({
                        title: "添加成功",
                        icon: "success"
                    }), this.getCartList()), [ 2 ];
                }
            });
        });
    }, r([ s.Data(!1) ], e.prototype, "noMore", void 0), r([ s.Data([]) ], e.prototype, "list", void 0), 
    r([ s.Data(0) ], e.prototype, "scrollTop", void 0), r([ s.Data("") ], e.prototype, "searchKey", void 0), 
    r([ s.Data("") ], e.prototype, "id", void 0), r([ s.Data(1) ], e.prototype, "prefectureId", void 0), 
    r([ s.Data("") ], e.prototype, "proType", void 0), r([ s.Data(0) ], e.prototype, "type", void 0), 
    r([ s.Data(0) ], e.prototype, "index", void 0), r([ s.Data([ {
        text: "销量",
        selected: !0
    }, {
        text: "价格",
        sort: "ASC",
        selected: !1
    }, {
        text: "好评",
        selected: !1
    }, {
        text: "新品",
        selected: !1
    }, {
        text: "到店自提",
        selected: !1,
        border: !0
    } ]) ], e.prototype, "sortType", void 0), r([ s.Data(0) ], e.prototype, "count", void 0), 
    e;
}(i.default);

exports.default = c;