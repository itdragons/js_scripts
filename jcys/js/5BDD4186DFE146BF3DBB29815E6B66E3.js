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
    function n() {
        this.constructor = t;
    }
    e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, 
    new n());
}), n = function(e, o, n, r) {
    var i, a = arguments.length, l = a < 3 ? o : null === r ? r = Object.getOwnPropertyDescriptor(o, n) : r;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, o, n, r); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (l = (a < 3 ? i(l) : a > 3 ? i(o, n, l) : i(o, n)) || l);
    return a > 3 && l && Object.defineProperty(o, n, l), l;
}, r = function(e, t, o, n) {
    return new (o || (o = Promise))(function(r, i) {
        function a(e) {
            try {
                u(n.next(e));
            } catch (e) {
                i(e);
            }
        }
        function l(e) {
            try {
                u(n.throw(e));
            } catch (e) {
                i(e);
            }
        }
        function u(e) {
            var t;
            e.done ? r(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                e(t);
            })).then(a, l);
        }
        u((n = n.apply(e, t || [])).next());
    });
}, i = function(e, t) {
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
        next: l(0),
        throw: l(1),
        return: l(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this;
    }), i;
    function l(i) {
        return function(l) {
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
                    i = t.call(e, a);
                } catch (e) {
                    i = [ 6, e ], n = 0;
                } finally {
                    o = r = 0;
                }
                if (5 & i[0]) throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                };
            }([ i, l ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = require("./A02C1207DFE146BFC64A7A00113A66E3"), l = require("./38A05F86DFE146BF5EC63781B6CC66E3"), u = require("./9D37ECA4DFE146BFFB5184A3CEFC66E3"), p = getApp(), s = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.list = [], t.type = 0, t;
    }
    return o(t, e), t.prototype.onLoad = function(t) {
        e.prototype.onLoad.call(this), wx.hideShareMenu(), wx.offCopyUrl(), this.type = parseInt(t.type), 
        2 === this.type && wx.setNavigationBarTitle({
            title: "我的预约"
        }), this.peoplePageList(!0);
    }, t.prototype.onToLowerHandle = function() {
        this.noMore || this.peoplePageList(!1);
    }, t.prototype.peoplePageList = function(e) {
        var t;
        return r(this, void 0, void 0, function() {
            var o, n;
            return i(this, function(r) {
                switch (r.label) {
                  case 0:
                    return this.loadPaging || (o = void 0, o = 2 === this.type ? {
                        userId: null === (t = p.globalData.userInfo) || void 0 === t ? void 0 : t.userId
                    } : {
                        lucky: 1
                    }, this.loadPaging = new u.default({
                        path: "/consumer/pro/peoplePageList",
                        params: o
                    })), [ 4, this.loadPaging.loadData(e) ];

                  case 1:
                    return (n = r.sent()).list.map(function(e) {
                        e.mobile_phone = e.mobile_phone.substr(0, 3) + "********", e.true_name = e.true_name.substr(0, 1) + "**";
                    }), this.list = n.list, this.noMore = !n.hasMore, [ 2 ];
                }
            });
        });
    }, n([ l.Data([]) ], t.prototype, "list", void 0), n([ l.Data(0) ], t.prototype, "type", void 0), 
    n([ l.Data(!1) ], t.prototype, "noMore", void 0), t;
}(a.default);

exports.default = s;