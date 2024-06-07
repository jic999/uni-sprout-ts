'use strict'; const t = require('node:fs'); const r = require('node:path')

function e(t) { return t && typeof t == 'object' && 'default' in t ? t : { default: t } } const n = e(t); const o = e(r); const i = typeof globalThis != 'undefined' ? globalThis : typeof window != 'undefined' ? window : typeof global != 'undefined' ? global : typeof self != 'undefined' ? self : {}; const u = (function (t) { const r = { exports: {} }; return t(r, r.exports), r.exports }(((t, r) => {
  const e = '__lodash_hash_undefined__'; const n = 9007199254740991; const o = '[object Arguments]'; const u = '[object Function]'; const c = '[object Object]'; const a = /^\[object .+?Constructor\]$/; const f = /^(?:0|[1-9]\d*)$/; const s = {}; s['[object Float32Array]'] = s['[object Float64Array]'] = s['[object Int8Array]'] = s['[object Int16Array]'] = s['[object Int32Array]'] = s['[object Uint8Array]'] = s['[object Uint8ClampedArray]'] = s['[object Uint16Array]'] = s['[object Uint32Array]'] = !0, s[o] = s['[object Array]'] = s['[object ArrayBuffer]'] = s['[object Boolean]'] = s['[object DataView]'] = s['[object Date]'] = s['[object Error]'] = s[u] = s['[object Map]'] = s['[object Number]'] = s[c] = s['[object RegExp]'] = s['[object Set]'] = s['[object String]'] = s['[object WeakMap]'] = !1; const l = typeof i == 'object' && i && i.Object === Object && i; const h = typeof self == 'object' && self && self.Object === Object && self; const p = l || h || Function('return this')(); const _ = r && !r.nodeType && r; const v = _ && t && !t.nodeType && t; const d = v && v.exports === _; const y = d && l.process; const g = (function () {
    try { const t = v && v.require && v.require('util').types; return t || y && y.binding && y.binding('util') }
    catch (t) {}
  }()); const b = g && g.isTypedArray; function j(t, r, e) { switch (e.length) { case 0:return t.call(r); case 1:return t.call(r, e[0]); case 2:return t.call(r, e[0], e[1]); case 3:return t.call(r, e[0], e[1], e[2]) } return t.apply(r, e) } let w; let O; let m; const A = Array.prototype; const z = Function.prototype; const M = Object.prototype; const x = p['__core-js_shared__']; const C = z.toString; const F = M.hasOwnProperty; const U = (w = /[^.]+$/.exec(x && x.keys && x.keys.IE_PROTO || '')) ? `Symbol(src)_1.${w}` : ''; const S = M.toString; const I = C.call(Object); const P = RegExp(`^${C.call(F).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?')}$`); const T = d ? p.Buffer : void 0; const q = p.Symbol; const E = p.Uint8Array; const $ = T ? T.allocUnsafe : void 0; const D = (O = Object.getPrototypeOf, m = Object, function (t) { return O(m(t)) }); const k = Object.create; const B = M.propertyIsEnumerable; const N = A.splice; const L = q ? q.toStringTag : void 0; const R = (function () {
    try { const t = vt(Object, 'defineProperty'); return t({}, '', {}), t }
    catch (t) {}
  }()); const G = T ? T.isBuffer : void 0; const V = Math.max; const W = Date.now; const H = vt(p, 'Map'); const J = vt(Object, 'create'); const K = (function () {
    function t() {} return function (r) {
      if (!xt(r))
        return {}; if (k)
        return k(r); t.prototype = r; const e = new t(); return t.prototype = void 0, e
    }
  }()); function Q(t) { let r = -1; const e = t == null ? 0 : t.length; for (this.clear(); ++r < e;) { const n = t[r]; this.set(n[0], n[1]) } } function X(t) { let r = -1; const e = t == null ? 0 : t.length; for (this.clear(); ++r < e;) { const n = t[r]; this.set(n[0], n[1]) } } function Y(t) { let r = -1; const e = t == null ? 0 : t.length; for (this.clear(); ++r < e;) { const n = t[r]; this.set(n[0], n[1]) } } function Z(t) { const r = this.__data__ = new X(t); this.size = r.size } function tt(t, r) { const e = Ot(t); const n = !e && wt(t); const o = !e && !n && At(t); const i = !e && !n && !o && Ft(t); const u = e || n || o || i; const c = u ? (function (t, r) { for (var e = -1, n = Array(t); ++e < t;)n[e] = r(e); return n }(t.length, String)) : []; const a = c.length; for (const f in t)!r && !F.call(t, f) || u && (f == 'length' || o && (f == 'offset' || f == 'parent') || i && (f == 'buffer' || f == 'byteLength' || f == 'byteOffset') || dt(f, a)) || c.push(f); return c } function rt(t, r, e) { (void 0 !== e && !jt(t[r], e) || void 0 === e && !(r in t)) && ot(t, r, e) } function et(t, r, e) { const n = t[r]; F.call(t, r) && jt(n, e) && (void 0 !== e || r in t) || ot(t, r, e) } function nt(t, r) {
    for (let e = t.length; e--;) {
      if (jt(t[e][0], r))
        return e
    } return -1
  } function ot(t, r, e) { r == '__proto__' && R ? R(t, r, { configurable: !0, enumerable: !0, value: e, writable: !0 }) : t[r] = e }Q.prototype.clear = function () { this.__data__ = J ? J(null) : {}, this.size = 0 }, Q.prototype.delete = function (t) { const r = this.has(t) && delete this.__data__[t]; return this.size -= r ? 1 : 0, r }, Q.prototype.get = function (t) { const r = this.__data__; if (J) { const n = r[t]; return n === e ? void 0 : n } return F.call(r, t) ? r[t] : void 0 }, Q.prototype.has = function (t) { const r = this.__data__; return J ? void 0 !== r[t] : F.call(r, t) }, Q.prototype.set = function (t, r) { const n = this.__data__; return this.size += this.has(t) ? 0 : 1, n[t] = J && void 0 === r ? e : r, this }, X.prototype.clear = function () { this.__data__ = [], this.size = 0 }, X.prototype.delete = function (t) { const r = this.__data__; const e = nt(r, t); return !(e < 0) && (e == r.length - 1 ? r.pop() : N.call(r, e, 1), --this.size, !0) }, X.prototype.get = function (t) { const r = this.__data__; const e = nt(r, t); return e < 0 ? void 0 : r[e][1] }, X.prototype.has = function (t) { return nt(this.__data__, t) > -1 }, X.prototype.set = function (t, r) { const e = this.__data__; const n = nt(e, t); return n < 0 ? (++this.size, e.push([t, r])) : e[n][1] = r, this }, Y.prototype.clear = function () { this.size = 0, this.__data__ = { hash: new Q(), map: new (H || X)(), string: new Q() } }, Y.prototype.delete = function (t) { const r = _t(this, t).delete(t); return this.size -= r ? 1 : 0, r }, Y.prototype.get = function (t) { return _t(this, t).get(t) }, Y.prototype.has = function (t) { return _t(this, t).has(t) }, Y.prototype.set = function (t, r) { const e = _t(this, t); const n = e.size; return e.set(t, r), this.size += e.size == n ? 0 : 1, this }, Z.prototype.clear = function () { this.__data__ = new X(), this.size = 0 }, Z.prototype.delete = function (t) { const r = this.__data__; const e = r.delete(t); return this.size = r.size, e }, Z.prototype.get = function (t) { return this.__data__.get(t) }, Z.prototype.has = function (t) { return this.__data__.has(t) }, Z.prototype.set = function (t, r) {
    let e = this.__data__; if (e instanceof X) {
      const n = e.__data__; if (!H || n.length < 199)
        return n.push([t, r]), this.size = ++e.size, this; e = this.__data__ = new Y(n)
    } return e.set(t, r), this.size = e.size, this
  }; let it; const ut = function (t, r, e) {
    for (let n = -1, o = Object(t), i = e(t), u = i.length; u--;) {
      const c = i[it ? u : ++n]; if (!1 === r(o[c], c, o))
        break
    } return t
  }; function ct(t) {
    return t == null
      ? void 0 === t ? '[object Undefined]' : '[object Null]'
      : L && L in Object(t)
        ? (function (t) {
            const r = F.call(t, L); const e = t[L]; try { t[L] = void 0; var n = !0 }
            catch (t) {} const o = S.call(t); n && (r ? t[L] = e : delete t[L]); return o
          }(t))
        : (function (t) { return S.call(t) }(t))
  } function at(t) { return Ct(t) && ct(t) == o } function ft(t) {
    return !(!xt(t) || (function (t) { return !!U && U in t }(t))) && (zt(t) ? P : a).test(function (t) {
      if (t != null) {
        try { return C.call(t) }
        catch (t) {} try { return `${t}` }
        catch (t) {}
      } return ''
    }(t))
  } function st(t) {
    if (!xt(t)) {
      return (function (t) {
        const r = []; if (t != null) {
          for (const e in Object(t))r.push(e)
        } return r
      }(t))
    } const r = yt(t); const e = []; for (const n in t)(n != 'constructor' || !r && F.call(t, n)) && e.push(n); return e
  } function lt(t, r, e, n, o) {
    t !== r && ut(r, (i, u) => {
      if (o || (o = new Z()), xt(i)) {
        !(function (t, r, e, n, o, i, u) {
          const a = gt(t, e); const f = gt(r, e); const s = u.get(f); if (s)
            return void rt(t, e, s); let l = i ? i(a, f, `${e}`, t, r, u) : void 0; let h = void 0 === l; if (h) {
            const p = Ot(f); const _ = !p && At(f); const v = !p && !_ && Ft(f); l = f, p || _ || v
              ? Ot(a)
                ? l = a
                : Ct(j = a) && mt(j)
                  ? l = (function (t, r) { let e = -1; const n = t.length; r || (r = Array(n)); for (;++e < n;)r[e] = t[e]; return r }(a))
                  : _
                    ? (h = !1, l = (function (t, r) {
                        if (r)
                          return t.slice(); const e = t.length; const n = $ ? $(e) : new t.constructor(e); return t.copy(n), n
                      }(f, !0)))
                    : v ? (h = !1, d = f, y = !0 ? (g = d.buffer, b = new g.constructor(g.byteLength), new E(b).set(new E(g)), b) : d.buffer, l = new d.constructor(y, d.byteOffset, d.length)) : l = []
              : (function (t) {
                  if (!Ct(t) || ct(t) != c)
                    return !1; const r = D(t); if (r === null)
                    return !0; const e = F.call(r, 'constructor') && r.constructor; return typeof e == 'function' && e instanceof e && C.call(e) == I
                }(f)) || wt(f)
                  ? (l = a, wt(a) ? l = (function (t) { return (function (t, r, e, n) { const o = !e; e || (e = {}); let i = -1; const u = r.length; for (;++i < u;) { const c = r[i]; let a = n ? n(e[c], t[c], c, e, t) : void 0; void 0 === a && (a = t[c]), o ? ot(e, c, a) : et(e, c, a) } return e }(t, Ut(t))) }(a)) : xt(a) && !zt(a) || (l = (function (t) { return typeof t.constructor != 'function' || yt(t) ? {} : K(D(t)) }(f))))
                  : h = !1
          } let d, y, g, b; let j; h && (u.set(f, l), o(l, f, n, i, u), u.delete(f)); rt(t, e, l)
        }(t, r, u, e, lt, n, o))
      }
      else { let a = n ? n(gt(t, u), i, `${u}`, t, r, o) : void 0; void 0 === a && (a = i), rt(t, u, a) }
    }, Ut)
  } function ht(t, r) { return bt((function (t, r, e) { return r = V(void 0 === r ? t.length - 1 : r, 0), function () { for (var n = arguments, o = -1, i = V(n.length - r, 0), u = Array(i); ++o < i;)u[o] = n[r + o]; o = -1; for (var c = Array(r + 1); ++o < r;)c[o] = n[o]; return c[r] = e(u), j(t, this, c) } }(t, r, Pt)), `${t}`) } const pt = R ? function (t, r) { return R(t, 'toString', { configurable: !0, enumerable: !1, value: (e = r, function () { return e }), writable: !0 }); let e } : Pt; function _t(t, r) { let e; let n; const o = t.__data__; return ((n = typeof (e = r)) == 'string' || n == 'number' || n == 'symbol' || n == 'boolean' ? e !== '__proto__' : e === null) ? o[typeof r == 'string' ? 'string' : 'hash'] : o.map } function vt(t, r) { const e = (function (t, r) { return t == null ? void 0 : t[r] }(t, r)); return ft(e) ? e : void 0 } function dt(t, r) { const e = typeof t; return !!(r = r == null ? n : r) && (e == 'number' || e != 'symbol' && f.test(t)) && t > -1 && t % 1 == 0 && t < r } function yt(t) { const r = t && t.constructor; return t === (typeof r == 'function' && r.prototype || M) } function gt(t, r) {
    if ((r !== 'constructor' || typeof t[r] != 'function') && r != '__proto__')
      return t[r]
  } var bt = (function (t) {
    let r = 0; let e = 0; return function () {
      const n = W(); const o = 16 - (n - e); if (e = n, o > 0) {
        if (++r >= 800)
          return arguments[0]
      }
      else {
        r = 0
      } return t.apply(void 0, arguments)
    }
  }(pt)); function jt(t, r) { return t === r || t != t && r != r } var wt = at(function () { return arguments }()) ? at : function (t) { return Ct(t) && F.call(t, 'callee') && !B.call(t, 'callee') }; var Ot = Array.isArray; function mt(t) { return t != null && Mt(t.length) && !zt(t) } var At = G || function () { return !1 }; function zt(t) {
    if (!xt(t))
      return !1; const r = ct(t); return r == u || r == '[object GeneratorFunction]' || r == '[object AsyncFunction]' || r == '[object Proxy]'
  } function Mt(t) { return typeof t == 'number' && t > -1 && t % 1 == 0 && t <= n } function xt(t) { const r = typeof t; return t != null && (r == 'object' || r == 'function') } function Ct(t) { return t != null && typeof t == 'object' } var Ft = b ? (function (t) { return function (r) { return t(r) } }(b)) : function (t) { return Ct(t) && Mt(t.length) && !!s[ct(t)] }; function Ut(t) { return mt(t) ? tt(t, !0) : st(t) } let St; const It = (St = function (t, r, e) { lt(t, r, e) }, ht(((t, r) => {
    let e = -1; let n = r.length; let o = n > 1 ? r[n - 1] : void 0; const i = n > 2 ? r[2] : void 0; for (o = St.length > 3 && typeof o == 'function' ? (n--, o) : void 0, i && (function (t, r, e) {
      if (!xt(e))
        return !1; const n = typeof r; return !!(n == 'number' ? mt(e) && dt(r, e.length) : n == 'string' && r in e) && jt(e[r], t)
    }(r[0], r[1], i)) && (o = n < 3 ? void 0 : o, n = 1), t = Object(t); ++e < n;) { const u = r[e]; u && St(t, u, e, o) } return t
  }))); function Pt(t) { return t }t.exports = It
}))); const c = Object.prototype.hasOwnProperty; const a = (t, r) => c.call(t, r); class f {
  constructor({ pluginId: t, defaultConfig: r = {}, customMerge: e, root: n }) { this.pluginId = t, this.defaultConfig = r, this.pluginConfigPath = o.default.resolve(n || __dirname, t), this.customMerge = e, this._config = void 0 }resolve(t) { return o.default.resolve(this.pluginConfigPath, t) }hasFile(t) { return n.default.existsSync(this.resolve(t)) }requireFile(t) {
    try { return require(this.resolve(t)) }
    catch (t) {
      if (t.code === 'MODULE_NOT_FOUND')
        return; throw t
    }
  }

  _getUserConfig() { return this.requireFile('config.json') }config(t, r) {
    if (!this._config) { const t = this._getUserConfig(); this._config = Array.isArray(t) ? t : (this.customMerge || u)(this.defaultConfig, t) } const e = this._config; return t
      ? (function (t, r, e) {
          if (typeof r == 'number')
            return t[r]; if (typeof r == 'symbol')
            return a(t, r) ? t[r] : e; const n = typeof (o = r) != 'string' ? o : o.split('.').reduce((t, r) => (r.split(/\[([^}]+)\]/g).forEach((r => r && t.push(r))), t), []); let o; let i = t; for (let t = 0; t < n.length; t++) {
            const r = n[t]; if (!a(i, r))
              return e; i = i[r]
          } return i
        }(e, t, r))
      : e
  }
} const s = new class {
  constructor() { this._configMap = new Map() }plugin({ pluginId: t, defaultConfig: r, customMerge: e, root: n = __dirname, cache: o = !0 }) {
    if (this._configMap.has(t) && o)
      return this._configMap.get(t); const i = new f({ pluginId: t, defaultConfig: r, customMerge: e, root: n }); return o && this._configMap.set(t, i), i
  }
}(); const l = s.plugin.bind(s); module.exports = l
