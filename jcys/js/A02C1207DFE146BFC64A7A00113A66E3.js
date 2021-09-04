var t = function(t, o, e, n) {
    return new (e || (e = Promise))(function(i, r) {
        function a(t) {
            try {
                u(n.next(t));
            } catch (t) {
                r(t);
            }
        }
        function c(t) {
            try {
                u(n.throw(t));
            } catch (t) {
                r(t);
            }
        }
        function u(t) {
            var o;
            t.done ? i(t.value) : (o = t.value, o instanceof e ? o : new e(function(t) {
                t(o);
            })).then(a, c);
        }
        u((n = n.apply(t, o || [])).next());
    });
}, o = function(t, o) {
    var e, n, i, r, a = {
        label: 0,
        sent: function() {
            if (1 & i[0]) throw i[1];
            return i[1];
        },
        trys: [],
        ops: []
    };
    return r = {
        next: c(0),
        throw: c(1),
        return: c(2)
    }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
        return this;
    }), r;
    function c(r) {
        return function(c) {
            return function(r) {
                if (e) throw new TypeError("Generator is already executing.");
                for (;a; ) try {
                    if (e = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
                    0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                    switch (n = 0, i && (r = [ 2 & r[0], i.value ]), r[0]) {
                      case 0:
                      case 1:
                        i = r;
                        break;

                      case 4:
                        return a.label++, {
                            value: r[1],
                            done: !1
                        };

                      case 5:
                        a.label++, n = r[1], r = [ 0 ];
                        continue;

                      case 7:
                        r = a.ops.pop(), a.trys.pop();
                        continue;

                      default:
                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                            a = 0;
                            continue;
                        }
                        if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                            a.label = r[1];
                            break;
                        }
                        if (6 === r[0] && a.label < i[1]) {
                            a.label = i[1], i = r;
                            break;
                        }
                        if (i && a.label < i[2]) {
                            a.label = i[2], a.ops.push(r);
                            break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    r = o.call(t, a);
                } catch (t) {
                    r = [ 6, t ], n = 0;
                } finally {
                    e = i = 0;
                }
                if (5 & r[0]) throw r[1];
                return {
                    value: r[0] ? r[1] : void 0,
                    done: !0
                };
            }([ r, c ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), n = require("./1B56B312DFE146BF7D30DB158E5D66E3"), i = require("./2C30C173DFE146BF4A56A9740F4D66E3"), r = getApp(), a = function() {
    function a() {
        this.lock = void 0;
    }
    return a.prototype.onLoad = function(t) {
        this._init();
    }, a.prototype.onShow = function() {
        this.lock && this.lock.isLocked() && this.lock.unlock();
    }, a.prototype.error = function(t) {
        e.showToastNoIcon("" + t.message);
    }, a.prototype.simpleRequest = function(a, c, u, s, l) {
        return void 0 === c && (c = {}), void 0 === u && (u = !0), void 0 === s && (s = ""), 
        void 0 === l && (l = !0), t(this, void 0, void 0, function() {
            var t;
            return o(this, function(o) {
                switch (o.label) {
                  case 0:
                    return l && (this.lock || (this.lock = new n.default(), r.globalData.lock = this.lock)), 
                    this.lock && this.lock.isLocked() ? [ 2 ] : (this.lock && this.lock.lock(), s ? u && e.showLoading({
                        title: s
                    }) : u && wx.showNavigationBarLoading(), [ 4, i.request(a, c) ]);

                  case 1:
                    return t = o.sent(), s ? u && e.hideLoading() : u && wx.hideNavigationBarLoading(), 
                    this.lock && this.lock.unlock(), 0 === t.code || 12001 === t.code || 1012 === t.code ? [ 2, Promise.resolve(!t.data || t.data) ] : (1014 === t.code ? 0 === t.data.isAuthentication && t.data.trueName ? e.alert({
                        content: "实名认证信息已提交，请耐心等待审核，审核通过后方可进行购买。"
                    }) : 2 === t.data.isAuthentication && t.data.trueName ? e.alert({
                        content: t.data.remark ? t.data.remark : "",
                        confirmText: "重新填写",
                        showCancel: !0,
                        confirm: function() {
                            e.go("/pages/authentication/authentication?normalUser=1");
                        }
                    }) : e.go("/pages/authentication/authentication?normalUser=1") : this.error(t), 
                    [ 2 ]);
                }
            });
        });
    }, a.prototype.onShareAppMessage = function() {
        return {
            path: "/pages/o2o_home/o2o_home"
        };
    }, a.prototype.onReady = function() {}, a.prototype.onHide = function() {}, a.prototype.onUnload = function() {}, 
    a.prototype.onPullDownRefresh = function() {}, a.prototype.onReachBottom = function() {}, 
    a.prototype.onPageScroll = function(t) {}, a.prototype.onTabItemTap = function(t) {}, 
    a.prototype.onResize = function(t) {}, a.prototype._init = function() {
        var t = this;
        this.data && Object.keys(this.data).forEach(function(o) {
            t._reactive(o);
        });
    }, a.prototype._reactive = function(t) {
        Object.defineProperty(this, t, {
            get: function() {
                return this.data[t];
            },
            set: function(o) {
                var e;
                this.setData(((e = {})[t] = o, e));
            }
        });
    }, a;
}();

exports.default = a;