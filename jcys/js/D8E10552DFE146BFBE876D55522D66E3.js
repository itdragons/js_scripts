var e = function(e, t, n, r) {
    return new (n || (n = Promise))(function(o, i) {
        function a(e) {
            try {
                c(r.next(e));
            } catch (e) {
                i(e);
            }
        }
        function s(e) {
            try {
                c(r.throw(e));
            } catch (e) {
                i(e);
            }
        }
        function c(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                e(t);
            })).then(a, s);
        }
        c((r = r.apply(e, t || [])).next());
    });
}, t = function(e, t) {
    var n, r, o, i, a = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
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
                if (n) throw new TypeError("Generator is already executing.");
                for (;a; ) try {
                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 
                    0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                    switch (r = 0, o && (i = [ 2 & i[0], o.value ]), i[0]) {
                      case 0:
                      case 1:
                        o = i;
                        break;

                      case 4:
                        return a.label++, {
                            value: i[1],
                            done: !1
                        };

                      case 5:
                        a.label++, r = i[1], i = [ 0 ];
                        continue;

                      case 7:
                        i = a.ops.pop(), a.trys.pop();
                        continue;

                      default:
                        if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            a = 0;
                            continue;
                        }
                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                            a.label = i[1];
                            break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                            a.label = o[1], o = i;
                            break;
                        }
                        if (o && a.label < o[2]) {
                            a.label = o[2], a.ops.push(i);
                            break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                } catch (e) {
                    i = [ 6, e ], r = 0;
                } finally {
                    n = o = 0;
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
}), exports.processingPictures = void 0;

var n = require("./34D73CD2DFE146BF52B154D556BD66E3");

function r(e, t, n, r) {
    return new Promise(function(o) {
        var i = wx.createCanvasContext(e);
        i.drawImage(t, 0, 0, n, r), i.draw(!0, function() {
            wx.canvasToTempFilePath({
                canvasId: e,
                x: 0,
                y: 0,
                width: n,
                height: r,
                destWidth: n,
                destHeight: r,
                quality: 1,
                fileType: "jpg",
                success: function(e) {
                    o(e.tempFilePath);
                },
                fail: function() {
                    o();
                }
            });
        });
    });
}

function o(o, i, a, s) {
    return e(this, void 0, void 0, function() {
        var e, c, u, l, f, p, h, w;
        return t(this, function(t) {
            switch (t.label) {
              case 0:
                return e = s || 640, [ 4, n.wxApiToPromise(wx.getImageInfo, {
                    src: i
                }) ];

              case 1:
                return "getImageInfo:ok" !== (c = t.sent()).errMsg ? [ 3, 5 ] : c.width > e ? (u = c.width, 
                l = c.height, f = e, p = parseInt((f * l / u).toString(), 10), o.setData({
                    pictureWidth: f,
                    pictureHeight: p
                }), [ 4, new Promise(function(e) {
                    wx.nextTick(function() {
                        e();
                    });
                }) ]) : [ 3, 5 ];

              case 2:
                return t.sent(), [ 4, r(a, i, f, p) ];

              case 3:
                return (h = t.sent()) ? [ 4, n.wxApiToPromise(wx.getImageInfo, {
                    src: h
                }) ] : [ 3, 5 ];

              case 4:
                if ("getImageInfo:ok" === (w = t.sent()).errMsg && (f / p).toFixed(1) === (u / l).toFixed(1)) return [ 2, Promise.resolve(w.path) ];
                t.label = 5;

              case 5:
                return [ 2, Promise.resolve("") ];
            }
        });
    });
}

exports.processingPictures = o, module.exports = {
    processingPictures: o
};