Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getMenuButtonBoundingClientRect = void 0, exports.getMenuButtonBoundingClientRect = function() {
    var t = wx.getSystemInfoSync(), e = {};
    try {
        if (null === (e = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null) || !e.width) throw new Error("getMenuButtonBoundingClientRect error");
    } catch (i) {
        var n = void 0, o = 96;
        "android" === t.platform ? (n = 8, o = 96) : "devtools" === t.platform ? n = -1 !== t.model.indexOf("iPhone") ? 5.5 : 7.5 : (n = 4, 
        o = 88), t.statusBarHeight || (t.statusBarHeight = t.screenHeight - t.windowHeight - 20), 
        e = {
            bottom: t.statusBarHeight + n + 32,
            height: 32,
            left: t.windowWidth - o - 10,
            right: t.windowWidth - 10,
            top: t.statusBarHeight + n,
            width: o
        };
    }
    return e;
};