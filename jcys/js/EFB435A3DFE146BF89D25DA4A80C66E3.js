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
    var i, s = arguments.length, a = s < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, r) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, r, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (s < 3 ? i(a) : s > 3 ? i(o, r, a) : i(o, r)) || a);
    return s > 3 && a && Object.defineProperty(o, r, a), a;
}, n = function(t, e, o, r) {
    return new (o || (o = Promise))(function(n, i) {
        function s(t) {
            try {
                c(r.next(t));
            } catch (t) {
                i(t);
            }
        }
        function a(t) {
            try {
                c(r.throw(t));
            } catch (t) {
                i(t);
            }
        }
        function c(t) {
            var e;
            t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                t(e);
            })).then(s, a);
        }
        c((r = r.apply(t, e || [])).next());
    });
}, i = function(t, e) {
    var o, r, n, i, s = {
        label: 0,
        sent: function() {
            if (1 & n[0]) throw n[1];
            return n[1];
        },
        trys: [],
        ops: []
    };
    return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this;
    }), i;
    function a(i) {
        return function(a) {
            return function(i) {
                if (o) throw new TypeError("Generator is already executing.");
                for (;s; ) try {
                    if (o = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 
                    0) : r.next) && !(n = n.call(r, i[1])).done) return n;
                    switch (r = 0, n && (i = [ 2 & i[0], n.value ]), i[0]) {
                      case 0:
                      case 1:
                        n = i;
                        break;

                      case 4:
                        return s.label++, {
                            value: i[1],
                            done: !1
                        };

                      case 5:
                        s.label++, r = i[1], i = [ 0 ];
                        continue;

                      case 7:
                        i = s.ops.pop(), s.trys.pop();
                        continue;

                      default:
                        if (!(n = s.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                            s.label = i[1];
                            break;
                        }
                        if (6 === i[0] && s.label < n[1]) {
                            s.label = n[1], n = i;
                            break;
                        }
                        if (n && s.label < n[2]) {
                            s.label = n[2], s.ops.push(i);
                            break;
                        }
                        n[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    i = e.call(t, s);
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
            }([ i, a ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var s = require("./A02C1207DFE146BFC64A7A00113A66E3"), a = require("./38A05F86DFE146BF5EC63781B6CC66E3"), c = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), u = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), p = require("./34D73CD2DFE146BF52B154D556BD66E3"), l = getApp(), f = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.receivedASuccessfulPositioningNotification = !1, e.bannerList = [], e.type1List = [], 
        e.type2List = [], e.type3List = [], e.prefectureList = [], e.storeList = [], e.tabList = [], 
        e;
    }
    return o(e, t), e.prototype.onPositionOkHandle = function() {
        this.receivedASuccessfulPositioningNotification || (this.receivedASuccessfulPositioningNotification = !0, 
        this.getDataFromServer());
    }, e.prototype.onSubmitHandle = function() {
        var t = this;
        p.wxApiToPromise(wx.requestPayment, {
            nonceStr: "23c8bbdada8e462ab3710ac184e4e10d",
            package: "prepay_id=wx241922095529602246e081435ed6220000",
            timeStamp: "1629804129",
            appid: "wx88c590140de89f92",
            signType: "RSA",
            paySign: "TY0h5g2/uReIiqM47z9h5rTF4zaQDZvfc4xlJXZxIzXmP2D2jYDNms0wIAfKQ9E1SZELtTBgKksTG9IQdG8CLXFUqtyOxBOqYgHRpt3YXjU80DTIeUq1jJpvvTcWLPFJd52pmHBKJU5eBfaCL3qTAg9rCUJM9KVHcuQf6Ns0z5I5VMYtK/XZ+3r7U6dlKgUeNd94UM02/K2RPoBReR4i94dHUrH8NhnT5MuAr1e6bpVwDs3NeohKXTQGS8gj9B0YN5Es8gEeOdAd9tBwCdEpLxwSRSFPMcOWvj0GOI9EC6D1fGGovuyxRnCoypkabKYQCNnfyhJ1H+70J9JE6vjQUQ=="
        }).then(function(e) {
            "requestPayment:ok" === e.errMsg ? (c.showToastNoIcon("支付成功"), setTimeout(function() {
                1 === t.orderInfo.orderInfo.orderType ? c.go("/pages/my_order/my_order", u.Constant.LOGIN_JUMP_REDIRECT_TO) : c.go("/pages/my_order_for_o2o/my_order_for_o2o", u.Constant.LOGIN_JUMP_REDIRECT_TO);
            }, 5e3)) : (c.showToastNoIcon(e.errMsg), t.goOrder());
        }, function() {
            c.showToastNoIcon("支付失败"), t.goOrder();
        }).catch(function() {
            c.showToastNoIcon("未知错误"), t.goOrder();
        });
    }, e.prototype.getDataFromServer = function() {
        return n(this, void 0, void 0, function() {
            var t;
            return i(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/pro/common/product/takeOutHomeData", {
                        type1: 4,
                        type2: 3,
                        type3: 3,
                        type4: 3
                    }) ];

                  case 1:
                    return (t = e.sent()) && (this.bannerList = t.bannerList, this.type1List = t.type1List, 
                    this.type2List = t.type2List, this.type3List = t.type3List, this.prefectureList = t.prefectureList), 
                    this.getStorelistFromServer(0), [ 2 ];
                }
            });
        });
    }, e.prototype.onFilterHandle = function(t) {
        this.getStorelistFromServer(t.detail);
    }, e.prototype.getStorelistFromServer = function(t) {
        return n(this, void 0, void 0, function() {
            var e;
            return i(this, function(o) {
                switch (o.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/pro/common/product/sysOrgList", {
                        orgType: 2,
                        sortKey: 0 === t ? 1 : 1 === t ? 2 : 5,
                        sortValue: 1 === t ? "DESC" : "ASC",
                        userLng: l.globalData.position.longitude,
                        userLat: l.globalData.position.latitude
                    }) ];

                  case 1:
                    return (e = o.sent()) && (this.storeList = e.list), [ 2 ];
                }
            });
        });
    }, e.prototype.onTabChangedHandle = function(t) {
        var e = "/" + t.detail.path;
        c.go(e, u.Constant.LOGIN_JUMP_REDIRECT_TO);
    }, r([ a.Data(!1) ], e.prototype, "receivedASuccessfulPositioningNotification", void 0), 
    r([ a.Data([]) ], e.prototype, "bannerList", void 0), r([ a.Data([]) ], e.prototype, "type1List", void 0), 
    r([ a.Data([]) ], e.prototype, "type2List", void 0), r([ a.Data([]) ], e.prototype, "type3List", void 0), 
    r([ a.Data([]) ], e.prototype, "prefectureList", void 0), r([ a.Data([]) ], e.prototype, "storeList", void 0), 
    r([ a.Data(l.globalData.tab1List) ], e.prototype, "tabList", void 0), e;
}(s.default);

exports.default = f;