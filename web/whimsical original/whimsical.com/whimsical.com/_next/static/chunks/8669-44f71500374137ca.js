(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8669], {
        12451: function(e) {
            function stdOnEnd(e, t) {
                e.onload = function() {
                    this.onerror = this.onload = null, t(null, e)
                }, e.onerror = function() {
                    this.onerror = this.onload = null, t(Error("Failed to load " + this.src), e)
                }
            }
            e.exports = function(e, t, r) {
                var i = document.head || document.getElementsByTagName("head")[0],
                    o = document.createElement("script");
                "function" == typeof t && (r = t, t = {}), t = t || {}, r = r || function() {}, o.type = t.type || "text/javascript", o.charset = t.charset || "utf8", o.async = !("async" in t) || !!t.async, o.src = e, t.attrs && function(e, t) {
                    for (var r in t) e.setAttribute(r, t[r])
                }(o, t.attrs), t.text && (o.text = "" + t.text), ("onload" in o ? stdOnEnd : function(e, t) {
                    e.onreadystatechange = function() {
                        ("complete" == this.readyState || "loaded" == this.readyState) && (this.onreadystatechange = null, t(null, e))
                    }
                })(o, r), o.onload || stdOnEnd(o, r), i.appendChild(o)
            }
        },
        82104: function(e, t, r) {
            "use strict";
            r.r(t);
            var i = Number.isNaN || function(e) {
                return "number" == typeof e && e != e
            };

            function areInputsEqual(e, t) {
                if (e.length !== t.length) return !1;
                for (var r, o, n = 0; n < e.length; n++)
                    if (!((r = e[n]) === (o = t[n]) || i(r) && i(o))) return !1;
                return !0
            }
            t.default = function(e, t) {
                void 0 === t && (t = areInputsEqual);
                var r, i, o = [],
                    n = !1;
                return function() {
                    for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
                    return n && r === this && t(a, o) || (i = e.apply(this, a), n = !0, r = this, o = a), i
                }
            }
        },
        33018: function(e, t, r) {
            "use strict";
            var i = r(61289);

            function emptyFunction() {}

            function emptyFunctionWithReset() {}
            emptyFunctionWithReset.resetWarningCache = emptyFunction, e.exports = function() {
                function shim(e, t, r, o, n, a) {
                    if (a !== i) {
                        var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function getShim() {
                    return shim
                }
                shim.isRequired = shim;
                var e = {
                    array: shim,
                    bigint: shim,
                    bool: shim,
                    func: shim,
                    number: shim,
                    object: shim,
                    string: shim,
                    symbol: shim,
                    any: shim,
                    arrayOf: getShim,
                    element: shim,
                    elementType: shim,
                    instanceOf: getShim,
                    node: shim,
                    objectOf: getShim,
                    oneOf: getShim,
                    oneOfType: getShim,
                    shape: getShim,
                    exact: getShim,
                    checkPropTypes: emptyFunctionWithReset,
                    resetWarningCache: emptyFunction
                };
                return e.PropTypes = e, e
            }
        },
        74275: function(e, t, r) {
            e.exports = r(33018)()
        },
        61289: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        6137: function(e, t, r) {
            var i = Object.create,
                o = Object.defineProperty,
                n = Object.getOwnPropertyDescriptor,
                a = Object.getOwnPropertyNames,
                s = Object.getPrototypeOf,
                u = Object.prototype.hasOwnProperty,
                __defNormalProp = (e, t, r) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                __copyProps = (e, t, r, i) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let s of a(t)) u.call(e, s) || s === r || o(e, s, {
                            get: () => t[s],
                            enumerable: !(i = n(t, s)) || i.enumerable
                        });
                    return e
                },
                __toESM = (e, t, r) => (r = null != e ? i(s(e)) : {}, __copyProps(!t && e && e.__esModule ? r : o(r, "default", {
                    value: e,
                    enumerable: !0
                }), e)),
                __publicField = (e, t, r) => (__defNormalProp(e, "symbol" != typeof t ? t + "" : t, r), r),
                p = {};
            ((e, t) => {
                for (var r in t) o(e, r, {
                    get: t[r],
                    enumerable: !0
                })
            })(p, {
                default: () => Player
            }), e.exports = __copyProps(o({}, "__esModule", {
                value: !0
            }), p);
            var d = __toESM(r(2265)),
                y = __toESM(r(66656)),
                h = r(42728),
                b = r(74117);
            let Player = class Player extends d.Component {
                constructor() {
                    super(...arguments), __publicField(this, "mounted", !1), __publicField(this, "isReady", !1), __publicField(this, "isPlaying", !1), __publicField(this, "isLoading", !0), __publicField(this, "loadOnReady", null), __publicField(this, "startOnPlay", !0), __publicField(this, "seekOnPlay", null), __publicField(this, "onDurationCalled", !1), __publicField(this, "handlePlayerMount", e => {
                        if (this.player) {
                            this.progress();
                            return
                        }
                        this.player = e, this.player.load(this.props.url), this.progress()
                    }), __publicField(this, "getInternalPlayer", e => this.player ? this.player[e] : null), __publicField(this, "progress", () => {
                        if (this.props.url && this.player && this.isReady) {
                            let e = this.getCurrentTime() || 0,
                                t = this.getSecondsLoaded(),
                                r = this.getDuration();
                            if (r) {
                                let i = {
                                    playedSeconds: e,
                                    played: e / r
                                };
                                null !== t && (i.loadedSeconds = t, i.loaded = t / r), (i.playedSeconds !== this.prevPlayed || i.loadedSeconds !== this.prevLoaded) && this.props.onProgress(i), this.prevPlayed = i.playedSeconds, this.prevLoaded = i.loadedSeconds
                            }
                        }
                        this.progressTimeout = setTimeout(this.progress, this.props.progressFrequency || this.props.progressInterval)
                    }), __publicField(this, "handleReady", () => {
                        if (!this.mounted) return;
                        this.isReady = !0, this.isLoading = !1;
                        let {
                            onReady: e,
                            playing: t,
                            volume: r,
                            muted: i
                        } = this.props;
                        e(), i || null === r || this.player.setVolume(r), this.loadOnReady ? (this.player.load(this.loadOnReady, !0), this.loadOnReady = null) : t && this.player.play(), this.handleDurationCheck()
                    }), __publicField(this, "handlePlay", () => {
                        this.isPlaying = !0, this.isLoading = !1;
                        let {
                            onStart: e,
                            onPlay: t,
                            playbackRate: r
                        } = this.props;
                        this.startOnPlay && (this.player.setPlaybackRate && 1 !== r && this.player.setPlaybackRate(r), e(), this.startOnPlay = !1), t(), this.seekOnPlay && (this.seekTo(this.seekOnPlay), this.seekOnPlay = null), this.handleDurationCheck()
                    }), __publicField(this, "handlePause", e => {
                        this.isPlaying = !1, this.isLoading || this.props.onPause(e)
                    }), __publicField(this, "handleEnded", () => {
                        let {
                            activePlayer: e,
                            loop: t,
                            onEnded: r
                        } = this.props;
                        e.loopOnEnded && t && this.seekTo(0), t || (this.isPlaying = !1, r())
                    }), __publicField(this, "handleError", (...e) => {
                        this.isLoading = !1, this.props.onError(...e)
                    }), __publicField(this, "handleDurationCheck", () => {
                        clearTimeout(this.durationCheckTimeout);
                        let e = this.getDuration();
                        e ? this.onDurationCalled || (this.props.onDuration(e), this.onDurationCalled = !0) : this.durationCheckTimeout = setTimeout(this.handleDurationCheck, 100)
                    }), __publicField(this, "handleLoaded", () => {
                        this.isLoading = !1
                    })
                }
                componentDidMount() {
                    this.mounted = !0
                }
                componentWillUnmount() {
                    clearTimeout(this.progressTimeout), clearTimeout(this.durationCheckTimeout), this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()), this.mounted = !1
                }
                componentDidUpdate(e) {
                    if (!this.player) return;
                    let {
                        url: t,
                        playing: r,
                        volume: i,
                        muted: o,
                        playbackRate: n,
                        pip: a,
                        loop: s,
                        activePlayer: u,
                        disableDeferredLoading: p
                    } = this.props;
                    if (!(0, y.default)(e.url, t)) {
                        if (this.isLoading && !u.forceLoad && !p && !(0, b.isMediaStream)(t)) {
                            console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`), this.loadOnReady = t;
                            return
                        }
                        this.isLoading = !0, this.startOnPlay = !0, this.onDurationCalled = !1, this.player.load(t, this.isReady)
                    }
                    e.playing || !r || this.isPlaying || this.player.play(), e.playing && !r && this.isPlaying && this.player.pause(), !e.pip && a && this.player.enablePIP && this.player.enablePIP(), e.pip && !a && this.player.disablePIP && this.player.disablePIP(), e.volume !== i && null !== i && this.player.setVolume(i), e.muted !== o && (o ? this.player.mute() : (this.player.unmute(), null !== i && setTimeout(() => this.player.setVolume(i)))), e.playbackRate !== n && this.player.setPlaybackRate && this.player.setPlaybackRate(n), e.loop !== s && this.player.setLoop && this.player.setLoop(s)
                }
                getDuration() {
                    return this.isReady ? this.player.getDuration() : null
                }
                getCurrentTime() {
                    return this.isReady ? this.player.getCurrentTime() : null
                }
                getSecondsLoaded() {
                    return this.isReady ? this.player.getSecondsLoaded() : null
                }
                seekTo(e, t, r) {
                    if (!this.isReady) {
                        0 !== e && (this.seekOnPlay = e, setTimeout(() => {
                            this.seekOnPlay = null
                        }, 5e3));
                        return
                    }
                    let i = t ? "fraction" === t : e > 0 && e < 1;
                    if (i) {
                        let t = this.player.getDuration();
                        if (!t) {
                            console.warn("ReactPlayer: could not seek using fraction –\xa0duration not yet available");
                            return
                        }
                        this.player.seekTo(t * e, r);
                        return
                    }
                    this.player.seekTo(e, r)
                }
                render() {
                    let e = this.props.activePlayer;
                    return e ? d.default.createElement(e, { ...this.props,
                        onMount: this.handlePlayerMount,
                        onReady: this.handleReady,
                        onPlay: this.handlePlay,
                        onPause: this.handlePause,
                        onEnded: this.handleEnded,
                        onLoaded: this.handleLoaded,
                        onError: this.handleError
                    }) : null
                }
            };
            __publicField(Player, "displayName", "Player"), __publicField(Player, "propTypes", h.propTypes), __publicField(Player, "defaultProps", h.defaultProps)
        },
        73564: function(e, t, r) {
            var i = Object.create,
                o = Object.defineProperty,
                n = Object.getOwnPropertyDescriptor,
                a = Object.getOwnPropertyNames,
                s = Object.getPrototypeOf,
                u = Object.prototype.hasOwnProperty,
                __defNormalProp = (e, t, r) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                __copyProps = (e, t, r, i) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let s of a(t)) u.call(e, s) || s === r || o(e, s, {
                            get: () => t[s],
                            enumerable: !(i = n(t, s)) || i.enumerable
                        });
                    return e
                },
                __toESM = (e, t, r) => (r = null != e ? i(s(e)) : {}, __copyProps(!t && e && e.__esModule ? r : o(r, "default", {
                    value: e,
                    enumerable: !0
                }), e)),
                __publicField = (e, t, r) => (__defNormalProp(e, "symbol" != typeof t ? t + "" : t, r), r),
                p = {};
            ((e, t) => {
                for (var r in t) o(e, r, {
                    get: t[r],
                    enumerable: !0
                })
            })(p, {
                createReactPlayer: () => createReactPlayer
            }), e.exports = __copyProps(o({}, "__esModule", {
                value: !0
            }), p);
            var d = __toESM(r(2265)),
                y = __toESM(r(68346)),
                h = __toESM(r(82104)),
                b = __toESM(r(66656)),
                _ = r(42728),
                g = r(74117),
                P = __toESM(r(6137));
            let w = (0, g.lazy)(() => r.e(7664).then(r.t.bind(r, 15518, 23))),
                O = "undefined" != typeof window && window.document && "undefined" != typeof document,
                v = void 0 !== r.g && r.g.window && r.g.window.document,
                S = Object.keys(_.propTypes),
                T = O || v ? d.Suspense : () => null,
                E = [],
                createReactPlayer = (e, t) => {
                    var r;
                    return r = class extends d.Component {
                        constructor() {
                            super(...arguments), __publicField(this, "state", {
                                showPreview: !!this.props.light
                            }), __publicField(this, "references", {
                                wrapper: e => {
                                    this.wrapper = e
                                },
                                player: e => {
                                    this.player = e
                                }
                            }), __publicField(this, "handleClickPreview", e => {
                                this.setState({
                                    showPreview: !1
                                }), this.props.onClickPreview(e)
                            }), __publicField(this, "showPreview", () => {
                                this.setState({
                                    showPreview: !0
                                })
                            }), __publicField(this, "getDuration", () => this.player ? this.player.getDuration() : null), __publicField(this, "getCurrentTime", () => this.player ? this.player.getCurrentTime() : null), __publicField(this, "getSecondsLoaded", () => this.player ? this.player.getSecondsLoaded() : null), __publicField(this, "getInternalPlayer", (e = "player") => this.player ? this.player.getInternalPlayer(e) : null), __publicField(this, "seekTo", (e, t, r) => {
                                if (!this.player) return null;
                                this.player.seekTo(e, t, r)
                            }), __publicField(this, "handleReady", () => {
                                this.props.onReady(this)
                            }), __publicField(this, "getActivePlayer", (0, h.default)(r => {
                                for (let t of [...E, ...e])
                                    if (t.canPlay(r)) return t;
                                return t || null
                            })), __publicField(this, "getConfig", (0, h.default)((e, t) => {
                                let {
                                    config: r
                                } = this.props;
                                return y.default.all([_.defaultProps.config, _.defaultProps.config[t] || {}, r, r[t] || {}])
                            })), __publicField(this, "getAttributes", (0, h.default)(e => (0, g.omit)(this.props, S))), __publicField(this, "renderActivePlayer", e => {
                                if (!e) return null;
                                let t = this.getActivePlayer(e);
                                if (!t) return null;
                                let r = this.getConfig(e, t.key);
                                return d.default.createElement(P.default, { ...this.props,
                                    key: t.key,
                                    ref: this.references.player,
                                    config: r,
                                    activePlayer: t.lazyPlayer || t,
                                    onReady: this.handleReady
                                })
                            })
                        }
                        shouldComponentUpdate(e, t) {
                            return !(0, b.default)(this.props, e) || !(0, b.default)(this.state, t)
                        }
                        componentDidUpdate(e) {
                            let {
                                light: t
                            } = this.props;
                            !e.light && t && this.setState({
                                showPreview: !0
                            }), e.light && !t && this.setState({
                                showPreview: !1
                            })
                        }
                        renderPreview(e) {
                            if (!e) return null;
                            let {
                                light: t,
                                playIcon: r,
                                previewTabIndex: i,
                                oEmbedUrl: o,
                                previewAriaLabel: n
                            } = this.props;
                            return d.default.createElement(w, {
                                url: e,
                                light: t,
                                playIcon: r,
                                previewTabIndex: i,
                                previewAriaLabel: n,
                                oEmbedUrl: o,
                                onClick: this.handleClickPreview
                            })
                        }
                        render() {
                            let {
                                url: e,
                                style: t,
                                width: r,
                                height: i,
                                fallback: o,
                                wrapper: n
                            } = this.props, {
                                showPreview: a
                            } = this.state, s = this.getAttributes(e), u = "string" == typeof n ? this.references.wrapper : void 0;
                            return d.default.createElement(n, {
                                ref: u,
                                style: { ...t,
                                    width: r,
                                    height: i
                                },
                                ...s
                            }, d.default.createElement(T, {
                                fallback: o
                            }, a ? this.renderPreview(e) : this.renderActivePlayer(e)))
                        }
                    }, __publicField(r, "displayName", "ReactPlayer"), __publicField(r, "propTypes", _.propTypes), __publicField(r, "defaultProps", _.defaultProps), __publicField(r, "addCustomPlayer", e => {
                        E.push(e)
                    }), __publicField(r, "removeCustomPlayers", () => {
                        E.length = 0
                    }), __publicField(r, "canPlay", t => {
                        for (let r of [...E, ...e])
                            if (r.canPlay(t)) return !0;
                        return !1
                    }), __publicField(r, "canEnablePIP", t => {
                        for (let r of [...E, ...e])
                            if (r.canEnablePIP && r.canEnablePIP(t)) return !0;
                        return !1
                    }), r
                }
        },
        65087: function(e, t, r) {
            var i = Object.defineProperty,
                o = Object.getOwnPropertyDescriptor,
                n = Object.getOwnPropertyNames,
                a = Object.prototype.hasOwnProperty,
                s = {};
            ((e, t) => {
                for (var r in t) i(e, r, {
                    get: t[r],
                    enumerable: !0
                })
            })(s, {
                AUDIO_EXTENSIONS: () => k,
                DASH_EXTENSIONS: () => j,
                FLV_EXTENSIONS: () => R,
                HLS_EXTENSIONS: () => C,
                MATCH_URL_DAILYMOTION: () => v,
                MATCH_URL_FACEBOOK: () => b,
                MATCH_URL_FACEBOOK_WATCH: () => _,
                MATCH_URL_KALTURA: () => E,
                MATCH_URL_MIXCLOUD: () => S,
                MATCH_URL_MUX: () => h,
                MATCH_URL_SOUNDCLOUD: () => d,
                MATCH_URL_STREAMABLE: () => g,
                MATCH_URL_TWITCH_CHANNEL: () => O,
                MATCH_URL_TWITCH_VIDEO: () => w,
                MATCH_URL_VIDYARD: () => T,
                MATCH_URL_VIMEO: () => y,
                MATCH_URL_WISTIA: () => P,
                MATCH_URL_YOUTUBE: () => p,
                VIDEO_EXTENSIONS: () => M,
                canPlay: () => F
            }), e.exports = ((e, t, r, s) => {
                if (t && "object" == typeof t || "function" == typeof t)
                    for (let r of n(t)) a.call(e, r) || void 0 === r || i(e, r, {
                        get: () => t[r],
                        enumerable: !(s = o(t, r)) || s.enumerable
                    });
                return e
            })(i({}, "__esModule", {
                value: !0
            }), s);
            var u = r(74117);
            let p = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
                d = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/,
                y = /vimeo\.com\/(?!progressive_redirect).+/,
                h = /stream\.mux\.com\/(\w+)/,
                b = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,
                _ = /^https?:\/\/fb\.watch\/.+$/,
                g = /streamable\.com\/([a-z0-9]+)$/,
                P = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
                w = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,
                O = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,
                v = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,
                S = /mixcloud\.com\/([^/]+\/[^/]+)/,
                T = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,
                E = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,
                k = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
                M = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
                C = /\.(m3u8)($|\?)/i,
                j = /\.(mpd)($|\?)/i,
                R = /\.(flv)($|\?)/i,
                canPlayFile = e => {
                    if (e instanceof Array) {
                        for (let t of e)
                            if ("string" == typeof t && canPlayFile(t) || canPlayFile(t.src)) return !0;
                        return !1
                    }
                    return !!((0, u.isMediaStream)(e) || (0, u.isBlobUrl)(e)) || k.test(e) || M.test(e) || C.test(e) || j.test(e) || R.test(e)
                },
                F = {
                    youtube: e => e instanceof Array ? e.every(e => p.test(e)) : p.test(e),
                    soundcloud: e => d.test(e) && !k.test(e),
                    vimeo: e => y.test(e) && !M.test(e) && !C.test(e),
                    mux: e => h.test(e),
                    facebook: e => b.test(e) || _.test(e),
                    streamable: e => g.test(e),
                    wistia: e => P.test(e),
                    twitch: e => w.test(e) || O.test(e),
                    dailymotion: e => v.test(e),
                    mixcloud: e => S.test(e),
                    vidyard: e => T.test(e),
                    kaltura: e => E.test(e),
                    file: canPlayFile
                }
        },
        64e3: function(e, t, r) {
            var i, o, n = Object.create,
                a = Object.defineProperty,
                s = Object.getOwnPropertyDescriptor,
                u = Object.getOwnPropertyNames,
                p = Object.getPrototypeOf,
                d = Object.prototype.hasOwnProperty,
                __defNormalProp = (e, t, r) => t in e ? a(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                __copyProps = (e, t, r, i) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let o of u(t)) d.call(e, o) || o === r || a(e, o, {
                            get: () => t[o],
                            enumerable: !(i = s(t, o)) || i.enumerable
                        });
                    return e
                },
                __publicField = (e, t, r) => (__defNormalProp(e, "symbol" != typeof t ? t + "" : t, r), r),
                y = {};
            ((e, t) => {
                for (var r in t) a(e, r, {
                    get: t[r],
                    enumerable: !0
                })
            })(y, {
                default: () => YouTube
            }), e.exports = __copyProps(a({}, "__esModule", {
                value: !0
            }), y);
            var h = (o = null != (i = r(2265)) ? n(p(i)) : {}, __copyProps(i && i.__esModule ? o : a(o, "default", {
                    value: i,
                    enumerable: !0
                }), i)),
                b = r(74117),
                _ = r(65087);
            let g = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,
                P = /user\/([a-zA-Z0-9_-]+)\/?/,
                w = /youtube-nocookie\.com/;
            let YouTube = class YouTube extends h.Component {
                constructor() {
                    super(...arguments), __publicField(this, "callPlayer", b.callPlayer), __publicField(this, "parsePlaylist", e => {
                        if (e instanceof Array) return {
                            listType: "playlist",
                            playlist: e.map(this.getID).join(",")
                        };
                        if (g.test(e)) {
                            let [, t] = e.match(g);
                            return {
                                listType: "playlist",
                                list: t.replace(/^UC/, "UU")
                            }
                        }
                        if (P.test(e)) {
                            let [, t] = e.match(P);
                            return {
                                listType: "user_uploads",
                                list: t
                            }
                        }
                        return {}
                    }), __publicField(this, "onStateChange", e => {
                        let {
                            data: t
                        } = e, {
                            onPlay: r,
                            onPause: i,
                            onBuffer: o,
                            onBufferEnd: n,
                            onEnded: a,
                            onReady: s,
                            loop: u,
                            config: {
                                playerVars: p,
                                onUnstarted: d
                            }
                        } = this.props, {
                            UNSTARTED: y,
                            PLAYING: h,
                            PAUSED: b,
                            BUFFERING: _,
                            ENDED: g,
                            CUED: P
                        } = window.YT.PlayerState;
                        if (t === y && d(), t === h && (r(), n()), t === b && i(), t === _ && o(), t === g) {
                            let e = !!this.callPlayer("getPlaylist");
                            u && !e && (p.start ? this.seekTo(p.start) : this.play()), a()
                        }
                        t === P && s()
                    }), __publicField(this, "mute", () => {
                        this.callPlayer("mute")
                    }), __publicField(this, "unmute", () => {
                        this.callPlayer("unMute")
                    }), __publicField(this, "ref", e => {
                        this.container = e
                    })
                }
                componentDidMount() {
                    this.props.onMount && this.props.onMount(this)
                }
                getID(e) {
                    return !e || e instanceof Array || g.test(e) ? null : e.match(_.MATCH_URL_YOUTUBE)[1]
                }
                load(e, t) {
                    let {
                        playing: r,
                        muted: i,
                        playsinline: o,
                        controls: n,
                        loop: a,
                        config: s,
                        onError: u
                    } = this.props, {
                        playerVars: p,
                        embedOptions: d
                    } = s, y = this.getID(e);
                    if (t) {
                        if (g.test(e) || P.test(e) || e instanceof Array) {
                            this.player.loadPlaylist(this.parsePlaylist(e));
                            return
                        }
                        this.player.cueVideoById({
                            videoId: y,
                            startSeconds: (0, b.parseStartTime)(e) || p.start,
                            endSeconds: (0, b.parseEndTime)(e) || p.end
                        });
                        return
                    }(0, b.getSDK)("https://www.youtube.com/iframe_api", "YT", "onYouTubeIframeAPIReady", e => e.loaded).then(t => {
                        this.container && (this.player = new t.Player(this.container, {
                            width: "100%",
                            height: "100%",
                            videoId: y,
                            playerVars: {
                                autoplay: r ? 1 : 0,
                                mute: i ? 1 : 0,
                                controls: n ? 1 : 0,
                                start: (0, b.parseStartTime)(e),
                                end: (0, b.parseEndTime)(e),
                                origin: window.location.origin,
                                playsinline: o ? 1 : 0,
                                ...this.parsePlaylist(e),
                                ...p
                            },
                            events: {
                                onReady: () => {
                                    a && this.player.setLoop(!0), this.props.onReady()
                                },
                                onPlaybackRateChange: e => this.props.onPlaybackRateChange(e.data),
                                onPlaybackQualityChange: e => this.props.onPlaybackQualityChange(e),
                                onStateChange: this.onStateChange,
                                onError: e => u(e.data)
                            },
                            host: w.test(e) ? "https://www.youtube-nocookie.com" : void 0,
                            ...d
                        }))
                    }, u), d.events && console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")
                }
                play() {
                    this.callPlayer("playVideo")
                }
                pause() {
                    this.callPlayer("pauseVideo")
                }
                stop() {
                    document.body.contains(this.callPlayer("getIframe")) && this.callPlayer("stopVideo")
                }
                seekTo(e, t = !1) {
                    this.callPlayer("seekTo", e), t || this.props.playing || this.pause()
                }
                setVolume(e) {
                    this.callPlayer("setVolume", 100 * e)
                }
                setPlaybackRate(e) {
                    this.callPlayer("setPlaybackRate", e)
                }
                setLoop(e) {
                    this.callPlayer("setLoop", e)
                }
                getDuration() {
                    return this.callPlayer("getDuration")
                }
                getCurrentTime() {
                    return this.callPlayer("getCurrentTime")
                }
                getSecondsLoaded() {
                    return this.callPlayer("getVideoLoadedFraction") * this.getDuration()
                }
                render() {
                    let {
                        display: e
                    } = this.props;
                    return h.default.createElement("div", {
                        style: {
                            width: "100%",
                            height: "100%",
                            display: e
                        }
                    }, h.default.createElement("div", {
                        ref: this.ref
                    }))
                }
            };
            __publicField(YouTube, "displayName", "YouTube"), __publicField(YouTube, "canPlay", _.canPlay.youtube)
        },
        42728: function(e, t, r) {
            var i, o, n = Object.create,
                a = Object.defineProperty,
                s = Object.getOwnPropertyDescriptor,
                u = Object.getOwnPropertyNames,
                p = Object.getPrototypeOf,
                d = Object.prototype.hasOwnProperty,
                __copyProps = (e, t, r, i) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let o of u(t)) d.call(e, o) || o === r || a(e, o, {
                            get: () => t[o],
                            enumerable: !(i = s(t, o)) || i.enumerable
                        });
                    return e
                },
                y = {};
            ((e, t) => {
                for (var r in t) a(e, r, {
                    get: t[r],
                    enumerable: !0
                })
            })(y, {
                defaultProps: () => k,
                propTypes: () => E
            }), e.exports = __copyProps(a({}, "__esModule", {
                value: !0
            }), y);
            var h = (o = null != (i = r(74275)) ? n(p(i)) : {}, __copyProps(i && i.__esModule ? o : a(o, "default", {
                value: i,
                enumerable: !0
            }), i));
            let {
                string: b,
                bool: _,
                number: g,
                array: P,
                oneOfType: w,
                shape: O,
                object: v,
                func: S,
                node: T
            } = h.default, E = {
                url: w([b, P, v]),
                playing: _,
                loop: _,
                controls: _,
                volume: g,
                muted: _,
                playbackRate: g,
                width: w([b, g]),
                height: w([b, g]),
                style: v,
                progressInterval: g,
                playsinline: _,
                pip: _,
                stopOnUnmount: _,
                light: w([_, b, v]),
                playIcon: T,
                previewTabIndex: g,
                previewAriaLabel: b,
                fallback: T,
                oEmbedUrl: b,
                wrapper: w([b, S, O({
                    render: S.isRequired
                })]),
                config: O({
                    soundcloud: O({
                        options: v
                    }),
                    youtube: O({
                        playerVars: v,
                        embedOptions: v,
                        onUnstarted: S
                    }),
                    facebook: O({
                        appId: b,
                        version: b,
                        playerId: b,
                        attributes: v
                    }),
                    dailymotion: O({
                        params: v
                    }),
                    vimeo: O({
                        playerOptions: v,
                        title: b
                    }),
                    mux: O({
                        attributes: v,
                        version: b
                    }),
                    file: O({
                        attributes: v,
                        tracks: P,
                        forceVideo: _,
                        forceAudio: _,
                        forceHLS: _,
                        forceSafariHLS: _,
                        forceDisableHls: _,
                        forceDASH: _,
                        forceFLV: _,
                        hlsOptions: v,
                        hlsVersion: b,
                        dashVersion: b,
                        flvVersion: b
                    }),
                    wistia: O({
                        options: v,
                        playerId: b,
                        customControls: P
                    }),
                    mixcloud: O({
                        options: v
                    }),
                    twitch: O({
                        options: v,
                        playerId: b
                    }),
                    vidyard: O({
                        options: v
                    })
                }),
                onReady: S,
                onStart: S,
                onPlay: S,
                onPause: S,
                onBuffer: S,
                onBufferEnd: S,
                onEnded: S,
                onError: S,
                onDuration: S,
                onSeek: S,
                onPlaybackRateChange: S,
                onPlaybackQualityChange: S,
                onProgress: S,
                onClickPreview: S,
                onEnablePIP: S,
                onDisablePIP: S
            }, noop = () => {}, k = {
                playing: !1,
                loop: !1,
                controls: !1,
                volume: null,
                muted: !1,
                playbackRate: 1,
                width: "640px",
                height: "360px",
                style: {},
                progressInterval: 1e3,
                playsinline: !1,
                pip: !1,
                stopOnUnmount: !0,
                light: !1,
                fallback: null,
                wrapper: "div",
                previewTabIndex: 0,
                previewAriaLabel: "",
                oEmbedUrl: "https://noembed.com/embed?url={url}",
                config: {
                    soundcloud: {
                        options: {
                            visual: !0,
                            buying: !1,
                            liking: !1,
                            download: !1,
                            sharing: !1,
                            show_comments: !1,
                            show_playcount: !1
                        }
                    },
                    youtube: {
                        playerVars: {
                            playsinline: 1,
                            showinfo: 0,
                            rel: 0,
                            iv_load_policy: 3,
                            modestbranding: 1
                        },
                        embedOptions: {},
                        onUnstarted: noop
                    },
                    facebook: {
                        appId: "1309697205772819",
                        version: "v3.3",
                        playerId: null,
                        attributes: {}
                    },
                    dailymotion: {
                        params: {
                            api: 1,
                            "endscreen-enable": !1
                        }
                    },
                    vimeo: {
                        playerOptions: {
                            autopause: !1,
                            byline: !1,
                            portrait: !1,
                            title: !1
                        },
                        title: null
                    },
                    mux: {
                        attributes: {},
                        version: "2"
                    },
                    file: {
                        attributes: {},
                        tracks: [],
                        forceVideo: !1,
                        forceAudio: !1,
                        forceHLS: !1,
                        forceDASH: !1,
                        forceFLV: !1,
                        hlsOptions: {},
                        hlsVersion: "1.1.4",
                        dashVersion: "3.1.3",
                        flvVersion: "1.5.0",
                        forceDisableHls: !1
                    },
                    wistia: {
                        options: {},
                        playerId: null,
                        customControls: null
                    },
                    mixcloud: {
                        options: {
                            hide_cover: 1
                        }
                    },
                    twitch: {
                        options: {},
                        playerId: null
                    },
                    vidyard: {
                        options: {}
                    }
                },
                onReady: noop,
                onStart: noop,
                onPlay: noop,
                onPause: noop,
                onBuffer: noop,
                onBufferEnd: noop,
                onEnded: noop,
                onError: noop,
                onDuration: noop,
                onSeek: noop,
                onPlaybackRateChange: noop,
                onPlaybackQualityChange: noop,
                onProgress: noop,
                onClickPreview: noop,
                onEnablePIP: noop,
                onDisablePIP: noop
            }
        },
        74117: function(e, t, r) {
            var i = Object.create,
                o = Object.defineProperty,
                n = Object.getOwnPropertyDescriptor,
                a = Object.getOwnPropertyNames,
                s = Object.getPrototypeOf,
                u = Object.prototype.hasOwnProperty,
                __copyProps = (e, t, r, i) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let s of a(t)) u.call(e, s) || s === r || o(e, s, {
                            get: () => t[s],
                            enumerable: !(i = n(t, s)) || i.enumerable
                        });
                    return e
                },
                __toESM = (e, t, r) => (r = null != e ? i(s(e)) : {}, __copyProps(!t && e && e.__esModule ? r : o(r, "default", {
                    value: e,
                    enumerable: !0
                }), e)),
                p = {};
            ((e, t) => {
                for (var r in t) o(e, r, {
                    get: t[r],
                    enumerable: !0
                })
            })(p, {
                callPlayer: () => callPlayer,
                getConfig: () => getConfig,
                getSDK: () => getSDK,
                isBlobUrl: () => isBlobUrl,
                isMediaStream: () => isMediaStream,
                lazy: () => lazy,
                omit: () => omit,
                parseEndTime: () => parseEndTime,
                parseStartTime: () => parseStartTime,
                queryString: () => queryString,
                randomString: () => randomString,
                supportsWebKitPresentationMode: () => supportsWebKitPresentationMode
            }), e.exports = __copyProps(o({}, "__esModule", {
                value: !0
            }), p);
            var d = __toESM(r(2265)),
                y = __toESM(r(12451)),
                h = __toESM(r(68346));
            let lazy = e => d.default.lazy(async () => {
                    let t = await e();
                    return "function" == typeof t.default ? t : t.default
                }),
                b = /[?&#](?:start|t)=([0-9hms]+)/,
                _ = /[?&#]end=([0-9hms]+)/,
                g = /(\d+)(h|m|s)/g,
                P = /^\d+$/;

            function parseTimeParam(e, t) {
                if (e instanceof Array) return;
                let r = e.match(t);
                if (r) {
                    let e = r[1];
                    if (e.match(g)) return function(e) {
                        let t = 0,
                            r = g.exec(e);
                        for (; null !== r;) {
                            let [, i, o] = r;
                            "h" === o && (t += 3600 * parseInt(i, 10)), "m" === o && (t += 60 * parseInt(i, 10)), "s" === o && (t += parseInt(i, 10)), r = g.exec(e)
                        }
                        return t
                    }(e);
                    if (P.test(e)) return parseInt(e)
                }
            }

            function parseStartTime(e) {
                return parseTimeParam(e, b)
            }

            function parseEndTime(e) {
                return parseTimeParam(e, _)
            }

            function randomString() {
                return Math.random().toString(36).substr(2, 5)
            }

            function queryString(e) {
                return Object.keys(e).map(t => `${t}=${e[t]}`).join("&")
            }

            function getGlobal(e) {
                return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null
            }
            let w = {},
                getSDK = function(e, t, r = null, i = () => !0, o = y.default) {
                    let n = getGlobal(t);
                    return n && i(n) ? Promise.resolve(n) : new Promise((i, n) => {
                        if (w[e]) {
                            w[e].push({
                                resolve: i,
                                reject: n
                            });
                            return
                        }
                        w[e] = [{
                            resolve: i,
                            reject: n
                        }];
                        let onLoaded = t => {
                            w[e].forEach(e => e.resolve(t))
                        };
                        if (r) {
                            let e = window[r];
                            window[r] = function() {
                                e && e(), onLoaded(getGlobal(t))
                            }
                        }
                        o(e, i => {
                            i ? (w[e].forEach(e => e.reject(i)), w[e] = null) : r || onLoaded(getGlobal(t))
                        })
                    })
                };

            function getConfig(e, t) {
                return (0, h.default)(t.config, e.config)
            }

            function omit(e, ...t) {
                let r = [].concat(...t),
                    i = {},
                    o = Object.keys(e);
                for (let t of o) - 1 === r.indexOf(t) && (i[t] = e[t]);
                return i
            }

            function callPlayer(e, ...t) {
                if (!this.player || !this.player[e]) {
                    let t = `ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;
                    return this.player ? this.player[e] || (t += "The method was not available") : t += "The player was not available", console.warn(t, "font-weight: bold", ""), null
                }
                return this.player[e](...t)
            }

            function isMediaStream(e) {
                return "undefined" != typeof window && void 0 !== window.MediaStream && e instanceof window.MediaStream
            }

            function isBlobUrl(e) {
                return /^blob:/.test(e)
            }

            function supportsWebKitPresentationMode(e = document.createElement("video")) {
                let t = !1 === /iPhone|iPod/.test(navigator.userAgent);
                return e.webkitSupportsPresentationMode && "function" == typeof e.webkitSetPresentationMode && t
            }
        },
        68346: function(e) {
            "use strict";
            var isMergeableObject = function(e) {
                    var r;
                    return !!e && "object" == typeof e && "[object RegExp]" !== (r = Object.prototype.toString.call(e)) && "[object Date]" !== r && e.$$typeof !== t
                },
                t = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function cloneUnlessOtherwiseSpecified(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? deepmerge(Array.isArray(e) ? [] : {}, e, t) : e
            }

            function defaultArrayMerge(e, t, r) {
                return e.concat(t).map(function(e) {
                    return cloneUnlessOtherwiseSpecified(e, r)
                })
            }

            function getKeys(e) {
                return Object.keys(e).concat(Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
                    return Object.propertyIsEnumerable.call(e, t)
                }) : [])
            }

            function propertyIsOnObject(e, t) {
                try {
                    return t in e
                } catch (e) {
                    return !1
                }
            }

            function deepmerge(e, t, r) {
                (r = r || {}).arrayMerge = r.arrayMerge || defaultArrayMerge, r.isMergeableObject = r.isMergeableObject || isMergeableObject, r.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
                var i, o, n = Array.isArray(t);
                return n !== Array.isArray(e) ? cloneUnlessOtherwiseSpecified(t, r) : n ? r.arrayMerge(e, t, r) : (o = {}, (i = r).isMergeableObject(e) && getKeys(e).forEach(function(t) {
                    o[t] = cloneUnlessOtherwiseSpecified(e[t], i)
                }), getKeys(t).forEach(function(r) {
                    (!propertyIsOnObject(e, r) || Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r)) && (propertyIsOnObject(e, r) && i.isMergeableObject(t[r]) ? o[r] = (function(e, t) {
                        if (!t.customMerge) return deepmerge;
                        var r = t.customMerge(e);
                        return "function" == typeof r ? r : deepmerge
                    })(r, i)(e[r], t[r], i) : o[r] = cloneUnlessOtherwiseSpecified(t[r], i))
                }), o)
            }
            deepmerge.all = function(e, t) {
                if (!Array.isArray(e)) throw Error("first argument should be an array");
                return e.reduce(function(e, r) {
                    return deepmerge(e, r, t)
                }, {})
            }, e.exports = deepmerge
        },
        66656: function(e) {
            var t = "undefined" != typeof Element,
                r = "function" == typeof Map,
                i = "function" == typeof Set,
                o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
            e.exports = function(e, n) {
                try {
                    return function equal(e, n) {
                        if (e === n) return !0;
                        if (e && n && "object" == typeof e && "object" == typeof n) {
                            var a, s, u, p;
                            if (e.constructor !== n.constructor) return !1;
                            if (Array.isArray(e)) {
                                if ((a = e.length) != n.length) return !1;
                                for (s = a; 0 != s--;)
                                    if (!equal(e[s], n[s])) return !1;
                                return !0
                            }
                            if (r && e instanceof Map && n instanceof Map) {
                                if (e.size !== n.size) return !1;
                                for (p = e.entries(); !(s = p.next()).done;)
                                    if (!n.has(s.value[0])) return !1;
                                for (p = e.entries(); !(s = p.next()).done;)
                                    if (!equal(s.value[1], n.get(s.value[0]))) return !1;
                                return !0
                            }
                            if (i && e instanceof Set && n instanceof Set) {
                                if (e.size !== n.size) return !1;
                                for (p = e.entries(); !(s = p.next()).done;)
                                    if (!n.has(s.value[0])) return !1;
                                return !0
                            }
                            if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(n)) {
                                if ((a = e.length) != n.length) return !1;
                                for (s = a; 0 != s--;)
                                    if (e[s] !== n[s]) return !1;
                                return !0
                            }
                            if (e.constructor === RegExp) return e.source === n.source && e.flags === n.flags;
                            if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof n.valueOf) return e.valueOf() === n.valueOf();
                            if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof n.toString) return e.toString() === n.toString();
                            if ((a = (u = Object.keys(e)).length) !== Object.keys(n).length) return !1;
                            for (s = a; 0 != s--;)
                                if (!Object.prototype.hasOwnProperty.call(n, u[s])) return !1;
                            if (t && e instanceof Element) return !1;
                            for (s = a; 0 != s--;)
                                if (("_owner" !== u[s] && "__v" !== u[s] && "__o" !== u[s] || !e.$$typeof) && !equal(e[u[s]], n[u[s]])) return !1;
                            return !0
                        }
                        return e != e && n != n
                    }(e, n)
                } catch (e) {
                    if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw e
                }
            }
        },
        99749: function(e, t, r) {
            var i = r(73564).createReactPlayer,
                o = r(64e3).default;
            e.exports = i([{
                key: "youtube",
                canPlay: o.canPlay,
                lazyPlayer: o
            }])
        },
        90811: function(e, t) {
            ! function(e) {
                "use strict";
                let t = {
                        en: {
                            less: "less than a minute read",
                            default: "min read"
                        },
                        fr: {
                            less: "moins d'une minute de lecture",
                            default: "min de lecture"
                        },
                        es: {
                            less: "menos de un minuto leyendo",
                            default: "min de lectura"
                        },
                        cn: {
                            less: "小于一分钟",
                            default: "分钟"
                        },
                        ja: {
                            less: "1分未満の読み取り",
                            default: "最小読み取り"
                        },
                        de: {
                            less: "weniger als eine Minute Lesezeit",
                            default: "Min. Lesezeit"
                        },
                        "pt-br": {
                            less: "menos de um minuto de leitura",
                            default: "minutos de leitura"
                        },
                        tr: {
                            less: "bir dakikadan az okuma s\xfcresi",
                            default: "dakika okuma s\xfcresi"
                        },
                        ro: {
                            less: "timp de citire mai puțin de un minut",
                            default: "min. timp de lectură"
                        },
                        bn: {
                            less: "এক মিনিটের কম সময়ে পড়ুন",
                            default: "সর্বনিম্ন সময়ে পড়ুন"
                        }
                    },
                    l = e => (e.match(/[\w|\d|\s|,|.|\u00C0-\u024F|\u4E00-\u9FA5|\u3041-\u309F]+/giu) ? ? []).flatMap(e => e.match(/[\u4E00-\u9FA5]/gu) ? ? e),
                    c = e => l(e).reduce((e, t) => e + (t.trim().length ? t.trim().split(/\s+/u).length : 0), 0),
                    m = e => e < 1 + Number.EPSILON,
                    f = (e, r = "en") => t[r][e ? "less" : "default"];
                e.readingTime = (e, t = 300, r = "en") => {
                    let i = c(e),
                        o = Math.round(i / t),
                        n = m(o);
                    return {
                        minutes: o,
                        words: i,
                        text: `${n?"":`${o} `}${f(n,r)}`
                    }
                }, e.supportedLanguages = ["en", "fr", "es", "cn", "ja", "de", "pt-br", "tr", "ro", "bn"], Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                })
            }(t)
        }
    }
]);