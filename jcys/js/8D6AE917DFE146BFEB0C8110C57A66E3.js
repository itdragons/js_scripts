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
    function n() {
        this.constructor = t;
    }
    e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, 
    new n());
}), n = function(e, r, n, o) {
    var i, s = arguments.length, a = s < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, n) : o;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, r, n, o); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (s < 3 ? i(a) : s > 3 ? i(r, n, a) : i(r, n)) || a);
    return s > 3 && a && Object.defineProperty(r, n, a), a;
}, o = function(e, t, r, n) {
    return new (r || (r = Promise))(function(o, i) {
        function s(e) {
            try {
                u(n.next(e));
            } catch (e) {
                i(e);
            }
        }
        function a(e) {
            try {
                u(n.throw(e));
            } catch (e) {
                i(e);
            }
        }
        function u(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                e(t);
            })).then(s, a);
        }
        u((n = n.apply(e, t || [])).next());
    });
}, i = function(e, t) {
    var r, n, o, i, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
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
                if (r) throw new TypeError("Generator is already executing.");
                for (;s; ) try {
                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 
                    0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                    switch (n = 0, o && (i = [ 2 & i[0], o.value ]), i[0]) {
                      case 0:
                      case 1:
                        o = i;
                        break;

                      case 4:
                        return s.label++, {
                            value: i[1],
                            done: !1
                        };

                      case 5:
                        s.label++, n = i[1], i = [ 0 ];
                        continue;

                      case 7:
                        i = s.ops.pop(), s.trys.pop();
                        continue;

                      default:
                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                            s.label = i[1];
                            break;
                        }
                        if (6 === i[0] && s.label < o[1]) {
                            s.label = o[1], o = i;
                            break;
                        }
                        if (o && s.label < o[2]) {
                            s.label = o[2], s.ops.push(i);
                            break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    i = t.call(e, s);
                } catch (e) {
                    i = [ 6, e ], n = 0;
                } finally {
                    r = o = 0;
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

var s = require("./A02C1207DFE146BFC64A7A00113A66E3"), a = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), u = require("./38A05F86DFE146BF5EC63781B6CC66E3"), c = require("./AB909F77DFE146BFCDF6F770FE3D66E3"), l = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), d = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.from = 0, t;
    }
    return r(t, e), t.prototype.onLoad = function(t) {
        e.prototype.onLoad.call(this);
        var r = t.from, n = void 0 === r ? 0 : r;
        this.from = 1 * n;
    }, t.prototype.onShow = function() {
        this.getDataFromServer();
    }, t.prototype.onEditHandle = function() {
        a.go("/pages/edit_address/edit_address");
    }, t.prototype.getDataFromServer = function() {
        return o(this, void 0, void 0, function() {
            var e;
            return i(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/user/userAddress/list") ];

                  case 1:
                    return (e = t.sent()) && (this.addressList = e), [ 2 ];
                }
            });
        });
    }, t.prototype.onDeleteAddressHandle = function(e) {
        return o(this, void 0, void 0, function() {
            return i(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/user/userAddress/save", {
                        id: e.detail,
                        status: 0
                    }) ];

                  case 1:
                    return t.sent() && this.getDataFromServer(), [ 2 ];
                }
            });
        });
    }, t.prototype.onSetDefaultAddressHandle = function(e) {
        return o(this, void 0, void 0, function() {
            return i(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4, this.simpleRequest("/consumer/user/userAddress/save", {
                        id: e.detail,
                        isDefault: 1
                    }) ];

                  case 1:
                    return t.sent() && this.getDataFromServer(), [ 2 ];
                }
            });
        });
    }, t.prototype.onEditClickHandle = function(e) {
        var t, r = e.detail, n = null === (t = this.addressList) || void 0 === t ? void 0 : t.find(function(e) {
            return e.id === r;
        });
        a.go("/pages/edit_address/edit_address?info=" + c.encryptBase64(JSON.stringify(n)));
    }, t.prototype.onChooseAddressHandle = function(e) {
        var t;
        if (0 !== this.from) {
            var r = e.detail, n = null === (t = this.addressList) || void 0 === t ? void 0 : t.find(function(e) {
                return e.id === r;
            });
            wx.setStorageSync("choose_address", JSON.stringify(n)), a.go("", l.Constant.LOGIN_JUMP_NAVIGATE_BACK);
        }
    }, t.prototype.onUnload = function() {
        1 === this.from && 0 === this.addressList.length && wx.setStorageSync("choose_address", JSON.stringify({}));
    }, n([ u.Data([]) ], t.prototype, "addressList", void 0), t;
}(s.default);

exports.default = d;