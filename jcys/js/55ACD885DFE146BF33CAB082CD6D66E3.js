Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.luhmCheck = void 0, exports.luhmCheck = function(t) {
    if (t.length < 16 || t.length > 19) return !1;
    if (!/^\d*$/.exec(t)) return !1;
    if (-1 === "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99".indexOf(t.substring(0, 2))) return !1;
    for (var r = parseInt(t.substr(t.length - 1, 1), 10), e = t.substr(0, t.length - 1), n = [], s = e.length - 1; s > -1; s--) n.push(e.substr(s, 1));
    for (var p = [], a = [], h = [], u = 0; u < n.length; u++) (u + 1) % 2 == 1 ? 2 * parseInt(n[u], 10) < 9 ? p.push(2 * parseInt(n[u], 10)) : a.push(2 * parseInt(n[u], 10)) : h.push(n[u]);
    for (var o = [], g = [], I = 0; I < a.length; I++) o.push(parseInt(a[I], 10) % 10), 
    g.push(parseInt(a[I], 10) / 10);
    for (var i = 0, l = 0, f = 0, v = 0, c = 0, S = 0; S < p.length; S++) i += parseInt(p[S], 10);
    for (var b = 0; b < h.length; b++) l += parseInt(h[b], 10);
    for (var d = 0; d < o.length; d++) f += parseInt(o[d], 10), v += parseInt(g[d], 10);
    return c = parseInt(i.toString(), 10) + parseInt(l.toString(), 10) + parseInt(f.toString(), 10) + parseInt(v.toString(), 10), 
    r === 10 - (parseInt(c.toString(), 10) % 10 == 0 ? 10 : parseInt(c.toString(), 10) % 10);
};