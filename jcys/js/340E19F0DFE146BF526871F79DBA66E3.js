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
    var a, i = arguments.length, u = i < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, n) : o;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) u = Reflect.decorate(e, r, n, o); else for (var l = e.length - 1; l >= 0; l--) (a = e[l]) && (u = (i < 3 ? a(u) : i > 3 ? a(r, n, u) : a(r, n)) || u);
    return i > 3 && u && Object.defineProperty(r, n, u), u;
}, o = function(e, t, r, n) {
    return new (r || (r = Promise))(function(o, a) {
        function i(e) {
            try {
                l(n.next(e));
            } catch (e) {
                a(e);
            }
        }
        function u(e) {
            try {
                l(n.throw(e));
            } catch (e) {
                a(e);
            }
        }
        function l(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                e(t);
            })).then(i, u);
        }
        l((n = n.apply(e, t || [])).next());
    });
}, a = function(e, t) {
    var r, n, o, a, i = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
        },
        trys: [],
        ops: []
    };
    return a = {
        next: u(0),
        throw: u(1),
        return: u(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this;
    }), a;
    function u(a) {
        return function(u) {
            return function(a) {
                if (r) throw new TypeError("Generator is already executing.");
                for (;i; ) try {
                    if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 
                    0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                    switch (n = 0, o && (a = [ 2 & a[0], o.value ]), a[0]) {
                      case 0:
                      case 1:
                        o = a;
                        break;

                      case 4:
                        return i.label++, {
                            value: a[1],
                            done: !1
                        };

                      case 5:
                        i.label++, n = a[1], a = [ 0 ];
                        continue;

                      case 7:
                        a = i.ops.pop(), i.trys.pop();
                        continue;

                      default:
                        if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                            i = 0;
                            continue;
                        }
                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                            i.label = a[1];
                            break;
                        }
                        if (6 === a[0] && i.label < o[1]) {
                            i.label = o[1], o = a;
                            break;
                        }
                        if (o && i.label < o[2]) {
                            i.label = o[2], i.ops.push(a);
                            break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                } catch (e) {
                    a = [ 6, e ], n = 0;
                } finally {
                    r = o = 0;
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }([ a, u ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = require("./A02C1207DFE146BFC64A7A00113A66E3"), u = require("./38A05F86DFE146BF5EC63781B6CC66E3"), l = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), s = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), c = getApp(), d = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.formData = {}, t.disabled = !0, t.normalUser = 0, t;
    }
    return r(t, e), t.prototype.onLoad = function(t) {
        e.prototype.onLoad.call(this, t), this.normalUser = t.normalUser || 0;
    }, t.prototype.onPickerChangedHandle = function(e) {
        var t = this.formData;
        t.region = e.detail.value, t.code = e.detail.code, this.formData = t;
    }, t.prototype.onInputChangedHandle = function(e) {
        var t = this.formData;
        t[e.currentTarget.dataset.key] = e.detail.value.trim(), this.formData = t, this.validate(t);
    }, t.prototype.validate = function(e) {
        this.disabled = e.name.length < 2 || !/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e.idCard);
    }, t.prototype.onSubmitHandle = function() {
        return o(this, void 0, void 0, function() {
            var e, t;
            return a(this, function(r) {
                switch (r.label) {
                  case 0:
                    return this.disabled ? [ 2 ] : (e = this.formData, [ 4, this.simpleRequest(1 * this.normalUser == 1 ? "/consumer/user/userAuthentication" : "/consumer/user/bindUserOrg", {
                        mobilePhone: c.globalData.userInfo.mobilePhone,
                        cardNo: e.idCard,
                        trueName: e.name,
                        authenticationAddress: "" + e.region[0] + e.region[1] + e.region[2] + e.address
                    }, !0, "提交中...") ]);

                  case 1:
                    return t = r.sent(), 1 * this.normalUser != 1 ? (null == t ? void 0 : t.userOrgId) && (null == t ? void 0 : t.orgId) && l.go("/pages/edit_address/edit_address?userOrgId=" + t.userOrgId + "&orgId=" + t.orgId, s.Constant.LOGIN_JUMP_REDIRECT_TO) : l.alert({
                        content: "实名认证信息已提交，请耐心等待审核，审核通过后方可进行购买。",
                        confirm: function() {
                            l.go("", s.Constant.LOGIN_JUMP_NAVIGATE_BACK);
                        }
                    }), console.log(t), [ 2 ];
                }
            });
        });
    }, n([ u.Data({
        name: "",
        idCard: "",
        region: [],
        address: ""
    }) ], t.prototype, "formData", void 0), n([ u.Data(!0) ], t.prototype, "disabled", void 0), 
    n([ u.Data(0) ], t.prototype, "normalUser", void 0), t;
}(i.default);

exports.default = d;