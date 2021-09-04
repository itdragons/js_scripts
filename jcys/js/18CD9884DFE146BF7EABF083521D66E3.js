Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function() {
    function e() {}
    return e.on = function(n, t) {
        var a = !1;
        e.events.forEach(function(e) {
            e.eventName === n && (e.eventName = n, e.callback = t, a = !0);
        }), a || e.events.push({
            eventName: n,
            callback: t
        });
    }, e.emit = function(n, t) {
        e.events.forEach(function(e) {
            n === e.eventName && e && e.callback(t);
        });
    }, e.events = [], e;
}();

exports.default = e;