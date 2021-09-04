Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./2C30C173DFE146BF4A56A9740F4D66E3"), i = require("./69F364A2DFE146BF0F950CA5BF9D66E3"), t = require("./1B56B312DFE146BF7D30DB158E5D66E3"), s = function() {
    function s(e) {
        this.page = 1, this.pageSize = 10, this.enableCache = !1, this.method = "POST", 
        this.path = "POST", this.params = {}, this.info = {}, this.lock = new t.default();
        var i = e.page, s = void 0 === i ? 1 : i, o = e.pageSize, a = void 0 === o ? 10 : o, h = e.enableCache, n = void 0 !== h && h, r = e.method, l = void 0 === r ? "POST" : r, c = e.path, p = void 0 === c ? "" : c, u = e.params, f = void 0 === u ? {} : u;
        this.page = s, this.pageSize = a, this.enableCache = n, this.method = l, this.path = p, 
        this.params = f;
    }
    return s.prototype.loadData = function(t) {
        var s = this;
        if (void 0 === t && (t = !1), !this.lock.isLocked()) {
            if (this.lock.lock(), t) this.page = 1, this.info = {}; else {
                if (this.page >= this.info.pages) return Promise.resolve({
                    list: this.info.list,
                    hasMore: !1
                });
                this.page++;
            }
            return this.params.page = this.page, this.params.pageSize = this.pageSize, new Promise(function(o, a) {
                e.request(s.path, s.params, s.enableCache, !!s.enableCache && t, s.method).then(function(e) {
                    if (0 === e.code) {
                        if (t) s.info = e.data; else {
                            var a = s.info, h = a.list || [];
                            h = h.concat(e.data.list), a.list = h, s.info = a;
                        }
                        o({
                            list: s.info.list,
                            hasMore: s.info.pages > s.page
                        });
                    } else i.showToastNoIcon(e.message), o({
                        list: [],
                        hasMore: !1
                    });
                    s.lock.unlock();
                }, function(e) {
                    console.error(e), a(e), s.lock.unlock();
                }).catch(function(e) {
                    console.error(e), a(e), s.lock.unlock();
                });
            });
        }
    }, s;
}();

exports.default = s;