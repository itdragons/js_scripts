Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mobilePhoneReplace = void 0, exports.mobilePhoneReplace = function(e) {
    return e ? e.replace(/(\d{3})\d{4}(\d{4})/gi, "$1****$2") : "";
};