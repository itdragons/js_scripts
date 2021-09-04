Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.generateUUID = void 0, exports.generateUUID = function() {
    var x = Date.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        var r = (x + 16 * Math.random()) % 16 | 0;
        return x = Math.floor(x / 16), ("x" === e ? r : 3 & r | 8).toString(16);
    });
};