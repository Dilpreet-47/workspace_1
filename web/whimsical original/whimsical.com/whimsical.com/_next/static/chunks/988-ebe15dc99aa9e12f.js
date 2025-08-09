(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [988], {
        21777: function(e, t, s) {
            "use strict";
            var a = s(57437);
            t.Z = e => {
                let {
                    charWiseContentArray: t,
                    currentAmount: s,
                    amountStart: n,
                    amountEnd: i,
                    ImgComponent: l
                } = e, A = t.length, r = A * (Math.max(0, s - n) / (i - n));
                return (0, a.jsx)(a.Fragment, {
                    children: t.map((e, t) => {
                        let s = t < r;
                        return "string" == typeof e ? s ? (0, a.jsx)("b", {
                            children: e
                        }, t) : (0, a.jsx)("span", {
                            children: e
                        }, t) : l ? (0, a.jsx)(l, { ...e,
                            isVisible: s
                        }, t) : void 0
                    })
                })
            }
        },
        41766: function(e, t, s) {
            "use strict";
            var a = s(57437),
                n = s(40150),
                i = s.n(n),
                l = s(71215),
                A = s.n(l);
            let r = i().bind(A());
            t.Z = e => {
                let {
                    children: t,
                    className: s,
                    inline: n,
                    tag: i = "button",
                    theme: l,
                    invert: c,
                    ...d
                } = e;
                return (0, a.jsx)(i, {
                    "data-theme": l,
                    className: r(A().secondaryBtn, s, {
                        inline: n,
                        invert: c
                    }),
                    ...d,
                    children: (0, a.jsx)("span", {
                        className: A().inner,
                        children: t
                    })
                })
            }
        },
        67359: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return tabbed_tool_carousel
                }
            });
            var a = s(57437),
                n = s(77446),
                i = s(914),
                l = s(93355),
                A = s(88845),
                r = s(11088),
                c = s(4884),
                d = s(40150),
                o = s.n(d),
                m = s(16691),
                h = s.n(m),
                _ = s(2265),
                g = s(88772),
                u = s.n(g);
            let f = o().bind(u()),
                b = [{
                    Icon: A.Z,
                    title: "Projects",
                    description: "An integrated project space for tasks, docs, and communication.",
                    image: {
                        src: "/_next/static/media/projects@1080x615@2x.c2b97229.webp",
                        height: 1230,
                        width: 2160,
                        blurDataURL: "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoIAAUAAkA4JZQCdAEO/gLsAP78ifkPQHgIAhGTveQdUWxP+AAAAA==",
                        blurWidth: 8,
                        blurHeight: 5
                    },
                    theme: "mint"
                }, {
                    Icon: n.Z,
                    title: "Boards",
                    description: "An infinite canvas for diagrams, wireframes, and whiteboards.",
                    image: {
                        src: "/_next/static/media/boards@1080x615@2x.fe1f743d.webp",
                        height: 1230,
                        width: 2160,
                        blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoIAAUAAkA4JagCdDXAAUO7kagA/vm0wDc+M5YJzwNixK5LA3bD4ToOutH6Lqe2q+oJ82j9/+rTDQvoA/k7kAAA",
                        blurWidth: 8,
                        blurHeight: 5
                    },
                    theme: "purple"
                }, {
                    Icon: i.Z,
                    title: "Docs",
                    description: "Clutter-free docs to align your team and move work forward.",
                    image: {
                        src: "/_next/static/media/docs@1080x615@2x.cc4f250a.webp",
                        height: 1230,
                        width: 2160,
                        blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAABQAQCdASoIAAUAAkA4JZwABDOAAP76dyihRe0QTJOczveGws0dpZgA",
                        blurWidth: 8,
                        blurHeight: 5
                    },
                    theme: "teal"
                }, {
                    Icon: l.Z,
                    title: "Posts",
                    description: "A mindful approach to team communication free from noise.",
                    image: {
                        src: "/_next/static/media/posts@1080x615@2x.67936ece.webp",
                        height: 1230,
                        width: 2160,
                        blurDataURL: "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoIAAUAAkA4JZQCdAEPClsNwAD+/In5D0B4CAIRk561QWAcO9pYAA==",
                        blurWidth: 8,
                        blurHeight: 5
                    },
                    theme: "pink"
                }];
            var tabbed_tool_carousel = e => {
                let {
                    slides: t,
                    isOnLightBg: s,
                    navIsPadded: n
                } = e, i = (0, _.useRef)(null), [l, A] = (0, r.default)(i), d = t || b, [o, m] = (0, c.Z)(), g = (0, _.useRef)(null), [p, v] = (0, _.useState)([]);
                (0, _.useEffect)(() => {
                    v(e => Array(d.length).fill().map((t, s) => e[s] || (0, _.createRef)()))
                }, [d.length]);
                let [x, I] = (0, _.useState)(0), [y, w] = (0, _.useState)(!0), [C, R] = (0, _.useState)(!1), [j, k] = (0, _.useState)(null), stopAnimation = () => {
                    clearTimeout(j), w(!1), k(null)
                }, U = (0, _.useCallback)(e => {
                    I(e);
                    let t = g.current,
                        s = t.getBoundingClientRect(),
                        a = p[e].current,
                        n = a.getBoundingClientRect(),
                        i = s.left + s.width,
                        l = n.left + n.width,
                        A = s.left,
                        r = n.left,
                        c = !(s.bottom < 0 || s.top - m >= 0);
                    !(r >= A && l <= i) && c && a.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "nearest"
                    })
                }, [p, m]);
                return (0, _.useEffect)(() => {
                    if (y && p.length > 0) {
                        R(!0);
                        let e = (x + 1) % d.length,
                            t = setTimeout(() => U(e), 6e3);
                        k(t)
                    }
                }, [x, y, p, U, d.length]), (0, _.useEffect)(() => {
                    !y && A > 1.1 && w(!0)
                }, [y, A]), (0, a.jsxs)("div", {
                    className: f({
                        root: !0,
                        isOnLightBg: s
                    }),
                    ref: i,
                    style: {
                        "--auto-advance-delay": "".concat(6e3, "ms")
                    },
                    children: [(0, a.jsx)("div", {
                        className: f({
                            nav: !0,
                            isPadded: n
                        }),
                        children: (0, a.jsxs)("div", {
                            className: u().navScrollableArea,
                            ref: g,
                            children: [(0, a.jsx)("div", {
                                className: u().navLeftSpacer
                            }), (0, a.jsx)("ol", {
                                className: u().navItems,
                                children: d.map((e, t) => {
                                    let {
                                        title: s,
                                        Icon: n,
                                        description: i,
                                        theme: l
                                    } = e, A = x === t;
                                    return (0, a.jsx)("li", {
                                        ref: p[t],
                                        children: (0, a.jsxs)("button", {
                                            className: f({
                                                navItemBtn: !0,
                                                isActive: A
                                            }),
                                            onClick: () => {
                                                stopAnimation(), U(t)
                                            },
                                            children: [(0, a.jsxs)("span", {
                                                className: u().navItemHd,
                                                children: [(0, a.jsx)(n, {}), s]
                                            }), (0, a.jsx)("span", {
                                                className: u().navItemDescription,
                                                children: i
                                            }), (0, a.jsx)("span", {
                                                className: u().navItemSeenBar,
                                                children: (0, a.jsx)("span", {
                                                    className: f({
                                                        navItemSeenBarInner: !0,
                                                        isVisible: A && y && C
                                                    }),
                                                    "data-theme": l
                                                })
                                            })]
                                        })
                                    }, s)
                                })
                            })]
                        })
                    }), (0, a.jsx)("div", {
                        className: u().framePadder,
                        children: (0, a.jsx)("div", {
                            className: u().frameInnerPadder,
                            children: (0, a.jsx)("div", {
                                className: u().frame,
                                children: (0, a.jsx)("ol", {
                                    className: u().frameSlides,
                                    children: d.map((e, t) => {
                                        let {
                                            title: s,
                                            image: n
                                        } = e;
                                        return (0, a.jsx)("li", {
                                            className: f({
                                                isVisible: x === t
                                            }),
                                            children: (0, a.jsx)(h(), {
                                                src: n,
                                                alt: "",
                                                width: 1068,
                                                height: 608
                                            })
                                        }, s)
                                    })
                                })
                            })
                        })
                    })]
                })
            }
        },
        40682: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return whimsical_way_blurb
                }
            });
            var a = s(57437),
                n = s(11088),
                i = s(4884),
                l = s(21777),
                A = s(13199),
                r = s(40150),
                c = s.n(r),
                d = s(16691),
                o = s.n(d),
                m = s(61396),
                h = s.n(m),
                _ = s(2265),
                g = s(78901),
                u = s.n(g);
            let f = c().bind(u()),
                b = ["Days full of meetings", {
                    img: {
                        src: "/_next/static/media/calendar@2x.5dfa0412.png",
                        height: 200,
                        width: 200,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEXs6u7s7e3r6f/5+Pp/f3/s8uzh5vze4v797fW/v79/f3/////45OX/+/Xz/e9kR8FNAAAAC3RSTlM8Mf4/Avz8+/oEBiqwvX0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA2SURBVHicHcoxEsAgDMRAXQyYxIT/P5c5VG0hmiIi1NBcvaoEvytgOeNxxsiRhvred34FoO8AN4YBe5oX9LIAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 8
                    },
                    className: u().isTiltedRight
                }, ", constant interruptions from chat apps", {
                    img: {
                        src: "/_next/static/media/slack@2x.4c34c27f.png",
                        height: 200,
                        width: 200,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEXn5+XbOX/tdZb75+///v6J2/L9/f39/f3lxMtMaXH42pX7+/v0yneE2bmAzqDhY5f+/v/wkrOk37ocnJZGAAAAEHRSTlMKKvzX3f6Y0wcA/pn6/fzyMkzNkgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADxJREFUeJwty0cOgEAQxEBvonuWNPD/xyIENx/KhAGKiaVL7SygHHs2g8Y4br1x1W3KWFln6sd9Db7d8QA70gG3FICu7QAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 8
                    },
                    className: u().isTiltedLeft
                }, ", and small gaps of time", {
                    img: {
                        src: "/_next/static/media/clock@2x.83a6a7d4.png",
                        height: 200,
                        width: 200,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEX////g4OD6+fr9/f3w8On39ff9/f79/f3p6e359f338fvGnxl9AAAACXRSTlP+ATHDCSjHyBnjrNEoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nD2LUQrAMAyF9KXpSO9/4FEY+xNUdCVLsTc8LRZASZgZCIFzLvzKLtg3/vYXFb0AlrwtPPcAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 8
                    }
                }, " to focus have become the status quo. There’s a better way. ", "Reclaim your time to unlock new levels of productivity and calm at work."],
                p = ["Learn the Whimsical way", {
                    className: u().isLogo,
                    img: {
                        src: "/_next/static/media/macos-icon@2x.2fd60649.webp",
                        height: 128,
                        width: 128,
                        blurDataURL: "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAAAwAgCdASoIAAgAAkA4JbACdAYoBkxIQT4PQAD+8I+LyU6GoTAx9RzPkbfuHrv8PZ7fAp8Sj4eZpL3vv2+/eWenpFcivjLKjtdIuev1ctYMf8m/4J0dom8GRc5Ri3J45scLGyQfrAwAAA==",
                        blurWidth: 8,
                        blurHeight: 8
                    },
                    size: 64
                }],
                splitContentIntoChars = e => e.flatMap(e => "string" == typeof e ? e.split("") : [e]),
                v = splitContentIntoChars(b),
                x = splitContentIntoChars(p),
                Img = e => {
                    let {
                        img: t,
                        size: s,
                        className: n,
                        isVisible: i
                    } = e, l = s || 100;
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("span", {
                            className: f(u().imgContainer, n, {
                                isVisible: i
                            }),
                            children: (0, a.jsx)(o(), {
                                src: t.src,
                                width: l,
                                height: l,
                                alt: ""
                            })
                        })
                    })
                };
            var whimsical_way_blurb = () => {
                let [e, t] = (0, i.Z)(), s = (0, _.useRef)(null), r = (0, _.useRef)(null), [c, d] = (0, _.useState)(0), [o, m] = (0, _.useState)(!1);
                (0, A.Z)(r, () => {
                    d(r.current.getBoundingClientRect().height)
                }), (0, _.useEffect)(() => {
                    m(c <= t)
                }, [c, t, e]);
                let [g, b] = (0, n.default)(s), p = o ? Math.min(1, 1.5 * Math.max(0, Math.min(g, 1)) - .25) : 1;
                return (0, a.jsx)("div", {
                    translate: "no",
                    className: f({
                        root: !0,
                        isAnimated: o
                    }),
                    ref: s,
                    children: (0, a.jsx)("div", {
                        className: u().inner,
                        ref: r,
                        children: (0, a.jsxs)("div", {
                            className: u().textContainer,
                            children: [(0, a.jsx)("p", {
                                children: (0, a.jsx)(l.Z, {
                                    charWiseContentArray: v,
                                    currentAmount: p,
                                    amountStart: 0,
                                    amountEnd: .8,
                                    ImgComponent: Img
                                })
                            }), (0, a.jsx)(h(), {
                                href: "/whimsical-way",
                                children: (0, a.jsx)(l.Z, {
                                    charWiseContentArray: x,
                                    currentAmount: p,
                                    amountStart: .8,
                                    amountEnd: 1,
                                    ImgComponent: Img
                                })
                            })]
                        })
                    })
                })
            }
        },
        71215: function(e) {
            e.exports = {
                secondaryBtn: "styles_secondaryBtn__pfK4r",
                inline: "styles_inline__Z1i2Q",
                inner: "styles_inner__9YgD4",
                invert: "styles_invert__8kmnp",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__Ga8gW"
            }
        },
        88772: function(e) {
            e.exports = {
                root: "styles_root__ZNimv",
                navScrollableArea: "styles_navScrollableArea__kTs58",
                navLeftSpacer: "styles_navLeftSpacer__H_tLs",
                navItems: "styles_navItems__7mrx8",
                nav: "styles_nav__V9MAM",
                isPadded: "styles_isPadded__7s65z",
                navItemBtn: "styles_navItemBtn__Rz6vg",
                isOnLightBg: "styles_isOnLightBg__yLQGY",
                isActive: "styles_isActive__KeaVJ",
                navItemHd: "styles_navItemHd__pUtIe",
                navItemDescription: "styles_navItemDescription__ql9Xg",
                navItemSeenBar: "styles_navItemSeenBar__hqNzv",
                navItemSeenBarInner: "styles_navItemSeenBarInner__pRfQj",
                isVisible: "styles_isVisible__5wIUJ",
                "fill-up": "styles_fill-up__rWJIg",
                framePadder: "styles_framePadder__ci_He",
                frameInnerPadder: "styles_frameInnerPadder__7WLkQ",
                frame: "styles_frame__y6lRZ",
                frameSlides: "styles_frameSlides__KUQ7N",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__K5xPt"
            }
        },
        78901: function(e) {
            e.exports = {
                root: "styles_root__wnIar",
                isAnimated: "styles_isAnimated__VI_zD",
                inner: "styles_inner__suYcB",
                textContainer: "styles_textContainer__ym5D9",
                imgContainer: "styles_imgContainer__UUHOS",
                isVisible: "styles_isVisible__CwzKq",
                isTiltedRight: "styles_isTiltedRight__aCpMC",
                isTiltedLeft: "styles_isTiltedLeft__tlRgP",
                isLogo: "styles_isLogo__eZLzr",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__LMRf3"
            }
        }
    }
]);