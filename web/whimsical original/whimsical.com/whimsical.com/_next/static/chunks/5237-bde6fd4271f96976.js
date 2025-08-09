(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5237], {
        6662: function(e) {
            e.exports = function() {
                function _extends() {
                    return (_extends = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function _arrayLikeToArray(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                    return n
                }
                var e = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

                function urlToId(e) {
                    return ("image-" + e.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/, "-$1")
                }
                var t = [
                        ["width", "w"],
                        ["height", "h"],
                        ["format", "fm"],
                        ["download", "dl"],
                        ["blur", "blur"],
                        ["sharpen", "sharp"],
                        ["invert", "invert"],
                        ["orientation", "or"],
                        ["minHeight", "min-h"],
                        ["maxHeight", "max-h"],
                        ["minWidth", "min-w"],
                        ["maxWidth", "max-w"],
                        ["quality", "q"],
                        ["fit", "fit"],
                        ["crop", "crop"],
                        ["saturation", "sat"],
                        ["auto", "auto"],
                        ["dpr", "dpr"],
                        ["pad", "pad"]
                    ],
                    r = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
                    n = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
                    i = ["format"],
                    o = function() {
                        function ImageUrlBuilder(e, t) {
                            this.options = void 0, this.options = e ? _extends({}, e.options || {}, t || {}) : _extends({}, t || {})
                        }
                        var o = ImageUrlBuilder.prototype;
                        return o.withOptions = function(e) {
                            var r = e.baseUrl || this.options.baseUrl,
                                n = {
                                    baseUrl: r
                                };
                            for (var i in e) e.hasOwnProperty(i) && (n[function(e) {
                                for (var r, n = function(e, t) {
                                        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (r) return (r = r.call(e)).next.bind(r);
                                        if (Array.isArray(e) || (r = function(e, t) {
                                                if (e) {
                                                    if ("string" == typeof e) return _arrayLikeToArray(e, t);
                                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                                    if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _arrayLikeToArray(e, t)
                                                }
                                            }(e))) {
                                            r && (e = r);
                                            var n = 0;
                                            return function() {
                                                return n >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[n++]
                                                }
                                            }
                                        }
                                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }(t); !(r = n()).done;) {
                                    var i = r.value,
                                        o = i[0],
                                        s = i[1];
                                    if (e === o || e === s) return o
                                }
                                return e
                            }(i)] = e[i]);
                            return new ImageUrlBuilder(this, _extends({
                                baseUrl: r
                            }, n))
                        }, o.image = function(e) {
                            return this.withOptions({
                                source: e
                            })
                        }, o.dataset = function(e) {
                            return this.withOptions({
                                dataset: e
                            })
                        }, o.projectId = function(e) {
                            return this.withOptions({
                                projectId: e
                            })
                        }, o.bg = function(e) {
                            return this.withOptions({
                                bg: e
                            })
                        }, o.dpr = function(e) {
                            return this.withOptions(e && 1 !== e ? {
                                dpr: e
                            } : {})
                        }, o.width = function(e) {
                            return this.withOptions({
                                width: e
                            })
                        }, o.height = function(e) {
                            return this.withOptions({
                                height: e
                            })
                        }, o.focalPoint = function(e, t) {
                            return this.withOptions({
                                focalPoint: {
                                    x: e,
                                    y: t
                                }
                            })
                        }, o.maxWidth = function(e) {
                            return this.withOptions({
                                maxWidth: e
                            })
                        }, o.minWidth = function(e) {
                            return this.withOptions({
                                minWidth: e
                            })
                        }, o.maxHeight = function(e) {
                            return this.withOptions({
                                maxHeight: e
                            })
                        }, o.minHeight = function(e) {
                            return this.withOptions({
                                minHeight: e
                            })
                        }, o.size = function(e, t) {
                            return this.withOptions({
                                width: e,
                                height: t
                            })
                        }, o.blur = function(e) {
                            return this.withOptions({
                                blur: e
                            })
                        }, o.sharpen = function(e) {
                            return this.withOptions({
                                sharpen: e
                            })
                        }, o.rect = function(e, t, r, n) {
                            return this.withOptions({
                                rect: {
                                    left: e,
                                    top: t,
                                    width: r,
                                    height: n
                                }
                            })
                        }, o.format = function(e) {
                            return this.withOptions({
                                format: e
                            })
                        }, o.invert = function(e) {
                            return this.withOptions({
                                invert: e
                            })
                        }, o.orientation = function(e) {
                            return this.withOptions({
                                orientation: e
                            })
                        }, o.quality = function(e) {
                            return this.withOptions({
                                quality: e
                            })
                        }, o.forceDownload = function(e) {
                            return this.withOptions({
                                download: e
                            })
                        }, o.flipHorizontal = function() {
                            return this.withOptions({
                                flipHorizontal: !0
                            })
                        }, o.flipVertical = function() {
                            return this.withOptions({
                                flipVertical: !0
                            })
                        }, o.ignoreImageParams = function() {
                            return this.withOptions({
                                ignoreImageParams: !0
                            })
                        }, o.fit = function(e) {
                            if (-1 === r.indexOf(e)) throw Error('Invalid fit mode "' + e + '"');
                            return this.withOptions({
                                fit: e
                            })
                        }, o.crop = function(e) {
                            if (-1 === n.indexOf(e)) throw Error('Invalid crop mode "' + e + '"');
                            return this.withOptions({
                                crop: e
                            })
                        }, o.saturation = function(e) {
                            return this.withOptions({
                                saturation: e
                            })
                        }, o.auto = function(e) {
                            if (-1 === i.indexOf(e)) throw Error('Invalid auto mode "' + e + '"');
                            return this.withOptions({
                                auto: e
                            })
                        }, o.pad = function(e) {
                            return this.withOptions({
                                pad: e
                            })
                        }, o.url = function() {
                            return function(r) {
                                var n = _extends({}, r || {}),
                                    i = n.source;
                                delete n.source;
                                var o = function(e) {
                                    var t;
                                    if (!e) return null;
                                    if ("string" == typeof e && /^https?:\/\//.test("" + e)) t = {
                                        asset: {
                                            _ref: urlToId(e)
                                        }
                                    };
                                    else if ("string" == typeof e) t = {
                                        asset: {
                                            _ref: e
                                        }
                                    };
                                    else if (e && "string" == typeof e._ref) t = {
                                        asset: e
                                    };
                                    else if (e && "string" == typeof e._id) t = {
                                        asset: {
                                            _ref: e._id || ""
                                        }
                                    };
                                    else if (e && e.asset && "string" == typeof e.asset.url) t = {
                                        asset: {
                                            _ref: urlToId(e.asset.url)
                                        }
                                    };
                                    else {
                                        if ("object" != typeof e.asset) return null;
                                        t = _extends({}, e)
                                    }
                                    return e.crop && (t.crop = e.crop), e.hotspot && (t.hotspot = e.hotspot),
                                        function(e) {
                                            if (e.crop && e.hotspot) return e;
                                            var t = _extends({}, e);
                                            return t.crop || (t.crop = {
                                                left: 0,
                                                top: 0,
                                                bottom: 0,
                                                right: 0
                                            }), t.hotspot || (t.hotspot = {
                                                x: .5,
                                                y: .5,
                                                height: 1,
                                                width: 1
                                            }), t
                                        }(t)
                                }(i);
                                if (!o) throw Error("Unable to resolve image URL from source (" + JSON.stringify(i) + ")");
                                var s = function(t) {
                                        var r = t.split("-"),
                                            n = r[1],
                                            i = r[2],
                                            o = r[3];
                                        if (!n || !i || !o) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + e + '".');
                                        var s = i.split("x"),
                                            a = s[0],
                                            u = s[1],
                                            c = +a,
                                            l = +u;
                                        if (!(isFinite(c) && isFinite(l))) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + e + '".');
                                        return {
                                            id: n,
                                            width: c,
                                            height: l,
                                            format: o
                                        }
                                    }(o.asset._ref || o.asset._id || ""),
                                    a = Math.round(o.crop.left * s.width),
                                    u = Math.round(o.crop.top * s.height),
                                    c = {
                                        left: a,
                                        top: u,
                                        width: Math.round(s.width - o.crop.right * s.width - a),
                                        height: Math.round(s.height - o.crop.bottom * s.height - u)
                                    },
                                    l = o.hotspot.height * s.height / 2,
                                    f = o.hotspot.width * s.width / 2,
                                    p = o.hotspot.x * s.width,
                                    h = o.hotspot.y * s.height;
                                return n.rect || n.focalPoint || n.ignoreImageParams || n.crop || (n = _extends({}, n, function(e, t) {
                                        var r, n = t.width,
                                            i = t.height;
                                        if (!(n && i)) return {
                                            width: n,
                                            height: i,
                                            rect: e.crop
                                        };
                                        var o = e.crop,
                                            s = e.hotspot,
                                            a = n / i;
                                        if (o.width / o.height > a) {
                                            var u = Math.round(o.height),
                                                c = Math.round(u * a),
                                                l = Math.max(0, Math.round(o.top)),
                                                f = Math.max(0, Math.round(Math.round((s.right - s.left) / 2 + s.left) - c / 2));
                                            f < o.left ? f = o.left : f + c > o.left + o.width && (f = o.left + o.width - c), r = {
                                                left: f,
                                                top: l,
                                                width: c,
                                                height: u
                                            }
                                        } else {
                                            var p = o.width,
                                                h = Math.round(p / a),
                                                d = Math.max(0, Math.round(o.left)),
                                                y = Math.max(0, Math.round(Math.round((s.bottom - s.top) / 2 + s.top) - h / 2));
                                            y < o.top ? y = o.top : y + h > o.top + o.height && (y = o.top + o.height - h), r = {
                                                left: d,
                                                top: y,
                                                width: p,
                                                height: h
                                            }
                                        }
                                        return {
                                            width: n,
                                            height: i,
                                            rect: r
                                        }
                                    }({
                                        crop: c,
                                        hotspot: {
                                            left: p - f,
                                            top: h - l,
                                            right: p + f,
                                            bottom: h + l
                                        }
                                    }, n))),
                                    function(e) {
                                        var r = (e.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
                                            n = e.asset.id + "-" + e.asset.width + "x" + e.asset.height + "." + e.asset.format,
                                            i = r + "/images/" + e.projectId + "/" + e.dataset + "/" + n,
                                            o = [];
                                        if (e.rect) {
                                            var s = e.rect,
                                                a = s.left,
                                                u = s.top,
                                                c = s.width,
                                                l = s.height;
                                            (0 !== a || 0 !== u || l !== e.asset.height || c !== e.asset.width) && o.push("rect=" + a + "," + u + "," + c + "," + l)
                                        }
                                        e.bg && o.push("bg=" + e.bg), e.focalPoint && (o.push("fp-x=" + e.focalPoint.x), o.push("fp-y=" + e.focalPoint.y));
                                        var f = [e.flipHorizontal && "h", e.flipVertical && "v"].filter(Boolean).join("");
                                        return (f && o.push("flip=" + f), t.forEach(function(t) {
                                            var r = t[0],
                                                n = t[1];
                                            void 0 !== e[r] ? o.push(n + "=" + encodeURIComponent(e[r])) : void 0 !== e[n] && o.push(n + "=" + encodeURIComponent(e[n]))
                                        }), 0 === o.length) ? i : i + "?" + o.join("&")
                                    }(_extends({}, n, {
                                        asset: s
                                    }))
                            }(this.options)
                        }, o.toString = function() {
                            return this.url()
                        }, ImageUrlBuilder
                    }();
                return function(e) {
                    if (e && "config" in e && "function" == typeof e.config) {
                        var t = e.config(),
                            r = t.apiHost,
                            n = t.projectId,
                            i = t.dataset;
                        return new o(null, {
                            baseUrl: (r || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                            projectId: n,
                            dataset: i
                        })
                    }
                    if (e && "clientConfig" in e && "object" == typeof e.clientConfig) {
                        var s = e.clientConfig,
                            a = s.apiHost,
                            u = s.projectId,
                            c = s.dataset;
                        return new o(null, {
                            baseUrl: (a || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                            projectId: u,
                            dataset: c
                        })
                    }
                    return new o(null, e)
                }
            }()
        },
        34699: function(e, t) {
            "use strict";
            t.byteLength = function(e) {
                var t = getLens(e),
                    r = t[0],
                    n = t[1];
                return (r + n) * 3 / 4 - n
            }, t.toByteArray = function(e) {
                var t, r, o = getLens(e),
                    s = o[0],
                    a = o[1],
                    u = new i((s + a) * 3 / 4 - a),
                    c = 0,
                    l = a > 0 ? s - 4 : s;
                for (r = 0; r < l; r += 4) t = n[e.charCodeAt(r)] << 18 | n[e.charCodeAt(r + 1)] << 12 | n[e.charCodeAt(r + 2)] << 6 | n[e.charCodeAt(r + 3)], u[c++] = t >> 16 & 255, u[c++] = t >> 8 & 255, u[c++] = 255 & t;
                return 2 === a && (t = n[e.charCodeAt(r)] << 2 | n[e.charCodeAt(r + 1)] >> 4, u[c++] = 255 & t), 1 === a && (t = n[e.charCodeAt(r)] << 10 | n[e.charCodeAt(r + 1)] << 4 | n[e.charCodeAt(r + 2)] >> 2, u[c++] = t >> 8 & 255, u[c++] = 255 & t), u
            }, t.fromByteArray = function(e) {
                for (var t, n = e.length, i = n % 3, o = [], s = 0, a = n - i; s < a; s += 16383) o.push(function(e, t, n) {
                    for (var i, o = [], s = t; s < n; s += 3) o.push(r[(i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2])) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                    return o.join("")
                }(e, s, s + 16383 > a ? a : s + 16383));
                return 1 === i ? o.push(r[(t = e[n - 1]) >> 2] + r[t << 4 & 63] + "==") : 2 === i && o.push(r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="), o.join("")
            };
            for (var r = [], n = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s) r[s] = o[s], n[o.charCodeAt(s)] = s;

            function getLens(e) {
                var t = e.length;
                if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                var r = e.indexOf("="); - 1 === r && (r = t);
                var n = r === t ? 0 : 4 - r % 4;
                return [r, n]
            }
            n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
        },
        67133: function(e, t, r) {
            "use strict";
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <https://feross.org>
             * @license  MIT
             */
            let n = r(34699),
                i = r(19087),
                o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

            function createBuffer(e) {
                if (e > 2147483647) throw RangeError('The value "' + e + '" is invalid for option "size"');
                let t = new Uint8Array(e);
                return Object.setPrototypeOf(t, Buffer.prototype), t
            }

            function Buffer(e, t, r) {
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
                    return allocUnsafe(e)
                }
                return from(e, t, r)
            }

            function from(e, t, r) {
                if ("string" == typeof e) return function(e, t) {
                    if (("string" != typeof t || "" === t) && (t = "utf8"), !Buffer.isEncoding(t)) throw TypeError("Unknown encoding: " + t);
                    let r = 0 | byteLength(e, t),
                        n = createBuffer(r),
                        i = n.write(e, t);
                    return i !== r && (n = n.slice(0, i)), n
                }(e, t);
                if (ArrayBuffer.isView(e)) return function(e) {
                    if (isInstance(e, Uint8Array)) {
                        let t = new Uint8Array(e);
                        return fromArrayBuffer(t.buffer, t.byteOffset, t.byteLength)
                    }
                    return fromArrayLike(e)
                }(e);
                if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) return fromArrayBuffer(e, t, r);
                if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
                let n = e.valueOf && e.valueOf();
                if (null != n && n !== e) return Buffer.from(n, t, r);
                let i = function(e) {
                    var t;
                    if (Buffer.isBuffer(e)) {
                        let t = 0 | checked(e.length),
                            r = createBuffer(t);
                        return 0 === r.length || e.copy(r, 0, 0, t), r
                    }
                    return void 0 !== e.length ? "number" != typeof e.length || (t = e.length) != t ? createBuffer(0) : fromArrayLike(e) : "Buffer" === e.type && Array.isArray(e.data) ? fromArrayLike(e.data) : void 0
                }(e);
                if (i) return i;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return Buffer.from(e[Symbol.toPrimitive]("string"), t, r);
                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
            }

            function assertSize(e) {
                if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
                if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
            }

            function allocUnsafe(e) {
                return assertSize(e), createBuffer(e < 0 ? 0 : 0 | checked(e))
            }

            function fromArrayLike(e) {
                let t = e.length < 0 ? 0 : 0 | checked(e.length),
                    r = createBuffer(t);
                for (let n = 0; n < t; n += 1) r[n] = 255 & e[n];
                return r
            }

            function fromArrayBuffer(e, t, r) {
                let n;
                if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
                if (e.byteLength < t + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                return Object.setPrototypeOf(n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), Buffer.prototype), n
            }

            function checked(e) {
                if (e >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                return 0 | e
            }

            function byteLength(e, t) {
                if (Buffer.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) return e.byteLength;
                if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                let r = e.length,
                    n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                let i = !1;
                for (;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return utf8ToBytes(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return base64ToBytes(e).length;
                    default:
                        if (i) return n ? -1 : utf8ToBytes(e).length;
                        t = ("" + t).toLowerCase(), i = !0
                }
            }

            function slowToString(e, t, r) {
                let i = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (t >>>= 0))) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return function(e, t, r) {
                            let n = e.length;
                            (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                            let i = "";
                            for (let n = t; n < r; ++n) i += u[e[n]];
                            return i
                        }(this, t, r);
                    case "utf8":
                    case "utf-8":
                        return utf8Slice(this, t, r);
                    case "ascii":
                        return function(e, t, r) {
                            let n = "";
                            r = Math.min(e.length, r);
                            for (let i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                            return n
                        }(this, t, r);
                    case "latin1":
                    case "binary":
                        return function(e, t, r) {
                            let n = "";
                            r = Math.min(e.length, r);
                            for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                            return n
                        }(this, t, r);
                    case "base64":
                        var o, s;
                        return o = t, s = r, 0 === o && s === this.length ? n.fromByteArray(this) : n.fromByteArray(this.slice(o, s));
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return function(e, t, r) {
                            let n = e.slice(t, r),
                                i = "";
                            for (let e = 0; e < n.length - 1; e += 2) i += String.fromCharCode(n[e] + 256 * n[e + 1]);
                            return i
                        }(this, t, r);
                    default:
                        if (i) throw TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), i = !0
                }
            }

            function swap(e, t, r) {
                let n = e[t];
                e[t] = e[r], e[r] = n
            }

            function bidirectionalIndexOf(e, t, r, n, i) {
                var o;
                if (0 === e.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), (o = r = +r) != o && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (i) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof t && (t = Buffer.from(t, n)), Buffer.isBuffer(t)) return 0 === t.length ? -1 : arrayIndexOf(e, t, r, n, i);
                if ("number" == typeof t) return (t &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : arrayIndexOf(e, [t], r, n, i);
                throw TypeError("val must be string, number or Buffer")
            }

            function arrayIndexOf(e, t, r, n, i) {
                let o, s = 1,
                    a = e.length,
                    u = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    s = 2, a /= 2, u /= 2, r /= 2
                }

                function read(e, t) {
                    return 1 === s ? e[t] : e.readUInt16BE(t * s)
                }
                if (i) {
                    let n = -1;
                    for (o = r; o < a; o++)
                        if (read(e, o) === read(t, -1 === n ? 0 : o - n)) {
                            if (-1 === n && (n = o), o - n + 1 === u) return n * s
                        } else -1 !== n && (o -= o - n), n = -1
                } else
                    for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
                        let r = !0;
                        for (let n = 0; n < u; n++)
                            if (read(e, o + n) !== read(t, n)) {
                                r = !1;
                                break
                            }
                        if (r) return o
                    }
                return -1
            }

            function utf8Slice(e, t, r) {
                r = Math.min(e.length, r);
                let n = [],
                    i = t;
                for (; i < r;) {
                    let t = e[i],
                        o = null,
                        s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                    if (i + s <= r) {
                        let r, n, a, u;
                        switch (s) {
                            case 1:
                                t < 128 && (o = t);
                                break;
                            case 2:
                                (192 & (r = e[i + 1])) == 128 && (u = (31 & t) << 6 | 63 & r) > 127 && (o = u);
                                break;
                            case 3:
                                r = e[i + 1], n = e[i + 2], (192 & r) == 128 && (192 & n) == 128 && (u = (15 & t) << 12 | (63 & r) << 6 | 63 & n) > 2047 && (u < 55296 || u > 57343) && (o = u);
                                break;
                            case 4:
                                r = e[i + 1], n = e[i + 2], a = e[i + 3], (192 & r) == 128 && (192 & n) == 128 && (192 & a) == 128 && (u = (15 & t) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a) > 65535 && u < 1114112 && (o = u)
                        }
                    }
                    null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), n.push(o), i += s
                }
                return function(e) {
                    let t = e.length;
                    if (t <= 4096) return String.fromCharCode.apply(String, e);
                    let r = "",
                        n = 0;
                    for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += 4096));
                    return r
                }(n)
            }

            function checkOffset(e, t, r) {
                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                if (e + t > r) throw RangeError("Trying to access beyond buffer length")
            }

            function checkInt(e, t, r, n, i, o) {
                if (!Buffer.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < o) throw RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw RangeError("Index out of range")
            }

            function wrtBigUInt64LE(e, t, r, n, i) {
                checkIntBI(t, n, i, e, r, 7);
                let o = Number(t & BigInt(4294967295));
                e[r++] = o, o >>= 8, e[r++] = o, o >>= 8, e[r++] = o, o >>= 8, e[r++] = o;
                let s = Number(t >> BigInt(32) & BigInt(4294967295));
                return e[r++] = s, s >>= 8, e[r++] = s, s >>= 8, e[r++] = s, s >>= 8, e[r++] = s, r
            }

            function wrtBigUInt64BE(e, t, r, n, i) {
                checkIntBI(t, n, i, e, r, 7);
                let o = Number(t & BigInt(4294967295));
                e[r + 7] = o, o >>= 8, e[r + 6] = o, o >>= 8, e[r + 5] = o, o >>= 8, e[r + 4] = o;
                let s = Number(t >> BigInt(32) & BigInt(4294967295));
                return e[r + 3] = s, s >>= 8, e[r + 2] = s, s >>= 8, e[r + 1] = s, s >>= 8, e[r] = s, r + 8
            }

            function checkIEEE754(e, t, r, n, i, o) {
                if (r + n > e.length || r < 0) throw RangeError("Index out of range")
            }

            function writeFloat(e, t, r, n, o) {
                return t = +t, r >>>= 0, o || checkIEEE754(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), i.write(e, t, r, n, 23, 4), r + 4
            }

            function writeDouble(e, t, r, n, o) {
                return t = +t, r >>>= 0, o || checkIEEE754(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), i.write(e, t, r, n, 52, 8), r + 8
            }
            t.lW = Buffer, t.h2 = 50, Buffer.TYPED_ARRAY_SUPPORT = function() {
                try {
                    let e = new Uint8Array(1),
                        t = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                } catch (e) {
                    return !1
                }
            }(), Buffer.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (Buffer.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (Buffer.isBuffer(this)) return this.byteOffset
                }
            }), Buffer.poolSize = 8192, Buffer.from = function(e, t, r) {
                return from(e, t, r)
            }, Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype), Object.setPrototypeOf(Buffer, Uint8Array), Buffer.alloc = function(e, t, r) {
                return (assertSize(e), e <= 0) ? createBuffer(e) : void 0 !== t ? "string" == typeof r ? createBuffer(e).fill(t, r) : createBuffer(e).fill(t) : createBuffer(e)
            }, Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e)
            }, Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e)
            }, Buffer.isBuffer = function(e) {
                return null != e && !0 === e._isBuffer && e !== Buffer.prototype
            }, Buffer.compare = function(e, t) {
                if (isInstance(e, Uint8Array) && (e = Buffer.from(e, e.offset, e.byteLength)), isInstance(t, Uint8Array) && (t = Buffer.from(t, t.offset, t.byteLength)), !Buffer.isBuffer(e) || !Buffer.isBuffer(t)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (e === t) return 0;
                let r = e.length,
                    n = t.length;
                for (let i = 0, o = Math.min(r, n); i < o; ++i)
                    if (e[i] !== t[i]) {
                        r = e[i], n = t[i];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }, Buffer.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, Buffer.concat = function(e, t) {
                let r;
                if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return Buffer.alloc(0);
                if (void 0 === t)
                    for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
                let n = Buffer.allocUnsafe(t),
                    i = 0;
                for (r = 0; r < e.length; ++r) {
                    let t = e[r];
                    if (isInstance(t, Uint8Array)) i + t.length > n.length ? (Buffer.isBuffer(t) || (t = Buffer.from(t)), t.copy(n, i)) : Uint8Array.prototype.set.call(n, t, i);
                    else if (Buffer.isBuffer(t)) t.copy(n, i);
                    else throw TypeError('"list" argument must be an Array of Buffers');
                    i += t.length
                }
                return n
            }, Buffer.byteLength = byteLength, Buffer.prototype._isBuffer = !0, Buffer.prototype.swap16 = function() {
                let e = this.length;
                if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                for (let t = 0; t < e; t += 2) swap(this, t, t + 1);
                return this
            }, Buffer.prototype.swap32 = function() {
                let e = this.length;
                if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                for (let t = 0; t < e; t += 4) swap(this, t, t + 3), swap(this, t + 1, t + 2);
                return this
            }, Buffer.prototype.swap64 = function() {
                let e = this.length;
                if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                for (let t = 0; t < e; t += 8) swap(this, t, t + 7), swap(this, t + 1, t + 6), swap(this, t + 2, t + 5), swap(this, t + 3, t + 4);
                return this
            }, Buffer.prototype.toString = function() {
                let e = this.length;
                return 0 === e ? "" : 0 == arguments.length ? utf8Slice(this, 0, e) : slowToString.apply(this, arguments)
            }, Buffer.prototype.toLocaleString = Buffer.prototype.toString, Buffer.prototype.equals = function(e) {
                if (!Buffer.isBuffer(e)) throw TypeError("Argument must be a Buffer");
                return this === e || 0 === Buffer.compare(this, e)
            }, Buffer.prototype.inspect = function() {
                let e = "",
                    r = t.h2;
                return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">"
            }, o && (Buffer.prototype[o] = Buffer.prototype.inspect), Buffer.prototype.compare = function(e, t, r, n, i) {
                if (isInstance(e, Uint8Array) && (e = Buffer.from(e, e.offset, e.byteLength)), !Buffer.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw RangeError("out of range index");
                if (n >= i && t >= r) return 0;
                if (n >= i) return -1;
                if (t >= r) return 1;
                if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e) return 0;
                let o = i - n,
                    s = r - t,
                    a = Math.min(o, s),
                    u = this.slice(n, i),
                    c = e.slice(t, r);
                for (let e = 0; e < a; ++e)
                    if (u[e] !== c[e]) {
                        o = u[e], s = c[e];
                        break
                    }
                return o < s ? -1 : s < o ? 1 : 0
            }, Buffer.prototype.includes = function(e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }, Buffer.prototype.indexOf = function(e, t, r) {
                return bidirectionalIndexOf(this, e, t, r, !0)
            }, Buffer.prototype.lastIndexOf = function(e, t, r) {
                return bidirectionalIndexOf(this, e, t, r, !1)
            }, Buffer.prototype.write = function(e, t, r, n) {
                var i, o, s, a, u, c, l, f;
                if (void 0 === t) n = "utf8", r = this.length, t = 0;
                else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                else if (isFinite(t)) t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                let p = this.length - t;
                if ((void 0 === r || r > p) && (r = p), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                let h = !1;
                for (;;) switch (n) {
                    case "hex":
                        return function(e, t, r, n) {
                            let i;
                            r = Number(r) || 0;
                            let o = e.length - r;
                            n ? (n = Number(n)) > o && (n = o) : n = o;
                            let s = t.length;
                            for (n > s / 2 && (n = s / 2), i = 0; i < n; ++i) {
                                let n = parseInt(t.substr(2 * i, 2), 16);
                                if (n != n) break;
                                e[r + i] = n
                            }
                            return i
                        }(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return i = t, o = r, blitBuffer(utf8ToBytes(e, this.length - i), this, i, o);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return s = t, a = r, blitBuffer(function(e) {
                            let t = [];
                            for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                            return t
                        }(e), this, s, a);
                    case "base64":
                        return u = t, c = r, blitBuffer(base64ToBytes(e), this, u, c);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return l = t, f = r, blitBuffer(function(e, t) {
                            let r, n;
                            let i = [];
                            for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = (r = e.charCodeAt(o)) >> 8, i.push(r % 256), i.push(n);
                            return i
                        }(e, this.length - l), this, l, f);
                    default:
                        if (h) throw TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), h = !0
                }
            }, Buffer.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }, Buffer.prototype.slice = function(e, t) {
                let r = this.length;
                e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                let n = this.subarray(e, t);
                return Object.setPrototypeOf(n, Buffer.prototype), n
            }, Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || checkOffset(e, t, this.length);
                let n = this[e],
                    i = 1,
                    o = 0;
                for (; ++o < t && (i *= 256);) n += this[e + o] * i;
                return n
            }, Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || checkOffset(e, t, this.length);
                let n = this[e + --t],
                    i = 1;
                for (; t > 0 && (i *= 256);) n += this[e + --t] * i;
                return n
            }, Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 1, this.length), this[e]
            }, Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 2, this.length), this[e] | this[e + 1] << 8
            }, Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function(e) {
                validateNumber(e >>>= 0, "offset");
                let t = this[e],
                    r = this[e + 7];
                (void 0 === t || void 0 === r) && boundsError(e, this.length - 8);
                let n = t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e],
                    i = this[++e] + 256 * this[++e] + 65536 * this[++e] + 16777216 * r;
                return BigInt(n) + (BigInt(i) << BigInt(32))
            }), Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function(e) {
                validateNumber(e >>>= 0, "offset");
                let t = this[e],
                    r = this[e + 7];
                (void 0 === t || void 0 === r) && boundsError(e, this.length - 8);
                let n = 16777216 * t + 65536 * this[++e] + 256 * this[++e] + this[++e],
                    i = 16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r;
                return (BigInt(n) << BigInt(32)) + BigInt(i)
            }), Buffer.prototype.readIntLE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || checkOffset(e, t, this.length);
                let n = this[e],
                    i = 1,
                    o = 0;
                for (; ++o < t && (i *= 256);) n += this[e + o] * i;
                return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
            }, Buffer.prototype.readIntBE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || checkOffset(e, t, this.length);
                let n = t,
                    i = 1,
                    o = this[e + --n];
                for (; n > 0 && (i *= 256);) o += this[e + --n] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
            }, Buffer.prototype.readInt8 = function(e, t) {
                return (e >>>= 0, t || checkOffset(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
            }, Buffer.prototype.readInt16LE = function(e, t) {
                e >>>= 0, t || checkOffset(e, 2, this.length);
                let r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, Buffer.prototype.readInt16BE = function(e, t) {
                e >>>= 0, t || checkOffset(e, 2, this.length);
                let r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, Buffer.prototype.readInt32LE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, Buffer.prototype.readInt32BE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, Buffer.prototype.readBigInt64LE = defineBigIntMethod(function(e) {
                validateNumber(e >>>= 0, "offset");
                let t = this[e],
                    r = this[e + 7];
                (void 0 === t || void 0 === r) && boundsError(e, this.length - 8);
                let n = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24);
                return (BigInt(n) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e])
            }), Buffer.prototype.readBigInt64BE = defineBigIntMethod(function(e) {
                validateNumber(e >>>= 0, "offset");
                let t = this[e],
                    r = this[e + 7];
                (void 0 === t || void 0 === r) && boundsError(e, this.length - 8);
                let n = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
                return (BigInt(n) << BigInt(32)) + BigInt(16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r)
            }), Buffer.prototype.readFloatLE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 4, this.length), i.read(this, e, !0, 23, 4)
            }, Buffer.prototype.readFloatBE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 4, this.length), i.read(this, e, !1, 23, 4)
            }, Buffer.prototype.readDoubleLE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 8, this.length), i.read(this, e, !0, 52, 8)
            }, Buffer.prototype.readDoubleBE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 8, this.length), i.read(this, e, !1, 52, 8)
            }, Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function(e, t, r, n) {
                if (e = +e, t >>>= 0, r >>>= 0, !n) {
                    let n = Math.pow(2, 8 * r) - 1;
                    checkInt(this, e, t, r, n, 0)
                }
                let i = 1,
                    o = 0;
                for (this[t] = 255 & e; ++o < r && (i *= 256);) this[t + o] = e / i & 255;
                return t + r
            }, Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function(e, t, r, n) {
                if (e = +e, t >>>= 0, r >>>= 0, !n) {
                    let n = Math.pow(2, 8 * r) - 1;
                    checkInt(this, e, t, r, n, 0)
                }
                let i = r - 1,
                    o = 1;
                for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
                return t + r
            }, Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function(e, t, r) {
                return e = +e, t >>>= 0, r || checkInt(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
            }, Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || checkInt(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || checkInt(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || checkInt(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
            }, Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || checkInt(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function(e, t = 0) {
                return wrtBigUInt64LE(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
            }), Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function(e, t = 0) {
                return wrtBigUInt64BE(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
            }), Buffer.prototype.writeIntLE = function(e, t, r, n) {
                if (e = +e, t >>>= 0, !n) {
                    let n = Math.pow(2, 8 * r - 1);
                    checkInt(this, e, t, r, n - 1, -n)
                }
                let i = 0,
                    o = 1,
                    s = 0;
                for (this[t] = 255 & e; ++i < r && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
                return t + r
            }, Buffer.prototype.writeIntBE = function(e, t, r, n) {
                if (e = +e, t >>>= 0, !n) {
                    let n = Math.pow(2, 8 * r - 1);
                    checkInt(this, e, t, r, n - 1, -n)
                }
                let i = r - 1,
                    o = 1,
                    s = 0;
                for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
                return t + r
            }, Buffer.prototype.writeInt8 = function(e, t, r) {
                return e = +e, t >>>= 0, r || checkInt(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, Buffer.prototype.writeInt16LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || checkInt(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, Buffer.prototype.writeInt16BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || checkInt(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, Buffer.prototype.writeInt32LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || checkInt(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
            }, Buffer.prototype.writeInt32BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || checkInt(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function(e, t = 0) {
                return wrtBigUInt64LE(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function(e, t = 0) {
                return wrtBigUInt64BE(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), Buffer.prototype.writeFloatLE = function(e, t, r) {
                return writeFloat(this, e, t, !0, r)
            }, Buffer.prototype.writeFloatBE = function(e, t, r) {
                return writeFloat(this, e, t, !1, r)
            }, Buffer.prototype.writeDoubleLE = function(e, t, r) {
                return writeDouble(this, e, t, !0, r)
            }, Buffer.prototype.writeDoubleBE = function(e, t, r) {
                return writeDouble(this, e, t, !1, r)
            }, Buffer.prototype.copy = function(e, t, r, n) {
                if (!Buffer.isBuffer(e)) throw TypeError("argument should be a Buffer");
                if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || 0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                if (n < 0) throw RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                let i = n - r;
                return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), i
            }, Buffer.prototype.fill = function(e, t, r, n) {
                let i;
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
                    if ("string" == typeof n && !Buffer.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                    if (1 === e.length) {
                        let t = e.charCodeAt(0);
                        ("utf8" === n && t < 128 || "latin1" === n) && (e = t)
                    }
                } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                if (t < 0 || this.length < t || this.length < r) throw RangeError("Out of range index");
                if (r <= t) return this;
                if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                    for (i = t; i < r; ++i) this[i] = e;
                else {
                    let o = Buffer.isBuffer(e) ? e : Buffer.from(e, n),
                        s = o.length;
                    if (0 === s) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                    for (i = 0; i < r - t; ++i) this[i + t] = o[i % s]
                }
                return this
            };
            let s = {};

            function E(e, t, r) {
                s[e] = class extends r {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: t.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
                    }
                    get code() {
                        return e
                    }
                    set code(e) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: e,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${e}]: ${this.message}`
                    }
                }
            }

            function addNumericalSeparator(e) {
                let t = "",
                    r = e.length,
                    n = "-" === e[0] ? 1 : 0;
                for (; r >= n + 4; r -= 3) t = `_${e.slice(r-3,r)}${t}`;
                return `${e.slice(0,r)}${t}`
            }

            function checkIntBI(e, t, r, n, i, o) {
                if (e > r || e < t) {
                    let n;
                    let i = "bigint" == typeof t ? "n" : "";
                    throw n = o > 3 ? 0 === t || t === BigInt(0) ? `>= 0${i} and < 2${i} ** ${(o+1)*8}${i}` : `>= -(2${i} ** ${(o+1)*8-1}${i}) and < 2 ** ${(o+1)*8-1}${i}` : `>= ${t}${i} and <= ${r}${i}`, new s.ERR_OUT_OF_RANGE("value", n, e)
                }
                validateNumber(i, "offset"), (void 0 === n[i] || void 0 === n[i + o]) && boundsError(i, n.length - (o + 1))
            }

            function validateNumber(e, t) {
                if ("number" != typeof e) throw new s.ERR_INVALID_ARG_TYPE(t, "number", e)
            }

            function boundsError(e, t, r) {
                if (Math.floor(e) !== e) throw validateNumber(e, r), new s.ERR_OUT_OF_RANGE(r || "offset", "an integer", e);
                if (t < 0) throw new s.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new s.ERR_OUT_OF_RANGE(r || "offset", `>= ${r?1:0} and <= ${t}`, e)
            }
            E("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
                return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }, RangeError), E("ERR_INVALID_ARG_TYPE", function(e, t) {
                return `The "${e}" argument must be of type number. Received type ${typeof t}`
            }, TypeError), E("ERR_OUT_OF_RANGE", function(e, t, r) {
                let n = `The value of "${e}" is out of range.`,
                    i = r;
                return Number.isInteger(r) && Math.abs(r) > 4294967296 ? i = addNumericalSeparator(String(r)) : "bigint" == typeof r && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = addNumericalSeparator(i)), i += "n"), n += ` It must be ${t}. Received ${i}`
            }, RangeError);
            let a = /[^+/0-9A-Za-z-_]/g;

            function utf8ToBytes(e, t) {
                let r;
                t = t || 1 / 0;
                let n = e.length,
                    i = null,
                    o = [];
                for (let s = 0; s < n; ++s) {
                    if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                        if (!i) {
                            if (r > 56319 || s + 1 === n) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && o.push(239, 191, 189), i = r;
                            continue
                        }
                        r = (i - 55296 << 10 | r - 56320) + 65536
                    } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if ((t -= 1) < 0) break;
                        o.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else if (r < 1114112) {
                        if ((t -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    } else throw Error("Invalid code point")
                }
                return o
            }

            function base64ToBytes(e) {
                return n.toByteArray(function(e) {
                    if ((e = (e = e.split("=")[0]).trim().replace(a, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function blitBuffer(e, t, r, n) {
                let i;
                for (i = 0; i < n && !(i + r >= t.length) && !(i >= e.length); ++i) t[i + r] = e[i];
                return i
            }

            function isInstance(e, t) {
                return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
            }
            let u = function() {
                let e = "0123456789abcdef",
                    t = Array(256);
                for (let r = 0; r < 16; ++r) {
                    let n = 16 * r;
                    for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i]
                }
                return t
            }();

            function defineBigIntMethod(e) {
                return "undefined" == typeof BigInt ? BufferBigIntNotDefined : e
            }

            function BufferBigIntNotDefined() {
                throw Error("BigInt not supported")
            }
        },
        4461: function(e, t, r) {
            let n;
            var i = r(25566);
            t.formatArgs = function(t) {
                if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
                let r = "color: " + this.color;
                t.splice(1, 0, r, "color: inherit");
                let n = 0,
                    i = 0;
                t[0].replace(/%[a-zA-Z%]/g, e => {
                    "%%" !== e && (n++, "%c" === e && (i = n))
                }), t.splice(i, 0, r)
            }, t.save = function(e) {
                try {
                    e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
                } catch (e) {}
            }, t.load = function() {
                let e;
                try {
                    e = t.storage.getItem("debug")
                } catch (e) {}
                return !e && void 0 !== i && "env" in i && (e = i.env.DEBUG), e
            }, t.useColors = function() {
                return "undefined" != typeof window && !!window.process && ("renderer" === window.process.type || !!window.process.__nwjs) || !("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            }, t.storage = function() {
                try {
                    return localStorage
                } catch (e) {}
            }(), t.destroy = (n = !1, () => {
                n || (n = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
            }), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.log = console.debug || console.log || (() => {}), e.exports = r(84239)(t);
            let {
                formatters: o
            } = e.exports;
            o.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }
        },
        84239: function(e, t, r) {
            e.exports = function(e) {
                function createDebug(e) {
                    let t, r, n;
                    let i = null;

                    function debug(...e) {
                        if (!debug.enabled) return;
                        let r = Number(new Date),
                            n = r - (t || r);
                        debug.diff = n, debug.prev = t, debug.curr = r, t = r, e[0] = createDebug.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                        let i = 0;
                        e[0] = e[0].replace(/%([a-zA-Z%])/g, (t, r) => {
                            if ("%%" === t) return "%";
                            i++;
                            let n = createDebug.formatters[r];
                            if ("function" == typeof n) {
                                let r = e[i];
                                t = n.call(debug, r), e.splice(i, 1), i--
                            }
                            return t
                        }), createDebug.formatArgs.call(debug, e);
                        let o = debug.log || createDebug.log;
                        o.apply(debug, e)
                    }
                    return debug.namespace = e, debug.useColors = createDebug.useColors(), debug.color = createDebug.selectColor(e), debug.extend = extend, debug.destroy = createDebug.destroy, Object.defineProperty(debug, "enabled", {
                        enumerable: !0,
                        configurable: !1,
                        get: () => null !== i ? i : (r !== createDebug.namespaces && (r = createDebug.namespaces, n = createDebug.enabled(e)), n),
                        set: e => {
                            i = e
                        }
                    }), "function" == typeof createDebug.init && createDebug.init(debug), debug
                }

                function extend(e, t) {
                    let r = createDebug(this.namespace + (void 0 === t ? ":" : t) + e);
                    return r.log = this.log, r
                }

                function toNamespace(e) {
                    return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
                }
                return createDebug.debug = createDebug, createDebug.default = createDebug, createDebug.coerce = function(e) {
                    return e instanceof Error ? e.stack || e.message : e
                }, createDebug.disable = function() {
                    let e = [...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map(e => "-" + e)].join(",");
                    return createDebug.enable(""), e
                }, createDebug.enable = function(e) {
                    let t;
                    createDebug.save(e), createDebug.namespaces = e, createDebug.names = [], createDebug.skips = [];
                    let r = ("string" == typeof e ? e : "").split(/[\s,]+/),
                        n = r.length;
                    for (t = 0; t < n; t++) r[t] && ("-" === (e = r[t].replace(/\*/g, ".*?"))[0] ? createDebug.skips.push(RegExp("^" + e.slice(1) + "$")) : createDebug.names.push(RegExp("^" + e + "$")))
                }, createDebug.enabled = function(e) {
                    let t, r;
                    if ("*" === e[e.length - 1]) return !0;
                    for (t = 0, r = createDebug.skips.length; t < r; t++)
                        if (createDebug.skips[t].test(e)) return !1;
                    for (t = 0, r = createDebug.names.length; t < r; t++)
                        if (createDebug.names[t].test(e)) return !0;
                    return !1
                }, createDebug.humanize = r(60438), createDebug.destroy = function() {
                    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
                }, Object.keys(e).forEach(t => {
                    createDebug[t] = e[t]
                }), createDebug.names = [], createDebug.skips = [], createDebug.formatters = {}, createDebug.selectColor = function(e) {
                    let t = 0;
                    for (let r = 0; r < e.length; r++) t = (t << 5) - t + e.charCodeAt(r) | 0;
                    return createDebug.colors[Math.abs(t) % createDebug.colors.length]
                }, createDebug.enable(createDebug.load()), createDebug
            }
        },
        19087: function(e, t) { /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
            t.read = function(e, t, r, n, i) {
                var o, s, a = 8 * i - n - 1,
                    u = (1 << a) - 1,
                    c = u >> 1,
                    l = -7,
                    f = r ? i - 1 : 0,
                    p = r ? -1 : 1,
                    h = e[t + f];
                for (f += p, o = h & (1 << -l) - 1, h >>= -l, l += a; l > 0; o = 256 * o + e[t + f], f += p, l -= 8);
                for (s = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; s = 256 * s + e[t + f], f += p, l -= 8);
                if (0 === o) o = 1 - c;
                else {
                    if (o === u) return s ? NaN : (h ? -1 : 1) * (1 / 0);
                    s += Math.pow(2, n), o -= c
                }
                return (h ? -1 : 1) * s * Math.pow(2, o - n)
            }, t.write = function(e, t, r, n, i, o) {
                var s, a, u, c = 8 * o - i - 1,
                    l = (1 << c) - 1,
                    f = l >> 1,
                    p = 23 === i ? 5960464477539062e-23 : 0,
                    h = n ? 0 : o - 1,
                    d = n ? 1 : -1,
                    y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), s + f >= 1 ? t += p / u : t += p * Math.pow(2, 1 - f), t * u >= 2 && (s++, u /= 2), s + f >= l ? (a = 0, s = l) : s + f >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s += f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; e[r + h] = 255 & a, h += d, a /= 256, i -= 8);
                for (s = s << i | a, c += i; c > 0; e[r + h] = 255 & s, h += d, s /= 256, c -= 8);
                e[r + h - d] |= 128 * y
            }
        },
        60438: function(e) {
            function plural(e, t, r, n) {
                return Math.round(e / r) + " " + n + (t >= 1.5 * r ? "s" : "")
            }
            e.exports = function(e, t) {
                t = t || {};
                var r, n, i = typeof e;
                if ("string" === i && e.length > 0) return function(e) {
                    if (!((e = String(e)).length > 100)) {
                        var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                        if (t) {
                            var r = parseFloat(t[1]);
                            switch ((t[2] || "ms").toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return 315576e5 * r;
                                case "weeks":
                                case "week":
                                case "w":
                                    return 6048e5 * r;
                                case "days":
                                case "day":
                                case "d":
                                    return 864e5 * r;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return 36e5 * r;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return 6e4 * r;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return 1e3 * r;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return r;
                                default:
                                    return
                            }
                        }
                    }
                }(e);
                if ("number" === i && isFinite(e)) return t.long ? (r = Math.abs(e)) >= 864e5 ? plural(e, r, 864e5, "day") : r >= 36e5 ? plural(e, r, 36e5, "hour") : r >= 6e4 ? plural(e, r, 6e4, "minute") : r >= 1e3 ? plural(e, r, 1e3, "second") : e + " ms" : (n = Math.abs(e)) >= 864e5 ? Math.round(e / 864e5) + "d" : n >= 36e5 ? Math.round(e / 36e5) + "h" : n >= 6e4 ? Math.round(e / 6e4) + "m" : n >= 1e3 ? Math.round(e / 1e3) + "s" : e + "ms";
                throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
            }
        },
        86504: function(e) {
            var trim = function(e) {
                return e.replace(/^\s+|\s+$/g, "")
            };
            e.exports = function(e) {
                if (!e) return {};
                for (var t = {}, r = trim(e).split("\n"), n = 0; n < r.length; n++) {
                    var i, o = r[n],
                        s = o.indexOf(":"),
                        a = trim(o.slice(0, s)).toLowerCase(),
                        u = trim(o.slice(s + 1));
                    void 0 === t[a] ? t[a] = u : (i = t[a], "[object Array]" === Object.prototype.toString.call(i)) ? t[a].push(u) : t[a] = [t[a], u]
                }
                return t
            }
        },
        25566: function(e) {
            var t, r, n, i = e.exports = {};

            function defaultSetTimout() {
                throw Error("setTimeout has not been defined")
            }

            function defaultClearTimeout() {
                throw Error("clearTimeout has not been defined")
            }

            function runTimeout(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === defaultSetTimout || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (r) {
                    try {
                        return t.call(null, e, 0)
                    } catch (r) {
                        return t.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
                } catch (e) {
                    t = defaultSetTimout
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
                } catch (e) {
                    r = defaultClearTimeout
                }
            }();
            var o = [],
                s = !1,
                a = -1;

            function cleanUpNextTick() {
                s && n && (s = !1, n.length ? o = n.concat(o) : a = -1, o.length && drainQueue())
            }

            function drainQueue() {
                if (!s) {
                    var e = runTimeout(cleanUpNextTick);
                    s = !0;
                    for (var t = o.length; t;) {
                        for (n = o, o = []; ++a < t;) n && n[a].run();
                        a = -1, t = o.length
                    }
                    n = null, s = !1,
                        function(e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === defaultClearTimeout || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                            try {
                                r(e)
                            } catch (t) {
                                try {
                                    return r.call(null, e)
                                } catch (t) {
                                    return r.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function Item(e, t) {
                this.fun = e, this.array = t
            }

            function noop() {}
            i.nextTick = function(e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                o.push(new Item(e, t)), 1 !== o.length || s || runTimeout(drainQueue)
            }, Item.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = noop, i.addListener = noop, i.once = noop, i.off = noop, i.removeListener = noop, i.removeAllListeners = noop, i.emit = noop, i.prependListener = noop, i.prependOnceListener = noop, i.listeners = function(e) {
                return []
            }, i.binding = function(e) {
                throw Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(e) {
                throw Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        },
        42744: function(e, t) {
            var r;
            /*!
            	Copyright (c) 2018 Jed Watson.
            	Licensed under the MIT License (MIT), see
            	http://jedwatson.github.io/classnames
            */
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function classNames() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        r && (e = appendClass(e, function(e) {
                            if ("string" == typeof e || "number" == typeof e) return e;
                            if ("object" != typeof e) return "";
                            if (Array.isArray(e)) return classNames.apply(null, e);
                            if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                            var t = "";
                            for (var r in e) n.call(e, r) && e[r] && (t = appendClass(t, r));
                            return t
                        }(r)))
                    }
                    return e
                }

                function appendClass(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (classNames.default = classNames, e.exports = classNames) : void 0 !== (r = (function() {
                    return classNames
                }).apply(t, [])) && (e.exports = r)
            }()
        },
        46926: function(e, t, r) {
            "use strict";

            function ownKeys(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function _objectSpread(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
                        var n, i;
                        n = t, i = r[t], (n = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || null === e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : String(t)
                        }(n)) in e ? Object.defineProperty(e, n, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function isPortableTextSpan(e) {
                return "span" === e._type && "text" in e && "string" == typeof e.text && (void 0 === e.marks || Array.isArray(e.marks) && e.marks.every(e => "string" == typeof e))
            }

            function isPortableTextBlock(e) {
                return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || !e.markDefs || Array.isArray(e.markDefs) && e.markDefs.every(e => "string" == typeof e._key)) && "children" in e && Array.isArray(e.children) && e.children.every(e => "object" == typeof e && "_type" in e)
            }

            function isPortableTextListItemBlock(e) {
                return isPortableTextBlock(e) && "listItem" in e && "string" == typeof e.listItem && (void 0 === e.level || "number" == typeof e.level)
            }

            function isPortableTextToolkitList(e) {
                return "@list" === e._type
            }

            function isPortableTextToolkitSpan(e) {
                return "@span" === e._type
            }

            function isPortableTextToolkitTextNode(e) {
                return "@text" === e._type
            }
            r.d(t, {
                YI: function() {
                    return PortableText
                }
            });
            let n = ["strong", "em", "code", "underline", "strike-through"];

            function sortMarksByOccurences(e, t, r) {
                if (!isPortableTextSpan(e) || !e.marks || !e.marks.length) return [];
                let i = e.marks.slice(),
                    o = {};
                return i.forEach(e => {
                    o[e] = 1;
                    for (let n = t + 1; n < r.length; n++) {
                        let t = r[n];
                        if (t && isPortableTextSpan(t) && Array.isArray(t.marks) && -1 !== t.marks.indexOf(e)) o[e]++;
                        else break
                    }
                }), i.sort((e, t) => (function(e, t, r) {
                    let i = e[t],
                        o = e[r];
                    if (i !== o) return o - i;
                    let s = n.indexOf(t),
                        a = n.indexOf(r);
                    return s !== a ? s - a : t.localeCompare(r)
                })(o, e, t))
            }

            function listFromBlock(e, t, r) {
                return {
                    _type: "@list",
                    _key: "".concat(e._key || "".concat(t), "-parent"),
                    mode: r,
                    level: e.level || 1,
                    listItem: e.listItem,
                    children: [e]
                }
            }

            function findListMatching(e, t) {
                let r = t.level || 1,
                    n = t.listItem || "normal",
                    i = "string" == typeof t.listItem;
                if (isPortableTextToolkitList(e) && (e.level || 1) === r && i && (e.listItem || "normal") === n) return e;
                if (!("children" in e)) return;
                let o = e.children[e.children.length - 1];
                return o && !isPortableTextSpan(o) ? findListMatching(o, t) : void 0
            }
            var i = r(57437),
                o = r(2265);
            let s = ["block", "list", "listItem", "marks", "types"],
                a = ["listItem"],
                u = ["_key"];

            function dist_ownKeys(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function dist_objectSpread(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? dist_ownKeys(Object(r), !0).forEach(function(t) {
                        var n, i;
                        n = t, i = r[t], (n = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || null === e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : String(t)
                        }(n)) in e ? Object.defineProperty(e, n, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dist_ownKeys(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function _objectWithoutProperties(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }

            function mergeDeeply(e, t, r) {
                let n = t[r],
                    i = e[r];
                return "function" == typeof n || n && "function" == typeof i ? n : n ? dist_objectSpread(dist_objectSpread({}, i), n) : i
            }
            let c = {
                    textDecoration: "underline"
                },
                getTemplate = (e, t) => "[@portabletext/react] Unknown ".concat(e, ", specify a component for it in the `components.").concat(t, "` prop"),
                unknownTypeWarning = e => getTemplate('block type "'.concat(e, '"'), "types"),
                unknownMarkWarning = e => getTemplate('mark type "'.concat(e, '"'), "marks"),
                unknownBlockStyleWarning = e => getTemplate('block style "'.concat(e, '"'), "block"),
                unknownListStyleWarning = e => getTemplate('list style "'.concat(e, '"'), "list"),
                unknownListItemStyleWarning = e => getTemplate('list item style "'.concat(e, '"'), "listItem");

            function printWarning(e) {
                console.warn(e)
            }
            let l = {
                    display: "none"
                },
                f = {
                    types: {},
                    block: {
                        normal: e => {
                            let {
                                children: t
                            } = e;
                            return (0, i.jsx)("p", {
                                children: t
                            })
                        },
                        blockquote: e => {
                            let {
                                children: t
                            } = e;
                            return (0, i.jsx)("blockquote", {
                                children: t
                            })
                        },
                        h1: e => {
                            let {
                                children: t
                            } = e;
                            return (0, i.jsx)("h1", {
                                children: t
                            })
                        },
                        h2: e => {
                            let {
                                children: t
                            } = e;
                            return (0, i.jsx)("h2", {
                                children: t
                            })
                        },
                        h3: e => {
                            let {
                                children: t
                            } = e;
                            return (0, i.jsx)("h3", {
                                children: t
                            })
                        },
                        h4: e => {
                            let {
                                children: t
                            } = e;
                            return (0, i.jsx)("h4", {
                                children: t
                            })
                        },
                        h5: e => {
                            let {
                                children: t
                            } = e;
                            return (0, i.jsx)("h5", {
                                children: t
                            })
                        },
                        h6: e => {
                            let {
                                children: t
                            } = e;
                            return (0, i.jsx)("h6", {
                                children: t
                            })
                        }
                    },
                    marks: {
                        em: e => {
                            let {
                                children: t
                            } = e;
                            return (0, i.jsx)("em", {
                                children: t
                            })
                        },
                        strong: e => {
                            let {
                                children: t
                            } = e;
                            return (0, i.jsx)("strong", {
                                children: t
                            })
                        },
                        code: e => {
                            let {
                                children: t
                            } = e;
                            return (0, i.jsx)("code", {
                                children: t
                            })
                        },
                        underline: e => {
                            let {
                                children: t
                            } = e;
                            return (0, i.jsx)("span", {
                                style: c,
                                children: t
                            })
                        },
                        "strike-through": e => {
                            let {
                                children: t
                            } = e;
                            return (0, i.jsx)("del", {
                                children: t
                            })
                        },
                        link: e => {
                            let {
                                children: t,
                                value: r
                            } = e;
                            return (0, i.jsx)("a", {
                                href: null == r ? void 0 : r.href,
                                children: t
                            })
                        }
                    },
                    list: {
                        number: e => {
                            let {
                                children: t
                            } = e;
                            return (0, i.jsx)("ol", {
                                children: t
                            })
                        },
                        bullet: e => {
                            let {
                                children: t
                            } = e;
                            return (0, i.jsx)("ul", {
                                children: t
                            })
                        }
                    },
                    listItem: e => {
                        let {
                            children: t
                        } = e;
                        return (0, i.jsx)("li", {
                            children: t
                        })
                    },
                    hardBreak: () => (0, i.jsx)("br", {}),
                    unknownType: e => {
                        let {
                            value: t,
                            isInline: r
                        } = e, n = unknownTypeWarning(t._type);
                        return r ? (0, i.jsx)("span", {
                            style: l,
                            children: n
                        }) : (0, i.jsx)("div", {
                            style: l,
                            children: n
                        })
                    },
                    unknownMark: e => {
                        let {
                            markType: t,
                            children: r
                        } = e;
                        return (0, i.jsx)("span", {
                            className: "unknown__pt__mark__".concat(t),
                            children: r
                        })
                    },
                    unknownList: e => {
                        let {
                            children: t
                        } = e;
                        return (0, i.jsx)("ul", {
                            children: t
                        })
                    },
                    unknownListItem: e => {
                        let {
                            children: t
                        } = e;
                        return (0, i.jsx)("li", {
                            children: t
                        })
                    },
                    unknownBlockStyle: e => {
                        let {
                            children: t
                        } = e;
                        return (0, i.jsx)("p", {
                            children: t
                        })
                    }
                };

            function PortableText(e) {
                let {
                    value: t,
                    components: r,
                    listNestingMode: n,
                    onMissingComponent: a = printWarning
                } = e, u = a || noop, c = Array.isArray(t) ? t : [t], l = function(e, t) {
                    let r;
                    let n = [];
                    for (let o = 0; o < e.length; o++) {
                        let s = e[o];
                        if (s) {
                            var i;
                            if (!isPortableTextListItemBlock(s)) {
                                n.push(s), r = void 0;
                                continue
                            }
                            if (!r) {
                                r = listFromBlock(s, o, t), n.push(r);
                                continue
                            }
                            if (i = r, (s.level || 1) === i.level && s.listItem === i.listItem) {
                                r.children.push(s);
                                continue
                            }
                            if ((s.level || 1) > r.level) {
                                let e = listFromBlock(s, o, t);
                                if ("html" === t) {
                                    let t = r.children[r.children.length - 1],
                                        n = _objectSpread(_objectSpread({}, t), {}, {
                                            children: [...t.children, e]
                                        });
                                    r.children[r.children.length - 1] = n
                                } else r.children.push(e);
                                r = e;
                                continue
                            }
                            if ((s.level || 1) < r.level) {
                                let e = n[n.length - 1],
                                    i = e && findListMatching(e, s);
                                if (i) {
                                    (r = i).children.push(s);
                                    continue
                                }
                                r = listFromBlock(s, o, t), n.push(r);
                                continue
                            }
                            if (s.listItem !== r.listItem) {
                                let e = n[n.length - 1],
                                    i = e && findListMatching(e, {
                                        level: s.level || 1
                                    });
                                if (i && i.listItem === s.listItem) {
                                    (r = i).children.push(s);
                                    continue
                                }
                                r = listFromBlock(s, o, t), n.push(r);
                                continue
                            }
                            console.warn("Unknown state encountered for block", s), n.push(s)
                        }
                    }
                    return n
                }(c, n || "html"), p = (0, o.useMemo)(() => r ? function(e, t) {
                    let {
                        block: r,
                        list: n,
                        listItem: i,
                        marks: o,
                        types: a
                    } = t, u = _objectWithoutProperties(t, s);
                    return dist_objectSpread(dist_objectSpread({}, e), {}, {
                        block: mergeDeeply(e, t, "block"),
                        list: mergeDeeply(e, t, "list"),
                        listItem: mergeDeeply(e, t, "listItem"),
                        marks: mergeDeeply(e, t, "marks"),
                        types: mergeDeeply(e, t, "types")
                    }, u)
                }(f, r) : f, [r]), h = (0, o.useMemo)(() => getNodeRenderer(p, u), [p, u]), d = l.map((e, t) => h({
                    node: e,
                    index: t,
                    isInline: !1,
                    renderNode: h
                }));
                return (0, i.jsx)(i.Fragment, {
                    children: d
                })
            }
            let getNodeRenderer = (e, t) => function renderNode(r) {
                let {
                    node: n,
                    index: o,
                    isInline: s
                } = r, c = n._key || "node-".concat(o);
                return isPortableTextToolkitList(n) ? function(r, n, o) {
                    let s = r.children.map((e, t) => renderNode({
                            node: e._key ? e : dist_objectSpread(dist_objectSpread({}, e), {}, {
                                _key: "li-".concat(n, "-").concat(t)
                            }),
                            index: t,
                            isInline: !1,
                            renderNode
                        })),
                        a = e.list,
                        u = "function" == typeof a ? a : a[r.listItem],
                        c = u || e.unknownList;
                    if (c === e.unknownList) {
                        let e = r.listItem || "bullet";
                        t(unknownListStyleWarning(e), {
                            nodeType: "listStyle",
                            type: e
                        })
                    }
                    return (0, i.jsx)(c, {
                        value: r,
                        index: n,
                        isInline: !1,
                        renderNode,
                        children: s
                    }, o)
                }(n, o, c) : isPortableTextListItemBlock(n) ? function(r, n, o) {
                    let s = serializeBlock({
                            node: r,
                            index: n,
                            isInline: !1,
                            renderNode
                        }),
                        u = e.listItem,
                        c = "function" == typeof u ? u : u[r.listItem],
                        l = c || e.unknownListItem;
                    if (l === e.unknownListItem) {
                        let e = r.listItem || "bullet";
                        t(unknownListItemStyleWarning(e), {
                            type: e,
                            nodeType: "listItemStyle"
                        })
                    }
                    let f = s.children;
                    if (r.style && "normal" !== r.style) {
                        let {
                            listItem: e
                        } = r, t = _objectWithoutProperties(r, a);
                        f = renderNode({
                            node: t,
                            index: n,
                            isInline: !1,
                            renderNode
                        })
                    }
                    return (0, i.jsx)(l, {
                        value: r,
                        index: n,
                        isInline: !1,
                        renderNode,
                        children: f
                    }, o)
                }(n, o, c) : isPortableTextToolkitSpan(n) ? function(r, n, o) {
                    let {
                        markDef: s,
                        markType: a,
                        markKey: u
                    } = r, c = e.marks[a] || e.unknownMark, l = r.children.map((e, t) => renderNode({
                        node: e,
                        index: t,
                        isInline: !0,
                        renderNode
                    }));
                    return c === e.unknownMark && t(unknownMarkWarning(a), {
                        nodeType: "mark",
                        type: a
                    }), (0, i.jsx)(c, {
                        text: function spanToPlainText(e) {
                            let t = "";
                            return e.children.forEach(e => {
                                isPortableTextToolkitTextNode(e) ? t += e.text : isPortableTextToolkitSpan(e) && (t += spanToPlainText(e))
                            }), t
                        }(r),
                        value: s,
                        markType: a,
                        markKey: u,
                        renderNode,
                        children: l
                    }, o)
                }(n, 0, c) : n._type in e.types ? function(t, r, n, o) {
                    let s = e.types[t._type];
                    return s ? (0, i.jsx)(s, dist_objectSpread({}, {
                        value: t,
                        isInline: o,
                        index: r,
                        renderNode
                    }), n) : null
                }(n, o, c, s) : isPortableTextBlock(n) ? function(r, n, o, s) {
                    let a = serializeBlock({
                            node: r,
                            index: n,
                            isInline: s,
                            renderNode
                        }),
                        {
                            _key: c
                        } = a,
                        l = _objectWithoutProperties(a, u),
                        f = l.node.style || "normal",
                        p = "function" == typeof e.block ? e.block : e.block[f],
                        h = p || e.unknownBlockStyle;
                    return h === e.unknownBlockStyle && t(unknownBlockStyleWarning(f), {
                        nodeType: "blockStyle",
                        type: f
                    }), (0, i.jsx)(h, dist_objectSpread(dist_objectSpread({}, l), {}, {
                        value: l.node,
                        renderNode
                    }), o)
                }(n, o, c, s) : isPortableTextToolkitTextNode(n) ? function(t, r) {
                    if ("\n" === t.text) {
                        let t = e.hardBreak;
                        return t ? (0, i.jsx)(t, {}, r) : "\n"
                    }
                    return t.text
                }(n, c) : function(r, n, o, s) {
                    t(unknownTypeWarning(r._type), {
                        nodeType: "block",
                        type: r._type
                    });
                    let a = e.unknownType;
                    return (0, i.jsx)(a, dist_objectSpread({}, {
                        value: r,
                        isInline: s,
                        index: n,
                        renderNode
                    }), o)
                }(n, o, c, s)
            };

            function serializeBlock(e) {
                let {
                    node: t,
                    index: r,
                    isInline: n,
                    renderNode: i
                } = e, o = function(e) {
                    var t;
                    let {
                        children: r,
                        markDefs: n = []
                    } = e;
                    if (!r || !r.length) return [];
                    let i = r.map(sortMarksByOccurences),
                        o = {
                            _type: "@span",
                            children: [],
                            markType: "<unknown>"
                        },
                        s = [o];
                    for (let e = 0; e < r.length; e++) {
                        let o = r[e];
                        if (!o) continue;
                        let a = i[e] || [],
                            u = 1;
                        if (s.length > 1)
                            for (; u < s.length; u++) {
                                let e = (null == (t = s[u]) ? void 0 : t.markKey) || "",
                                    r = a.indexOf(e);
                                if (-1 === r) break;
                                a.splice(r, 1)
                            }
                        let c = (s = s.slice(0, u))[s.length - 1];
                        if (c) {
                            for (let e of a) {
                                let t = n.find(t => t._key === e),
                                    r = t ? t._type : e,
                                    i = {
                                        _type: "@span",
                                        _key: o._key,
                                        children: [],
                                        markDef: t,
                                        markType: r,
                                        markKey: e
                                    };
                                c.children.push(i), s.push(i), c = i
                            }
                            if (isPortableTextSpan(o)) {
                                let e = o.text.split("\n");
                                for (let t = e.length; t-- > 1;) e.splice(t, 0, "\n");
                                c.children = c.children.concat(e.map(e => ({
                                    _type: "@text",
                                    text: e
                                })))
                            } else c.children = c.children.concat(o)
                        }
                    }
                    return o.children
                }(t), s = o.map((e, t) => i({
                    node: e,
                    isInline: !0,
                    index: t,
                    renderNode: i
                }));
                return {
                    _key: t._key || "block-".concat(r),
                    children: s,
                    index: r,
                    isInline: n,
                    node: t
                }
            }

            function noop() {}
        },
        4200: function(e, t, r) {
            "use strict";
            r.d(t, {
                S: function() {
                    return eL
                },
                d: function() {
                    return defineCreateClientExports
                },
                e: function() {
                    return eN
                },
                g: function() {
                    return b
                },
                p: function() {
                    return eo
                }
            });
            let n = !(typeof navigator > "u") && "ReactNative" === navigator.product,
                i = {
                    timeout: n ? 6e4 : 12e4
                },
                processOptions = function(e) {
                    let t = { ...i,
                            ..."string" == typeof e ? {
                                url: e
                            } : e
                        },
                        {
                            searchParams: r
                        } = new URL(t.url, "http://localhost");
                    if (t.timeout = function normalizeTimeout(e) {
                            if (!1 === e || 0 === e) return !1;
                            if (e.connect || e.socket) return e;
                            let t = Number(e);
                            return isNaN(t) ? normalizeTimeout(i.timeout) : {
                                connect: t,
                                socket: t
                            }
                        }(t.timeout), t.query) {
                        for (let [e, n] of Object.entries(t.query))
                            if (void 0 !== n) {
                                if (Array.isArray(n))
                                    for (let t of n) r.append(e, t);
                                else r.append(e, n)
                            }
                    }
                    let [n] = t.url.split("?"), o = r.toString();
                    return o && (t.url = `${n}?${o}`), t.method = t.body && !t.method ? "POST" : (t.method || "GET").toUpperCase(), t
                },
                o = /^https?:\/\//i,
                validateOptions = function(e) {
                    if (!o.test(e.url)) throw Error(`"${e.url}" is not a valid URL`)
                };
            var s, a, u = r(86504);
            let middlewareReducer = e => function(t, r, ...n) {
                    let i = "onError" === t,
                        o = r;
                    for (let r = 0; r < e[t].length; r++) {
                        let s = e[t][r];
                        if (o = s(o, ...n), i && !o) break
                    }
                    return o
                },
                c = ["request", "response", "progress", "error", "abort"],
                l = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
            var f, p, h, d, y, g, m, __accessCheck = (e, t, r) => {
                    if (!t.has(e)) throw TypeError("Cannot " + r)
                },
                __privateGet = (e, t, r) => (__accessCheck(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
                __privateAdd = (e, t, r) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, r)
                },
                __privateSet = (e, t, r, n) => (__accessCheck(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
            let FetchXhr = class FetchXhr {
                constructor() {
                    this.readyState = 0, this.responseType = "", __privateAdd(this, f, void 0), __privateAdd(this, p, void 0), __privateAdd(this, h, void 0), __privateAdd(this, d, {}), __privateAdd(this, y, void 0), __privateAdd(this, g, {}), __privateAdd(this, m, void 0)
                }
                open(e, t, r) {
                    __privateSet(this, f, e), __privateSet(this, p, t), __privateSet(this, h, ""), this.readyState = 1, this.onreadystatechange(), __privateSet(this, y, void 0)
                }
                abort() {
                    __privateGet(this, y) && __privateGet(this, y).abort()
                }
                getAllResponseHeaders() {
                    return __privateGet(this, h)
                }
                setRequestHeader(e, t) {
                    __privateGet(this, d)[e] = t
                }
                setInit(e, t = !0) {
                    __privateSet(this, g, e), __privateSet(this, m, t)
                }
                send(e) {
                    let t = "arraybuffer" !== this.responseType,
                        r = { ...__privateGet(this, g),
                            method: __privateGet(this, f),
                            headers: __privateGet(this, d),
                            body: e
                        };
                    "function" == typeof AbortController && __privateGet(this, m) && (__privateSet(this, y, new AbortController), "u" > typeof EventTarget && __privateGet(this, y).signal instanceof EventTarget && (r.signal = __privateGet(this, y).signal)), "u" > typeof document && (r.credentials = this.withCredentials ? "include" : "omit"), fetch(__privateGet(this, p), r).then(e => (e.headers.forEach((e, t) => {
                        __privateSet(this, h, __privateGet(this, h) + `${t}: ${e}\r
`)
                    }), this.status = e.status, this.statusText = e.statusText, this.readyState = 3, t ? e.text() : e.arrayBuffer())).then(e => {
                        "string" == typeof e ? this.responseText = e : this.response = e, this.readyState = 4, this.onreadystatechange()
                    }).catch(e => {
                        var t;
                        if ("AbortError" === e.name) {
                            this.onabort();
                            return
                        }
                        null == (t = this.onerror) || t.call(this, e)
                    })
                }
            };
            f = new WeakMap, p = new WeakMap, h = new WeakMap, d = new WeakMap, y = new WeakMap, g = new WeakMap, m = new WeakMap;
            let v = "function" == typeof XMLHttpRequest ? "xhr" : "fetch",
                w = "xhr" === v ? XMLHttpRequest : FetchXhr,
                httpRequester = (e, t) => {
                    var r;
                    let n = e.options,
                        i = e.applyMiddleware("finalizeOptions", n),
                        o = {},
                        s = e.applyMiddleware("interceptRequest", void 0, {
                            adapter: v,
                            context: e
                        });
                    if (s) {
                        let e = setTimeout(t, 0, null, s);
                        return {
                            abort: () => clearTimeout(e)
                        }
                    }
                    let a = new w;
                    a instanceof FetchXhr && "object" == typeof i.fetch && a.setInit(i.fetch, null == (r = i.useAbortSignal) || r);
                    let c = i.headers,
                        l = i.timeout,
                        f = !1,
                        p = !1,
                        h = !1;
                    if (a.onerror = e => {
                            onError(Error(`Request error while attempting to reach ${i.url}${e.lengthComputable?`(${e.loaded} of ${e.total} bytes transferred)`:""}`))
                        }, a.ontimeout = e => {
                            onError(Error(`Request timeout while attempting to reach ${i.url}${e.lengthComputable?`(${e.loaded} of ${e.total} bytes transferred)`:""}`))
                        }, a.onabort = () => {
                            stopTimers(!0), f = !0
                        }, a.onreadystatechange = () => {
                            l && (stopTimers(), o.socket = setTimeout(() => timeoutRequest("ESOCKETTIMEDOUT"), l.socket)), f || 4 !== a.readyState || 0 === a.status || function() {
                                if (!(f || p || h)) {
                                    if (0 === a.status) {
                                        onError(Error("Unknown XHR error"));
                                        return
                                    }
                                    stopTimers(), p = !0, t(null, {
                                        body: a.response || ("" === a.responseType || "text" === a.responseType ? a.responseText : ""),
                                        url: i.url,
                                        method: i.method,
                                        headers: u(a.getAllResponseHeaders()),
                                        statusCode: a.status,
                                        statusMessage: a.statusText
                                    })
                                }
                            }()
                        }, a.open(i.method, i.url, !0), a.withCredentials = !!i.withCredentials, c && a.setRequestHeader)
                        for (let e in c) c.hasOwnProperty(e) && a.setRequestHeader(e, c[e]);
                    return i.rawBody && (a.responseType = "arraybuffer"), e.applyMiddleware("onRequest", {
                        options: i,
                        adapter: v,
                        request: a,
                        context: e
                    }), a.send(i.body || null), l && (o.connect = setTimeout(() => timeoutRequest("ETIMEDOUT"), l.connect)), {
                        abort: function() {
                            f = !0, a && a.abort()
                        }
                    };

                    function timeoutRequest(t) {
                        h = !0, a.abort();
                        let r = Error("ESOCKETTIMEDOUT" === t ? `Socket timed out on request to ${i.url}` : `Connection timed out on request to ${i.url}`);
                        r.code = t, e.channels.error.publish(r)
                    }

                    function stopTimers(e) {
                        (e || f || a.readyState >= 2 && o.connect) && clearTimeout(o.connect), o.socket && clearTimeout(o.socket)
                    }

                    function onError(e) {
                        if (p) return;
                        stopTimers(!0), p = !0, a = null;
                        let r = e || Error(`Network error while attempting to reach ${i.url}`);
                        r.isNetworkError = !0, r.request = i, t(r)
                    }
                },
                getIt = (e = [], t = httpRequester) => (function createRequester(e, t) {
                    let r = [],
                        n = l.reduce((e, t) => (e[t] = e[t] || [], e), {
                            processOptions: [processOptions],
                            validateOptions: [validateOptions]
                        });

                    function request(e) {
                        let r;
                        let onResponse = (e, t, r) => {
                                let n = e,
                                    s = t;
                                if (!n) try {
                                    s = o("onResponse", t, r)
                                } catch (e) {
                                    s = null, n = e
                                }(n = n && o("onError", n, r)) ? i.error.publish(n) : s && i.response.publish(s)
                            },
                            i = c.reduce((e, t) => (e[t] = function() {
                                let e = Object.create(null),
                                    t = 0;
                                return {
                                    publish: function(t) {
                                        for (let r in e) e[r](t)
                                    },
                                    subscribe: function(r) {
                                        let n = t++;
                                        return e[n] = r,
                                            function() {
                                                delete e[n]
                                            }
                                    }
                                }
                            }(), e), {}),
                            o = middlewareReducer(n),
                            s = o("processOptions", e);
                        o("validateOptions", s);
                        let a = {
                                options: s,
                                channels: i,
                                applyMiddleware: o
                            },
                            u = i.request.subscribe(e => {
                                r = t(e, (t, r) => onResponse(t, r, e))
                            });
                        i.abort.subscribe(() => {
                            u(), r && r.abort()
                        });
                        let l = o("onReturn", i, a);
                        return l === i && i.request.publish(a), l
                    }
                    return request.use = function(e) {
                        if (!e) throw Error("Tried to add middleware that resolved to falsey value");
                        if ("function" == typeof e) throw Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
                        if (e.onReturn && n.onReturn.length > 0) throw Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
                        return l.forEach(t => {
                            e[t] && n[t].push(e[t])
                        }), r.push(e), request
                    }, request.clone = () => createRequester(r, t), e.forEach(request.use), request
                })(e, t);
            /*!
             * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
             *
             * Copyright (c) 2014-2017, Jon Schlinkert.
             * Released under the MIT License.
             */
            function isObject(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }
            r(4461);
            var _ = r(67133).lW;
            Object.prototype.hasOwnProperty;
            let O = typeof _ > "u" ? () => !1 : e => _.isBuffer(e),
                B = ["boolean", "string", "number"],
                S = {};
            "u" > typeof globalThis ? S = globalThis : "u" > typeof window ? S = window : "u" > typeof global ? S = global : "u" > typeof self && (S = self);
            var x = S;
            let promise = (e = {}) => {
                let t = e.implementation || Promise;
                if (!t) throw Error("`Promise` is not available in global scope, and no implementation was passed");
                return {
                    onReturn: (r, n) => new t((t, i) => {
                        let o = n.options.cancelToken;
                        o && o.promise.then(e => {
                            r.abort.publish(e), i(e)
                        }), r.error.subscribe(i), r.response.subscribe(r => {
                            t(e.onlyBody ? r.body : r)
                        }), setTimeout(() => {
                            try {
                                r.request.publish(n)
                            } catch (e) {
                                i(e)
                            }
                        }, 0)
                    })
                }
            };
            let Cancel = class Cancel {
                constructor(e) {
                    this.__CANCEL__ = !0, this.message = e
                }
                toString() {
                    return `Cancel${this.message?`: ${this.message}`:""}`
                }
            };
            let C = class {
                constructor(e) {
                    if ("function" != typeof e) throw TypeError("executor must be a function.");
                    let t = null;
                    this.promise = new Promise(e => {
                        t = e
                    }), e(e => {
                        this.reason || (this.reason = new Cancel(e), t(this.reason))
                    })
                }
            };
            C.source = () => {
                let e;
                return {
                    token: new C(t => {
                        e = t
                    }),
                    cancel: e
                }
            }, promise.Cancel = Cancel, promise.CancelToken = C, promise.isCancel = e => !!(e && null != e && e.__CANCEL__);
            var defaultShouldRetry = (e, t, r) => ("GET" === r.method || "HEAD" === r.method) && (e.isNetworkError || !1);
            let isStream = e => null !== e && "object" == typeof e && "function" == typeof e.pipe;
            var sharedRetry = e => {
                let t = e.maxRetries || 5,
                    r = e.retryDelay || getRetryDelay,
                    n = e.shouldRetry;
                return {
                    onError: (e, i) => {
                        let o = i.options,
                            s = o.maxRetries || t,
                            a = o.shouldRetry || n,
                            u = o.attemptNumber || 0;
                        if (isStream(o.body) || !a(e, u, o) || u >= s) return e;
                        let c = Object.assign({}, i, {
                            options: Object.assign({}, o, {
                                attemptNumber: u + 1
                            })
                        });
                        return setTimeout(() => i.channels.request.publish(c), r(u)), null
                    }
                }
            };

            function getRetryDelay(e) {
                return 100 * Math.pow(2, e) + 100 * Math.random()
            }
            let retry = (e = {}) => sharedRetry({
                shouldRetry: defaultShouldRetry,
                ...e
            });
            retry.shouldRetry = defaultShouldRetry;
            var extendStatics = function(e, t) {
                return (extendStatics = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                })(e, t)
            };

            function __extends(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function __() {
                    this.constructor = e
                }
                extendStatics(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
            }

            function __generator(e, t) {
                var r, n, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function verb(a) {
                    return function(u) {
                        return function(a) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < i[1]) {
                                            s.label = i[1], i = a;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(a);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                a = t.call(e, s)
                            } catch (e) {
                                a = [6, e], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            }

            function __values(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function __read(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, i, o = r.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = o.next()).done;) s.push(n.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = o.return) && r.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return s
            }

            function __spreadArray(e, t, r) {
                if (r || 2 == arguments.length)
                    for (var n, i = 0, o = t.length; i < o; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
                return e.concat(n || Array.prototype.slice.call(t))
            }

            function __await(e) {
                return this instanceof __await ? (this.v = e, this) : new __await(e)
            }

            function isFunction(e) {
                return "function" == typeof e
            }

            function createErrorClass(e) {
                var t = e(function(e) {
                    Error.call(e), e.stack = Error().stack
                });
                return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
            }
            "function" == typeof SuppressedError && SuppressedError;
            var I = createErrorClass(function(e) {
                return function(t) {
                    e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(e, t) {
                        return t + 1 + ") " + e.toString()
                    }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t
                }
            });

            function arrRemove(e, t) {
                if (e) {
                    var r = e.indexOf(t);
                    0 <= r && e.splice(r, 1)
                }
            }
            var k = function() {
                var e;

                function Subscription(e) {
                    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null
                }
                return Subscription.prototype.unsubscribe = function() {
                    if (!this.closed) {
                        this.closed = !0;
                        var e, t, r, n, i, o = this._parentage;
                        if (o) {
                            if (this._parentage = null, Array.isArray(o)) try {
                                for (var s = __values(o), a = s.next(); !a.done; a = s.next()) a.value.remove(this)
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    a && !a.done && (t = s.return) && t.call(s)
                                } finally {
                                    if (e) throw e.error
                                }
                            } else o.remove(this)
                        }
                        var u = this.initialTeardown;
                        if (isFunction(u)) try {
                            u()
                        } catch (e) {
                            i = e instanceof I ? e.errors : [e]
                        }
                        var c = this._finalizers;
                        if (c) {
                            this._finalizers = null;
                            try {
                                for (var l = __values(c), f = l.next(); !f.done; f = l.next()) {
                                    var p = f.value;
                                    try {
                                        execFinalizer(p)
                                    } catch (e) {
                                        i = null != i ? i : [], e instanceof I ? i = __spreadArray(__spreadArray([], __read(i)), __read(e.errors)) : i.push(e)
                                    }
                                }
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    f && !f.done && (n = l.return) && n.call(l)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                        }
                        if (i) throw new I(i)
                    }
                }, Subscription.prototype.add = function(e) {
                    var t;
                    if (e && e !== this) {
                        if (this.closed) execFinalizer(e);
                        else {
                            if (e instanceof Subscription) {
                                if (e.closed || e._hasParent(this)) return;
                                e._addParent(this)
                            }(this._finalizers = null !== (t = this._finalizers) && void 0 !== t ? t : []).push(e)
                        }
                    }
                }, Subscription.prototype._hasParent = function(e) {
                    var t = this._parentage;
                    return t === e || Array.isArray(t) && t.includes(e)
                }, Subscription.prototype._addParent = function(e) {
                    var t = this._parentage;
                    this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e
                }, Subscription.prototype._removeParent = function(e) {
                    var t = this._parentage;
                    t === e ? this._parentage = null : Array.isArray(t) && arrRemove(t, e)
                }, Subscription.prototype.remove = function(e) {
                    var t = this._finalizers;
                    t && arrRemove(t, e), e instanceof Subscription && e._removeParent(this)
                }, Subscription.EMPTY = ((e = new Subscription).closed = !0, e), Subscription
            }();

            function isSubscription(e) {
                return e instanceof k || e && "closed" in e && isFunction(e.remove) && isFunction(e.add) && isFunction(e.unsubscribe)
            }

            function execFinalizer(e) {
                isFunction(e) ? e() : e.unsubscribe()
            }
            k.EMPTY;
            var T = {
                    onUnhandledError: null,
                    onStoppedNotification: null,
                    Promise: void 0,
                    useDeprecatedSynchronousErrorHandling: !1,
                    useDeprecatedNextContext: !1
                },
                A = {
                    setTimeout: function(e, t) {
                        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                        var i = A.delegate;
                        return (null == i ? void 0 : i.setTimeout) ? i.setTimeout.apply(i, __spreadArray([e, t], __read(r))) : setTimeout.apply(void 0, __spreadArray([e, t], __read(r)))
                    },
                    clearTimeout: function(e) {
                        var t = A.delegate;
                        return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e)
                    },
                    delegate: void 0
                };

            function reportUnhandledError(e) {
                A.setTimeout(function() {
                    var t = T.onUnhandledError;
                    if (t) t(e);
                    else throw e
                })
            }

            function noop() {}
            var $ = createNotification("C", void 0, void 0);

            function createNotification(e, t, r) {
                return {
                    kind: e,
                    value: t,
                    error: r
                }
            }
            var j = null,
                M = function(e) {
                    function Subscriber(t) {
                        var r = e.call(this) || this;
                        return r.isStopped = !1, t ? (r.destination = t, isSubscription(t) && t.add(r)) : r.destination = U, r
                    }
                    return __extends(Subscriber, e), Subscriber.create = function(e, t, r) {
                        return new D(e, t, r)
                    }, Subscriber.prototype.next = function(e) {
                        this.isStopped ? handleStoppedNotification(createNotification("N", e, void 0), this) : this._next(e)
                    }, Subscriber.prototype.error = function(e) {
                        this.isStopped ? handleStoppedNotification(createNotification("E", void 0, e), this) : (this.isStopped = !0, this._error(e))
                    }, Subscriber.prototype.complete = function() {
                        this.isStopped ? handleStoppedNotification($, this) : (this.isStopped = !0, this._complete())
                    }, Subscriber.prototype.unsubscribe = function() {
                        this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
                    }, Subscriber.prototype._next = function(e) {
                        this.destination.next(e)
                    }, Subscriber.prototype._error = function(e) {
                        try {
                            this.destination.error(e)
                        } finally {
                            this.unsubscribe()
                        }
                    }, Subscriber.prototype._complete = function() {
                        try {
                            this.destination.complete()
                        } finally {
                            this.unsubscribe()
                        }
                    }, Subscriber
                }(k),
                P = Function.prototype.bind;

            function bind(e, t) {
                return P.call(e, t)
            }
            var R = function() {
                    function ConsumerObserver(e) {
                        this.partialObserver = e
                    }
                    return ConsumerObserver.prototype.next = function(e) {
                        var t = this.partialObserver;
                        if (t.next) try {
                            t.next(e)
                        } catch (e) {
                            handleUnhandledError(e)
                        }
                    }, ConsumerObserver.prototype.error = function(e) {
                        var t = this.partialObserver;
                        if (t.error) try {
                            t.error(e)
                        } catch (e) {
                            handleUnhandledError(e)
                        } else handleUnhandledError(e)
                    }, ConsumerObserver.prototype.complete = function() {
                        var e = this.partialObserver;
                        if (e.complete) try {
                            e.complete()
                        } catch (e) {
                            handleUnhandledError(e)
                        }
                    }, ConsumerObserver
                }(),
                D = function(e) {
                    function SafeSubscriber(t, r, n) {
                        var i, o, s = e.call(this) || this;
                        return isFunction(t) || !t ? i = {
                            next: null != t ? t : void 0,
                            error: null != r ? r : void 0,
                            complete: null != n ? n : void 0
                        } : s && T.useDeprecatedNextContext ? ((o = Object.create(t)).unsubscribe = function() {
                            return s.unsubscribe()
                        }, i = {
                            next: t.next && bind(t.next, o),
                            error: t.error && bind(t.error, o),
                            complete: t.complete && bind(t.complete, o)
                        }) : i = t, s.destination = new R(i), s
                    }
                    return __extends(SafeSubscriber, e), SafeSubscriber
                }(M);

            function handleUnhandledError(e) {
                T.useDeprecatedSynchronousErrorHandling ? T.useDeprecatedSynchronousErrorHandling && j && (j.errorThrown = !0, j.error = e) : reportUnhandledError(e)
            }

            function handleStoppedNotification(e, t) {
                var r = T.onStoppedNotification;
                r && A.setTimeout(function() {
                    return r(e, t)
                })
            }
            var U = {
                    closed: !0,
                    next: noop,
                    error: function(e) {
                        throw e
                    },
                    complete: noop
                },
                F = "function" == typeof Symbol && Symbol.observable || "@@observable";

            function identity_identity(e) {
                return e
            }

            function pipeFromArray(e) {
                return 0 === e.length ? identity_identity : 1 === e.length ? e[0] : function(t) {
                    return e.reduce(function(e, t) {
                        return t(e)
                    }, t)
                }
            }
            var L = function() {
                function Observable(e) {
                    e && (this._subscribe = e)
                }
                return Observable.prototype.lift = function(e) {
                    var t = new Observable;
                    return t.source = this, t.operator = e, t
                }, Observable.prototype.subscribe = function(e, t, r) {
                    var n, i = this,
                        o = (n = e) && n instanceof M || n && isFunction(n.next) && isFunction(n.error) && isFunction(n.complete) && isSubscription(n) ? e : new D(e, t, r);
                    return function(e) {
                        if (T.useDeprecatedSynchronousErrorHandling) {
                            var t = !j;
                            if (t && (j = {
                                    errorThrown: !1,
                                    error: null
                                }), e(), t) {
                                var r = j,
                                    n = r.errorThrown,
                                    i = r.error;
                                if (j = null, n) throw i
                            }
                        } else e()
                    }(function() {
                        var e = i.operator,
                            t = i.source;
                        o.add(e ? e.call(o, t) : t ? i._subscribe(o) : i._trySubscribe(o))
                    }), o
                }, Observable.prototype._trySubscribe = function(e) {
                    try {
                        return this._subscribe(e)
                    } catch (t) {
                        e.error(t)
                    }
                }, Observable.prototype.forEach = function(e, t) {
                    var r = this;
                    return new(t = getPromiseCtor(t))(function(t, n) {
                        var i = new D({
                            next: function(t) {
                                try {
                                    e(t)
                                } catch (e) {
                                    n(e), i.unsubscribe()
                                }
                            },
                            error: n,
                            complete: t
                        });
                        r.subscribe(i)
                    })
                }, Observable.prototype._subscribe = function(e) {
                    var t;
                    return null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(e)
                }, Observable.prototype[F] = function() {
                    return this
                }, Observable.prototype.pipe = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return pipeFromArray(e)(this)
                }, Observable.prototype.toPromise = function(e) {
                    var t = this;
                    return new(e = getPromiseCtor(e))(function(e, r) {
                        var n;
                        t.subscribe(function(e) {
                            return n = e
                        }, function(e) {
                            return r(e)
                        }, function() {
                            return e(n)
                        })
                    })
                }, Observable.create = function(e) {
                    return new Observable(e)
                }, Observable
            }();

            function getPromiseCtor(e) {
                var t;
                return null !== (t = null != e ? e : T.Promise) && void 0 !== t ? t : Promise
            }
            var isArrayLike = function(e) {
                return e && "number" == typeof e.length && "function" != typeof e
            };

            function isPromise(e) {
                return isFunction(null == e ? void 0 : e.then)
            }

            function isAsyncIterable(e) {
                return Symbol.asyncIterator && isFunction(null == e ? void 0 : e[Symbol.asyncIterator])
            }

            function createInvalidObservableTypeError(e) {
                return TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
            }
            var N = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";

            function isIterable(e) {
                return isFunction(null == e ? void 0 : e[N])
            }

            function readableStreamLikeToAsyncGenerator(e) {
                return function(e, t, r) {
                    if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                    var n, i = r.apply(e, t || []),
                        o = [];
                    return n = {}, verb("next"), verb("throw"), verb("return"), n[Symbol.asyncIterator] = function() {
                        return this
                    }, n;

                    function verb(e) {
                        i[e] && (n[e] = function(t) {
                            return new Promise(function(r, n) {
                                o.push([e, t, r, n]) > 1 || resume(e, t)
                            })
                        })
                    }

                    function resume(e, t) {
                        try {
                            var r;
                            (r = i[e](t)).value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(o[0][2], r)
                        } catch (e) {
                            settle(o[0][3], e)
                        }
                    }

                    function fulfill(e) {
                        resume("next", e)
                    }

                    function reject(e) {
                        resume("throw", e)
                    }

                    function settle(e, t) {
                        e(t), o.shift(), o.length && resume(o[0][0], o[0][1])
                    }
                }(this, arguments, function() {
                    var t, r, n;
                    return __generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                t = e.getReader(), i.label = 1;
                            case 1:
                                i.trys.push([1, , 9, 10]), i.label = 2;
                            case 2:
                                return [4, __await(t.read())];
                            case 3:
                                if (n = (r = i.sent()).value, !r.done) return [3, 5];
                                return [4, __await(void 0)];
                            case 4:
                                return [2, i.sent()];
                            case 5:
                                return [4, __await(n)];
                            case 6:
                                return [4, i.sent()];
                            case 7:
                                return i.sent(), [3, 2];
                            case 8:
                                return [3, 10];
                            case 9:
                                return t.releaseLock(), [7];
                            case 10:
                                return [2]
                        }
                    })
                })
            }

            function isReadableStreamLike(e) {
                return isFunction(null == e ? void 0 : e.getReader)
            }

            function innerFrom(e) {
                if (e instanceof L) return e;
                if (null != e) {
                    if (isFunction(e[F])) return new L(function(t) {
                        var r = e[F]();
                        if (isFunction(r.subscribe)) return r.subscribe(t);
                        throw TypeError("Provided object does not correctly implement Symbol.observable")
                    });
                    if (isArrayLike(e)) return new L(function(t) {
                        for (var r = 0; r < e.length && !t.closed; r++) t.next(e[r]);
                        t.complete()
                    });
                    if (isPromise(e)) return new L(function(t) {
                        e.then(function(e) {
                            t.closed || (t.next(e), t.complete())
                        }, function(e) {
                            return t.error(e)
                        }).then(null, reportUnhandledError)
                    });
                    if (isAsyncIterable(e)) return fromAsyncIterable(e);
                    if (isIterable(e)) return new L(function(t) {
                        var r, n;
                        try {
                            for (var i = __values(e), o = i.next(); !o.done; o = i.next()) {
                                var s = o.value;
                                if (t.next(s), t.closed) return
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        t.complete()
                    });
                    if (isReadableStreamLike(e)) return fromAsyncIterable(readableStreamLikeToAsyncGenerator(e))
                }
                throw createInvalidObservableTypeError(e)
            }

            function fromAsyncIterable(e) {
                return new L(function(t) {
                    (function(e, t) {
                        var r, n, i, o, s, a, u, c;
                        return s = this, a = void 0, u = void 0, c = function() {
                            var s;
                            return __generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        a.trys.push([0, 5, 6, 11]), r = function(e) {
                                            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                                            var t, r = e[Symbol.asyncIterator];
                                            return r ? r.call(e) : (e = __values(e), t = {}, verb("next"), verb("throw"), verb("return"), t[Symbol.asyncIterator] = function() {
                                                return this
                                            }, t);

                                            function verb(r) {
                                                t[r] = e[r] && function(t) {
                                                    return new Promise(function(n, i) {
                                                        (function(e, t, r, n) {
                                                            Promise.resolve(n).then(function(t) {
                                                                e({
                                                                    value: t,
                                                                    done: r
                                                                })
                                                            }, t)
                                                        })(n, i, (t = e[r](t)).done, t.value)
                                                    })
                                                }
                                            }
                                        }(e), a.label = 1;
                                    case 1:
                                        return [4, r.next()];
                                    case 2:
                                        if ((n = a.sent()).done) return [3, 4];
                                        if (s = n.value, t.next(s), t.closed) return [2];
                                        a.label = 3;
                                    case 3:
                                        return [3, 1];
                                    case 4:
                                        return [3, 11];
                                    case 5:
                                        return i = {
                                            error: a.sent()
                                        }, [3, 11];
                                    case 6:
                                        if (a.trys.push([6, , 9, 10]), !(n && !n.done && (o = r.return))) return [3, 8];
                                        return [4, o.call(r)];
                                    case 7:
                                        a.sent(), a.label = 8;
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        if (i) throw i.error;
                                        return [7];
                                    case 10:
                                        return [7];
                                    case 11:
                                        return t.complete(), [2]
                                }
                            })
                        }, new(u || (u = Promise))(function(e, t) {
                            function fulfilled(e) {
                                try {
                                    step(c.next(e))
                                } catch (e) {
                                    t(e)
                                }
                            }

                            function rejected(e) {
                                try {
                                    step(c.throw(e))
                                } catch (e) {
                                    t(e)
                                }
                            }

                            function step(t) {
                                var r;
                                t.done ? e(t.value) : ((r = t.value) instanceof u ? r : new u(function(e) {
                                    e(r)
                                })).then(fulfilled, rejected)
                            }
                            step((c = c.apply(s, a || [])).next())
                        })
                    })(e, t).catch(function(e) {
                        return t.error(e)
                    })
                })
            }

            function executeSchedule(e, t, r, n, i) {
                void 0 === n && (n = 0), void 0 === i && (i = !1);
                var o = t.schedule(function() {
                    r(), i ? e.add(this.schedule(null, n)) : this.unsubscribe()
                }, n);
                if (e.add(o), !i) return o
            }

            function operate(e) {
                return function(t) {
                    if (isFunction(null == t ? void 0 : t.lift)) return t.lift(function(t) {
                        try {
                            return e(t, this)
                        } catch (e) {
                            this.error(e)
                        }
                    });
                    throw TypeError("Unable to lift unknown Observable type")
                }
            }

            function createOperatorSubscriber(e, t, r, n, i) {
                return new G(e, t, r, n, i)
            }
            var G = function(e) {
                function OperatorSubscriber(t, r, n, i, o, s) {
                    var a = e.call(this, t) || this;
                    return a.onFinalize = o, a.shouldUnsubscribe = s, a._next = r ? function(e) {
                        try {
                            r(e)
                        } catch (e) {
                            t.error(e)
                        }
                    } : e.prototype._next, a._error = i ? function(e) {
                        try {
                            i(e)
                        } catch (e) {
                            t.error(e)
                        } finally {
                            this.unsubscribe()
                        }
                    } : e.prototype._error, a._complete = n ? function() {
                        try {
                            n()
                        } catch (e) {
                            t.error(e)
                        } finally {
                            this.unsubscribe()
                        }
                    } : e.prototype._complete, a
                }
                return __extends(OperatorSubscriber, e), OperatorSubscriber.prototype.unsubscribe = function() {
                    var t;
                    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                        var r = this.closed;
                        e.prototype.unsubscribe.call(this), r || null === (t = this.onFinalize) || void 0 === t || t.call(this)
                    }
                }, OperatorSubscriber
            }(M);

            function observeOn(e, t) {
                return void 0 === t && (t = 0), operate(function(r, n) {
                    r.subscribe(createOperatorSubscriber(n, function(r) {
                        return executeSchedule(n, e, function() {
                            return n.next(r)
                        }, t)
                    }, function() {
                        return executeSchedule(n, e, function() {
                            return n.complete()
                        }, t)
                    }, function(r) {
                        return executeSchedule(n, e, function() {
                            return n.error(r)
                        }, t)
                    }))
                })
            }

            function subscribeOn(e, t) {
                return void 0 === t && (t = 0), operate(function(r, n) {
                    n.add(e.schedule(function() {
                        return r.subscribe(n)
                    }, t))
                })
            }

            function scheduleAsyncIterable(e, t) {
                if (!e) throw Error("Iterable cannot be null");
                return new L(function(r) {
                    executeSchedule(r, t, function() {
                        var n = e[Symbol.asyncIterator]();
                        executeSchedule(r, t, function() {
                            n.next().then(function(e) {
                                e.done ? r.complete() : r.next(e.value)
                            })
                        }, 0, !0)
                    })
                })
            }

            function from_from(e, t) {
                return t ? function(e, t) {
                    if (null != e) {
                        if (isFunction(e[F])) return innerFrom(e).pipe(subscribeOn(t), observeOn(t));
                        if (isArrayLike(e)) return new L(function(r) {
                            var n = 0;
                            return t.schedule(function() {
                                n === e.length ? r.complete() : (r.next(e[n++]), r.closed || this.schedule())
                            })
                        });
                        if (isPromise(e)) return innerFrom(e).pipe(subscribeOn(t), observeOn(t));
                        if (isAsyncIterable(e)) return scheduleAsyncIterable(e, t);
                        if (isIterable(e)) return new L(function(r) {
                            var n;
                            return executeSchedule(r, t, function() {
                                    n = e[N](), executeSchedule(r, t, function() {
                                        var e, t, i;
                                        try {
                                            t = (e = n.next()).value, i = e.done
                                        } catch (e) {
                                            r.error(e);
                                            return
                                        }
                                        i ? r.complete() : r.next(t)
                                    }, 0, !0)
                                }),
                                function() {
                                    return isFunction(null == n ? void 0 : n.return) && n.return()
                                }
                        });
                        if (isReadableStreamLike(e)) return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(e), t)
                    }
                    throw createInvalidObservableTypeError(e)
                }(e, t) : innerFrom(e)
            }
            var q = createErrorClass(function(e) {
                return function() {
                    e(this), this.name = "EmptyError", this.message = "no elements in sequence"
                }
            });

            function lastValueFrom(e, t) {
                var r = "object" == typeof t;
                return new Promise(function(n, i) {
                    var o, s = !1;
                    e.subscribe({
                        next: function(e) {
                            o = e, s = !0
                        },
                        error: i,
                        complete: function() {
                            s ? n(o) : r ? n(t.defaultValue) : i(new q)
                        }
                    })
                })
            }
            var W = Array.isArray;

            function map(e, t) {
                return operate(function(r, n) {
                    var i = 0;
                    r.subscribe(createOperatorSubscriber(n, function(r) {
                        n.next(e.call(t, r, i++))
                    }))
                })
            }
            var z = Array.isArray;

            function combineLatest_combineLatest() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var r = isFunction(e[e.length - 1]) ? e.pop() : void 0;
                return r ? function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return pipeFromArray(e)
                }(combineLatest_combineLatest.apply(void 0, __spreadArray([], __read(e))), map(function(e) {
                    return z(e) ? r.apply(void 0, __spreadArray([], __read(e))) : r(e)
                })) : operate(function(t, r) {
                    var n, i, o;
                    (n = __spreadArray([t], __read(1 === e.length && W(e[0]) ? e[0] : e)), void 0 === o && (o = identity_identity), function(e) {
                        var t;
                        t = function() {
                            for (var t = n.length, r = Array(t), s = t, a = t, _loop_1 = function(t) {
                                    var u;
                                    u = function() {
                                        var u = from_from(n[t], i),
                                            c = !1;
                                        u.subscribe(createOperatorSubscriber(e, function(n) {
                                            r[t] = n, !c && (c = !0, a--), a || e.next(o(r.slice()))
                                        }, function() {
                                            --s || e.complete()
                                        }))
                                    }, i ? executeSchedule(e, i, u) : u()
                                }, u = 0; u < t; u++) _loop_1(u)
                        }, i ? executeSchedule(e, i, t) : t()
                    })(r)
                })
            }

            function filter(e, t) {
                return operate(function(r, n) {
                    var i = 0;
                    r.subscribe(createOperatorSubscriber(n, function(r) {
                        return e.call(t, r, i++) && n.next(r)
                    }))
                })
            }
            let ClientError = class ClientError extends Error {
                constructor(e) {
                    let t = extractErrorProps(e);
                    super(t.message), this.statusCode = 400, Object.assign(this, t)
                }
            };
            let ServerError = class ServerError extends Error {
                constructor(e) {
                    let t = extractErrorProps(e);
                    super(t.message), this.statusCode = 500, Object.assign(this, t)
                }
            };

            function extractErrorProps(e) {
                let t = e.body,
                    r = {
                        response: e,
                        statusCode: e.statusCode,
                        responseBody: -1 !== (e.headers["content-type"] || "").toLowerCase().indexOf("application/json") ? JSON.stringify(t, null, 2) : t,
                        message: "",
                        details: void 0
                    };
                if (t.error && t.message) return r.message = `${t.error} - ${t.message}`, r;
                if (browserMiddleware_isPlainObject(t) && browserMiddleware_isPlainObject(t.error) && "mutationError" === t.error.type && "string" == typeof t.error.description) {
                    let e = t.error.items || [],
                        n = e.slice(0, 5).map(e => {
                            var t;
                            return null == (t = e.error) ? void 0 : t.description
                        }).filter(Boolean),
                        i = n.length ? `:
- ${n.join(`
- `)}` : "";
                    return e.length > 5 && (i += `
...and ${e.length-5} more`), r.message = `${t.error.description}${i}`, r.details = t.error, r
                }
                return t.error && t.error.description ? (r.message = t.error.description, r.details = t.error) : r.message = t.error || t.message || function(e) {
                    let t = e.statusMessage ? ` ${e.statusMessage}` : "";
                    return `${e.method}-request to ${e.url} resulted in HTTP ${e.statusCode}${t}`
                }(e), r
            }

            function browserMiddleware_isPlainObject(e) {
                return "object" == typeof e && null !== e && !Array.isArray(e)
            }
            let H = {
                    onResponse: e => {
                        if (e.statusCode >= 500) throw new ServerError(e);
                        if (e.statusCode >= 400) throw new ClientError(e);
                        return e
                    }
                },
                V = {
                    onResponse: e => {
                        let t = e.headers["x-sanity-warning"];
                        return (Array.isArray(t) ? t : [t]).filter(Boolean).forEach(e => console.warn(e)), e
                    }
                };

            function defineHttpRequest(e, {
                maxRetries: t = 5,
                retryDelay: r
            }) {
                var n;
                let i = getIt([t > 0 ? retry({
                    retryDelay: r,
                    maxRetries: t,
                    shouldRetry
                }) : {}, ...e, V, {
                    processOptions: e => {
                        var t, r;
                        let n = e.body;
                        return n && "function" != typeof n.pipe && !O(n) && (-1 !== B.indexOf(typeof n) || Array.isArray(n) || !1 !== isObject(n) && (void 0 === (t = n.constructor) || !1 !== isObject(r = t.prototype) && !1 !== r.hasOwnProperty("isPrototypeOf"))) ? Object.assign({}, e, {
                            body: JSON.stringify(e.body),
                            headers: Object.assign({}, e.headers, {
                                "Content-Type": "application/json"
                            })
                        }) : e
                    }
                }, {
                    onResponse: e => {
                        let t = e.headers["content-type"] || "",
                            r = n && n.force || -1 !== t.indexOf("application/json");
                        return e.body && t && r ? Object.assign({}, e, {
                            body: function(e) {
                                try {
                                    return JSON.parse(e)
                                } catch (e) {
                                    throw e.message = `Failed to parsed response body as JSON: ${e.message}`, e
                                }
                            }(e.body)
                        }) : e
                    },
                    processOptions: e => Object.assign({}, e, {
                        headers: Object.assign({
                            Accept: "application/json"
                        }, e.headers)
                    })
                }, {
                    onRequest: e => {
                        if ("xhr" !== e.adapter) return;
                        let t = e.request,
                            r = e.context;

                        function handleProgress(e) {
                            return t => {
                                let n = t.lengthComputable ? t.loaded / t.total * 100 : -1;
                                r.channels.progress.publish({
                                    stage: e,
                                    percent: n,
                                    total: t.total,
                                    loaded: t.loaded,
                                    lengthComputable: t.lengthComputable
                                })
                            }
                        }
                        "upload" in t && "onprogress" in t.upload && (t.upload.onprogress = handleProgress("upload")), "onprogress" in t && (t.onprogress = handleProgress("download"))
                    }
                }, H, function(e = {}) {
                    let t = e.implementation || x.Observable;
                    if (!t) throw Error("`Observable` is not available in global scope, and no implementation was passed");
                    return {
                        onReturn: (e, r) => new t(t => (e.error.subscribe(e => t.error(e)), e.progress.subscribe(e => t.next(Object.assign({
                            type: "progress"
                        }, e))), e.response.subscribe(e => {
                            t.next(Object.assign({
                                type: "response"
                            }, e)), t.complete()
                        }), e.request.publish(r), () => e.abort.publish()))
                    }
                }({
                    implementation: L
                })]);

                function httpRequest(e, t = i) {
                    return t({
                        maxRedirects: 0,
                        ...e
                    })
                }
                return httpRequest.defaultRequester = i, httpRequest
            }

            function shouldRetry(e, t, r) {
                let n = "GET" === r.method || "HEAD" === r.method,
                    i = (r.uri || r.url).startsWith("/data/query"),
                    o = e.response && (429 === e.response.statusCode || 502 === e.response.statusCode || 503 === e.response.statusCode);
                return (!!n || !!i) && !!o || retry.shouldRetry(e, t, r)
            }

            function getSelection(e) {
                if ("string" == typeof e) return {
                    id: e
                };
                if (Array.isArray(e)) return {
                    query: "*[_id in $ids]",
                    params: {
                        ids: e
                    }
                };
                if ("object" == typeof e && null !== e && "query" in e && "string" == typeof e.query) return "params" in e && "object" == typeof e.params && null !== e.params ? {
                    query: e.query,
                    params: e.params
                } : {
                    query: e.query
                };
                let t = ["* Document ID (<docId>)", "* Array of document IDs", "* Object containing `query`"].join(`
`);
                throw Error(`Unknown selection - must be one of:

${t}`)
            }
            let J = ["image", "file"],
                Y = ["before", "after", "replace"],
                dataset = e => {
                    if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(e)) throw Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters")
                },
                projectId = e => {
                    if (!/^[-a-z0-9]+$/i.test(e)) throw Error("`projectId` can only contain only a-z, 0-9 and dashes")
                },
                validateAssetType = e => {
                    if (-1 === J.indexOf(e)) throw Error(`Invalid asset type: ${e}. Must be one of ${J.join(", ")}`)
                },
                validateObject = (e, t) => {
                    if (null === t || "object" != typeof t || Array.isArray(t)) throw Error(`${e}() takes an object of properties`)
                },
                validateDocumentId = (e, t) => {
                    if ("string" != typeof t || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(t) || t.includes("..")) throw Error(`${e}(): "${t}" is not a valid document ID`)
                },
                requireDocumentId = (e, t) => {
                    if (!t._id) throw Error(`${e}() requires that the document contains an ID ("_id" property)`);
                    validateDocumentId(e, t._id)
                },
                validateInsert = (e, t, r) => {
                    let n = "insert(at, selector, items)";
                    if (-1 === Y.indexOf(e)) {
                        let e = Y.map(e => `"${e}"`).join(", ");
                        throw Error(`${n} takes an "at"-argument which is one of: ${e}`)
                    }
                    if ("string" != typeof t) throw Error(`${n} takes a "selector"-argument which must be a string`);
                    if (!Array.isArray(r)) throw Error(`${n} takes an "items"-argument which must be an array`)
                },
                hasDataset = e => {
                    if (!e.dataset) throw Error("`dataset` must be provided to perform queries");
                    return e.dataset || ""
                },
                requestTag = e => {
                    if ("string" != typeof e || !/^[a-z0-9._-]{1,75}$/i.test(e)) throw Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
                    return e
                };
            var __accessCheck$6 = (e, t, r) => {
                    if (!t.has(e)) throw TypeError("Cannot " + r)
                },
                __privateGet$6 = (e, t, r) => (__accessCheck$6(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
                __privateAdd$6 = (e, t, r) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, r)
                },
                __privateSet$6 = (e, t, r, n) => (__accessCheck$6(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
            let BasePatch = class BasePatch {
                constructor(e, t = {}) {
                    this.selection = e, this.operations = t
                }
                set(e) {
                    return this._assign("set", e)
                }
                setIfMissing(e) {
                    return this._assign("setIfMissing", e)
                }
                diffMatchPatch(e) {
                    return validateObject("diffMatchPatch", e), this._assign("diffMatchPatch", e)
                }
                unset(e) {
                    if (!Array.isArray(e)) throw Error("unset(attrs) takes an array of attributes to unset, non-array given");
                    return this.operations = Object.assign({}, this.operations, {
                        unset: e
                    }), this
                }
                inc(e) {
                    return this._assign("inc", e)
                }
                dec(e) {
                    return this._assign("dec", e)
                }
                insert(e, t, r) {
                    return validateInsert(e, t, r), this._assign("insert", {
                        [e]: t,
                        items: r
                    })
                }
                append(e, t) {
                    return this.insert("after", `${e}[-1]`, t)
                }
                prepend(e, t) {
                    return this.insert("before", `${e}[0]`, t)
                }
                splice(e, t, r, n) {
                    let i = t < 0 ? t - 1 : t,
                        o = typeof r > "u" || -1 === r ? -1 : Math.max(0, t + r),
                        s = i < 0 && o >= 0 ? "" : o,
                        a = `${e}[${i}:${s}]`;
                    return this.insert("replace", a, n || [])
                }
                ifRevisionId(e) {
                    return this.operations.ifRevisionID = e, this
                }
                serialize() {
                    return { ...getSelection(this.selection),
                        ...this.operations
                    }
                }
                toJSON() {
                    return this.serialize()
                }
                reset() {
                    return this.operations = {}, this
                }
                _assign(e, t, r = !0) {
                    return validateObject(e, t), this.operations = Object.assign({}, this.operations, {
                        [e]: Object.assign({}, r && this.operations[e] || {}, t)
                    }), this
                }
                _set(e, t) {
                    return this._assign(e, t, !1)
                }
            };
            let Q = class _ObservablePatch2 extends BasePatch {
                constructor(e, t, r) {
                    super(e, t), __privateAdd$6(this, ed, void 0), __privateSet$6(this, ed, r)
                }
                clone() {
                    return new _ObservablePatch2(this.selection, { ...this.operations
                    }, __privateGet$6(this, ed))
                }
                commit(e) {
                    if (!__privateGet$6(this, ed)) throw Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
                    let t = "string" == typeof this.selection,
                        r = Object.assign({
                            returnFirst: t,
                            returnDocuments: !0
                        }, e);
                    return __privateGet$6(this, ed).mutate({
                        patch: this.serialize()
                    }, r)
                }
            };
            ed = new WeakMap;
            let K = class _Patch2 extends BasePatch {
                constructor(e, t, r) {
                    super(e, t), __privateAdd$6(this, ey, void 0), __privateSet$6(this, ey, r)
                }
                clone() {
                    return new _Patch2(this.selection, { ...this.operations
                    }, __privateGet$6(this, ey))
                }
                commit(e) {
                    if (!__privateGet$6(this, ey)) throw Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
                    let t = "string" == typeof this.selection,
                        r = Object.assign({
                            returnFirst: t,
                            returnDocuments: !0
                        }, e);
                    return __privateGet$6(this, ey).mutate({
                        patch: this.serialize()
                    }, r)
                }
            };
            ey = new WeakMap;
            var __accessCheck$5 = (e, t, r) => {
                    if (!t.has(e)) throw TypeError("Cannot " + r)
                },
                __privateGet$5 = (e, t, r) => (__accessCheck$5(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
                __privateAdd$5 = (e, t, r) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, r)
                },
                __privateSet$5 = (e, t, r, n) => (__accessCheck$5(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
            let X = {
                returnDocuments: !1
            };
            let BaseTransaction = class BaseTransaction {
                constructor(e = [], t) {
                    this.operations = e, this.trxId = t
                }
                create(e) {
                    return validateObject("create", e), this._add({
                        create: e
                    })
                }
                createIfNotExists(e) {
                    let t = "createIfNotExists";
                    return validateObject(t, e), requireDocumentId(t, e), this._add({
                        [t]: e
                    })
                }
                createOrReplace(e) {
                    let t = "createOrReplace";
                    return validateObject(t, e), requireDocumentId(t, e), this._add({
                        [t]: e
                    })
                }
                delete(e) {
                    return validateDocumentId("delete", e), this._add({
                        delete: {
                            id: e
                        }
                    })
                }
                transactionId(e) {
                    return e ? (this.trxId = e, this) : this.trxId
                }
                serialize() {
                    return [...this.operations]
                }
                toJSON() {
                    return this.serialize()
                }
                reset() {
                    return this.operations = [], this
                }
                _add(e) {
                    return this.operations.push(e), this
                }
            };
            let Z = class _Transaction2 extends BaseTransaction {
                constructor(e, t, r) {
                    super(e, r), __privateAdd$5(this, eb, void 0), __privateSet$5(this, eb, t)
                }
                clone() {
                    return new _Transaction2([...this.operations], __privateGet$5(this, eb), this.trxId)
                }
                commit(e) {
                    if (!__privateGet$5(this, eb)) throw Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
                    return __privateGet$5(this, eb).mutate(this.serialize(), Object.assign({
                        transactionId: this.trxId
                    }, X, e || {}))
                }
                patch(e, t) {
                    if ("string" != typeof e && e instanceof K) return this._add({
                        patch: e.serialize()
                    });
                    if ("function" == typeof t) {
                        let r = t(new K(e, {}, __privateGet$5(this, eb)));
                        if (!(r instanceof K)) throw Error("function passed to `patch()` must return the patch");
                        return this._add({
                            patch: r.serialize()
                        })
                    }
                    return this._add({
                        patch: {
                            id: e,
                            ...t
                        }
                    })
                }
            };
            eb = new WeakMap;
            let ee = class _ObservableTransaction2 extends BaseTransaction {
                constructor(e, t, r) {
                    super(e, r), __privateAdd$5(this, eg, void 0), __privateSet$5(this, eg, t)
                }
                clone() {
                    return new _ObservableTransaction2([...this.operations], __privateGet$5(this, eg), this.trxId)
                }
                commit(e) {
                    if (!__privateGet$5(this, eg)) throw Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
                    return __privateGet$5(this, eg).mutate(this.serialize(), Object.assign({
                        transactionId: this.trxId
                    }, X, e || {}))
                }
                patch(e, t) {
                    if ("string" != typeof e && e instanceof Q) return this._add({
                        patch: e.serialize()
                    });
                    if ("function" == typeof t) {
                        let r = t(new Q(e, {}, __privateGet$5(this, eg)));
                        if (!(r instanceof Q)) throw Error("function passed to `patch()` must return the patch");
                        return this._add({
                            patch: r.serialize()
                        })
                    }
                    return this._add({
                        patch: {
                            id: e,
                            ...t
                        }
                    })
                }
            };

            function generateHelpUrl(e) {
                return "https://www.sanity.io/help/" + e
            }
            eg = new WeakMap;
            let createWarningPrinter = e => {
                    var t;
                    let r, n;
                    return t = (...t) => console.warn(e.join(" "), ...t), r = !1, (...e) => (r || (n = t(...e), r = !0), n)
                },
                et = createWarningPrinter(["Since you haven't set a value for `useCdn`, we will deliver content using our", "global, edge-cached API-CDN. If you wish to have content delivered faster, set", "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."]),
                er = createWarningPrinter(["The Sanity client is configured with the `perspective` set to `previewDrafts`, which doesn't support the API-CDN.", "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."]),
                en = createWarningPrinter(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", `See ${generateHelpUrl("js-client-browser-token")} for more information and how to hide this warning.`]),
                ei = createWarningPrinter(["Using the Sanity client without specifying an API version is deprecated.", `See ${generateHelpUrl("js-client-api-version")}`]),
                eo = createWarningPrinter(["The default export of @sanity/client has been deprecated. Use the named export `createClient` instead."]),
                es = {
                    apiHost: "https://api.sanity.io",
                    apiVersion: "1",
                    useProjectHostname: !0,
                    stega: {
                        enabled: !1
                    }
                },
                ea = ["localhost", "127.0.0.1", "0.0.0.0"],
                isLocal = e => -1 !== ea.indexOf(e),
                validateApiPerspective = function(e) {
                    switch (e) {
                        case "previewDrafts":
                        case "published":
                        case "raw":
                            return;
                        default:
                            throw TypeError("Invalid API perspective string, expected `published`, `previewDrafts` or `raw`")
                    }
                },
                initConfig = (e, t) => {
                    let r = { ...t,
                        ...e,
                        stega: { ..."boolean" == typeof t.stega ? {
                                enabled: t.stega
                            } : t.stega || es.stega,
                            ..."boolean" == typeof e.stega ? {
                                enabled: e.stega
                            } : e.stega || {}
                        }
                    };
                    r.apiVersion || ei();
                    let n = { ...es,
                            ...r
                        },
                        i = n.useProjectHostname;
                    if (typeof Promise > "u") {
                        let e = generateHelpUrl("js-client-promise-polyfill");
                        throw Error(`No native Promise-implementation found, polyfill needed - see ${e}`)
                    }
                    if (i && !n.projectId) throw Error("Configuration must contain `projectId`");
                    if ("string" == typeof n.perspective && validateApiPerspective(n.perspective), "encodeSourceMap" in n) throw Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?");
                    if ("encodeSourceMapAtPath" in n) throw Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?");
                    if ("boolean" != typeof n.stega.enabled) throw Error(`stega.enabled must be a boolean, received ${n.stega.enabled}`);
                    if (n.stega.enabled && void 0 === n.stega.studioUrl) throw Error("stega.studioUrl must be defined when stega.enabled is true");
                    if (n.stega.enabled && "string" != typeof n.stega.studioUrl && "function" != typeof n.stega.studioUrl) throw Error(`stega.studioUrl must be a string or a function, received ${n.stega.studioUrl}`);
                    let o = "u" > typeof window && window.location && window.location.hostname,
                        s = o && isLocal(window.location.hostname);
                    o && s && n.token && !0 !== n.ignoreBrowserTokenWarning ? en() : typeof n.useCdn > "u" && et(), i && projectId(n.projectId), n.dataset && dataset(n.dataset), "requestTagPrefix" in n && (n.requestTagPrefix = n.requestTagPrefix ? requestTag(n.requestTagPrefix).replace(/\.+$/, "") : void 0), n.apiVersion = `${n.apiVersion}`.replace(/^v/, ""), n.isDefaultApi = n.apiHost === es.apiHost, n.useCdn = !1 !== n.useCdn && !n.withCredentials,
                        function(e) {
                            if ("1" === e || "X" === e) return;
                            let t = new Date(e);
                            if (!(/^\d{4}-\d{2}-\d{2}$/.test(e) && t instanceof Date && t.getTime() > 0)) throw Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`")
                        }(n.apiVersion);
                    let a = n.apiHost.split("://", 2),
                        u = a[0],
                        c = a[1],
                        l = n.isDefaultApi ? "apicdn.sanity.io" : c;
                    return n.useProjectHostname ? (n.url = `${u}://${n.projectId}.${c}/v${n.apiVersion}`, n.cdnUrl = `${u}://${n.projectId}.${l}/v${n.apiVersion}`) : (n.url = `${n.apiHost}/v${n.apiVersion}`, n.cdnUrl = n.url), n
                };
            var eu = {
                    0: 8203,
                    1: 8204,
                    2: 8205,
                    3: 8290,
                    4: 8291,
                    5: 8288,
                    6: 65279,
                    7: 8289,
                    8: 119155,
                    9: 119156,
                    a: 119157,
                    b: 119158,
                    c: 119159,
                    d: 119160,
                    e: 119161,
                    f: 119162
                },
                ec = {
                    0: 8203,
                    1: 8204,
                    2: 8205,
                    3: 65279
                },
                el = [, , , , ].fill(String.fromCodePoint(ec[0])).join("");

            function b(e, t, r = "auto") {
                let n;
                return !0 === r || "auto" === r && (Number.isNaN(Number(e)) && Date.parse(e) || function(e) {
                    try {
                        new URL(e, e.startsWith("/") ? "https://acme.com" : void 0)
                    } catch {
                        return !1
                    }
                    return !0
                }(e)) ? e : `${e}${n=JSON.stringify(t),`${el}${Array.from(n).map(e=>{let t=e.charCodeAt(0);if(t>255)throw Error(`Only ASCII edit info can be encoded. Error attempting to encode ${n} on character ${e} (${t})`);return Array.from(t.toString(4).padStart(4,"0")).map(e=>String.fromCodePoint(ec[e])).join("")}).join("")}`}`
            }
            Object.fromEntries(Object.entries(ec).map(e => e.reverse())), Object.fromEntries(Object.entries(eu).map(e => e.reverse()));
            var ef = `${Object.values(eu).map(e=>`\\u{${e.toString(16)}}`).join("")}`,
                ep = RegExp(`[${ef}]{4,}`, "gu");
            let encodeQueryString = ({
                    query: e,
                    params: t = {},
                    options: r = {}
                }) => {
                    let n = new URLSearchParams,
                        {
                            tag: i,
                            returnQuery: o,
                            ...s
                        } = r;
                    for (let [r, o] of (i && n.append("tag", i), n.append("query", e), Object.entries(t))) n.append(`$${r}`, JSON.stringify(o));
                    for (let [e, t] of Object.entries(s)) t && n.append(e, `${t}`);
                    return !1 === o && n.append("returnQuery", "false"), `?${n}`
                },
                excludeFalsey = (e, t) => !1 === e ? void 0 : typeof e > "u" ? t : e,
                getMutationQuery = (e = {}) => ({
                    dryRun: e.dryRun,
                    returnIds: !0,
                    returnDocuments: excludeFalsey(e.returnDocuments, !0),
                    visibility: e.visibility || "sync",
                    autoGenerateArrayKeys: e.autoGenerateArrayKeys,
                    skipCrossDatasetReferenceValidation: e.skipCrossDatasetReferenceValidation
                }),
                isResponse = e => "response" === e.type,
                getBody = e => e.body,
                indexBy = (e, t) => e.reduce((e, r) => (e[t(r)] = r, e), Object.create(null));

            function _fetch(e, t, n, i, o = {}, s = {}) {
                let a = "stega" in s ? { ...n || {},
                        ..."boolean" == typeof s.stega ? {
                            enabled: s.stega
                        } : s.stega || {}
                    } : n,
                    u = a.enabled ? function(e) {
                        try {
                            return JSON.parse(JSON.stringify(e, (e, t) => {
                                var r;
                                return "string" != typeof t ? t : ({
                                    cleaned: t.replace(ep, ""),
                                    encoded: (null == (r = t.match(ep)) ? void 0 : r[0]) || ""
                                }).cleaned
                            }))
                        } catch {
                            return e
                        }
                    }(o) : o,
                    c = !1 === s.filterResponse ? e => e : e => e.result,
                    {
                        cache: l,
                        next: f,
                        ...p
                    } = {
                        useAbortSignal: "u" > typeof s.signal,
                        resultSourceMap: a.enabled ? "withKeyArraySelector" : s.resultSourceMap,
                        ...s,
                        returnQuery: !1 === s.filterResponse && !1 !== s.returnQuery
                    },
                    h = "u" > typeof l || "u" > typeof f ? { ...p,
                        fetch: {
                            cache: l,
                            next: f
                        }
                    } : p,
                    d = _dataRequest(e, t, "query", {
                        query: i,
                        params: u
                    }, h);
                return a.enabled ? d.pipe(function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return combineLatest_combineLatest.apply(void 0, __spreadArray([], __read(e)))
                }(from_from(r.e(7372).then(r.bind(r, 67372)).then(function(e) {
                    return e.a
                }).then(({
                    stegaEncodeSourceMap: e
                }) => e))), map(([e, t]) => {
                    let r = t(e.result, e.resultSourceMap, a);
                    return c({ ...e,
                        result: r
                    })
                })) : d.pipe(map(c))
            }

            function _getDocument(e, t, r, n = {}) {
                let i = {
                    uri: _getDataUrl(e, "doc", r),
                    json: !0,
                    tag: n.tag
                };
                return _requestObservable(e, t, i).pipe(filter(isResponse), map(e => e.body.documents && e.body.documents[0]))
            }

            function _getDocuments(e, t, r, n = {}) {
                let i = {
                    uri: _getDataUrl(e, "doc", r.join(",")),
                    json: !0,
                    tag: n.tag
                };
                return _requestObservable(e, t, i).pipe(filter(isResponse), map(e => {
                    let t = indexBy(e.body.documents || [], e => e._id);
                    return r.map(e => t[e] || null)
                }))
            }

            function _createIfNotExists(e, t, r, n) {
                return requireDocumentId("createIfNotExists", r), _create(e, t, r, "createIfNotExists", n)
            }

            function _createOrReplace(e, t, r, n) {
                return requireDocumentId("createOrReplace", r), _create(e, t, r, "createOrReplace", n)
            }

            function _delete(e, t, r, n) {
                return _dataRequest(e, t, "mutate", {
                    mutations: [{
                        delete: getSelection(r)
                    }]
                }, n)
            }

            function _mutate(e, t, r, n) {
                let i;
                i = r instanceof K || r instanceof Q ? {
                    patch: r.serialize()
                } : r instanceof Z || r instanceof ee ? r.serialize() : r;
                let o = Array.isArray(i) ? i : [i],
                    s = n && n.transactionId || void 0;
                return _dataRequest(e, t, "mutate", {
                    mutations: o,
                    transactionId: s
                }, n)
            }

            function _dataRequest(e, t, r, n, i = {}) {
                let o = "mutate" === r,
                    s = "query" === r,
                    a = o ? "" : encodeQueryString(n),
                    u = !o && a.length < 11264,
                    c = i.returnFirst,
                    {
                        timeout: l,
                        token: f,
                        tag: p,
                        headers: h,
                        returnQuery: d
                    } = i,
                    y = _getDataUrl(e, r, u ? a : ""),
                    g = {
                        method: u ? "GET" : "POST",
                        uri: y,
                        json: !0,
                        body: u ? void 0 : n,
                        query: o && getMutationQuery(i),
                        timeout: l,
                        headers: h,
                        token: f,
                        tag: p,
                        returnQuery: d,
                        perspective: i.perspective,
                        resultSourceMap: i.resultSourceMap,
                        canUseCdn: s,
                        signal: i.signal,
                        fetch: i.fetch,
                        useAbortSignal: i.useAbortSignal,
                        useCdn: i.useCdn
                    };
                return _requestObservable(e, t, g).pipe(filter(isResponse), map(getBody), map(e => {
                    if (!o) return e;
                    let t = e.results || [];
                    if (i.returnDocuments) return c ? t[0] && t[0].document : t.map(e => e.document);
                    let r = c ? t[0] && t[0].id : t.map(e => e.id);
                    return {
                        transactionId: e.transactionId,
                        results: t,
                        [c ? "documentId" : "documentIds"]: r
                    }
                }))
            }

            function _create(e, t, r, n, i = {}) {
                let o = Object.assign({
                    returnFirst: !0,
                    returnDocuments: !0
                }, i);
                return _dataRequest(e, t, "mutate", {
                    mutations: [{
                        [n]: r
                    }]
                }, o)
            }

            function _requestObservable(e, t, r) {
                var n, i, o;
                let s = r.url || r.uri,
                    a = e.config(),
                    u = typeof r.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(r.method || "GET") >= 0 && 0 === s.indexOf("/data/") : r.canUseCdn,
                    c = (null != (n = r.useCdn) ? n : a.useCdn) && u,
                    l = r.tag && a.requestTagPrefix ? [a.requestTagPrefix, r.tag].join(".") : r.tag || a.requestTagPrefix;
                if (l && null !== r.tag && (r.query = {
                        tag: requestTag(l),
                        ...r.query
                    }), ["GET", "HEAD", "POST"].indexOf(r.method || "GET") >= 0 && 0 === s.indexOf("/data/query/")) {
                    let e = null != (i = r.resultSourceMap) ? i : a.resultSourceMap;
                    void 0 !== e && !1 !== e && (r.query = {
                        resultSourceMap: e,
                        ...r.query
                    });
                    let t = r.perspective || a.perspective;
                    "string" == typeof t && "raw" !== t && (validateApiPerspective(t), r.query = {
                        perspective: t,
                        ...r.query
                    }, "previewDrafts" === t && c && (c = !1, er())), !1 === r.returnQuery && (r.query = {
                        returnQuery: "false",
                        ...r.query
                    })
                }
                let f = function(e, t = {}) {
                        let r = {},
                            n = t.token || e.token;
                        n && (r.Authorization = `Bearer ${n}`), t.useGlobalApi || e.useProjectHostname || !e.projectId || (r["X-Sanity-Project-ID"] = e.projectId);
                        let i = !!(typeof t.withCredentials > "u" ? e.token || e.withCredentials : t.withCredentials),
                            o = typeof t.timeout > "u" ? e.timeout : t.timeout;
                        return Object.assign({}, t, {
                            headers: Object.assign({}, r, t.headers || {}),
                            timeout: typeof o > "u" ? 3e5 : o,
                            proxy: t.proxy || e.proxy,
                            json: !0,
                            withCredentials: i,
                            fetch: "object" == typeof t.fetch && "object" == typeof e.fetch ? { ...e.fetch,
                                ...t.fetch
                            } : t.fetch || e.fetch
                        })
                    }(a, Object.assign({}, r, {
                        url: _getUrl(e, s, c)
                    })),
                    p = new L(e => t(f, a.requester).subscribe(e));
                return r.signal ? p.pipe((o = r.signal, e => new L(t => {
                    let abort = () => t.error(function(e) {
                        var t, r;
                        if (eh) return new DOMException(null != (t = null == e ? void 0 : e.reason) ? t : "The operation was aborted.", "AbortError");
                        let n = Error(null != (r = null == e ? void 0 : e.reason) ? r : "The operation was aborted.");
                        return n.name = "AbortError", n
                    }(o));
                    if (o && o.aborted) {
                        abort();
                        return
                    }
                    let r = e.subscribe(t);
                    return o.addEventListener("abort", abort), () => {
                        o.removeEventListener("abort", abort), r.unsubscribe()
                    }
                }))) : p
            }

            function _request(e, t, r) {
                return _requestObservable(e, t, r).pipe(filter(e => "response" === e.type), map(e => e.body))
            }

            function _getDataUrl(e, t, r) {
                let n = e.config(),
                    i = hasDataset(n),
                    o = `/${t}/${i}`;
                return `/data${r?`${o}/${r}`:o}`.replace(/\/($|\?)/, "$1")
            }

            function _getUrl(e, t, r = !1) {
                let {
                    url: n,
                    cdnUrl: i
                } = e.config();
                return `${r?i:n}/${t.replace(/^\//,"")}`
            }
            let eh = !!globalThis.DOMException;
            var ed, ey, eb, eg, em, ev, __accessCheck$4 = (e, t, r) => {
                    if (!t.has(e)) throw TypeError("Cannot " + r)
                },
                __privateGet$4 = (e, t, r) => (__accessCheck$4(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
                __privateAdd$4 = (e, t, r) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, r)
                },
                __privateSet$4 = (e, t, r, n) => (__accessCheck$4(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
            let ObservableAssetsClient = class ObservableAssetsClient {
                constructor(e, t) {
                    __privateAdd$4(this, em, void 0), __privateAdd$4(this, ev, void 0), __privateSet$4(this, em, e), __privateSet$4(this, ev, t)
                }
                upload(e, t, r) {
                    return _upload(__privateGet$4(this, em), __privateGet$4(this, ev), e, t, r)
                }
            };
            em = new WeakMap, ev = new WeakMap;
            let AssetsClient = class AssetsClient {
                constructor(e, t) {
                    __privateAdd$4(this, eE, void 0), __privateAdd$4(this, eO, void 0), __privateSet$4(this, eE, e), __privateSet$4(this, eO, t)
                }
                upload(e, t, r) {
                    let n = _upload(__privateGet$4(this, eE), __privateGet$4(this, eO), e, t, r);
                    return lastValueFrom(n.pipe(filter(e => "response" === e.type), map(e => e.body.document)))
                }
            };

            function _upload(e, t, r, n, i = {}) {
                validateAssetType(r);
                let o = i.extract || void 0;
                o && !o.length && (o = ["none"]);
                let s = hasDataset(e.config()),
                    a = "image" === r ? "images" : "files",
                    u = !(typeof File > "u") && n instanceof File ? Object.assign({
                        filename: !1 === i.preserveFilename ? void 0 : n.name,
                        contentType: n.type
                    }, i) : i,
                    {
                        tag: c,
                        label: l,
                        title: f,
                        description: p,
                        creditLine: h,
                        filename: d,
                        source: y
                    } = u,
                    g = {
                        label: l,
                        title: f,
                        description: p,
                        filename: d,
                        meta: o,
                        creditLine: h
                    };
                return y && (g.sourceId = y.id, g.sourceName = y.name, g.sourceUrl = y.url), _requestObservable(e, t, {
                    tag: c,
                    method: "POST",
                    timeout: u.timeout || 0,
                    uri: `/assets/${a}/${s}`,
                    headers: u.contentType ? {
                        "Content-Type": u.contentType
                    } : {},
                    query: g,
                    body: n
                })
            }
            eE = new WeakMap, eO = new WeakMap;
            var defaults = (e, t) => Object.keys(t).concat(Object.keys(e)).reduce((r, n) => (r[n] = typeof e[n] > "u" ? t[n] : e[n], r), {});
            let pick = (e, t) => t.reduce((t, r) => (typeof e[r] > "u" || (t[r] = e[r]), t), {}),
                ew = ["includePreviousRevision", "includeResult", "visibility", "effectFormat", "tag"],
                e_ = {
                    includeResult: !0
                };

            function _listen(e, t, n = {}) {
                let {
                    url: i,
                    token: o,
                    withCredentials: s,
                    requestTagPrefix: a
                } = this.config(), u = n.tag && a ? [a, n.tag].join(".") : n.tag, c = { ...defaults(n, e_),
                    tag: u
                }, l = pick(c, ew), f = encodeQueryString({
                    query: e,
                    params: t,
                    options: {
                        tag: u,
                        ...l
                    }
                }), p = `${i}${_getDataUrl(this,"listen",f)}`;
                if (p.length > 14800) return new L(e => e.error(Error("Query too large for listener")));
                let h = c.events ? c.events : ["mutation"],
                    d = -1 !== h.indexOf("reconnect"),
                    y = {};
                return (o || s) && (y.withCredentials = !0), o && (y.headers = {
                    Authorization: `Bearer ${o}`
                }), new L(e => {
                    let t;
                    getEventSource().then(e => {
                        t = e
                    }).catch(t => {
                        e.error(t), stop()
                    });
                    let n, i = !1;

                    function onError() {
                        i || (d && e.next({
                            type: "reconnect"
                        }), i || t.readyState !== t.CLOSED || (unsubscribe(), clearTimeout(n), n = setTimeout(open, 100)))
                    }

                    function onChannelError(t) {
                        e.error(function(e) {
                            if (e instanceof Error) return e;
                            let t = parseEvent(e);
                            return t instanceof Error ? t : Error(t.error ? t.error.description ? t.error.description : "string" == typeof t.error ? t.error : JSON.stringify(t.error, null, 2) : t.message || "Unknown listener error")
                        }(t))
                    }

                    function onMessage(t) {
                        let r = parseEvent(t);
                        return r instanceof Error ? e.error(r) : e.next(r)
                    }

                    function onDisconnect() {
                        i = !0, unsubscribe(), e.complete()
                    }

                    function unsubscribe() {
                        t && (t.removeEventListener("error", onError), t.removeEventListener("channelError", onChannelError), t.removeEventListener("disconnect", onDisconnect), h.forEach(e => t.removeEventListener(e, onMessage)), t.close())
                    }
                    async function getEventSource() {
                        let {
                            default: e
                        } = await r.e(5266).then(r.t.bind(r, 15266, 19)), t = new e(p, y);
                        return t.addEventListener("error", onError), t.addEventListener("channelError", onChannelError), t.addEventListener("disconnect", onDisconnect), h.forEach(e => t.addEventListener(e, onMessage)), t
                    }

                    function open() {
                        getEventSource().then(e => {
                            t = e
                        }).catch(t => {
                            e.error(t), stop()
                        })
                    }

                    function stop() {
                        i = !0, unsubscribe()
                    }
                    return stop
                })
            }

            function parseEvent(e) {
                try {
                    let t = e.data && JSON.parse(e.data) || {};
                    return Object.assign({
                        type: e.type
                    }, t)
                } catch (e) {
                    return e
                }
            }
            var eE, eO, eB, eS, __accessCheck$3 = (e, t, r) => {
                    if (!t.has(e)) throw TypeError("Cannot " + r)
                },
                __privateGet$3 = (e, t, r) => (__accessCheck$3(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
                __privateAdd$3 = (e, t, r) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, r)
                },
                __privateSet$3 = (e, t, r, n) => (__accessCheck$3(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
            let ObservableDatasetsClient = class ObservableDatasetsClient {
                constructor(e, t) {
                    __privateAdd$3(this, eB, void 0), __privateAdd$3(this, eS, void 0), __privateSet$3(this, eB, e), __privateSet$3(this, eS, t)
                }
                create(e, t) {
                    return _modify(__privateGet$3(this, eB), __privateGet$3(this, eS), "PUT", e, t)
                }
                edit(e, t) {
                    return _modify(__privateGet$3(this, eB), __privateGet$3(this, eS), "PATCH", e, t)
                }
                delete(e) {
                    return _modify(__privateGet$3(this, eB), __privateGet$3(this, eS), "DELETE", e)
                }
                list() {
                    return _request(__privateGet$3(this, eB), __privateGet$3(this, eS), {
                        uri: "/datasets",
                        tag: null
                    })
                }
            };
            eB = new WeakMap, eS = new WeakMap;
            let DatasetsClient = class DatasetsClient {
                constructor(e, t) {
                    __privateAdd$3(this, ex, void 0), __privateAdd$3(this, eC, void 0), __privateSet$3(this, ex, e), __privateSet$3(this, eC, t)
                }
                create(e, t) {
                    return lastValueFrom(_modify(__privateGet$3(this, ex), __privateGet$3(this, eC), "PUT", e, t))
                }
                edit(e, t) {
                    return lastValueFrom(_modify(__privateGet$3(this, ex), __privateGet$3(this, eC), "PATCH", e, t))
                }
                delete(e) {
                    return lastValueFrom(_modify(__privateGet$3(this, ex), __privateGet$3(this, eC), "DELETE", e))
                }
                list() {
                    return lastValueFrom(_request(__privateGet$3(this, ex), __privateGet$3(this, eC), {
                        uri: "/datasets",
                        tag: null
                    }))
                }
            };

            function _modify(e, t, r, n, i) {
                return dataset(n), _request(e, t, {
                    method: r,
                    uri: `/datasets/${n}`,
                    body: i,
                    tag: null
                })
            }
            ex = new WeakMap, eC = new WeakMap;
            var ex, eC, eI, ek, __accessCheck$2 = (e, t, r) => {
                    if (!t.has(e)) throw TypeError("Cannot " + r)
                },
                __privateGet$2 = (e, t, r) => (__accessCheck$2(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
                __privateAdd$2 = (e, t, r) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, r)
                },
                __privateSet$2 = (e, t, r, n) => (__accessCheck$2(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
            let ObservableProjectsClient = class ObservableProjectsClient {
                constructor(e, t) {
                    __privateAdd$2(this, eI, void 0), __privateAdd$2(this, ek, void 0), __privateSet$2(this, eI, e), __privateSet$2(this, ek, t)
                }
                list(e) {
                    let t = (null == e ? void 0 : e.includeMembers) === !1 ? "/projects?includeMembers=false" : "/projects";
                    return _request(__privateGet$2(this, eI), __privateGet$2(this, ek), {
                        uri: t
                    })
                }
                getById(e) {
                    return _request(__privateGet$2(this, eI), __privateGet$2(this, ek), {
                        uri: `/projects/${e}`
                    })
                }
            };
            eI = new WeakMap, ek = new WeakMap;
            let ProjectsClient = class ProjectsClient {
                constructor(e, t) {
                    __privateAdd$2(this, eT, void 0), __privateAdd$2(this, eA, void 0), __privateSet$2(this, eT, e), __privateSet$2(this, eA, t)
                }
                list(e) {
                    let t = (null == e ? void 0 : e.includeMembers) === !1 ? "/projects?includeMembers=false" : "/projects";
                    return lastValueFrom(_request(__privateGet$2(this, eT), __privateGet$2(this, eA), {
                        uri: t
                    }))
                }
                getById(e) {
                    return lastValueFrom(_request(__privateGet$2(this, eT), __privateGet$2(this, eA), {
                        uri: `/projects/${e}`
                    }))
                }
            };
            eT = new WeakMap, eA = new WeakMap;
            var eT, eA, e$, ej, __accessCheck$1 = (e, t, r) => {
                    if (!t.has(e)) throw TypeError("Cannot " + r)
                },
                __privateGet$1 = (e, t, r) => (__accessCheck$1(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
                __privateAdd$1 = (e, t, r) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, r)
                },
                __privateSet$1 = (e, t, r, n) => (__accessCheck$1(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
            let ObservableUsersClient = class ObservableUsersClient {
                constructor(e, t) {
                    __privateAdd$1(this, e$, void 0), __privateAdd$1(this, ej, void 0), __privateSet$1(this, e$, e), __privateSet$1(this, ej, t)
                }
                getById(e) {
                    return _request(__privateGet$1(this, e$), __privateGet$1(this, ej), {
                        uri: `/users/${e}`
                    })
                }
            };
            e$ = new WeakMap, ej = new WeakMap;
            let UsersClient = class UsersClient {
                constructor(e, t) {
                    __privateAdd$1(this, eM, void 0), __privateAdd$1(this, eP, void 0), __privateSet$1(this, eM, e), __privateSet$1(this, eP, t)
                }
                getById(e) {
                    return lastValueFrom(_request(__privateGet$1(this, eM), __privateGet$1(this, eP), {
                        uri: `/users/${e}`
                    }))
                }
            };
            eM = new WeakMap, eP = new WeakMap;
            var eM, eP, eR, eD, browserMiddleware_accessCheck = (e, t, r) => {
                    if (!t.has(e)) throw TypeError("Cannot " + r)
                },
                browserMiddleware_privateGet = (e, t, r) => (browserMiddleware_accessCheck(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
                browserMiddleware_privateAdd = (e, t, r) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, r)
                },
                browserMiddleware_privateSet = (e, t, r, n) => (browserMiddleware_accessCheck(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
            let eU = class _ObservableSanityClient2 {
                constructor(e, t = es) {
                    browserMiddleware_privateAdd(this, eR, void 0), browserMiddleware_privateAdd(this, eD, void 0), this.listen = _listen, this.config(t), browserMiddleware_privateSet(this, eD, e), this.assets = new ObservableAssetsClient(this, browserMiddleware_privateGet(this, eD)), this.datasets = new ObservableDatasetsClient(this, browserMiddleware_privateGet(this, eD)), this.projects = new ObservableProjectsClient(this, browserMiddleware_privateGet(this, eD)), this.users = new ObservableUsersClient(this, browserMiddleware_privateGet(this, eD))
                }
                clone() {
                    return new _ObservableSanityClient2(browserMiddleware_privateGet(this, eD), this.config())
                }
                config(e) {
                    if (void 0 === e) return { ...browserMiddleware_privateGet(this, eR)
                    };
                    if (browserMiddleware_privateGet(this, eR) && !1 === browserMiddleware_privateGet(this, eR).allowReconfigure) throw Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
                    return browserMiddleware_privateSet(this, eR, initConfig(e, browserMiddleware_privateGet(this, eR) || {})), this
                }
                withConfig(e) {
                    let t = this.config();
                    return new _ObservableSanityClient2(browserMiddleware_privateGet(this, eD), { ...t,
                        ...e,
                        stega: { ...t.stega || {},
                            ..."boolean" == typeof(null == e ? void 0 : e.stega) ? {
                                enabled: e.stega
                            } : (null == e ? void 0 : e.stega) || {}
                        }
                    })
                }
                fetch(e, t, r) {
                    return _fetch(this, browserMiddleware_privateGet(this, eD), browserMiddleware_privateGet(this, eR).stega, e, t, r)
                }
                getDocument(e, t) {
                    return _getDocument(this, browserMiddleware_privateGet(this, eD), e, t)
                }
                getDocuments(e, t) {
                    return _getDocuments(this, browserMiddleware_privateGet(this, eD), e, t)
                }
                create(e, t) {
                    return _create(this, browserMiddleware_privateGet(this, eD), e, "create", t)
                }
                createIfNotExists(e, t) {
                    return _createIfNotExists(this, browserMiddleware_privateGet(this, eD), e, t)
                }
                createOrReplace(e, t) {
                    return _createOrReplace(this, browserMiddleware_privateGet(this, eD), e, t)
                }
                delete(e, t) {
                    return _delete(this, browserMiddleware_privateGet(this, eD), e, t)
                }
                mutate(e, t) {
                    return _mutate(this, browserMiddleware_privateGet(this, eD), e, t)
                }
                patch(e, t) {
                    return new Q(e, t, this)
                }
                transaction(e) {
                    return new ee(e, this)
                }
                request(e) {
                    return _request(this, browserMiddleware_privateGet(this, eD), e)
                }
                getUrl(e, t) {
                    return _getUrl(this, e, t)
                }
                getDataUrl(e, t) {
                    return _getDataUrl(this, e, t)
                }
            };
            eR = new WeakMap, eD = new WeakMap;
            let eF = class _SanityClient2 {
                constructor(e, t = es) {
                    browserMiddleware_privateAdd(this, s, void 0), browserMiddleware_privateAdd(this, a, void 0), this.listen = _listen, this.config(t), browserMiddleware_privateSet(this, a, e), this.assets = new AssetsClient(this, browserMiddleware_privateGet(this, a)), this.datasets = new DatasetsClient(this, browserMiddleware_privateGet(this, a)), this.projects = new ProjectsClient(this, browserMiddleware_privateGet(this, a)), this.users = new UsersClient(this, browserMiddleware_privateGet(this, a)), this.observable = new eU(e, t)
                }
                clone() {
                    return new _SanityClient2(browserMiddleware_privateGet(this, a), this.config())
                }
                config(e) {
                    if (void 0 === e) return { ...browserMiddleware_privateGet(this, s)
                    };
                    if (browserMiddleware_privateGet(this, s) && !1 === browserMiddleware_privateGet(this, s).allowReconfigure) throw Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
                    return this.observable && this.observable.config(e), browserMiddleware_privateSet(this, s, initConfig(e, browserMiddleware_privateGet(this, s) || {})), this
                }
                withConfig(e) {
                    let t = this.config();
                    return new _SanityClient2(browserMiddleware_privateGet(this, a), { ...t,
                        ...e,
                        stega: { ...t.stega || {},
                            ..."boolean" == typeof(null == e ? void 0 : e.stega) ? {
                                enabled: e.stega
                            } : (null == e ? void 0 : e.stega) || {}
                        }
                    })
                }
                fetch(e, t, r) {
                    return lastValueFrom(_fetch(this, browserMiddleware_privateGet(this, a), browserMiddleware_privateGet(this, s).stega, e, t, r))
                }
                getDocument(e, t) {
                    return lastValueFrom(_getDocument(this, browserMiddleware_privateGet(this, a), e, t))
                }
                getDocuments(e, t) {
                    return lastValueFrom(_getDocuments(this, browserMiddleware_privateGet(this, a), e, t))
                }
                create(e, t) {
                    return lastValueFrom(_create(this, browserMiddleware_privateGet(this, a), e, "create", t))
                }
                createIfNotExists(e, t) {
                    return lastValueFrom(_createIfNotExists(this, browserMiddleware_privateGet(this, a), e, t))
                }
                createOrReplace(e, t) {
                    return lastValueFrom(_createOrReplace(this, browserMiddleware_privateGet(this, a), e, t))
                }
                delete(e, t) {
                    return lastValueFrom(_delete(this, browserMiddleware_privateGet(this, a), e, t))
                }
                mutate(e, t) {
                    return lastValueFrom(_mutate(this, browserMiddleware_privateGet(this, a), e, t))
                }
                patch(e, t) {
                    return new K(e, t, this)
                }
                transaction(e) {
                    return new Z(e, this)
                }
                request(e) {
                    return lastValueFrom(_request(this, browserMiddleware_privateGet(this, a), e))
                }
                dataRequest(e, t, r) {
                    return lastValueFrom(_dataRequest(this, browserMiddleware_privateGet(this, a), e, t, r))
                }
                getUrl(e, t) {
                    return _getUrl(this, e, t)
                }
                getDataUrl(e, t) {
                    return _getDataUrl(this, e, t)
                }
            };
            s = new WeakMap, a = new WeakMap;
            let eL = eF;

            function defineCreateClientExports(e, t) {
                return {
                    requester: defineHttpRequest(e, {}).defaultRequester,
                    createClient: r => new t(defineHttpRequest(e, {
                        maxRetries: r.maxRetries,
                        retryDelay: r.retryDelay
                    }), r)
                }
            }
            var eN = []
        },
        4719: function(e, t, r) {
            "use strict";
            r.d(t, {
                eI: function() {
                    return o
                }
            });
            var n = r(4200);
            let i = (0, n.d)(n.e, n.S),
                o = (i.requester, i.createClient)
        },
        97520: function(e, t, r) {
            "use strict";
            r.d(t, {
                J: function() {
                    return useNextSanityImage
                }
            });
            var n = r(6662),
                i = r(2265);
            let DEFAULT_IMAGE_BUILDER = (e, t) => {
                let r = e.quality(t.quality || 75).fit("clip");
                return null !== t.width ? r.width(t.width) : r
            };

            function useNextSanityImage(e, t, r) {
                let o = (null == r ? void 0 : r.imageBuilder) || DEFAULT_IMAGE_BUILDER;
                return (0, i.useMemo)(() => {
                    if (!t) return null;
                    let r = t ? "string" == typeof t ? t : t.asset ? t.asset._ref || t.asset._id : t._ref || t._id || "" : null;
                    if (!r) return null;
                    let i = function(e) {
                            let t = e.split("-")[2],
                                [r, n] = t.split("x").map(e => parseInt(e, 10));
                            return {
                                width: r,
                                height: n,
                                aspectRatio: r / n
                            }
                        }(r),
                        s = function(e, t) {
                            let r = e.crop;
                            if (!r) return t;
                            let {
                                width: n,
                                height: i
                            } = t, o = n * (1 - (r.left + r.right)), s = i * (1 - (r.top + r.bottom));
                            return {
                                width: o,
                                height: s,
                                aspectRatio: o / s
                            }
                        }(t, i),
                        a = o(n(e).image(t).auto("format"), {
                            width: null,
                            originalImageDimensions: i,
                            croppedImageDimensions: s,
                            quality: null
                        }),
                        u = a.options.width || (a.options.maxWidth ? Math.min(a.options.maxWidth, s.width) : s.width),
                        c = a.options.height || (a.options.maxHeight ? Math.min(a.options.maxHeight, s.height) : Math.round(u / s.aspectRatio));
                    return {
                        loader: r => {
                            let {
                                width: a,
                                quality: u
                            } = r;
                            return o(n(e).image(t).auto("format"), {
                                width: a,
                                originalImageDimensions: i,
                                croppedImageDimensions: s,
                                quality: u || null
                            }).url() || ""
                        },
                        src: a.url(),
                        width: u,
                        height: c
                    }
                }, [o, t, e])
            }
        }
    }
]);