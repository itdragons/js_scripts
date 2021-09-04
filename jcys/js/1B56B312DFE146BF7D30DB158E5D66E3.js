Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function t() {
        this.locked = !1;
    }
    return t.prototype.lock = function() {
        this.locked = !0;
    }, t.prototype.unlock = function() {
        this.locked = !1;
    }, t.prototype.isLocked = function() {
        return this.locked;
    }, t;
}();

exports.default = t;