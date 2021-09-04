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
    var a, i = arguments.length, c = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, r) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, o, r, n); else for (var s = e.length - 1; s >= 0; s--) (a = e[s]) && (c = (i < 3 ? a(c) : i > 3 ? a(o, r, c) : a(o, r)) || c);
    return i > 3 && c && Object.defineProperty(o, r, c), c;
}, n = function(e, t, o, r) {
    return new (o || (o = Promise))(function(n, a) {
        function i(e) {
            try {
                s(r.next(e));
            } catch (e) {
                a(e);
            }
        }
        function c(e) {
            try {
                s(r.throw(e));
            } catch (e) {
                a(e);
            }
        }
        function s(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                e(t);
            })).then(i, c);
        }
        s((r = r.apply(e, t || [])).next());
    });
}, a = function(e, t) {
    var o, r, n, a, i = {
        label: 0,
        sent: function() {
            if (1 & n[0]) throw n[1];
            return n[1];
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
                    if (o = 1, r && (n = 2 & a[0] ? r.return : a[0] ? r.throw || ((n = r.return) && n.call(r), 
                    0) : r.next) && !(n = n.call(r, a[1])).done) return n;
                    switch (r = 0, n && (a = [ 2 & a[0], n.value ]), a[0]) {
                      case 0:
                      case 1:
                        n = a;
                        break;

                      case 4:
                        return i.label++, {
                            value: a[1],
                            done: !1
                        };

                      case 5:
                        i.label++, r = a[1], a = [ 0 ];
                        continue;

                      case 7:
                        a = i.ops.pop(), i.trys.pop();
                        continue;

                      default:
                        if (!(n = i.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                            i = 0;
                            continue;
                        }
                        if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                            i.label = a[1];
                            break;
                        }
                        if (6 === a[0] && i.label < n[1]) {
                            i.label = n[1], n = a;
                            break;
                        }
                        if (n && i.label < n[2]) {
                            i.label = n[2], i.ops.push(a);
                            break;
                        }
                        n[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                } catch (e) {
                    a = [ 6, e ], r = 0;
                } finally {
                    o = n = 0;
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

var i = require("./A02C1207DFE146BFC64A7A00113A66E3"), c = require("./38A05F86DFE146BF5EC63781B6CC66E3"), s = require("./AB909F77DFE146BFCDF6F770FE3D66E3"), u = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), l = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), f = getApp(), d = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.info = {}, t;
    }
    return o(t, e), t.prototype.onLoad = function(t) {
        e.prototype.onLoad.call(this);
        var o = t.info || "";
        (o = JSON.parse(s.decryptBase64(o))).formData = {}, o.formData.packagingScore = 3, 
        o.formData.deliverySpeedScore = 3, o.formData.deliveryPersonScore = 3, o.formData.orderComment = "", 
        o.formData.goods = [];
        for (var r = 0; r < o.orderDetailList.length; r++) o.formData.goods.push({
            score: 4,
            comment: ""
        });
        this.info = o;
    }, t.prototype.onScoreChangedHandle = function(e) {
        var t = e.detail, o = e.currentTarget.dataset.key, r = this.info.formData;
        r[o] = t;
        var n = this.info;
        n.formData = r, this.info = n;
    }, t.prototype.onOrderInputChangedHandle = function(e) {
        var t = e.detail.value, o = this.info;
        o.formData.orderComment = t, this.info = o;
    }, t.prototype.onGoodsScoreChangedHandle = function(e) {
        var t = 1 * e.currentTarget.dataset.index, o = this.info;
        o.formData.goods[t].score = e.detail, this.info = o;
    }, t.prototype.onGoodsInputChangedHandle = function(e) {
        var t = 1 * e.currentTarget.dataset.index, o = this.info;
        o.formData.goods[t].comment = e.detail.value, this.info = o;
    }, t.prototype.onSubmitHandle = function() {
        return n(this, void 0, void 0, function() {
            var e, t, o, r, n;
            return a(this, function(a) {
                switch (a.label) {
                  case 0:
                    if (!(e = this.info.formData).orderComment) return u.showToastNoIcon("请输入订单评论"), 
                    [ 2 ];
                    for (t = this.info, o = {
                        orderId: t.orderInfo.id,
                        packageScore: e.packagingScore,
                        speedScore: e.deliverySpeedScore,
                        deliverScore: e.deliveryPersonScore,
                        description: e.orderComment,
                        commentDetailList: []
                    }, r = 0; r < e.goods.length; r++) {
                        if (!e.goods[r].comment) return u.showToastNoIcon("请输入商品评论"), [ 2 ];
                        o.commentDetailList.push({
                            id: t.orderDetailList[r].id,
                            proId: t.orderDetailList[r].proId,
                            proScore: e.goods[r].score,
                            description: e.goods[r].comment
                        });
                    }
                    return [ 4, this.simpleRequest("/consumer/order/evaluate", o, !0, "提交中...") ];

                  case 1:
                    return n = a.sent(), console.log(n), n && (u.showToastNoIcon("评论已提交，待审核"), setTimeout(function() {
                        f.globalData.refresh = !0, u.go("", l.Constant.LOGIN_JUMP_NAVIGATE_BACK);
                    }, 2e3)), [ 2 ];
                }
            });
        });
    }, r([ c.Data({}) ], t.prototype, "info", void 0), t;
}(i.default);

exports.default = d;