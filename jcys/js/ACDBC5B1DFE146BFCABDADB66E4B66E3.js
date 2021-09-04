var e, t = require("jcys/js/@babel/runtime/helpers/typeof.js"), r = (e = function(t, r) {
    return (e = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    })(t, r);
}, function(t, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    function o() {
        this.constructor = t;
    }
    e(t, r), t.prototype = null === r ? Object.create(r) : (o.prototype = r.prototype, 
    new o());
}), o = function(e, r, o, n) {
    var i, a = arguments.length, s = a < 3 ? r : null === n ? n = Object.getOwnPropertyDescriptor(r, o) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, r, o, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (s = (a < 3 ? i(s) : a > 3 ? i(r, o, s) : i(r, o)) || s);
    return a > 3 && s && Object.defineProperty(r, o, s), s;
}, n = function(e, t, r, o) {
    return new (r || (r = Promise))(function(n, i) {
        function a(e) {
            try {
                u(o.next(e));
            } catch (e) {
                i(e);
            }
        }
        function s(e) {
            try {
                u(o.throw(e));
            } catch (e) {
                i(e);
            }
        }
        function u(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                e(t);
            })).then(a, s);
        }
        u((o = o.apply(e, t || [])).next());
    });
}, i = function(e, t) {
    var r, o, n, i, a = {
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
                if (r) throw new TypeError("Generator is already executing.");
                for (;a; ) try {
                    if (r = 1, o && (n = 2 & i[0] ? o.return : i[0] ? o.throw || ((n = o.return) && n.call(o), 
                    0) : o.next) && !(n = n.call(o, i[1])).done) return n;
                    switch (o = 0, n && (i = [ 2 & i[0], n.value ]), i[0]) {
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
                        a.label++, o = i[1], i = [ 0 ];
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
                    i = t.call(e, a);
                } catch (e) {
                    i = [ 6, e ], o = 0;
                } finally {
                    r = n = 0;
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

var a, s, u, p, c = require("./A02C1207DFE146BFC64A7A00113A66E3"), l = require("./AB003BE7DFE146BFCD6653E01BBC66E3"), f = require("./9D37ECA4DFE146BFFB5184A3CEFC66E3"), h = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), d = require("./AB909F77DFE146BFCDF6F770FE3D66E3"), y = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.id = "", t.times = [], t.info = {}, t.type = 1, t;
    }
    return r(t, e), t.prototype.onLoad = function(t) {
        e.prototype.onLoad.call(this), this.info = JSON.parse(d.decryptBase64(t.info)), 
        this.id = this.info.proRushPurchase.id, this.observersInfo(this.info), this.loadProductList(!0);
    }, t.prototype.onToLowerHandle = function() {
        this.noMore || this.loadProductList(!1);
    }, t.prototype.loadProductList = function(e) {
        return n(this, void 0, void 0, function() {
            var t;
            return i(this, function(r) {
                switch (r.label) {
                  case 0:
                    return this.loadPaging || (this.loadPaging = new f.default({
                        path: "/consumer/pro/common/product/pageList",
                        pageSize: 9,
                        params: {
                            rushPurchaseId: this.id
                        }
                    })), [ 4, this.loadPaging.loadData(e) ];

                  case 1:
                    return t = r.sent(), this.list = t.list, this.noMore = !t.hasMore, [ 2 ];
                }
            });
        });
    }, t.prototype.observersInfo = function(e) {
        var t, r, o, n = this;
        if (e.proRushPurchase) {
            e.proRushPurchase.beginTime = e.proRushPurchase.beginTime.replace(/-/gi, "/"), e.proRushPurchase.endTime = e.proRushPurchase.endTime.replace(/-/gi, "/"), 
            e.systemDate = e.systemDate.replace(/-/gi, "/"), t = e.proRushPurchase.beginTime, 
            r = e.proRushPurchase.endTime, o = e.systemDate, a = Date.now();
            var i = Date.parse(o) - a;
            u = setInterval(function() {
                n.getTime(t, r, i);
            }, 1e3);
        }
    }, t.prototype.getTime = function(e, t, r) {
        a = Date.now(), s = new Date().toString(), Date.parse(e) - a > 0 ? (this.type = 0, 
        p = h.getDateValue(s, e, r), this.times = p.toString().split(",")) : a - Date.parse(t) > 0 ? (this.type = 2, 
        clearInterval(u)) : a >= Date.parse(e) && a <= Date.parse(t) && (this.type = 1, 
        p = h.getDateValue(s, t, r), this.times = p.toString().split(","));
    }, o([ l.Data("") ], t.prototype, "id", void 0), o([ l.Data(!1) ], t.prototype, "noMore", void 0), 
    o([ l.Data("") ], t.prototype, "list", void 0), o([ l.Data([]) ], t.prototype, "times", void 0), 
    o([ l.Data({}) ], t.prototype, "info", void 0), o([ l.Data(1) ], t.prototype, "type", void 0), 
    t;
}(c.default);

exports.default = y;