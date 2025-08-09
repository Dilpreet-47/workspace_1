(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3744], {
        15265: function(e, t, s) {
            "use strict";
            var r, n = s(90952);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.Z = function(e) {
                return n.createElement("svg", _extends({
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), r || (r = n.createElement("path", {
                    d: "M5.87891 12.2422L10.1215 7.99956L5.87891 3.75696",
                    stroke: "currentColor",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })))
            }
        },
        29007: function(e, t, s) {
            "use strict";
            var r, n, a = s(90952);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.Z = function(e) {
                return a.createElement("svg", _extends({
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), r || (r = a.createElement("g", {
                    clipPath: "url(#clip0_1309_8886)"
                }, a.createElement("path", {
                    d: "M10 18L16 12L10 6",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }))), n || (n = a.createElement("defs", null, a.createElement("clipPath", {
                    id: "clip0_1309_8886"
                }, a.createElement("rect", {
                    width: 24,
                    height: 24,
                    fill: "white"
                })))))
            }
        },
        19433: function(e, t, s) {
            "use strict";
            s.d(t, {
                W: function() {
                    return Bento
                },
                Z: function() {
                    return benefits
                }
            });
            var r = s(57437),
                n = s(11088),
                a = s(20211),
                i = s(40150),
                o = s.n(i),
                l = s(61396),
                c = s.n(l),
                d = s(2265),
                u = s(36618),
                _ = s.n(u);
            let h = o().bind(_()),
                Bento = e => {
                    let {
                        theme: t,
                        bgImg: s,
                        bgKey: i,
                        description: o,
                        hd: l,
                        isAlignedRight: u,
                        action: A,
                        animationProps: m,
                        Animation: g,
                        liftAnimation: f
                    } = e, p = (0, d.useRef)(null), [y, b] = (0, d.useState)(!1), [x, v] = (0, d.useState)(!1), [j, N] = (0, n.default)(p), {
                        text: w,
                        url: C
                    } = A || {};
                    return (0, d.useEffect)(() => {
                        let e;
                        return j > .95 && (b(!0), e = setTimeout(() => {
                            v(!0)
                        }, 150)), () => clearTimeout(e)
                    }, [j]), (0, r.jsxs)("div", {
                        className: h({
                            bento: !0,
                            isAlignedRight: u,
                            isActive: y,
                            liftAnimation: f
                        }),
                        "data-theme": t,
                        ref: p,
                        children: [(0, r.jsxs)("div", {
                            className: _().bentoContent,
                            children: [(0, r.jsx)("h2", {
                                className: _().bentoHd,
                                "data-bg-key": i,
                                style: s && {
                                    backgroundImage: "url(".concat(s.src, ")")
                                },
                                children: l
                            }), (0, r.jsx)("p", {
                                className: _().bentoDescription,
                                children: o
                            }), A && (0, r.jsx)(a.Z, {
                                theme: t,
                                href: C,
                                tag: c(),
                                children: w
                            })]
                        }), (0, r.jsx)("div", {
                            className: _().bentoFigure,
                            style: s && {
                                backgroundImage: "url(".concat(s.src, ")")
                            },
                            "data-bg-key": i,
                            onClick: e => {
                                e.metaKey && (y ? (b(!1), v(!1)) : (b(!0), setTimeout(() => {
                                    v(!0)
                                }, 150)))
                            },
                            children: (0, r.jsx)("div", {
                                className: _().bentoFigureContentOuter,
                                children: (0, r.jsx)("div", {
                                    className: _().bentoFigureContent,
                                    children: g && (0, r.jsx)(g, {
                                        isActive: y,
                                        hasStarted: x,
                                        ...m
                                    })
                                })
                            })
                        })]
                    })
                };
            var bento_grid = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)("div", {
                        className: _().root,
                        children: (0, r.jsx)("div", {
                            className: _().inner,
                            children: t
                        })
                    })
                },
                A = s(21777),
                m = s(61326),
                g = s.n(m),
                highlighted_text = e => {
                    let {
                        text: t,
                        theme: s
                    } = e, a = (0, d.useRef)(null), [i, o] = (0, n.default)(a), l = t.split("");
                    return (0, r.jsx)("div", {
                        className: g().root,
                        ref: a,
                        "data-theme": s,
                        children: (0, r.jsxs)("div", {
                            className: g().textContainer,
                            children: [(0, r.jsx)("p", {
                                className: g().bottomText,
                                children: (0, r.jsx)(A.Z, {
                                    charWiseContentArray: l,
                                    currentAmount: i,
                                    amountStart: .5,
                                    amountEnd: 1.5
                                })
                            }), (0, r.jsx)("p", {
                                className: g().topText,
                                children: (0, r.jsx)(A.Z, {
                                    charWiseContentArray: l,
                                    currentAmount: i,
                                    amountStart: .5,
                                    amountEnd: 1.5
                                })
                            })]
                        })
                    })
                },
                benefits = e => {
                    let {
                        hd: t,
                        theme: s,
                        children: n
                    } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(highlighted_text, {
                            theme: s,
                            text: t
                        }), (0, r.jsx)(bento_grid, {
                            children: n
                        })]
                    })
                }
        },
        18899: function(e, t, s) {
            "use strict";
            s.r(t);
            var r = s(57437),
                n = s(11088),
                a = s(35721),
                i = s(20211),
                o = s(48410),
                l = s(36122),
                c = s(51583),
                d = s(13199),
                u = s(40150),
                _ = s.n(u),
                h = s(16691),
                A = s.n(h),
                m = s(2265),
                g = s(39225),
                f = s.n(g);
            let p = _().bind(f()),
                Intro = e => {
                    let {
                        animationState: t,
                        introDescription: s,
                        introHd: n,
                        introPreHd: a
                    } = e;
                    return (0, r.jsx)("div", {
                        className: f().intro,
                        style: {
                            transform: "translateY(-".concat(20 * t, "%)")
                        },
                        children: (0, r.jsxs)("div", {
                            className: f().introInner,
                            children: [(0, r.jsx)("div", {
                                className: f().introPreHd,
                                children: a
                            }), (0, r.jsx)("h1", {
                                className: f().introHd,
                                children: n
                            }), (0, r.jsx)("p", {
                                className: f().introDescription,
                                children: s
                            }), (0, r.jsx)(c.default, {
                                className: f().introBtn,
                                tag: "a",
                                href: "/signup",
                                isDark: !0,
                                children: "Get started free"
                            })]
                        })
                    })
                },
                CarouselNavItem = e => {
                    let {
                        isLast: t,
                        isCurrent: s,
                        isPast: n,
                        isFuture: a,
                        id: o,
                        title: l,
                        description: c
                    } = e, d = s ? "div" : "a", u = s ? {} : {
                        href: "#".concat(o)
                    }, _ = t && s;
                    return (0, r.jsx)("div", {
                        className: p({
                            carouselNavItem: !0,
                            isCurrent: s,
                            isPast: n,
                            isFuture: a
                        }),
                        children: (0, r.jsxs)(d, {
                            className: f().carouselNavItemInner,
                            ...u,
                            children: [(0, r.jsx)("span", {
                                className: f().carouselNavItemHd,
                                children: l
                            }), (0, r.jsx)("span", {
                                className: f().carouselNavItemDescription,
                                children: c
                            }), _ && (0, r.jsx)(i.Z, {
                                className: f().carouselNavItemLink,
                                tag: "a",
                                href: "/signup",
                                children: "Get started free"
                            })]
                        })
                    })
                },
                Carousel = e => {
                    let {
                        currentSlideIndex: t,
                        slides: s
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: f().carousel,
                        children: [(0, r.jsx)("div", {
                            className: f().carouselScreenshots,
                            children: (0, r.jsx)("div", {
                                className: f().carouselScreenshotsInner,
                                children: s.map((e, s) => {
                                    let {
                                        key: n,
                                        img: a
                                    } = e;
                                    return (0, r.jsx)(A(), {
                                        className: p({
                                            isCurrent: s === t
                                        }),
                                        src: a,
                                        alt: "",
                                        height: 615,
                                        width: 1080
                                    }, n)
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: f().carouselNav,
                            children: (0, r.jsx)("div", {
                                className: f().carouselNavInner,
                                children: (0, r.jsx)("div", {
                                    className: f().carouselNavInnerInner,
                                    children: s.map((e, n) => {
                                        let {
                                            key: a,
                                            img: i,
                                            title: o,
                                            description: l
                                        } = e;
                                        return (0, r.jsx)(CarouselNavItem, {
                                            id: a,
                                            description: l,
                                            title: o,
                                            isLast: n === s.length - 1,
                                            isPast: n < t,
                                            isFuture: n > t,
                                            isCurrent: n === t
                                        }, a)
                                    })
                                })
                            })
                        })]
                    })
                },
                HeroInner = e => {
                    let {
                        bgKey: t,
                        bgOffsetInPercent: s,
                        containerDimensions: n,
                        containerRef: a,
                        contentDimensions: i,
                        contentRef: c,
                        currentSlideIndex: d,
                        introDescription: u,
                        introHd: _,
                        introPreHd: h,
                        isCarouselActive: A,
                        isMeasured: m,
                        portalAnimationState: g,
                        rootRef: y,
                        slides: b,
                        slideHeightInVhAdjusted: x
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: p({
                            root: !0,
                            isMeasured: m,
                            isCarouselActive: A
                        }),
                        ref: y,
                        children: [(0, r.jsxs)("div", {
                            className: f().stickyContainer,
                            ref: a,
                            children: [(0, r.jsx)("div", {
                                className: f().stickyContainerBg,
                                "data-bg-key": t,
                                style: {
                                    backgroundPosition: "50% ".concat(35 - s, "%")
                                }
                            }), (0, r.jsx)("div", {
                                className: f().contentPositioner,
                                children: (0, r.jsx)("div", {
                                    className: f().contentPortalSizer,
                                    ref: c,
                                    children: (0, r.jsxs)("div", {
                                        className: f().content,
                                        children: [(0, r.jsx)(Intro, {
                                            animationState: g,
                                            introDescription: u,
                                            introHd: _,
                                            introPreHd: h
                                        }), (0, r.jsx)(Carousel, {
                                            currentSlideIndex: d,
                                            slides: b
                                        })]
                                    })
                                })
                            }), (0, r.jsx)(o.M, {
                                offsetMultiplier: 2,
                                amountMultiplier: .4,
                                className: f().logoTicker,
                                isWhite: !0,
                                rootRef: y
                            }), (0, r.jsx)(l.Z, {
                                outerRect: n,
                                innerRect: i,
                                startingBottomBorderRadius: 80,
                                animationState: g,
                                className: f().portal
                            })]
                        }), (0, r.jsx)("div", {
                            style: {
                                height: "".concat(100, "vh")
                            }
                        }), b.map(e => {
                            let {
                                key: t
                            } = e;
                            return (0, r.jsx)("div", {
                                id: t,
                                style: {
                                    height: "".concat(x, "vh")
                                }
                            }, t)
                        })]
                    })
                };
            t.default = e => {
                let {
                    bgKey: t,
                    slides: s,
                    introPreHd: i,
                    introHd: o,
                    introDescription: l
                } = e, c = s.length, u = 100 + 250 * c, _ = (0, m.useRef)(null), [h, A] = (0, n.default)(_), g = (0, m.useRef)(null), f = (0, a.rr)(A), p = (0, m.useRef)(null), [y, b] = (0, m.useState)({
                    height: 0,
                    width: 0
                }), [x, v] = (0, m.useState)({
                    height: 0,
                    width: 0,
                    top: 0,
                    left: 0
                }), j = 0 !== x.width, updateDimensions = () => {
                    if (g.current && p.current) {
                        let e = g.current.getBoundingClientRect(),
                            t = p.current.getBoundingClientRect();
                        b({
                            height: e.height,
                            width: e.width
                        }), v({
                            height: t.height,
                            left: t.left,
                            top: t.top - e.top,
                            width: t.width
                        })
                    }
                };
                (0, d.Z)(g, updateDimensions), (0, m.useEffect)(updateDimensions, [A]);
                let N = 100 / u,
                    w = (0, a.rr)(f / N),
                    C = f > N,
                    k = 100 / u,
                    I = 0;
                if (f > k) {
                    let e = f - k;
                    I = (0, a.uZ)(Math.floor(e / (1 - k) * s.length), 0, s.length - 1)
                }
                let S = I;
                C && S++;
                let B = -5 * S,
                    D = 1 === s.length ? 125 : 250;
                return (0, r.jsx)(HeroInner, {
                    bgKey: t,
                    bgOffsetInPercent: B,
                    containerDimensions: y,
                    containerRef: g,
                    contentDimensions: x,
                    contentRef: p,
                    currentSlideIndex: I,
                    introDescription: l,
                    introHd: o,
                    introPreHd: i,
                    isCarouselActive: C,
                    isMeasured: j,
                    portalAnimationState: w,
                    rootRef: _,
                    slideHeightInVhAdjusted: D,
                    slides: s
                })
            }
        },
        58996: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                arthurKQuote: function() {
                    return g
                },
                chloeAQuote: function() {
                    return f
                },
                garyGasparQuote: function() {
                    return m
                },
                jasonMQuote: function() {
                    return p
                },
                nathanQuote: function() {
                    return y
                },
                productManagerQuote: function() {
                    return A
                }
            });
            var r = s(57437),
                n = s(11088),
                a = s(63632),
                i = s(35721),
                o = s(13199),
                l = s(40150),
                c = s.n(l),
                d = s(2265),
                u = s(96569),
                _ = s.n(u);
            let h = c().bind(_());
            t.default = e => {
                let {
                    bgKey: t,
                    quotes: s
                } = e, a = (0, d.useRef)(null), [l, c] = (0, d.useState)([]), [u, A] = (0, n.default)(a), [m, g] = (0, d.useState)([]);
                (0, d.useEffect)(() => {
                    c(e => Array(s.length).fill().map((t, s) => e[s] || (0, d.createRef)()))
                }, [s.length]);
                let f = (0, d.useCallback)(() => {
                    g(l.map(e => e.current.getBoundingClientRect()))
                }, [l]);
                (0, o.Z)(a, f), (0, d.useEffect)(() => {
                    f()
                }, [f, l]);
                let p = (0, i.uZ)(Math.floor(u * s.length), 0, s.length - 1),
                    y = m.slice(0, p + 1),
                    b = y.reduce((e, t) => t === y[y.length - 1] ? e + t.height / 2 : e + t.height + 100, 120);
                return (0, r.jsx)("div", {
                    className: _().root,
                    ref: a,
                    style: {
                        height: "".concat(1.2 * s.length * 100, "vh"),
                        "--quote-gap": "".concat(100, "px"),
                        "--hd-height": "".concat(20, "px")
                    },
                    children: (0, r.jsx)("div", {
                        className: _().stickyContainer,
                        "data-bg-key": t,
                        children: (0, r.jsxs)("div", {
                            className: _().content,
                            style: {
                                transform: "translate(-50%, -".concat(b, "px)")
                            },
                            children: [(0, r.jsx)("h2", {
                                className: _().hd,
                                children: "Testimonials"
                            }), s.map((e, t) => {
                                let {
                                    text: s,
                                    source: n,
                                    sourceDescription: a
                                } = e;
                                return (0, r.jsx)("div", {
                                    className: h({
                                        quote: !0,
                                        isCurrent: t === p
                                    }),
                                    ref: l[t],
                                    children: (0, r.jsxs)("div", {
                                        className: _().quoteInner,
                                        children: [(0, r.jsxs)("blockquote", {
                                            className: _().quoteText,
                                            children: ["“", s, "”"]
                                        }), (0, r.jsx)("p", {
                                            className: _().quoteSource,
                                            children: n
                                        }), (0, r.jsx)("p", {
                                            className: _().quoteSourceDescription,
                                            children: a
                                        })]
                                    })
                                }, n)
                            })]
                        })
                    })
                })
            };
            let A = {
                    text: (0, r.jsxs)(r.Fragment, {
                        children: ["I have been using ", (0, r.jsx)(a.A, {}), " for years because it makes my job as a product manager much more manageable."]
                    }),
                    source: "Product Manager",
                    sourceDescription: "Financial Services Industry"
                },
                m = {
                    text: (0, r.jsxs)(r.Fragment, {
                        children: ["What really sets ", (0, r.jsx)(a.A, {}), " apart from other tools is the attention to detail. The team at ", (0, r.jsx)(a.A, {}), " clearly put a lot of thought into making the tool as user-friendly as possible."]
                    }),
                    source: "Gary Gaspar",
                    sourceDescription: "CEO, Marker.io"
                },
                g = {
                    text: (0, r.jsx)(r.Fragment, {
                        children: "Being able to rapidly explore ideas, whether in flows, wireframes, cards, or words, has been invaluable. Faster exploration means faster communication."
                    }),
                    source: "Arthur K.",
                    sourceDescription: "Staff Product Designer"
                },
                f = {
                    text: (0, r.jsx)(r.Fragment, {
                        children: "I love how it bridges product docs and wireframes effortlessly. A game-changer for anyone in product development."
                    }),
                    source: "Chloe A.",
                    sourceDescription: "AI/ML Engineer"
                },
                p = {
                    text: (0, r.jsxs)(r.Fragment, {
                        children: ["I use it for everything from wireframing and mind mapping to creating flowcharts and user flows. I used to rely on a bunch of different tools, but ", (0, r.jsx)(a.A, {
                            noSpace: !0
                        }), "’s got it all in one place."]
                    }),
                    source: "Jason M.",
                    sourceDescription: "Designer"
                },
                y = {
                    text: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(a.A, {
                            noSpace: !0
                        }), " turns the process of creating diagrams and flowcharts from mundane to a real joy! Whether I’m brainstorming ideas or working with my team, it adds a touch of style to everything. ", (0, r.jsx)(a.A, {}), " has become my go-to for making ideas come alive visually."]
                    }),
                    source: "Nathan",
                    sourceDescription: "Product Manager"
                }
        },
        69419: function(e, t, s) {
            "use strict";
            var r = s(57437),
                n = s(15265),
                a = s(29007),
                i = s(40150),
                o = s.n(i),
                l = s(21079),
                c = s.n(l);
            let d = o().bind(c());
            t.Z = e => {
                let {
                    className: t,
                    disabled: s,
                    inverted: i,
                    fullsize: o,
                    dir: l = "forward",
                    ...u
                } = e, _ = "previous" === l;
                return (0, r.jsx)("button", {
                    className: d(c().arrowBtn, t, {
                        isDisabled: s,
                        isInverted: i,
                        isFullsize: o,
                        isBackward: _
                    }),
                    ...u,
                    onMouseUp: e => e.currentTarget.blur(),
                    children: (0, r.jsxs)("div", {
                        className: c().arrowMask,
                        children: [(0, r.jsx)(n.Z, {
                            className: d(c().arrow, c().isFirst, c().isSmall, {
                                isBackward: _
                            })
                        }), (0, r.jsx)(n.Z, {
                            className: d(c().arrow, c().isLast, c().isSmall, {
                                isBackward: _
                            })
                        }), (0, r.jsx)(a.Z, {
                            className: d(c().arrow, c().isFirst, c().isBig, {
                                isBackward: _
                            })
                        }), (0, r.jsx)(a.Z, {
                            className: d(c().arrow, c().isLast, c().isBig, {
                                isBackward: _
                            })
                        })]
                    })
                })
            }
        },
        21777: function(e, t, s) {
            "use strict";
            var r = s(57437);
            t.Z = e => {
                let {
                    charWiseContentArray: t,
                    currentAmount: s,
                    amountStart: n,
                    amountEnd: a,
                    ImgComponent: i
                } = e, o = t.length, l = o * (Math.max(0, s - n) / (a - n));
                return (0, r.jsx)(r.Fragment, {
                    children: t.map((e, t) => {
                        let s = t < l;
                        return "string" == typeof e ? s ? (0, r.jsx)("b", {
                            children: e
                        }, t) : (0, r.jsx)("span", {
                            children: e
                        }, t) : i ? (0, r.jsx)(i, { ...e,
                            isVisible: s
                        }, t) : void 0
                    })
                })
            }
        },
        59369: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                BeforeCardCarouselContainer: function() {
                    return BeforeCardCarouselContainer
                }
            });
            var r = s(57437),
                n = s(69419),
                a = s(13199),
                i = s(40150),
                o = s.n(i),
                l = s(2265),
                c = s(42479),
                d = s.n(c);
            let u = o().bind(d()),
                Controls = e => {
                    let {
                        isHidden: t,
                        onNext: s,
                        onPrevious: a,
                        nextEnabled: i,
                        previousEnabled: o
                    } = e;
                    return (0, r.jsx)("div", {
                        className: d().controlsOuter,
                        children: (0, r.jsx)("div", {
                            className: u(d().controls, {
                                isHidden: t
                            }),
                            children: (0, r.jsxs)("div", {
                                className: d().controlsWrapper,
                                children: [(0, r.jsx)(n.Z, {
                                    onClick: a,
                                    dir: "previous",
                                    disabled: !o,
                                    "aria-label": "Previous"
                                }), (0, r.jsx)(n.Z, {
                                    onClick: s,
                                    "aria-label": "Next",
                                    disabled: !i
                                })]
                            })
                        })
                    })
                },
                getScrollDist = e => {
                    let t = e.children[1],
                        {
                            width: s
                        } = t.getBoundingClientRect(),
                        r = parseInt(window.getComputedStyle(t).marginRight, 10);
                    return Math.min(s + r, 416)
                };
            t.default = e => {
                let {
                    children: t,
                    hideControls: s,
                    isAlwaysActive: n
                } = e, i = (0, l.useRef)(null), o = (0, l.useRef)(null), [{
                    contentWidth: c,
                    scrollLeft: _,
                    scrollWidth: h,
                    scrollableElWidth: A
                }, m] = (0, l.useState)({
                    scrollLeft: 0,
                    scrollWidth: 0,
                    scrollableElWidth: 0,
                    contentWidth: 0
                }), updateDimensions = () => {
                    let e = i.current;
                    if (e) {
                        let t = e.getBoundingClientRect().width;
                        m({
                            scrollLeft: e.scrollLeft,
                            scrollWidth: e.scrollWidth,
                            scrollableElWidth: t,
                            contentWidth: o.current && o.current.getBoundingClientRect().width
                        }), t !== A && e.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "instant"
                        })
                    }
                };
                (0, l.useLayoutEffect)(updateDimensions, [i, A]), (0, a.Z)(i, updateDimensions);
                let g = _ + A < h,
                    f = c < A;
                return (0, r.jsxs)("div", {
                    className: u(d().cardCarousel, {
                        isAlwaysActive: n
                    }),
                    children: [!s && (0, r.jsx)(Controls, {
                        isHidden: f,
                        onNext: () => {
                            let e = i.current,
                                t = o.current;
                            if (e && t) {
                                let s = getScrollDist(t),
                                    r = e.getBoundingClientRect(),
                                    n = Math.min(s, e.scrollWidth - r.width - e.scrollLeft);
                                e.scrollBy({
                                    left: n,
                                    behavior: "smooth"
                                })
                            }
                        },
                        onPrevious: () => {
                            let e = i.current,
                                t = o.current;
                            if (e && t) {
                                let s = getScrollDist(t),
                                    r = Math.min(s, e.scrollLeft);
                                e.scrollBy({
                                    left: -r,
                                    behavior: "smooth"
                                })
                            }
                        },
                        nextEnabled: g,
                        previousEnabled: _ > 0
                    }), (0, r.jsxs)("div", {
                        ref: i,
                        className: u(d().scrollableArea, {
                            isCentered: f
                        }),
                        onScroll: updateDimensions,
                        children: [!f && (0, r.jsx)("div", {
                            className: d().leftSpacer
                        }), (0, r.jsx)("div", {
                            className: u(d().cards, {
                                isCentered: f
                            }),
                            ref: o,
                            children: [...t]
                        }), !f && (0, r.jsx)("div", {
                            className: d().rightSpacer
                        })]
                    })]
                })
            };
            let BeforeCardCarouselContainer = e => {
                let {
                    children: t
                } = e;
                return (0, r.jsx)("div", {
                    className: d().beforeContainer,
                    children: t
                })
            }
        },
        20211: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return chevron_btn
                }
            });
            var r = s(57437),
                n = s(15265),
                a = s(29007),
                i = s(42744),
                o = s.n(i),
                l = s(17950),
                c = s.n(l),
                hoverable_icon = e => {
                    let {
                        Icon: t,
                        className: s
                    } = e;
                    return (0, r.jsxs)("span", {
                        className: o()(c().hoverableIcon, s),
                        children: [(0, r.jsx)("span", {
                            className: c().icon,
                            children: (0, r.jsx)(t, {})
                        }), (0, r.jsx)("span", {
                            className: c().icon,
                            children: (0, r.jsx)(t, {})
                        })]
                    })
                },
                d = s(40150),
                u = s.n(d),
                _ = s(73850),
                h = s.n(_);
            let A = u().bind(h());
            var chevron_btn = e => {
                let {
                    className: t,
                    children: s,
                    tag: i,
                    isIconInverted: o,
                    theme: l,
                    ...c
                } = e;
                return (0, r.jsxs)(i, {
                    className: A(h().btn, t),
                    "data-theme": l,
                    ...c,
                    children: [s, (0, r.jsx)("span", {
                        className: A({
                            icon: !0,
                            isInverted: o
                        }),
                        children: (0, r.jsx)(hoverable_icon, {
                            Icon: o ? n.Z : a.Z
                        })
                    })]
                })
            }
        },
        36122: function(e, t, s) {
            "use strict";
            var r = s(57437),
                n = s(42744),
                a = s.n(n),
                i = s(55949),
                o = s.n(i);
            t.Z = e => {
                let {
                    className: t,
                    outerRect: s,
                    innerRect: n,
                    animationState: i,
                    startingBottomBorderRadius: l
                } = e, {
                    height: c,
                    width: d
                } = s, {
                    top: u,
                    left: _,
                    height: h,
                    width: A
                } = n, m = i * ((d - A) / 2), g = i * u, f = h + 2 * g, p = A + 2 * m, y = _ - m, b = u - g, x = A / 2 * (1 - i), v = l * (1 - i);
                return (0, r.jsx)("svg", {
                    className: a()(o().svg, t),
                    width: d,
                    height: c,
                    viewBox: "0 0 ".concat(d, " ").concat(c),
                    fill: "var(--base-0)",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        d: "\n            M 0 0\n            L 0 ".concat(c, "\n            L ").concat(d, " ").concat(c, "\n            L ").concat(d, " 0\n            Z\n\n            M ").concat(y, " ").concat(b + x, "\n            A ").concat(x, " ").concat(x, " 0 0 1 ").concat(y + x, " ").concat(b, "\n            L ").concat(y + p - x, " ").concat(b, "\n            A ").concat(x, " ").concat(x, " 0 0 1 ").concat(y + p, " ").concat(b + x, "\n            L ").concat(y + p, " ").concat(b + f - v, "\n            A ").concat(v, " ").concat(v, " 0 0 1 ").concat(y + p - v, " ").concat(b + f, "\n            L ").concat(y + v, " ").concat(b + f, "\n            A ").concat(v, " ").concat(v, " 0 0 1 ").concat(y, " ").concat(b + f - v, "\n            Z\n          ")
                    })
                })
            }
        },
        36618: function(e) {
            e.exports = {
                root: "styles_root__1Kvpb",
                inner: "styles_inner__Gm5ch",
                bento: "styles_bento__5C3Vz",
                isAlignedRight: "styles_isAlignedRight__dcDuc",
                bentoContent: "styles_bentoContent__QBvV2",
                isActive: "styles_isActive__TzOWs",
                bentoHd: "styles_bentoHd__wzYLi",
                bentoDescription: "styles_bentoDescription__t7JNB",
                bentoFigure: "styles_bentoFigure__Gdw55",
                bentoFigureContentOuter: "styles_bentoFigureContentOuter__Cjgz0",
                liftAnimation: "styles_liftAnimation__R0674",
                bentoFigureContent: "styles_bentoFigureContent__wEKve",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__HKiH5"
            }
        },
        61326: function(e) {
            e.exports = {
                root: "styles_root__NRAVh",
                textContainer: "styles_textContainer__YP1BG",
                topText: "styles_topText__jukoF",
                bottomText: "styles_bottomText__IpPp3",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__6vqO1"
            }
        },
        77040: function(e) {
            e.exports = {
                root: "styles_root__ENlnn",
                inner: "styles_inner__HIGkY",
                block1: "styles_block1__9ZLiK",
                block2: "styles_block2__yhba8",
                block: "styles_block__o_My4",
                isSecond: "styles_isSecond__suRAm",
                content: "styles_content__EYDYP",
                preHd: "styles_preHd__KF_Qu",
                hd: "styles_hd__l5xVr",
                description: "styles_description__0bugr",
                illustrationWrapper: "styles_illustrationWrapper__NPKJP",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__dupPy"
            }
        },
        39225: function(e) {
            e.exports = {
                root: "styles_root__p9Ble",
                isMeasured: "styles_isMeasured__hjbIh",
                stickyContainer: "styles_stickyContainer__vuK24",
                stickyContainerBg: "styles_stickyContainerBg__7KyM0",
                isCarouselActive: "styles_isCarouselActive__lJyWG",
                contentPositioner: "styles_contentPositioner__vpGe9",
                contentPortalSizer: "styles_contentPortalSizer__HWCAV",
                intro: "styles_intro__MaYky",
                introInner: "styles_introInner__l6p5a",
                introPreHd: "styles_introPreHd__AhHrg",
                introHd: "styles_introHd__BvYVQ",
                introDescription: "styles_introDescription__GWSF4",
                introBtn: "styles_introBtn__h4Nj_",
                carousel: "styles_carousel__23aQe",
                carouselScreenshots: "styles_carouselScreenshots__pbNni",
                carouselScreenshotsInner: "styles_carouselScreenshotsInner__S2a5z",
                isCurrent: "styles_isCurrent___C60g",
                carouselNav: "styles_carouselNav__B35gg",
                carouselNavInner: "styles_carouselNavInner__q_nSs",
                carouselNavInnerInner: "styles_carouselNavInnerInner__lwH_K",
                carouselNavItem: "styles_carouselNavItem__48407",
                isPast: "styles_isPast__YTcFZ",
                carouselNavItemInner: "styles_carouselNavItemInner__cOpeO",
                carouselNavItemHd: "styles_carouselNavItemHd__2rZJj",
                carouselNavItemDescription: "styles_carouselNavItemDescription__OL8pr",
                carouselNavItemLink: "styles_carouselNavItemLink__iw2rz",
                logoTicker: "styles_logoTicker__pmrBZ",
                portal: "styles_portal__fds2h",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__voDVB"
            }
        },
        96569: function(e) {
            e.exports = {
                stickyContainer: "styles_stickyContainer__rVWiw",
                content: "styles_content__WvSVc",
                hd: "styles_hd__tgopM",
                quote: "styles_quote___VwHF",
                isCurrent: "styles_isCurrent__MVHa4",
                quoteText: "styles_quoteText__MKUA8",
                quoteSource: "styles_quoteSource__r2I2j",
                quoteSourceDescription: "styles_quoteSourceDescription__Fuwy9",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__ORAj0"
            }
        },
        30907: function(e) {
            e.exports = {
                root: "styles_root__t_MwZ",
                introOuter: "styles_introOuter__UFncL",
                intro: "styles_intro__AThar",
                hd: "styles_hd__Oepuu",
                card: "styles_card__PiSJD",
                cardFigure: "styles_cardFigure__EaTTj",
                cardContent: "styles_cardContent__1WVwe",
                cardHd: "styles_cardHd__vYCZ0",
                cardDescription: "styles_cardDescription__qNQPT",
                cardLinkIcon: "styles_cardLinkIcon__T44EH",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__TZFTj"
            }
        },
        21079: function(e) {
            e.exports = {
                arrowBtn: "styles_arrowBtn__V0EAR",
                isFullsize: "styles_isFullsize__FzvQ5",
                isDisabled: "styles_isDisabled__jbWu0",
                isInverted: "styles_isInverted__bq5hk",
                arrowMask: "styles_arrowMask___NLDD",
                arrow: "styles_arrow__om8sN",
                isFirst: "styles_isFirst__SxWEv",
                isBackward: "styles_isBackward__gB3Z8",
                isLast: "styles_isLast__0kgYv",
                isSmall: "styles_isSmall__mKBFZ",
                isBig: "styles_isBig__mmcI9",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__xkd_a"
            }
        },
        42479: function(e) {
            e.exports = {
                scrollableArea: "styles_scrollableArea__74AYM",
                isCentered: "styles_isCentered__7B442",
                cardCarousel: "styles_cardCarousel__5ODyy",
                isAlwaysActive: "styles_isAlwaysActive__eEudA",
                cards: "styles_cards__AmqJA",
                controlsOuter: "styles_controlsOuter__y4DyU",
                controlsWrapper: "styles_controlsWrapper__pfmyR",
                controls: "styles_controls__eyQMo",
                isHidden: "styles_isHidden__gO_2I",
                leftSpacer: "styles_leftSpacer__qQXaQ",
                rightSpacer: "styles_rightSpacer__cSdS1",
                beforeContainer: "styles_beforeContainer__0oW7g",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__gTRmG"
            }
        },
        73850: function(e) {
            e.exports = {
                btn: "styles_btn__XijSk",
                icon: "styles_icon__A_8Jt",
                isInverted: "styles_isInverted__aq1OH",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__qRnr_"
            }
        },
        17950: function(e) {
            e.exports = {
                hoverableIcon: "styles_hoverableIcon__g7LiA",
                icon: "styles_icon__pI5lU",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__G__yx"
            }
        },
        55949: function(e) {
            e.exports = {
                svg: "styles_svg__a8RJ1",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__wLXcz"
            }
        },
        23710: function(e, t, s) {
            "use strict";
            s.r(t), t.default = {
                src: "/_next/static/media/boards@377x261@2x.58b4f354.webp",
                height: 522,
                width: 754,
                blurDataURL: "data:image/webp;base64,UklGRk4AAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSA0AAAABD3D8/4iIMIAR/Y8QAFZQOCAaAAAAMAEAnQEqCAAGAAJAOCWkAANwAP76lVhQcAA=",
                blurWidth: 8,
                blurHeight: 6
            }
        },
        47878: function(e, t, s) {
            "use strict";
            s.r(t), t.default = {
                src: "/_next/static/media/docs@377x261@2x.4befd600.webp",
                height: 522,
                width: 754,
                blurDataURL: "data:image/webp;base64,UklGRlwAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSA0AAAABD3D8/4iIMIAR/Y8QAFZQOCAoAAAAUAEAnQEqCAAGAAJAOCWcAAQAAAD++oQ0lV6z+yuujP6MZ+nsbqWAAA==",
                blurWidth: 8,
                blurHeight: 6
            }
        },
        27271: function(e, t, s) {
            "use strict";
            s.r(t), t.default = {
                src: "/_next/static/media/posts@377x261@2x.2beacb70.webp",
                height: 522,
                width: 754,
                blurDataURL: "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSA0AAAABD3D8/4iIMIAR/Y8QAFZQOCAkAAAAsAEAnQEqCAAGAAJAOCWkAAMX5O9dwAD+/TRBuaC6/OFgAAAA",
                blurWidth: 8,
                blurHeight: 6
            }
        },
        30951: function(e, t, s) {
            "use strict";
            s.r(t), t.default = {
                src: "/_next/static/media/projects@377x261@2x.99ea0aec.webp",
                height: 522,
                width: 754,
                blurDataURL: "data:image/webp;base64,UklGRmIAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSA0AAAABD3D8/4iIMIAR/Y8QAFZQOCAuAAAA0AEAnQEqCAAGAAJAOCWcAAMWYXymMAAA/v1JRZnpsfbFqOCU6OB468pT/gAAAA==",
                blurWidth: 8,
                blurHeight: 6
            }
        },
        42744: function(e, t) {
            var s;
            /*!
            	Copyright (c) 2018 Jed Watson.
            	Licensed under the MIT License (MIT), see
            	http://jedwatson.github.io/classnames
            */
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function classNames() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var s = arguments[t];
                        s && (e = appendClass(e, function(e) {
                            if ("string" == typeof e || "number" == typeof e) return e;
                            if ("object" != typeof e) return "";
                            if (Array.isArray(e)) return classNames.apply(null, e);
                            if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                            var t = "";
                            for (var s in e) r.call(e, s) && e[s] && (t = appendClass(t, s));
                            return t
                        }(s)))
                    }
                    return e
                }

                function appendClass(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (classNames.default = classNames, e.exports = classNames) : void 0 !== (s = (function() {
                    return classNames
                }).apply(t, [])) && (e.exports = s)
            }()
        }
    }
]);