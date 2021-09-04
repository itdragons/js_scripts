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
    var i, a = arguments.length, u = a < 3 ? o : null === r ? r = Object.getOwnPropertyDescriptor(o, n) : r;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, o, n, r); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (u = (a < 3 ? i(u) : a > 3 ? i(o, n, u) : i(o, n)) || u);
    return a > 3 && u && Object.defineProperty(o, n, u), u;
}, r = function(t, e, o, n) {
    return new (o || (o = Promise))(function(r, i) {
        function a(t) {
            try {
                c(n.next(t));
            } catch (t) {
                i(t);
            }
        }
        function u(t) {
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
            })).then(a, u);
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
        next: u(0),
        throw: u(1),
        return: u(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this;
    }), i;
    function u(i) {
        return function(u) {
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
            }([ i, u ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = require("./A02C1207DFE146BFC64A7A00113A66E3"), u = require("./38A05F86DFE146BF5EC63781B6CC66E3"), c = require("./9D37ECA4DFE146BFFB5184A3CEFC66E3"), l = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.id = "", e.info = {}, e;
    }
    return o(e, t), e.prototype.onLoad = function(e) {
        t.prototype.onLoad.call(this), this.id = e.id || "", this.getStoreInfo();
    }, e.prototype.getStoreInfo = function() {
        return r(this, void 0, void 0, function() {
            var t;
            return i(this, function(e) {
                switch (e.label) {
                  case 0:
                    return t = this, [ 4, this.simpleRequest("/consumer/pro/common/sys/orgInfo", {
                        orgId: this.id
                    }, !1) ];

                  case 1:
                    return t.info = e.sent(), wx.setNavigationBarTitle({
                        title: this.info.orgName
                    }), this.loadProductList(!0), [ 2 ];
                }
            });
        });
    }, e.prototype.onToLowerHandle = function() {
        this.noMore || this.loadProductList(!1);
    }, e.prototype.loadProductList = function(t) {
        return r(this, void 0, void 0, function() {
            var e;
            return i(this, function(o) {
                switch (o.label) {
                  case 0:
                    return this.loadPaging || (this.loadPaging = new c.default({
                        path: "/consumer/pro/common/product/pageList",
                        params: {
                            orgId: this.id
                        }
                    })), [ 4, this.loadPaging.loadData(t) ];

                  case 1:
                    return e = o.sent(), this.list = e.list, this.noMore = !e.hasMore, [ 2 ];
                }
            });
        });
    }, n([ u.Data("") ], e.prototype, "id", void 0), n([ u.Data({}) ], e.prototype, "info", void 0), 
    n([ u.Data(!1) ], e.prototype, "noMore", void 0), n([ u.Data("") ], e.prototype, "list", void 0), 
    e;
}(a.default);

exports.default = l;