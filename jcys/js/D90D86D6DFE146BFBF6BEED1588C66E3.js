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
}), r = function(t, o, r, i) {
    var n, s = arguments.length, a = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, r) : i;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, r, i); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (s < 3 ? n(a) : s > 3 ? n(o, r, a) : n(o, r)) || a);
    return s > 3 && a && Object.defineProperty(o, r, a), a;
}, i = function(t, e, o, r) {
    return new (o || (o = Promise))(function(i, n) {
        function s(t) {
            try {
                u(r.next(t));
            } catch (t) {
                n(t);
            }
        }
        function a(t) {
            try {
                u(r.throw(t));
            } catch (t) {
                n(t);
            }
        }
        function u(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                t(e);
            })).then(s, a);
        }
        u((r = r.apply(t, e || [])).next());
    });
}, n = function(t, e) {
    var o, r, i, n, s = {
        label: 0,
        sent: function() {
            if (1 & i[0]) throw i[1];
            return i[1];
        },
        trys: [],
        ops: []
    };
    return n = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
        return this;
    }), n;
    function a(n) {
        return function(a) {
            return function(n) {
                if (o) throw new TypeError("Generator is already executing.");
                for (;s; ) try {
                    if (o = 1, r && (i = 2 & n[0] ? r.return : n[0] ? r.throw || ((i = r.return) && i.call(r), 
                    0) : r.next) && !(i = i.call(r, n[1])).done) return i;
                    switch (r = 0, i && (n = [ 2 & n[0], i.value ]), n[0]) {
                      case 0:
                      case 1:
                        i = n;
                        break;

                      case 4:
                        return s.label++, {
                            value: n[1],
                            done: !1
                        };

                      case 5:
                        s.label++, r = n[1], n = [ 0 ];
                        continue;

                      case 7:
                        n = s.ops.pop(), s.trys.pop();
                        continue;

                      default:
                        if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                            s.label = n[1];
                            break;
                        }
                        if (6 === n[0] && s.label < i[1]) {
                            s.label = i[1], i = n;
                            break;
                        }
                        if (i && s.label < i[2]) {
                            s.label = i[2], s.ops.push(n);
                            break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    n = e.call(t, s);
                } catch (t) {
                    n = [ 6, t ], r = 0;
                } finally {
                    o = i = 0;
                }
                if (5 & n[0]) throw n[1];
                return {
                    value: n[0] ? n[1] : void 0,
                    done: !0
                };
            }([ n, a ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var s = require("./A02C1207DFE146BFC64A7A00113A66E3"), a = require("./38A05F86DFE146BF5EC63781B6CC66E3"), u = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), c = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.navIndex = 0, e.show = !1, e.isTimeIntervals = !1, e.currentItem = !1, 
        e.enableClick = !0, e.count = 0, e;
    }
    return o(e, t), e.prototype.onLoad = function(e) {
        t.prototype.onLoad.call(this);
        var o = e.prefectureId, r = void 0 === o ? "" : o, i = e.id, n = void 0 === i ? "" : i, s = e.latitude, a = void 0 === s ? "" : s, u = e.longitude, c = void 0 === u ? "" : u, p = e.typeId, d = e.proId;
        this.latitude = a, this.longitude = c, this.id = n || "", this.prefectureId = r || "", 
        this.typeId = p || "", this.proId = d || "", this.currentTime = new Date().getTime();
    }, e.prototype.onShow = function() {
        this.getShopInfo();
    }, e.prototype.isTimeInterval = function(t, e) {
        var o = new Date(), r = o.getTime(), i = o.getFullYear(), n = o.getMonth() + 1, s = o.getDate(), a = i + "/" + n + "/" + s + " " + t, u = i + "/" + n + "/" + s + " " + e, c = Date.parse(a), p = Date.parse(u);
        return c <= r && r <= p;
    }, e.prototype.getShopInfo = function() {
        return i(this, void 0, void 0, function() {
            var t;
            return n(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/pro/common/sys/orgInfo", {
                        orgId: this.id
                    }, !1) ];

                  case 1:
                    return t = e.sent(), this.info = t, this.isTimeIntervals = this.isTimeInterval(this.info.businessHoursBegin, this.info.businessHoursEnd), 
                    this.isTimeIntervals || u.alert({
                        content: "还没到营业时间",
                        confirmText: "确定"
                    }), wx.setNavigationBarTitle({
                        title: t.orgName
                    }), this.getCategoryList(), [ 2 ];
                }
            });
        });
    }, e.prototype.getCategoryList = function() {
        return i(this, void 0, void 0, function() {
            var t, e;
            return n(this, function(o) {
                switch (o.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/pro/common/product/getProTypeByOrgId", {
                        orgId: this.id,
                        bigType: 2
                    }, !1) ];

                  case 1:
                    for (t = o.sent() || [], this.categoryList = t, e = 0; e < t.length; e++) if (this.typeId === t[e].id) {
                        this.currentIndex = e;
                        break;
                    }
                    return this.categoryList.length && this.getGoodsList(), [ 2 ];
                }
            });
        });
    }, e.prototype.getGoodsList = function() {
        return i(this, void 0, void 0, function() {
            var t, e, o, r;
            return n(this, function(i) {
                switch (i.label) {
                  case 0:
                    return t = this.categoryList, e = t[this.currentIndex], o = {
                        page: 1,
                        pageSize: 50,
                        orgId: this.id,
                        prefectureId: this.prefectureId,
                        typeId: e.id,
                        bigType: 2,
                        status: 1,
                        userLng: this.longitude,
                        userLat: this.latitude
                    }, [ 4, this.simpleRequest("/consumer/pro/common/product/pageList", o, !1) ];

                  case 1:
                    return r = i.sent() || {}, this.goodsList = r ? r.list : [], this.targetId || (this.targetId = "id-" + this.proId), 
                    this.getCartList(), [ 2 ];
                }
            });
        });
    }, e.prototype.onCategoryClickHandle = function(t) {
        var e = 1 * t.currentTarget.dataset.index;
        this.currentIndex = e, this.scrollTo = 0, this.getGoodsList();
    }, e.prototype.onCountChangedHandle = function(t) {
        this.editCart(t.detail);
    }, e.prototype.getShipMode = function(t) {
        for (var e = 0, o = this.cartList; e < o.length; e++) for (var r = o[e], i = 0, n = r.proList; i < n.length; i++) {
            if (t === n[i].proId) return r.shipMode;
        }
        return 1;
    }, e.prototype.getCount = function(t) {
        for (var e = 0, o = this.cartList; e < o.length; e++) for (var r = 0, i = o[e].proList; r < i.length; r++) {
            var n = i[r];
            if (t === n.proId) return n.quantity - 1;
        }
        return 1;
    }, e.prototype.getCountForAdd = function(t, e, o) {
        for (var r = 0, i = this.cartList; r < i.length; r++) for (var n = i[r], s = 0, a = n.proList; s < a.length; s++) {
            var u = a[s];
            if (t === u.proId && o !== n.shipMode) return console.log("count:" + (e - u.quantity)), 
            e - u.quantity;
        }
        return console.log("count:" + e), e;
    }, e.prototype.editCart = function(t) {
        return i(this, void 0, void 0, function() {
            var e, o, r, i, s;
            return n(this, function(n) {
                return e = t.id, o = t.count, r = t.shipMode, i = t.remark, s = void 0 === i ? "" : i, 
                this.edit(e, o, r, s), [ 2 ];
            });
        });
    }, e.prototype.edit = function(t, e, o, r) {
        return i(this, void 0, void 0, function() {
            var i;
            return n(this, function(n) {
                switch (n.label) {
                  case 0:
                    return this.enableClick = !1, i = {
                        proId: t,
                        quantity: e,
                        remark: r,
                        shipMode: o
                    }, [ 4, this.simpleRequest("/consumer/order/shoppingTrolley/change", i, !1) ];

                  case 1:
                    return n.sent() && this.getCartList(), this.enableClick = !0, [ 2 ];
                }
            });
        });
    }, e.prototype.getCartList = function() {
        return i(this, void 0, void 0, function() {
            var t, e, o, r, i, s, a, u, c, p, d;
            return n(this, function(n) {
                switch (n.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/order/shoppingTrolley/list", {
                        bigType: 2,
                        orgId: this.id
                    }, !1) ];

                  case 1:
                    for (t = n.sent() || [], this.cartList = t, e = this.goodsList || [], o = 0, r = e; o < r.length; o++) (d = r[o]).count = 0;
                    if (t.length) for (i = 0; i < t.length; i++) for (s = 0, a = t[i].proList; s < a.length; s++) for (u = a[s], 
                    c = 0, p = e; c < p.length; c++) (d = p[c]).id === u.proId && (d.count += u.quantity);
                    return this.goodsList = e || [], this.getOrgComment(), [ 2 ];
                }
            });
        });
    }, e.prototype.getOrgComment = function() {
        return i(this, void 0, void 0, function() {
            var t;
            return n(this, function(e) {
                switch (e.label) {
                  case 0:
                    return t = this, [ 4, this.simpleRequest("/consumer/pro/common/getOrgComment", {
                        orgId: this.id
                    }, !1) ];

                  case 1:
                    return t.commentList = e.sent() || [], [ 2 ];
                }
            });
        });
    }, e.prototype.onPayHandle = function() {
        return i(this, void 0, void 0, function() {
            return n(this, function(t) {
                return this.cartList.length ? (this.cartList.length > 1 ? u.go("/pages/o2o_cart/o2o_cart?orgId=" + this.id) : this.createOrder(this.cartList[0].shipMode), 
                [ 2 ]) : (u.showToastNoIcon("请选择商品"), [ 2 ]);
            });
        });
    }, e.prototype.onCartHandle = function() {
        u.go("/pages/o2o_cart/o2o_cart?orgId=" + this.id);
    }, e.prototype.createOrder = function(t) {
        return i(this, void 0, void 0, function() {
            var e, o, r, i, s, a, c;
            return n(this, function(n) {
                switch (n.label) {
                  case 0:
                    for (e = {
                        orderType: 2,
                        orgId: this.id,
                        shipMode: t,
                        orderDetailList: []
                    }, o = this.cartList, r = o[0].proList, i = 0, s = r; i < s.length; i++) a = s[i], 
                    e.orderDetailList.push({
                        ostId: a.ostId,
                        proId: a.proId,
                        remark: a.remark,
                        quantity: a.quantity
                    });
                    return [ 4, this.simpleRequest("/consumer/order/addOrder", e) ];

                  case 1:
                    return (c = n.sent()) && c.orderId && u.go("/pages/confirm_order/confirm_order?index=" + t + "&orderId=" + c.orderId), 
                    [ 2 ];
                }
            });
        });
    }, e.prototype.onIndexChangedHandle = function(t) {
        var e = 1 * t.detail;
        this.navIndex = e;
    }, e.prototype.onItemClickHandle = function(t) {
        return i(this, void 0, void 0, function() {
            var e;
            return n(this, function(o) {
                switch (o.label) {
                  case 0:
                    return t.detail && t.detail.clickType && (this.clickType = t.detail.clickType), 
                    this.count = t.detail.count || 0, e = this, [ 4, this.simpleRequest("/consumer/pro/common/product/detail", {
                        proId: t.detail.id || t.detail
                    }, !1) ];

                  case 1:
                    return e.currentItem = o.sent() || [], this.show = !0, [ 2 ];
                }
            });
        });
    }, e.prototype.onSpecChangedHandle = function(t) {
        this.onItemClickHandle(t);
    }, e.prototype.onHideHandle = function() {
        this.show = !1;
    }, r([ a.Data("") ], e.prototype, "currentTime", void 0), r([ a.Data("") ], e.prototype, "id", void 0), 
    r([ a.Data("") ], e.prototype, "prefectureId", void 0), r([ a.Data("") ], e.prototype, "typeId", void 0), 
    r([ a.Data("") ], e.prototype, "proId", void 0), r([ a.Data("") ], e.prototype, "targetId", void 0), 
    r([ a.Data({}) ], e.prototype, "info", void 0), r([ a.Data([]) ], e.prototype, "categoryList", void 0), 
    r([ a.Data(0) ], e.prototype, "currentIndex", void 0), r([ a.Data("") ], e.prototype, "latitude", void 0), 
    r([ a.Data("") ], e.prototype, "longitude", void 0), r([ a.Data("") ], e.prototype, "goodsList", void 0), 
    r([ a.Data([]) ], e.prototype, "commentList", void 0), r([ a.Data(0) ], e.prototype, "scrollTo", void 0), 
    r([ a.Data([]) ], e.prototype, "cartList", void 0), r([ a.Data(0) ], e.prototype, "navIndex", void 0), 
    r([ a.Data(!1) ], e.prototype, "show", void 0), r([ a.Data(!1) ], e.prototype, "isTimeIntervals", void 0), 
    r([ a.Data({}) ], e.prototype, "currentItem", void 0), r([ a.Data(!0) ], e.prototype, "enableClick", void 0), 
    r([ a.Data("isDetails") ], e.prototype, "clickType", void 0), r([ a.Data(0) ], e.prototype, "count", void 0), 
    e;
}(s.default);

exports.default = c;