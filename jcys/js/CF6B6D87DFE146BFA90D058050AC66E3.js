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
    var i, u = arguments.length, a = u < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, n) : o;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, r, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (u < 3 ? i(a) : u > 3 ? i(r, n, a) : i(r, n)) || a);
    return u > 3 && a && Object.defineProperty(r, n, a), a;
}, o = function(e, t, r, n) {
    return new (r || (r = Promise))(function(o, i) {
        function u(e) {
            try {
                c(n.next(e));
            } catch (e) {
                i(e);
            }
        }
        function a(e) {
            try {
                c(n.throw(e));
            } catch (e) {
                i(e);
            }
        }
        function c(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                e(t);
            })).then(u, a);
        }
        c((n = n.apply(e, t || [])).next());
    });
}, i = function(e, t) {
    var r, n, o, i, u = {
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
                for (;u; ) try {
                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 
                    0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                    switch (n = 0, o && (i = [ 2 & i[0], o.value ]), i[0]) {
                      case 0:
                      case 1:
                        o = i;
                        break;

                      case 4:
                        return u.label++, {
                            value: i[1],
                            done: !1
                        };

                      case 5:
                        u.label++, n = i[1], i = [ 0 ];
                        continue;

                      case 7:
                        i = u.ops.pop(), u.trys.pop();
                        continue;

                      default:
                        if (!(o = u.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            u = 0;
                            continue;
                        }
                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                            u.label = i[1];
                            break;
                        }
                        if (6 === i[0] && u.label < o[1]) {
                            u.label = o[1], o = i;
                            break;
                        }
                        if (o && u.label < o[2]) {
                            u.label = o[2], u.ops.push(i);
                            break;
                        }
                        o[2] && u.ops.pop(), u.trys.pop();
                        continue;
                    }
                    i = t.call(e, u);
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

var u = require("./A02C1207DFE146BFC64A7A00113A66E3"), a = require("./38A05F86DFE146BF5EC63781B6CC66E3"), c = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.list = [], t;
    }
    return r(t, e), t.prototype.onLoad = function() {
        e.prototype.onLoad.call(this), this.getDataFromServer();
    }, t.prototype.getDataFromServer = function() {
        return o(this, void 0, void 0, function() {
            var e;
            return i(this, function(t) {
                switch (t.label) {
                  case 0:
                    return e = this, [ 4, this.simpleRequest("/consumer/user/userOrgPlanList") ];

                  case 1:
                    return e.list = t.sent(), [ 2 ];
                }
            });
        });
    }, n([ a.Data([]) ], t.prototype, "list", void 0), t;
}(u.default);

exports.default = c;