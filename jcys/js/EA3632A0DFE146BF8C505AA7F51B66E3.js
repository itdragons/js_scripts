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
    var a, i = arguments.length, s = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, r) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, o, r, n); else for (var u = e.length - 1; u >= 0; u--) (a = e[u]) && (s = (i < 3 ? a(s) : i > 3 ? a(o, r, s) : a(o, r)) || s);
    return i > 3 && s && Object.defineProperty(o, r, s), s;
}, n = function(e, t, o, r) {
    return new (o || (o = Promise))(function(n, a) {
        function i(e) {
            try {
                u(r.next(e));
            } catch (e) {
                a(e);
            }
        }
        function s(e) {
            try {
                u(r.throw(e));
            } catch (e) {
                a(e);
            }
        }
        function u(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                e(t);
            })).then(i, s);
        }
        u((r = r.apply(e, t || [])).next());
    });
}, a = function(e, t) {
    var o, r, n, a, i = {
        label: 0,
        sent: function() {
            if (1 & n[0]) throw n[1];
            return n[1];
        },
        trys: [],
        ops: []
    };
    return a = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this;
    }), a;
    function s(a) {
        return function(s) {
            return function(a) {
                if (o) throw new TypeError("Generator is already executing.");
                for (;i; ) try {
                    if (o = 1, r && (n = 2 & a[0] ? r.return : a[0] ? r.throw || ((n = r.return) && n.call(r), 
                    0) : r.next) && !(n = n.call(r, a[1])).done) return n;
                    switch (r = 0, n && (a = [ 2 & a[0], n.value ]), a[0]) {
                      case 0:
                      case 1:
                        n = a;
                        break;

                      case 4:
                        return i.label++, {
                            value: a[1],
                            done: !1
                        };

                      case 5:
                        i.label++, r = a[1], a = [ 0 ];
                        continue;

                      case 7:
                        a = i.ops.pop(), i.trys.pop();
                        continue;

                      default:
                        if (!(n = i.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                            i = 0;
                            continue;
                        }
                        if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                            i.label = a[1];
                            break;
                        }
                        if (6 === a[0] && i.label < n[1]) {
                            i.label = n[1], n = a;
                            break;
                        }
                        if (n && i.label < n[2]) {
                            i.label = n[2], i.ops.push(a);
                            break;
                        }
                        n[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                } catch (e) {
                    a = [ 6, e ], r = 0;
                } finally {
                    o = n = 0;
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }([ a, s ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = require("./A02C1207DFE146BFC64A7A00113A66E3"), s = require("./38A05F86DFE146BF5EC63781B6CC66E3"), u = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), l = require("./15C09654DFE146BF73A6FE537B7D66E3"), c = require("./AB909F77DFE146BFCDF6F770FE3D66E3"), d = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.id = "", t.userOrgId = "", t.orgId = "", t;
    }
    return o(t, e), t.prototype.onLoad = function(t) {
        e.prototype.onLoad.call(this);
        var o = t.info, r = t.userOrgId, n = t.orgId;
        if (this.userOrgId = r, this.orgId = n, o) {
            wx.setNavigationBarTitle({
                title: "修改收货地址"
            }), o = c.decryptBase64(o), o = JSON.parse(o), this.id = o.id;
            var a = {
                name: o.trueName,
                orgId: o.orgId,
                mobilePhone: o.mobilePhone,
                region: [ o.provinceName, o.cityName, o.countyName ],
                code: [ o.province, o.city, o.county ],
                address: o.fullAddress,
                isDefault: 1 === o.isDefault
            };
            this.formData = a;
        } else wx.setNavigationBarTitle({
            title: "新增收货地址"
        });
    }, t.prototype.onInputChangedHandle = function(e) {
        var t = e.currentTarget.dataset.key, o = this.formData;
        o[t] = e.detail.value, this.formData = o;
    }, t.prototype.validateData = function() {
        var e = this.formData;
        return e.name ? e.name.length < 2 ? (u.showToastNoIcon("姓名长度不能少于2位"), !1) : e.mobilePhone ? /^1[0-9]{10}$/.test(e.mobilePhone) ? e.region.length ? !!e.address || (u.showToastNoIcon("请填写详细地址"), 
        !1) : (u.showToastNoIcon("请选择所在地区"), !1) : (u.showToastNoIcon("联系人电话格式错误"), !1) : (u.showToastNoIcon("请填写联系人电话"), 
        !1) : (u.showToastNoIcon("请填写收货人姓名"), !1);
    }, t.prototype.onEditHandle = function() {
        var e = this;
        if (this.validateData()) {
            var t = this.formData, o = t.region, r = t.address;
            l.getInfoByAddress(o.join("") + r, function(t) {
                console.log(t), e.save(t.result.location);
            }, function(e) {
                console.log(e), u.showToastNoIcon("获取经纬度失败！");
            });
        }
    }, t.prototype.save = function(e) {
        return n(this, void 0, void 0, function() {
            var t, o, r, n, i, s, u, l, c, d;
            return a(this, function(a) {
                switch (a.label) {
                  case 0:
                    return t = this.formData, o = t.name, r = t.mobilePhone, n = t.region, i = t.address, 
                    s = t.isDefault, u = t.code, l = e.lng, c = e.lat, d = {
                        id: this.id,
                        mobilePhone: r,
                        trueName: o,
                        provinceName: n[0],
                        cityName: n[1],
                        countyName: n[2],
                        province: u[0],
                        city: u[1],
                        county: u[2],
                        fullAddress: i,
                        lat: c,
                        lng: l,
                        isDefault: s ? 1 : 0,
                        status: 1
                    }, this.orgId && this.userOrgId && (d.orgId = this.orgId, d.userOrgId = this.userOrgId), 
                    [ 4, this.simpleRequest("/consumer/user/userAddress/save", d) ];

                  case 1:
                    return a.sent() && (getApp().globalData.userInfo.needUploadIdCard = !1, wx.showToast({
                        icon: "success",
                        title: this.id ? "修改成功" : "添加成功"
                    }), setTimeout(function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }, 2e3)), [ 2 ];
                }
            });
        });
    }, t.prototype.onPickerChangedHandle = function(e) {
        var t = this.formData;
        t.region = e.detail.value, t.code = e.detail.code, this.formData = t;
    }, r([ s.Data({
        region: [],
        code: [],
        isDefault: !0
    }) ], t.prototype, "formData", void 0), r([ s.Data("") ], t.prototype, "userOrgId", void 0), 
    r([ s.Data("") ], t.prototype, "orgId", void 0), t;
}(i.default);

exports.default = d;