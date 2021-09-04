Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getLocation = exports.getAddressInfo = exports.getInfoByAddress = void 0;

var e = require("./E4281831DFE146BF824E7036A03D66E3"), o = require("./34D73CD2DFE146BF52B154D556BD66E3"), t = require("./61679B52DFE146BF0701F35585EC66E3"), n = !1;

exports.getInfoByAddress = function o(s, i, r) {
    console.log(e.default.MAP_KEY), new t({
        key: e.default.MAP_KEY
    }).geocoder({
        address: s,
        success: function(e) {
            i && i(e);
        },
        fail: function(t) {
            if (r) {
                if ("此key每日调用量已达到上限" === t.message && !n) return n = !0, e.default.MAP_KEY = "2RYBZ-KEKC3-BY73Q-3XIRN-4ZU22-SWFTW", 
                void o(s, i, r);
                console.log(t), r(t);
            }
        }
    });
};

n = !1;

exports.getAddressInfo = function o(s, i, r, c, u) {
    var f = new t({
        key: e.default.MAP_KEY
    });
    console.log(e.default.MAP_KEY), f.reverseGeocoder({
        location: {
            latitude: s,
            longitude: i
        },
        get_poi: 1,
        success: function(e) {
            r && r(e);
        },
        fail: function(t) {
            console.log(t), "此key每日调用量已达到上限" !== t.message || n || (n = !0, e.default.MAP_KEY = "2RYBZ-KEKC3-BY73Q-3XIRN-4ZU22-SWFTW", 
            o(s, i, r, c)), c && c(t);
        },
        complete: function(e) {
            u && u(e);
        }
    });
}, exports.getLocation = function(e) {
    return void 0 === e && (e = "gcj02"), new Promise(function(t, n) {
        o.wxApiToPromise(wx.getLocation, {
            type: e
        }).then(function(e) {
            t(e);
        }).catch(function(e) {
            n(e);
        });
    });
};