var t, e = require("jcys/js/@babel/runtime/helpers/typeof.js"), n = (t = function(e, n) {
    return (t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    })(e, n);
}, function(e, n) {
    if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    function o() {
        this.constructor = e;
    }
    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
    new o());
}), o = function(t, n, o, r) {
    var i, a = arguments.length, u = a < 3 ? n : null === r ? r = Object.getOwnPropertyDescriptor(n, o) : r;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, n, o, r); else for (var p = t.length - 1; p >= 0; p--) (i = t[p]) && (u = (a < 3 ? i(u) : a > 3 ? i(n, o, u) : i(n, o)) || u);
    return a > 3 && u && Object.defineProperty(n, o, u), u;
}, r = function(t, e, n, o) {
    return new (n || (n = Promise))(function(r, i) {
        function a(t) {
            try {
                p(o.next(t));
            } catch (t) {
                i(t);
            }
        }
        function u(t) {
            try {
                p(o.throw(t));
            } catch (t) {
                i(t);
            }
        }
        function p(t) {
            var e;
            t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                t(e);
            })).then(a, u);
        }
        p((o = o.apply(t, e || [])).next());
    });
}, i = function(t, e) {
    var n, o, r, i, a = {
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
                if (n) throw new TypeError("Generator is already executing.");
                for (;a; ) try {
                    if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 
                    0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                    switch (o = 0, r && (i = [ 2 & i[0], r.value ]), i[0]) {
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
                        a.label++, o = i[1], i = [ 0 ];
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
                    i = [ 6, t ], o = 0;
                } finally {
                    n = r = 0;
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

var a = require("./A02C1207DFE146BFC64A7A00113A66E3"), u = require("./38A05F86DFE146BF5EC63781B6CC66E3"), p = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), c = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), s = require("./AB909F77DFE146BFCDF6F770FE3D66E3"), l = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.info = {}, e.types = [], e.typeIndex = 0, e.pictureWidth = 0, e.pictureHeight = 0, 
        e.quantity = 1, e.resaon = "", e.paths = [], e;
    }
    return n(e, t), e.prototype.onLoad = function(e) {
        t.prototype.onLoad.call(this), this.info = JSON.parse(s.decryptBase64(e.info));
    }, e.prototype.onChooseTypeHandle = function(t) {
        return r(this, void 0, void 0, function() {
            return i(this, function(e) {
                return this.typeIndex = 1 * t.detail.value, [ 2 ];
            });
        });
    }, e.prototype.onWidthAndHeightChangedHandle = function(t) {
        this.pictureWidth = t.detail.pictureWidth, this.pictureHeight = t.detail.pictureHeight;
    }, e.prototype.onInputHandle = function(t) {
        this.resaon = t.detail.value.trim();
    }, e.prototype.onClickHandle = function() {
        return r(this, void 0, void 0, function() {
            var t, e, n, o;
            return i(this, function(r) {
                switch (r.label) {
                  case 0:
                    if (0 === this.typeIndex) return p.showToastNoIcon("请选择售后类型"), [ 2 ];
                    if (!this.resaon) return p.showToastNoIcon("请输入原因"), [ 2 ];
                    for (t = [], e = 0, n = this.paths; e < n.length; e++) o = n[e], t.push(o.fileUrl);
                    return [ 4, this.simpleRequest("/consumer/order/applyAfterSale", {
                        orderId: this.info.orderId,
                        orderDetailId: this.info.id,
                        afterQty: this.quantity,
                        afterType: this.typeIndex,
                        reason: this.resaon,
                        imageUrl: t.join(",")
                    }, !0, "提交中...") ];

                  case 1:
                    return r.sent() && (wx.showToast({
                        icon: "success",
                        title: "提交成功"
                    }), setTimeout(function() {
                        p.go("", c.Constant.LOGIN_JUMP_NAVIGATE_BACK);
                    }, 3e3)), [ 2 ];
                }
            });
        });
    }, e.prototype.onQuantityChangedHandle = function(t) {
        this.quantity = t.detail;
    }, e.prototype.onChooseChangedHandle = function(t) {
        this.paths = t.detail.paths;
    }, o([ u.Data({}) ], e.prototype, "info", void 0), o([ u.Data([ "请选择售后类型", "退货", "换货" ]) ], e.prototype, "types", void 0), 
    o([ u.Data(0) ], e.prototype, "typeIndex", void 0), o([ u.Data(0) ], e.prototype, "pictureWidth", void 0), 
    o([ u.Data(0) ], e.prototype, "pictureHeight", void 0), o([ u.Data(1) ], e.prototype, "quantity", void 0), 
    o([ u.Data("") ], e.prototype, "resaon", void 0), o([ u.Data([]) ], e.prototype, "paths", void 0), 
    e;
}(a.default);

exports.default = l;