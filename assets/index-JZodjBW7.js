var ed = e => {
    throw TypeError(e)
}
;
var Vl = (e, t, n) => t.has(e) || ed("Cannot " + n);
var N = (e, t, n) => (Vl(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , ne = (e, t, n) => t.has(e) ? ed("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , Y = (e, t, n, r) => (Vl(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , De = (e, t, n) => (Vl(e, t, "access private method"),
n);
var Hs = (e, t, n, r) => ({
    set _(o) {
        Y(e, t, o, n)
    },
    get _() {
        return N(e, t, r)
    }
});
function zv(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const i of s.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
function Tp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Np = {
    exports: {}
}
  , ul = {}
  , Rp = {
    exports: {}
}
  , J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var js = Symbol.for("react.element")
  , Iv = Symbol.for("react.portal")
  , Fv = Symbol.for("react.fragment")
  , Bv = Symbol.for("react.strict_mode")
  , $v = Symbol.for("react.profiler")
  , Uv = Symbol.for("react.provider")
  , Wv = Symbol.for("react.context")
  , Vv = Symbol.for("react.forward_ref")
  , Hv = Symbol.for("react.suspense")
  , Qv = Symbol.for("react.memo")
  , Kv = Symbol.for("react.lazy")
  , td = Symbol.iterator;
function Gv(e) {
    return e === null || typeof e != "object" ? null : (e = td && e[td] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var jp = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Ap = Object.assign
  , Op = {};
function yo(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Op,
    this.updater = n || jp
}
yo.prototype.isReactComponent = {};
yo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
yo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Lp() {}
Lp.prototype = yo.prototype;
function _c(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Op,
    this.updater = n || jp
}
var zc = _c.prototype = new Lp;
zc.constructor = _c;
Ap(zc, yo.prototype);
zc.isPureReactComponent = !0;
var nd = Array.isArray
  , Mp = Object.prototype.hasOwnProperty
  , Ic = {
    current: null
}
  , Dp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function _p(e, t, n) {
    var r, o = {}, s = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            Mp.call(t, r) && !Dp.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        for (var a = Array(l), c = 0; c < l; c++)
            a[c] = arguments[c + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: js,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: Ic.current
    }
}
function qv(e, t) {
    return {
        $$typeof: js,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Fc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === js
}
function Yv(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var rd = /\/+/g;
function Hl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Yv("" + e.key) : t.toString(36)
}
function hi(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (s) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case js:
            case Iv:
                i = !0
            }
        }
    if (i)
        return i = e,
        o = o(i),
        e = r === "" ? "." + Hl(i, 0) : r,
        nd(o) ? (n = "",
        e != null && (n = e.replace(rd, "$&/") + "/"),
        hi(o, t, n, "", function(c) {
            return c
        })) : o != null && (Fc(o) && (o = qv(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(rd, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    nd(e))
        for (var l = 0; l < e.length; l++) {
            s = e[l];
            var a = r + Hl(s, l);
            i += hi(s, t, n, a, o)
        }
    else if (a = Gv(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(s = e.next()).done; )
            s = s.value,
            a = r + Hl(s, l++),
            i += hi(s, t, n, a, o);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function Qs(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return hi(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }),
    r
}
function Xv(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ke = {
    current: null
}
  , mi = {
    transition: null
}
  , Jv = {
    ReactCurrentDispatcher: Ke,
    ReactCurrentBatchConfig: mi,
    ReactCurrentOwner: Ic
};
function zp() {
    throw Error("act(...) is not supported in production builds of React.")
}
J.Children = {
    map: Qs,
    forEach: function(e, t, n) {
        Qs(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Qs(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Qs(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Fc(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
J.Component = yo;
J.Fragment = Fv;
J.Profiler = $v;
J.PureComponent = _c;
J.StrictMode = Bv;
J.Suspense = Hv;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jv;
J.act = zp;
J.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ap({}, e.props)
      , o = e.key
      , s = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        i = Ic.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            Mp.call(t, a) && !Dp.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var c = 0; c < a; c++)
            l[c] = arguments[c + 2];
        r.children = l
    }
    return {
        $$typeof: js,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: i
    }
}
;
J.createContext = function(e) {
    return e = {
        $$typeof: Wv,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Uv,
        _context: e
    },
    e.Consumer = e
}
;
J.createElement = _p;
J.createFactory = function(e) {
    var t = _p.bind(null, e);
    return t.type = e,
    t
}
;
J.createRef = function() {
    return {
        current: null
    }
}
;
J.forwardRef = function(e) {
    return {
        $$typeof: Vv,
        render: e
    }
}
;
J.isValidElement = Fc;
J.lazy = function(e) {
    return {
        $$typeof: Kv,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Xv
    }
}
;
J.memo = function(e, t) {
    return {
        $$typeof: Qv,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
J.startTransition = function(e) {
    var t = mi.transition;
    mi.transition = {};
    try {
        e()
    } finally {
        mi.transition = t
    }
}
;
J.unstable_act = zp;
J.useCallback = function(e, t) {
    return Ke.current.useCallback(e, t)
}
;
J.useContext = function(e) {
    return Ke.current.useContext(e)
}
;
J.useDebugValue = function() {}
;
J.useDeferredValue = function(e) {
    return Ke.current.useDeferredValue(e)
}
;
J.useEffect = function(e, t) {
    return Ke.current.useEffect(e, t)
}
;
J.useId = function() {
    return Ke.current.useId()
}
;
J.useImperativeHandle = function(e, t, n) {
    return Ke.current.useImperativeHandle(e, t, n)
}
;
J.useInsertionEffect = function(e, t) {
    return Ke.current.useInsertionEffect(e, t)
}
;
J.useLayoutEffect = function(e, t) {
    return Ke.current.useLayoutEffect(e, t)
}
;
J.useMemo = function(e, t) {
    return Ke.current.useMemo(e, t)
}
;
J.useReducer = function(e, t, n) {
    return Ke.current.useReducer(e, t, n)
}
;
J.useRef = function(e) {
    return Ke.current.useRef(e)
}
;
J.useState = function(e) {
    return Ke.current.useState(e)
}
;
J.useSyncExternalStore = function(e, t, n) {
    return Ke.current.useSyncExternalStore(e, t, n)
}
;
J.useTransition = function() {
    return Ke.current.useTransition()
}
;
J.version = "18.3.1";
Rp.exports = J;
var S = Rp.exports;
const L = Tp(S)
  , Ip = zv({
    __proto__: null,
    default: L
}, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zv = S
  , ey = Symbol.for("react.element")
  , ty = Symbol.for("react.fragment")
  , ny = Object.prototype.hasOwnProperty
  , ry = Zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , oy = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Fp(e, t, n) {
    var r, o = {}, s = null, i = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (r in t)
        ny.call(t, r) && !oy.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: ey,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: ry.current
    }
}
ul.Fragment = ty;
ul.jsx = Fp;
ul.jsxs = Fp;
Np.exports = ul;
var x = Np.exports
  , Bp = {
    exports: {}
}
  , dt = {}
  , $p = {
    exports: {}
}
  , Up = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(T, R) {
        var _ = T.length;
        T.push(R);
        e: for (; 0 < _; ) {
            var U = _ - 1 >>> 1
              , B = T[U];
            if (0 < o(B, R))
                T[U] = R,
                T[_] = B,
                _ = U;
            else
                break e
        }
    }
    function n(T) {
        return T.length === 0 ? null : T[0]
    }
    function r(T) {
        if (T.length === 0)
            return null;
        var R = T[0]
          , _ = T.pop();
        if (_ !== R) {
            T[0] = _;
            e: for (var U = 0, B = T.length, G = B >>> 1; U < G; ) {
                var Q = 2 * (U + 1) - 1
                  , se = T[Q]
                  , ve = Q + 1
                  , q = T[ve];
                if (0 > o(se, _))
                    ve < B && 0 > o(q, se) ? (T[U] = q,
                    T[ve] = _,
                    U = ve) : (T[U] = se,
                    T[Q] = _,
                    U = Q);
                else if (ve < B && 0 > o(q, _))
                    T[U] = q,
                    T[ve] = _,
                    U = ve;
                else
                    break e
            }
        }
        return R
    }
    function o(T, R) {
        var _ = T.sortIndex - R.sortIndex;
        return _ !== 0 ? _ : T.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var i = Date
          , l = i.now();
        e.unstable_now = function() {
            return i.now() - l
        }
    }
    var a = []
      , c = []
      , u = 1
      , d = null
      , m = 3
      , p = !1
      , w = !1
      , g = !1
      , y = typeof setTimeout == "function" ? setTimeout : null
      , f = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(T) {
        for (var R = n(c); R !== null; ) {
            if (R.callback === null)
                r(c);
            else if (R.startTime <= T)
                r(c),
                R.sortIndex = R.expirationTime,
                t(a, R);
            else
                break;
            R = n(c)
        }
    }
    function C(T) {
        if (g = !1,
        v(T),
        !w)
            if (n(a) !== null)
                w = !0,
                $(b);
            else {
                var R = n(c);
                R !== null && W(C, R.startTime - T)
            }
    }
    function b(T, R) {
        w = !1,
        g && (g = !1,
        f(P),
        P = -1),
        p = !0;
        var _ = m;
        try {
            for (v(R),
            d = n(a); d !== null && (!(d.expirationTime > R) || T && !z()); ) {
                var U = d.callback;
                if (typeof U == "function") {
                    d.callback = null,
                    m = d.priorityLevel;
                    var B = U(d.expirationTime <= R);
                    R = e.unstable_now(),
                    typeof B == "function" ? d.callback = B : d === n(a) && r(a),
                    v(R)
                } else
                    r(a);
                d = n(a)
            }
            if (d !== null)
                var G = !0;
            else {
                var Q = n(c);
                Q !== null && W(C, Q.startTime - R),
                G = !1
            }
            return G
        } finally {
            d = null,
            m = _,
            p = !1
        }
    }
    var k = !1
      , E = null
      , P = -1
      , j = 5
      , A = -1;
    function z() {
        return !(e.unstable_now() - A < j)
    }
    function D() {
        if (E !== null) {
            var T = e.unstable_now();
            A = T;
            var R = !0;
            try {
                R = E(!0, T)
            } finally {
                R ? V() : (k = !1,
                E = null)
            }
        } else
            k = !1
    }
    var V;
    if (typeof h == "function")
        V = function() {
            h(D)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var M = new MessageChannel
          , H = M.port2;
        M.port1.onmessage = D,
        V = function() {
            H.postMessage(null)
        }
    } else
        V = function() {
            y(D, 0)
        }
        ;
    function $(T) {
        E = T,
        k || (k = !0,
        V())
    }
    function W(T, R) {
        P = y(function() {
            T(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(T) {
        T.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || p || (w = !0,
        $(b))
    }
    ,
    e.unstable_forceFrameRate = function(T) {
        0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < T ? Math.floor(1e3 / T) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(T) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var R = 3;
            break;
        default:
            R = m
        }
        var _ = m;
        m = R;
        try {
            return T()
        } finally {
            m = _
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(T, R) {
        switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            T = 3
        }
        var _ = m;
        m = T;
        try {
            return R()
        } finally {
            m = _
        }
    }
    ,
    e.unstable_scheduleCallback = function(T, R, _) {
        var U = e.unstable_now();
        switch (typeof _ == "object" && _ !== null ? (_ = _.delay,
        _ = typeof _ == "number" && 0 < _ ? U + _ : U) : _ = U,
        T) {
        case 1:
            var B = -1;
            break;
        case 2:
            B = 250;
            break;
        case 5:
            B = 1073741823;
            break;
        case 4:
            B = 1e4;
            break;
        default:
            B = 5e3
        }
        return B = _ + B,
        T = {
            id: u++,
            callback: R,
            priorityLevel: T,
            startTime: _,
            expirationTime: B,
            sortIndex: -1
        },
        _ > U ? (T.sortIndex = _,
        t(c, T),
        n(a) === null && T === n(c) && (g ? (f(P),
        P = -1) : g = !0,
        W(C, _ - U))) : (T.sortIndex = B,
        t(a, T),
        w || p || (w = !0,
        $(b))),
        T
    }
    ,
    e.unstable_shouldYield = z,
    e.unstable_wrapCallback = function(T) {
        var R = m;
        return function() {
            var _ = m;
            m = R;
            try {
                return T.apply(this, arguments)
            } finally {
                m = _
            }
        }
    }
}
)(Up);
$p.exports = Up;
var sy = $p.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iy = S
  , ut = sy;
function O(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Wp = new Set
  , ns = {};
function Tr(e, t) {
    ao(e, t),
    ao(e + "Capture", t)
}
function ao(e, t) {
    for (ns[e] = t,
    e = 0; e < t.length; e++)
        Wp.add(t[e])
}
var pn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , ka = Object.prototype.hasOwnProperty
  , ly = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , od = {}
  , sd = {};
function ay(e) {
    return ka.call(sd, e) ? !0 : ka.call(od, e) ? !1 : ly.test(e) ? sd[e] = !0 : (od[e] = !0,
    !1)
}
function cy(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function uy(e, t, n, r) {
    if (t === null || typeof t > "u" || cy(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ge(e, t, n, r, o, s, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = i
}
var Me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Me[e] = new Ge(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Me[t] = new Ge(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Me[e] = new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Me[e] = new Ge(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Me[e] = new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Me[e] = new Ge(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Me[e] = new Ge(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Me[e] = new Ge(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Me[e] = new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Bc = /[\-:]([a-z])/g;
function $c(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Bc, $c);
    Me[t] = new Ge(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Bc, $c);
    Me[t] = new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Bc, $c);
    Me[t] = new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Me[e] = new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Me.xlinkHref = new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Me[e] = new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Uc(e, t, n, r) {
    var o = Me.hasOwnProperty(t) ? Me[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (uy(t, n, o, r) && (n = null),
    r || o === null ? ay(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var wn = iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ks = Symbol.for("react.element")
  , Mr = Symbol.for("react.portal")
  , Dr = Symbol.for("react.fragment")
  , Wc = Symbol.for("react.strict_mode")
  , Pa = Symbol.for("react.profiler")
  , Vp = Symbol.for("react.provider")
  , Hp = Symbol.for("react.context")
  , Vc = Symbol.for("react.forward_ref")
  , Ta = Symbol.for("react.suspense")
  , Na = Symbol.for("react.suspense_list")
  , Hc = Symbol.for("react.memo")
  , Rn = Symbol.for("react.lazy")
  , Qp = Symbol.for("react.offscreen")
  , id = Symbol.iterator;
function Ro(e) {
    return e === null || typeof e != "object" ? null : (e = id && e[id] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ge = Object.assign, Ql;
function Fo(e) {
    if (Ql === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ql = t && t[1] || ""
        }
    return `
` + Ql + e
}
var Kl = !1;
function Gl(e, t) {
    if (!e || Kl)
        return "";
    Kl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var o = c.stack.split(`
`), s = r.stack.split(`
`), i = o.length - 1, l = s.length - 1; 1 <= i && 0 <= l && o[i] !== s[l]; )
                l--;
            for (; 1 <= i && 0 <= l; i--,
            l--)
                if (o[i] !== s[l]) {
                    if (i !== 1 || l !== 1)
                        do
                            if (i--,
                            l--,
                            0 > l || o[i] !== s[l]) {
                                var a = `
` + o[i].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= i && 0 <= l);
                    break
                }
        }
    } finally {
        Kl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Fo(e) : ""
}
function dy(e) {
    switch (e.tag) {
    case 5:
        return Fo(e.type);
    case 16:
        return Fo("Lazy");
    case 13:
        return Fo("Suspense");
    case 19:
        return Fo("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Gl(e.type, !1),
        e;
    case 11:
        return e = Gl(e.type.render, !1),
        e;
    case 1:
        return e = Gl(e.type, !0),
        e;
    default:
        return ""
    }
}
function Ra(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Dr:
        return "Fragment";
    case Mr:
        return "Portal";
    case Pa:
        return "Profiler";
    case Wc:
        return "StrictMode";
    case Ta:
        return "Suspense";
    case Na:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Hp:
            return (e.displayName || "Context") + ".Consumer";
        case Vp:
            return (e._context.displayName || "Context") + ".Provider";
        case Vc:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Hc:
            return t = e.displayName || null,
            t !== null ? t : Ra(e.type) || "Memo";
        case Rn:
            t = e._payload,
            e = e._init;
            try {
                return Ra(e(t))
            } catch {}
        }
    return null
}
function fy(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Ra(t);
    case 8:
        return t === Wc ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Yn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Kp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function py(e) {
    var t = Kp(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(i) {
                r = "" + i,
                s.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Gs(e) {
    e._valueTracker || (e._valueTracker = py(e))
}
function Gp(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Kp(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ai(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ja(e, t) {
    var n = t.checked;
    return ge({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function ld(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Yn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function qp(e, t) {
    t = t.checked,
    t != null && Uc(e, "checked", t, !1)
}
function Aa(e, t) {
    qp(e, t);
    var n = Yn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Oa(e, t.type, n) : t.hasOwnProperty("defaultValue") && Oa(e, t.type, Yn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ad(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Oa(e, t, n) {
    (t !== "number" || Ai(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Bo = Array.isArray;
function Qr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Yn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function La(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(O(91));
    return ge({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function cd(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(O(92));
            if (Bo(n)) {
                if (1 < n.length)
                    throw Error(O(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Yn(n)
    }
}
function Yp(e, t) {
    var n = Yn(t.value)
      , r = Yn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function ud(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Xp(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Ma(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Xp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var qs, Jp = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (qs = qs || document.createElement("div"),
        qs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = qs.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function rs(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ho = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , hy = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ho).forEach(function(e) {
    hy.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Ho[t] = Ho[e]
    })
});
function Zp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ho.hasOwnProperty(e) && Ho[e] ? ("" + t).trim() : t + "px"
}
function eh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Zp(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var my = ge({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Da(e, t) {
    if (t) {
        if (my[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(O(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(O(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(O(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(O(62))
    }
}
function _a(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var za = null;
function Qc(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ia = null
  , Kr = null
  , Gr = null;
function dd(e) {
    if (e = Ls(e)) {
        if (typeof Ia != "function")
            throw Error(O(280));
        var t = e.stateNode;
        t && (t = ml(t),
        Ia(e.stateNode, e.type, t))
    }
}
function th(e) {
    Kr ? Gr ? Gr.push(e) : Gr = [e] : Kr = e
}
function nh() {
    if (Kr) {
        var e = Kr
          , t = Gr;
        if (Gr = Kr = null,
        dd(e),
        t)
            for (e = 0; e < t.length; e++)
                dd(t[e])
    }
}
function rh(e, t) {
    return e(t)
}
function oh() {}
var ql = !1;
function sh(e, t, n) {
    if (ql)
        return e(t, n);
    ql = !0;
    try {
        return rh(e, t, n)
    } finally {
        ql = !1,
        (Kr !== null || Gr !== null) && (oh(),
        nh())
    }
}
function os(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = ml(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(O(231, t, typeof n));
    return n
}
var Fa = !1;
if (pn)
    try {
        var jo = {};
        Object.defineProperty(jo, "passive", {
            get: function() {
                Fa = !0
            }
        }),
        window.addEventListener("test", jo, jo),
        window.removeEventListener("test", jo, jo)
    } catch {
        Fa = !1
    }
function gy(e, t, n, r, o, s, i, l, a) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (u) {
        this.onError(u)
    }
}
var Qo = !1
  , Oi = null
  , Li = !1
  , Ba = null
  , vy = {
    onError: function(e) {
        Qo = !0,
        Oi = e
    }
};
function yy(e, t, n, r, o, s, i, l, a) {
    Qo = !1,
    Oi = null,
    gy.apply(vy, arguments)
}
function wy(e, t, n, r, o, s, i, l, a) {
    if (yy.apply(this, arguments),
    Qo) {
        if (Qo) {
            var c = Oi;
            Qo = !1,
            Oi = null
        } else
            throw Error(O(198));
        Li || (Li = !0,
        Ba = c)
    }
}
function Nr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ih(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function fd(e) {
    if (Nr(e) !== e)
        throw Error(O(188))
}
function xy(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Nr(e),
        t === null)
            throw Error(O(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s; ) {
                if (s === n)
                    return fd(o),
                    e;
                if (s === r)
                    return fd(o),
                    t;
                s = s.sibling
            }
            throw Error(O(188))
        }
        if (n.return !== r.return)
            n = o,
            r = s;
        else {
            for (var i = !1, l = o.child; l; ) {
                if (l === n) {
                    i = !0,
                    n = o,
                    r = s;
                    break
                }
                if (l === r) {
                    i = !0,
                    r = o,
                    n = s;
                    break
                }
                l = l.sibling
            }
            if (!i) {
                for (l = s.child; l; ) {
                    if (l === n) {
                        i = !0,
                        n = s,
                        r = o;
                        break
                    }
                    if (l === r) {
                        i = !0,
                        r = s,
                        n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!i)
                    throw Error(O(189))
            }
        }
        if (n.alternate !== r)
            throw Error(O(190))
    }
    if (n.tag !== 3)
        throw Error(O(188));
    return n.stateNode.current === n ? e : t
}
function lh(e) {
    return e = xy(e),
    e !== null ? ah(e) : null
}
function ah(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = ah(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var ch = ut.unstable_scheduleCallback
  , pd = ut.unstable_cancelCallback
  , Sy = ut.unstable_shouldYield
  , Cy = ut.unstable_requestPaint
  , Se = ut.unstable_now
  , by = ut.unstable_getCurrentPriorityLevel
  , Kc = ut.unstable_ImmediatePriority
  , uh = ut.unstable_UserBlockingPriority
  , Mi = ut.unstable_NormalPriority
  , Ey = ut.unstable_LowPriority
  , dh = ut.unstable_IdlePriority
  , dl = null
  , Jt = null;
function ky(e) {
    if (Jt && typeof Jt.onCommitFiberRoot == "function")
        try {
            Jt.onCommitFiberRoot(dl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var zt = Math.clz32 ? Math.clz32 : Ny
  , Py = Math.log
  , Ty = Math.LN2;
function Ny(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Py(e) / Ty | 0) | 0
}
var Ys = 64
  , Xs = 4194304;
function $o(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Di(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , s = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var l = i & ~o;
        l !== 0 ? r = $o(l) : (s &= i,
        s !== 0 && (r = $o(s)))
    } else
        i = n & ~o,
        i !== 0 ? r = $o(i) : s !== 0 && (r = $o(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    s = t & -t,
    o >= s || o === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - zt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function Ry(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function jy(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var i = 31 - zt(s)
          , l = 1 << i
          , a = o[i];
        a === -1 ? (!(l & n) || l & r) && (o[i] = Ry(l, t)) : a <= t && (e.expiredLanes |= l),
        s &= ~l
    }
}
function $a(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function fh() {
    var e = Ys;
    return Ys <<= 1,
    !(Ys & 4194240) && (Ys = 64),
    e
}
function Yl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function As(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - zt(t),
    e[t] = n
}
function Ay(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - zt(n)
          , s = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~s
    }
}
function Gc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - zt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var oe = 0;
function ph(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var hh, qc, mh, gh, vh, Ua = !1, Js = [], $n = null, Un = null, Wn = null, ss = new Map, is = new Map, An = [], Oy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function hd(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        $n = null;
        break;
    case "dragenter":
    case "dragleave":
        Un = null;
        break;
    case "mouseover":
    case "mouseout":
        Wn = null;
        break;
    case "pointerover":
    case "pointerout":
        ss.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        is.delete(t.pointerId)
    }
}
function Ao(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    },
    t !== null && (t = Ls(t),
    t !== null && qc(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function Ly(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return $n = Ao($n, e, t, n, r, o),
        !0;
    case "dragenter":
        return Un = Ao(Un, e, t, n, r, o),
        !0;
    case "mouseover":
        return Wn = Ao(Wn, e, t, n, r, o),
        !0;
    case "pointerover":
        var s = o.pointerId;
        return ss.set(s, Ao(ss.get(s) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return s = o.pointerId,
        is.set(s, Ao(is.get(s) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function yh(e) {
    var t = cr(e.target);
    if (t !== null) {
        var n = Nr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = ih(n),
                t !== null) {
                    e.blockedOn = t,
                    vh(e.priority, function() {
                        mh(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function gi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Wa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            za = r,
            n.target.dispatchEvent(r),
            za = null
        } else
            return t = Ls(n),
            t !== null && qc(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function md(e, t, n) {
    gi(e) && n.delete(t)
}
function My() {
    Ua = !1,
    $n !== null && gi($n) && ($n = null),
    Un !== null && gi(Un) && (Un = null),
    Wn !== null && gi(Wn) && (Wn = null),
    ss.forEach(md),
    is.forEach(md)
}
function Oo(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Ua || (Ua = !0,
    ut.unstable_scheduleCallback(ut.unstable_NormalPriority, My)))
}
function ls(e) {
    function t(o) {
        return Oo(o, e)
    }
    if (0 < Js.length) {
        Oo(Js[0], e);
        for (var n = 1; n < Js.length; n++) {
            var r = Js[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for ($n !== null && Oo($n, e),
    Un !== null && Oo(Un, e),
    Wn !== null && Oo(Wn, e),
    ss.forEach(t),
    is.forEach(t),
    n = 0; n < An.length; n++)
        r = An[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < An.length && (n = An[0],
    n.blockedOn === null); )
        yh(n),
        n.blockedOn === null && An.shift()
}
var qr = wn.ReactCurrentBatchConfig
  , _i = !0;
function Dy(e, t, n, r) {
    var o = oe
      , s = qr.transition;
    qr.transition = null;
    try {
        oe = 1,
        Yc(e, t, n, r)
    } finally {
        oe = o,
        qr.transition = s
    }
}
function _y(e, t, n, r) {
    var o = oe
      , s = qr.transition;
    qr.transition = null;
    try {
        oe = 4,
        Yc(e, t, n, r)
    } finally {
        oe = o,
        qr.transition = s
    }
}
function Yc(e, t, n, r) {
    if (_i) {
        var o = Wa(e, t, n, r);
        if (o === null)
            ia(e, t, r, zi, n),
            hd(e, r);
        else if (Ly(o, e, t, n, r))
            r.stopPropagation();
        else if (hd(e, r),
        t & 4 && -1 < Oy.indexOf(e)) {
            for (; o !== null; ) {
                var s = Ls(o);
                if (s !== null && hh(s),
                s = Wa(e, t, n, r),
                s === null && ia(e, t, r, zi, n),
                s === o)
                    break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else
            ia(e, t, r, null, n)
    }
}
var zi = null;
function Wa(e, t, n, r) {
    if (zi = null,
    e = Qc(r),
    e = cr(e),
    e !== null)
        if (t = Nr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = ih(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return zi = e,
    null
}
function wh(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (by()) {
        case Kc:
            return 1;
        case uh:
            return 4;
        case Mi:
        case Ey:
            return 16;
        case dh:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var In = null
  , Xc = null
  , vi = null;
function xh() {
    if (vi)
        return vi;
    var e, t = Xc, n = t.length, r, o = "value"in In ? In.value : In.textContent, s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[s - r]; r++)
        ;
    return vi = o.slice(e, 1 < r ? 1 - r : void 0)
}
function yi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Zs() {
    return !0
}
function gd() {
    return !1
}
function ft(e) {
    function t(n, r, o, s, i) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = s,
        this.target = i,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(s) : s[l]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Zs : gd,
        this.isPropagationStopped = gd,
        this
    }
    return ge(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Zs)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Zs)
        },
        persist: function() {},
        isPersistent: Zs
    }),
    t
}
var wo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Jc = ft(wo), Os = ge({}, wo, {
    view: 0,
    detail: 0
}), zy = ft(Os), Xl, Jl, Lo, fl = ge({}, Os, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Zc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Lo && (Lo && e.type === "mousemove" ? (Xl = e.screenX - Lo.screenX,
        Jl = e.screenY - Lo.screenY) : Jl = Xl = 0,
        Lo = e),
        Xl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Jl
    }
}), vd = ft(fl), Iy = ge({}, fl, {
    dataTransfer: 0
}), Fy = ft(Iy), By = ge({}, Os, {
    relatedTarget: 0
}), Zl = ft(By), $y = ge({}, wo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Uy = ft($y), Wy = ge({}, wo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Vy = ft(Wy), Hy = ge({}, wo, {
    data: 0
}), yd = ft(Hy), Qy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Ky = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Gy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function qy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Gy[e]) ? !!t[e] : !1
}
function Zc() {
    return qy
}
var Yy = ge({}, Os, {
    key: function(e) {
        if (e.key) {
            var t = Qy[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = yi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ky[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zc,
    charCode: function(e) {
        return e.type === "keypress" ? yi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? yi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Xy = ft(Yy)
  , Jy = ge({}, fl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , wd = ft(Jy)
  , Zy = ge({}, Os, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zc
})
  , e0 = ft(Zy)
  , t0 = ge({}, wo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , n0 = ft(t0)
  , r0 = ge({}, fl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , o0 = ft(r0)
  , s0 = [9, 13, 27, 32]
  , eu = pn && "CompositionEvent"in window
  , Ko = null;
pn && "documentMode"in document && (Ko = document.documentMode);
var i0 = pn && "TextEvent"in window && !Ko
  , Sh = pn && (!eu || Ko && 8 < Ko && 11 >= Ko)
  , xd = " "
  , Sd = !1;
function Ch(e, t) {
    switch (e) {
    case "keyup":
        return s0.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function bh(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var _r = !1;
function l0(e, t) {
    switch (e) {
    case "compositionend":
        return bh(t);
    case "keypress":
        return t.which !== 32 ? null : (Sd = !0,
        xd);
    case "textInput":
        return e = t.data,
        e === xd && Sd ? null : e;
    default:
        return null
    }
}
function a0(e, t) {
    if (_r)
        return e === "compositionend" || !eu && Ch(e, t) ? (e = xh(),
        vi = Xc = In = null,
        _r = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Sh && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var c0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Cd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!c0[e.type] : t === "textarea"
}
function Eh(e, t, n, r) {
    th(r),
    t = Ii(t, "onChange"),
    0 < t.length && (n = new Jc("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Go = null
  , as = null;
function u0(e) {
    Dh(e, 0)
}
function pl(e) {
    var t = Fr(e);
    if (Gp(t))
        return e
}
function d0(e, t) {
    if (e === "change")
        return t
}
var kh = !1;
if (pn) {
    var ea;
    if (pn) {
        var ta = "oninput"in document;
        if (!ta) {
            var bd = document.createElement("div");
            bd.setAttribute("oninput", "return;"),
            ta = typeof bd.oninput == "function"
        }
        ea = ta
    } else
        ea = !1;
    kh = ea && (!document.documentMode || 9 < document.documentMode)
}
function Ed() {
    Go && (Go.detachEvent("onpropertychange", Ph),
    as = Go = null)
}
function Ph(e) {
    if (e.propertyName === "value" && pl(as)) {
        var t = [];
        Eh(t, as, e, Qc(e)),
        sh(u0, t)
    }
}
function f0(e, t, n) {
    e === "focusin" ? (Ed(),
    Go = t,
    as = n,
    Go.attachEvent("onpropertychange", Ph)) : e === "focusout" && Ed()
}
function p0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return pl(as)
}
function h0(e, t) {
    if (e === "click")
        return pl(t)
}
function m0(e, t) {
    if (e === "input" || e === "change")
        return pl(t)
}
function g0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Bt = typeof Object.is == "function" ? Object.is : g0;
function cs(e, t) {
    if (Bt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!ka.call(t, o) || !Bt(e[o], t[o]))
            return !1
    }
    return !0
}
function kd(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Pd(e, t) {
    var n = kd(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = kd(n)
    }
}
function Th(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Th(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Nh() {
    for (var e = window, t = Ai(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ai(e.document)
    }
    return t
}
function tu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function v0(e) {
    var t = Nh()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Th(n.ownerDocument.documentElement, n)) {
        if (r !== null && tu(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o),
                !e.extend && s > r && (o = r,
                r = s,
                s = o),
                o = Pd(n, s);
                var i = Pd(n, r);
                o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var y0 = pn && "documentMode"in document && 11 >= document.documentMode
  , zr = null
  , Va = null
  , qo = null
  , Ha = !1;
function Td(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ha || zr == null || zr !== Ai(r) || (r = zr,
    "selectionStart"in r && tu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    qo && cs(qo, r) || (qo = r,
    r = Ii(Va, "onSelect"),
    0 < r.length && (t = new Jc("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = zr)))
}
function ei(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Ir = {
    animationend: ei("Animation", "AnimationEnd"),
    animationiteration: ei("Animation", "AnimationIteration"),
    animationstart: ei("Animation", "AnimationStart"),
    transitionend: ei("Transition", "TransitionEnd")
}
  , na = {}
  , Rh = {};
pn && (Rh = document.createElement("div").style,
"AnimationEvent"in window || (delete Ir.animationend.animation,
delete Ir.animationiteration.animation,
delete Ir.animationstart.animation),
"TransitionEvent"in window || delete Ir.transitionend.transition);
function hl(e) {
    if (na[e])
        return na[e];
    if (!Ir[e])
        return e;
    var t = Ir[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Rh)
            return na[e] = t[n];
    return e
}
var jh = hl("animationend")
  , Ah = hl("animationiteration")
  , Oh = hl("animationstart")
  , Lh = hl("transitionend")
  , Mh = new Map
  , Nd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function nr(e, t) {
    Mh.set(e, t),
    Tr(t, [e])
}
for (var ra = 0; ra < Nd.length; ra++) {
    var oa = Nd[ra]
      , w0 = oa.toLowerCase()
      , x0 = oa[0].toUpperCase() + oa.slice(1);
    nr(w0, "on" + x0)
}
nr(jh, "onAnimationEnd");
nr(Ah, "onAnimationIteration");
nr(Oh, "onAnimationStart");
nr("dblclick", "onDoubleClick");
nr("focusin", "onFocus");
nr("focusout", "onBlur");
nr(Lh, "onTransitionEnd");
ao("onMouseEnter", ["mouseout", "mouseover"]);
ao("onMouseLeave", ["mouseout", "mouseover"]);
ao("onPointerEnter", ["pointerout", "pointerover"]);
ao("onPointerLeave", ["pointerout", "pointerover"]);
Tr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Uo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , S0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));
function Rd(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    wy(r, t, void 0, e),
    e.currentTarget = null
}
function Dh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var l = r[i]
                      , a = l.instance
                      , c = l.currentTarget;
                    if (l = l.listener,
                    a !== s && o.isPropagationStopped())
                        break e;
                    Rd(o, l, c),
                    s = a
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (l = r[i],
                    a = l.instance,
                    c = l.currentTarget,
                    l = l.listener,
                    a !== s && o.isPropagationStopped())
                        break e;
                    Rd(o, l, c),
                    s = a
                }
        }
    }
    if (Li)
        throw e = Ba,
        Li = !1,
        Ba = null,
        e
}
function ue(e, t) {
    var n = t[Ya];
    n === void 0 && (n = t[Ya] = new Set);
    var r = e + "__bubble";
    n.has(r) || (_h(t, e, 2, !1),
    n.add(r))
}
function sa(e, t, n) {
    var r = 0;
    t && (r |= 4),
    _h(n, e, r, t)
}
var ti = "_reactListening" + Math.random().toString(36).slice(2);
function us(e) {
    if (!e[ti]) {
        e[ti] = !0,
        Wp.forEach(function(n) {
            n !== "selectionchange" && (S0.has(n) || sa(n, !1, e),
            sa(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ti] || (t[ti] = !0,
        sa("selectionchange", !1, t))
    }
}
function _h(e, t, n, r) {
    switch (wh(t)) {
    case 1:
        var o = Dy;
        break;
    case 4:
        o = _y;
        break;
    default:
        o = Yc
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !Fa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function ia(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var a = i.tag;
                        if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo,
                        a === o || a.nodeType === 8 && a.parentNode === o))
                            return;
                        i = i.return
                    }
                for (; l !== null; ) {
                    if (i = cr(l),
                    i === null)
                        return;
                    if (a = i.tag,
                    a === 5 || a === 6) {
                        r = s = i;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    sh(function() {
        var c = s
          , u = Qc(n)
          , d = [];
        e: {
            var m = Mh.get(e);
            if (m !== void 0) {
                var p = Jc
                  , w = e;
                switch (e) {
                case "keypress":
                    if (yi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    p = Xy;
                    break;
                case "focusin":
                    w = "focus",
                    p = Zl;
                    break;
                case "focusout":
                    w = "blur",
                    p = Zl;
                    break;
                case "beforeblur":
                case "afterblur":
                    p = Zl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    p = vd;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    p = Fy;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    p = e0;
                    break;
                case jh:
                case Ah:
                case Oh:
                    p = Uy;
                    break;
                case Lh:
                    p = n0;
                    break;
                case "scroll":
                    p = zy;
                    break;
                case "wheel":
                    p = o0;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    p = Vy;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    p = wd
                }
                var g = (t & 4) !== 0
                  , y = !g && e === "scroll"
                  , f = g ? m !== null ? m + "Capture" : null : m;
                g = [];
                for (var h = c, v; h !== null; ) {
                    v = h;
                    var C = v.stateNode;
                    if (v.tag === 5 && C !== null && (v = C,
                    f !== null && (C = os(h, f),
                    C != null && g.push(ds(h, C, v)))),
                    y)
                        break;
                    h = h.return
                }
                0 < g.length && (m = new p(m,w,null,n,u),
                d.push({
                    event: m,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                p = e === "mouseout" || e === "pointerout",
                m && n !== za && (w = n.relatedTarget || n.fromElement) && (cr(w) || w[hn]))
                    break e;
                if ((p || m) && (m = u.window === u ? u : (m = u.ownerDocument) ? m.defaultView || m.parentWindow : window,
                p ? (w = n.relatedTarget || n.toElement,
                p = c,
                w = w ? cr(w) : null,
                w !== null && (y = Nr(w),
                w !== y || w.tag !== 5 && w.tag !== 6) && (w = null)) : (p = null,
                w = c),
                p !== w)) {
                    if (g = vd,
                    C = "onMouseLeave",
                    f = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = wd,
                    C = "onPointerLeave",
                    f = "onPointerEnter",
                    h = "pointer"),
                    y = p == null ? m : Fr(p),
                    v = w == null ? m : Fr(w),
                    m = new g(C,h + "leave",p,n,u),
                    m.target = y,
                    m.relatedTarget = v,
                    C = null,
                    cr(u) === c && (g = new g(f,h + "enter",w,n,u),
                    g.target = v,
                    g.relatedTarget = y,
                    C = g),
                    y = C,
                    p && w)
                        t: {
                            for (g = p,
                            f = w,
                            h = 0,
                            v = g; v; v = Lr(v))
                                h++;
                            for (v = 0,
                            C = f; C; C = Lr(C))
                                v++;
                            for (; 0 < h - v; )
                                g = Lr(g),
                                h--;
                            for (; 0 < v - h; )
                                f = Lr(f),
                                v--;
                            for (; h--; ) {
                                if (g === f || f !== null && g === f.alternate)
                                    break t;
                                g = Lr(g),
                                f = Lr(f)
                            }
                            g = null
                        }
                    else
                        g = null;
                    p !== null && jd(d, m, p, g, !1),
                    w !== null && y !== null && jd(d, y, w, g, !0)
                }
            }
            e: {
                if (m = c ? Fr(c) : window,
                p = m.nodeName && m.nodeName.toLowerCase(),
                p === "select" || p === "input" && m.type === "file")
                    var b = d0;
                else if (Cd(m))
                    if (kh)
                        b = m0;
                    else {
                        b = p0;
                        var k = f0
                    }
                else
                    (p = m.nodeName) && p.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (b = h0);
                if (b && (b = b(e, c))) {
                    Eh(d, b, n, u);
                    break e
                }
                k && k(e, m, c),
                e === "focusout" && (k = m._wrapperState) && k.controlled && m.type === "number" && Oa(m, "number", m.value)
            }
            switch (k = c ? Fr(c) : window,
            e) {
            case "focusin":
                (Cd(k) || k.contentEditable === "true") && (zr = k,
                Va = c,
                qo = null);
                break;
            case "focusout":
                qo = Va = zr = null;
                break;
            case "mousedown":
                Ha = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Ha = !1,
                Td(d, n, u);
                break;
            case "selectionchange":
                if (y0)
                    break;
            case "keydown":
            case "keyup":
                Td(d, n, u)
            }
            var E;
            if (eu)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                _r ? Ch(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (Sh && n.locale !== "ko" && (_r || P !== "onCompositionStart" ? P === "onCompositionEnd" && _r && (E = xh()) : (In = u,
            Xc = "value"in In ? In.value : In.textContent,
            _r = !0)),
            k = Ii(c, P),
            0 < k.length && (P = new yd(P,e,null,n,u),
            d.push({
                event: P,
                listeners: k
            }),
            E ? P.data = E : (E = bh(n),
            E !== null && (P.data = E)))),
            (E = i0 ? l0(e, n) : a0(e, n)) && (c = Ii(c, "onBeforeInput"),
            0 < c.length && (u = new yd("onBeforeInput","beforeinput",null,n,u),
            d.push({
                event: u,
                listeners: c
            }),
            u.data = E))
        }
        Dh(d, t)
    })
}
function ds(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ii(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , s = o.stateNode;
        o.tag === 5 && s !== null && (o = s,
        s = os(e, n),
        s != null && r.unshift(ds(e, s, o)),
        s = os(e, t),
        s != null && r.push(ds(e, s, o))),
        e = e.return
    }
    return r
}
function Lr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function jd(e, t, n, r, o) {
    for (var s = t._reactName, i = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , c = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && c !== null && (l = c,
        o ? (a = os(n, s),
        a != null && i.unshift(ds(n, a, l))) : o || (a = os(n, s),
        a != null && i.push(ds(n, a, l)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var C0 = /\r\n?/g
  , b0 = /\u0000|\uFFFD/g;
function Ad(e) {
    return (typeof e == "string" ? e : "" + e).replace(C0, `
`).replace(b0, "")
}
function ni(e, t, n) {
    if (t = Ad(t),
    Ad(e) !== t && n)
        throw Error(O(425))
}
function Fi() {}
var Qa = null
  , Ka = null;
function Ga(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var qa = typeof setTimeout == "function" ? setTimeout : void 0
  , E0 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Od = typeof Promise == "function" ? Promise : void 0
  , k0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Od < "u" ? function(e) {
    return Od.resolve(null).then(e).catch(P0)
}
: qa;
function P0(e) {
    setTimeout(function() {
        throw e
    })
}
function la(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    ls(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    ls(t)
}
function Vn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Ld(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var xo = Math.random().toString(36).slice(2)
  , Yt = "__reactFiber$" + xo
  , fs = "__reactProps$" + xo
  , hn = "__reactContainer$" + xo
  , Ya = "__reactEvents$" + xo
  , T0 = "__reactListeners$" + xo
  , N0 = "__reactHandles$" + xo;
function cr(e) {
    var t = e[Yt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[hn] || n[Yt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Ld(e); e !== null; ) {
                    if (n = e[Yt])
                        return n;
                    e = Ld(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Ls(e) {
    return e = e[Yt] || e[hn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Fr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(O(33))
}
function ml(e) {
    return e[fs] || null
}
var Xa = []
  , Br = -1;
function rr(e) {
    return {
        current: e
    }
}
function de(e) {
    0 > Br || (e.current = Xa[Br],
    Xa[Br] = null,
    Br--)
}
function le(e, t) {
    Br++,
    Xa[Br] = e.current,
    e.current = t
}
var Xn = {}
  , Be = rr(Xn)
  , Ze = rr(!1)
  , xr = Xn;
function co(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Xn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, s;
    for (s in n)
        o[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function et(e) {
    return e = e.childContextTypes,
    e != null
}
function Bi() {
    de(Ze),
    de(Be)
}
function Md(e, t, n) {
    if (Be.current !== Xn)
        throw Error(O(168));
    le(Be, t),
    le(Ze, n)
}
function zh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(O(108, fy(e) || "Unknown", o));
    return ge({}, n, r)
}
function $i(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Xn,
    xr = Be.current,
    le(Be, e),
    le(Ze, Ze.current),
    !0
}
function Dd(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(O(169));
    n ? (e = zh(e, t, xr),
    r.__reactInternalMemoizedMergedChildContext = e,
    de(Ze),
    de(Be),
    le(Be, e)) : de(Ze),
    le(Ze, n)
}
var an = null
  , gl = !1
  , aa = !1;
function Ih(e) {
    an === null ? an = [e] : an.push(e)
}
function R0(e) {
    gl = !0,
    Ih(e)
}
function or() {
    if (!aa && an !== null) {
        aa = !0;
        var e = 0
          , t = oe;
        try {
            var n = an;
            for (oe = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            an = null,
            gl = !1
        } catch (o) {
            throw an !== null && (an = an.slice(e + 1)),
            ch(Kc, or),
            o
        } finally {
            oe = t,
            aa = !1
        }
    }
    return null
}
var $r = []
  , Ur = 0
  , Ui = null
  , Wi = 0
  , gt = []
  , vt = 0
  , Sr = null
  , un = 1
  , dn = "";
function lr(e, t) {
    $r[Ur++] = Wi,
    $r[Ur++] = Ui,
    Ui = e,
    Wi = t
}
function Fh(e, t, n) {
    gt[vt++] = un,
    gt[vt++] = dn,
    gt[vt++] = Sr,
    Sr = e;
    var r = un;
    e = dn;
    var o = 32 - zt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var s = 32 - zt(t) + o;
    if (30 < s) {
        var i = o - o % 5;
        s = (r & (1 << i) - 1).toString(32),
        r >>= i,
        o -= i,
        un = 1 << 32 - zt(t) + o | n << o | r,
        dn = s + e
    } else
        un = 1 << s | n << o | r,
        dn = e
}
function nu(e) {
    e.return !== null && (lr(e, 1),
    Fh(e, 1, 0))
}
function ru(e) {
    for (; e === Ui; )
        Ui = $r[--Ur],
        $r[Ur] = null,
        Wi = $r[--Ur],
        $r[Ur] = null;
    for (; e === Sr; )
        Sr = gt[--vt],
        gt[vt] = null,
        dn = gt[--vt],
        gt[vt] = null,
        un = gt[--vt],
        gt[vt] = null
}
var at = null
  , lt = null
  , fe = !1
  , _t = null;
function Bh(e, t) {
    var n = yt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function _d(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        at = e,
        lt = Vn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        at = e,
        lt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Sr !== null ? {
            id: un,
            overflow: dn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = yt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        at = e,
        lt = null,
        !0) : !1;
    default:
        return !1
    }
}
function Ja(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Za(e) {
    if (fe) {
        var t = lt;
        if (t) {
            var n = t;
            if (!_d(e, t)) {
                if (Ja(e))
                    throw Error(O(418));
                t = Vn(n.nextSibling);
                var r = at;
                t && _d(e, t) ? Bh(r, n) : (e.flags = e.flags & -4097 | 2,
                fe = !1,
                at = e)
            }
        } else {
            if (Ja(e))
                throw Error(O(418));
            e.flags = e.flags & -4097 | 2,
            fe = !1,
            at = e
        }
    }
}
function zd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    at = e
}
function ri(e) {
    if (e !== at)
        return !1;
    if (!fe)
        return zd(e),
        fe = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Ga(e.type, e.memoizedProps)),
    t && (t = lt)) {
        if (Ja(e))
            throw $h(),
            Error(O(418));
        for (; t; )
            Bh(e, t),
            t = Vn(t.nextSibling)
    }
    if (zd(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(O(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            lt = Vn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            lt = null
        }
    } else
        lt = at ? Vn(e.stateNode.nextSibling) : null;
    return !0
}
function $h() {
    for (var e = lt; e; )
        e = Vn(e.nextSibling)
}
function uo() {
    lt = at = null,
    fe = !1
}
function ou(e) {
    _t === null ? _t = [e] : _t.push(e)
}
var j0 = wn.ReactCurrentBatchConfig;
function Mo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(O(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(O(147, e));
            var o = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(i) {
                var l = o.refs;
                i === null ? delete l[s] : l[s] = i
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(O(284));
        if (!n._owner)
            throw Error(O(290, e))
    }
    return e
}
function oi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Id(e) {
    var t = e._init;
    return t(e._payload)
}
function Uh(e) {
    function t(f, h) {
        if (e) {
            var v = f.deletions;
            v === null ? (f.deletions = [h],
            f.flags |= 16) : v.push(h)
        }
    }
    function n(f, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(f, h),
            h = h.sibling;
        return null
    }
    function r(f, h) {
        for (f = new Map; h !== null; )
            h.key !== null ? f.set(h.key, h) : f.set(h.index, h),
            h = h.sibling;
        return f
    }
    function o(f, h) {
        return f = Gn(f, h),
        f.index = 0,
        f.sibling = null,
        f
    }
    function s(f, h, v) {
        return f.index = v,
        e ? (v = f.alternate,
        v !== null ? (v = v.index,
        v < h ? (f.flags |= 2,
        h) : v) : (f.flags |= 2,
        h)) : (f.flags |= 1048576,
        h)
    }
    function i(f) {
        return e && f.alternate === null && (f.flags |= 2),
        f
    }
    function l(f, h, v, C) {
        return h === null || h.tag !== 6 ? (h = ma(v, f.mode, C),
        h.return = f,
        h) : (h = o(h, v),
        h.return = f,
        h)
    }
    function a(f, h, v, C) {
        var b = v.type;
        return b === Dr ? u(f, h, v.props.children, C, v.key) : h !== null && (h.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Rn && Id(b) === h.type) ? (C = o(h, v.props),
        C.ref = Mo(f, h, v),
        C.return = f,
        C) : (C = ki(v.type, v.key, v.props, null, f.mode, C),
        C.ref = Mo(f, h, v),
        C.return = f,
        C)
    }
    function c(f, h, v, C) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = ga(v, f.mode, C),
        h.return = f,
        h) : (h = o(h, v.children || []),
        h.return = f,
        h)
    }
    function u(f, h, v, C, b) {
        return h === null || h.tag !== 7 ? (h = wr(v, f.mode, C, b),
        h.return = f,
        h) : (h = o(h, v),
        h.return = f,
        h)
    }
    function d(f, h, v) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = ma("" + h, f.mode, v),
            h.return = f,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case Ks:
                return v = ki(h.type, h.key, h.props, null, f.mode, v),
                v.ref = Mo(f, null, h),
                v.return = f,
                v;
            case Mr:
                return h = ga(h, f.mode, v),
                h.return = f,
                h;
            case Rn:
                var C = h._init;
                return d(f, C(h._payload), v)
            }
            if (Bo(h) || Ro(h))
                return h = wr(h, f.mode, v, null),
                h.return = f,
                h;
            oi(f, h)
        }
        return null
    }
    function m(f, h, v, C) {
        var b = h !== null ? h.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return b !== null ? null : l(f, h, "" + v, C);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Ks:
                return v.key === b ? a(f, h, v, C) : null;
            case Mr:
                return v.key === b ? c(f, h, v, C) : null;
            case Rn:
                return b = v._init,
                m(f, h, b(v._payload), C)
            }
            if (Bo(v) || Ro(v))
                return b !== null ? null : u(f, h, v, C, null);
            oi(f, v)
        }
        return null
    }
    function p(f, h, v, C, b) {
        if (typeof C == "string" && C !== "" || typeof C == "number")
            return f = f.get(v) || null,
            l(h, f, "" + C, b);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
            case Ks:
                return f = f.get(C.key === null ? v : C.key) || null,
                a(h, f, C, b);
            case Mr:
                return f = f.get(C.key === null ? v : C.key) || null,
                c(h, f, C, b);
            case Rn:
                var k = C._init;
                return p(f, h, v, k(C._payload), b)
            }
            if (Bo(C) || Ro(C))
                return f = f.get(v) || null,
                u(h, f, C, b, null);
            oi(h, C)
        }
        return null
    }
    function w(f, h, v, C) {
        for (var b = null, k = null, E = h, P = h = 0, j = null; E !== null && P < v.length; P++) {
            E.index > P ? (j = E,
            E = null) : j = E.sibling;
            var A = m(f, E, v[P], C);
            if (A === null) {
                E === null && (E = j);
                break
            }
            e && E && A.alternate === null && t(f, E),
            h = s(A, h, P),
            k === null ? b = A : k.sibling = A,
            k = A,
            E = j
        }
        if (P === v.length)
            return n(f, E),
            fe && lr(f, P),
            b;
        if (E === null) {
            for (; P < v.length; P++)
                E = d(f, v[P], C),
                E !== null && (h = s(E, h, P),
                k === null ? b = E : k.sibling = E,
                k = E);
            return fe && lr(f, P),
            b
        }
        for (E = r(f, E); P < v.length; P++)
            j = p(E, f, P, v[P], C),
            j !== null && (e && j.alternate !== null && E.delete(j.key === null ? P : j.key),
            h = s(j, h, P),
            k === null ? b = j : k.sibling = j,
            k = j);
        return e && E.forEach(function(z) {
            return t(f, z)
        }),
        fe && lr(f, P),
        b
    }
    function g(f, h, v, C) {
        var b = Ro(v);
        if (typeof b != "function")
            throw Error(O(150));
        if (v = b.call(v),
        v == null)
            throw Error(O(151));
        for (var k = b = null, E = h, P = h = 0, j = null, A = v.next(); E !== null && !A.done; P++,
        A = v.next()) {
            E.index > P ? (j = E,
            E = null) : j = E.sibling;
            var z = m(f, E, A.value, C);
            if (z === null) {
                E === null && (E = j);
                break
            }
            e && E && z.alternate === null && t(f, E),
            h = s(z, h, P),
            k === null ? b = z : k.sibling = z,
            k = z,
            E = j
        }
        if (A.done)
            return n(f, E),
            fe && lr(f, P),
            b;
        if (E === null) {
            for (; !A.done; P++,
            A = v.next())
                A = d(f, A.value, C),
                A !== null && (h = s(A, h, P),
                k === null ? b = A : k.sibling = A,
                k = A);
            return fe && lr(f, P),
            b
        }
        for (E = r(f, E); !A.done; P++,
        A = v.next())
            A = p(E, f, P, A.value, C),
            A !== null && (e && A.alternate !== null && E.delete(A.key === null ? P : A.key),
            h = s(A, h, P),
            k === null ? b = A : k.sibling = A,
            k = A);
        return e && E.forEach(function(D) {
            return t(f, D)
        }),
        fe && lr(f, P),
        b
    }
    function y(f, h, v, C) {
        if (typeof v == "object" && v !== null && v.type === Dr && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Ks:
                e: {
                    for (var b = v.key, k = h; k !== null; ) {
                        if (k.key === b) {
                            if (b = v.type,
                            b === Dr) {
                                if (k.tag === 7) {
                                    n(f, k.sibling),
                                    h = o(k, v.props.children),
                                    h.return = f,
                                    f = h;
                                    break e
                                }
                            } else if (k.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Rn && Id(b) === k.type) {
                                n(f, k.sibling),
                                h = o(k, v.props),
                                h.ref = Mo(f, k, v),
                                h.return = f,
                                f = h;
                                break e
                            }
                            n(f, k);
                            break
                        } else
                            t(f, k);
                        k = k.sibling
                    }
                    v.type === Dr ? (h = wr(v.props.children, f.mode, C, v.key),
                    h.return = f,
                    f = h) : (C = ki(v.type, v.key, v.props, null, f.mode, C),
                    C.ref = Mo(f, h, v),
                    C.return = f,
                    f = C)
                }
                return i(f);
            case Mr:
                e: {
                    for (k = v.key; h !== null; ) {
                        if (h.key === k)
                            if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                                n(f, h.sibling),
                                h = o(h, v.children || []),
                                h.return = f,
                                f = h;
                                break e
                            } else {
                                n(f, h);
                                break
                            }
                        else
                            t(f, h);
                        h = h.sibling
                    }
                    h = ga(v, f.mode, C),
                    h.return = f,
                    f = h
                }
                return i(f);
            case Rn:
                return k = v._init,
                y(f, h, k(v._payload), C)
            }
            if (Bo(v))
                return w(f, h, v, C);
            if (Ro(v))
                return g(f, h, v, C);
            oi(f, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        h !== null && h.tag === 6 ? (n(f, h.sibling),
        h = o(h, v),
        h.return = f,
        f = h) : (n(f, h),
        h = ma(v, f.mode, C),
        h.return = f,
        f = h),
        i(f)) : n(f, h)
    }
    return y
}
var fo = Uh(!0)
  , Wh = Uh(!1)
  , Vi = rr(null)
  , Hi = null
  , Wr = null
  , su = null;
function iu() {
    su = Wr = Hi = null
}
function lu(e) {
    var t = Vi.current;
    de(Vi),
    e._currentValue = t
}
function ec(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Yr(e, t) {
    Hi = e,
    su = Wr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Je = !0),
    e.firstContext = null)
}
function xt(e) {
    var t = e._currentValue;
    if (su !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Wr === null) {
            if (Hi === null)
                throw Error(O(308));
            Wr = e,
            Hi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Wr = Wr.next = e;
    return t
}
var ur = null;
function au(e) {
    ur === null ? ur = [e] : ur.push(e)
}
function Vh(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    au(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    mn(e, r)
}
function mn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var jn = !1;
function cu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Hh(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function fn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Hn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    ee & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        mn(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    au(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    mn(e, n)
}
function wi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Gc(e, n)
    }
}
function Fd(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = i : s = s.next = i,
                n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else
            o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Qi(e, t, n, r) {
    var o = e.updateQueue;
    jn = !1;
    var s = o.firstBaseUpdate
      , i = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l
          , c = a.next;
        a.next = null,
        i === null ? s = c : i.next = c,
        i = a;
        var u = e.alternate;
        u !== null && (u = u.updateQueue,
        l = u.lastBaseUpdate,
        l !== i && (l === null ? u.firstBaseUpdate = c : l.next = c,
        u.lastBaseUpdate = a))
    }
    if (s !== null) {
        var d = o.baseState;
        i = 0,
        u = c = a = null,
        l = s;
        do {
            var m = l.lane
              , p = l.eventTime;
            if ((r & m) === m) {
                u !== null && (u = u.next = {
                    eventTime: p,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var w = e
                      , g = l;
                    switch (m = t,
                    p = n,
                    g.tag) {
                    case 1:
                        if (w = g.payload,
                        typeof w == "function") {
                            d = w.call(p, d, m);
                            break e
                        }
                        d = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = g.payload,
                        m = typeof w == "function" ? w.call(p, d, m) : w,
                        m == null)
                            break e;
                        d = ge({}, d, m);
                        break e;
                    case 2:
                        jn = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                m = o.effects,
                m === null ? o.effects = [l] : m.push(l))
            } else
                p = {
                    eventTime: p,
                    lane: m,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                u === null ? (c = u = p,
                a = d) : u = u.next = p,
                i |= m;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                m = l,
                l = m.next,
                m.next = null,
                o.lastBaseUpdate = m,
                o.shared.pending = null
            }
        } while (!0);
        if (u === null && (a = d),
        o.baseState = a,
        o.firstBaseUpdate = c,
        o.lastBaseUpdate = u,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                i |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            s === null && (o.shared.lanes = 0);
        br |= i,
        e.lanes = i,
        e.memoizedState = d
    }
}
function Bd(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(O(191, o));
                o.call(r)
            }
        }
}
var Ms = {}
  , Zt = rr(Ms)
  , ps = rr(Ms)
  , hs = rr(Ms);
function dr(e) {
    if (e === Ms)
        throw Error(O(174));
    return e
}
function uu(e, t) {
    switch (le(hs, t),
    le(ps, e),
    le(Zt, Ms),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ma(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Ma(t, e)
    }
    de(Zt),
    le(Zt, t)
}
function po() {
    de(Zt),
    de(ps),
    de(hs)
}
function Qh(e) {
    dr(hs.current);
    var t = dr(Zt.current)
      , n = Ma(t, e.type);
    t !== n && (le(ps, e),
    le(Zt, n))
}
function du(e) {
    ps.current === e && (de(Zt),
    de(ps))
}
var pe = rr(0);
function Ki(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var ca = [];
function fu() {
    for (var e = 0; e < ca.length; e++)
        ca[e]._workInProgressVersionPrimary = null;
    ca.length = 0
}
var xi = wn.ReactCurrentDispatcher
  , ua = wn.ReactCurrentBatchConfig
  , Cr = 0
  , me = null
  , Pe = null
  , je = null
  , Gi = !1
  , Yo = !1
  , ms = 0
  , A0 = 0;
function _e() {
    throw Error(O(321))
}
function pu(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Bt(e[n], t[n]))
            return !1;
    return !0
}
function hu(e, t, n, r, o, s) {
    if (Cr = s,
    me = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    xi.current = e === null || e.memoizedState === null ? D0 : _0,
    e = n(r, o),
    Yo) {
        s = 0;
        do {
            if (Yo = !1,
            ms = 0,
            25 <= s)
                throw Error(O(301));
            s += 1,
            je = Pe = null,
            t.updateQueue = null,
            xi.current = z0,
            e = n(r, o)
        } while (Yo)
    }
    if (xi.current = qi,
    t = Pe !== null && Pe.next !== null,
    Cr = 0,
    je = Pe = me = null,
    Gi = !1,
    t)
        throw Error(O(300));
    return e
}
function mu() {
    var e = ms !== 0;
    return ms = 0,
    e
}
function Qt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return je === null ? me.memoizedState = je = e : je = je.next = e,
    je
}
function St() {
    if (Pe === null) {
        var e = me.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Pe.next;
    var t = je === null ? me.memoizedState : je.next;
    if (t !== null)
        je = t,
        Pe = e;
    else {
        if (e === null)
            throw Error(O(310));
        Pe = e,
        e = {
            memoizedState: Pe.memoizedState,
            baseState: Pe.baseState,
            baseQueue: Pe.baseQueue,
            queue: Pe.queue,
            next: null
        },
        je === null ? me.memoizedState = je = e : je = je.next = e
    }
    return je
}
function gs(e, t) {
    return typeof t == "function" ? t(e) : t
}
function da(e) {
    var t = St()
      , n = t.queue;
    if (n === null)
        throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = Pe
      , o = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var i = o.next;
            o.next = s.next,
            s.next = i
        }
        r.baseQueue = o = s,
        n.pending = null
    }
    if (o !== null) {
        s = o.next,
        r = r.baseState;
        var l = i = null
          , a = null
          , c = s;
        do {
            var u = c.lane;
            if ((Cr & u) === u)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var d = {
                    lane: u,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                a === null ? (l = a = d,
                i = r) : a = a.next = d,
                me.lanes |= u,
                br |= u
            }
            c = c.next
        } while (c !== null && c !== s);
        a === null ? i = r : a.next = l,
        Bt(r, t.memoizedState) || (Je = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            s = o.lane,
            me.lanes |= s,
            br |= s,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function fa(e) {
    var t = St()
      , n = t.queue;
    if (n === null)
        throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var i = o = o.next;
        do
            s = e(s, i.action),
            i = i.next;
        while (i !== o);
        Bt(s, t.memoizedState) || (Je = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function Kh() {}
function Gh(e, t) {
    var n = me
      , r = St()
      , o = t()
      , s = !Bt(r.memoizedState, o);
    if (s && (r.memoizedState = o,
    Je = !0),
    r = r.queue,
    gu(Xh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || je !== null && je.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        vs(9, Yh.bind(null, n, r, o, t), void 0, null),
        Ae === null)
            throw Error(O(349));
        Cr & 30 || qh(n, t, o)
    }
    return o
}
function qh(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = me.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    me.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Yh(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Jh(t) && Zh(e)
}
function Xh(e, t, n) {
    return n(function() {
        Jh(t) && Zh(e)
    })
}
function Jh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Bt(e, n)
    } catch {
        return !0
    }
}
function Zh(e) {
    var t = mn(e, 1);
    t !== null && It(t, e, 1, -1)
}
function $d(e) {
    var t = Qt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gs,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = M0.bind(null, me, e),
    [t.memoizedState, e]
}
function vs(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = me.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    me.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function em() {
    return St().memoizedState
}
function Si(e, t, n, r) {
    var o = Qt();
    me.flags |= e,
    o.memoizedState = vs(1 | t, n, void 0, r === void 0 ? null : r)
}
function vl(e, t, n, r) {
    var o = St();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Pe !== null) {
        var i = Pe.memoizedState;
        if (s = i.destroy,
        r !== null && pu(r, i.deps)) {
            o.memoizedState = vs(t, n, s, r);
            return
        }
    }
    me.flags |= e,
    o.memoizedState = vs(1 | t, n, s, r)
}
function Ud(e, t) {
    return Si(8390656, 8, e, t)
}
function gu(e, t) {
    return vl(2048, 8, e, t)
}
function tm(e, t) {
    return vl(4, 2, e, t)
}
function nm(e, t) {
    return vl(4, 4, e, t)
}
function rm(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function om(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    vl(4, 4, rm.bind(null, t, e), n)
}
function vu() {}
function sm(e, t) {
    var n = St();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pu(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function im(e, t) {
    var n = St();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pu(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function lm(e, t, n) {
    return Cr & 21 ? (Bt(n, t) || (n = fh(),
    me.lanes |= n,
    br |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Je = !0),
    e.memoizedState = n)
}
function O0(e, t) {
    var n = oe;
    oe = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = ua.transition;
    ua.transition = {};
    try {
        e(!1),
        t()
    } finally {
        oe = n,
        ua.transition = r
    }
}
function am() {
    return St().memoizedState
}
function L0(e, t, n) {
    var r = Kn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    cm(e))
        um(t, n);
    else if (n = Vh(e, t, n, r),
    n !== null) {
        var o = Qe();
        It(n, e, r, o),
        dm(n, t, r)
    }
}
function M0(e, t, n) {
    var r = Kn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (cm(e))
        um(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var i = t.lastRenderedState
                  , l = s(i, n);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                Bt(l, i)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o,
                    au(t)) : (o.next = a.next,
                    a.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Vh(e, t, o, r),
        n !== null && (o = Qe(),
        It(n, e, r, o),
        dm(n, t, r))
    }
}
function cm(e) {
    var t = e.alternate;
    return e === me || t !== null && t === me
}
function um(e, t) {
    Yo = Gi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function dm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Gc(e, n)
    }
}
var qi = {
    readContext: xt,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useInsertionEffect: _e,
    useLayoutEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useMutableSource: _e,
    useSyncExternalStore: _e,
    useId: _e,
    unstable_isNewReconciler: !1
}
  , D0 = {
    readContext: xt,
    useCallback: function(e, t) {
        return Qt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: xt,
    useEffect: Ud,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Si(4194308, 4, rm.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Si(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Si(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Qt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Qt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = L0.bind(null, me, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Qt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: $d,
    useDebugValue: vu,
    useDeferredValue: function(e) {
        return Qt().memoizedState = e
    },
    useTransition: function() {
        var e = $d(!1)
          , t = e[0];
        return e = O0.bind(null, e[1]),
        Qt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = me
          , o = Qt();
        if (fe) {
            if (n === void 0)
                throw Error(O(407));
            n = n()
        } else {
            if (n = t(),
            Ae === null)
                throw Error(O(349));
            Cr & 30 || qh(r, t, n)
        }
        o.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return o.queue = s,
        Ud(Xh.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        vs(9, Yh.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Qt()
          , t = Ae.identifierPrefix;
        if (fe) {
            var n = dn
              , r = un;
            n = (r & ~(1 << 32 - zt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = ms++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = A0++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , _0 = {
    readContext: xt,
    useCallback: sm,
    useContext: xt,
    useEffect: gu,
    useImperativeHandle: om,
    useInsertionEffect: tm,
    useLayoutEffect: nm,
    useMemo: im,
    useReducer: da,
    useRef: em,
    useState: function() {
        return da(gs)
    },
    useDebugValue: vu,
    useDeferredValue: function(e) {
        var t = St();
        return lm(t, Pe.memoizedState, e)
    },
    useTransition: function() {
        var e = da(gs)[0]
          , t = St().memoizedState;
        return [e, t]
    },
    useMutableSource: Kh,
    useSyncExternalStore: Gh,
    useId: am,
    unstable_isNewReconciler: !1
}
  , z0 = {
    readContext: xt,
    useCallback: sm,
    useContext: xt,
    useEffect: gu,
    useImperativeHandle: om,
    useInsertionEffect: tm,
    useLayoutEffect: nm,
    useMemo: im,
    useReducer: fa,
    useRef: em,
    useState: function() {
        return fa(gs)
    },
    useDebugValue: vu,
    useDeferredValue: function(e) {
        var t = St();
        return Pe === null ? t.memoizedState = e : lm(t, Pe.memoizedState, e)
    },
    useTransition: function() {
        var e = fa(gs)[0]
          , t = St().memoizedState;
        return [e, t]
    },
    useMutableSource: Kh,
    useSyncExternalStore: Gh,
    useId: am,
    unstable_isNewReconciler: !1
};
function At(e, t) {
    if (e && e.defaultProps) {
        t = ge({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function tc(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ge({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var yl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Nr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Qe()
          , o = Kn(e)
          , s = fn(r, o);
        s.payload = t,
        n != null && (s.callback = n),
        t = Hn(e, s, o),
        t !== null && (It(t, e, o, r),
        wi(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Qe()
          , o = Kn(e)
          , s = fn(r, o);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = Hn(e, s, o),
        t !== null && (It(t, e, o, r),
        wi(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Qe()
          , r = Kn(e)
          , o = fn(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Hn(e, o, r),
        t !== null && (It(t, e, r, n),
        wi(t, e, r))
    }
};
function Wd(e, t, n, r, o, s, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !cs(n, r) || !cs(o, s) : !0
}
function fm(e, t, n) {
    var r = !1
      , o = Xn
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = xt(s) : (o = et(t) ? xr : Be.current,
    r = t.contextTypes,
    s = (r = r != null) ? co(e, o) : Xn),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = yl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function Vd(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && yl.enqueueReplaceState(t, t.state, null)
}
function nc(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    cu(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = xt(s) : (s = et(t) ? xr : Be.current,
    o.context = co(e, s)),
    o.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (tc(e, t, s, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && yl.enqueueReplaceState(o, o.state, null),
    Qi(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function ho(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += dy(r),
            r = r.return;
        while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function pa(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function rc(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var I0 = typeof WeakMap == "function" ? WeakMap : Map;
function pm(e, t, n) {
    n = fn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Xi || (Xi = !0,
        pc = r),
        rc(e, t)
    }
    ,
    n
}
function hm(e, t, n) {
    n = fn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            rc(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        rc(e, t),
        typeof r != "function" && (Qn === null ? Qn = new Set([this]) : Qn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function Hd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new I0;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = J0.bind(null, e, t, n),
    t.then(e, e))
}
function Qd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Kd(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = fn(-1, 1),
    t.tag = 2,
    Hn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var F0 = wn.ReactCurrentOwner
  , Je = !1;
function Ve(e, t, n, r) {
    t.child = e === null ? Wh(t, null, n, r) : fo(t, e.child, n, r)
}
function Gd(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return Yr(t, o),
    r = hu(e, t, n, r, s, o),
    n = mu(),
    e !== null && !Je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    gn(e, t, o)) : (fe && n && nu(t),
    t.flags |= 1,
    Ve(e, t, r, o),
    t.child)
}
function qd(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !ku(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        mm(e, t, s, r, o)) : (e = ki(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & o)) {
        var i = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : cs,
        n(i, r) && e.ref === t.ref)
            return gn(e, t, o)
    }
    return t.flags |= 1,
    e = Gn(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function mm(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (cs(s, r) && e.ref === t.ref)
            if (Je = !1,
            t.pendingProps = r = s,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Je = !0);
            else
                return t.lanes = e.lanes,
                gn(e, t, o)
    }
    return oc(e, t, n, r, o)
}
function gm(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            le(Hr, st),
            st |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                le(Hr, st),
                st |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            le(Hr, st),
            st |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        le(Hr, st),
        st |= r;
    return Ve(e, t, o, n),
    t.child
}
function vm(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function oc(e, t, n, r, o) {
    var s = et(n) ? xr : Be.current;
    return s = co(t, s),
    Yr(t, o),
    n = hu(e, t, n, r, s, o),
    r = mu(),
    e !== null && !Je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    gn(e, t, o)) : (fe && r && nu(t),
    t.flags |= 1,
    Ve(e, t, n, o),
    t.child)
}
function Yd(e, t, n, r, o) {
    if (et(n)) {
        var s = !0;
        $i(t)
    } else
        s = !1;
    if (Yr(t, o),
    t.stateNode === null)
        Ci(e, t),
        fm(t, n, r),
        nc(t, n, r, o),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , l = t.memoizedProps;
        i.props = l;
        var a = i.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = xt(c) : (c = et(n) ? xr : Be.current,
        c = co(t, c));
        var u = n.getDerivedStateFromProps
          , d = typeof u == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== r || a !== c) && Vd(t, i, r, c),
        jn = !1;
        var m = t.memoizedState;
        i.state = m,
        Qi(t, r, i, o),
        a = t.memoizedState,
        l !== r || m !== a || Ze.current || jn ? (typeof u == "function" && (tc(t, n, u, r),
        a = t.memoizedState),
        (l = jn || Wd(t, n, l, r, m, a, c)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        i.props = r,
        i.state = a,
        i.context = c,
        r = l) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        Hh(e, t),
        l = t.memoizedProps,
        c = t.type === t.elementType ? l : At(t.type, l),
        i.props = c,
        d = t.pendingProps,
        m = i.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = xt(a) : (a = et(n) ? xr : Be.current,
        a = co(t, a));
        var p = n.getDerivedStateFromProps;
        (u = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== d || m !== a) && Vd(t, i, r, a),
        jn = !1,
        m = t.memoizedState,
        i.state = m,
        Qi(t, r, i, o);
        var w = t.memoizedState;
        l !== d || m !== w || Ze.current || jn ? (typeof p == "function" && (tc(t, n, p, r),
        w = t.memoizedState),
        (c = jn || Wd(t, n, c, r, m, w, a) || !1) ? (u || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, a),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, a)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        i.props = r,
        i.state = w,
        i.context = a,
        r = c) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return sc(e, t, n, r, s, o)
}
function sc(e, t, n, r, o, s) {
    vm(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return o && Dd(t, n, !1),
        gn(e, t, s);
    r = t.stateNode,
    F0.current = t;
    var l = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = fo(t, e.child, null, s),
    t.child = fo(t, null, l, s)) : Ve(e, t, l, s),
    t.memoizedState = r.state,
    o && Dd(t, n, !0),
    t.child
}
function ym(e) {
    var t = e.stateNode;
    t.pendingContext ? Md(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Md(e, t.context, !1),
    uu(e, t.containerInfo)
}
function Xd(e, t, n, r, o) {
    return uo(),
    ou(o),
    t.flags |= 256,
    Ve(e, t, n, r),
    t.child
}
var ic = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function lc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function wm(e, t, n) {
    var r = t.pendingProps, o = pe.current, s = !1, i = (t.flags & 128) !== 0, l;
    if ((l = i) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    le(pe, o & 1),
    e === null)
        return Za(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = i) : s = Sl(i, r, 0, null),
        e = wr(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = lc(n),
        t.memoizedState = ic,
        e) : yu(t, i));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return B0(e, t, i, r, l, o, n);
    if (s) {
        s = r.fallback,
        i = t.mode,
        o = e.child,
        l = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = Gn(o, a),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? s = Gn(l, s) : (s = wr(s, i, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        i = e.child.memoizedState,
        i = i === null ? lc(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        s.memoizedState = i,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = ic,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = Gn(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function yu(e, t) {
    return t = Sl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function si(e, t, n, r) {
    return r !== null && ou(r),
    fo(t, e.child, null, n),
    e = yu(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function B0(e, t, n, r, o, s, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = pa(Error(O(422))),
        si(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        o = t.mode,
        r = Sl({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        s = wr(s, o, i, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && fo(t, e.child, null, i),
        t.child.memoizedState = lc(i),
        t.memoizedState = ic,
        s);
    if (!(t.mode & 1))
        return si(e, t, i, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        s = Error(O(419)),
        r = pa(s, r, void 0),
        si(e, t, i, r)
    }
    if (l = (i & e.childLanes) !== 0,
    Je || l) {
        if (r = Ae,
        r !== null) {
            switch (i & -i) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | i) ? 0 : o,
            o !== 0 && o !== s.retryLane && (s.retryLane = o,
            mn(e, o),
            It(r, e, o, -1))
        }
        return Eu(),
        r = pa(Error(O(421))),
        si(e, t, i, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Z0.bind(null, e),
    o._reactRetry = t,
    null) : (e = s.treeContext,
    lt = Vn(o.nextSibling),
    at = t,
    fe = !0,
    _t = null,
    e !== null && (gt[vt++] = un,
    gt[vt++] = dn,
    gt[vt++] = Sr,
    un = e.id,
    dn = e.overflow,
    Sr = t),
    t = yu(t, r.children),
    t.flags |= 4096,
    t)
}
function Jd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    ec(e.return, t, n)
}
function ha(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = o)
}
function xm(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , s = r.tail;
    if (Ve(e, t, r.children, n),
    r = pe.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Jd(e, n, t);
                else if (e.tag === 19)
                    Jd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (le(pe, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Ki(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            ha(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Ki(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            ha(t, !0, n, null, s);
            break;
        case "together":
            ha(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ci(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function gn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    br |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(O(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Gn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Gn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function $0(e, t, n) {
    switch (t.tag) {
    case 3:
        ym(t),
        uo();
        break;
    case 5:
        Qh(t);
        break;
    case 1:
        et(t.type) && $i(t);
        break;
    case 4:
        uu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        le(Vi, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (le(pe, pe.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? wm(e, t, n) : (le(pe, pe.current & 1),
            e = gn(e, t, n),
            e !== null ? e.sibling : null);
        le(pe, pe.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return xm(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        le(pe, pe.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        gm(e, t, n)
    }
    return gn(e, t, n)
}
var Sm, ac, Cm, bm;
Sm = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
ac = function() {}
;
Cm = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        dr(Zt.current);
        var s = null;
        switch (n) {
        case "input":
            o = ja(e, o),
            r = ja(e, r),
            s = [];
            break;
        case "select":
            o = ge({}, o, {
                value: void 0
            }),
            r = ge({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            o = La(e, o),
            r = La(e, r),
            s = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Fi)
        }
        Da(n, r);
        var i;
        n = null;
        for (c in o)
            if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
                if (c === "style") {
                    var l = o[c];
                    for (i in l)
                        l.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (ns.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
        for (c in r) {
            var a = r[c];
            if (l = o != null ? o[c] : void 0,
            r.hasOwnProperty(c) && a !== l && (a != null || l != null))
                if (c === "style")
                    if (l) {
                        for (i in l)
                            !l.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in a)
                            a.hasOwnProperty(i) && l[i] !== a[i] && (n || (n = {}),
                            n[i] = a[i])
                    } else
                        n || (s || (s = []),
                        s.push(c, n)),
                        n = a;
                else
                    c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (s = s || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (ns.hasOwnProperty(c) ? (a != null && c === "onScroll" && ue("scroll", e),
                    s || l === a || (s = [])) : (s = s || []).push(c, a))
        }
        n && (s = s || []).push("style", n);
        var c = s;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
bm = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Do(e, t) {
    if (!fe)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function U0(e, t, n) {
    var r = t.pendingProps;
    switch (ru(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ze(t),
        null;
    case 1:
        return et(t.type) && Bi(),
        ze(t),
        null;
    case 3:
        return r = t.stateNode,
        po(),
        de(Ze),
        de(Be),
        fu(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (ri(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        _t !== null && (gc(_t),
        _t = null))),
        ac(e, t),
        ze(t),
        null;
    case 5:
        du(t);
        var o = dr(hs.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Cm(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(O(166));
                return ze(t),
                null
            }
            if (e = dr(Zt.current),
            ri(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[Yt] = t,
                r[fs] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ue("cancel", r),
                    ue("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ue("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Uo.length; o++)
                        ue(Uo[o], r);
                    break;
                case "source":
                    ue("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ue("error", r),
                    ue("load", r);
                    break;
                case "details":
                    ue("toggle", r);
                    break;
                case "input":
                    ld(r, s),
                    ue("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    ue("invalid", r);
                    break;
                case "textarea":
                    cd(r, s),
                    ue("invalid", r)
                }
                Da(n, s),
                o = null;
                for (var i in s)
                    if (s.hasOwnProperty(i)) {
                        var l = s[i];
                        i === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && ni(r.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && ni(r.textContent, l, e),
                        o = ["children", "" + l]) : ns.hasOwnProperty(i) && l != null && i === "onScroll" && ue("scroll", r)
                    }
                switch (n) {
                case "input":
                    Gs(r),
                    ad(r, s, !0);
                    break;
                case "textarea":
                    Gs(r),
                    ud(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = Fi)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Xp(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[Yt] = t,
                e[fs] = r,
                Sm(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = _a(n, r),
                    n) {
                    case "dialog":
                        ue("cancel", e),
                        ue("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ue("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Uo.length; o++)
                            ue(Uo[o], e);
                        o = r;
                        break;
                    case "source":
                        ue("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ue("error", e),
                        ue("load", e),
                        o = r;
                        break;
                    case "details":
                        ue("toggle", e),
                        o = r;
                        break;
                    case "input":
                        ld(e, r),
                        o = ja(e, r),
                        ue("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = ge({}, r, {
                            value: void 0
                        }),
                        ue("invalid", e);
                        break;
                    case "textarea":
                        cd(e, r),
                        o = La(e, r),
                        ue("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Da(n, o),
                    l = o;
                    for (s in l)
                        if (l.hasOwnProperty(s)) {
                            var a = l[s];
                            s === "style" ? eh(e, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Jp(e, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && rs(e, a) : typeof a == "number" && rs(e, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ns.hasOwnProperty(s) ? a != null && s === "onScroll" && ue("scroll", e) : a != null && Uc(e, s, a, i))
                        }
                    switch (n) {
                    case "input":
                        Gs(e),
                        ad(e, r, !1);
                        break;
                    case "textarea":
                        Gs(e),
                        ud(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Yn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Qr(e, !!r.multiple, s, !1) : r.defaultValue != null && Qr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Fi)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ze(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            bm(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(O(166));
            if (n = dr(hs.current),
            dr(Zt.current),
            ri(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Yt] = t,
                (s = r.nodeValue !== n) && (e = at,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ni(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ni(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Yt] = t,
                t.stateNode = r
        }
        return ze(t),
        null;
    case 13:
        if (de(pe),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (fe && lt !== null && t.mode & 1 && !(t.flags & 128))
                $h(),
                uo(),
                t.flags |= 98560,
                s = !1;
            else if (s = ri(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(O(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(O(317));
                    s[Yt] = t
                } else
                    uo(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ze(t),
                s = !1
            } else
                _t !== null && (gc(_t),
                _t = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || pe.current & 1 ? Ne === 0 && (Ne = 3) : Eu())),
        t.updateQueue !== null && (t.flags |= 4),
        ze(t),
        null);
    case 4:
        return po(),
        ac(e, t),
        e === null && us(t.stateNode.containerInfo),
        ze(t),
        null;
    case 10:
        return lu(t.type._context),
        ze(t),
        null;
    case 17:
        return et(t.type) && Bi(),
        ze(t),
        null;
    case 19:
        if (de(pe),
        s = t.memoizedState,
        s === null)
            return ze(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = s.rendering,
        i === null)
            if (r)
                Do(s, !1);
            else {
                if (Ne !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = Ki(e),
                        i !== null) {
                            for (t.flags |= 128,
                            Do(s, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                i = s.alternate,
                                i === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = i.childLanes,
                                s.lanes = i.lanes,
                                s.child = i.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = i.memoizedProps,
                                s.memoizedState = i.memoizedState,
                                s.updateQueue = i.updateQueue,
                                s.type = i.type,
                                e = i.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return le(pe, pe.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && Se() > mo && (t.flags |= 128,
                r = !0,
                Do(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Ki(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Do(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !i.alternate && !fe)
                        return ze(t),
                        null
                } else
                    2 * Se() - s.renderingStartTime > mo && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Do(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = s.last,
            n !== null ? n.sibling = i : t.child = i,
            s.last = i)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = Se(),
        t.sibling = null,
        n = pe.current,
        le(pe, r ? n & 1 | 2 : n & 1),
        t) : (ze(t),
        null);
    case 22:
    case 23:
        return bu(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? st & 1073741824 && (ze(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(O(156, t.tag))
}
function W0(e, t) {
    switch (ru(t),
    t.tag) {
    case 1:
        return et(t.type) && Bi(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return po(),
        de(Ze),
        de(Be),
        fu(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return du(t),
        null;
    case 13:
        if (de(pe),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(O(340));
            uo()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return de(pe),
        null;
    case 4:
        return po(),
        null;
    case 10:
        return lu(t.type._context),
        null;
    case 22:
    case 23:
        return bu(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ii = !1
  , Fe = !1
  , V0 = typeof WeakSet == "function" ? WeakSet : Set
  , I = null;
function Vr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                xe(e, t, r)
            }
        else
            n.current = null
}
function cc(e, t, n) {
    try {
        n()
    } catch (r) {
        xe(e, t, r)
    }
}
var Zd = !1;
function H0(e, t) {
    if (Qa = _i,
    e = Nh(),
    tu(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , l = -1
                      , a = -1
                      , c = 0
                      , u = 0
                      , d = e
                      , m = null;
                    t: for (; ; ) {
                        for (var p; d !== n || o !== 0 && d.nodeType !== 3 || (l = i + o),
                        d !== s || r !== 0 && d.nodeType !== 3 || (a = i + r),
                        d.nodeType === 3 && (i += d.nodeValue.length),
                        (p = d.firstChild) !== null; )
                            m = d,
                            d = p;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (m === n && ++c === o && (l = i),
                            m === s && ++u === r && (a = i),
                            (p = d.nextSibling) !== null)
                                break;
                            d = m,
                            m = d.parentNode
                        }
                        d = p
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ka = {
        focusedElem: e,
        selectionRange: n
    },
    _i = !1,
    I = t; I !== null; )
        if (t = I,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            I = e;
        else
            for (; I !== null; ) {
                t = I;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var g = w.memoizedProps
                                  , y = w.memoizedState
                                  , f = t.stateNode
                                  , h = f.getSnapshotBeforeUpdate(t.elementType === t.type ? g : At(t.type, g), y);
                                f.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(O(163))
                        }
                } catch (C) {
                    xe(t, t.return, C)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    I = e;
                    break
                }
                I = t.return
            }
    return w = Zd,
    Zd = !1,
    w
}
function Xo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0,
                s !== void 0 && cc(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}
function wl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function uc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Em(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Em(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Yt],
    delete t[fs],
    delete t[Ya],
    delete t[T0],
    delete t[N0])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function km(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function ef(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || km(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function dc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Fi));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (dc(e, t, n),
        e = e.sibling; e !== null; )
            dc(e, t, n),
            e = e.sibling
}
function fc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (fc(e, t, n),
        e = e.sibling; e !== null; )
            fc(e, t, n),
            e = e.sibling
}
var Oe = null
  , Dt = !1;
function kn(e, t, n) {
    for (n = n.child; n !== null; )
        Pm(e, t, n),
        n = n.sibling
}
function Pm(e, t, n) {
    if (Jt && typeof Jt.onCommitFiberUnmount == "function")
        try {
            Jt.onCommitFiberUnmount(dl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Fe || Vr(n, t);
    case 6:
        var r = Oe
          , o = Dt;
        Oe = null,
        kn(e, t, n),
        Oe = r,
        Dt = o,
        Oe !== null && (Dt ? (e = Oe,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Oe.removeChild(n.stateNode));
        break;
    case 18:
        Oe !== null && (Dt ? (e = Oe,
        n = n.stateNode,
        e.nodeType === 8 ? la(e.parentNode, n) : e.nodeType === 1 && la(e, n),
        ls(e)) : la(Oe, n.stateNode));
        break;
    case 4:
        r = Oe,
        o = Dt,
        Oe = n.stateNode.containerInfo,
        Dt = !0,
        kn(e, t, n),
        Oe = r,
        Dt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Fe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var s = o
                  , i = s.destroy;
                s = s.tag,
                i !== void 0 && (s & 2 || s & 4) && cc(n, t, i),
                o = o.next
            } while (o !== r)
        }
        kn(e, t, n);
        break;
    case 1:
        if (!Fe && (Vr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                xe(n, t, l)
            }
        kn(e, t, n);
        break;
    case 21:
        kn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Fe = (r = Fe) || n.memoizedState !== null,
        kn(e, t, n),
        Fe = r) : kn(e, t, n);
        break;
    default:
        kn(e, t, n)
    }
}
function tf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new V0),
        t.forEach(function(r) {
            var o = ew.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function Rt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e
                  , i = t
                  , l = i;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        Oe = l.stateNode,
                        Dt = !1;
                        break e;
                    case 3:
                        Oe = l.stateNode.containerInfo,
                        Dt = !0;
                        break e;
                    case 4:
                        Oe = l.stateNode.containerInfo,
                        Dt = !0;
                        break e
                    }
                    l = l.return
                }
                if (Oe === null)
                    throw Error(O(160));
                Pm(s, i, o),
                Oe = null,
                Dt = !1;
                var a = o.alternate;
                a !== null && (a.return = null),
                o.return = null
            } catch (c) {
                xe(o, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Tm(t, e),
            t = t.sibling
}
function Tm(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Rt(t, e),
        Ht(e),
        r & 4) {
            try {
                Xo(3, e, e.return),
                wl(3, e)
            } catch (g) {
                xe(e, e.return, g)
            }
            try {
                Xo(5, e, e.return)
            } catch (g) {
                xe(e, e.return, g)
            }
        }
        break;
    case 1:
        Rt(t, e),
        Ht(e),
        r & 512 && n !== null && Vr(n, n.return);
        break;
    case 5:
        if (Rt(t, e),
        Ht(e),
        r & 512 && n !== null && Vr(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                rs(o, "")
            } catch (g) {
                xe(e, e.return, g)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var s = e.memoizedProps
              , i = n !== null ? n.memoizedProps : s
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && s.type === "radio" && s.name != null && qp(o, s),
                    _a(l, i);
                    var c = _a(l, s);
                    for (i = 0; i < a.length; i += 2) {
                        var u = a[i]
                          , d = a[i + 1];
                        u === "style" ? eh(o, d) : u === "dangerouslySetInnerHTML" ? Jp(o, d) : u === "children" ? rs(o, d) : Uc(o, u, d, c)
                    }
                    switch (l) {
                    case "input":
                        Aa(o, s);
                        break;
                    case "textarea":
                        Yp(o, s);
                        break;
                    case "select":
                        var m = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!s.multiple;
                        var p = s.value;
                        p != null ? Qr(o, !!s.multiple, p, !1) : m !== !!s.multiple && (s.defaultValue != null ? Qr(o, !!s.multiple, s.defaultValue, !0) : Qr(o, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    o[fs] = s
                } catch (g) {
                    xe(e, e.return, g)
                }
        }
        break;
    case 6:
        if (Rt(t, e),
        Ht(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(O(162));
            o = e.stateNode,
            s = e.memoizedProps;
            try {
                o.nodeValue = s
            } catch (g) {
                xe(e, e.return, g)
            }
        }
        break;
    case 3:
        if (Rt(t, e),
        Ht(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                ls(t.containerInfo)
            } catch (g) {
                xe(e, e.return, g)
            }
        break;
    case 4:
        Rt(t, e),
        Ht(e);
        break;
    case 13:
        Rt(t, e),
        Ht(e),
        o = e.child,
        o.flags & 8192 && (s = o.memoizedState !== null,
        o.stateNode.isHidden = s,
        !s || o.alternate !== null && o.alternate.memoizedState !== null || (Su = Se())),
        r & 4 && tf(e);
        break;
    case 22:
        if (u = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Fe = (c = Fe) || u,
        Rt(t, e),
        Fe = c) : Rt(t, e),
        Ht(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !u && e.mode & 1)
                for (I = e,
                u = e.child; u !== null; ) {
                    for (d = I = u; I !== null; ) {
                        switch (m = I,
                        p = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Xo(4, m, m.return);
                            break;
                        case 1:
                            Vr(m, m.return);
                            var w = m.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (g) {
                                    xe(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            Vr(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                rf(d);
                                continue
                            }
                        }
                        p !== null ? (p.return = m,
                        I = p) : rf(d)
                    }
                    u = u.sibling
                }
            e: for (u = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (u === null) {
                        u = d;
                        try {
                            o = d.stateNode,
                            c ? (s = o.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = d.stateNode,
                            a = d.memoizedProps.style,
                            i = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = Zp("display", i))
                        } catch (g) {
                            xe(e, e.return, g)
                        }
                    }
                } else if (d.tag === 6) {
                    if (u === null)
                        try {
                            d.stateNode.nodeValue = c ? "" : d.memoizedProps
                        } catch (g) {
                            xe(e, e.return, g)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    u === d && (u = null),
                    d = d.return
                }
                u === d && (u = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        Rt(t, e),
        Ht(e),
        r & 4 && tf(e);
        break;
    case 21:
        break;
    default:
        Rt(t, e),
        Ht(e)
    }
}
function Ht(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (km(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(O(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (rs(o, ""),
                r.flags &= -33);
                var s = ef(e);
                fc(e, s, o);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , l = ef(e);
                dc(e, l, i);
                break;
            default:
                throw Error(O(161))
            }
        } catch (a) {
            xe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Q0(e, t, n) {
    I = e,
    Nm(e)
}
function Nm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null; ) {
        var o = I
          , s = o.child;
        if (o.tag === 22 && r) {
            var i = o.memoizedState !== null || ii;
            if (!i) {
                var l = o.alternate
                  , a = l !== null && l.memoizedState !== null || Fe;
                l = ii;
                var c = Fe;
                if (ii = i,
                (Fe = a) && !c)
                    for (I = o; I !== null; )
                        i = I,
                        a = i.child,
                        i.tag === 22 && i.memoizedState !== null ? of(o) : a !== null ? (a.return = i,
                        I = a) : of(o);
                for (; s !== null; )
                    I = s,
                    Nm(s),
                    s = s.sibling;
                I = o,
                ii = l,
                Fe = c
            }
            nf(e)
        } else
            o.subtreeFlags & 8772 && s !== null ? (s.return = o,
            I = s) : nf(e)
    }
}
function nf(e) {
    for (; I !== null; ) {
        var t = I;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Fe || wl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Fe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : At(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && Bd(t, s, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Bd(t, i, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var u = c.memoizedState;
                                if (u !== null) {
                                    var d = u.dehydrated;
                                    d !== null && ls(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(O(163))
                    }
                Fe || t.flags & 512 && uc(t)
            } catch (m) {
                xe(t, t.return, m)
            }
        }
        if (t === e) {
            I = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            I = n;
            break
        }
        I = t.return
    }
}
function rf(e) {
    for (; I !== null; ) {
        var t = I;
        if (t === e) {
            I = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            I = n;
            break
        }
        I = t.return
    }
}
function of(e) {
    for (; I !== null; ) {
        var t = I;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    wl(4, t)
                } catch (a) {
                    xe(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        xe(t, o, a)
                    }
                }
                var s = t.return;
                try {
                    uc(t)
                } catch (a) {
                    xe(t, s, a)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    uc(t)
                } catch (a) {
                    xe(t, i, a)
                }
            }
        } catch (a) {
            xe(t, t.return, a)
        }
        if (t === e) {
            I = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            I = l;
            break
        }
        I = t.return
    }
}
var K0 = Math.ceil
  , Yi = wn.ReactCurrentDispatcher
  , wu = wn.ReactCurrentOwner
  , wt = wn.ReactCurrentBatchConfig
  , ee = 0
  , Ae = null
  , be = null
  , Le = 0
  , st = 0
  , Hr = rr(0)
  , Ne = 0
  , ys = null
  , br = 0
  , xl = 0
  , xu = 0
  , Jo = null
  , Xe = null
  , Su = 0
  , mo = 1 / 0
  , ln = null
  , Xi = !1
  , pc = null
  , Qn = null
  , li = !1
  , Fn = null
  , Ji = 0
  , Zo = 0
  , hc = null
  , bi = -1
  , Ei = 0;
function Qe() {
    return ee & 6 ? Se() : bi !== -1 ? bi : bi = Se()
}
function Kn(e) {
    return e.mode & 1 ? ee & 2 && Le !== 0 ? Le & -Le : j0.transition !== null ? (Ei === 0 && (Ei = fh()),
    Ei) : (e = oe,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : wh(e.type)),
    e) : 1
}
function It(e, t, n, r) {
    if (50 < Zo)
        throw Zo = 0,
        hc = null,
        Error(O(185));
    As(e, n, r),
    (!(ee & 2) || e !== Ae) && (e === Ae && (!(ee & 2) && (xl |= n),
    Ne === 4 && On(e, Le)),
    tt(e, r),
    n === 1 && ee === 0 && !(t.mode & 1) && (mo = Se() + 500,
    gl && or()))
}
function tt(e, t) {
    var n = e.callbackNode;
    jy(e, t);
    var r = Di(e, e === Ae ? Le : 0);
    if (r === 0)
        n !== null && pd(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && pd(n),
        t === 1)
            e.tag === 0 ? R0(sf.bind(null, e)) : Ih(sf.bind(null, e)),
            k0(function() {
                !(ee & 6) && or()
            }),
            n = null;
        else {
            switch (ph(r)) {
            case 1:
                n = Kc;
                break;
            case 4:
                n = uh;
                break;
            case 16:
                n = Mi;
                break;
            case 536870912:
                n = dh;
                break;
            default:
                n = Mi
            }
            n = _m(n, Rm.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Rm(e, t) {
    if (bi = -1,
    Ei = 0,
    ee & 6)
        throw Error(O(327));
    var n = e.callbackNode;
    if (Xr() && e.callbackNode !== n)
        return null;
    var r = Di(e, e === Ae ? Le : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Zi(e, r);
    else {
        t = r;
        var o = ee;
        ee |= 2;
        var s = Am();
        (Ae !== e || Le !== t) && (ln = null,
        mo = Se() + 500,
        yr(e, t));
        do
            try {
                Y0();
                break
            } catch (l) {
                jm(e, l)
            }
        while (!0);
        iu(),
        Yi.current = s,
        ee = o,
        be !== null ? t = 0 : (Ae = null,
        Le = 0,
        t = Ne)
    }
    if (t !== 0) {
        if (t === 2 && (o = $a(e),
        o !== 0 && (r = o,
        t = mc(e, o))),
        t === 1)
            throw n = ys,
            yr(e, 0),
            On(e, r),
            tt(e, Se()),
            n;
        if (t === 6)
            On(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !G0(o) && (t = Zi(e, r),
            t === 2 && (s = $a(e),
            s !== 0 && (r = s,
            t = mc(e, s))),
            t === 1))
                throw n = ys,
                yr(e, 0),
                On(e, r),
                tt(e, Se()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(O(345));
            case 2:
                ar(e, Xe, ln);
                break;
            case 3:
                if (On(e, r),
                (r & 130023424) === r && (t = Su + 500 - Se(),
                10 < t)) {
                    if (Di(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Qe(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = qa(ar.bind(null, e, Xe, ln), t);
                    break
                }
                ar(e, Xe, ln);
                break;
            case 4:
                if (On(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var i = 31 - zt(r);
                    s = 1 << i,
                    i = t[i],
                    i > o && (o = i),
                    r &= ~s
                }
                if (r = o,
                r = Se() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * K0(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = qa(ar.bind(null, e, Xe, ln), r);
                    break
                }
                ar(e, Xe, ln);
                break;
            case 5:
                ar(e, Xe, ln);
                break;
            default:
                throw Error(O(329))
            }
        }
    }
    return tt(e, Se()),
    e.callbackNode === n ? Rm.bind(null, e) : null
}
function mc(e, t) {
    var n = Jo;
    return e.current.memoizedState.isDehydrated && (yr(e, t).flags |= 256),
    e = Zi(e, t),
    e !== 2 && (t = Xe,
    Xe = n,
    t !== null && gc(t)),
    e
}
function gc(e) {
    Xe === null ? Xe = e : Xe.push.apply(Xe, e)
}
function G0(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Bt(s(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function On(e, t) {
    for (t &= ~xu,
    t &= ~xl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - zt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function sf(e) {
    if (ee & 6)
        throw Error(O(327));
    Xr();
    var t = Di(e, 0);
    if (!(t & 1))
        return tt(e, Se()),
        null;
    var n = Zi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = $a(e);
        r !== 0 && (t = r,
        n = mc(e, r))
    }
    if (n === 1)
        throw n = ys,
        yr(e, 0),
        On(e, t),
        tt(e, Se()),
        n;
    if (n === 6)
        throw Error(O(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    ar(e, Xe, ln),
    tt(e, Se()),
    null
}
function Cu(e, t) {
    var n = ee;
    ee |= 1;
    try {
        return e(t)
    } finally {
        ee = n,
        ee === 0 && (mo = Se() + 500,
        gl && or())
    }
}
function Er(e) {
    Fn !== null && Fn.tag === 0 && !(ee & 6) && Xr();
    var t = ee;
    ee |= 1;
    var n = wt.transition
      , r = oe;
    try {
        if (wt.transition = null,
        oe = 1,
        e)
            return e()
    } finally {
        oe = r,
        wt.transition = n,
        ee = t,
        !(ee & 6) && or()
    }
}
function bu() {
    st = Hr.current,
    de(Hr)
}
function yr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    E0(n)),
    be !== null)
        for (n = be.return; n !== null; ) {
            var r = n;
            switch (ru(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Bi();
                break;
            case 3:
                po(),
                de(Ze),
                de(Be),
                fu();
                break;
            case 5:
                du(r);
                break;
            case 4:
                po();
                break;
            case 13:
                de(pe);
                break;
            case 19:
                de(pe);
                break;
            case 10:
                lu(r.type._context);
                break;
            case 22:
            case 23:
                bu()
            }
            n = n.return
        }
    if (Ae = e,
    be = e = Gn(e.current, null),
    Le = st = t,
    Ne = 0,
    ys = null,
    xu = xl = br = 0,
    Xe = Jo = null,
    ur !== null) {
        for (t = 0; t < ur.length; t++)
            if (n = ur[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , s = n.pending;
                if (s !== null) {
                    var i = s.next;
                    s.next = o,
                    r.next = i
                }
                n.pending = r
            }
        ur = null
    }
    return e
}
function jm(e, t) {
    do {
        var n = be;
        try {
            if (iu(),
            xi.current = qi,
            Gi) {
                for (var r = me.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                Gi = !1
            }
            if (Cr = 0,
            je = Pe = me = null,
            Yo = !1,
            ms = 0,
            wu.current = null,
            n === null || n.return === null) {
                Ne = 1,
                ys = t,
                be = null;
                break
            }
            e: {
                var s = e
                  , i = n.return
                  , l = n
                  , a = t;
                if (t = Le,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var c = a
                      , u = l
                      , d = u.tag;
                    if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var m = u.alternate;
                        m ? (u.updateQueue = m.updateQueue,
                        u.memoizedState = m.memoizedState,
                        u.lanes = m.lanes) : (u.updateQueue = null,
                        u.memoizedState = null)
                    }
                    var p = Qd(i);
                    if (p !== null) {
                        p.flags &= -257,
                        Kd(p, i, l, s, t),
                        p.mode & 1 && Hd(s, c, t),
                        t = p,
                        a = c;
                        var w = t.updateQueue;
                        if (w === null) {
                            var g = new Set;
                            g.add(a),
                            t.updateQueue = g
                        } else
                            w.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Hd(s, c, t),
                            Eu();
                            break e
                        }
                        a = Error(O(426))
                    }
                } else if (fe && l.mode & 1) {
                    var y = Qd(i);
                    if (y !== null) {
                        !(y.flags & 65536) && (y.flags |= 256),
                        Kd(y, i, l, s, t),
                        ou(ho(a, l));
                        break e
                    }
                }
                s = a = ho(a, l),
                Ne !== 4 && (Ne = 2),
                Jo === null ? Jo = [s] : Jo.push(s),
                s = i;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var f = pm(s, a, t);
                        Fd(s, f);
                        break e;
                    case 1:
                        l = a;
                        var h = s.type
                          , v = s.stateNode;
                        if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Qn === null || !Qn.has(v)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var C = hm(s, l, t);
                            Fd(s, C);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            Lm(n)
        } catch (b) {
            t = b,
            be === n && n !== null && (be = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Am() {
    var e = Yi.current;
    return Yi.current = qi,
    e === null ? qi : e
}
function Eu() {
    (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4),
    Ae === null || !(br & 268435455) && !(xl & 268435455) || On(Ae, Le)
}
function Zi(e, t) {
    var n = ee;
    ee |= 2;
    var r = Am();
    (Ae !== e || Le !== t) && (ln = null,
    yr(e, t));
    do
        try {
            q0();
            break
        } catch (o) {
            jm(e, o)
        }
    while (!0);
    if (iu(),
    ee = n,
    Yi.current = r,
    be !== null)
        throw Error(O(261));
    return Ae = null,
    Le = 0,
    Ne
}
function q0() {
    for (; be !== null; )
        Om(be)
}
function Y0() {
    for (; be !== null && !Sy(); )
        Om(be)
}
function Om(e) {
    var t = Dm(e.alternate, e, st);
    e.memoizedProps = e.pendingProps,
    t === null ? Lm(e) : be = t,
    wu.current = null
}
function Lm(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = W0(n, t),
            n !== null) {
                n.flags &= 32767,
                be = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Ne = 6,
                be = null;
                return
            }
        } else if (n = U0(n, t, st),
        n !== null) {
            be = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            be = t;
            return
        }
        be = t = e
    } while (t !== null);
    Ne === 0 && (Ne = 5)
}
function ar(e, t, n) {
    var r = oe
      , o = wt.transition;
    try {
        wt.transition = null,
        oe = 1,
        X0(e, t, n, r)
    } finally {
        wt.transition = o,
        oe = r
    }
    return null
}
function X0(e, t, n, r) {
    do
        Xr();
    while (Fn !== null);
    if (ee & 6)
        throw Error(O(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(O(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (Ay(e, s),
    e === Ae && (be = Ae = null,
    Le = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || li || (li = !0,
    _m(Mi, function() {
        return Xr(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = wt.transition,
        wt.transition = null;
        var i = oe;
        oe = 1;
        var l = ee;
        ee |= 4,
        wu.current = null,
        H0(e, n),
        Tm(n, e),
        v0(Ka),
        _i = !!Qa,
        Ka = Qa = null,
        e.current = n,
        Q0(n),
        Cy(),
        ee = l,
        oe = i,
        wt.transition = s
    } else
        e.current = n;
    if (li && (li = !1,
    Fn = e,
    Ji = o),
    s = e.pendingLanes,
    s === 0 && (Qn = null),
    ky(n.stateNode),
    tt(e, Se()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (Xi)
        throw Xi = !1,
        e = pc,
        pc = null,
        e;
    return Ji & 1 && e.tag !== 0 && Xr(),
    s = e.pendingLanes,
    s & 1 ? e === hc ? Zo++ : (Zo = 0,
    hc = e) : Zo = 0,
    or(),
    null
}
function Xr() {
    if (Fn !== null) {
        var e = ph(Ji)
          , t = wt.transition
          , n = oe;
        try {
            if (wt.transition = null,
            oe = 16 > e ? 16 : e,
            Fn === null)
                var r = !1;
            else {
                if (e = Fn,
                Fn = null,
                Ji = 0,
                ee & 6)
                    throw Error(O(331));
                var o = ee;
                for (ee |= 4,
                I = e.current; I !== null; ) {
                    var s = I
                      , i = s.child;
                    if (I.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var c = l[a];
                                for (I = c; I !== null; ) {
                                    var u = I;
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Xo(8, u, s)
                                    }
                                    var d = u.child;
                                    if (d !== null)
                                        d.return = u,
                                        I = d;
                                    else
                                        for (; I !== null; ) {
                                            u = I;
                                            var m = u.sibling
                                              , p = u.return;
                                            if (Em(u),
                                            u === c) {
                                                I = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = p,
                                                I = m;
                                                break
                                            }
                                            I = p
                                        }
                                }
                            }
                            var w = s.alternate;
                            if (w !== null) {
                                var g = w.child;
                                if (g !== null) {
                                    w.child = null;
                                    do {
                                        var y = g.sibling;
                                        g.sibling = null,
                                        g = y
                                    } while (g !== null)
                                }
                            }
                            I = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && i !== null)
                        i.return = s,
                        I = i;
                    else
                        e: for (; I !== null; ) {
                            if (s = I,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Xo(9, s, s.return)
                                }
                            var f = s.sibling;
                            if (f !== null) {
                                f.return = s.return,
                                I = f;
                                break e
                            }
                            I = s.return
                        }
                }
                var h = e.current;
                for (I = h; I !== null; ) {
                    i = I;
                    var v = i.child;
                    if (i.subtreeFlags & 2064 && v !== null)
                        v.return = i,
                        I = v;
                    else
                        e: for (i = h; I !== null; ) {
                            if (l = I,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        wl(9, l)
                                    }
                                } catch (b) {
                                    xe(l, l.return, b)
                                }
                            if (l === i) {
                                I = null;
                                break e
                            }
                            var C = l.sibling;
                            if (C !== null) {
                                C.return = l.return,
                                I = C;
                                break e
                            }
                            I = l.return
                        }
                }
                if (ee = o,
                or(),
                Jt && typeof Jt.onPostCommitFiberRoot == "function")
                    try {
                        Jt.onPostCommitFiberRoot(dl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            oe = n,
            wt.transition = t
        }
    }
    return !1
}
function lf(e, t, n) {
    t = ho(n, t),
    t = pm(e, t, 1),
    e = Hn(e, t, 1),
    t = Qe(),
    e !== null && (As(e, 1, t),
    tt(e, t))
}
function xe(e, t, n) {
    if (e.tag === 3)
        lf(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                lf(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Qn === null || !Qn.has(r))) {
                    e = ho(n, e),
                    e = hm(t, e, 1),
                    t = Hn(t, e, 1),
                    e = Qe(),
                    t !== null && (As(t, 1, e),
                    tt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function J0(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Qe(),
    e.pingedLanes |= e.suspendedLanes & n,
    Ae === e && (Le & n) === n && (Ne === 4 || Ne === 3 && (Le & 130023424) === Le && 500 > Se() - Su ? yr(e, 0) : xu |= n),
    tt(e, t)
}
function Mm(e, t) {
    t === 0 && (e.mode & 1 ? (t = Xs,
    Xs <<= 1,
    !(Xs & 130023424) && (Xs = 4194304)) : t = 1);
    var n = Qe();
    e = mn(e, t),
    e !== null && (As(e, t, n),
    tt(e, n))
}
function Z0(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Mm(e, n)
}
function ew(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(O(314))
    }
    r !== null && r.delete(t),
    Mm(e, n)
}
var Dm;
Dm = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ze.current)
            Je = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Je = !1,
                $0(e, t, n);
            Je = !!(e.flags & 131072)
        }
    else
        Je = !1,
        fe && t.flags & 1048576 && Fh(t, Wi, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ci(e, t),
        e = t.pendingProps;
        var o = co(t, Be.current);
        Yr(t, n),
        o = hu(null, t, r, e, o, n);
        var s = mu();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        et(r) ? (s = !0,
        $i(t)) : s = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        cu(t),
        o.updater = yl,
        t.stateNode = o,
        o._reactInternals = t,
        nc(t, r, e, n),
        t = sc(null, t, r, !0, s, n)) : (t.tag = 0,
        fe && s && nu(t),
        Ve(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ci(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = nw(r),
            e = At(r, e),
            o) {
            case 0:
                t = oc(null, t, r, e, n);
                break e;
            case 1:
                t = Yd(null, t, r, e, n);
                break e;
            case 11:
                t = Gd(null, t, r, e, n);
                break e;
            case 14:
                t = qd(null, t, r, At(r.type, e), n);
                break e
            }
            throw Error(O(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : At(r, o),
        oc(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : At(r, o),
        Yd(e, t, r, o, n);
    case 3:
        e: {
            if (ym(t),
            e === null)
                throw Error(O(387));
            r = t.pendingProps,
            s = t.memoizedState,
            o = s.element,
            Hh(e, t),
            Qi(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    o = ho(Error(O(423)), t),
                    t = Xd(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = ho(Error(O(424)), t),
                    t = Xd(e, t, r, n, o);
                    break e
                } else
                    for (lt = Vn(t.stateNode.containerInfo.firstChild),
                    at = t,
                    fe = !0,
                    _t = null,
                    n = Wh(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (uo(),
                r === o) {
                    t = gn(e, t, n);
                    break e
                }
                Ve(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Qh(t),
        e === null && Za(t),
        r = t.type,
        o = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        i = o.children,
        Ga(r, o) ? i = null : s !== null && Ga(r, s) && (t.flags |= 32),
        vm(e, t),
        Ve(e, t, i, n),
        t.child;
    case 6:
        return e === null && Za(t),
        null;
    case 13:
        return wm(e, t, n);
    case 4:
        return uu(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = fo(t, null, r, n) : Ve(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : At(r, o),
        Gd(e, t, r, o, n);
    case 7:
        return Ve(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ve(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ve(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            s = t.memoizedProps,
            i = o.value,
            le(Vi, r._currentValue),
            r._currentValue = i,
            s !== null)
                if (Bt(s.value, i)) {
                    if (s.children === o.children && !Ze.current) {
                        t = gn(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var l = s.dependencies;
                        if (l !== null) {
                            i = s.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (s.tag === 1) {
                                        a = fn(-1, n & -n),
                                        a.tag = 2;
                                        var c = s.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var u = c.pending;
                                            u === null ? a.next = a : (a.next = u.next,
                                            u.next = a),
                                            c.pending = a
                                        }
                                    }
                                    s.lanes |= n,
                                    a = s.alternate,
                                    a !== null && (a.lanes |= n),
                                    ec(s.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (s.tag === 10)
                            i = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (i = s.return,
                            i === null)
                                throw Error(O(341));
                            i.lanes |= n,
                            l = i.alternate,
                            l !== null && (l.lanes |= n),
                            ec(i, n, t),
                            i = s.sibling
                        } else
                            i = s.child;
                        if (i !== null)
                            i.return = s;
                        else
                            for (i = s; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (s = i.sibling,
                                s !== null) {
                                    s.return = i.return,
                                    i = s;
                                    break
                                }
                                i = i.return
                            }
                        s = i
                    }
            Ve(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Yr(t, n),
        o = xt(o),
        r = r(o),
        t.flags |= 1,
        Ve(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = At(r, t.pendingProps),
        o = At(r.type, o),
        qd(e, t, r, o, n);
    case 15:
        return mm(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : At(r, o),
        Ci(e, t),
        t.tag = 1,
        et(r) ? (e = !0,
        $i(t)) : e = !1,
        Yr(t, n),
        fm(t, r, o),
        nc(t, r, o, n),
        sc(null, t, r, !0, e, n);
    case 19:
        return xm(e, t, n);
    case 22:
        return gm(e, t, n)
    }
    throw Error(O(156, t.tag))
}
;
function _m(e, t) {
    return ch(e, t)
}
function tw(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function yt(e, t, n, r) {
    return new tw(e,t,n,r)
}
function ku(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function nw(e) {
    if (typeof e == "function")
        return ku(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Vc)
            return 11;
        if (e === Hc)
            return 14
    }
    return 2
}
function Gn(e, t) {
    var n = e.alternate;
    return n === null ? (n = yt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function ki(e, t, n, r, o, s) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        ku(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case Dr:
            return wr(n.children, o, s, t);
        case Wc:
            i = 8,
            o |= 8;
            break;
        case Pa:
            return e = yt(12, n, t, o | 2),
            e.elementType = Pa,
            e.lanes = s,
            e;
        case Ta:
            return e = yt(13, n, t, o),
            e.elementType = Ta,
            e.lanes = s,
            e;
        case Na:
            return e = yt(19, n, t, o),
            e.elementType = Na,
            e.lanes = s,
            e;
        case Qp:
            return Sl(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Vp:
                    i = 10;
                    break e;
                case Hp:
                    i = 9;
                    break e;
                case Vc:
                    i = 11;
                    break e;
                case Hc:
                    i = 14;
                    break e;
                case Rn:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(O(130, e == null ? e : typeof e, ""))
        }
    return t = yt(i, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function wr(e, t, n, r) {
    return e = yt(7, e, r, t),
    e.lanes = n,
    e
}
function Sl(e, t, n, r) {
    return e = yt(22, e, r, t),
    e.elementType = Qp,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function ma(e, t, n) {
    return e = yt(6, e, null, t),
    e.lanes = n,
    e
}
function ga(e, t, n) {
    return t = yt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function rw(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Yl(0),
    this.expirationTimes = Yl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Yl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Pu(e, t, n, r, o, s, i, l, a) {
    return e = new rw(e,t,n,l,a),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = yt(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    cu(s),
    e
}
function ow(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Mr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function zm(e) {
    if (!e)
        return Xn;
    e = e._reactInternals;
    e: {
        if (Nr(e) !== e || e.tag !== 1)
            throw Error(O(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (et(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(O(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (et(n))
            return zh(e, n, t)
    }
    return t
}
function Im(e, t, n, r, o, s, i, l, a) {
    return e = Pu(n, r, !0, e, o, s, i, l, a),
    e.context = zm(null),
    n = e.current,
    r = Qe(),
    o = Kn(n),
    s = fn(r, o),
    s.callback = t ?? null,
    Hn(n, s, o),
    e.current.lanes = o,
    As(e, o, r),
    tt(e, r),
    e
}
function Cl(e, t, n, r) {
    var o = t.current
      , s = Qe()
      , i = Kn(o);
    return n = zm(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = fn(s, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Hn(o, t, i),
    e !== null && (It(e, o, i, s),
    wi(e, o, i)),
    i
}
function el(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function af(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Tu(e, t) {
    af(e, t),
    (e = e.alternate) && af(e, t)
}
function sw() {
    return null
}
var Fm = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Nu(e) {
    this._internalRoot = e
}
bl.prototype.render = Nu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(O(409));
    Cl(e, t, null, null)
}
;
bl.prototype.unmount = Nu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Er(function() {
            Cl(null, e, null, null)
        }),
        t[hn] = null
    }
}
;
function bl(e) {
    this._internalRoot = e
}
bl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = gh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < An.length && t !== 0 && t < An[n].priority; n++)
            ;
        An.splice(n, 0, e),
        n === 0 && yh(e)
    }
}
;
function Ru(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function El(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function cf() {}
function iw(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var c = el(i);
                s.call(c)
            }
        }
        var i = Im(t, r, e, 0, null, !1, !1, "", cf);
        return e._reactRootContainer = i,
        e[hn] = i.current,
        us(e.nodeType === 8 ? e.parentNode : e),
        Er(),
        i
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var c = el(a);
            l.call(c)
        }
    }
    var a = Pu(e, 0, !1, null, null, !1, !1, "", cf);
    return e._reactRootContainer = a,
    e[hn] = a.current,
    us(e.nodeType === 8 ? e.parentNode : e),
    Er(function() {
        Cl(t, a, n, r)
    }),
    a
}
function kl(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var i = s;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var a = el(i);
                l.call(a)
            }
        }
        Cl(t, i, e, o)
    } else
        i = iw(n, t, e, o, r);
    return el(i)
}
hh = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = $o(t.pendingLanes);
            n !== 0 && (Gc(t, n | 1),
            tt(t, Se()),
            !(ee & 6) && (mo = Se() + 500,
            or()))
        }
        break;
    case 13:
        Er(function() {
            var r = mn(e, 1);
            if (r !== null) {
                var o = Qe();
                It(r, e, 1, o)
            }
        }),
        Tu(e, 1)
    }
}
;
qc = function(e) {
    if (e.tag === 13) {
        var t = mn(e, 134217728);
        if (t !== null) {
            var n = Qe();
            It(t, e, 134217728, n)
        }
        Tu(e, 134217728)
    }
}
;
mh = function(e) {
    if (e.tag === 13) {
        var t = Kn(e)
          , n = mn(e, t);
        if (n !== null) {
            var r = Qe();
            It(n, e, t, r)
        }
        Tu(e, t)
    }
}
;
gh = function() {
    return oe
}
;
vh = function(e, t) {
    var n = oe;
    try {
        return oe = e,
        t()
    } finally {
        oe = n
    }
}
;
Ia = function(e, t, n) {
    switch (t) {
    case "input":
        if (Aa(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = ml(r);
                    if (!o)
                        throw Error(O(90));
                    Gp(r),
                    Aa(r, o)
                }
            }
        }
        break;
    case "textarea":
        Yp(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Qr(e, !!n.multiple, t, !1)
    }
}
;
rh = Cu;
oh = Er;
var lw = {
    usingClientEntryPoint: !1,
    Events: [Ls, Fr, ml, th, nh, Cu]
}
  , _o = {
    findFiberByHostInstance: cr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , aw = {
    bundleType: _o.bundleType,
    version: _o.version,
    rendererPackageName: _o.rendererPackageName,
    rendererConfig: _o.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = lh(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: _o.findFiberByHostInstance || sw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ai.isDisabled && ai.supportsFiber)
        try {
            dl = ai.inject(aw),
            Jt = ai
        } catch {}
}
dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lw;
dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ru(t))
        throw Error(O(200));
    return ow(e, t, null, n)
}
;
dt.createRoot = function(e, t) {
    if (!Ru(e))
        throw Error(O(299));
    var n = !1
      , r = ""
      , o = Fm;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Pu(e, 1, !1, null, null, n, !1, r, o),
    e[hn] = t.current,
    us(e.nodeType === 8 ? e.parentNode : e),
    new Nu(t)
}
;
dt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","),
        Error(O(268, e)));
    return e = lh(t),
    e = e === null ? null : e.stateNode,
    e
}
;
dt.flushSync = function(e) {
    return Er(e)
}
;
dt.hydrate = function(e, t, n) {
    if (!El(t))
        throw Error(O(200));
    return kl(null, e, t, !0, n)
}
;
dt.hydrateRoot = function(e, t, n) {
    if (!Ru(e))
        throw Error(O(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , s = ""
      , i = Fm;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = Im(t, null, e, 1, n ?? null, o, !1, s, i),
    e[hn] = t.current,
    us(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new bl(t)
}
;
dt.render = function(e, t, n) {
    if (!El(t))
        throw Error(O(200));
    return kl(null, e, t, !1, n)
}
;
dt.unmountComponentAtNode = function(e) {
    if (!El(e))
        throw Error(O(40));
    return e._reactRootContainer ? (Er(function() {
        kl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[hn] = null
        })
    }),
    !0) : !1
}
;
dt.unstable_batchedUpdates = Cu;
dt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!El(n))
        throw Error(O(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(O(38));
    return kl(e, t, n, !1, r)
}
;
dt.version = "18.3.1-next-f1338f8080-20240426";
function Bm() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bm)
        } catch (e) {
            console.error(e)
        }
}
Bm(),
Bp.exports = dt;
var Ds = Bp.exports;
const $m = Tp(Ds);
var Um, uf = Ds;
Um = uf.createRoot,
uf.hydrateRoot;
const cw = 1
  , uw = 1e6;
let va = 0;
function dw() {
    return va = (va + 1) % Number.MAX_SAFE_INTEGER,
    va.toString()
}
const ya = new Map
  , df = e => {
    if (ya.has(e))
        return;
    const t = setTimeout( () => {
        ya.delete(e),
        es({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , uw);
    ya.set(e, t)
}
  , fw = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, cw)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? df(n) : e.toasts.forEach(r => {
                df(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Pi = [];
let Ti = {
    toasts: []
};
function es(e) {
    Ti = fw(Ti, e),
    Pi.forEach(t => {
        t(Ti)
    }
    )
}
function pw({...e}) {
    const t = dw()
      , n = o => es({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => es({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return es({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function hw() {
    const [e,t] = S.useState(Ti);
    return S.useEffect( () => (Pi.push(t),
    () => {
        const n = Pi.indexOf(t);
        n > -1 && Pi.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: pw,
        dismiss: n => es({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function Te(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function ff(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function Wm(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = ff(o, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const s = r[o];
                    typeof s == "function" ? s() : ff(e[o], null)
                }
            }
    }
}
function $t(...e) {
    return S.useCallback(Wm(...e), e)
}
function Pl(e, t=[]) {
    let n = [];
    function r(s, i) {
        const l = S.createContext(i)
          , a = n.length;
        n = [...n, i];
        const c = d => {
            var f;
            const {scope: m, children: p, ...w} = d
              , g = ((f = m == null ? void 0 : m[e]) == null ? void 0 : f[a]) || l
              , y = S.useMemo( () => w, Object.values(w));
            return x.jsx(g.Provider, {
                value: y,
                children: p
            })
        }
        ;
        c.displayName = s + "Provider";
        function u(d, m) {
            var g;
            const p = ((g = m == null ? void 0 : m[e]) == null ? void 0 : g[a]) || l
              , w = S.useContext(p);
            if (w)
                return w;
            if (i !== void 0)
                return i;
            throw new Error(`\`${d}\` must be used within \`${s}\``)
        }
        return [c, u]
    }
    const o = () => {
        const s = n.map(i => S.createContext(i));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || s;
            return S.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, mw(o, ...t)]
}
function mw(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce( (l, {useScope: a, scopeName: c}) => {
                const d = a(s)[`__scope${c}`];
                return {
                    ...l,
                    ...d
                }
            }
            , {});
            return S.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function tl(e) {
    const t = vw(e)
      , n = S.forwardRef( (r, o) => {
        const {children: s, ...i} = r
          , l = S.Children.toArray(s)
          , a = l.find(ww);
        if (a) {
            const c = a.props.children
              , u = l.map(d => d === a ? S.Children.count(c) > 1 ? S.Children.only(null) : S.isValidElement(c) ? c.props.children : null : d);
            return x.jsx(t, {
                ...i,
                ref: o,
                children: S.isValidElement(c) ? S.cloneElement(c, void 0, u) : null
            })
        }
        return x.jsx(t, {
            ...i,
            ref: o,
            children: s
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var gw = tl("Slot");
function vw(e) {
    const t = S.forwardRef( (n, r) => {
        const {children: o, ...s} = n;
        if (S.isValidElement(o)) {
            const i = Sw(o)
              , l = xw(s, o.props);
            return o.type !== S.Fragment && (l.ref = r ? Wm(r, i) : i),
            S.cloneElement(o, l)
        }
        return S.Children.count(o) > 1 ? S.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var Vm = Symbol("radix.slottable");
function yw(e) {
    const t = ({children: n}) => x.jsx(x.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Vm,
    t
}
function ww(e) {
    return S.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Vm
}
function xw(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...l) => {
            const a = s(...l);
            return o(...l),
            a
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function Sw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function Cw(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Pl(t)
      , [o,s] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , i = g => {
        const {scope: y, children: f} = g
          , h = L.useRef(null)
          , v = L.useRef(new Map).current;
        return x.jsx(o, {
            scope: y,
            itemMap: v,
            collectionRef: h,
            children: f
        })
    }
    ;
    i.displayName = t;
    const l = e + "CollectionSlot"
      , a = tl(l)
      , c = L.forwardRef( (g, y) => {
        const {scope: f, children: h} = g
          , v = s(l, f)
          , C = $t(y, v.collectionRef);
        return x.jsx(a, {
            ref: C,
            children: h
        })
    }
    );
    c.displayName = l;
    const u = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , m = tl(u)
      , p = L.forwardRef( (g, y) => {
        const {scope: f, children: h, ...v} = g
          , C = L.useRef(null)
          , b = $t(y, C)
          , k = s(u, f);
        return L.useEffect( () => (k.itemMap.set(C, {
            ref: C,
            ...v
        }),
        () => void k.itemMap.delete(C))),
        x.jsx(m, {
            [d]: "",
            ref: b,
            children: h
        })
    }
    );
    p.displayName = u;
    function w(g) {
        const y = s(e + "CollectionConsumer", g);
        return L.useCallback( () => {
            const h = y.collectionRef.current;
            if (!h)
                return [];
            const v = Array.from(h.querySelectorAll(`[${d}]`));
            return Array.from(y.itemMap.values()).sort( (k, E) => v.indexOf(k.ref.current) - v.indexOf(E.ref.current))
        }
        , [y.collectionRef, y.itemMap])
    }
    return [{
        Provider: i,
        Slot: c,
        ItemSlot: p
    }, w, r]
}
var bw = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , nt = bw.reduce( (e, t) => {
    const n = tl(`Primitive.${t}`)
      , r = S.forwardRef( (o, s) => {
        const {asChild: i, ...l} = o
          , a = i ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        x.jsx(a, {
            ...l,
            ref: s
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Hm(e, t) {
    e && Ds.flushSync( () => e.dispatchEvent(t))
}
function Jn(e) {
    const t = S.useRef(e);
    return S.useEffect( () => {
        t.current = e
    }
    ),
    S.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function Ew(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Jn(e);
    S.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var kw = "DismissableLayer", vc = "dismissableLayer.update", Pw = "dismissableLayer.pointerDownOutside", Tw = "dismissableLayer.focusOutside", pf, Qm = S.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), ju = S.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: i, onDismiss: l, ...a} = e
      , c = S.useContext(Qm)
      , [u,d] = S.useState(null)
      , m = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,p] = S.useState({})
      , w = $t(t, E => d(E))
      , g = Array.from(c.layers)
      , [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1)
      , f = g.indexOf(y)
      , h = u ? g.indexOf(u) : -1
      , v = c.layersWithOutsidePointerEventsDisabled.size > 0
      , C = h >= f
      , b = Rw(E => {
        const P = E.target
          , j = [...c.branches].some(A => A.contains(P));
        !C || j || (o == null || o(E),
        i == null || i(E),
        E.defaultPrevented || l == null || l())
    }
    , m)
      , k = jw(E => {
        const P = E.target;
        [...c.branches].some(A => A.contains(P)) || (s == null || s(E),
        i == null || i(E),
        E.defaultPrevented || l == null || l())
    }
    , m);
    return Ew(E => {
        h === c.layers.size - 1 && (r == null || r(E),
        !E.defaultPrevented && l && (E.preventDefault(),
        l()))
    }
    , m),
    S.useEffect( () => {
        if (u)
            return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (pf = m.body.style.pointerEvents,
            m.body.style.pointerEvents = "none"),
            c.layersWithOutsidePointerEventsDisabled.add(u)),
            c.layers.add(u),
            hf(),
            () => {
                n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = pf)
            }
    }
    , [u, m, n, c]),
    S.useEffect( () => () => {
        u && (c.layers.delete(u),
        c.layersWithOutsidePointerEventsDisabled.delete(u),
        hf())
    }
    , [u, c]),
    S.useEffect( () => {
        const E = () => p({});
        return document.addEventListener(vc, E),
        () => document.removeEventListener(vc, E)
    }
    , []),
    x.jsx(nt.div, {
        ...a,
        ref: w,
        style: {
            pointerEvents: v ? C ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: Te(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: Te(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: Te(e.onPointerDownCapture, b.onPointerDownCapture)
    })
}
);
ju.displayName = kw;
var Nw = "DismissableLayerBranch"
  , Km = S.forwardRef( (e, t) => {
    const n = S.useContext(Qm)
      , r = S.useRef(null)
      , o = $t(t, r);
    return S.useEffect( () => {
        const s = r.current;
        if (s)
            return n.branches.add(s),
            () => {
                n.branches.delete(s)
            }
    }
    , [n.branches]),
    x.jsx(nt.div, {
        ...e,
        ref: o
    })
}
);
Km.displayName = Nw;
function Rw(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Jn(e)
      , r = S.useRef(!1)
      , o = S.useRef( () => {}
    );
    return S.useEffect( () => {
        const s = l => {
            if (l.target && !r.current) {
                let a = function() {
                    Gm(Pw, n, c, {
                        discrete: !0
                    })
                };
                const c = {
                    originalEvent: l
                };
                l.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = a,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : a()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , i = window.setTimeout( () => {
            t.addEventListener("pointerdown", s)
        }
        , 0);
        return () => {
            window.clearTimeout(i),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function jw(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Jn(e)
      , r = S.useRef(!1);
    return S.useEffect( () => {
        const o = s => {
            s.target && !r.current && Gm(Tw, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function hf() {
    const e = new CustomEvent(vc);
    document.dispatchEvent(e)
}
function Gm(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Hm(o, s) : o.dispatchEvent(s)
}
var Aw = ju
  , Ow = Km
  , Zn = globalThis != null && globalThis.document ? S.useLayoutEffect : () => {}
  , Lw = "Portal"
  , qm = S.forwardRef( (e, t) => {
    var l;
    const {container: n, ...r} = e
      , [o,s] = S.useState(!1);
    Zn( () => s(!0), []);
    const i = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return i ? $m.createPortal(x.jsx(nt.div, {
        ...r,
        ref: t
    }), i) : null
}
);
qm.displayName = Lw;
function Mw(e, t) {
    return S.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Au = e => {
    const {present: t, children: n} = e
      , r = Dw(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : S.Children.only(n)
      , s = $t(r.ref, _w(o));
    return typeof n == "function" || r.isPresent ? S.cloneElement(o, {
        ref: s
    }) : null
}
;
Au.displayName = "Presence";
function Dw(e) {
    const [t,n] = S.useState()
      , r = S.useRef(null)
      , o = S.useRef(e)
      , s = S.useRef("none")
      , i = e ? "mounted" : "unmounted"
      , [l,a] = Mw(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return S.useEffect( () => {
        const c = ci(r.current);
        s.current = l === "mounted" ? c : "none"
    }
    , [l]),
    Zn( () => {
        const c = r.current
          , u = o.current;
        if (u !== e) {
            const m = s.current
              , p = ci(c);
            e ? a("MOUNT") : p === "none" || (c == null ? void 0 : c.display) === "none" ? a("UNMOUNT") : a(u && m !== p ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, a]),
    Zn( () => {
        if (t) {
            let c;
            const u = t.ownerDocument.defaultView ?? window
              , d = p => {
                const g = ci(r.current).includes(p.animationName);
                if (p.target === t && g && (a("ANIMATION_END"),
                !o.current)) {
                    const y = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    c = u.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y)
                    }
                    )
                }
            }
              , m = p => {
                p.target === t && (s.current = ci(r.current))
            }
            ;
            return t.addEventListener("animationstart", m),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                u.clearTimeout(c),
                t.removeEventListener("animationstart", m),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            a("ANIMATION_END")
    }
    , [t, a]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: S.useCallback(c => {
            r.current = c ? getComputedStyle(c) : null,
            n(c)
        }
        , [])
    }
}
function ci(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function _w(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var zw = Ip[" useInsertionEffect ".trim().toString()] || Zn;
function Iw({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,s,i] = Fw({
        defaultProp: t,
        onChange: n
    })
      , l = e !== void 0
      , a = l ? e : o;
    {
        const u = S.useRef(e !== void 0);
        S.useEffect( () => {
            const d = u.current;
            d !== l && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            u.current = l
        }
        , [l, r])
    }
    const c = S.useCallback(u => {
        var d;
        if (l) {
            const m = Bw(u) ? u(e) : u;
            m !== e && ((d = i.current) == null || d.call(i, m))
        } else
            s(u)
    }
    , [l, e, s, i]);
    return [a, c]
}
function Fw({defaultProp: e, onChange: t}) {
    const [n,r] = S.useState(e)
      , o = S.useRef(n)
      , s = S.useRef(t);
    return zw( () => {
        s.current = t
    }
    , [t]),
    S.useEffect( () => {
        var i;
        o.current !== n && ((i = s.current) == null || i.call(s, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, s]
}
function Bw(e) {
    return typeof e == "function"
}
var $w = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , Uw = "VisuallyHidden"
  , Tl = S.forwardRef( (e, t) => x.jsx(nt.span, {
    ...e,
    ref: t,
    style: {
        ...$w,
        ...e.style
    }
}));
Tl.displayName = Uw;
var Ww = Tl
  , Ou = "ToastProvider"
  , [Lu,Vw,Hw] = Cw("Toast")
  , [Ym,EP] = Pl("Toast", [Hw])
  , [Qw,Nl] = Ym(Ou)
  , Xm = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: s=50, children: i} = e
      , [l,a] = S.useState(null)
      , [c,u] = S.useState(0)
      , d = S.useRef(!1)
      , m = S.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Ou}\`. Expected non-empty \`string\`.`),
    x.jsx(Lu.Provider, {
        scope: t,
        children: x.jsx(Qw, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: s,
            toastCount: c,
            viewport: l,
            onViewportChange: a,
            onToastAdd: S.useCallback( () => u(p => p + 1), []),
            onToastRemove: S.useCallback( () => u(p => p - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: m,
            children: i
        })
    })
}
;
Xm.displayName = Ou;
var Jm = "ToastViewport"
  , Kw = ["F8"]
  , yc = "toast.viewportPause"
  , wc = "toast.viewportResume"
  , Zm = S.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=Kw, label: o="Notifications ({hotkey})", ...s} = e
      , i = Nl(Jm, n)
      , l = Vw(n)
      , a = S.useRef(null)
      , c = S.useRef(null)
      , u = S.useRef(null)
      , d = S.useRef(null)
      , m = $t(t, d, i.onViewportChange)
      , p = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , w = i.toastCount > 0;
    S.useEffect( () => {
        const y = f => {
            var v;
            r.length !== 0 && r.every(C => f[C] || f.code === C) && ((v = d.current) == null || v.focus())
        }
        ;
        return document.addEventListener("keydown", y),
        () => document.removeEventListener("keydown", y)
    }
    , [r]),
    S.useEffect( () => {
        const y = a.current
          , f = d.current;
        if (w && y && f) {
            const h = () => {
                if (!i.isClosePausedRef.current) {
                    const k = new CustomEvent(yc);
                    f.dispatchEvent(k),
                    i.isClosePausedRef.current = !0
                }
            }
              , v = () => {
                if (i.isClosePausedRef.current) {
                    const k = new CustomEvent(wc);
                    f.dispatchEvent(k),
                    i.isClosePausedRef.current = !1
                }
            }
              , C = k => {
                !y.contains(k.relatedTarget) && v()
            }
              , b = () => {
                y.contains(document.activeElement) || v()
            }
            ;
            return y.addEventListener("focusin", h),
            y.addEventListener("focusout", C),
            y.addEventListener("pointermove", h),
            y.addEventListener("pointerleave", b),
            window.addEventListener("blur", h),
            window.addEventListener("focus", v),
            () => {
                y.removeEventListener("focusin", h),
                y.removeEventListener("focusout", C),
                y.removeEventListener("pointermove", h),
                y.removeEventListener("pointerleave", b),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", v)
            }
        }
    }
    , [w, i.isClosePausedRef]);
    const g = S.useCallback( ({tabbingDirection: y}) => {
        const h = l().map(v => {
            const C = v.ref.current
              , b = [C, ...ix(C)];
            return y === "forwards" ? b : b.reverse()
        }
        );
        return (y === "forwards" ? h.reverse() : h).flat()
    }
    , [l]);
    return S.useEffect( () => {
        const y = d.current;
        if (y) {
            const f = h => {
                var b, k, E;
                const v = h.altKey || h.ctrlKey || h.metaKey;
                if (h.key === "Tab" && !v) {
                    const P = document.activeElement
                      , j = h.shiftKey;
                    if (h.target === y && j) {
                        (b = c.current) == null || b.focus();
                        return
                    }
                    const D = g({
                        tabbingDirection: j ? "backwards" : "forwards"
                    })
                      , V = D.findIndex(M => M === P);
                    wa(D.slice(V + 1)) ? h.preventDefault() : j ? (k = c.current) == null || k.focus() : (E = u.current) == null || E.focus()
                }
            }
            ;
            return y.addEventListener("keydown", f),
            () => y.removeEventListener("keydown", f)
        }
    }
    , [l, g]),
    x.jsxs(Ow, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: {
            pointerEvents: w ? void 0 : "none"
        },
        children: [w && x.jsx(xc, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const y = g({
                    tabbingDirection: "forwards"
                });
                wa(y)
            }
        }), x.jsx(Lu.Slot, {
            scope: n,
            children: x.jsx(nt.ol, {
                tabIndex: -1,
                ...s,
                ref: m
            })
        }), w && x.jsx(xc, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const y = g({
                    tabbingDirection: "backwards"
                });
                wa(y)
            }
        })]
    })
}
);
Zm.displayName = Jm;
var eg = "ToastFocusProxy"
  , xc = S.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , s = Nl(eg, n);
    return x.jsx(Tl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: i => {
            var c;
            const l = i.relatedTarget;
            !((c = s.viewport) != null && c.contains(l)) && r()
        }
    })
}
);
xc.displayName = eg;
var _s = "Toast"
  , Gw = "toast.swipeStart"
  , qw = "toast.swipeMove"
  , Yw = "toast.swipeCancel"
  , Xw = "toast.swipeEnd"
  , tg = S.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i} = e
      , [l,a] = Iw({
        prop: r,
        defaultProp: o ?? !0,
        onChange: s,
        caller: _s
    });
    return x.jsx(Au, {
        present: n || l,
        children: x.jsx(ex, {
            open: l,
            ...i,
            ref: t,
            onClose: () => a(!1),
            onPause: Jn(e.onPause),
            onResume: Jn(e.onResume),
            onSwipeStart: Te(e.onSwipeStart, c => {
                c.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: Te(e.onSwipeMove, c => {
                const {x: u, y: d} = c.detail.delta;
                c.currentTarget.setAttribute("data-swipe", "move"),
                c.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${u}px`),
                c.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: Te(e.onSwipeCancel, c => {
                c.currentTarget.setAttribute("data-swipe", "cancel"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: Te(e.onSwipeEnd, c => {
                const {x: u, y: d} = c.detail.delta;
                c.currentTarget.setAttribute("data-swipe", "end"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                c.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${u}px`),
                c.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                a(!1)
            }
            )
        })
    })
}
);
tg.displayName = _s;
var [Jw,Zw] = Ym(_s, {
    onClose() {}
})
  , ex = S.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: s, onClose: i, onEscapeKeyDown: l, onPause: a, onResume: c, onSwipeStart: u, onSwipeMove: d, onSwipeCancel: m, onSwipeEnd: p, ...w} = e
      , g = Nl(_s, n)
      , [y,f] = S.useState(null)
      , h = $t(t, M => f(M))
      , v = S.useRef(null)
      , C = S.useRef(null)
      , b = o || g.duration
      , k = S.useRef(0)
      , E = S.useRef(b)
      , P = S.useRef(0)
      , {onToastAdd: j, onToastRemove: A} = g
      , z = Jn( () => {
        var H;
        (y == null ? void 0 : y.contains(document.activeElement)) && ((H = g.viewport) == null || H.focus()),
        i()
    }
    )
      , D = S.useCallback(M => {
        !M || M === 1 / 0 || (window.clearTimeout(P.current),
        k.current = new Date().getTime(),
        P.current = window.setTimeout(z, M))
    }
    , [z]);
    S.useEffect( () => {
        const M = g.viewport;
        if (M) {
            const H = () => {
                D(E.current),
                c == null || c()
            }
              , $ = () => {
                const W = new Date().getTime() - k.current;
                E.current = E.current - W,
                window.clearTimeout(P.current),
                a == null || a()
            }
            ;
            return M.addEventListener(yc, $),
            M.addEventListener(wc, H),
            () => {
                M.removeEventListener(yc, $),
                M.removeEventListener(wc, H)
            }
        }
    }
    , [g.viewport, b, a, c, D]),
    S.useEffect( () => {
        s && !g.isClosePausedRef.current && D(b)
    }
    , [s, b, g.isClosePausedRef, D]),
    S.useEffect( () => (j(),
    () => A()), [j, A]);
    const V = S.useMemo( () => y ? ag(y) : null, [y]);
    return g.viewport ? x.jsxs(x.Fragment, {
        children: [V && x.jsx(tx, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: V
        }), x.jsx(Jw, {
            scope: n,
            onClose: z,
            children: Ds.createPortal(x.jsx(Lu.ItemSlot, {
                scope: n,
                children: x.jsx(Aw, {
                    asChild: !0,
                    onEscapeKeyDown: Te(l, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || z(),
                        g.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: x.jsx(nt.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...w,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: Te(e.onKeyDown, M => {
                            M.key === "Escape" && (l == null || l(M.nativeEvent),
                            M.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0,
                            z()))
                        }
                        ),
                        onPointerDown: Te(e.onPointerDown, M => {
                            M.button === 0 && (v.current = {
                                x: M.clientX,
                                y: M.clientY
                            })
                        }
                        ),
                        onPointerMove: Te(e.onPointerMove, M => {
                            if (!v.current)
                                return;
                            const H = M.clientX - v.current.x
                              , $ = M.clientY - v.current.y
                              , W = !!C.current
                              , T = ["left", "right"].includes(g.swipeDirection)
                              , R = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max
                              , _ = T ? R(0, H) : 0
                              , U = T ? 0 : R(0, $)
                              , B = M.pointerType === "touch" ? 10 : 2
                              , G = {
                                x: _,
                                y: U
                            }
                              , Q = {
                                originalEvent: M,
                                delta: G
                            };
                            W ? (C.current = G,
                            ui(qw, d, Q, {
                                discrete: !1
                            })) : mf(G, g.swipeDirection, B) ? (C.current = G,
                            ui(Gw, u, Q, {
                                discrete: !1
                            }),
                            M.target.setPointerCapture(M.pointerId)) : (Math.abs(H) > B || Math.abs($) > B) && (v.current = null)
                        }
                        ),
                        onPointerUp: Te(e.onPointerUp, M => {
                            const H = C.current
                              , $ = M.target;
                            if ($.hasPointerCapture(M.pointerId) && $.releasePointerCapture(M.pointerId),
                            C.current = null,
                            v.current = null,
                            H) {
                                const W = M.currentTarget
                                  , T = {
                                    originalEvent: M,
                                    delta: H
                                };
                                mf(H, g.swipeDirection, g.swipeThreshold) ? ui(Xw, p, T, {
                                    discrete: !0
                                }) : ui(Yw, m, T, {
                                    discrete: !0
                                }),
                                W.addEventListener("click", R => R.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), g.viewport)
        })]
    }) : null
}
)
  , tx = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = Nl(_s, t)
      , [s,i] = S.useState(!1)
      , [l,a] = S.useState(!1);
    return ox( () => i(!0)),
    S.useEffect( () => {
        const c = window.setTimeout( () => a(!0), 1e3);
        return () => window.clearTimeout(c)
    }
    , []),
    l ? null : x.jsx(qm, {
        asChild: !0,
        children: x.jsx(Tl, {
            ...r,
            children: s && x.jsxs(x.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , nx = "ToastTitle"
  , ng = S.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return x.jsx(nt.div, {
        ...r,
        ref: t
    })
}
);
ng.displayName = nx;
var rx = "ToastDescription"
  , rg = S.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return x.jsx(nt.div, {
        ...r,
        ref: t
    })
}
);
rg.displayName = rx;
var og = "ToastAction"
  , sg = S.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? x.jsx(lg, {
        altText: n,
        asChild: !0,
        children: x.jsx(Mu, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${og}\`. Expected non-empty \`string\`.`),
    null)
}
);
sg.displayName = og;
var ig = "ToastClose"
  , Mu = S.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = Zw(ig, n);
    return x.jsx(lg, {
        asChild: !0,
        children: x.jsx(nt.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: Te(e.onClick, o.onClose)
        })
    })
}
);
Mu.displayName = ig;
var lg = S.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return x.jsx(nt.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function ag(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        sx(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , s = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (s) {
                    const i = r.dataset.radixToastAnnounceAlt;
                    i && t.push(i)
                } else
                    t.push(...ag(r))
        }
    }
    ),
    t
}
function ui(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , s = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Hm(o, s) : o.dispatchEvent(s)
}
var mf = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n
}
;
function ox(e= () => {}
) {
    const t = Jn(e);
    Zn( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function sx(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function ix(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function wa(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var lx = Xm
  , cg = Zm
  , ug = tg
  , dg = ng
  , fg = rg
  , pg = sg
  , hg = Mu;
function mg(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = mg(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function gg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = mg(e)) && (r && (r += " "),
        r += t);
    return r
}
const gf = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , vf = gg
  , vg = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return vf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: s} = t
      , i = Object.keys(o).map(c => {
        const u = n == null ? void 0 : n[c]
          , d = s == null ? void 0 : s[c];
        if (u === null)
            return null;
        const m = gf(u) || gf(d);
        return o[c][m]
    }
    )
      , l = n && Object.entries(n).reduce( (c, u) => {
        let[d,m] = u;
        return m === void 0 || (c[d] = m),
        c
    }
    , {})
      , a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (c, u) => {
        let {class: d, className: m, ...p} = u;
        return Object.entries(p).every(w => {
            let[g,y] = w;
            return Array.isArray(y) ? y.includes({
                ...s,
                ...l
            }[g]) : {
                ...s,
                ...l
            }[g] === y
        }
        ) ? [...c, d, m] : c
    }
    , []);
    return vf(e, i, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ax = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , yg = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var cx = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ux = S.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: s, iconNode: i, ...l}, a) => S.createElement("svg", {
    ref: a,
    ...cx,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: yg("lucide", o),
    ...l
}, [...i.map( ([c,u]) => S.createElement(c, u)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = (e, t) => {
    const n = S.forwardRef( ({className: r, ...o}, s) => S.createElement(ux, {
        ref: s,
        iconNode: t,
        className: yg(`lucide-${ax(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wg = pt("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dx = pt("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fx = pt("Facebook", [["path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    key: "1jg4f8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const px = pt("Heart", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xg = pt("House", [["path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    key: "5wwlr5"
}], ["path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "1d0kgt"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hx = pt("Instagram", [["rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5",
    key: "2e1cvw"
}], ["path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    key: "9exkf1"
}], ["line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5",
    key: "r4j83e"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mx = pt("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = pt("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gx = pt("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vx = pt("ShoppingCart", [["circle", {
    cx: "8",
    cy: "21",
    r: "1",
    key: "jimo8o"
}], ["circle", {
    cx: "19",
    cy: "21",
    r: "1",
    key: "13723u"
}], ["path", {
    d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
    key: "9zh506"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yx = pt("User", [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
}], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sg = pt("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wx = pt("Youtube", [["path", {
    d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
    key: "1q2vi4"
}], ["path", {
    d: "m10 15 5-3-5-3z",
    key: "1jp15x"
}]])
  , Du = "-"
  , xx = e => {
    const t = Cx(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: i => {
            const l = i.split(Du);
            return l[0] === "" && l.length !== 1 && l.shift(),
            Cg(l, t) || Sx(i)
        }
        ,
        getConflictingClassGroupIds: (i, l) => {
            const a = n[i] || [];
            return l && r[i] ? [...a, ...r[i]] : a
        }
    }
}
  , Cg = (e, t) => {
    var i;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? Cg(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const s = e.join(Du);
    return (i = t.validators.find( ({validator: l}) => l(s))) == null ? void 0 : i.classGroupId
}
  , yf = /^\[(.+)\]$/
  , Sx = e => {
    if (yf.test(e)) {
        const t = yf.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , Cx = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return Ex(Object.entries(e.classGroups), n).forEach( ([s,i]) => {
        Sc(i, r, s, t)
    }
    ),
    r
}
  , Sc = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const s = o === "" ? t : wf(t, o);
            s.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (bx(o)) {
                Sc(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([s,i]) => {
            Sc(i, wf(t, s), n, r)
        }
        )
    }
    )
}
  , wf = (e, t) => {
    let n = e;
    return t.split(Du).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , bx = e => e.isThemeGetter
  , Ex = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([i,l]) => [t + i, l])) : s);
    return [n, o]
}
) : e
  , kx = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (s, i) => {
        n.set(s, i),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(s) {
            let i = n.get(s);
            if (i !== void 0)
                return i;
            if ((i = r.get(s)) !== void 0)
                return o(s, i),
                i
        },
        set(s, i) {
            n.has(s) ? n.set(s, i) : o(s, i)
        }
    }
}
  , bg = "!"
  , Px = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , s = t.length
      , i = l => {
        const a = [];
        let c = 0, u = 0, d;
        for (let y = 0; y < l.length; y++) {
            let f = l[y];
            if (c === 0) {
                if (f === o && (r || l.slice(y, y + s) === t)) {
                    a.push(l.slice(u, y)),
                    u = y + s;
                    continue
                }
                if (f === "/") {
                    d = y;
                    continue
                }
            }
            f === "[" ? c++ : f === "]" && c--
        }
        const m = a.length === 0 ? l : l.substring(u)
          , p = m.startsWith(bg)
          , w = p ? m.substring(1) : m
          , g = d && d > u ? d - u : void 0;
        return {
            modifiers: a,
            hasImportantModifier: p,
            baseClassName: w,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return n ? l => n({
        className: l,
        parseClassName: i
    }) : i
}
  , Tx = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , Nx = e => ({
    cache: kx(e.cacheSize),
    parseClassName: Px(e),
    ...xx(e)
})
  , Rx = /\s+/
  , jx = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , s = []
      , i = e.trim().split(Rx);
    let l = "";
    for (let a = i.length - 1; a >= 0; a -= 1) {
        const c = i[a]
          , {modifiers: u, hasImportantModifier: d, baseClassName: m, maybePostfixModifierPosition: p} = n(c);
        let w = !!p
          , g = r(w ? m.substring(0, p) : m);
        if (!g) {
            if (!w) {
                l = c + (l.length > 0 ? " " + l : l);
                continue
            }
            if (g = r(m),
            !g) {
                l = c + (l.length > 0 ? " " + l : l);
                continue
            }
            w = !1
        }
        const y = Tx(u).join(":")
          , f = d ? y + bg : y
          , h = f + g;
        if (s.includes(h))
            continue;
        s.push(h);
        const v = o(g, w);
        for (let C = 0; C < v.length; ++C) {
            const b = v[C];
            s.push(f + b)
        }
        l = c + (l.length > 0 ? " " + l : l)
    }
    return l
}
;
function Ax() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = Eg(t)) && (r && (r += " "),
        r += n);
    return r
}
const Eg = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = Eg(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function Ox(e, ...t) {
    let n, r, o, s = i;
    function i(a) {
        const c = t.reduce( (u, d) => d(u), e());
        return n = Nx(c),
        r = n.cache.get,
        o = n.cache.set,
        s = l,
        l(a)
    }
    function l(a) {
        const c = r(a);
        if (c)
            return c;
        const u = jx(a, n);
        return o(a, u),
        u
    }
    return function() {
        return s(Ax.apply(null, arguments))
    }
}
const ce = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , kg = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , Lx = /^\d+\/\d+$/
  , Mx = new Set(["px", "full", "screen"])
  , Dx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , _x = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , zx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , Ix = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Fx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , on = e => Jr(e) || Mx.has(e) || Lx.test(e)
  , Pn = e => So(e, "length", Kx)
  , Jr = e => !!e && !Number.isNaN(Number(e))
  , xa = e => So(e, "number", Jr)
  , zo = e => !!e && Number.isInteger(Number(e))
  , Bx = e => e.endsWith("%") && Jr(e.slice(0, -1))
  , X = e => kg.test(e)
  , Tn = e => Dx.test(e)
  , $x = new Set(["length", "size", "percentage"])
  , Ux = e => So(e, $x, Pg)
  , Wx = e => So(e, "position", Pg)
  , Vx = new Set(["image", "url"])
  , Hx = e => So(e, Vx, qx)
  , Qx = e => So(e, "", Gx)
  , Io = () => !0
  , So = (e, t, n) => {
    const r = kg.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , Kx = e => _x.test(e) && !zx.test(e)
  , Pg = () => !1
  , Gx = e => Ix.test(e)
  , qx = e => Fx.test(e)
  , Yx = () => {
    const e = ce("colors")
      , t = ce("spacing")
      , n = ce("blur")
      , r = ce("brightness")
      , o = ce("borderColor")
      , s = ce("borderRadius")
      , i = ce("borderSpacing")
      , l = ce("borderWidth")
      , a = ce("contrast")
      , c = ce("grayscale")
      , u = ce("hueRotate")
      , d = ce("invert")
      , m = ce("gap")
      , p = ce("gradientColorStops")
      , w = ce("gradientColorStopPositions")
      , g = ce("inset")
      , y = ce("margin")
      , f = ce("opacity")
      , h = ce("padding")
      , v = ce("saturate")
      , C = ce("scale")
      , b = ce("sepia")
      , k = ce("skew")
      , E = ce("space")
      , P = ce("translate")
      , j = () => ["auto", "contain", "none"]
      , A = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , z = () => ["auto", X, t]
      , D = () => [X, t]
      , V = () => ["", on, Pn]
      , M = () => ["auto", Jr, X]
      , H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , $ = () => ["solid", "dashed", "dotted", "double", "none"]
      , W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , R = () => ["", "0", X]
      , _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , U = () => [Jr, X];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Io],
            spacing: [on, Pn],
            blur: ["none", "", Tn, X],
            brightness: U(),
            borderColor: [e],
            borderRadius: ["none", "", "full", Tn, X],
            borderSpacing: D(),
            borderWidth: V(),
            contrast: U(),
            grayscale: R(),
            hueRotate: U(),
            invert: R(),
            gap: D(),
            gradientColorStops: [e],
            gradientColorStopPositions: [Bx, Pn],
            inset: z(),
            margin: z(),
            opacity: U(),
            padding: D(),
            saturate: U(),
            scale: U(),
            sepia: R(),
            skew: U(),
            space: D(),
            translate: D()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", X]
            }],
            container: ["container"],
            columns: [{
                columns: [Tn]
            }],
            "break-after": [{
                "break-after": _()
            }],
            "break-before": [{
                "break-before": _()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...H(), X]
            }],
            overflow: [{
                overflow: A()
            }],
            "overflow-x": [{
                "overflow-x": A()
            }],
            "overflow-y": [{
                "overflow-y": A()
            }],
            overscroll: [{
                overscroll: j()
            }],
            "overscroll-x": [{
                "overscroll-x": j()
            }],
            "overscroll-y": [{
                "overscroll-y": j()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [g]
            }],
            "inset-x": [{
                "inset-x": [g]
            }],
            "inset-y": [{
                "inset-y": [g]
            }],
            start: [{
                start: [g]
            }],
            end: [{
                end: [g]
            }],
            top: [{
                top: [g]
            }],
            right: [{
                right: [g]
            }],
            bottom: [{
                bottom: [g]
            }],
            left: [{
                left: [g]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", zo, X]
            }],
            basis: [{
                basis: z()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", X]
            }],
            grow: [{
                grow: R()
            }],
            shrink: [{
                shrink: R()
            }],
            order: [{
                order: ["first", "last", "none", zo, X]
            }],
            "grid-cols": [{
                "grid-cols": [Io]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", zo, X]
                }, X]
            }],
            "col-start": [{
                "col-start": M()
            }],
            "col-end": [{
                "col-end": M()
            }],
            "grid-rows": [{
                "grid-rows": [Io]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [zo, X]
                }, X]
            }],
            "row-start": [{
                "row-start": M()
            }],
            "row-end": [{
                "row-end": M()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", X]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", X]
            }],
            gap: [{
                gap: [m]
            }],
            "gap-x": [{
                "gap-x": [m]
            }],
            "gap-y": [{
                "gap-y": [m]
            }],
            "justify-content": [{
                justify: ["normal", ...T()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...T(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...T(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [y]
            }],
            mx: [{
                mx: [y]
            }],
            my: [{
                my: [y]
            }],
            ms: [{
                ms: [y]
            }],
            me: [{
                me: [y]
            }],
            mt: [{
                mt: [y]
            }],
            mr: [{
                mr: [y]
            }],
            mb: [{
                mb: [y]
            }],
            ml: [{
                ml: [y]
            }],
            "space-x": [{
                "space-x": [E]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [E]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, t]
            }],
            "min-w": [{
                "min-w": [X, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [X, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Tn]
                }, Tn]
            }],
            h: [{
                h: [X, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [X, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Tn, Pn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", xa]
            }],
            "font-family": [{
                font: [Io]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", X]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Jr, xa]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", on, X]
            }],
            "list-image": [{
                "list-image": ["none", X]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", X]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [f]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [f]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...$(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", on, Pn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", on, X]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: D()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", X]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [f]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...H(), Wx]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Ux]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, Hx]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [w]
            }],
            "gradient-via-pos": [{
                via: [w]
            }],
            "gradient-to-pos": [{
                to: [w]
            }],
            "gradient-from": [{
                from: [p]
            }],
            "gradient-via": [{
                via: [p]
            }],
            "gradient-to": [{
                to: [p]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [f]
            }],
            "border-style": [{
                border: [...$(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [f]
            }],
            "divide-style": [{
                divide: $()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...$()]
            }],
            "outline-offset": [{
                "outline-offset": [on, X]
            }],
            "outline-w": [{
                outline: [on, Pn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: V()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [f]
            }],
            "ring-offset-w": [{
                "ring-offset": [on, Pn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Tn, Qx]
            }],
            "shadow-color": [{
                shadow: [Io]
            }],
            opacity: [{
                opacity: [f]
            }],
            "mix-blend": [{
                "mix-blend": [...W(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": W()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [a]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Tn, X]
            }],
            grayscale: [{
                grayscale: [c]
            }],
            "hue-rotate": [{
                "hue-rotate": [u]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [b]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [a]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [c]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [u]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [f]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [b]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [i]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [i]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [i]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", X]
            }],
            duration: [{
                duration: U()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", X]
            }],
            delay: [{
                delay: U()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", X]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [C]
            }],
            "scale-x": [{
                "scale-x": [C]
            }],
            "scale-y": [{
                "scale-y": [C]
            }],
            rotate: [{
                rotate: [zo, X]
            }],
            "translate-x": [{
                "translate-x": [P]
            }],
            "translate-y": [{
                "translate-y": [P]
            }],
            "skew-x": [{
                "skew-x": [k]
            }],
            "skew-y": [{
                "skew-y": [k]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", X]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": D()
            }],
            "scroll-mx": [{
                "scroll-mx": D()
            }],
            "scroll-my": [{
                "scroll-my": D()
            }],
            "scroll-ms": [{
                "scroll-ms": D()
            }],
            "scroll-me": [{
                "scroll-me": D()
            }],
            "scroll-mt": [{
                "scroll-mt": D()
            }],
            "scroll-mr": [{
                "scroll-mr": D()
            }],
            "scroll-mb": [{
                "scroll-mb": D()
            }],
            "scroll-ml": [{
                "scroll-ml": D()
            }],
            "scroll-p": [{
                "scroll-p": D()
            }],
            "scroll-px": [{
                "scroll-px": D()
            }],
            "scroll-py": [{
                "scroll-py": D()
            }],
            "scroll-ps": [{
                "scroll-ps": D()
            }],
            "scroll-pe": [{
                "scroll-pe": D()
            }],
            "scroll-pt": [{
                "scroll-pt": D()
            }],
            "scroll-pr": [{
                "scroll-pr": D()
            }],
            "scroll-pb": [{
                "scroll-pb": D()
            }],
            "scroll-pl": [{
                "scroll-pl": D()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", X]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [on, Pn, xa]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , Xx = Ox(Yx);
function ht(...e) {
    return Xx(gg(e))
}
const Jx = lx
  , Tg = S.forwardRef( ({className: e, ...t}, n) => x.jsx(cg, {
    ref: n,
    className: ht("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Tg.displayName = cg.displayName;
const Zx = vg("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Ng = S.forwardRef( ({className: e, variant: t, ...n}, r) => x.jsx(ug, {
    ref: r,
    className: ht(Zx({
        variant: t
    }), e),
    ...n
}));
Ng.displayName = ug.displayName;
const e1 = S.forwardRef( ({className: e, ...t}, n) => x.jsx(pg, {
    ref: n,
    className: ht("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
e1.displayName = pg.displayName;
const Rg = S.forwardRef( ({className: e, ...t}, n) => x.jsx(hg, {
    ref: n,
    className: ht("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: x.jsx(Sg, {
        className: "h-4 w-4"
    })
}));
Rg.displayName = hg.displayName;
const jg = S.forwardRef( ({className: e, ...t}, n) => x.jsx(dg, {
    ref: n,
    className: ht("text-sm font-semibold", e),
    ...t
}));
jg.displayName = dg.displayName;
const Ag = S.forwardRef( ({className: e, ...t}, n) => x.jsx(fg, {
    ref: n,
    className: ht("text-sm opacity-90", e),
    ...t
}));
Ag.displayName = fg.displayName;
function t1() {
    const {toasts: e} = hw();
    return x.jsxs(Jx, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...s}) {
            return x.jsxs(Ng, {
                ...s,
                children: [x.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && x.jsx(jg, {
                        children: n
                    }), r && x.jsx(Ag, {
                        children: r
                    })]
                }), o, x.jsx(Rg, {})]
            }, t)
        }), x.jsx(Tg, {})]
    })
}
var xf = ["light", "dark"]
  , n1 = "(prefers-color-scheme: dark)"
  , r1 = S.createContext(void 0)
  , o1 = {
    setTheme: e => {}
    ,
    themes: []
}
  , s1 = () => {
    var e;
    return (e = S.useContext(r1)) != null ? e : o1
}
;
S.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: s, value: i, attrs: l, nonce: a}) => {
    let c = s === "system"
      , u = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(w => `'${w}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , d = o ? xf.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , m = (w, g=!1, y=!0) => {
        let f = i ? i[w] : w
          , h = g ? w + "|| ''" : `'${f}'`
          , v = "";
        return o && y && !g && xf.includes(w) && (v += `d.style.colorScheme = '${w}';`),
        n === "class" ? g || f ? v += `c.add(${h})` : v += "null" : f && (v += `d[s](n,${h})`),
        v
    }
      , p = e ? `!function(){${u}${m(e)}}()` : r ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${n1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${m(i ? "x[e]" : "e", !0)}}${c ? "" : "else{" + m(s, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${m(i ? "x[e]" : "e", !0)}}else{${m(s, !1, !1)};}${d}}catch(t){}}();`;
    return S.createElement("script", {
        nonce: a,
        dangerouslySetInnerHTML: {
            __html: p
        }
    })
}
);
var i1 = e => {
    switch (e) {
    case "success":
        return c1;
    case "info":
        return d1;
    case "warning":
        return u1;
    case "error":
        return f1;
    default:
        return null
    }
}
  , l1 = Array(12).fill(0)
  , a1 = ({visible: e, className: t}) => L.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, L.createElement("div", {
    className: "sonner-spinner"
}, l1.map( (n, r) => L.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , c1 = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, L.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , u1 = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, L.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , d1 = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, L.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , f1 = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, L.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , p1 = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, L.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), L.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , h1 = () => {
    let[e,t] = L.useState(document.hidden);
    return L.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Cc = 1
  , m1 = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Cc++
              , s = this.toasts.find(l => l.id === o)
              , i = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            s ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({
                ...l,
                ...e,
                id: o,
                title: n
            }),
            {
                ...l,
                ...e,
                id: o,
                dismissible: i,
                title: n
            }) : l) : this.addToast({
                title: n,
                ...r,
                dismissible: i,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, s, i = r.then(async a => {
                if (s = ["resolve", a],
                L.isValidElement(a))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: a
                    });
                else if (v1(a) && !a.ok) {
                    o = !1;
                    let c = typeof t.error == "function" ? await t.error(`HTTP error! status: ${a.status}`) : t.error
                      , u = typeof t.description == "function" ? await t.description(`HTTP error! status: ${a.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: c,
                        description: u
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let c = typeof t.success == "function" ? await t.success(a) : t.success
                      , u = typeof t.description == "function" ? await t.description(a) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: c,
                        description: u
                    })
                }
            }
            ).catch(async a => {
                if (s = ["reject", a],
                t.error !== void 0) {
                    o = !1;
                    let c = typeof t.error == "function" ? await t.error(a) : t.error
                      , u = typeof t.description == "function" ? await t.description(a) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: c,
                        description: u
                    })
                }
            }
            ).finally( () => {
                var a;
                o && (this.dismiss(n),
                n = void 0),
                (a = t.finally) == null || a.call(t)
            }
            ), l = () => new Promise( (a, c) => i.then( () => s[0] === "reject" ? c(s[1]) : a(s[1])).catch(c));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: l
            } : Object.assign(n, {
                unwrap: l
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Cc++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , Ye = new m1
  , g1 = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Cc++;
    return Ye.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , v1 = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , y1 = g1
  , w1 = () => Ye.toasts
  , x1 = () => Ye.getActiveToasts();
Object.assign(y1, {
    success: Ye.success,
    info: Ye.info,
    warning: Ye.warning,
    error: Ye.error,
    custom: Ye.custom,
    message: Ye.message,
    promise: Ye.promise,
    dismiss: Ye.dismiss,
    loading: Ye.loading
}, {
    getHistory: w1,
    getToasts: x1
});
function S1(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
S1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function di(e) {
    return e.label !== void 0
}
var C1 = 3
  , b1 = "32px"
  , E1 = "16px"
  , Sf = 4e3
  , k1 = 356
  , P1 = 14
  , T1 = 20
  , N1 = 200;
function jt(...e) {
    return e.filter(Boolean).join(" ")
}
function R1(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var j1 = e => {
    var t, n, r, o, s, i, l, a, c, u, d;
    let {invert: m, toast: p, unstyled: w, interacting: g, setHeights: y, visibleToasts: f, heights: h, index: v, toasts: C, expanded: b, removeToast: k, defaultRichColors: E, closeButton: P, style: j, cancelButtonStyle: A, actionButtonStyle: z, className: D="", descriptionClassName: V="", duration: M, position: H, gap: $, loadingIcon: W, expandByDefault: T, classNames: R, icons: _, closeButtonAriaLabel: U="Close toast", pauseWhenPageIsHidden: B} = e
      , [G,Q] = L.useState(null)
      , [se,ve] = L.useState(null)
      , [q,ye] = L.useState(!1)
      , [Re,Ce] = L.useState(!1)
      , [te,F] = L.useState(!1)
      , [Z,ae] = L.useState(!1)
      , [ke,$e] = L.useState(!1)
      , [rt,ot] = L.useState(0)
      , [Ue,Vt] = L.useState(0)
      , Ct = L.useRef(p.duration || M || Sf)
      , jr = L.useRef(null)
      , bt = L.useRef(null)
      , Bs = v === 0
      , $s = v + 1 <= f
      , qe = p.type
      , rn = p.dismissible !== !1
      , Bl = p.className || ""
      , Po = p.descriptionClassName || ""
      , Et = L.useMemo( () => h.findIndex(K => K.toastId === p.id) || 0, [h, p.id])
      , To = L.useMemo( () => {
        var K;
        return (K = p.closeButton) != null ? K : P
    }
    , [p.closeButton, P])
      , Ar = L.useMemo( () => p.duration || M || Sf, [p.duration, M])
      , xn = L.useRef(0)
      , Sn = L.useRef(0)
      , Us = L.useRef(0)
      , Cn = L.useRef(null)
      , [$l,Ul] = H.split("-")
      , No = L.useMemo( () => h.reduce( (K, re, ie) => ie >= Et ? K : K + re.height, 0), [h, Et])
      , Ws = h1()
      , Vs = p.invert || m
      , Or = qe === "loading";
    Sn.current = L.useMemo( () => Et * $ + No, [Et, No]),
    L.useEffect( () => {
        Ct.current = Ar
    }
    , [Ar]),
    L.useEffect( () => {
        ye(!0)
    }
    , []),
    L.useEffect( () => {
        let K = bt.current;
        if (K) {
            let re = K.getBoundingClientRect().height;
            return Vt(re),
            y(ie => [{
                toastId: p.id,
                height: re,
                position: p.position
            }, ...ie]),
            () => y(ie => ie.filter(Pt => Pt.toastId !== p.id))
        }
    }
    , [y, p.id]),
    L.useLayoutEffect( () => {
        if (!q)
            return;
        let K = bt.current
          , re = K.style.height;
        K.style.height = "auto";
        let ie = K.getBoundingClientRect().height;
        K.style.height = re,
        Vt(ie),
        y(Pt => Pt.find(Tt => Tt.toastId === p.id) ? Pt.map(Tt => Tt.toastId === p.id ? {
            ...Tt,
            height: ie
        } : Tt) : [{
            toastId: p.id,
            height: ie,
            position: p.position
        }, ...Pt])
    }
    , [q, p.title, p.description, y, p.id]);
    let kt = L.useCallback( () => {
        Ce(!0),
        ot(Sn.current),
        y(K => K.filter(re => re.toastId !== p.id)),
        setTimeout( () => {
            k(p)
        }
        , N1)
    }
    , [p, k, y, Sn]);
    L.useEffect( () => {
        if (p.promise && qe === "loading" || p.duration === 1 / 0 || p.type === "loading")
            return;
        let K;
        return b || g || B && Ws ? ( () => {
            if (Us.current < xn.current) {
                let re = new Date().getTime() - xn.current;
                Ct.current = Ct.current - re
            }
            Us.current = new Date().getTime()
        }
        )() : Ct.current !== 1 / 0 && (xn.current = new Date().getTime(),
        K = setTimeout( () => {
            var re;
            (re = p.onAutoClose) == null || re.call(p, p),
            kt()
        }
        , Ct.current)),
        () => clearTimeout(K)
    }
    , [b, g, p, qe, B, Ws, kt]),
    L.useEffect( () => {
        p.delete && kt()
    }
    , [kt, p.delete]);
    function Wl() {
        var K, re, ie;
        return _ != null && _.loading ? L.createElement("div", {
            className: jt(R == null ? void 0 : R.loader, (K = p == null ? void 0 : p.classNames) == null ? void 0 : K.loader, "sonner-loader"),
            "data-visible": qe === "loading"
        }, _.loading) : W ? L.createElement("div", {
            className: jt(R == null ? void 0 : R.loader, (re = p == null ? void 0 : p.classNames) == null ? void 0 : re.loader, "sonner-loader"),
            "data-visible": qe === "loading"
        }, W) : L.createElement(a1, {
            className: jt(R == null ? void 0 : R.loader, (ie = p == null ? void 0 : p.classNames) == null ? void 0 : ie.loader),
            visible: qe === "loading"
        })
    }
    return L.createElement("li", {
        tabIndex: 0,
        ref: bt,
        className: jt(D, Bl, R == null ? void 0 : R.toast, (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast, R == null ? void 0 : R.default, R == null ? void 0 : R[qe], (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[qe]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = p.richColors) != null ? r : E,
        "data-styled": !(p.jsx || p.unstyled || w),
        "data-mounted": q,
        "data-promise": !!p.promise,
        "data-swiped": ke,
        "data-removed": Re,
        "data-visible": $s,
        "data-y-position": $l,
        "data-x-position": Ul,
        "data-index": v,
        "data-front": Bs,
        "data-swiping": te,
        "data-dismissible": rn,
        "data-type": qe,
        "data-invert": Vs,
        "data-swipe-out": Z,
        "data-swipe-direction": se,
        "data-expanded": !!(b || T && q),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": C.length - v,
            "--offset": `${Re ? rt : Sn.current}px`,
            "--initial-height": T ? "auto" : `${Ue}px`,
            ...j,
            ...p.style
        },
        onDragEnd: () => {
            F(!1),
            Q(null),
            Cn.current = null
        }
        ,
        onPointerDown: K => {
            Or || !rn || (jr.current = new Date,
            ot(Sn.current),
            K.target.setPointerCapture(K.pointerId),
            K.target.tagName !== "BUTTON" && (F(!0),
            Cn.current = {
                x: K.clientX,
                y: K.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var K, re, ie, Pt;
            if (Z || !rn)
                return;
            Cn.current = null;
            let Tt = Number(((K = bt.current) == null ? void 0 : K.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , bn = Number(((re = bt.current) == null ? void 0 : re.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , ir = new Date().getTime() - ((ie = jr.current) == null ? void 0 : ie.getTime())
              , Nt = G === "x" ? Tt : bn
              , En = Math.abs(Nt) / ir;
            if (Math.abs(Nt) >= T1 || En > .11) {
                ot(Sn.current),
                (Pt = p.onDismiss) == null || Pt.call(p, p),
                ve(G === "x" ? Tt > 0 ? "right" : "left" : bn > 0 ? "down" : "up"),
                kt(),
                ae(!0),
                $e(!1);
                return
            }
            F(!1),
            Q(null)
        }
        ,
        onPointerMove: K => {
            var re, ie, Pt, Tt;
            if (!Cn.current || !rn || ((re = window.getSelection()) == null ? void 0 : re.toString().length) > 0)
                return;
            let bn = K.clientY - Cn.current.y
              , ir = K.clientX - Cn.current.x
              , Nt = (ie = e.swipeDirections) != null ? ie : R1(H);
            !G && (Math.abs(ir) > 1 || Math.abs(bn) > 1) && Q(Math.abs(ir) > Math.abs(bn) ? "x" : "y");
            let En = {
                x: 0,
                y: 0
            };
            G === "y" ? (Nt.includes("top") || Nt.includes("bottom")) && (Nt.includes("top") && bn < 0 || Nt.includes("bottom") && bn > 0) && (En.y = bn) : G === "x" && (Nt.includes("left") || Nt.includes("right")) && (Nt.includes("left") && ir < 0 || Nt.includes("right") && ir > 0) && (En.x = ir),
            (Math.abs(En.x) > 0 || Math.abs(En.y) > 0) && $e(!0),
            (Pt = bt.current) == null || Pt.style.setProperty("--swipe-amount-x", `${En.x}px`),
            (Tt = bt.current) == null || Tt.style.setProperty("--swipe-amount-y", `${En.y}px`)
        }
    }, To && !p.jsx ? L.createElement("button", {
        "aria-label": U,
        "data-disabled": Or,
        "data-close-button": !0,
        onClick: Or || !rn ? () => {}
        : () => {
            var K;
            kt(),
            (K = p.onDismiss) == null || K.call(p, p)
        }
        ,
        className: jt(R == null ? void 0 : R.closeButton, (o = p == null ? void 0 : p.classNames) == null ? void 0 : o.closeButton)
    }, (s = _ == null ? void 0 : _.close) != null ? s : p1) : null, p.jsx || S.isValidElement(p.title) ? p.jsx ? p.jsx : typeof p.title == "function" ? p.title() : p.title : L.createElement(L.Fragment, null, qe || p.icon || p.promise ? L.createElement("div", {
        "data-icon": "",
        className: jt(R == null ? void 0 : R.icon, (i = p == null ? void 0 : p.classNames) == null ? void 0 : i.icon)
    }, p.promise || p.type === "loading" && !p.icon ? p.icon || Wl() : null, p.type !== "loading" ? p.icon || (_ == null ? void 0 : _[qe]) || i1(qe) : null) : null, L.createElement("div", {
        "data-content": "",
        className: jt(R == null ? void 0 : R.content, (l = p == null ? void 0 : p.classNames) == null ? void 0 : l.content)
    }, L.createElement("div", {
        "data-title": "",
        className: jt(R == null ? void 0 : R.title, (a = p == null ? void 0 : p.classNames) == null ? void 0 : a.title)
    }, typeof p.title == "function" ? p.title() : p.title), p.description ? L.createElement("div", {
        "data-description": "",
        className: jt(V, Po, R == null ? void 0 : R.description, (c = p == null ? void 0 : p.classNames) == null ? void 0 : c.description)
    }, typeof p.description == "function" ? p.description() : p.description) : null), S.isValidElement(p.cancel) ? p.cancel : p.cancel && di(p.cancel) ? L.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: p.cancelButtonStyle || A,
        onClick: K => {
            var re, ie;
            di(p.cancel) && rn && ((ie = (re = p.cancel).onClick) == null || ie.call(re, K),
            kt())
        }
        ,
        className: jt(R == null ? void 0 : R.cancelButton, (u = p == null ? void 0 : p.classNames) == null ? void 0 : u.cancelButton)
    }, p.cancel.label) : null, S.isValidElement(p.action) ? p.action : p.action && di(p.action) ? L.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: p.actionButtonStyle || z,
        onClick: K => {
            var re, ie;
            di(p.action) && ((ie = (re = p.action).onClick) == null || ie.call(re, K),
            !K.defaultPrevented && kt())
        }
        ,
        className: jt(R == null ? void 0 : R.actionButton, (d = p == null ? void 0 : p.classNames) == null ? void 0 : d.actionButton)
    }, p.action.label) : null))
}
;
function Cf() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function A1(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let s = o === 1
          , i = s ? "--mobile-offset" : "--offset"
          , l = s ? E1 : b1;
        function a(c) {
            ["top", "right", "bottom", "left"].forEach(u => {
                n[`${i}-${u}`] = typeof c == "number" ? `${c}px` : c
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? a(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(c => {
            r[c] === void 0 ? n[`${i}-${c}`] = l : n[`${i}-${c}`] = typeof r[c] == "number" ? `${r[c]}px` : r[c]
        }
        ) : a(l)
    }
    ),
    n
}
var O1 = S.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: s, closeButton: i, className: l, offset: a, mobileOffset: c, theme: u="light", richColors: d, duration: m, style: p, visibleToasts: w=C1, toastOptions: g, dir: y=Cf(), gap: f=P1, loadingIcon: h, icons: v, containerAriaLabel: C="Notifications", pauseWhenPageIsHidden: b} = e
      , [k,E] = L.useState([])
      , P = L.useMemo( () => Array.from(new Set([r].concat(k.filter(B => B.position).map(B => B.position)))), [k, r])
      , [j,A] = L.useState([])
      , [z,D] = L.useState(!1)
      , [V,M] = L.useState(!1)
      , [H,$] = L.useState(u !== "system" ? u : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , W = L.useRef(null)
      , T = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , R = L.useRef(null)
      , _ = L.useRef(!1)
      , U = L.useCallback(B => {
        E(G => {
            var Q;
            return (Q = G.find(se => se.id === B.id)) != null && Q.delete || Ye.dismiss(B.id),
            G.filter( ({id: se}) => se !== B.id)
        }
        )
    }
    , []);
    return L.useEffect( () => Ye.subscribe(B => {
        if (B.dismiss) {
            E(G => G.map(Q => Q.id === B.id ? {
                ...Q,
                delete: !0
            } : Q));
            return
        }
        setTimeout( () => {
            $m.flushSync( () => {
                E(G => {
                    let Q = G.findIndex(se => se.id === B.id);
                    return Q !== -1 ? [...G.slice(0, Q), {
                        ...G[Q],
                        ...B
                    }, ...G.slice(Q + 1)] : [B, ...G]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    L.useEffect( () => {
        if (u !== "system") {
            $(u);
            return
        }
        if (u === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")),
        typeof window > "u")
            return;
        let B = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            B.addEventListener("change", ({matches: G}) => {
                $(G ? "dark" : "light")
            }
            )
        } catch {
            B.addListener( ({matches: Q}) => {
                try {
                    $(Q ? "dark" : "light")
                } catch (se) {
                    console.error(se)
                }
            }
            )
        }
    }
    , [u]),
    L.useEffect( () => {
        k.length <= 1 && D(!1)
    }
    , [k]),
    L.useEffect( () => {
        let B = G => {
            var Q, se;
            o.every(ve => G[ve] || G.code === ve) && (D(!0),
            (Q = W.current) == null || Q.focus()),
            G.code === "Escape" && (document.activeElement === W.current || (se = W.current) != null && se.contains(document.activeElement)) && D(!1)
        }
        ;
        return document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
    }
    , [o]),
    L.useEffect( () => {
        if (W.current)
            return () => {
                R.current && (R.current.focus({
                    preventScroll: !0
                }),
                R.current = null,
                _.current = !1)
            }
    }
    , [W.current]),
    L.createElement("section", {
        ref: t,
        "aria-label": `${C} ${T}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, P.map( (B, G) => {
        var Q;
        let[se,ve] = B.split("-");
        return k.length ? L.createElement("ol", {
            key: B,
            dir: y === "auto" ? Cf() : y,
            tabIndex: -1,
            ref: W,
            className: l,
            "data-sonner-toaster": !0,
            "data-theme": H,
            "data-y-position": se,
            "data-lifted": z && k.length > 1 && !s,
            "data-x-position": ve,
            style: {
                "--front-toast-height": `${((Q = j[0]) == null ? void 0 : Q.height) || 0}px`,
                "--width": `${k1}px`,
                "--gap": `${f}px`,
                ...p,
                ...A1(a, c)
            },
            onBlur: q => {
                _.current && !q.currentTarget.contains(q.relatedTarget) && (_.current = !1,
                R.current && (R.current.focus({
                    preventScroll: !0
                }),
                R.current = null))
            }
            ,
            onFocus: q => {
                q.target instanceof HTMLElement && q.target.dataset.dismissible === "false" || _.current || (_.current = !0,
                R.current = q.relatedTarget)
            }
            ,
            onMouseEnter: () => D(!0),
            onMouseMove: () => D(!0),
            onMouseLeave: () => {
                V || D(!1)
            }
            ,
            onDragEnd: () => D(!1),
            onPointerDown: q => {
                q.target instanceof HTMLElement && q.target.dataset.dismissible === "false" || M(!0)
            }
            ,
            onPointerUp: () => M(!1)
        }, k.filter(q => !q.position && G === 0 || q.position === B).map( (q, ye) => {
            var Re, Ce;
            return L.createElement(j1, {
                key: q.id,
                icons: v,
                index: ye,
                toast: q,
                defaultRichColors: d,
                duration: (Re = g == null ? void 0 : g.duration) != null ? Re : m,
                className: g == null ? void 0 : g.className,
                descriptionClassName: g == null ? void 0 : g.descriptionClassName,
                invert: n,
                visibleToasts: w,
                closeButton: (Ce = g == null ? void 0 : g.closeButton) != null ? Ce : i,
                interacting: V,
                position: B,
                style: g == null ? void 0 : g.style,
                unstyled: g == null ? void 0 : g.unstyled,
                classNames: g == null ? void 0 : g.classNames,
                cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                removeToast: U,
                toasts: k.filter(te => te.position == q.position),
                heights: j.filter(te => te.position == q.position),
                setHeights: A,
                expandByDefault: s,
                gap: f,
                loadingIcon: h,
                expanded: z,
                pauseWhenPageIsHidden: b,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const L1 = ({...e}) => {
    const {theme: t="system"} = s1();
    return x.jsx(O1, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , M1 = ["top", "right", "bottom", "left"]
  , er = Math.min
  , it = Math.max
  , nl = Math.round
  , fi = Math.floor
  , en = e => ({
    x: e,
    y: e
})
  , D1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , _1 = {
    start: "end",
    end: "start"
};
function bc(e, t, n) {
    return it(e, er(t, n))
}
function vn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function yn(e) {
    return e.split("-")[0]
}
function Co(e) {
    return e.split("-")[1]
}
function _u(e) {
    return e === "x" ? "y" : "x"
}
function zu(e) {
    return e === "y" ? "height" : "width"
}
const z1 = new Set(["top", "bottom"]);
function Xt(e) {
    return z1.has(yn(e)) ? "y" : "x"
}
function Iu(e) {
    return _u(Xt(e))
}
function I1(e, t, n) {
    n === void 0 && (n = !1);
    const r = Co(e)
      , o = Iu(e)
      , s = zu(o);
    let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (i = rl(i)),
    [i, rl(i)]
}
function F1(e) {
    const t = rl(e);
    return [Ec(e), t, Ec(t)]
}
function Ec(e) {
    return e.replace(/start|end/g, t => _1[t])
}
const bf = ["left", "right"]
  , Ef = ["right", "left"]
  , B1 = ["top", "bottom"]
  , $1 = ["bottom", "top"];
function U1(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? Ef : bf : t ? bf : Ef;
    case "left":
    case "right":
        return t ? B1 : $1;
    default:
        return []
    }
}
function W1(e, t, n, r) {
    const o = Co(e);
    let s = U1(yn(e), n === "start", r);
    return o && (s = s.map(i => i + "-" + o),
    t && (s = s.concat(s.map(Ec)))),
    s
}
function rl(e) {
    return e.replace(/left|right|bottom|top/g, t => D1[t])
}
function V1(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Og(e) {
    return typeof e != "number" ? V1(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function ol(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function kf(e, t, n) {
    let {reference: r, floating: o} = e;
    const s = Xt(t)
      , i = Iu(t)
      , l = zu(i)
      , a = yn(t)
      , c = s === "y"
      , u = r.x + r.width / 2 - o.width / 2
      , d = r.y + r.height / 2 - o.height / 2
      , m = r[l] / 2 - o[l] / 2;
    let p;
    switch (a) {
    case "top":
        p = {
            x: u,
            y: r.y - o.height
        };
        break;
    case "bottom":
        p = {
            x: u,
            y: r.y + r.height
        };
        break;
    case "right":
        p = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        p = {
            x: r.x - o.width,
            y: d
        };
        break;
    default:
        p = {
            x: r.x,
            y: r.y
        }
    }
    switch (Co(t)) {
    case "start":
        p[i] -= m * (n && c ? -1 : 1);
        break;
    case "end":
        p[i] += m * (n && c ? -1 : 1);
        break
    }
    return p
}
const H1 = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: s=[], platform: i} = n
      , l = s.filter(Boolean)
      , a = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let c = await i.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: u, y: d} = kf(c, r, a)
      , m = r
      , p = {}
      , w = 0;
    for (let g = 0; g < l.length; g++) {
        const {name: y, fn: f} = l[g]
          , {x: h, y: v, data: C, reset: b} = await f({
            x: u,
            y: d,
            initialPlacement: r,
            placement: m,
            strategy: o,
            middlewareData: p,
            rects: c,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        u = h ?? u,
        d = v ?? d,
        p = {
            ...p,
            [y]: {
                ...p[y],
                ...C
            }
        },
        b && w <= 50 && (w++,
        typeof b == "object" && (b.placement && (m = b.placement),
        b.rects && (c = b.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : b.rects),
        {x: u, y: d} = kf(c, m, a)),
        g = -1)
    }
    return {
        x: u,
        y: d,
        placement: m,
        strategy: o,
        middlewareData: p
    }
}
;
async function ws(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: s, rects: i, elements: l, strategy: a} = e
      , {boundary: c="clippingAncestors", rootBoundary: u="viewport", elementContext: d="floating", altBoundary: m=!1, padding: p=0} = vn(t, e)
      , w = Og(p)
      , y = l[m ? d === "floating" ? "reference" : "floating" : d]
      , f = ol(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null || n ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
        boundary: c,
        rootBoundary: u,
        strategy: a
    }))
      , h = d === "floating" ? {
        x: r,
        y: o,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference
      , v = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating))
      , C = await (s.isElement == null ? void 0 : s.isElement(v)) ? await (s.getScale == null ? void 0 : s.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , b = ol(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: h,
        offsetParent: v,
        strategy: a
    }) : h);
    return {
        top: (f.top - b.top + w.top) / C.y,
        bottom: (b.bottom - f.bottom + w.bottom) / C.y,
        left: (f.left - b.left + w.left) / C.x,
        right: (b.right - f.right + w.right) / C.x
    }
}
const Q1 = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: s, platform: i, elements: l, middlewareData: a} = t
          , {element: c, padding: u=0} = vn(e, t) || {};
        if (c == null)
            return {};
        const d = Og(u)
          , m = {
            x: n,
            y: r
        }
          , p = Iu(o)
          , w = zu(p)
          , g = await i.getDimensions(c)
          , y = p === "y"
          , f = y ? "top" : "left"
          , h = y ? "bottom" : "right"
          , v = y ? "clientHeight" : "clientWidth"
          , C = s.reference[w] + s.reference[p] - m[p] - s.floating[w]
          , b = m[p] - s.reference[p]
          , k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
        let E = k ? k[v] : 0;
        (!E || !await (i.isElement == null ? void 0 : i.isElement(k))) && (E = l.floating[v] || s.floating[w]);
        const P = C / 2 - b / 2
          , j = E / 2 - g[w] / 2 - 1
          , A = er(d[f], j)
          , z = er(d[h], j)
          , D = A
          , V = E - g[w] - z
          , M = E / 2 - g[w] / 2 + P
          , H = bc(D, M, V)
          , $ = !a.arrow && Co(o) != null && M !== H && s.reference[w] / 2 - (M < D ? A : z) - g[w] / 2 < 0
          , W = $ ? M < D ? M - D : M - V : 0;
        return {
            [p]: m[p] + W,
            data: {
                [p]: H,
                centerOffset: M - H - W,
                ...$ && {
                    alignmentOffset: W
                }
            },
            reset: $
        }
    }
})
  , K1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: s, rects: i, initialPlacement: l, platform: a, elements: c} = t
              , {mainAxis: u=!0, crossAxis: d=!0, fallbackPlacements: m, fallbackStrategy: p="bestFit", fallbackAxisSideDirection: w="none", flipAlignment: g=!0, ...y} = vn(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset)
                return {};
            const f = yn(o)
              , h = Xt(l)
              , v = yn(l) === l
              , C = await (a.isRTL == null ? void 0 : a.isRTL(c.floating))
              , b = m || (v || !g ? [rl(l)] : F1(l))
              , k = w !== "none";
            !m && k && b.push(...W1(l, g, w, C));
            const E = [l, ...b]
              , P = await ws(t, y)
              , j = [];
            let A = ((r = s.flip) == null ? void 0 : r.overflows) || [];
            if (u && j.push(P[f]),
            d) {
                const M = I1(o, i, C);
                j.push(P[M[0]], P[M[1]])
            }
            if (A = [...A, {
                placement: o,
                overflows: j
            }],
            !j.every(M => M <= 0)) {
                var z, D;
                const M = (((z = s.flip) == null ? void 0 : z.index) || 0) + 1
                  , H = E[M];
                if (H && (!(d === "alignment" ? h !== Xt(H) : !1) || A.every(T => T.overflows[0] > 0 && Xt(T.placement) === h)))
                    return {
                        data: {
                            index: M,
                            overflows: A
                        },
                        reset: {
                            placement: H
                        }
                    };
                let $ = (D = A.filter(W => W.overflows[0] <= 0).sort( (W, T) => W.overflows[1] - T.overflows[1])[0]) == null ? void 0 : D.placement;
                if (!$)
                    switch (p) {
                    case "bestFit":
                        {
                            var V;
                            const W = (V = A.filter(T => {
                                if (k) {
                                    const R = Xt(T.placement);
                                    return R === h || R === "y"
                                }
                                return !0
                            }
                            ).map(T => [T.placement, T.overflows.filter(R => R > 0).reduce( (R, _) => R + _, 0)]).sort( (T, R) => T[1] - R[1])[0]) == null ? void 0 : V[0];
                            W && ($ = W);
                            break
                        }
                    case "initialPlacement":
                        $ = l;
                        break
                    }
                if (o !== $)
                    return {
                        reset: {
                            placement: $
                        }
                    }
            }
            return {}
        }
    }
};
function Pf(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Tf(e) {
    return M1.some(t => e[t] >= 0)
}
const G1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = vn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const s = await ws(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , i = Pf(s, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: i,
                            referenceHidden: Tf(i)
                        }
                    }
                }
            case "escaped":
                {
                    const s = await ws(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , i = Pf(s, n.floating);
                    return {
                        data: {
                            escapedOffsets: i,
                            escaped: Tf(i)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Lg = new Set(["left", "top"]);
async function q1(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , i = yn(n)
      , l = Co(n)
      , a = Xt(n) === "y"
      , c = Lg.has(i) ? -1 : 1
      , u = s && a ? -1 : 1
      , d = vn(t, e);
    let {mainAxis: m, crossAxis: p, alignmentAxis: w} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return l && typeof w == "number" && (p = l === "end" ? w * -1 : w),
    a ? {
        x: p * u,
        y: m * c
    } : {
        x: m * c,
        y: p * u
    }
}
const Y1 = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: s, placement: i, middlewareData: l} = t
              , a = await q1(t, e);
            return i === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                x: o + a.x,
                y: s + a.y,
                data: {
                    ...a,
                    placement: i
                }
            }
        }
    }
}
  , X1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: s=!0, crossAxis: i=!1, limiter: l={
                fn: y => {
                    let {x: f, y: h} = y;
                    return {
                        x: f,
                        y: h
                    }
                }
            }, ...a} = vn(e, t)
              , c = {
                x: n,
                y: r
            }
              , u = await ws(t, a)
              , d = Xt(yn(o))
              , m = _u(d);
            let p = c[m]
              , w = c[d];
            if (s) {
                const y = m === "y" ? "top" : "left"
                  , f = m === "y" ? "bottom" : "right"
                  , h = p + u[y]
                  , v = p - u[f];
                p = bc(h, p, v)
            }
            if (i) {
                const y = d === "y" ? "top" : "left"
                  , f = d === "y" ? "bottom" : "right"
                  , h = w + u[y]
                  , v = w - u[f];
                w = bc(h, w, v)
            }
            const g = l.fn({
                ...t,
                [m]: p,
                [d]: w
            });
            return {
                ...g,
                data: {
                    x: g.x - n,
                    y: g.y - r,
                    enabled: {
                        [m]: s,
                        [d]: i
                    }
                }
            }
        }
    }
}
  , J1 = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: s, middlewareData: i} = t
              , {offset: l=0, mainAxis: a=!0, crossAxis: c=!0} = vn(e, t)
              , u = {
                x: n,
                y: r
            }
              , d = Xt(o)
              , m = _u(d);
            let p = u[m]
              , w = u[d];
            const g = vn(l, t)
              , y = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (a) {
                const v = m === "y" ? "height" : "width"
                  , C = s.reference[m] - s.floating[v] + y.mainAxis
                  , b = s.reference[m] + s.reference[v] - y.mainAxis;
                p < C ? p = C : p > b && (p = b)
            }
            if (c) {
                var f, h;
                const v = m === "y" ? "width" : "height"
                  , C = Lg.has(yn(o))
                  , b = s.reference[d] - s.floating[v] + (C && ((f = i.offset) == null ? void 0 : f[d]) || 0) + (C ? 0 : y.crossAxis)
                  , k = s.reference[d] + s.reference[v] + (C ? 0 : ((h = i.offset) == null ? void 0 : h[d]) || 0) - (C ? y.crossAxis : 0);
                w < b ? w = b : w > k && (w = k)
            }
            return {
                [m]: p,
                [d]: w
            }
        }
    }
}
  , Z1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: s, platform: i, elements: l} = t
              , {apply: a= () => {}
            , ...c} = vn(e, t)
              , u = await ws(t, c)
              , d = yn(o)
              , m = Co(o)
              , p = Xt(o) === "y"
              , {width: w, height: g} = s.floating;
            let y, f;
            d === "top" || d === "bottom" ? (y = d,
            f = m === (await (i.isRTL == null ? void 0 : i.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (f = d,
            y = m === "end" ? "top" : "bottom");
            const h = g - u.top - u.bottom
              , v = w - u.left - u.right
              , C = er(g - u[y], h)
              , b = er(w - u[f], v)
              , k = !t.middlewareData.shift;
            let E = C
              , P = b;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (E = h),
            k && !m) {
                const A = it(u.left, 0)
                  , z = it(u.right, 0)
                  , D = it(u.top, 0)
                  , V = it(u.bottom, 0);
                p ? P = w - 2 * (A !== 0 || z !== 0 ? A + z : it(u.left, u.right)) : E = g - 2 * (D !== 0 || V !== 0 ? D + V : it(u.top, u.bottom))
            }
            await a({
                ...t,
                availableWidth: P,
                availableHeight: E
            });
            const j = await i.getDimensions(l.floating);
            return w !== j.width || g !== j.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Rl() {
    return typeof window < "u"
}
function bo(e) {
    return Mg(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function ct(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function nn(e) {
    var t;
    return (t = (Mg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Mg(e) {
    return Rl() ? e instanceof Node || e instanceof ct(e).Node : !1
}
function Ut(e) {
    return Rl() ? e instanceof Element || e instanceof ct(e).Element : !1
}
function tn(e) {
    return Rl() ? e instanceof HTMLElement || e instanceof ct(e).HTMLElement : !1
}
function Nf(e) {
    return !Rl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ct(e).ShadowRoot
}
const eS = new Set(["inline", "contents"]);
function zs(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = Wt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !eS.has(o)
}
const tS = new Set(["table", "td", "th"]);
function nS(e) {
    return tS.has(bo(e))
}
const rS = [":popover-open", ":modal"];
function jl(e) {
    return rS.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const oS = ["transform", "translate", "scale", "rotate", "perspective"]
  , sS = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , iS = ["paint", "layout", "strict", "content"];
function Fu(e) {
    const t = Bu()
      , n = Ut(e) ? Wt(e) : e;
    return oS.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || sS.some(r => (n.willChange || "").includes(r)) || iS.some(r => (n.contain || "").includes(r))
}
function lS(e) {
    let t = tr(e);
    for (; tn(t) && !go(t); ) {
        if (Fu(t))
            return t;
        if (jl(t))
            return null;
        t = tr(t)
    }
    return null
}
function Bu() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const aS = new Set(["html", "body", "#document"]);
function go(e) {
    return aS.has(bo(e))
}
function Wt(e) {
    return ct(e).getComputedStyle(e)
}
function Al(e) {
    return Ut(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function tr(e) {
    if (bo(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Nf(e) && e.host || nn(e);
    return Nf(t) ? t.host : t
}
function Dg(e) {
    const t = tr(e);
    return go(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : tn(t) && zs(t) ? t : Dg(t)
}
function xs(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Dg(e)
      , s = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , i = ct(o);
    if (s) {
        const l = kc(i);
        return t.concat(i, i.visualViewport || [], zs(o) ? o : [], l && n ? xs(l) : [])
    }
    return t.concat(o, xs(o, [], n))
}
function kc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function _g(e) {
    const t = Wt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = tn(e)
      , s = o ? e.offsetWidth : n
      , i = o ? e.offsetHeight : r
      , l = nl(n) !== s || nl(r) !== i;
    return l && (n = s,
    r = i),
    {
        width: n,
        height: r,
        $: l
    }
}
function $u(e) {
    return Ut(e) ? e : e.contextElement
}
function Zr(e) {
    const t = $u(e);
    if (!tn(t))
        return en(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: s} = _g(t);
    let i = (s ? nl(n.width) : n.width) / r
      , l = (s ? nl(n.height) : n.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    {
        x: i,
        y: l
    }
}
const cS = en(0);
function zg(e) {
    const t = ct(e);
    return !Bu() || !t.visualViewport ? cS : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function uS(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== ct(e) ? !1 : t
}
function kr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , s = $u(e);
    let i = en(1);
    t && (r ? Ut(r) && (i = Zr(r)) : i = Zr(e));
    const l = uS(s, n, r) ? zg(s) : en(0);
    let a = (o.left + l.x) / i.x
      , c = (o.top + l.y) / i.y
      , u = o.width / i.x
      , d = o.height / i.y;
    if (s) {
        const m = ct(s)
          , p = r && Ut(r) ? ct(r) : r;
        let w = m
          , g = kc(w);
        for (; g && r && p !== w; ) {
            const y = Zr(g)
              , f = g.getBoundingClientRect()
              , h = Wt(g)
              , v = f.left + (g.clientLeft + parseFloat(h.paddingLeft)) * y.x
              , C = f.top + (g.clientTop + parseFloat(h.paddingTop)) * y.y;
            a *= y.x,
            c *= y.y,
            u *= y.x,
            d *= y.y,
            a += v,
            c += C,
            w = ct(g),
            g = kc(w)
        }
    }
    return ol({
        width: u,
        height: d,
        x: a,
        y: c
    })
}
function Uu(e, t) {
    const n = Al(e).scrollLeft;
    return t ? t.left + n : kr(nn(e)).left + n
}
function Ig(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : Uu(e, r))
      , s = r.top + t.scrollTop;
    return {
        x: o,
        y: s
    }
}
function dS(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const s = o === "fixed"
      , i = nn(r)
      , l = t ? jl(t.floating) : !1;
    if (r === i || l && s)
        return n;
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , c = en(1);
    const u = en(0)
      , d = tn(r);
    if ((d || !d && !s) && ((bo(r) !== "body" || zs(i)) && (a = Al(r)),
    tn(r))) {
        const p = kr(r);
        c = Zr(r),
        u.x = p.x + r.clientLeft,
        u.y = p.y + r.clientTop
    }
    const m = i && !d && !s ? Ig(i, a, !0) : en(0);
    return {
        width: n.width * c.x,
        height: n.height * c.y,
        x: n.x * c.x - a.scrollLeft * c.x + u.x + m.x,
        y: n.y * c.y - a.scrollTop * c.y + u.y + m.y
    }
}
function fS(e) {
    return Array.from(e.getClientRects())
}
function pS(e) {
    const t = nn(e)
      , n = Al(e)
      , r = e.ownerDocument.body
      , o = it(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , s = it(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + Uu(e);
    const l = -n.scrollTop;
    return Wt(r).direction === "rtl" && (i += it(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: s,
        x: i,
        y: l
    }
}
function hS(e, t) {
    const n = ct(e)
      , r = nn(e)
      , o = n.visualViewport;
    let s = r.clientWidth
      , i = r.clientHeight
      , l = 0
      , a = 0;
    if (o) {
        s = o.width,
        i = o.height;
        const c = Bu();
        (!c || c && t === "fixed") && (l = o.offsetLeft,
        a = o.offsetTop)
    }
    return {
        width: s,
        height: i,
        x: l,
        y: a
    }
}
const mS = new Set(["absolute", "fixed"]);
function gS(e, t) {
    const n = kr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , s = tn(e) ? Zr(e) : en(1)
      , i = e.clientWidth * s.x
      , l = e.clientHeight * s.y
      , a = o * s.x
      , c = r * s.y;
    return {
        width: i,
        height: l,
        x: a,
        y: c
    }
}
function Rf(e, t, n) {
    let r;
    if (t === "viewport")
        r = hS(e, n);
    else if (t === "document")
        r = pS(nn(e));
    else if (Ut(t))
        r = gS(t, n);
    else {
        const o = zg(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return ol(r)
}
function Fg(e, t) {
    const n = tr(e);
    return n === t || !Ut(n) || go(n) ? !1 : Wt(n).position === "fixed" || Fg(n, t)
}
function vS(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = xs(e, [], !1).filter(l => Ut(l) && bo(l) !== "body")
      , o = null;
    const s = Wt(e).position === "fixed";
    let i = s ? tr(e) : e;
    for (; Ut(i) && !go(i); ) {
        const l = Wt(i)
          , a = Fu(i);
        !a && l.position === "fixed" && (o = null),
        (s ? !a && !o : !a && l.position === "static" && !!o && mS.has(o.position) || zs(i) && !a && Fg(e, i)) ? r = r.filter(u => u !== i) : o = l,
        i = tr(i)
    }
    return t.set(e, r),
    r
}
function yS(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const i = [...n === "clippingAncestors" ? jl(t) ? [] : vS(t, this._c) : [].concat(n), r]
      , l = i[0]
      , a = i.reduce( (c, u) => {
        const d = Rf(t, u, o);
        return c.top = it(d.top, c.top),
        c.right = er(d.right, c.right),
        c.bottom = er(d.bottom, c.bottom),
        c.left = it(d.left, c.left),
        c
    }
    , Rf(t, l, o));
    return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top
    }
}
function wS(e) {
    const {width: t, height: n} = _g(e);
    return {
        width: t,
        height: n
    }
}
function xS(e, t, n) {
    const r = tn(t)
      , o = nn(t)
      , s = n === "fixed"
      , i = kr(e, !0, s, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = en(0);
    function c() {
        a.x = Uu(o)
    }
    if (r || !r && !s)
        if ((bo(t) !== "body" || zs(o)) && (l = Al(t)),
        r) {
            const p = kr(t, !0, s, t);
            a.x = p.x + t.clientLeft,
            a.y = p.y + t.clientTop
        } else
            o && c();
    s && !r && o && c();
    const u = o && !r && !s ? Ig(o, l) : en(0)
      , d = i.left + l.scrollLeft - a.x - u.x
      , m = i.top + l.scrollTop - a.y - u.y;
    return {
        x: d,
        y: m,
        width: i.width,
        height: i.height
    }
}
function Sa(e) {
    return Wt(e).position === "static"
}
function jf(e, t) {
    if (!tn(e) || Wt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return nn(e) === n && (n = n.ownerDocument.body),
    n
}
function Bg(e, t) {
    const n = ct(e);
    if (jl(e))
        return n;
    if (!tn(e)) {
        let o = tr(e);
        for (; o && !go(o); ) {
            if (Ut(o) && !Sa(o))
                return o;
            o = tr(o)
        }
        return n
    }
    let r = jf(e, t);
    for (; r && nS(r) && Sa(r); )
        r = jf(r, t);
    return r && go(r) && Sa(r) && !Fu(r) ? n : r || lS(e) || n
}
const SS = async function(e) {
    const t = this.getOffsetParent || Bg
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: xS(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function CS(e) {
    return Wt(e).direction === "rtl"
}
const bS = {
    convertOffsetParentRelativeRectToViewportRelativeRect: dS,
    getDocumentElement: nn,
    getClippingRect: yS,
    getOffsetParent: Bg,
    getElementRects: SS,
    getClientRects: fS,
    getDimensions: wS,
    getScale: Zr,
    isElement: Ut,
    isRTL: CS
};
function $g(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function ES(e, t) {
    let n = null, r;
    const o = nn(e);
    function s() {
        var l;
        clearTimeout(r),
        (l = n) == null || l.disconnect(),
        n = null
    }
    function i(l, a) {
        l === void 0 && (l = !1),
        a === void 0 && (a = 1),
        s();
        const c = e.getBoundingClientRect()
          , {left: u, top: d, width: m, height: p} = c;
        if (l || t(),
        !m || !p)
            return;
        const w = fi(d)
          , g = fi(o.clientWidth - (u + m))
          , y = fi(o.clientHeight - (d + p))
          , f = fi(u)
          , v = {
            rootMargin: -w + "px " + -g + "px " + -y + "px " + -f + "px",
            threshold: it(0, er(1, a)) || 1
        };
        let C = !0;
        function b(k) {
            const E = k[0].intersectionRatio;
            if (E !== a) {
                if (!C)
                    return i();
                E ? i(!1, E) : r = setTimeout( () => {
                    i(!1, 1e-7)
                }
                , 1e3)
            }
            E === 1 && !$g(c, e.getBoundingClientRect()) && i(),
            C = !1
        }
        try {
            n = new IntersectionObserver(b,{
                ...v,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(b,v)
        }
        n.observe(e)
    }
    return i(!0),
    s
}
function kS(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: s=!0, elementResize: i=typeof ResizeObserver == "function", layoutShift: l=typeof IntersectionObserver == "function", animationFrame: a=!1} = r
      , c = $u(e)
      , u = o || s ? [...c ? xs(c) : [], ...xs(t)] : [];
    u.forEach(f => {
        o && f.addEventListener("scroll", n, {
            passive: !0
        }),
        s && f.addEventListener("resize", n)
    }
    );
    const d = c && l ? ES(c, n) : null;
    let m = -1
      , p = null;
    i && (p = new ResizeObserver(f => {
        let[h] = f;
        h && h.target === c && p && (p.unobserve(t),
        cancelAnimationFrame(m),
        m = requestAnimationFrame( () => {
            var v;
            (v = p) == null || v.observe(t)
        }
        )),
        n()
    }
    ),
    c && !a && p.observe(c),
    p.observe(t));
    let w, g = a ? kr(e) : null;
    a && y();
    function y() {
        const f = kr(e);
        g && !$g(g, f) && n(),
        g = f,
        w = requestAnimationFrame(y)
    }
    return n(),
    () => {
        var f;
        u.forEach(h => {
            o && h.removeEventListener("scroll", n),
            s && h.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (f = p) == null || f.disconnect(),
        p = null,
        a && cancelAnimationFrame(w)
    }
}
const PS = Y1
  , TS = X1
  , NS = K1
  , RS = Z1
  , jS = G1
  , Af = Q1
  , AS = J1
  , OS = (e, t, n) => {
    const r = new Map
      , o = {
        platform: bS,
        ...n
    }
      , s = {
        ...o.platform,
        _c: r
    };
    return H1(e, t, {
        ...o,
        platform: s
    })
}
;
var LS = typeof document < "u"
  , MS = function() {}
  , Ni = LS ? S.useLayoutEffect : MS;
function sl(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!sl(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !sl(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Ug(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Of(e, t) {
    const n = Ug(e);
    return Math.round(t * n) / n
}
function Ca(e) {
    const t = S.useRef(e);
    return Ni( () => {
        t.current = e
    }
    ),
    t
}
function DS(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: s, floating: i}={}, transform: l=!0, whileElementsMounted: a, open: c} = e
      , [u,d] = S.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [m,p] = S.useState(r);
    sl(m, r) || p(r);
    const [w,g] = S.useState(null)
      , [y,f] = S.useState(null)
      , h = S.useCallback(T => {
        T !== k.current && (k.current = T,
        g(T))
    }
    , [])
      , v = S.useCallback(T => {
        T !== E.current && (E.current = T,
        f(T))
    }
    , [])
      , C = s || w
      , b = i || y
      , k = S.useRef(null)
      , E = S.useRef(null)
      , P = S.useRef(u)
      , j = a != null
      , A = Ca(a)
      , z = Ca(o)
      , D = Ca(c)
      , V = S.useCallback( () => {
        if (!k.current || !E.current)
            return;
        const T = {
            placement: t,
            strategy: n,
            middleware: m
        };
        z.current && (T.platform = z.current),
        OS(k.current, E.current, T).then(R => {
            const _ = {
                ...R,
                isPositioned: D.current !== !1
            };
            M.current && !sl(P.current, _) && (P.current = _,
            Ds.flushSync( () => {
                d(_)
            }
            ))
        }
        )
    }
    , [m, t, n, z, D]);
    Ni( () => {
        c === !1 && P.current.isPositioned && (P.current.isPositioned = !1,
        d(T => ({
            ...T,
            isPositioned: !1
        })))
    }
    , [c]);
    const M = S.useRef(!1);
    Ni( () => (M.current = !0,
    () => {
        M.current = !1
    }
    ), []),
    Ni( () => {
        if (C && (k.current = C),
        b && (E.current = b),
        C && b) {
            if (A.current)
                return A.current(C, b, V);
            V()
        }
    }
    , [C, b, V, A, j]);
    const H = S.useMemo( () => ({
        reference: k,
        floating: E,
        setReference: h,
        setFloating: v
    }), [h, v])
      , $ = S.useMemo( () => ({
        reference: C,
        floating: b
    }), [C, b])
      , W = S.useMemo( () => {
        const T = {
            position: n,
            left: 0,
            top: 0
        };
        if (!$.floating)
            return T;
        const R = Of($.floating, u.x)
          , _ = Of($.floating, u.y);
        return l ? {
            ...T,
            transform: "translate(" + R + "px, " + _ + "px)",
            ...Ug($.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: R,
            top: _
        }
    }
    , [n, l, $.floating, u.x, u.y]);
    return S.useMemo( () => ({
        ...u,
        update: V,
        refs: H,
        elements: $,
        floatingStyles: W
    }), [u, V, H, $, W])
}
const _S = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Af({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Af({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , zS = (e, t) => ({
    ...PS(e),
    options: [e, t]
})
  , IS = (e, t) => ({
    ...TS(e),
    options: [e, t]
})
  , FS = (e, t) => ({
    ...AS(e),
    options: [e, t]
})
  , BS = (e, t) => ({
    ...NS(e),
    options: [e, t]
})
  , $S = (e, t) => ({
    ...RS(e),
    options: [e, t]
})
  , US = (e, t) => ({
    ...jS(e),
    options: [e, t]
})
  , WS = (e, t) => ({
    ..._S(e),
    options: [e, t]
});
var VS = "Arrow"
  , Wg = S.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...s} = e;
    return x.jsx(nt.svg, {
        ...s,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : x.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Wg.displayName = VS;
var HS = Wg;
function QS(e) {
    const [t,n] = S.useState(void 0);
    return Zn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const s = o[0];
                let i, l;
                if ("borderBoxSize"in s) {
                    const a = s.borderBoxSize
                      , c = Array.isArray(a) ? a[0] : a;
                    i = c.inlineSize,
                    l = c.blockSize
                } else
                    i = e.offsetWidth,
                    l = e.offsetHeight;
                n({
                    width: i,
                    height: l
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Vg = "Popper"
  , [Hg,Qg] = Pl(Vg)
  , [kP,Kg] = Hg(Vg)
  , Gg = "PopperAnchor"
  , qg = S.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , s = Kg(Gg, n)
      , i = S.useRef(null)
      , l = $t(t, i);
    return S.useEffect( () => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current)
    }
    ),
    r ? null : x.jsx(nt.div, {
        ...o,
        ref: l
    })
}
);
qg.displayName = Gg;
var Wu = "PopperContent"
  , [KS,GS] = Hg(Wu)
  , Yg = S.forwardRef( (e, t) => {
    var q, ye, Re, Ce, te, F;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: s="center", alignOffset: i=0, arrowPadding: l=0, avoidCollisions: a=!0, collisionBoundary: c=[], collisionPadding: u=0, sticky: d="partial", hideWhenDetached: m=!1, updatePositionStrategy: p="optimized", onPlaced: w, ...g} = e
      , y = Kg(Wu, n)
      , [f,h] = S.useState(null)
      , v = $t(t, Z => h(Z))
      , [C,b] = S.useState(null)
      , k = QS(C)
      , E = (k == null ? void 0 : k.width) ?? 0
      , P = (k == null ? void 0 : k.height) ?? 0
      , j = r + (s !== "center" ? "-" + s : "")
      , A = typeof u == "number" ? u : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...u
    }
      , z = Array.isArray(c) ? c : [c]
      , D = z.length > 0
      , V = {
        padding: A,
        boundary: z.filter(YS),
        altBoundary: D
    }
      , {refs: M, floatingStyles: H, placement: $, isPositioned: W, middlewareData: T} = DS({
        strategy: "fixed",
        placement: j,
        whileElementsMounted: (...Z) => kS(...Z, {
            animationFrame: p === "always"
        }),
        elements: {
            reference: y.anchor
        },
        middleware: [zS({
            mainAxis: o + P,
            alignmentAxis: i
        }), a && IS({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? FS() : void 0,
            ...V
        }), a && BS({
            ...V
        }), $S({
            ...V,
            apply: ({elements: Z, rects: ae, availableWidth: ke, availableHeight: $e}) => {
                const {width: rt, height: ot} = ae.reference
                  , Ue = Z.floating.style;
                Ue.setProperty("--radix-popper-available-width", `${ke}px`),
                Ue.setProperty("--radix-popper-available-height", `${$e}px`),
                Ue.setProperty("--radix-popper-anchor-width", `${rt}px`),
                Ue.setProperty("--radix-popper-anchor-height", `${ot}px`)
            }
        }), C && WS({
            element: C,
            padding: l
        }), XS({
            arrowWidth: E,
            arrowHeight: P
        }), m && US({
            strategy: "referenceHidden",
            ...V
        })]
    })
      , [R,_] = Zg($)
      , U = Jn(w);
    Zn( () => {
        W && (U == null || U())
    }
    , [W, U]);
    const B = (q = T.arrow) == null ? void 0 : q.x
      , G = (ye = T.arrow) == null ? void 0 : ye.y
      , Q = ((Re = T.arrow) == null ? void 0 : Re.centerOffset) !== 0
      , [se,ve] = S.useState();
    return Zn( () => {
        f && ve(window.getComputedStyle(f).zIndex)
    }
    , [f]),
    x.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...H,
            transform: W ? H.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: se,
            "--radix-popper-transform-origin": [(Ce = T.transformOrigin) == null ? void 0 : Ce.x, (te = T.transformOrigin) == null ? void 0 : te.y].join(" "),
            ...((F = T.hide) == null ? void 0 : F.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: x.jsx(KS, {
            scope: n,
            placedSide: R,
            onArrowChange: b,
            arrowX: B,
            arrowY: G,
            shouldHideArrow: Q,
            children: x.jsx(nt.div, {
                "data-side": R,
                "data-align": _,
                ...g,
                ref: v,
                style: {
                    ...g.style,
                    animation: W ? void 0 : "none"
                }
            })
        })
    })
}
);
Yg.displayName = Wu;
var Xg = "PopperArrow"
  , qS = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Jg = S.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , s = GS(Xg, r)
      , i = qS[s.placedSide];
    return x.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [i]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: x.jsx(HS, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
Jg.displayName = Xg;
function YS(e) {
    return e !== null
}
var XS = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var y, f, h;
        const {placement: n, rects: r, middlewareData: o} = t
          , i = ((y = o.arrow) == null ? void 0 : y.centerOffset) !== 0
          , l = i ? 0 : e.arrowWidth
          , a = i ? 0 : e.arrowHeight
          , [c,u] = Zg(n)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[u]
          , m = (((f = o.arrow) == null ? void 0 : f.x) ?? 0) + l / 2
          , p = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + a / 2;
        let w = ""
          , g = "";
        return c === "bottom" ? (w = i ? d : `${m}px`,
        g = `${-a}px`) : c === "top" ? (w = i ? d : `${m}px`,
        g = `${r.floating.height + a}px`) : c === "right" ? (w = `${-a}px`,
        g = i ? d : `${p}px`) : c === "left" && (w = `${r.floating.width + a}px`,
        g = i ? d : `${p}px`),
        {
            data: {
                x: w,
                y: g
            }
        }
    }
});
function Zg(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var JS = qg
  , ZS = Yg
  , eC = Jg
  , [Ol,PP] = Pl("Tooltip", [Qg])
  , Vu = Qg()
  , ev = "TooltipProvider"
  , tC = 700
  , Lf = "tooltip.open"
  , [nC,tv] = Ol(ev)
  , nv = e => {
    const {__scopeTooltip: t, delayDuration: n=tC, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: s} = e
      , i = S.useRef(!0)
      , l = S.useRef(!1)
      , a = S.useRef(0);
    return S.useEffect( () => {
        const c = a.current;
        return () => window.clearTimeout(c)
    }
    , []),
    x.jsx(nC, {
        scope: t,
        isOpenDelayedRef: i,
        delayDuration: n,
        onOpen: S.useCallback( () => {
            window.clearTimeout(a.current),
            i.current = !1
        }
        , []),
        onClose: S.useCallback( () => {
            window.clearTimeout(a.current),
            a.current = window.setTimeout( () => i.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: S.useCallback(c => {
            l.current = c
        }
        , []),
        disableHoverableContent: o,
        children: s
    })
}
;
nv.displayName = ev;
var rv = "Tooltip"
  , [TP,Ll] = Ol(rv)
  , Pc = "TooltipTrigger"
  , rC = S.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Ll(Pc, n)
      , s = tv(Pc, n)
      , i = Vu(n)
      , l = S.useRef(null)
      , a = $t(t, l, o.onTriggerChange)
      , c = S.useRef(!1)
      , u = S.useRef(!1)
      , d = S.useCallback( () => c.current = !1, []);
    return S.useEffect( () => () => document.removeEventListener("pointerup", d), [d]),
    x.jsx(JS, {
        asChild: !0,
        ...i,
        children: x.jsx(nt.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: a,
            onPointerMove: Te(e.onPointerMove, m => {
                m.pointerType !== "touch" && !u.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(),
                u.current = !0)
            }
            ),
            onPointerLeave: Te(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                u.current = !1
            }
            ),
            onPointerDown: Te(e.onPointerDown, () => {
                o.open && o.onClose(),
                c.current = !0,
                document.addEventListener("pointerup", d, {
                    once: !0
                })
            }
            ),
            onFocus: Te(e.onFocus, () => {
                c.current || o.onOpen()
            }
            ),
            onBlur: Te(e.onBlur, o.onClose),
            onClick: Te(e.onClick, o.onClose)
        })
    })
}
);
rC.displayName = Pc;
var oC = "TooltipPortal"
  , [NP,sC] = Ol(oC, {
    forceMount: void 0
})
  , vo = "TooltipContent"
  , ov = S.forwardRef( (e, t) => {
    const n = sC(vo, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...s} = e
      , i = Ll(vo, e.__scopeTooltip);
    return x.jsx(Au, {
        present: r || i.open,
        children: i.disableHoverableContent ? x.jsx(sv, {
            side: o,
            ...s,
            ref: t
        }) : x.jsx(iC, {
            side: o,
            ...s,
            ref: t
        })
    })
}
)
  , iC = S.forwardRef( (e, t) => {
    const n = Ll(vo, e.__scopeTooltip)
      , r = tv(vo, e.__scopeTooltip)
      , o = S.useRef(null)
      , s = $t(t, o)
      , [i,l] = S.useState(null)
      , {trigger: a, onClose: c} = n
      , u = o.current
      , {onPointerInTransitChange: d} = r
      , m = S.useCallback( () => {
        l(null),
        d(!1)
    }
    , [d])
      , p = S.useCallback( (w, g) => {
        const y = w.currentTarget
          , f = {
            x: w.clientX,
            y: w.clientY
        }
          , h = dC(f, y.getBoundingClientRect())
          , v = fC(f, h)
          , C = pC(g.getBoundingClientRect())
          , b = mC([...v, ...C]);
        l(b),
        d(!0)
    }
    , [d]);
    return S.useEffect( () => () => m(), [m]),
    S.useEffect( () => {
        if (a && u) {
            const w = y => p(y, u)
              , g = y => p(y, a);
            return a.addEventListener("pointerleave", w),
            u.addEventListener("pointerleave", g),
            () => {
                a.removeEventListener("pointerleave", w),
                u.removeEventListener("pointerleave", g)
            }
        }
    }
    , [a, u, p, m]),
    S.useEffect( () => {
        if (i) {
            const w = g => {
                const y = g.target
                  , f = {
                    x: g.clientX,
                    y: g.clientY
                }
                  , h = (a == null ? void 0 : a.contains(y)) || (u == null ? void 0 : u.contains(y))
                  , v = !hC(f, i);
                h ? m() : v && (m(),
                c())
            }
            ;
            return document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
        }
    }
    , [a, u, i, c, m]),
    x.jsx(sv, {
        ...e,
        ref: s
    })
}
)
  , [lC,aC] = Ol(rv, {
    isInside: !1
})
  , cC = yw("TooltipContent")
  , sv = S.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: s, onPointerDownOutside: i, ...l} = e
      , a = Ll(vo, n)
      , c = Vu(n)
      , {onClose: u} = a;
    return S.useEffect( () => (document.addEventListener(Lf, u),
    () => document.removeEventListener(Lf, u)), [u]),
    S.useEffect( () => {
        if (a.trigger) {
            const d = m => {
                const p = m.target;
                p != null && p.contains(a.trigger) && u()
            }
            ;
            return window.addEventListener("scroll", d, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", d, {
                capture: !0
            })
        }
    }
    , [a.trigger, u]),
    x.jsx(ju, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: d => d.preventDefault(),
        onDismiss: u,
        children: x.jsxs(ZS, {
            "data-state": a.stateAttribute,
            ...c,
            ...l,
            ref: t,
            style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [x.jsx(cC, {
                children: r
            }), x.jsx(lC, {
                scope: n,
                isInside: !0,
                children: x.jsx(Ww, {
                    id: a.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
ov.displayName = vo;
var iv = "TooltipArrow"
  , uC = S.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Vu(n);
    return aC(iv, n).isInside ? null : x.jsx(eC, {
        ...o,
        ...r,
        ref: t
    })
}
);
uC.displayName = iv;
function dC(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
    case s:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function fC(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function pC(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function hC(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
        const l = t[s]
          , a = t[i]
          , c = l.x
          , u = l.y
          , d = a.x
          , m = a.y;
        u > r != m > r && n < (d - c) * (r - u) / (m - u) + c && (o = !o)
    }
    return o
}
function mC(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    gC(t)
}
function gC(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1]
              , i = t[t.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1]
              , i = n[n.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var vC = nv
  , lv = ov;
const yC = vC
  , wC = S.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => x.jsx(lv, {
    ref: r,
    sideOffset: t,
    className: ht("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
wC.displayName = lv.displayName;
var Ml = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Dl = typeof window > "u" || "Deno"in globalThis;
function Ot() {}
function xC(e, t) {
    return typeof e == "function" ? e(t) : e
}
function SC(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function CC(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Tc(e, t) {
    return typeof e == "function" ? e(t) : e
}
function bC(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Mf(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: s, queryKey: i, stale: l} = e;
    if (i) {
        if (r) {
            if (t.queryHash !== Hu(i, t.options))
                return !1
        } else if (!Cs(t.queryKey, i))
            return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a)
            return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || s && !s(t))
}
function Df(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Ss(t.options.mutationKey) !== Ss(s))
                return !1
        } else if (!Cs(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function Hu(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Ss)(e)
}
function Ss(e) {
    return JSON.stringify(e, (t, n) => Nc(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function Cs(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => Cs(e[n], t[n])) : !1
}
function av(e, t) {
    if (e === t)
        return e;
    const n = _f(e) && _f(t);
    if (n || Nc(e) && Nc(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , s = n ? t : Object.keys(t)
          , i = s.length
          , l = n ? [] : {}
          , a = new Set(r);
        let c = 0;
        for (let u = 0; u < i; u++) {
            const d = n ? u : s[u];
            (!n && a.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (l[d] = void 0,
            c++) : (l[d] = av(e[d], t[d]),
            l[d] === e[d] && e[d] !== void 0 && c++)
        }
        return o === i && c === o ? e : l
    }
    return t
}
function _f(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Nc(e) {
    if (!zf(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!zf(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function zf(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function EC(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function kC(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? av(e, t) : t
}
function PC(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function TC(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Qu = Symbol();
function cv(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Qu ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var fr, Ln, eo, wp, NC = (wp = class extends Ml {
    constructor() {
        super();
        ne(this, fr);
        ne(this, Ln);
        ne(this, eo);
        Y(this, eo, t => {
            if (!Dl && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, Ln) || this.setEventListener(N(this, eo))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, Ln)) == null || t.call(this),
        Y(this, Ln, void 0))
    }
    setEventListener(t) {
        var n;
        Y(this, eo, t),
        (n = N(this, Ln)) == null || n.call(this),
        Y(this, Ln, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        N(this, fr) !== t && (Y(this, fr, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof N(this, fr) == "boolean" ? N(this, fr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
fr = new WeakMap,
Ln = new WeakMap,
eo = new WeakMap,
wp), uv = new NC, to, Mn, no, xp, RC = (xp = class extends Ml {
    constructor() {
        super();
        ne(this, to, !0);
        ne(this, Mn);
        ne(this, no);
        Y(this, no, t => {
            if (!Dl && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, Mn) || this.setEventListener(N(this, no))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, Mn)) == null || t.call(this),
        Y(this, Mn, void 0))
    }
    setEventListener(t) {
        var n;
        Y(this, no, t),
        (n = N(this, Mn)) == null || n.call(this),
        Y(this, Mn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        N(this, to) !== t && (Y(this, to, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return N(this, to)
    }
}
,
to = new WeakMap,
Mn = new WeakMap,
no = new WeakMap,
xp), il = new RC;
function jC() {
    let e, t;
    const n = new Promise( (o, s) => {
        e = o,
        t = s
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function AC(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function dv(e) {
    return (e ?? "online") === "online" ? il.isOnline() : !0
}
var fv = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function ba(e) {
    return e instanceof fv
}
function pv(e) {
    let t = !1, n = 0, r = !1, o;
    const s = jC()
      , i = g => {
        var y;
        r || (m(new fv(g)),
        (y = e.abort) == null || y.call(e))
    }
      , l = () => {
        t = !0
    }
      , a = () => {
        t = !1
    }
      , c = () => uv.isFocused() && (e.networkMode === "always" || il.isOnline()) && e.canRun()
      , u = () => dv(e.networkMode) && e.canRun()
      , d = g => {
        var y;
        r || (r = !0,
        (y = e.onSuccess) == null || y.call(e, g),
        o == null || o(),
        s.resolve(g))
    }
      , m = g => {
        var y;
        r || (r = !0,
        (y = e.onError) == null || y.call(e, g),
        o == null || o(),
        s.reject(g))
    }
      , p = () => new Promise(g => {
        var y;
        o = f => {
            (r || c()) && g(f)
        }
        ,
        (y = e.onPause) == null || y.call(e)
    }
    ).then( () => {
        var g;
        o = void 0,
        r || (g = e.onContinue) == null || g.call(e)
    }
    )
      , w = () => {
        if (r)
            return;
        let g;
        const y = n === 0 ? e.initialPromise : void 0;
        try {
            g = y ?? e.fn()
        } catch (f) {
            g = Promise.reject(f)
        }
        Promise.resolve(g).then(d).catch(f => {
            var k;
            if (r)
                return;
            const h = e.retry ?? (Dl ? 0 : 3)
              , v = e.retryDelay ?? AC
              , C = typeof v == "function" ? v(n, f) : v
              , b = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, f);
            if (t || !b) {
                m(f);
                return
            }
            n++,
            (k = e.onFail) == null || k.call(e, n, f),
            EC(C).then( () => c() ? void 0 : p()).then( () => {
                t ? m(f) : w()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        cancel: i,
        continue: () => (o == null || o(),
        s),
        cancelRetry: l,
        continueRetry: a,
        canStart: u,
        start: () => (u() ? w() : p().then(w),
        s)
    }
}
var OC = e => setTimeout(e, 0);
function LC() {
    let e = []
      , t = 0
      , n = l => {
        l()
    }
      , r = l => {
        l()
    }
      , o = OC;
    const s = l => {
        t ? e.push(l) : o( () => {
            n(l)
        }
        )
    }
      , i = () => {
        const l = e;
        e = [],
        l.length && o( () => {
            r( () => {
                l.forEach(a => {
                    n(a)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: l => {
            let a;
            t++;
            try {
                a = l()
            } finally {
                t--,
                t || i()
            }
            return a
        }
        ,
        batchCalls: l => (...a) => {
            s( () => {
                l(...a)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: l => {
            n = l
        }
        ,
        setBatchNotifyFunction: l => {
            r = l
        }
        ,
        setScheduler: l => {
            o = l
        }
    }
}
var He = LC(), pr, Sp, hv = (Sp = class {
    constructor() {
        ne(this, pr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        SC(this.gcTime) && Y(this, pr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Dl ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        N(this, pr) && (clearTimeout(N(this, pr)),
        Y(this, pr, void 0))
    }
}
,
pr = new WeakMap,
Sp), ro, hr, mt, mr, Ie, Ns, gr, Lt, sn, Cp, MC = (Cp = class extends hv {
    constructor(t) {
        super();
        ne(this, Lt);
        ne(this, ro);
        ne(this, hr);
        ne(this, mt);
        ne(this, mr);
        ne(this, Ie);
        ne(this, Ns);
        ne(this, gr);
        Y(this, gr, !1),
        Y(this, Ns, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        Y(this, mr, t.client),
        Y(this, mt, N(this, mr).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        Y(this, ro, _C(this.options)),
        this.state = t.state ?? N(this, ro),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = N(this, Ie)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...N(this, Ns),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && N(this, mt).remove(this)
    }
    setData(t, n) {
        const r = kC(this.state.data, t, this.options);
        return De(this, Lt, sn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        De(this, Lt, sn).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = N(this, Ie)) == null ? void 0 : r.promise;
        return (o = N(this, Ie)) == null || o.cancel(t),
        n ? n.then(Ot).catch(Ot) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(N(this, ro))
    }
    isActive() {
        return this.observers.some(t => bC(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Qu || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Tc(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !CC(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, Ie)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, Ie)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        N(this, mt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (N(this, Ie) && (N(this, gr) ? N(this, Ie).cancel({
            revert: !0
        }) : N(this, Ie).cancelRetry()),
        this.scheduleGc()),
        N(this, mt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || De(this, Lt, sn).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var c, u, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (N(this, Ie))
                return N(this, Ie).continueRetry(),
                N(this, Ie).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const m = this.observers.find(p => p.options.queryFn);
            m && this.setOptions(m.options)
        }
        const r = new AbortController
          , o = m => {
            Object.defineProperty(m, "signal", {
                enumerable: !0,
                get: () => (Y(this, gr, !0),
                r.signal)
            })
        }
          , s = () => {
            const m = cv(this.options, n)
              , w = ( () => {
                const g = {
                    client: N(this, mr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(g),
                g
            }
            )();
            return Y(this, gr, !1),
            this.options.persister ? this.options.persister(m, w, this) : m(w)
        }
          , l = ( () => {
            const m = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: N(this, mr),
                state: this.state,
                fetchFn: s
            };
            return o(m),
            m
        }
        )();
        (c = this.options.behavior) == null || c.onFetch(l, this),
        Y(this, hr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = l.fetchOptions) == null ? void 0 : u.meta)) && De(this, Lt, sn).call(this, {
            type: "fetch",
            meta: (d = l.fetchOptions) == null ? void 0 : d.meta
        });
        const a = m => {
            var p, w, g, y;
            ba(m) && m.silent || De(this, Lt, sn).call(this, {
                type: "error",
                error: m
            }),
            ba(m) || ((w = (p = N(this, mt).config).onError) == null || w.call(p, m, this),
            (y = (g = N(this, mt).config).onSettled) == null || y.call(g, this.state.data, m, this)),
            this.scheduleGc()
        }
        ;
        return Y(this, Ie, pv({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: l.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: m => {
                var p, w, g, y;
                if (m === void 0) {
                    a(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(m)
                } catch (f) {
                    a(f);
                    return
                }
                (w = (p = N(this, mt).config).onSuccess) == null || w.call(p, m, this),
                (y = (g = N(this, mt).config).onSettled) == null || y.call(g, m, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: a,
            onFail: (m, p) => {
                De(this, Lt, sn).call(this, {
                    type: "failed",
                    failureCount: m,
                    error: p
                })
            }
            ,
            onPause: () => {
                De(this, Lt, sn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                De(this, Lt, sn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: l.options.retry,
            retryDelay: l.options.retryDelay,
            networkMode: l.options.networkMode,
            canRun: () => !0
        })),
        N(this, Ie).start()
    }
}
,
ro = new WeakMap,
hr = new WeakMap,
mt = new WeakMap,
mr = new WeakMap,
Ie = new WeakMap,
Ns = new WeakMap,
gr = new WeakMap,
Lt = new WeakSet,
sn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...DC(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return Y(this, hr, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return ba(o) && o.revert && N(this, hr) ? {
                ...N(this, hr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    He.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        N(this, mt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Cp);
function DC(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: dv(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function _C(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Kt, bp, zC = (bp = class extends Ml {
    constructor(t={}) {
        super();
        ne(this, Kt);
        this.config = t,
        Y(this, Kt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , s = n.queryHash ?? Hu(o, n);
        let i = this.get(s);
        return i || (i = new MC({
            client: t,
            queryKey: o,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(i)),
        i
    }
    add(t) {
        N(this, Kt).has(t.queryHash) || (N(this, Kt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = N(this, Kt).get(t.queryHash);
        n && (t.destroy(),
        n === t && N(this, Kt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        He.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return N(this, Kt).get(t)
    }
    getAll() {
        return [...N(this, Kt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Mf(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Mf(t, r)) : n
    }
    notify(t) {
        He.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        He.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        He.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Kt = new WeakMap,
bp), Gt, We, vr, qt, Nn, Ep, IC = (Ep = class extends hv {
    constructor(t) {
        super();
        ne(this, qt);
        ne(this, Gt);
        ne(this, We);
        ne(this, vr);
        this.mutationId = t.mutationId,
        Y(this, We, t.mutationCache),
        Y(this, Gt, []),
        this.state = t.state || FC(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        N(this, Gt).includes(t) || (N(this, Gt).push(t),
        this.clearGcTimeout(),
        N(this, We).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        Y(this, Gt, N(this, Gt).filter(n => n !== t)),
        this.scheduleGc(),
        N(this, We).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        N(this, Gt).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, We).remove(this))
    }
    continue() {
        var t;
        return ((t = N(this, vr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var s, i, l, a, c, u, d, m, p, w, g, y, f, h, v, C, b, k, E, P;
        const n = () => {
            De(this, qt, Nn).call(this, {
                type: "continue"
            })
        }
        ;
        Y(this, vr, pv({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (j, A) => {
                De(this, qt, Nn).call(this, {
                    type: "failed",
                    failureCount: j,
                    error: A
                })
            }
            ,
            onPause: () => {
                De(this, qt, Nn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => N(this, We).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !N(this, vr).canStart();
        try {
            if (r)
                n();
            else {
                De(this, qt, Nn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((i = (s = N(this, We).config).onMutate) == null ? void 0 : i.call(s, t, this));
                const A = await ((a = (l = this.options).onMutate) == null ? void 0 : a.call(l, t));
                A !== this.state.context && De(this, qt, Nn).call(this, {
                    type: "pending",
                    context: A,
                    variables: t,
                    isPaused: o
                })
            }
            const j = await N(this, vr).start();
            return await ((u = (c = N(this, We).config).onSuccess) == null ? void 0 : u.call(c, j, t, this.state.context, this)),
            await ((m = (d = this.options).onSuccess) == null ? void 0 : m.call(d, j, t, this.state.context)),
            await ((w = (p = N(this, We).config).onSettled) == null ? void 0 : w.call(p, j, null, this.state.variables, this.state.context, this)),
            await ((y = (g = this.options).onSettled) == null ? void 0 : y.call(g, j, null, t, this.state.context)),
            De(this, qt, Nn).call(this, {
                type: "success",
                data: j
            }),
            j
        } catch (j) {
            try {
                throw await ((h = (f = N(this, We).config).onError) == null ? void 0 : h.call(f, j, t, this.state.context, this)),
                await ((C = (v = this.options).onError) == null ? void 0 : C.call(v, j, t, this.state.context)),
                await ((k = (b = N(this, We).config).onSettled) == null ? void 0 : k.call(b, void 0, j, this.state.variables, this.state.context, this)),
                await ((P = (E = this.options).onSettled) == null ? void 0 : P.call(E, void 0, j, t, this.state.context)),
                j
            } finally {
                De(this, qt, Nn).call(this, {
                    type: "error",
                    error: j
                })
            }
        } finally {
            N(this, We).runNext(this)
        }
    }
}
,
Gt = new WeakMap,
We = new WeakMap,
vr = new WeakMap,
qt = new WeakSet,
Nn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    He.batch( () => {
        N(this, Gt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        N(this, We).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Ep);
function FC() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var cn, Mt, Rs, kp, BC = (kp = class extends Ml {
    constructor(t={}) {
        super();
        ne(this, cn);
        ne(this, Mt);
        ne(this, Rs);
        this.config = t,
        Y(this, cn, new Set),
        Y(this, Mt, new Map),
        Y(this, Rs, 0)
    }
    build(t, n, r) {
        const o = new IC({
            mutationCache: this,
            mutationId: ++Hs(this, Rs)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        N(this, cn).add(t);
        const n = pi(t);
        if (typeof n == "string") {
            const r = N(this, Mt).get(n);
            r ? r.push(t) : N(this, Mt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (N(this, cn).delete(t)) {
            const n = pi(t);
            if (typeof n == "string") {
                const r = N(this, Mt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && N(this, Mt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = pi(t);
        if (typeof n == "string") {
            const r = N(this, Mt).get(n)
              , o = r == null ? void 0 : r.find(s => s.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = pi(t);
        if (typeof n == "string") {
            const o = (r = N(this, Mt).get(n)) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        He.batch( () => {
            N(this, cn).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            N(this, cn).clear(),
            N(this, Mt).clear()
        }
        )
    }
    getAll() {
        return Array.from(N(this, cn))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Df(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Df(t, n))
    }
    notify(t) {
        He.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return He.batch( () => Promise.all(t.map(n => n.continue().catch(Ot))))
    }
}
,
cn = new WeakMap,
Mt = new WeakMap,
Rs = new WeakMap,
kp);
function pi(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function If(e) {
    return {
        onFetch: (t, n) => {
            var u, d, m, p, w;
            const r = t.options
              , o = (m = (d = (u = t.fetchOptions) == null ? void 0 : u.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : m.direction
              , s = ((p = t.state.data) == null ? void 0 : p.pages) || []
              , i = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
            let l = {
                pages: [],
                pageParams: []
            }
              , a = 0;
            const c = async () => {
                let g = !1;
                const y = v => {
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , f = cv(t.options, t.fetchOptions)
                  , h = async (v, C, b) => {
                    if (g)
                        return Promise.reject();
                    if (C == null && v.pages.length)
                        return Promise.resolve(v);
                    const E = ( () => {
                        const z = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: C,
                            direction: b ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return y(z),
                        z
                    }
                    )()
                      , P = await f(E)
                      , {maxPages: j} = t.options
                      , A = b ? TC : PC;
                    return {
                        pages: A(v.pages, P, j),
                        pageParams: A(v.pageParams, C, j)
                    }
                }
                ;
                if (o && s.length) {
                    const v = o === "backward"
                      , C = v ? $C : Ff
                      , b = {
                        pages: s,
                        pageParams: i
                    }
                      , k = C(r, b);
                    l = await h(b, k, v)
                } else {
                    const v = e ?? s.length;
                    do {
                        const C = a === 0 ? i[0] ?? r.initialPageParam : Ff(r, l);
                        if (a > 0 && C == null)
                            break;
                        l = await h(l, C),
                        a++
                    } while (a < v)
                }
                return l
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var g, y;
                return (y = (g = t.options).persister) == null ? void 0 : y.call(g, c, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = c
        }
    }
}
function Ff(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function $C(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var we, Dn, _n, oo, so, zn, io, lo, Pp, UC = (Pp = class {
    constructor(e={}) {
        ne(this, we);
        ne(this, Dn);
        ne(this, _n);
        ne(this, oo);
        ne(this, so);
        ne(this, zn);
        ne(this, io);
        ne(this, lo);
        Y(this, we, e.queryCache || new zC),
        Y(this, Dn, e.mutationCache || new BC),
        Y(this, _n, e.defaultOptions || {}),
        Y(this, oo, new Map),
        Y(this, so, new Map),
        Y(this, zn, 0)
    }
    mount() {
        Hs(this, zn)._++,
        N(this, zn) === 1 && (Y(this, io, uv.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, we).onFocus())
        }
        )),
        Y(this, lo, il.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, we).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Hs(this, zn)._--,
        N(this, zn) === 0 && ((e = N(this, io)) == null || e.call(this),
        Y(this, io, void 0),
        (t = N(this, lo)) == null || t.call(this),
        Y(this, lo, void 0))
    }
    isFetching(e) {
        return N(this, we).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return N(this, Dn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, we).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = N(this, we).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Tc(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return N(this, we).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = N(this, we).get(r.queryHash)
          , s = o == null ? void 0 : o.state.data
          , i = xC(t, s);
        if (i !== void 0)
            return N(this, we).build(this, r).setData(i, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return He.batch( () => N(this, we).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, we).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = N(this, we);
        He.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = N(this, we);
        return He.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = He.batch( () => N(this, we).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(Ot).catch(Ot)
    }
    invalidateQueries(e, t={}) {
        return He.batch( () => (N(this, we).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = He.batch( () => N(this, we).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let s = o.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(Ot)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(r).then(Ot)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = N(this, we).build(this, t);
        return n.isStaleByTime(Tc(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Ot).catch(Ot)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = If(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Ot).catch(Ot)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = If(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return il.isOnline() ? N(this, Dn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return N(this, we)
    }
    getMutationCache() {
        return N(this, Dn)
    }
    getDefaultOptions() {
        return N(this, _n)
    }
    setDefaultOptions(e) {
        Y(this, _n, e)
    }
    setQueryDefaults(e, t) {
        N(this, oo).set(Ss(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...N(this, oo).values()]
          , n = {};
        return t.forEach(r => {
            Cs(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        N(this, so).set(Ss(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...N(this, so).values()]
          , n = {};
        return t.forEach(r => {
            Cs(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...N(this, _n).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Hu(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Qu && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...N(this, _n).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        N(this, we).clear(),
        N(this, Dn).clear()
    }
}
,
we = new WeakMap,
Dn = new WeakMap,
_n = new WeakMap,
oo = new WeakMap,
so = new WeakMap,
zn = new WeakMap,
io = new WeakMap,
lo = new WeakMap,
Pp), WC = S.createContext(void 0), VC = ({client: e, children: t}) => (S.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
x.jsx(WC.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function bs() {
    return bs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    bs.apply(this, arguments)
}
var Bn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Bn || (Bn = {}));
const Bf = "popstate";
function HC(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: s, search: i, hash: l} = r.location;
        return Rc("", {
            pathname: s,
            search: i,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : ll(o)
    }
    return KC(t, n, null, e)
}
function Ee(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function mv(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function QC() {
    return Math.random().toString(36).substr(2, 8)
}
function $f(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Rc(e, t, n, r) {
    return n === void 0 && (n = null),
    bs({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Eo(t) : t, {
        state: n,
        key: t && t.key || r || QC()
    })
}
function ll(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Eo(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function KC(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: s=!1} = r
      , i = o.history
      , l = Bn.Pop
      , a = null
      , c = u();
    c == null && (c = 0,
    i.replaceState(bs({}, i.state, {
        idx: c
    }), ""));
    function u() {
        return (i.state || {
            idx: null
        }).idx
    }
    function d() {
        l = Bn.Pop;
        let y = u()
          , f = y == null ? null : y - c;
        c = y,
        a && a({
            action: l,
            location: g.location,
            delta: f
        })
    }
    function m(y, f) {
        l = Bn.Push;
        let h = Rc(g.location, y, f);
        c = u() + 1;
        let v = $f(h, c)
          , C = g.createHref(h);
        try {
            i.pushState(v, "", C)
        } catch (b) {
            if (b instanceof DOMException && b.name === "DataCloneError")
                throw b;
            o.location.assign(C)
        }
        s && a && a({
            action: l,
            location: g.location,
            delta: 1
        })
    }
    function p(y, f) {
        l = Bn.Replace;
        let h = Rc(g.location, y, f);
        c = u();
        let v = $f(h, c)
          , C = g.createHref(h);
        i.replaceState(v, "", C),
        s && a && a({
            action: l,
            location: g.location,
            delta: 0
        })
    }
    function w(y) {
        let f = o.location.origin !== "null" ? o.location.origin : o.location.href
          , h = typeof y == "string" ? y : ll(y);
        return h = h.replace(/ $/, "%20"),
        Ee(f, "No window.location.(origin|href) available to create URL for href: " + h),
        new URL(h,f)
    }
    let g = {
        get action() {
            return l
        },
        get location() {
            return e(o, i)
        },
        listen(y) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Bf, d),
            a = y,
            () => {
                o.removeEventListener(Bf, d),
                a = null
            }
        },
        createHref(y) {
            return t(o, y)
        },
        createURL: w,
        encodeLocation(y) {
            let f = w(y);
            return {
                pathname: f.pathname,
                search: f.search,
                hash: f.hash
            }
        },
        push: m,
        replace: p,
        go(y) {
            return i.go(y)
        }
    };
    return g
}
var Uf;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Uf || (Uf = {}));
function GC(e, t, n) {
    return n === void 0 && (n = "/"),
    qC(e, t, n, !1)
}
function qC(e, t, n, r) {
    let o = typeof t == "string" ? Eo(t) : t
      , s = Ku(o.pathname || "/", n);
    if (s == null)
        return null;
    let i = gv(e);
    YC(i);
    let l = null;
    for (let a = 0; l == null && a < i.length; ++a) {
        let c = lb(s);
        l = sb(i[a], c, r)
    }
    return l
}
function gv(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (s, i, l) => {
        let a = {
            relativePath: l === void 0 ? s.path || "" : l,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: i,
            route: s
        };
        a.relativePath.startsWith("/") && (Ee(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        a.relativePath = a.relativePath.slice(r.length));
        let c = qn([r, a.relativePath])
          , u = n.concat(a);
        s.children && s.children.length > 0 && (Ee(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
        gv(s.children, t, u, c)),
        !(s.path == null && !s.index) && t.push({
            path: c,
            score: rb(c, s.index),
            routesMeta: u
        })
    }
    ;
    return e.forEach( (s, i) => {
        var l;
        if (s.path === "" || !((l = s.path) != null && l.includes("?")))
            o(s, i);
        else
            for (let a of vv(s.path))
                o(s, i, a)
    }
    ),
    t
}
function vv(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [s, ""] : [s];
    let i = vv(r.join("/"))
      , l = [];
    return l.push(...i.map(a => a === "" ? s : [s, a].join("/"))),
    o && l.push(...i),
    l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}
function YC(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : ob(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const XC = /^:[\w-]+$/
  , JC = 3
  , ZC = 2
  , eb = 1
  , tb = 10
  , nb = -2
  , Wf = e => e === "*";
function rb(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Wf) && (r += nb),
    t && (r += ZC),
    n.filter(o => !Wf(o)).reduce( (o, s) => o + (XC.test(s) ? JC : s === "" ? eb : tb), r)
}
function ob(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function sb(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , s = "/"
      , i = [];
    for (let l = 0; l < r.length; ++l) {
        let a = r[l]
          , c = l === r.length - 1
          , u = s === "/" ? t : t.slice(s.length) || "/"
          , d = Vf({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: c
        }, u)
          , m = a.route;
        if (!d && c && n && !r[r.length - 1].route.index && (d = Vf({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: !1
        }, u)),
        !d)
            return null;
        Object.assign(o, d.params),
        i.push({
            params: o,
            pathname: qn([s, d.pathname]),
            pathnameBase: db(qn([s, d.pathnameBase])),
            route: m
        }),
        d.pathnameBase !== "/" && (s = qn([s, d.pathnameBase]))
    }
    return i
}
function Vf(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = ib(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let s = o[0]
      , i = s.replace(/(.)\/+$/, "$1")
      , l = o.slice(1);
    return {
        params: r.reduce( (c, u, d) => {
            let {paramName: m, isOptional: p} = u;
            if (m === "*") {
                let g = l[d] || "";
                i = s.slice(0, s.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const w = l[d];
            return p && !w ? c[m] = void 0 : c[m] = (w || "").replace(/%2F/g, "/"),
            c
        }
        , {}),
        pathname: s,
        pathnameBase: i,
        pattern: e
    }
}
function ib(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    mv(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, l, a) => (r.push({
        paramName: l,
        isOptional: a != null
    }),
    a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function lb(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return mv(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Ku(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function ab(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? Eo(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : cb(n, t) : t,
        search: fb(r),
        hash: pb(o)
    }
}
function cb(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Ea(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function ub(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function yv(e, t) {
    let n = ub(e);
    return t ? n.map( (r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function wv(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = Eo(e) : (o = bs({}, e),
    Ee(!o.pathname || !o.pathname.includes("?"), Ea("?", "pathname", "search", o)),
    Ee(!o.pathname || !o.pathname.includes("#"), Ea("#", "pathname", "hash", o)),
    Ee(!o.search || !o.search.includes("#"), Ea("#", "search", "hash", o)));
    let s = e === "" || o.pathname === "", i = s ? "/" : o.pathname, l;
    if (i == null)
        l = n;
    else {
        let d = t.length - 1;
        if (!r && i.startsWith("..")) {
            let m = i.split("/");
            for (; m[0] === ".."; )
                m.shift(),
                d -= 1;
            o.pathname = m.join("/")
        }
        l = d >= 0 ? t[d] : "/"
    }
    let a = ab(o, l)
      , c = i && i !== "/" && i.endsWith("/")
      , u = (s || i === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (c || u) && (a.pathname += "/"),
    a
}
const qn = e => e.join("/").replace(/\/\/+/g, "/")
  , db = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , fb = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , pb = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function hb(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const xv = ["post", "put", "patch", "delete"];
new Set(xv);
const mb = ["get", ...xv];
new Set(mb);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Es() {
    return Es = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Es.apply(this, arguments)
}
const Gu = S.createContext(null)
  , gb = S.createContext(null)
  , Rr = S.createContext(null)
  , _l = S.createContext(null)
  , sr = S.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Sv = S.createContext(null);
function vb(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    Is() || Ee(!1);
    let {basename: r, navigator: o} = S.useContext(Rr)
      , {hash: s, pathname: i, search: l} = Ev(e, {
        relative: n
    })
      , a = i;
    return r !== "/" && (a = i === "/" ? r : qn([r, i])),
    o.createHref({
        pathname: a,
        search: l,
        hash: s
    })
}
function Is() {
    return S.useContext(_l) != null
}
function ko() {
    return Is() || Ee(!1),
    S.useContext(_l).location
}
function Cv(e) {
    S.useContext(Rr).static || S.useLayoutEffect(e)
}
function bv() {
    let {isDataRoute: e} = S.useContext(sr);
    return e ? Ab() : yb()
}
function yb() {
    Is() || Ee(!1);
    let e = S.useContext(Gu)
      , {basename: t, future: n, navigator: r} = S.useContext(Rr)
      , {matches: o} = S.useContext(sr)
      , {pathname: s} = ko()
      , i = JSON.stringify(yv(o, n.v7_relativeSplatPath))
      , l = S.useRef(!1);
    return Cv( () => {
        l.current = !0
    }
    ),
    S.useCallback(function(c, u) {
        if (u === void 0 && (u = {}),
        !l.current)
            return;
        if (typeof c == "number") {
            r.go(c);
            return
        }
        let d = wv(c, JSON.parse(i), s, u.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : qn([t, d.pathname])),
        (u.replace ? r.replace : r.push)(d, u.state, u)
    }, [t, r, i, s, e])
}
function wb() {
    let {matches: e} = S.useContext(sr)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function Ev(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = S.useContext(Rr)
      , {matches: o} = S.useContext(sr)
      , {pathname: s} = ko()
      , i = JSON.stringify(yv(o, r.v7_relativeSplatPath));
    return S.useMemo( () => wv(e, JSON.parse(i), s, n === "path"), [e, i, s, n])
}
function xb(e, t) {
    return Sb(e, t)
}
function Sb(e, t, n, r) {
    Is() || Ee(!1);
    let {navigator: o} = S.useContext(Rr)
      , {matches: s} = S.useContext(sr)
      , i = s[s.length - 1]
      , l = i ? i.params : {};
    i && i.pathname;
    let a = i ? i.pathnameBase : "/";
    i && i.route;
    let c = ko(), u;
    if (t) {
        var d;
        let y = typeof t == "string" ? Eo(t) : t;
        a === "/" || (d = y.pathname) != null && d.startsWith(a) || Ee(!1),
        u = y
    } else
        u = c;
    let m = u.pathname || "/"
      , p = m;
    if (a !== "/") {
        let y = a.replace(/^\//, "").split("/");
        p = "/" + m.replace(/^\//, "").split("/").slice(y.length).join("/")
    }
    let w = GC(e, {
        pathname: p
    })
      , g = Pb(w && w.map(y => Object.assign({}, y, {
        params: Object.assign({}, l, y.params),
        pathname: qn([a, o.encodeLocation ? o.encodeLocation(y.pathname).pathname : y.pathname]),
        pathnameBase: y.pathnameBase === "/" ? a : qn([a, o.encodeLocation ? o.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
    })), s, n, r);
    return t && g ? S.createElement(_l.Provider, {
        value: {
            location: Es({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, u),
            navigationType: Bn.Pop
        }
    }, g) : g
}
function Cb() {
    let e = jb()
      , t = hb(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? S.createElement("pre", {
        style: o
    }, n) : null, null)
}
const bb = S.createElement(Cb, null);
class Eb extends S.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? S.createElement(sr.Provider, {
            value: this.props.routeContext
        }, S.createElement(Sv.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function kb(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = S.useContext(Gu);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(sr.Provider, {
        value: t
    }, r)
}
function Pb(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let i = e
      , l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let u = i.findIndex(d => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0);
        u >= 0 || Ee(!1),
        i = i.slice(0, Math.min(i.length, u + 1))
    }
    let a = !1
      , c = -1;
    if (n && r && r.v7_partialHydration)
        for (let u = 0; u < i.length; u++) {
            let d = i[u];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = u),
            d.route.id) {
                let {loaderData: m, errors: p} = n
                  , w = d.route.loader && m[d.route.id] === void 0 && (!p || p[d.route.id] === void 0);
                if (d.route.lazy || w) {
                    a = !0,
                    c >= 0 ? i = i.slice(0, c + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight( (u, d, m) => {
        let p, w = !1, g = null, y = null;
        n && (p = l && d.route.id ? l[d.route.id] : void 0,
        g = d.route.errorElement || bb,
        a && (c < 0 && m === 0 ? (w = !0,
        y = null) : c === m && (w = !0,
        y = d.route.hydrateFallbackElement || null)));
        let f = t.concat(i.slice(0, m + 1))
          , h = () => {
            let v;
            return p ? v = g : w ? v = y : d.route.Component ? v = S.createElement(d.route.Component, null) : d.route.element ? v = d.route.element : v = u,
            S.createElement(kb, {
                match: d,
                routeContext: {
                    outlet: u,
                    matches: f,
                    isDataRoute: n != null
                },
                children: v
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || m === 0) ? S.createElement(Eb, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: p,
            children: h(),
            routeContext: {
                outlet: null,
                matches: f,
                isDataRoute: !0
            }
        }) : h()
    }
    , null)
}
var kv = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(kv || {})
  , al = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(al || {});
function Tb(e) {
    let t = S.useContext(Gu);
    return t || Ee(!1),
    t
}
function Nb(e) {
    let t = S.useContext(gb);
    return t || Ee(!1),
    t
}
function Rb(e) {
    let t = S.useContext(sr);
    return t || Ee(!1),
    t
}
function Pv(e) {
    let t = Rb()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Ee(!1),
    n.route.id
}
function jb() {
    var e;
    let t = S.useContext(Sv)
      , n = Nb(al.UseRouteError)
      , r = Pv(al.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Ab() {
    let {router: e} = Tb(kv.UseNavigateStable)
      , t = Pv(al.UseNavigateStable)
      , n = S.useRef(!1);
    return Cv( () => {
        n.current = !0
    }
    ),
    S.useCallback(function(o, s) {
        s === void 0 && (s = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Es({
            fromRouteId: t
        }, s)))
    }, [e, t])
}
function Ob(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Ri(e) {
    Ee(!1)
}
function Lb(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=Bn.Pop, navigator: s, static: i=!1, future: l} = e;
    Is() && Ee(!1);
    let a = t.replace(/^\/*/, "/")
      , c = S.useMemo( () => ({
        basename: a,
        navigator: s,
        static: i,
        future: Es({
            v7_relativeSplatPath: !1
        }, l)
    }), [a, l, s, i]);
    typeof r == "string" && (r = Eo(r));
    let {pathname: u="/", search: d="", hash: m="", state: p=null, key: w="default"} = r
      , g = S.useMemo( () => {
        let y = Ku(u, a);
        return y == null ? null : {
            location: {
                pathname: y,
                search: d,
                hash: m,
                state: p,
                key: w
            },
            navigationType: o
        }
    }
    , [a, u, d, m, p, w, o]);
    return g == null ? null : S.createElement(Rr.Provider, {
        value: c
    }, S.createElement(_l.Provider, {
        children: n,
        value: g
    }))
}
function Mb(e) {
    let {children: t, location: n} = e;
    return xb(jc(t), n)
}
new Promise( () => {}
);
function jc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return S.Children.forEach(e, (r, o) => {
        if (!S.isValidElement(r))
            return;
        let s = [...t, o];
        if (r.type === S.Fragment) {
            n.push.apply(n, jc(r.props.children, s));
            return
        }
        r.type !== Ri && Ee(!1),
        !r.props.index || !r.props.children || Ee(!1);
        let i = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = jc(r.props.children, s)),
        n.push(i)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ac() {
    return Ac = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ac.apply(this, arguments)
}
function Db(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), o, s;
    for (s = 0; s < r.length; s++)
        o = r[s],
        !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}
function _b(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function zb(e, t) {
    return e.button === 0 && (!t || t === "_self") && !_b(e)
}
const Ib = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , Fb = "6";
try {
    window.__reactRouterVersion = Fb
} catch {}
const Bb = "startTransition"
  , Hf = Ip[Bb];
function $b(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , s = S.useRef();
    s.current == null && (s.current = HC({
        window: o,
        v5Compat: !0
    }));
    let i = s.current
      , [l,a] = S.useState({
        action: i.action,
        location: i.location
    })
      , {v7_startTransition: c} = r || {}
      , u = S.useCallback(d => {
        c && Hf ? Hf( () => a(d)) : a(d)
    }
    , [a, c]);
    return S.useLayoutEffect( () => i.listen(u), [i, u]),
    S.useEffect( () => Ob(r), [r]),
    S.createElement(Lb, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: i,
        future: r
    })
}
const Ub = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Wb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , ji = S.forwardRef(function(t, n) {
    let {onClick: r, relative: o, reloadDocument: s, replace: i, state: l, target: a, to: c, preventScrollReset: u, viewTransition: d} = t, m = Db(t, Ib), {basename: p} = S.useContext(Rr), w, g = !1;
    if (typeof c == "string" && Wb.test(c) && (w = c,
    Ub))
        try {
            let v = new URL(window.location.href)
              , C = c.startsWith("//") ? new URL(v.protocol + c) : new URL(c)
              , b = Ku(C.pathname, p);
            C.origin === v.origin && b != null ? c = b + C.search + C.hash : g = !0
        } catch {}
    let y = vb(c, {
        relative: o
    })
      , f = Vb(c, {
        replace: i,
        state: l,
        target: a,
        preventScrollReset: u,
        relative: o,
        viewTransition: d
    });
    function h(v) {
        r && r(v),
        v.defaultPrevented || f(v)
    }
    return S.createElement("a", Ac({}, m, {
        href: w || y,
        onClick: g || s ? r : h,
        ref: n,
        target: a
    }))
});
var Qf;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Qf || (Qf = {}));
var Kf;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Kf || (Kf = {}));
function Vb(e, t) {
    let {target: n, replace: r, state: o, preventScrollReset: s, relative: i, viewTransition: l} = t === void 0 ? {} : t
      , a = bv()
      , c = ko()
      , u = Ev(e, {
        relative: i
    });
    return S.useCallback(d => {
        if (zb(d, n)) {
            d.preventDefault();
            let m = r !== void 0 ? r : ll(c) === ll(u);
            a(e, {
                replace: m,
                state: o,
                preventScrollReset: s,
                relative: i,
                viewTransition: l
            })
        }
    }
    , [c, a, u, r, o, n, e, s, i, l])
}
function Hb() {
    const {pathname: e} = ko();
    return S.useEffect( () => {
        window.scrollTo(0, 0)
    }
    , [e]),
    null
}
const Qb = "data:image/png;base64,UklGRhQHAABXRUJQVlA4IAgHAACwJQCdASqvADEAPjEWiUOiISERegbMIAMEtIAK8p/mH4d+BP9P/IDxE/OP1v8gM4n9Svtn9Z/aL+l/tJzg8AL8f/jf9V/Ir+dfuHx0gAPw7+Q/4H81f7Z6AP9B6T/LN6p/5n/oeNvoB/mb/g/cB9J/8d/yP8x54vnz/ee4N/Jf6L/nP71/gf/J/if//9Q/rv/bH2Uv1E/+p2S+UR7ydxcGtTz1/KrHnyx6cNbXilyMzYeAqrjQ4MPvWk/hT7GUvE8aElAizv9sSjXaFfZfaOk9actjf+Kb1AsBjwbfr0dd/noCVc89yS8MXTEG8cHoRWakyc4w3sRAtZDlv26buqZnGzTLuAFRzEaQPOpkPCiyCSoq6+yj4EZORrU/phTweLJiYP8O4OQgygBdJ0eOhSQ3Y4uDr5mAAP7+3XvqJwqKJNqwv2mTnsvXVl+0Yqc9+Zy49j9OBPn0htdRUtV/ycOEgM7+d8xKW5oqlzGuj5adgC4BfRuuHtXSqkvA+xSh/29J34P0z5f/drbcBG8UXx2JkdLbBvTTQqzwI3gTP+rFAkl1WG9X/IVkzhO4WvsJn/zRAxmFjuPgGNTOQXQ9PbU3blqmPZ6WmpLEhK3x5XfbV5a+Gkm/CUlf1lrUX6qTHeuL9fwfDRdtwiDtHnSTrIqJpwr5HP6iSzk6femOSify5eW0spOtM5KAztfJvzTsLA5VrI4h9jw8kdbujl5S/tDPf2iAtt84EX0Vc3jD9Bzs7Cmgkx+jlW1fwPXWUPoYCtxjLcIS/yEH/w1VVFw3WONOBeGGRBmQ0BjNyoD7GmvMNigPc3zdF7a9sjw+B+4NOfpPrCTJwvDXDm1Q/SqL/NRlMKsTznKqjoomvv7rD8KiPoR/AchPxpfPpkEl8uT6jA5W20/ezLD2QE7IP5CfktGeHqlkPwGZtB3jxQW3BBEgOfl3qPA8pU8XM0QONTl/hiaYWv1KXVqe+IdBYVnp+VNI4jeIIQ1zPy/NYO4F8C4gBeCT8xvrltM/VYvSCy6tv60j7yZEZl77SOBmdploz98dko+ep6C60G4U4nPU/PG+CniRl4TqMSKRFXq6MWBSI1/ZKK/z/h703htJDE8Wy9d/YLMr//iJeapoTZB4s3/XkYZ5FWpgX9dar0x1URjfb8HMRwksQket38f/PkdtRlUDsup950azOmLiqsydJ3YWnHy5tI1IEPAPSU2huurThwit9f5ZfPrmQ+MsTBBSL7mKHziDi2VhxZZ7+6iN3aHBq2jdsB0Vq8P12Yo8x7BJOahxVotaVnvoEg1gI5dDhc9zGz4sWj969BKUVj66seGpJYj9aqAAPOmXybZvibdXCqcYJwm8niCyTLS+M45Tn5nfnlkM7gAtwC/Cfbrh4TV8lSS7XE358/KmcL+egn/HUfMHLUMveAja14j4twR21hC4EkrBrW4tDStLpjS4VpEXBoQP3Gv6m9OYWj0e+M5TF9tjcxWKbs//OOcRUsivn6+oYNOq0I6ReZku2aWTyN0Yv/ZTA+ta135Tq6iZI1LYTDzeAw9CagiEmO7oX9lT8akbWjyl1XfhfLb/G61Pvs6qnRDlLbTjjaVQ/CXqVHNoeduon/bdFZpWD6rY3jF/7L849W2G3tMoLmyye6ICpFz8p3OTIxu5DTc4iGahlblSoLvWUrr2+2UB//0tVQ3qpxjyeoabJoCvTzCVi0G+AJMy8LzprEzCWuUUWlatI4RMEPvizBAgXoa2J76tt6SAHn2r7GheK8ns5eaWpOwuD9HGC/DgtqFADaccjAHJ+HCo1lzWxTn4z4k5L6CEvw4XUh59IoWk280hvhxxFdt8l9KbGZXGd/Uxs5P6FQ3rPIa5LXhYTOmqBqBiShrzJS2WjLc7iQ6QKzB8zUe9TNZcLH/GPnA7kPaGKRSRESHbMe1w8wWmGsoNcdK06R0Bpq2WnRtHAL5yPgnaj2o5oGhktWJaRqN6CDRhjD8GpojTbSK2Mdeb2QDKDk0d1ifq0F5nGEOiOPYSBHG1wtFZwrn5VFKxZVckbaDwn0E/+4cjt9lCyNB9WELvCLeUuNefJUpAI2E3ME9KWYFL6WZ3f2J7p13Fev6aa3efuU8tdFuYXCOVipnKTbqjGrP1UkQZytUMgUoT4JyJQ1cJB+nm5FBe8YpWEWxjYPFu8NkaQuzLvJF08vPz62DJVDffDZN2pKWGx8bK6U100F8uQ5sYKR5L9bZuNlMhkBK0v88yOXB8Z9kWs7hg4PxNFtNMAnshyGCYyqInPr+T48Rp4gzePLVa6KjMR3ZWHh8ORJSRPepdRI6hS8b6EdWtHgCbpE3jEiioqSVgdpxCFTx4I60/mSCwNA354F29jMiXNkv6cP/i6QnvQn7QYULnTtuP2qNSSHMw/rzOjJPwAAAAAAA="
  , Oc = () => x.jsx("header", {
    className: "sticky top-0 z-50 w-full border-b bg-background",
    children: x.jsxs("div", {
        className: "container flex h-16 items-center justify-between px-4",
        children: [x.jsxs("div", {
            className: "flex items-center gap-4",
            children: [x.jsx("button", {
                className: "lg:hidden",
                children: x.jsx(mx, {
                    className: "h-6 w-6"
                })
            }), x.jsx("img", {
                src: Qb,
                alt: "Crocs",
                className: "h-8"
            })]
        }), x.jsxs("div", {
            className: "flex items-center gap-4",
            children: [x.jsx("button", {
                className: "hover:text-primary transition-colors",
                children: x.jsx(gx, {
                    className: "h-6 w-6"
                })
            }), x.jsx("button", {
                className: "hover:text-primary transition-colors",
                children: x.jsx(px, {
                    className: "h-6 w-6"
                })
            }), x.jsx("button", {
                className: "hover:text-primary transition-colors",
                children: x.jsx(yx, {
                    className: "h-6 w-6"
                })
            }), x.jsx("button", {
                className: "hover:text-primary transition-colors",
                children: x.jsx(vx, {
                    className: "h-6 w-6"
                })
            })]
        })]
    })
})
  , Kb = "/assets/data-fiscal-D_PjvSOY.png"
  , Gb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAQCAYAAABpyU3qAAAABmJLR0QA/wD/AP+gvaeTAAACZElEQVRIicWWT0hUURTGv+OMZVH0BwujgowWbmrjoj9IbaKgRVQQGC0ERdoI0SIKLFq4kQiqfUSBRLkozIWbIJAWuSiEoGxhRERk0pAZSU72azHn0fX2XsEMzHwwvHfu/e65vzn3zmGkQMAd4Cfl6RtwStUWsLZM4FCj1eKtS17MrCDpSYX57lW4vjwBbRVU+w2wpFqseQfeKKlJ0pyk5z5eTPHXS9qRkavXzOY9325J68zsocd5SUckvZbUIGlLtHbCzF4AuyRtd45JSW8ltQXzOUmHJU0JyAOzQeXeA5ZGBuSAqZRqPwPqAl+/jzd7vNfjTmAgZf014KS/zwEFYAhYDkwC00AjcMY9R5ONRqNE7RngXRnX5EDkS0C7Pe4DflE62cTzEngaxDcpdbQVUa6DnmsI+ArcDyd3euJEf91XoAF4lwL9OONkPgODHo8B45EnBk9acb9/TgRzt32vGWCT5F3FzMYkDQd5myV1RTynJW2OGSWdj8HNbEHSI0n7gUZJrZJGYl+KzL2tkrYG4x/8OSPpy2ICaAGKQSWngJU+t9orGCuz/QEd7rnqz33RfFzxAWCe6PflXD+Acc9zPW2zWxHYBR+/nAJdBFr+Ab4+KEQBqP8P+EX3jgCDQK+Pj/gVaQIeAAvAnny03yVJ7ZKWenwWmJPUk8J2w8wmssDN7BPQKemYe+P2OqxS20t0RdIyldqhJH0HtkmaldRtZh+BHl+z6PSSb54cbaK440Dpf8mGLOiaiFK/nHHAV/zppaH6as2ZKuCc36VDHncE0NPAqlozZgpYE7zngLsOfbyWXIl+A1d5xOT2xL1oAAAAAElFTkSuQmCC"
  , qb = "/assets/reclame-aqui-DA5lqYRm.png"
  , Yb = "/assets/app-store-CO9rZ6h5.webp"
  , Xb = "/assets/google-play-D3XIRX6h.webp"
  , Lc = () => x.jsxs("footer", {
    className: "bg-[#4a4a4a] text-white",
    children: [x.jsxs("div", {
        className: "container mx-auto px-4 py-8",
        children: [x.jsxs("div", {
            className: "space-y-4 mb-8",
            children: [x.jsx("div", {
                className: "border-b border-white/20 pb-3",
                children: x.jsxs("button", {
                    className: "flex items-center justify-between w-full text-left",
                    children: [x.jsx("span", {
                        className: "text-lg font-light",
                        children: "Quem Somos"
                    }), x.jsx(Wo, {
                        className: "h-5 w-5"
                    })]
                })
            }), x.jsx("div", {
                className: "border-b border-white/20 pb-3",
                children: x.jsxs("button", {
                    className: "flex items-center justify-between w-full text-left",
                    children: [x.jsx("span", {
                        className: "text-lg font-light",
                        children: "Comprar"
                    }), x.jsx(Wo, {
                        className: "h-5 w-5"
                    })]
                })
            }), x.jsx("div", {
                className: "border-b border-white/20 pb-3",
                children: x.jsxs("button", {
                    className: "flex items-center justify-between w-full text-left",
                    children: [x.jsx("span", {
                        className: "text-lg font-light",
                        children: "Informação"
                    }), x.jsx(Wo, {
                        className: "h-5 w-5"
                    })]
                })
            }), x.jsx("div", {
                className: "border-b border-white/20 pb-3",
                children: x.jsxs("button", {
                    className: "flex items-center justify-between w-full text-left",
                    children: [x.jsx("span", {
                        className: "text-lg font-light",
                        children: "Minha conta"
                    }), x.jsx(Wo, {
                        className: "h-5 w-5"
                    })]
                })
            })]
        }), x.jsxs("div", {
            className: "flex gap-6 mb-8",
            children: [x.jsx("button", {
                className: "hover:opacity-80 transition-opacity",
                children: x.jsx(fx, {
                    className: "h-7 w-7"
                })
            }), x.jsx("button", {
                className: "hover:opacity-80 transition-opacity",
                children: x.jsx(hx, {
                    className: "h-7 w-7"
                })
            }), x.jsx("button", {
                className: "hover:opacity-80 transition-opacity",
                children: x.jsx(wx, {
                    className: "h-7 w-7"
                })
            })]
        }), x.jsx("div", {
            className: "mb-8",
            children: x.jsx("img", {
                src: qb,
                alt: "Reclame Aqui",
                className: "h-24 w-auto"
            })
        }), x.jsxs("div", {
            className: "mb-8",
            children: [x.jsx("h3", {
                className: "text-lg font-light mb-4",
                children: "Baixe nosso App"
            }), x.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-3",
                children: [x.jsx("img", {
                    src: Yb,
                    alt: "Disponível na App Store",
                    className: "max-w-[140px] h-auto cursor-pointer hover:opacity-90 transition-opacity"
                }), x.jsx("img", {
                    src: Xb,
                    alt: "Disponível no Google Play",
                    className: "max-w-[140px] h-auto cursor-pointer hover:opacity-90 transition-opacity"
                })]
            })]
        })]
    }), x.jsx("div", {
        className: "bg-[#3a3a3a] py-6",
        children: x.jsx("div", {
            className: "container mx-auto px-4",
            children: x.jsxs("div", {
                className: "flex flex-col items-center gap-4 mb-4",
                children: [x.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [x.jsx("img", {
                        src: Kb,
                        alt: "Data Fiscal",
                        className: "h-10 w-auto"
                    }), x.jsx("p", {
                        className: "text-xs",
                        children: "© 2021 CROCS - Todos os direitos reservados"
                    })]
                }), x.jsxs("div", {
                    className: "flex flex-wrap justify-center gap-3 text-xs",
                    children: [x.jsx("span", {
                        children: "Preferência de Privacidade"
                    }), x.jsx("span", {
                        children: "|"
                    }), x.jsx("span", {
                        children: "Termos e Condições"
                    }), x.jsx("span", {
                        children: "|"
                    }), x.jsx("span", {
                        children: "Política de Privacidade"
                    })]
                }), x.jsx("div", {
                    className: "flex flex-col sm:flex-row items-center gap-3 text-xs",
                    children: x.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [x.jsx("span", {
                            children: "Powered by"
                        }), x.jsx("img", {
                            src: Gb,
                            alt: "VTEX",
                            className: "h-5 w-auto"
                        })]
                    })
                })]
            })
        })
    })]
})
  , Jb = ({name: e, image: t, model: n, oldPrice: r="R$ 349,00", currentPrice: o="R$ 0,00", slug: s}) => x.jsxs(ji, {
    to: `/produto/${s}`,
    className: "group relative flex flex-col rounded-lg border border-border/40 bg-card p-5 shadow-[0_3px_5px_rgba(0,0,0,0.21)] transition-all hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]",
    children: [x.jsx("div", {
        className: "mb-2 flex items-center justify-center py-2",
        children: x.jsx("img", {
            src: t,
            alt: e,
            className: "h-32 w-auto object-contain transition-transform group-hover:scale-105"
        })
    }), x.jsx("h3", {
        className: "mb-1 text-sm font-semibold text-foreground leading-normal line-clamp-2",
        children: e
    }), n && x.jsx("p", {
        className: "mb-1 text-xs font-normal text-muted-foreground",
        children: n
    }), x.jsx("div", {
        className: "mb-0.5",
        children: x.jsx("span", {
            className: "text-xs text-muted-foreground/70 line-through",
            children: r
        })
    }), x.jsx("div", {
        className: "mb-2",
        children: x.jsx("span", {
            className: "text-lg font-bold text-primary",
            children: o === "R$ 0,00" || o === "R$0,00" ? "GRÁTIS" : o
        })
    }), x.jsx("button", {
        className: "w-full rounded-full bg-button py-3 text-sm font-bold text-button-foreground transition-colors hover:bg-button/90",
        children: "RESGATAR"
    })]
})
  , Gf = "/assets/crocs-crocband-quartz-B7spOAVL.png"
  , Zb = "/assets/crocs-crocband-quartz-2-DGTKOAJg.png"
  , eE = "/assets/crocs-crocband-quartz-3-Dv_Du9Q1.png"
  , tE = "/assets/crocs-crocband-quartz-4-xplQV2UM.png"
  , nE = "/assets/crocs-crocband-quartz-5-A7WU65kt.png"
  , qf = "/assets/crocs-stitch-classic-blue-sdJ1HaMo.png"
  , rE = "/assets/crocs-stitch-classic-blue-2-nc0DMmC-.png"
  , oE = "/assets/crocs-stitch-classic-blue-3-oWZb5p2k.png"
  , sE = "/assets/crocs-stitch-classic-blue-4-lcG2Ardd.png"
  , iE = "/assets/crocs-stitch-classic-blue-5-CfCwLy8a.png"
  , Yf = "/assets/crocs-classic-purple-Bf_bbqLF.png"
  , lE = "/assets/crocs-classic-purple-2-BH9tGGc6.png"
  , aE = "/assets/crocs-classic-purple-3-bMEtCc5y.png"
  , cE = "/assets/crocs-classic-purple-4-BRbGg-BS.png"
  , uE = "/assets/crocs-classic-purple-5-CiQH2TYo.png"
  , Xf = "/assets/crocs-mike-green-BdLsqqkm.png"
  , dE = "/assets/crocs-mike-green-2-qjQ4a76Z.png"
  , fE = "/assets/crocs-mike-green-3-B2-tNCNL.png"
  , pE = "/assets/crocs-mike-green-4-UXyZ6nM7.png"
  , hE = "/assets/crocs-mike-green-5-CPEFl13J.png"
  , Jf = "/assets/crocs-grinch-multi-DJKV0kFu.png"
  , mE = "/assets/crocs-grinch-multi-2-DEY1jbG7.png"
  , gE = "/assets/crocs-grinch-multi-3-AD1Fv06Y.png"
  , vE = "/assets/crocs-grinch-multi-4-DVexKBGg.png"
  , yE = "/assets/crocs-grinch-multi-5-DeO_1Z8c.png"
  , wE = "/assets/crocs-grinch-multi-6-lxpiXO9A.png"
  , Zf = "/assets/crocs-mcqueen-red-BpN0jU8Q.png"
  , xE = "/assets/crocs-mcqueen-red-2-55zVSBNC.png"
  , SE = "/assets/crocs-mcqueen-red-3-BX8SDsIK.png"
  , CE = "/assets/crocs-mcqueen-red-4-Cxr2ucqx.png"
  , bE = "/assets/crocs-mcqueen-red-5-DqMKDdEO.png"
  , ep = "/assets/crocs-crocband-navy-CBbERWYD.png"
  , EE = "/assets/crocs-crocband-navy-2-BVgox3mm.png"
  , kE = "/assets/crocs-crocband-navy-3-DtrxZa95.png"
  , PE = "/assets/crocs-crocband-navy-4-CDkkdZzA.png"
  , TE = "/assets/crocs-crocband-navy-5-BNKHPKCr.png"
  , tp = "/assets/crocs-crocband-blue-Dy6eFTMu.png"
  , NE = "/assets/crocs-crocband-blue-2-Cko-CcQg.png"
  , RE = "/assets/crocs-crocband-blue-3-CaQw9EaK.png"
  , jE = "/assets/crocs-crocband-blue-4-BDb44SAN.png"
  , AE = "/assets/crocs-crocband-blue-5-D2AVvhl5.png"
  , np = "/assets/crocs-crocband-black-white-C-amMwwO.png"
  , OE = "/assets/crocs-crocband-black-white-2-mDyF85FO.png"
  , LE = "/assets/crocs-crocband-black-white-3-DWjMB5Y0.png"
  , ME = "/assets/crocs-crocband-black-white-4-mDieNwbh.png"
  , rp = "/assets/crocs-crocband-white-DihtXpN9.png"
  , DE = "/assets/crocs-crocband-white-2-BoaIXLqk.png"
  , _E = "/assets/crocs-crocband-white-3-wHSxX4an.png"
  , zE = "/assets/crocs-crocband-white-4-BeOASKsq.png"
  , IE = "/assets/crocs-crocband-white-5-CDx_xATr.png"
  , op = "/assets/crocs-baya-lined-pink-C5U6uU8E.png"
  , FE = "/assets/crocs-baya-lined-pink-2-gBKfohfK.png"
  , BE = "/assets/crocs-baya-lined-pink-3-BR6LBvkt.png"
  , $E = "/assets/crocs-baya-lined-pink-4-DhFybYJc.png"
  , UE = "/assets/crocs-baya-lined-pink-5-DlkA1fHr.png"
  , sp = "/assets/crocs-bape-camo-blue-CHdtS-Wq.png"
  , WE = "/assets/crocs-bape-camo-blue-2-BUoCixkk.png"
  , VE = "/assets/crocs-bape-camo-blue-3-B_nZv2KE.png"
  , HE = "/assets/crocs-bape-camo-blue-4-B2ZNJ2se.png"
  , ip = "/assets/crocs-eeyore-CdPKHSgr.png"
  , QE = "/assets/crocs-winnie-pooh-2-BtKm6Jga.png"
  , KE = "/assets/crocs-winnie-pooh-3-0QHmtLcr.png"
  , GE = "/assets/crocs-winnie-pooh-4-Bvp40Len.png"
  , qE = "/assets/crocs-winnie-pooh-5-CVi1bgKg.png"
  , lp = "/assets/crocs-lotso-DFIejxfK.png"
  , YE = "/assets/crocs-lotso-2-Bnz0cDWZ.png"
  , XE = "/assets/crocs-lotso-3-3MJ-d-U1.png"
  , JE = "/assets/crocs-lotso-4-DjHtWPfY.png"
  , ap = "/assets/crocs-mater-CR_1qFO3.png"
  , ZE = "/assets/crocs-mater-2-DLM_6eu1.png"
  , ek = "/assets/crocs-mater-3-DDdlfl2_.png"
  , tk = "/assets/crocs-mater-4-dw1Dad-R.png"
  , nk = "/assets/crocs-mater-5-Drii6r4S.png"
  , rk = "/assets/crocs-mater-6-wEwqhEwL.png"
  , cp = "/assets/crocs-sulley-B8-W3wT4.png"
  , ok = "/assets/crocs-sulley-2-QMDRwdvm.png"
  , sk = "/assets/crocs-sulley-3-BKpuE3J1.png"
  , ik = "/assets/crocs-sulley-4-CGt4TRc7.png"
  , lk = "/assets/crocs-sulley-5-BQ86MlGW.png"
  , up = "/assets/crocs-spiderman-B-U5Qjfg.png"
  , ak = "/assets/crocs-spiderman-2-DrAx6n-F.png"
  , ck = "/assets/crocs-spiderman-3-Ca-WOaT0.png"
  , dp = "/assets/crocs-shrek-D_HEkpve.png"
  , uk = "/assets/crocs-shrek-2-CmDtSdkL.png"
  , dk = "/assets/crocs-shrek-3-DEykrtRm.png"
  , fk = "/assets/crocs-shrek-4-ZKdGMAyJ.png"
  , pk = "/assets/crocs-shrek-5-O6OPexyx.png"
  , hk = "/assets/crocs-shrek-6-BH4-dtXw.png"
  , mk = "/assets/crocs-shrek-7-BheTJ8LB.png"
  , gk = "/assets/crocs-shrek-8-CxcrvLjv.png"
  , fp = "/assets/crocs-eeyore-CdPKHSgr.png"
  , pp = "/assets/crocs-wonderland-DsXHyHg0.png"
  , vk = "/assets/crocs-wonderland-2-B90fU6Dt.png"
  , yk = "/assets/crocs-wonderland-3-C4OBEGre.png"
  , wk = "/assets/crocs-wonderland-4-CFSws3sM.png"
  , xk = "/assets/crocs-wonderland-5-C8CGEEc1.png"
  , Sk = "/assets/crocs-wonderland-6-Ds9Wqzk6.png"
  , hp = "/assets/crocs-suede-5P6JEWK_.png"
  , Ck = "/assets/crocs-suede-2-BtgHEF5w.png"
  , bk = "/assets/crocs-suede-3-C4j3oQ-t.png"
  , Ek = "/assets/crocs-suede-4-jmlP70v9.png"
  , kk = "/assets/crocs-suede-5-CD0MDGpM.png"
  , Pk = "/assets/crocs-suede-6--zgGL0HM.png"
  , Tv = [{
    id: 1,
    name: "Sandália Crocs Crocband™ Clog",
    model: "QUARTZ",
    slug: "crocs-crocband-clog-quartz",
    image: Gf,
    images: [Gf, Zb, eE, tE, nE],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 2,
    name: "Sandália Crocs Stitch Classic Clog",
    model: "AZUL STITCH",
    slug: "crocs-stitch-classic-clog-azul",
    image: qf,
    images: [qf, rE, oE, sE, iE],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 3,
    name: "Sandália Crocs Classic Clog",
    model: "ROXO",
    slug: "crocs-classic-clog-roxo",
    image: Yf,
    images: [Yf, lE, aE, cE, uE],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 4,
    name: "Sandália Crocs Monstros S.A Mike Classic Clog",
    model: "VERDE MIKE",
    slug: "crocs-mike-classic-clog-verde",
    image: Xf,
    images: [Xf, dE, fE, pE, hE],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 5,
    name: "Sandália The Grinch x Crocs Classic Lined Clog Multi",
    model: "MULTI",
    slug: "crocs-grinch-classic-clog-multi",
    image: Jf,
    images: [Jf, mE, gE, vE, yE, wE],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 6,
    name: "Sandália Crocs Lights Lightning McQueen Clog",
    model: "RED",
    slug: "crocs-mcqueen-clog-red",
    image: Zf,
    images: [Zf, xE, SE, CE, bE],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 7,
    name: "Sandália Crocs Crocband Clog",
    model: "NAVY",
    slug: "crocs-crocband-clog-navy",
    image: ep,
    images: [ep, EE, kE, PE, TE],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 8,
    name: "Sandália Crocs Crocband Clog",
    model: "AZUL",
    slug: "crocs-crocband-clog-azul",
    image: tp,
    images: [tp, NE, RE, jE, AE],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 9,
    name: "Sandália Crocs Crocband Clog",
    model: "PRETO COM BRANCO",
    slug: "crocs-crocband-clog-preto-branco",
    image: np,
    images: [np, OE, LE, ME],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 10,
    name: "Sandália Crocs Crocband Clog",
    model: "BRANCO",
    slug: "crocs-crocband-clog-branco",
    image: rp,
    images: [rp, DE, _E, zE, IE],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 11,
    name: "Sandália Crocs Baya Lined Clog Juvenil",
    model: "ROSA ANIMALS",
    slug: "crocs-baya-lined-clog-rosa-animals",
    image: op,
    images: [op, FE, BE, $E, UE],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 12,
    name: "Sandália Crocs BAPE X Classic Clog 'ABC Camo-Blue'",
    model: "ABC CAMO-BLUE",
    slug: "crocs-bape-classic-clog-abc-camo-blue",
    image: sp,
    images: [sp, WE, VE, HE],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 13,
    name: "Sandália Crocs x Disney Platform Clog Winnie The Pooh",
    model: "WINNIE THE POOH",
    slug: "crocs-winnie-the-pooh-platform-clog",
    image: ip,
    images: [ip, QE, KE, GE, qE],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 14,
    name: "Sandália Crocs x Pixar Classic Clog Lotso",
    model: "LOTSO",
    slug: "crocs-pixar-lotso-classic-clog",
    image: lp,
    images: [lp, YE, XE, JE],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 15,
    name: "Sandália Crocs Cars Mater Classic Clog Juvenil",
    model: "SLATE GREY",
    slug: "crocs-cars-mater-classic-clog",
    image: ap,
    images: [ap, ZE, ek, tk, nk, rk],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 16,
    name: "Sandália Crocs Monstros S.A Sulley Classic Cozzzy Sandal",
    model: "MULTI",
    slug: "crocs-sulley-classic-cozzzy-sandal",
    image: cp,
    images: [cp, ok, sk, ik, lk],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 17,
    name: "Sandália Crocs Classic Team Spiderman All Terrain Clog",
    model: "NAVY",
    slug: "crocs-spiderman-all-terrain-clog",
    image: up,
    images: [up, ak, ck],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 18,
    name: "Sandália Crocs Shrek Classic Clog Juvenil",
    model: "VERDE",
    slug: "crocs-shrek-classic-clog-juvenil",
    image: dp,
    images: [dp, uk, dk, fk, pk, hk, mk, gk],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 19,
    name: "Sandália Crocs Disney Winnie the Pooh Eeyore Classic Clog",
    model: "WINNIE THE POOH EEYORE",
    slug: "crocs-eeyore-classic-clog",
    image: fp,
    images: [fp],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 20,
    name: "Sandália Crocs Wonderland Print Classic Clog",
    model: "WONDERLAND PRINT",
    slug: "crocs-wonderland-print-classic-clog",
    image: pp,
    images: [pp, vk, yk, wk, xk, Sk],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}, {
    id: 21,
    name: "Sandália Crocs de Camurça Clássico",
    model: "CAMURÇA",
    slug: "crocs-camurca-classico",
    image: hp,
    images: [hp, Ck, bk, Ek, kk, Pk],
    oldPrice: "R$ 349,00",
    currentPrice: "R$ 0,00"
}]
  , Tk = e => Tv.find(t => t.slug === e)
  , Nk = () => x.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [x.jsx(Oc, {}), x.jsxs("main", {
        className: "container mx-auto px-4 py-6",
        children: [x.jsxs("div", {
            className: "mb-4 flex items-center gap-2 text-sm text-muted-foreground",
            children: [x.jsx(xg, {
                className: "h-4 w-4"
            }), x.jsx("span", {
                children: "›"
            }), x.jsx("span", {
                children: "PROMOÇÃO"
            })]
        }), x.jsxs("div", {
            className: "mb-6 flex flex-col items-center text-center gap-1",
            children: [x.jsx("h1", {
                className: "text-2xl md:text-3xl font-black tracking-tight",
                children: "ESCOLHA SEU PRÊMIO"
            }), x.jsx("p", {
                className: "text-base text-muted-foreground",
                children: "Ganhe um Crocs de graça! Escolha o seu modelo favorito."
            }), x.jsx("span", {
                className: "text-sm font-medium mt-1",
                children: "21 PRODUTOS"
            })]
        }), x.jsx("div", {
            className: "grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4",
            children: Tv.map(e => x.jsx(Jb, {
                name: e.name,
                image: e.image,
                model: e.model,
                oldPrice: e.oldPrice,
                currentPrice: e.currentPrice,
                slug: e.slug
            }, e.id))
        })]
    }), x.jsx(Lc, {})]
})
  , Rk = vg("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , zl = S.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, s) => {
    const i = r ? gw : "button";
    return x.jsx(i, {
        className: ht(Rk({
            variant: t,
            size: n,
            className: e
        })),
        ref: s,
        ...o
    })
}
);
zl.displayName = "Button";
function jk(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function mp(e) {
    return jk(e) || Array.isArray(e)
}
function Ak() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
}
function qu(e, t) {
    const n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    const o = JSON.stringify(Object.keys(e.breakpoints || {}))
      , s = JSON.stringify(Object.keys(t.breakpoints || {}));
    return o !== s ? !1 : n.every(i => {
        const l = e[i]
          , a = t[i];
        return typeof l == "function" ? `${l}` == `${a}` : !mp(l) || !mp(a) ? l === a : qu(l, a)
    }
    )
}
function gp(e) {
    return e.concat().sort( (t, n) => t.name > n.name ? 1 : -1).map(t => t.options)
}
function Ok(e, t) {
    if (e.length !== t.length)
        return !1;
    const n = gp(e)
      , r = gp(t);
    return n.every( (o, s) => {
        const i = r[s];
        return qu(o, i)
    }
    )
}
function Yu(e) {
    return typeof e == "number"
}
function Mc(e) {
    return typeof e == "string"
}
function Il(e) {
    return typeof e == "boolean"
}
function vp(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function he(e) {
    return Math.abs(e)
}
function Xu(e) {
    return Math.sign(e)
}
function ts(e, t) {
    return he(e - t)
}
function Lk(e, t) {
    if (e === 0 || t === 0 || he(e) <= he(t))
        return 0;
    const n = ts(he(e), he(t));
    return he(n / e)
}
function Mk(e) {
    return Math.round(e * 100) / 100
}
function ks(e) {
    return Ps(e).map(Number)
}
function Ft(e) {
    return e[Fs(e)]
}
function Fs(e) {
    return Math.max(0, e.length - 1)
}
function Ju(e, t) {
    return t === Fs(e)
}
function yp(e, t=0) {
    return Array.from(Array(e), (n, r) => t + r)
}
function Ps(e) {
    return Object.keys(e)
}
function Nv(e, t) {
    return [e, t].reduce( (n, r) => (Ps(r).forEach(o => {
        const s = n[o]
          , i = r[o]
          , l = vp(s) && vp(i);
        n[o] = l ? Nv(s, i) : i
    }
    ),
    n), {})
}
function Dc(e, t) {
    return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent
}
function Dk(e, t) {
    const n = {
        start: r,
        center: o,
        end: s
    };
    function r() {
        return 0
    }
    function o(a) {
        return s(a) / 2
    }
    function s(a) {
        return t - a
    }
    function i(a, c) {
        return Mc(e) ? n[e](a) : e(t, a, c)
    }
    return {
        measure: i
    }
}
function Ts() {
    let e = [];
    function t(o, s, i, l={
        passive: !0
    }) {
        let a;
        if ("addEventListener"in o)
            o.addEventListener(s, i, l),
            a = () => o.removeEventListener(s, i, l);
        else {
            const c = o;
            c.addListener(i),
            a = () => c.removeListener(i)
        }
        return e.push(a),
        r
    }
    function n() {
        e = e.filter(o => o())
    }
    const r = {
        add: t,
        clear: n
    };
    return r
}
function _k(e, t, n, r) {
    const o = Ts()
      , s = 1e3 / 60;
    let i = null
      , l = 0
      , a = 0;
    function c() {
        o.add(e, "visibilitychange", () => {
            e.hidden && w()
        }
        )
    }
    function u() {
        p(),
        o.clear()
    }
    function d(y) {
        if (!a)
            return;
        i || (i = y,
        n(),
        n());
        const f = y - i;
        for (i = y,
        l += f; l >= s; )
            n(),
            l -= s;
        const h = l / s;
        r(h),
        a && (a = t.requestAnimationFrame(d))
    }
    function m() {
        a || (a = t.requestAnimationFrame(d))
    }
    function p() {
        t.cancelAnimationFrame(a),
        i = null,
        l = 0,
        a = 0
    }
    function w() {
        i = null,
        l = 0
    }
    return {
        init: c,
        destroy: u,
        start: m,
        stop: p,
        update: n,
        render: r
    }
}
function zk(e, t) {
    const n = t === "rtl"
      , r = e === "y"
      , o = r ? "y" : "x"
      , s = r ? "x" : "y"
      , i = !r && n ? -1 : 1
      , l = u()
      , a = d();
    function c(w) {
        const {height: g, width: y} = w;
        return r ? g : y
    }
    function u() {
        return r ? "top" : n ? "right" : "left"
    }
    function d() {
        return r ? "bottom" : n ? "left" : "right"
    }
    function m(w) {
        return w * i
    }
    return {
        scroll: o,
        cross: s,
        startEdge: l,
        endEdge: a,
        measureSize: c,
        direction: m
    }
}
function Pr(e=0, t=0) {
    const n = he(e - t);
    function r(c) {
        return c < e
    }
    function o(c) {
        return c > t
    }
    function s(c) {
        return r(c) || o(c)
    }
    function i(c) {
        return s(c) ? r(c) ? e : t : c
    }
    function l(c) {
        return n ? c - n * Math.ceil((c - t) / n) : c
    }
    return {
        length: n,
        max: t,
        min: e,
        constrain: i,
        reachedAny: s,
        reachedMax: o,
        reachedMin: r,
        removeOffset: l
    }
}
function Rv(e, t, n) {
    const {constrain: r} = Pr(0, e)
      , o = e + 1;
    let s = i(t);
    function i(m) {
        return n ? he((o + m) % o) : r(m)
    }
    function l() {
        return s
    }
    function a(m) {
        return s = i(m),
        d
    }
    function c(m) {
        return u().set(l() + m)
    }
    function u() {
        return Rv(e, l(), n)
    }
    const d = {
        get: l,
        set: a,
        add: c,
        clone: u
    };
    return d
}
function Ik(e, t, n, r, o, s, i, l, a, c, u, d, m, p, w, g, y, f, h) {
    const {cross: v, direction: C} = e
      , b = ["INPUT", "SELECT", "TEXTAREA"]
      , k = {
        passive: !1
    }
      , E = Ts()
      , P = Ts()
      , j = Pr(50, 225).constrain(p.measure(20))
      , A = {
        mouse: 300,
        touch: 400
    }
      , z = {
        mouse: 500,
        touch: 600
    }
      , D = w ? 43 : 25;
    let V = !1
      , M = 0
      , H = 0
      , $ = !1
      , W = !1
      , T = !1
      , R = !1;
    function _(F) {
        if (!h)
            return;
        function Z(ke) {
            (Il(h) || h(F, ke)) && ve(ke)
        }
        const ae = t;
        E.add(ae, "dragstart", ke => ke.preventDefault(), k).add(ae, "touchmove", () => {}
        , k).add(ae, "touchend", () => {}
        ).add(ae, "touchstart", Z).add(ae, "mousedown", Z).add(ae, "touchcancel", ye).add(ae, "contextmenu", ye).add(ae, "click", Re, !0)
    }
    function U() {
        E.clear(),
        P.clear()
    }
    function B() {
        const F = R ? n : t;
        P.add(F, "touchmove", q, k).add(F, "touchend", ye).add(F, "mousemove", q, k).add(F, "mouseup", ye)
    }
    function G(F) {
        const Z = F.nodeName || "";
        return b.includes(Z)
    }
    function Q() {
        return (w ? z : A)[R ? "mouse" : "touch"]
    }
    function se(F, Z) {
        const ae = d.add(Xu(F) * -1)
          , ke = u.byDistance(F, !w).distance;
        return w || he(F) < j ? ke : y && Z ? ke * .5 : u.byIndex(ae.get(), 0).distance
    }
    function ve(F) {
        const Z = Dc(F, r);
        R = Z,
        T = w && Z && !F.buttons && V,
        V = ts(o.get(), i.get()) >= 2,
        !(Z && F.button !== 0) && (G(F.target) || ($ = !0,
        s.pointerDown(F),
        c.useFriction(0).useDuration(0),
        o.set(i),
        B(),
        M = s.readPoint(F),
        H = s.readPoint(F, v),
        m.emit("pointerDown")))
    }
    function q(F) {
        if (!Dc(F, r) && F.touches.length >= 2)
            return ye(F);
        const ae = s.readPoint(F)
          , ke = s.readPoint(F, v)
          , $e = ts(ae, M)
          , rt = ts(ke, H);
        if (!W && !R && (!F.cancelable || (W = $e > rt,
        !W)))
            return ye(F);
        const ot = s.pointerMove(F);
        $e > g && (T = !0),
        c.useFriction(.3).useDuration(.75),
        l.start(),
        o.add(C(ot)),
        F.preventDefault()
    }
    function ye(F) {
        const ae = u.byDistance(0, !1).index !== d.get()
          , ke = s.pointerUp(F) * Q()
          , $e = se(C(ke), ae)
          , rt = Lk(ke, $e)
          , ot = D - 10 * rt
          , Ue = f + rt / 50;
        W = !1,
        $ = !1,
        P.clear(),
        c.useDuration(ot).useFriction(Ue),
        a.distance($e, !w),
        R = !1,
        m.emit("pointerUp")
    }
    function Re(F) {
        T && (F.stopPropagation(),
        F.preventDefault(),
        T = !1)
    }
    function Ce() {
        return $
    }
    return {
        init: _,
        destroy: U,
        pointerDown: Ce
    }
}
function Fk(e, t) {
    let r, o;
    function s(d) {
        return d.timeStamp
    }
    function i(d, m) {
        const w = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
        return (Dc(d, t) ? d : d.touches[0])[w]
    }
    function l(d) {
        return r = d,
        o = d,
        i(d)
    }
    function a(d) {
        const m = i(d) - i(o)
          , p = s(d) - s(r) > 170;
        return o = d,
        p && (r = d),
        m
    }
    function c(d) {
        if (!r || !o)
            return 0;
        const m = i(o) - i(r)
          , p = s(d) - s(r)
          , w = s(d) - s(o) > 170
          , g = m / p;
        return p && !w && he(g) > .1 ? g : 0
    }
    return {
        pointerDown: l,
        pointerMove: a,
        pointerUp: c,
        readPoint: i
    }
}
function Bk() {
    function e(n) {
        const {offsetTop: r, offsetLeft: o, offsetWidth: s, offsetHeight: i} = n;
        return {
            top: r,
            right: o + s,
            bottom: r + i,
            left: o,
            width: s,
            height: i
        }
    }
    return {
        measure: e
    }
}
function $k(e) {
    function t(r) {
        return e * (r / 100)
    }
    return {
        measure: t
    }
}
function Uk(e, t, n, r, o, s, i) {
    const l = [e].concat(r);
    let a, c, u = [], d = !1;
    function m(y) {
        return o.measureSize(i.measure(y))
    }
    function p(y) {
        if (!s)
            return;
        c = m(e),
        u = r.map(m);
        function f(h) {
            for (const v of h) {
                if (d)
                    return;
                const C = v.target === e
                  , b = r.indexOf(v.target)
                  , k = C ? c : u[b]
                  , E = m(C ? e : r[b]);
                if (he(E - k) >= .5) {
                    y.reInit(),
                    t.emit("resize");
                    break
                }
            }
        }
        a = new ResizeObserver(h => {
            (Il(s) || s(y, h)) && f(h)
        }
        ),
        n.requestAnimationFrame( () => {
            l.forEach(h => a.observe(h))
        }
        )
    }
    function w() {
        d = !0,
        a && a.disconnect()
    }
    return {
        init: p,
        destroy: w
    }
}
function Wk(e, t, n, r, o, s) {
    let i = 0
      , l = 0
      , a = o
      , c = s
      , u = e.get()
      , d = 0;
    function m() {
        const k = r.get() - e.get()
          , E = !a;
        let P = 0;
        return E ? (i = 0,
        n.set(r),
        e.set(r),
        P = k) : (n.set(e),
        i += k / a,
        i *= c,
        u += i,
        e.add(i),
        P = u - d),
        l = Xu(P),
        d = u,
        b
    }
    function p() {
        const k = r.get() - t.get();
        return he(k) < .001
    }
    function w() {
        return a
    }
    function g() {
        return l
    }
    function y() {
        return i
    }
    function f() {
        return v(o)
    }
    function h() {
        return C(s)
    }
    function v(k) {
        return a = k,
        b
    }
    function C(k) {
        return c = k,
        b
    }
    const b = {
        direction: g,
        duration: w,
        velocity: y,
        seek: m,
        settled: p,
        useBaseFriction: h,
        useBaseDuration: f,
        useFriction: C,
        useDuration: v
    };
    return b
}
function Vk(e, t, n, r, o) {
    const s = o.measure(10)
      , i = o.measure(50)
      , l = Pr(.1, .99);
    let a = !1;
    function c() {
        return !(a || !e.reachedAny(n.get()) || !e.reachedAny(t.get()))
    }
    function u(p) {
        if (!c())
            return;
        const w = e.reachedMin(t.get()) ? "min" : "max"
          , g = he(e[w] - t.get())
          , y = n.get() - t.get()
          , f = l.constrain(g / i);
        n.subtract(y * f),
        !p && he(y) < s && (n.set(e.constrain(n.get())),
        r.useDuration(25).useBaseFriction())
    }
    function d(p) {
        a = !p
    }
    return {
        shouldConstrain: c,
        constrain: u,
        toggleActive: d
    }
}
function Hk(e, t, n, r, o) {
    const s = Pr(-t + e, 0)
      , i = d()
      , l = u()
      , a = m();
    function c(w, g) {
        return ts(w, g) <= 1
    }
    function u() {
        const w = i[0]
          , g = Ft(i)
          , y = i.lastIndexOf(w)
          , f = i.indexOf(g) + 1;
        return Pr(y, f)
    }
    function d() {
        return n.map( (w, g) => {
            const {min: y, max: f} = s
              , h = s.constrain(w)
              , v = !g
              , C = Ju(n, g);
            return v ? f : C || c(y, h) ? y : c(f, h) ? f : h
        }
        ).map(w => parseFloat(w.toFixed(3)))
    }
    function m() {
        if (t <= e + o)
            return [s.max];
        if (r === "keepSnaps")
            return i;
        const {min: w, max: g} = l;
        return i.slice(w, g)
    }
    return {
        snapsContained: a,
        scrollContainLimit: l
    }
}
function Qk(e, t, n) {
    const r = t[0]
      , o = n ? r - e : Ft(t);
    return {
        limit: Pr(o, r)
    }
}
function Kk(e, t, n, r) {
    const s = t.min + .1
      , i = t.max + .1
      , {reachedMin: l, reachedMax: a} = Pr(s, i);
    function c(m) {
        return m === 1 ? a(n.get()) : m === -1 ? l(n.get()) : !1
    }
    function u(m) {
        if (!c(m))
            return;
        const p = e * (m * -1);
        r.forEach(w => w.add(p))
    }
    return {
        loop: u
    }
}
function Gk(e) {
    const {max: t, length: n} = e;
    function r(s) {
        const i = s - t;
        return n ? i / -n : 0
    }
    return {
        get: r
    }
}
function qk(e, t, n, r, o) {
    const {startEdge: s, endEdge: i} = e
      , {groupSlides: l} = o
      , a = d().map(t.measure)
      , c = m()
      , u = p();
    function d() {
        return l(r).map(g => Ft(g)[i] - g[0][s]).map(he)
    }
    function m() {
        return r.map(g => n[s] - g[s]).map(g => -he(g))
    }
    function p() {
        return l(c).map(g => g[0]).map( (g, y) => g + a[y])
    }
    return {
        snaps: c,
        snapsAligned: u
    }
}
function Yk(e, t, n, r, o, s) {
    const {groupSlides: i} = o
      , {min: l, max: a} = r
      , c = u();
    function u() {
        const m = i(s)
          , p = !e || t === "keepSnaps";
        return n.length === 1 ? [s] : p ? m : m.slice(l, a).map( (w, g, y) => {
            const f = !g
              , h = Ju(y, g);
            if (f) {
                const v = Ft(y[0]) + 1;
                return yp(v)
            }
            if (h) {
                const v = Fs(s) - Ft(y)[0] + 1;
                return yp(v, Ft(y)[0])
            }
            return w
        }
        )
    }
    return {
        slideRegistry: c
    }
}
function Xk(e, t, n, r, o) {
    const {reachedAny: s, removeOffset: i, constrain: l} = r;
    function a(w) {
        return w.concat().sort( (g, y) => he(g) - he(y))[0]
    }
    function c(w) {
        const g = e ? i(w) : l(w)
          , y = t.map( (h, v) => ({
            diff: u(h - g, 0),
            index: v
        })).sort( (h, v) => he(h.diff) - he(v.diff))
          , {index: f} = y[0];
        return {
            index: f,
            distance: g
        }
    }
    function u(w, g) {
        const y = [w, w + n, w - n];
        if (!e)
            return w;
        if (!g)
            return a(y);
        const f = y.filter(h => Xu(h) === g);
        return f.length ? a(f) : Ft(y) - n
    }
    function d(w, g) {
        const y = t[w] - o.get()
          , f = u(y, g);
        return {
            index: w,
            distance: f
        }
    }
    function m(w, g) {
        const y = o.get() + w
          , {index: f, distance: h} = c(y)
          , v = !e && s(y);
        if (!g || v)
            return {
                index: f,
                distance: w
            };
        const C = t[f] - h
          , b = w + u(C, 0);
        return {
            index: f,
            distance: b
        }
    }
    return {
        byDistance: m,
        byIndex: d,
        shortcut: u
    }
}
function Jk(e, t, n, r, o, s, i) {
    function l(d) {
        const m = d.distance
          , p = d.index !== t.get();
        s.add(m),
        m && (r.duration() ? e.start() : (e.update(),
        e.render(1),
        e.update())),
        p && (n.set(t.get()),
        t.set(d.index),
        i.emit("select"))
    }
    function a(d, m) {
        const p = o.byDistance(d, m);
        l(p)
    }
    function c(d, m) {
        const p = t.clone().set(d)
          , w = o.byIndex(p.get(), m);
        l(w)
    }
    return {
        distance: a,
        index: c
    }
}
function Zk(e, t, n, r, o, s, i, l) {
    const a = {
        passive: !0,
        capture: !0
    };
    let c = 0;
    function u(p) {
        if (!l)
            return;
        function w(g) {
            if (new Date().getTime() - c > 10)
                return;
            i.emit("slideFocusStart"),
            e.scrollLeft = 0;
            const h = n.findIndex(v => v.includes(g));
            Yu(h) && (o.useDuration(0),
            r.index(h, 0),
            i.emit("slideFocus"))
        }
        s.add(document, "keydown", d, !1),
        t.forEach( (g, y) => {
            s.add(g, "focus", f => {
                (Il(l) || l(p, f)) && w(y)
            }
            , a)
        }
        )
    }
    function d(p) {
        p.code === "Tab" && (c = new Date().getTime())
    }
    return {
        init: u
    }
}
function Vo(e) {
    let t = e;
    function n() {
        return t
    }
    function r(a) {
        t = i(a)
    }
    function o(a) {
        t += i(a)
    }
    function s(a) {
        t -= i(a)
    }
    function i(a) {
        return Yu(a) ? a : a.get()
    }
    return {
        get: n,
        set: r,
        add: o,
        subtract: s
    }
}
function jv(e, t) {
    const n = e.scroll === "x" ? i : l
      , r = t.style;
    let o = null
      , s = !1;
    function i(m) {
        return `translate3d(${m}px,0px,0px)`
    }
    function l(m) {
        return `translate3d(0px,${m}px,0px)`
    }
    function a(m) {
        if (s)
            return;
        const p = Mk(e.direction(m));
        p !== o && (r.transform = n(p),
        o = p)
    }
    function c(m) {
        s = !m
    }
    function u() {
        s || (r.transform = "",
        t.getAttribute("style") || t.removeAttribute("style"))
    }
    return {
        clear: u,
        to: a,
        toggleActive: c
    }
}
function eP(e, t, n, r, o, s, i, l, a) {
    const u = ks(o)
      , d = ks(o).reverse()
      , m = f().concat(h());
    function p(E, P) {
        return E.reduce( (j, A) => j - o[A], P)
    }
    function w(E, P) {
        return E.reduce( (j, A) => p(j, P) > 0 ? j.concat([A]) : j, [])
    }
    function g(E) {
        return s.map( (P, j) => ({
            start: P - r[j] + .5 + E,
            end: P + t - .5 + E
        }))
    }
    function y(E, P, j) {
        const A = g(P);
        return E.map(z => {
            const D = j ? 0 : -n
              , V = j ? n : 0
              , M = j ? "end" : "start"
              , H = A[z][M];
            return {
                index: z,
                loopPoint: H,
                slideLocation: Vo(-1),
                translate: jv(e, a[z]),
                target: () => l.get() > H ? D : V
            }
        }
        )
    }
    function f() {
        const E = i[0]
          , P = w(d, E);
        return y(P, n, !1)
    }
    function h() {
        const E = t - i[0] - 1
          , P = w(u, E);
        return y(P, -n, !0)
    }
    function v() {
        return m.every( ({index: E}) => {
            const P = u.filter(j => j !== E);
            return p(P, t) <= .1
        }
        )
    }
    function C() {
        m.forEach(E => {
            const {target: P, translate: j, slideLocation: A} = E
              , z = P();
            z !== A.get() && (j.to(z),
            A.set(z))
        }
        )
    }
    function b() {
        m.forEach(E => E.translate.clear())
    }
    return {
        canLoop: v,
        clear: b,
        loop: C,
        loopPoints: m
    }
}
function tP(e, t, n) {
    let r, o = !1;
    function s(a) {
        if (!n)
            return;
        function c(u) {
            for (const d of u)
                if (d.type === "childList") {
                    a.reInit(),
                    t.emit("slidesChanged");
                    break
                }
        }
        r = new MutationObserver(u => {
            o || (Il(n) || n(a, u)) && c(u)
        }
        ),
        r.observe(e, {
            childList: !0
        })
    }
    function i() {
        r && r.disconnect(),
        o = !0
    }
    return {
        init: s,
        destroy: i
    }
}
function nP(e, t, n, r) {
    const o = {};
    let s = null, i = null, l, a = !1;
    function c() {
        l = new IntersectionObserver(w => {
            a || (w.forEach(g => {
                const y = t.indexOf(g.target);
                o[y] = g
            }
            ),
            s = null,
            i = null,
            n.emit("slidesInView"))
        }
        ,{
            root: e.parentElement,
            threshold: r
        }),
        t.forEach(w => l.observe(w))
    }
    function u() {
        l && l.disconnect(),
        a = !0
    }
    function d(w) {
        return Ps(o).reduce( (g, y) => {
            const f = parseInt(y)
              , {isIntersecting: h} = o[f];
            return (w && h || !w && !h) && g.push(f),
            g
        }
        , [])
    }
    function m(w=!0) {
        if (w && s)
            return s;
        if (!w && i)
            return i;
        const g = d(w);
        return w && (s = g),
        w || (i = g),
        g
    }
    return {
        init: c,
        destroy: u,
        get: m
    }
}
function rP(e, t, n, r, o, s) {
    const {measureSize: i, startEdge: l, endEdge: a} = e
      , c = n[0] && o
      , u = w()
      , d = g()
      , m = n.map(i)
      , p = y();
    function w() {
        if (!c)
            return 0;
        const h = n[0];
        return he(t[l] - h[l])
    }
    function g() {
        if (!c)
            return 0;
        const h = s.getComputedStyle(Ft(r));
        return parseFloat(h.getPropertyValue(`margin-${a}`))
    }
    function y() {
        return n.map( (h, v, C) => {
            const b = !v
              , k = Ju(C, v);
            return b ? m[v] + u : k ? m[v] + d : C[v + 1][l] - h[l]
        }
        ).map(he)
    }
    return {
        slideSizes: m,
        slideSizesWithGaps: p,
        startGap: u,
        endGap: d
    }
}
function oP(e, t, n, r, o, s, i, l, a) {
    const {startEdge: c, endEdge: u, direction: d} = e
      , m = Yu(n);
    function p(f, h) {
        return ks(f).filter(v => v % h === 0).map(v => f.slice(v, v + h))
    }
    function w(f) {
        return f.length ? ks(f).reduce( (h, v, C) => {
            const b = Ft(h) || 0
              , k = b === 0
              , E = v === Fs(f)
              , P = o[c] - s[b][c]
              , j = o[c] - s[v][u]
              , A = !r && k ? d(i) : 0
              , z = !r && E ? d(l) : 0
              , D = he(j - z - (P + A));
            return C && D > t + a && h.push(v),
            E && h.push(f.length),
            h
        }
        , []).map( (h, v, C) => {
            const b = Math.max(C[v - 1] || 0);
            return f.slice(b, h)
        }
        ) : []
    }
    function g(f) {
        return m ? p(f, n) : w(f)
    }
    return {
        groupSlides: g
    }
}
function sP(e, t, n, r, o, s, i) {
    const {align: l, axis: a, direction: c, startIndex: u, loop: d, duration: m, dragFree: p, dragThreshold: w, inViewThreshold: g, slidesToScroll: y, skipSnaps: f, containScroll: h, watchResize: v, watchSlides: C, watchDrag: b, watchFocus: k} = s
      , E = 2
      , P = Bk()
      , j = P.measure(t)
      , A = n.map(P.measure)
      , z = zk(a, c)
      , D = z.measureSize(j)
      , V = $k(D)
      , M = Dk(l, D)
      , H = !d && !!h
      , $ = d || !!h
      , {slideSizes: W, slideSizesWithGaps: T, startGap: R, endGap: _} = rP(z, j, A, n, $, o)
      , U = oP(z, D, y, d, j, A, R, _, E)
      , {snaps: B, snapsAligned: G} = qk(z, M, j, A, U)
      , Q = -Ft(B) + Ft(T)
      , {snapsContained: se, scrollContainLimit: ve} = Hk(D, Q, G, h, E)
      , q = H ? se : G
      , {limit: ye} = Qk(Q, q, d)
      , Re = Rv(Fs(q), u, d)
      , Ce = Re.clone()
      , te = ks(n)
      , F = ({dragHandler: Et, scrollBody: To, scrollBounds: Ar, options: {loop: xn}}) => {
        xn || Ar.constrain(Et.pointerDown()),
        To.seek()
    }
      , Z = ({scrollBody: Et, translate: To, location: Ar, offsetLocation: xn, previousLocation: Sn, scrollLooper: Us, slideLooper: Cn, dragHandler: $l, animation: Ul, eventHandler: No, scrollBounds: Ws, options: {loop: Vs}}, Or) => {
        const kt = Et.settled()
          , Wl = !Ws.shouldConstrain()
          , K = Vs ? kt : kt && Wl
          , re = K && !$l.pointerDown();
        re && Ul.stop();
        const ie = Ar.get() * Or + Sn.get() * (1 - Or);
        xn.set(ie),
        Vs && (Us.loop(Et.direction()),
        Cn.loop()),
        To.to(xn.get()),
        re && No.emit("settle"),
        K || No.emit("scroll")
    }
      , ae = _k(r, o, () => F(Po), Et => Z(Po, Et))
      , ke = .68
      , $e = q[Re.get()]
      , rt = Vo($e)
      , ot = Vo($e)
      , Ue = Vo($e)
      , Vt = Vo($e)
      , Ct = Wk(rt, Ue, ot, Vt, m, ke)
      , jr = Xk(d, q, Q, ye, Vt)
      , bt = Jk(ae, Re, Ce, Ct, jr, Vt, i)
      , Bs = Gk(ye)
      , $s = Ts()
      , qe = nP(t, n, i, g)
      , {slideRegistry: rn} = Yk(H, h, q, ve, U, te)
      , Bl = Zk(e, n, rn, bt, Ct, $s, i, k)
      , Po = {
        ownerDocument: r,
        ownerWindow: o,
        eventHandler: i,
        containerRect: j,
        slideRects: A,
        animation: ae,
        axis: z,
        dragHandler: Ik(z, e, r, o, Vt, Fk(z, o), rt, ae, bt, Ct, jr, Re, i, V, p, w, f, ke, b),
        eventStore: $s,
        percentOfView: V,
        index: Re,
        indexPrevious: Ce,
        limit: ye,
        location: rt,
        offsetLocation: Ue,
        previousLocation: ot,
        options: s,
        resizeHandler: Uk(t, i, o, n, z, v, P),
        scrollBody: Ct,
        scrollBounds: Vk(ye, Ue, Vt, Ct, V),
        scrollLooper: Kk(Q, ye, Ue, [rt, Ue, ot, Vt]),
        scrollProgress: Bs,
        scrollSnapList: q.map(Bs.get),
        scrollSnaps: q,
        scrollTarget: jr,
        scrollTo: bt,
        slideLooper: eP(z, D, Q, W, T, B, q, Ue, n),
        slideFocus: Bl,
        slidesHandler: tP(t, i, C),
        slidesInView: qe,
        slideIndexes: te,
        slideRegistry: rn,
        slidesToScroll: U,
        target: Vt,
        translate: jv(z, t)
    };
    return Po
}
function iP() {
    let e = {}, t;
    function n(c) {
        t = c
    }
    function r(c) {
        return e[c] || []
    }
    function o(c) {
        return r(c).forEach(u => u(t, c)),
        a
    }
    function s(c, u) {
        return e[c] = r(c).concat([u]),
        a
    }
    function i(c, u) {
        return e[c] = r(c).filter(d => d !== u),
        a
    }
    function l() {
        e = {}
    }
    const a = {
        init: n,
        emit: o,
        off: i,
        on: s,
        clear: l
    };
    return a
}
const lP = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0,
    watchFocus: !0
};
function aP(e) {
    function t(s, i) {
        return Nv(s, i || {})
    }
    function n(s) {
        const i = s.breakpoints || {}
          , l = Ps(i).filter(a => e.matchMedia(a).matches).map(a => i[a]).reduce( (a, c) => t(a, c), {});
        return t(s, l)
    }
    function r(s) {
        return s.map(i => Ps(i.breakpoints || {})).reduce( (i, l) => i.concat(l), []).map(e.matchMedia)
    }
    return {
        mergeOptions: t,
        optionsAtMedia: n,
        optionsMediaQueries: r
    }
}
function cP(e) {
    let t = [];
    function n(s, i) {
        return t = i.filter( ({options: l}) => e.optionsAtMedia(l).active !== !1),
        t.forEach(l => l.init(s, e)),
        i.reduce( (l, a) => Object.assign(l, {
            [a.name]: a
        }), {})
    }
    function r() {
        t = t.filter(s => s.destroy())
    }
    return {
        init: n,
        destroy: r
    }
}
function cl(e, t, n) {
    const r = e.ownerDocument
      , o = r.defaultView
      , s = aP(o)
      , i = cP(s)
      , l = Ts()
      , a = iP()
      , {mergeOptions: c, optionsAtMedia: u, optionsMediaQueries: d} = s
      , {on: m, off: p, emit: w} = a
      , g = z;
    let y = !1, f, h = c(lP, cl.globalOptions), v = c(h), C = [], b, k, E;
    function P() {
        const {container: te, slides: F} = v;
        k = (Mc(te) ? e.querySelector(te) : te) || e.children[0];
        const ae = Mc(F) ? k.querySelectorAll(F) : F;
        E = [].slice.call(ae || k.children)
    }
    function j(te) {
        const F = sP(e, k, E, r, o, te, a);
        if (te.loop && !F.slideLooper.canLoop()) {
            const Z = Object.assign({}, te, {
                loop: !1
            });
            return j(Z)
        }
        return F
    }
    function A(te, F) {
        y || (h = c(h, te),
        v = u(h),
        C = F || C,
        P(),
        f = j(v),
        d([h, ...C.map( ({options: Z}) => Z)]).forEach(Z => l.add(Z, "change", z)),
        v.active && (f.translate.to(f.location.get()),
        f.animation.init(),
        f.slidesInView.init(),
        f.slideFocus.init(Ce),
        f.eventHandler.init(Ce),
        f.resizeHandler.init(Ce),
        f.slidesHandler.init(Ce),
        f.options.loop && f.slideLooper.loop(),
        k.offsetParent && E.length && f.dragHandler.init(Ce),
        b = i.init(Ce, C)))
    }
    function z(te, F) {
        const Z = U();
        D(),
        A(c({
            startIndex: Z
        }, te), F),
        a.emit("reInit")
    }
    function D() {
        f.dragHandler.destroy(),
        f.eventStore.clear(),
        f.translate.clear(),
        f.slideLooper.clear(),
        f.resizeHandler.destroy(),
        f.slidesHandler.destroy(),
        f.slidesInView.destroy(),
        f.animation.destroy(),
        i.destroy(),
        l.clear()
    }
    function V() {
        y || (y = !0,
        l.clear(),
        D(),
        a.emit("destroy"),
        a.clear())
    }
    function M(te, F, Z) {
        !v.active || y || (f.scrollBody.useBaseFriction().useDuration(F === !0 ? 0 : v.duration),
        f.scrollTo.index(te, Z || 0))
    }
    function H(te) {
        const F = f.index.add(1).get();
        M(F, te, -1)
    }
    function $(te) {
        const F = f.index.add(-1).get();
        M(F, te, 1)
    }
    function W() {
        return f.index.add(1).get() !== U()
    }
    function T() {
        return f.index.add(-1).get() !== U()
    }
    function R() {
        return f.scrollSnapList
    }
    function _() {
        return f.scrollProgress.get(f.offsetLocation.get())
    }
    function U() {
        return f.index.get()
    }
    function B() {
        return f.indexPrevious.get()
    }
    function G() {
        return f.slidesInView.get()
    }
    function Q() {
        return f.slidesInView.get(!1)
    }
    function se() {
        return b
    }
    function ve() {
        return f
    }
    function q() {
        return e
    }
    function ye() {
        return k
    }
    function Re() {
        return E
    }
    const Ce = {
        canScrollNext: W,
        canScrollPrev: T,
        containerNode: ye,
        internalEngine: ve,
        destroy: V,
        off: p,
        on: m,
        emit: w,
        plugins: se,
        previousScrollSnap: B,
        reInit: g,
        rootNode: q,
        scrollNext: H,
        scrollPrev: $,
        scrollProgress: _,
        scrollSnapList: R,
        scrollTo: M,
        selectedScrollSnap: U,
        slideNodes: Re,
        slidesInView: G,
        slidesNotInView: Q
    };
    return A(t, n),
    setTimeout( () => a.emit("init"), 0),
    Ce
}
cl.globalOptions = void 0;
function Zu(e={}, t=[]) {
    const n = S.useRef(e)
      , r = S.useRef(t)
      , [o,s] = S.useState()
      , [i,l] = S.useState()
      , a = S.useCallback( () => {
        o && o.reInit(n.current, r.current)
    }
    , [o]);
    return S.useEffect( () => {
        qu(n.current, e) || (n.current = e,
        a())
    }
    , [e, a]),
    S.useEffect( () => {
        Ok(r.current, t) || (r.current = t,
        a())
    }
    , [t, a]),
    S.useEffect( () => {
        if (Ak() && i) {
            cl.globalOptions = Zu.globalOptions;
            const c = cl(i, n.current, r.current);
            return s(c),
            () => c.destroy()
        } else
            s(void 0)
    }
    , [i, s]),
    [l, o]
}
Zu.globalOptions = void 0;
const Av = S.createContext(null);
function Fl() {
    const e = S.useContext(Av);
    if (!e)
        throw new Error("useCarousel must be used within a <Carousel />");
    return e
}
const Ov = S.forwardRef( ({orientation: e="horizontal", opts: t, setApi: n, plugins: r, className: o, children: s, ...i}, l) => {
    const [a,c] = Zu({
        ...t,
        axis: e === "horizontal" ? "x" : "y"
    }, r)
      , [u,d] = S.useState(!1)
      , [m,p] = S.useState(!1)
      , w = S.useCallback(h => {
        h && (d(h.canScrollPrev()),
        p(h.canScrollNext()))
    }
    , [])
      , g = S.useCallback( () => {
        c == null || c.scrollPrev()
    }
    , [c])
      , y = S.useCallback( () => {
        c == null || c.scrollNext()
    }
    , [c])
      , f = S.useCallback(h => {
        h.key === "ArrowLeft" ? (h.preventDefault(),
        g()) : h.key === "ArrowRight" && (h.preventDefault(),
        y())
    }
    , [g, y]);
    return S.useEffect( () => {
        !c || !n || n(c)
    }
    , [c, n]),
    S.useEffect( () => {
        if (c)
            return w(c),
            c.on("reInit", w),
            c.on("select", w),
            () => {
                c == null || c.off("select", w)
            }
    }
    , [c, w]),
    x.jsx(Av.Provider, {
        value: {
            carouselRef: a,
            api: c,
            opts: t,
            orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
            scrollPrev: g,
            scrollNext: y,
            canScrollPrev: u,
            canScrollNext: m
        },
        children: x.jsx("div", {
            ref: l,
            onKeyDownCapture: f,
            className: ht("relative", o),
            role: "region",
            "aria-roledescription": "carousel",
            ...i,
            children: s
        })
    })
}
);
Ov.displayName = "Carousel";
const Lv = S.forwardRef( ({className: e, ...t}, n) => {
    const {carouselRef: r, orientation: o} = Fl();
    return x.jsx("div", {
        ref: r,
        className: "overflow-hidden",
        children: x.jsx("div", {
            ref: n,
            className: ht("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
            ...t
        })
    })
}
);
Lv.displayName = "CarouselContent";
const Mv = S.forwardRef( ({className: e, ...t}, n) => {
    const {orientation: r} = Fl();
    return x.jsx("div", {
        ref: n,
        role: "group",
        "aria-roledescription": "slide",
        className: ht("min-w-0 shrink-0 grow-0 basis-full", r === "horizontal" ? "pl-4" : "pt-4", e),
        ...t
    })
}
);
Mv.displayName = "CarouselItem";
const Dv = S.forwardRef( ({className: e, variant: t="outline", size: n="icon", ...r}, o) => {
    const {orientation: s, scrollPrev: i, canScrollPrev: l} = Fl();
    return x.jsxs(zl, {
        ref: o,
        variant: t,
        size: n,
        className: ht("absolute h-8 w-8 rounded-full", s === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", e),
        disabled: !l,
        onClick: i,
        ...r,
        children: [x.jsx(wg, {
            className: "h-4 w-4"
        }), x.jsx("span", {
            className: "sr-only",
            children: "Previous slide"
        })]
    })
}
);
Dv.displayName = "CarouselPrevious";
const _v = S.forwardRef( ({className: e, variant: t="outline", size: n="icon", ...r}, o) => {
    const {orientation: s, scrollNext: i, canScrollNext: l} = Fl();
    return x.jsxs(zl, {
        ref: o,
        variant: t,
        size: n,
        className: ht("absolute h-8 w-8 rounded-full", s === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", e),
        disabled: !l,
        onClick: i,
        ...r,
        children: [x.jsx(dx, {
            className: "h-4 w-4"
        }), x.jsx("span", {
            className: "sr-only",
            children: "Next slide"
        })]
    })
}
);
_v.displayName = "CarouselNext";
const uP = "/assets/jibbitz-baby-yoda-B69MeBti.png"
  , dP = "/assets/jibbitz-hello-kitty-gt7JrIql.png"
  , fP = "/assets/jibbitz-corrente-perola-CXg6r5Fy.png"
  , pP = "/assets/jibbitz-bob-esponja-gary-Cj2mjx8V.png"
  , hP = "/assets/jibbitz-coracao-rosa-E3Ry1q_S.png"
  , mP = "/assets/jibbitz-stitch-fofo-D8fwAGRY.png"
  , gP = "/assets/jibbitz-bob-esponja-chocado-DViXiAUP.png"
  , vP = "/assets/jibbitz-patinha-DtUEpW8I.png"
  , yP = [{
    id: 1,
    name: "Jibbitz™ Baby Yoda",
    image: uP
}, {
    id: 2,
    name: "Jibbitz™ Hello Kitty",
    image: dP
}, {
    id: 3,
    name: "Jibbitz™ Corrente com Pérola",
    image: fP
}, {
    id: 4,
    name: "Jibbitz™ Bob Esponja Gary",
    image: pP
}, {
    id: 5,
    name: "Jibbitz™ Coração Rosa",
    image: hP
}, {
    id: 6,
    name: "Jibbitz™ Stitch Fofo",
    image: mP
}, {
    id: 7,
    name: "Jibbitz™ Bob Esponja Chocado",
    image: gP
}, {
    id: 8,
    name: "Jibbitz™ Patinha",
    image: vP
}]
  , wP = () => {
    const {slug: e} = wb()
      , t = bv()
      , n = Tk(e || "")
      , [r,o] = S.useState(0)
      , [s,i] = S.useState(null)
      , [l,a] = S.useState([])
      , [c,u] = S.useState()
      , [d,m] = S.useState("");
    if (S.useEffect( () => {
        c && c.on("select", () => {
            o(c.selectedScrollSnap())
        }
        )
    }
    , [c]),
    S.useEffect( () => {
        e && (async () => {
            try {
                const v = (await (await fetch("/product-links.json")).json()).products.find(C => C.slug === e);
                v && m(v.link)
            } catch (f) {
                console.error("Erro ao carregar links dos produtos:", f)
            }
        }
        )()
    }
    , [e]),
    !n)
        return x.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [x.jsx(Oc, {}), x.jsxs("main", {
                className: "container mx-auto px-4 py-12 text-center",
                children: [x.jsx("h1", {
                    className: "text-2xl font-bold mb-4",
                    children: "Produto não encontrado"
                }), x.jsx(ji, {
                    to: "/",
                    className: "text-primary hover:underline",
                    children: "Voltar para a página inicial"
                })]
            }), x.jsx(Lc, {})]
        });
    const p = Array.from({
        length: 22
    }, (y, f) => f + 23)
      , w = y => {
        a(f => f.includes(y) ? f.filter(h => h !== y) : f.length >= 3 ? f : [...f, y])
    }
      , g = l.length === 3 && s !== null;
    return x.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [x.jsx(Oc, {}), x.jsxs("main", {
            className: "container mx-auto px-4 py-6",
            children: [x.jsxs("button", {
                onClick: () => t("/"),
                className: "mb-4 flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors",
                children: [x.jsx(wg, {
                    className: "h-5 w-5"
                }), "Voltar"]
            }), x.jsxs("div", {
                className: "mb-4 flex items-center gap-2 text-sm text-muted-foreground",
                children: [x.jsx(ji, {
                    to: "/",
                    className: "hover:text-foreground transition-colors",
                    children: x.jsx(xg, {
                        className: "h-4 w-4"
                    })
                }), x.jsx("span", {
                    children: "›"
                }), x.jsx(ji, {
                    to: "/",
                    className: "hover:text-foreground transition-colors",
                    children: "PROMOÇÃO"
                }), x.jsx("span", {
                    children: "›"
                }), x.jsx("span", {
                    className: "text-foreground",
                    children: n.model
                })]
            }), x.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12",
                children: [x.jsxs("div", {
                    className: "space-y-4",
                    children: [x.jsxs(Ov, {
                        className: "w-full",
                        setApi: u,
                        children: [x.jsx(Lv, {
                            children: n.images.map( (y, f) => x.jsx(Mv, {
                                children: x.jsx("div", {
                                    className: "bg-card border border-border",
                                    children: x.jsx("img", {
                                        src: y,
                                        alt: `${n.name} - imagem ${f + 1}`,
                                        className: "w-full aspect-square object-contain p-8"
                                    })
                                })
                            }, f))
                        }), n.images.length > 1 && x.jsxs(x.Fragment, {
                            children: [x.jsx(Dv, {
                                className: "left-2 hover:bg-black hover:text-white hover:border-black"
                            }), x.jsx(_v, {
                                className: "right-2 hover:bg-black hover:text-white hover:border-black"
                            })]
                        })]
                    }), n.images.length > 1 && x.jsx("div", {
                        className: `grid gap-2 ${n.images.length > 5 ? "grid-cols-6" : "grid-cols-5"}`,
                        children: n.images.map( (y, f) => x.jsx("button", {
                            onClick: () => {
                                o(f),
                                c == null || c.scrollTo(f)
                            }
                            ,
                            className: `border-2 transition-colors ${r === f ? "border-black" : "border-border"}`,
                            children: x.jsx("img", {
                                src: y,
                                alt: `${n.name} - imagem ${f + 1}`,
                                className: "w-full aspect-square object-contain p-2"
                            })
                        }, f))
                    })]
                }), x.jsxs("div", {
                    className: "space-y-6",
                    children: [x.jsxs("div", {
                        children: [x.jsx("h1", {
                            className: "text-2xl font-bold mb-2",
                            children: n.name
                        }), x.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: n.model
                        })]
                    }), x.jsxs("div", {
                        className: "space-y-1",
                        children: [x.jsx("p", {
                            className: "text-sm text-muted-foreground/70 line-through",
                            children: n.oldPrice
                        }), x.jsx("p", {
                            className: "text-3xl font-bold text-primary",
                            children: n.currentPrice === "R$ 0,00" || n.currentPrice === "R$0,00" ? "GRÁTIS" : n.currentPrice
                        })]
                    }), x.jsxs("div", {
                        className: "bg-muted/50 border border-border rounded-lg p-4 shadow-sm space-y-2",
                        children: [x.jsx("p", {
                            className: "text-sm font-medium text-center text-foreground",
                            children: "Para completar seu pedido, escolha 3 Jibbitz™ que você mais gostar e selecione seu tamanho!"
                        }), x.jsx("p", {
                            className: "text-sm text-center text-muted-foreground",
                            children: "O Crocs é GRÁTIS! Você pagará apenas R$27,80 pelos 3 Jibbitz™."
                        })]
                    }), x.jsxs("div", {
                        className: "space-y-4 border-t pt-6",
                        children: [x.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [x.jsx("h2", {
                                className: "text-lg font-semibold",
                                children: "Personalize com Jibbitz™ Charms"
                            }), x.jsxs("span", {
                                className: "text-sm font-medium",
                                style: {
                                    color: "#368617"
                                },
                                children: [l.length, "/3 selecionados"]
                            })]
                        }), x.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Clique em um Jibbitz™ para visualizá-lo e adicione ao carrinho para personalizar suas Crocs. Você pode escolher até 3 Jibbitz™ por apenas R$27,80 no total (para todas as Crocs)."
                        }), x.jsx("div", {
                            className: "grid grid-cols-4 gap-4",
                            children: yP.map( (y, f) => {
                                const h = l.includes(y.id)
                                  , v = l.length >= 3 && !h;
                                return x.jsxs("button", {
                                    onClick: () => w(y.id),
                                    disabled: v,
                                    className: `flex flex-col gap-2 text-left transition-all ${v ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`,
                                    children: [x.jsxs("div", {
                                        className: `relative aspect-square bg-white rounded-lg flex items-center justify-center border-2 overflow-hidden transition-colors ${h ? "border-[#4caf50]" : v ? "border-gray-300" : "border-border hover:border-gray-400"}`,
                                        children: [y.image ? x.jsx("img", {
                                            src: y.image,
                                            alt: y.name,
                                            className: "w-full h-full object-contain p-2"
                                        }) : x.jsxs("span", {
                                            className: "text-muted-foreground text-xs",
                                            children: ["Jibbitz ", f + 1]
                                        }), h ? x.jsx("div", {
                                            className: "absolute top-0.5 right-0.5 bg-red-500 rounded-full shadow-md",
                                            style: {
                                                padding: "0.175rem"
                                            },
                                            children: x.jsx(Sg, {
                                                className: "h-4 w-4 text-white stroke-[2.5]"
                                            })
                                        }) : !v && x.jsx("div", {
                                            className: "absolute top-0.5 right-0.5 bg-black rounded-full shadow-md",
                                            style: {
                                                padding: "0.175rem"
                                            },
                                            children: x.jsx(Wo, {
                                                className: "h-4 w-4 text-white stroke-[2.5]"
                                            })
                                        })]
                                    }), x.jsxs("div", {
                                        className: "flex flex-col gap-0.5",
                                        children: [x.jsx("p", {
                                            className: "text-sm font-medium break-words",
                                            children: y.name
                                        }), x.jsx("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Incluído"
                                        })]
                                    })]
                                }, y.id)
                            }
                            )
                        }), x.jsx("div", {
                            className: "bg-muted/30 border border-border rounded-lg p-4 mt-4",
                            children: x.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [x.jsxs("span", {
                                    className: "text-sm font-semibold",
                                    style: {
                                        color: "#368617"
                                    },
                                    children: [l.length, "/3 Jibbitz™ selecionados"]
                                }), x.jsxs("span", {
                                    className: "text-sm font-semibold text-foreground",
                                    children: ["Total: R$", l.length > 0 ? "27,80" : "0,00"]
                                })]
                            })
                        })]
                    }), x.jsxs("div", {
                        className: "space-y-4 border-t pt-6",
                        children: [x.jsx("h2", {
                            className: "text-lg font-semibold",
                            children: "Selecione o tamanho:"
                        }), x.jsx("div", {
                            className: "grid grid-cols-4 gap-2",
                            children: p.map(y => x.jsxs("button", {
                                onClick: () => i(y),
                                style: {
                                    borderColor: "#bbb",
                                    position: "relative"
                                },
                                className: `py-3 px-3 border border-[#bbb] transition-colors font-medium ${s === y ? "bg-black text-white" : "bg-background hover:border-primary"}`,
                                children: [x.jsx("span", {
                                    style: {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        right: 0,
                                        width: 0,
                                        height: 0,
                                        borderWidth: "0 12px 12px 0",
                                        borderStyle: "solid",
                                        borderColor: "#bbb #bbb rgba(0, 0, 0, 0) transparent"
                                    }
                                }), y]
                            }, y))
                        })]
                    }), x.jsx(zl, {
                        size: "lg",
                        disabled: !g,
                        onClick: () => {
                            g && d && (window.location.href = d)
                        }
                        ,
                        className: "w-full bg-button hover:bg-button/90 text-button-foreground font-bold text-base h-14 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: "RESGATAR"
                    }), !g && x.jsxs("p", {
                        className: "text-sm text-center text-muted-foreground",
                        children: [l.length !== 3 && "Selecione 3 Jibbitz™", l.length === 3 && !s && "Selecione um tamanho"]
                    })]
                })]
            }), x.jsxs("div", {
                className: "mt-12 border-t pt-8",
                children: [x.jsx("h2", {
                    className: "text-xl font-bold mb-4",
                    children: "Descrição do Produto"
                }), x.jsxs("div", {
                    className: "space-y-4",
                    children: [x.jsxs("p", {
                        children: [n.name, " é um modelo icônico da Crocs, combinando conforto e estilo em um design versátil. Fabricada com o exclusivo material Croslite™, oferece leveza e conforto durante todo o dia."]
                    }), x.jsxs("div", {
                        children: [x.jsx("h3", {
                            className: "font-bold mb-2",
                            children: "Características:"
                        }), x.jsxs("ul", {
                            className: "list-disc pl-5 space-y-1",
                            children: [x.jsx("li", {
                                children: "Material Croslite™ para conforto e durabilidade"
                            }), x.jsx("li", {
                                children: "Design com tira no calcanhar para maior segurança"
                            }), x.jsx("li", {
                                children: "Ventilação para manter os pés frescos e permitir que água e detritos saiam"
                            }), x.jsx("li", {
                                children: "Leve, fácil de limpar e de secagem rápida"
                            }), x.jsx("li", {
                                children: "Suporta até 26 Jibbitz™ para personalização"
                            }), x.jsx("li", {
                                children: "Sola com aderência para maior estabilidade"
                            })]
                        })]
                    }), x.jsxs("div", {
                        children: [x.jsx("h3", {
                            className: "font-bold mb-2",
                            children: "Especificações:"
                        }), x.jsxs("ul", {
                            className: "list-disc pl-5 space-y-1",
                            children: [x.jsx("li", {
                                children: "Material: Croslite™ (espuma patenteada pela Crocs)"
                            }), x.jsx("li", {
                                children: "Altura do salto: Aproximadamente 1,5 cm"
                            }), x.jsx("li", {
                                children: "Peso: Super leve, aproximadamente 200g por par (varia conforme o tamanho)"
                            }), x.jsx("li", {
                                children: "Origem: Importado"
                            }), x.jsx("li", {
                                children: "Indicado para: Uso casual, dia a dia, praia, piscina"
                            })]
                        })]
                    }), x.jsx("p", {
                        children: "As Crocs são perfeitas para quem busca conforto sem abrir mão do estilo. Seu design versátil permite uso em diversas ocasiões, desde um passeio casual até momentos de lazer na praia ou piscina."
                    }), x.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Este produto é um brinde exclusivo da Crocs. Você pagará apenas o frete. Aproveite esta oportunidade única!"
                    })]
                })]
            })]
        }), x.jsx(Lc, {})]
    })
}
  , xP = () => {
    const e = ko();
    return S.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    x.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: x.jsxs("div", {
            className: "text-center",
            children: [x.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), x.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), x.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , SP = new UC
  , CP = () => x.jsx(VC, {
    client: SP,
    children: x.jsxs(yC, {
        children: [x.jsx(t1, {}), x.jsx(L1, {}), x.jsxs($b, {
            children: [x.jsx(Hb, {}), x.jsxs(Mb, {
                children: [x.jsx(Ri, {
                    path: "/",
                    element: x.jsx(Nk, {})
                }), x.jsx(Ri, {
                    path: "/produto/:slug",
                    element: x.jsx(wP, {})
                }), x.jsx(Ri, {
                    path: "*",
                    element: x.jsx(xP, {})
                })]
            })]
        })]
    })
});
Um(document.getElementById("root")).render(x.jsx(CP, {}));
