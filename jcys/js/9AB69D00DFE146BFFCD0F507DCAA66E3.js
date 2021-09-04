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
    var i, u = arguments.length, a = u < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, r) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, r, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (u < 3 ? i(a) : u > 3 ? i(o, r, a) : i(o, r)) || a);
    return u > 3 && a && Object.defineProperty(o, r, a), a;
}, n = function(e, t, o, r) {
    return new (o || (o = Promise))(function(n, i) {
        function u(e) {
            try {
                s(r.next(e));
            } catch (e) {
                i(e);
            }
        }
        function a(e) {
            try {
                s(r.throw(e));
            } catch (e) {
                i(e);
            }
        }
        function s(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                e(t);
            })).then(u, a);
        }
        s((r = r.apply(e, t || [])).next());
    });
}, i = function(e, t) {
    var o, r, n, i, u = {
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
                for (;u; ) try {
                    if (o = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 
                    0) : r.next) && !(n = n.call(r, i[1])).done) return n;
                    switch (r = 0, n && (i = [ 2 & i[0], n.value ]), i[0]) {
                      case 0:
                      case 1:
                        n = i;
                        break;

                      case 4:
                        return u.label++, {
                            value: i[1],
                            done: !1
                        };

                      case 5:
                        u.label++, r = i[1], i = [ 0 ];
                        continue;

                      case 7:
                        i = u.ops.pop(), u.trys.pop();
                        continue;

                      default:
                        if (!(n = u.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            u = 0;
                            continue;
                        }
                        if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                            u.label = i[1];
                            break;
                        }
                        if (6 === i[0] && u.label < n[1]) {
                            u.label = n[1], n = i;
                            break;
                        }
                        if (n && u.label < n[2]) {
                            u.label = n[2], u.ops.push(i);
                            break;
                        }
                        n[2] && u.ops.pop(), u.trys.pop();
                        continue;
                    }
                    i = t.call(e, u);
                } catch (e) {
                    i = [ 6, e ], r = 0;
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

var u = require("./A02C1207DFE146BFC64A7A00113A66E3"), a = require("./38A05F86DFE146BF5EC63781B6CC66E3"), s = require("./2C30C173DFE146BF4A56A9740F4D66E3"), c = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), l = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.storeIndex = 0, t.storeList = [], t;
    }
    return o(t, e), t.prototype.onLoad = function() {
        e.prototype.onLoad.call(this), wx.hideShareMenu(), wx.offCopyUrl(), this.getPeopleProList();
    }, t.prototype.getPeopleProList = function() {
        return n(this, void 0, void 0, function() {
            var e;
            return i(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4, s.request("/consumer/pro/getPeopleProList") ];

                  case 1:
                    return (e = t.sent()) && (this.storeList = e.data), [ 2 ];
                }
            });
        });
    }, t.prototype.onChangedHandle = function(e) {
        var t = e.currentTarget.dataset.key;
        console.log(e), this[t] = e.detail.value;
    }, t.prototype.onSubmitHandle = function() {
        return n(this, void 0, void 0, function() {
            var e;
            return i(this, function(t) {
                switch (t.label) {
                  case 0:
                    return -1 === this.storeIndex ? (c.showToastNoIcon("请选择申请门店"), [ 2 ]) : (e = {
                        orgId: this.storeList[this.storeIndex].id
                    }, [ 4, this.simpleRequest("/consumer/pro/people", e, !0, "提交中...") ]);

                  case 1:
                    return t.sent() && (c.showToastNoIcon("您已参与此次摇号活动，请耐心等待公布"), setTimeout(function() {
                        c.go("/pages/lucky_draw/home/home?source=1");
                    }, 3e3)), [ 2 ];
                }
            });
        });
    }, r([ a.Data(-1) ], t.prototype, "storeIndex", void 0), r([ a.Data([]) ], t.prototype, "storeList", void 0), 
    t;
}(u.default);

exports.default = l;