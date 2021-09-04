Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.wxApiToPromise = void 0, exports.wxApiToPromise = function(e, o) {
    return void 0 === o && (o = {}), new Promise(function(i, s) {
        o.success = function(e) {
            i(e);
        }, o.fail = function(e) {
            s(e);
        }, e(o);
    });
};