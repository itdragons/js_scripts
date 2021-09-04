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
    var i, a = arguments.length, s = a < 3 ? o : null === r ? r = Object.getOwnPropertyDescriptor(o, n) : r;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, n, r); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(o, n, s) : i(o, n)) || s);
    return a > 3 && s && Object.defineProperty(o, n, s), s;
}, r = function(t, e, o, n) {
    return new (o || (o = Promise))(function(r, i) {
        function a(t) {
            try {
                c(n.next(t));
            } catch (t) {
                i(t);
            }
        }
        function s(t) {
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
            })).then(a, s);
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
        next: s(0),
        throw: s(1),
        return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this;
    }), i;
    function s(i) {
        return function(s) {
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
            }([ i, s ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = require("./A02C1207DFE146BFC64A7A00113A66E3"), s = require("./38A05F86DFE146BF5EC63781B6CC66E3"), c = require("./34D73CD2DFE146BF52B154D556BD66E3"), p = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), u = require("./9D37ECA4DFE146BFFB5184A3CEFC66E3"), l = require("./82AAE8D4DFE146BFE4CC80D36C4A66E3"), d = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.isOpenSettingBack = !1, e;
    }
    return o(e, t), e.prototype.onLoad = function(e) {
        t.prototype.onLoad.call(this);
        var o = e.prefectureId, n = void 0 === o ? "" : o, r = e.id, i = e.keyword, a = e.type;
        this.id = r, this.prefectureId = n || "", this.searchKey = i, this.type = a, this.getLocation();
    }, e.prototype.onShow = function() {
        this.isOpenSettingBack && this.getLocation();
    }, e.prototype.getLocation = function() {
        var t = this;
        c.wxApiToPromise(wx.getLocation, {
            type: "gcj02"
        }).then(function(e) {
            var o = e.latitude, n = e.longitude;
            t.latitude = o, t.longitude = n, t.getData();
        }).catch(function(e) {
            "getLocation:fail auth deny" !== e.errMsg && "getLocation:fail authorize no response" !== e.errMsg || p.alert({
                content: "检查到未授权获取当前地理位置信息，将导致无法加载最近商家信息，请允许定位授权",
                confirmText: "前往授权",
                confirm: function() {
                    t.isOpenSettingBack = !0, wx.openSetting();
                }
            });
        });
    }, e.prototype.onChangedHandle = function(t) {
        this.index = t.detail, this.getData();
    }, e.prototype.onToLowerHandle = function() {
        this.noMore || this.getData(!1);
    }, e.prototype.getSort = function() {
        var t = 0;
        switch (this.index) {
          case 0:
            t = 1;
            break;

          case 1:
            t = 4;
            break;

          case 2:
            t = 5;
            break;

          case 3:
            t = 2;
        }
        return t;
    }, e.prototype.getData = function(t) {
        return void 0 === t && (t = !0), r(this, void 0, void 0, function() {
            var e;
            return i(this, function(o) {
                switch (o.label) {
                  case 0:
                    return this.loadPaging || (this.loadPaging = new u.default({
                        path: "/consumer/pro/common/product/pageList",
                        params: {
                            bigType: l.Constant.GOODS_BIG_TYPE_O2O,
                            status: 1,
                            proType: 1,
                            prefectureId: this.prefectureId || "",
                            userLng: this.longitude,
                            userLat: this.latitude
                        }
                    })), this.id ? this.loadPaging.params.typeId = this.id : delete this.loadPaging.params.typeId, 
                    this.searchKey ? this.loadPaging.params.proName = this.searchKey : delete this.loadPaging.params.proName, 
                    1 * this.type === l.Constant.O2O_FEATURED_FOR_YOU && (this.loadPaging.params.isChoiceness = 1), 
                    this.loadPaging.params.sortKey = this.getSort(), this.loadPaging.params.sortValue = 2 === this.index ? "ASC" : "DESC", 
                    [ 4, this.loadPaging.loadData(t) ];

                  case 1:
                    return (e = o.sent()) && (t && (this.scrollTop = 0), this.noMore = !e.hasMore, this.list = e.list), 
                    [ 2 ];
                }
            });
        });
    }, e.prototype.onConfirmHandle = function(t) {
        this.searchKey = t.detail, this.getData(!0);
    }, n([ s.Data(0) ], e.prototype, "index", void 0), n([ s.Data("") ], e.prototype, "latitude", void 0), 
    n([ s.Data("") ], e.prototype, "longitude", void 0), n([ s.Data(!1) ], e.prototype, "noMore", void 0), 
    n([ s.Data([]) ], e.prototype, "list", void 0), n([ s.Data(0) ], e.prototype, "scrollTop", void 0), 
    n([ s.Data("") ], e.prototype, "searchKey", void 0), n([ s.Data("") ], e.prototype, "id", void 0), 
    n([ s.Data(0), s.Data("") ], e.prototype, "prefectureId", void 0), e;
}(a.default);

exports.default = d;