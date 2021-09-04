Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.decryptBase64 = exports.encryptBase64 = exports.md5Encrypt = exports.decryptByDESModeEBC = exports.encryptByDESModeEBC = void 0;

var e = require("./E4281831DFE146BF824E7036A03D66E3.js"), t = require("./94212D47DFE146BFF247454028DC66E3.js");

exports.encryptByDESModeEBC = function(r) {
    var n = t.enc.Utf8.parse(e.default.PLAM_KEY);
    return t.DES.encrypt(r, n, {
        mode: t.mode.ECB,
        padding: t.pad.Pkcs7
    }).ciphertext.toString();
}, exports.decryptByDESModeEBC = function(r) {
    var n = t.enc.Utf8.parse(e.default.PLAM_KEY);
    return t.DES.decrypt({
        ciphertext: t.enc.Hex.parse(r)
    }, n, {
        mode: t.mode.ECB,
        padding: t.pad.Pkcs7
    }).toString(t.enc.Utf8);
}, exports.md5Encrypt = function(e) {
    return t.MD5(e).toString();
}, exports.encryptBase64 = function(e) {
    return t.enc.Base64.stringify(t.enc.Utf8.parse(e));
}, exports.decryptBase64 = function(e) {
    return t.enc.Base64.parse(e).toString(t.enc.Utf8);
};