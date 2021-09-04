Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ExternalClasses = exports.PageLifetimes = exports.Lifetimes = exports.Observers = exports.Data = exports.Prop = exports.Method = void 0, 
exports.Method = function() {
    return function(e, t) {
        e.methods || (e.methods = {}), e.methods[t] = e[t];
    };
}, exports.Prop = function(e, t) {
    return void 0 === e && (e = Object), void 0 === t && (t = {}), function(s, r) {
        s.properties || (s.properties = {}), s.properties[r] = {
            type: e,
            value: t
        };
    };
}, exports.Data = function(e) {
    return void 0 === e && (e = {}), function(t, s) {
        t.data || (t.data = {}), t.data[s] = e;
    };
}, exports.Observers = function(e) {
    return function(t, s) {
        t.observers || (t.observers = {}), t.observers[e] = t[s];
    };
}, exports.Lifetimes = function() {
    return function(e, t) {
        e.lifetimes || (e.lifetimes = {}), e.lifetimes[t] = e[t];
    };
}, exports.PageLifetimes = function() {
    return function(e, t) {
        e.pageLifetimes || (e.pageLifetimes = {}), e.pageLifetimes[t] = e[t];
    };
}, exports.ExternalClasses = function(e) {
    return function(t, s) {
        console.log(s), t.externalClasses || (t.externalClasses = []), t.externalClasses = e;
    };
};