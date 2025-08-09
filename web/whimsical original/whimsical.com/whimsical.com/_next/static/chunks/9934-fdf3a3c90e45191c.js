(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9934], {
        97310: function(e, n, l) {
            "use strict";
            l.d(n, {
                p: function() {
                    return formatDate
                },
                z: function() {
                    return i
                }
            });
            var s = l(91306),
                t = l(57918);
            let i = new Date().getFullYear(),
                formatDate = function(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "MMMM d, yyyy";
                    return (0, t.ZP)(new s.e(e), n)
                }
        },
        90983: function(e, n, l) {
            "use strict";
            var s = l(2265);
            n.Z = () => {
                let [e, n] = (0, s.useState)([0, 0]);
                return (0, s.useLayoutEffect)(() => {
                    let listener = () => n([window.scrollX, window.scrollY]);
                    return n([window.scrollX, window.scrollY]), window.addEventListener("scroll", listener), () => window.removeEventListener("scroll", listener)
                }, []), e
            }
        },
        63632: function(e, n, l) {
            "use strict";
            l.d(n, {
                A: function() {
                    return NoTranslateOrgName
                },
                H: function() {
                    return NoTranslateAiName
                }
            });
            var s = l(57437);
            let NoTranslateOrgName = e => {
                    let {
                        noSpace: n
                    } = e;
                    return (0, s.jsxs)("span", {
                        translate: "no",
                        children: [!n && " ", "Whimsical", !n && " "]
                    })
                },
                NoTranslateAiName = e => {
                    let {
                        noSpace: n
                    } = e;
                    return (0, s.jsxs)("span", {
                        translate: "no",
                        children: [!n && " ", "Whimsical AI", !n && " "]
                    })
                }
        },
        69934: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return footer
                }
            });
            var s, t, i, r, c, a, o, d, h, p = l(57437),
                _ = l(17896),
                u = l(90952);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var l = arguments[n];
                        for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            var bluesky_circleinline = function(e) {
                return u.createElement("svg", _extends({
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), s || (s = u.createElement("g", {
                    clipPath: "url(#clip0_266_21838)"
                }, u.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM10 9.83821C9.50208 8.80473 8.14547 6.87887 6.88442 5.92891C5.97452 5.24365 4.5 4.71324 4.5 6.40071C4.5 6.73759 4.6925 9.23184 4.80559 9.63677C5.19816 11.0444 6.62902 11.4035 7.90175 11.1862C5.677 11.5661 5.11119 12.8242 6.33339 14.0823C8.65456 16.4719 9.66966 13.4828 9.92953 12.7169C9.97766 12.5755 10 12.5098 10 12.5679C10 12.5098 10.0223 12.5755 10.0705 12.7169C10.3303 13.4828 11.3454 16.4719 13.6666 14.0823C14.8888 12.8242 14.323 11.5661 12.0983 11.1862C13.371 11.4035 14.8018 11.0444 15.1944 9.63677C15.3075 9.23184 15.5 6.73759 15.5 6.40071C15.5 4.71324 14.0257 5.24365 13.1156 5.92891C11.8545 6.87887 10.4979 8.80473 10 9.83821Z",
                    fill: "currentColor"
                }))), t || (t = u.createElement("defs", null, u.createElement("clipPath", {
                    id: "clip0_266_21838"
                }, u.createElement("rect", {
                    width: 18,
                    height: 18,
                    fill: "white",
                    transform: "translate(1 1)"
                })))))
            };

            function linkedin_circleinline_extends() {
                return (linkedin_circleinline_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var l = arguments[n];
                        for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            var linkedin_circleinline = function(e) {
                return u.createElement("svg", linkedin_circleinline_extends({
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), i || (i = u.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10 1.25C5.16751 1.25 1.25 5.16751 1.25 10C1.25 14.8325 5.16751 18.75 10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.16751 14.8325 1.25 10 1.25ZM7.8866 6.0575C7.8866 6.64159 7.38032 7.11509 6.7558 7.11509C6.13128 7.11509 5.625 6.64159 5.625 6.0575C5.625 5.47341 6.13128 4.99991 6.7558 4.99991C7.38032 4.99991 7.8866 5.47341 7.8866 6.0575ZM5.77964 7.89247H7.71263V13.7499H5.77964V7.89247ZM8.89175 7.89247H10.8247V8.64397C11.1492 8.2312 11.7721 7.77496 12.7771 7.77496C14.4693 7.77496 14.9836 8.68452 15 10.6585V13.7499H13.067C13.067 13.3679 13.0644 12.9839 13.0617 12.5999V12.5999V12.5998C13.0579 12.0553 13.0542 11.5109 13.058 10.9731C13.063 10.2715 13.0694 9.36587 12.0039 9.36587C11.061 9.36587 10.8247 10.0609 10.8247 10.7529V13.7499H8.89175V7.89247Z",
                    fill: "currentColor"
                })))
            };

            function reddit_circleinline_extends() {
                return (reddit_circleinline_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var l = arguments[n];
                        for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            var reddit_circleinline = function(e) {
                return u.createElement("svg", reddit_circleinline_extends({
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), r || (r = u.createElement("g", {
                    clipPath: "url(#clip0_350_4556)"
                }, u.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13.5373 8.45527C13.8653 8.20278 14.2759 8.05247 14.7217 8.05247V8.05377C15.796 8.05377 16.6667 8.92444 16.6667 9.99878C16.6667 10.7738 16.2125 11.4434 15.5559 11.7557C15.4947 14.0157 13.0311 15.8338 10.0046 15.8338C6.97804 15.8338 4.51765 14.0177 4.45323 11.7596C3.79144 11.4492 3.33333 10.7777 3.33333 9.99813C3.33333 8.92379 4.204 8.05312 5.27835 8.05312C5.72605 8.05312 6.1386 8.20474 6.46722 8.45917C7.3522 7.91061 8.46689 7.56312 9.68765 7.51172V7.50456C9.68765 6.35082 10.5642 5.39881 11.6867 5.27843C11.8168 4.64658 12.3758 4.17155 13.046 4.17155C13.8126 4.17155 14.434 4.79299 14.434 5.55954C14.434 6.3261 13.8126 6.94754 13.046 6.94754C12.3895 6.94754 11.8396 6.49138 11.6951 5.87905C10.8987 5.99162 10.2844 6.67749 10.2844 7.50391V7.50911C11.5175 7.55531 12.6445 7.9028 13.5373 8.45527Z",
                    fill: "currentColor"
                }))), c || (c = u.createElement("defs", null, u.createElement("clipPath", {
                    id: "clip0_350_4556"
                }, u.createElement("rect", {
                    width: 20,
                    height: 20,
                    fill: "currentColor"
                })))))
            };

            function x_circleinline_extends() {
                return (x_circleinline_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var l = arguments[n];
                        for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            var x_circleinline = function(e) {
                return u.createElement("svg", x_circleinline_extends({
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), a || (a = u.createElement("g", {
                    clipPath: "url(#clip0_1252_944)"
                }, u.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM14.2067 5.5L10.8562 9.31089L14.5 14.5H11.82L9.36617 11.0057L6.294 14.5H5.5L9.01369 10.5037L5.5 5.5H8.17995L10.5035 8.80894L13.4127 5.5H14.2067ZM9.41273 10.0495L9.76874 10.5478L12.1936 13.9418H13.4131L10.4416 9.78274L10.0856 9.28448L7.79961 6.08487H6.58009L9.41273 10.0495Z",
                    fill: "currentColor"
                }))), o || (o = u.createElement("defs", null, u.createElement("clipPath", {
                    id: "clip0_1252_944"
                }, u.createElement("rect", {
                    width: 18,
                    height: 18,
                    fill: "white",
                    transform: "translate(1 1)"
                })))))
            };

            function youtube_circleinline_extends() {
                return (youtube_circleinline_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var l = arguments[n];
                        for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            var youtube_circleinline = function(e) {
                    return u.createElement("svg", youtube_circleinline_extends({
                        width: 20,
                        height: 20,
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), d || (d = u.createElement("g", {
                        clipPath: "url(#clip0_266_21833)"
                    }, u.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM8.97727 8.49041V11.4641L11.5909 9.97734L8.97727 8.49041ZM13.9069 6.66489C14.3372 6.78062 14.676 7.12165 14.791 7.55472C15 8.33962 15 9.97727 15 9.97727C15 9.97727 15 11.6149 14.791 12.3998C14.676 12.8329 14.3372 13.1739 13.9069 13.2897C13.1271 13.5 10 13.5 10 13.5C10 13.5 6.87291 13.5 6.09306 13.2897C5.66282 13.1739 5.32395 12.8329 5.20896 12.3998C5 11.6149 5 9.97727 5 9.97727C5 9.97727 5 8.33962 5.20896 7.55472C5.32395 7.12165 5.66282 6.78062 6.09306 6.66489C6.87291 6.45455 10 6.45455 10 6.45455C10 6.45455 13.1271 6.45455 13.9069 6.66489Z",
                        fill: "currentColor"
                    }))), h || (h = u.createElement("defs", null, u.createElement("clipPath", {
                        id: "clip0_266_21833"
                    }, u.createElement("rect", {
                        width: 18,
                        height: 18,
                        fill: "white",
                        transform: "translate(1 1)"
                    })))))
                },
                x = l(97310),
                j = l(63632),
                m = l(40150),
                f = l.n(m),
                w = l(16691),
                C = l.n(w),
                g = l(61396),
                v = l.n(g),
                y = l(90983),
                k = l(51583),
                b = l(13199),
                N = l(2265),
                L = l(98497),
                E = l.n(L);
            let B = f().bind(E()),
                H = [{
                    id: "Design",
                    color: "var(--purple-400)",
                    relativeXY: [.62, .72],
                    parallaxMultiplier: 1
                }, {
                    id: "Engineering",
                    color: "var(--pink-500)",
                    relativeXY: [.1, .8],
                    parallaxMultiplier: 4
                }, {
                    id: "Marketing",
                    color: "var(--blue-400)",
                    relativeXY: [.48, .085],
                    parallaxMultiplier: 7
                }],
                PointerIcon = e => {
                    let {
                        color: n
                    } = e;
                    return (0, p.jsx)("svg", {
                        className: E().pointerIcon,
                        width: "26",
                        height: "28",
                        viewBox: "0 0 26 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, p.jsx)("path", {
                            d: "M1.02811 3.32583L4.72023 25.3327C5.01593 27.0952 7.2925 27.5993 8.32556 26.1682L14.1112 18.1534C14.1114 18.1533 14.1122 18.1527 14.1138 18.1522L23.5976 15.1786C25.2994 14.6451 25.5093 12.3228 23.9154 11.5032L3.92555 1.22474C2.47814 0.480499 0.752661 1.68403 1.02811 3.32583Z",
                            fill: n,
                            stroke: "white",
                            strokeWidth: 2
                        })
                    })
                },
                Pointer = e => {
                    let {
                        index: n,
                        pointer: l,
                        scrollOffsetAmount: s,
                        containerDimensions: t
                    } = e, [i, r] = (0, N.useState)(!1), {
                        id: c,
                        color: a,
                        relativeXY: o,
                        parallaxMultiplier: d
                    } = l, {
                        height: h,
                        width: _
                    } = t, u = o[0] * _, x = o[1] * h;
                    x += -1 * (30 * d * s - 15 * d);
                    let j = "translate(".concat(u, "px, ").concat(x, "px)");
                    return (0, p.jsx)("div", {
                        className: B(E().pointer, {
                            hasRendered: i
                        }),
                        style: {
                            transform: j
                        },
                        children: (0, p.jsxs)("div", {
                            className: E().pointerPadder,
                            children: [(0, p.jsx)(PointerIcon, {
                                color: a
                            }), (0, p.jsx)("div", {
                                className: E().pointerText,
                                style: {
                                    background: a
                                },
                                children: c
                            })]
                        })
                    })
                };
            var callout = e => {
                    let {
                        isInverted: n
                    } = e, [l, s] = (0, y.Z)(), [{
                        fromWindowTop: t,
                        height: i,
                        width: r
                    }, c] = (0, N.useState)({
                        fromWindowTop: 0,
                        width: 0,
                        height: 0
                    }), a = (0, N.useRef)(null), updateContainerDimensions = () => {
                        if (a.current) {
                            let {
                                top: e,
                                height: n,
                                width: l
                            } = a.current.getBoundingClientRect();
                            c({
                                fromWindowTop: e,
                                height: n,
                                width: l
                            })
                        }
                    };
                    (0, N.useEffect)(updateContainerDimensions, [a, s]), (0, b.Z)(a, updateContainerDimensions);
                    let o = 1 - (t + i / 2) / window.innerHeight;
                    return (0, p.jsxs)("div", {
                        className: B({
                            callout: !0,
                            isInverted: n
                        }),
                        ref: a,
                        children: [(0, p.jsx)("div", {
                            className: E().pointers,
                            children: a.current && H.map((e, n) => (0, p.jsx)(Pointer, {
                                containerRef: a,
                                index: n,
                                pointer: e,
                                scrollOffsetAmount: o,
                                containerDimensions: {
                                    fromWindowTop: t,
                                    height: i,
                                    width: r
                                }
                            }, e.id))
                        }), (0, p.jsxs)("div", {
                            className: E().calloutContent,
                            children: [(0, p.jsx)("h2", {
                                className: E().calloutHd,
                                children: "It’s time to work differently."
                            }), (0, p.jsx)(k.default, {
                                tag: "a",
                                href: "/signup",
                                isDark: n,
                                children: "Get started free"
                            })]
                        })]
                    })
                },
                D = {
                    src: "/_next/static/media/logo.c1e57e2d.svg",
                    height: 22,
                    width: 110,
                    blurWidth: 0,
                    blurHeight: 0
                },
                P = l(37248),
                M = l.n(P);
            let Z = f().bind(M());
            var footer = e => {
                let {
                    bgKey: n,
                    includeCallout: l,
                    isCalloutInverted: s,
                    isBgDarkened: t
                } = e;
                return (0, p.jsx)("footer", {
                    className: Z({
                        footer: !0
                    }),
                    children: (0, p.jsxs)("div", {
                        className: Z({
                            wrapper: !0,
                            includeCallout: l,
                            isBgDarkened: t
                        }),
                        "data-bg-key": n || "warm-dunes",
                        children: [l && (0, p.jsx)(callout, {
                            isInverted: s
                        }), (0, p.jsxs)("div", {
                            className: M().content,
                            children: [(0, p.jsxs)("div", {
                                className: M().contentHeader,
                                children: [(0, p.jsx)(v(), {
                                    className: M().logoLink,
                                    href: "/home",
                                    children: (0, p.jsx)(C(), {
                                        src: D,
                                        alt: "",
                                        width: 110,
                                        height: 22
                                    })
                                }), (0, p.jsxs)(v(), {
                                    className: M().downloadBtn,
                                    href: "https://desktop.whimsical.com/mac/installer/universal",
                                    children: ["Download app", (0, p.jsx)(_.Z, {}), (0, p.jsxs)("span", {
                                        className: M().downloadBtnTooltip,
                                        children: ["Download for macOS", (0, p.jsx)("span", {
                                            className: M().downloadBtnTooltipTip
                                        })]
                                    })]
                                })]
                            }), (0, p.jsxs)("div", {
                                className: M().contentBody,
                                children: [(0, p.jsxs)("div", {
                                    className: M().linkGroup,
                                    children: [(0, p.jsx)("p", {
                                        className: M().linkGroupHd,
                                        children: "Tools"
                                    }), (0, p.jsxs)("ul", {
                                        children: [(0, p.jsx)("li", {
                                            children: (0, p.jsx)(v(), {
                                                href: "/boards",
                                                children: (0, p.jsx)("span", {
                                                    children: "Boards"
                                                })
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)(v(), {
                                                href: "/docs",
                                                children: (0, p.jsx)("span", {
                                                    children: "Docs"
                                                })
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)(v(), {
                                                href: "/posts",
                                                children: (0, p.jsx)("span", {
                                                    children: "Posts"
                                                })
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)(v(), {
                                                href: "/projects",
                                                children: (0, p.jsx)("span", {
                                                    children: "Projects"
                                                })
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)(v(), {
                                                href: "/ai",
                                                children: (0, p.jsx)("span", {
                                                    children: (0, p.jsx)(j.H, {})
                                                })
                                            })
                                        })]
                                    })]
                                }), (0, p.jsxs)("div", {
                                    className: M().linkGroup,
                                    children: [(0, p.jsx)("p", {
                                        className: M().linkGroupHd,
                                        children: "Resources"
                                    }), (0, p.jsxs)("ul", {
                                        children: [(0, p.jsx)("li", {
                                            children: (0, p.jsx)(v(), {
                                                href: "/blog",
                                                children: (0, p.jsx)("span", {
                                                    children: "Blog"
                                                })
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)(v(), {
                                                href: "/company/careers",
                                                children: (0, p.jsx)("span", {
                                                    children: "Careers"
                                                })
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)(v(), {
                                                href: "/customers",
                                                children: (0, p.jsx)("span", {
                                                    children: "Customers"
                                                })
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)(v(), {
                                                href: "/product-updates",
                                                children: (0, p.jsx)("span", {
                                                    children: "Product updates"
                                                })
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)(v(), {
                                                href: "/works-with/slack-integration",
                                                children: (0, p.jsx)("span", {
                                                    children: "Slack integration"
                                                })
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)(v(), {
                                                href: "/templates",
                                                children: (0, p.jsx)("span", {
                                                    children: "Templates"
                                                })
                                            })
                                        })]
                                    })]
                                }), (0, p.jsxs)("div", {
                                    className: M().linkGroup,
                                    children: [(0, p.jsxs)("p", {
                                        className: M().linkGroupHd,
                                        children: ["Get", (0, p.jsx)(j.A, {})]
                                    }), (0, p.jsxs)("ul", {
                                        children: [(0, p.jsx)("li", {
                                            children: (0, p.jsx)(v(), {
                                                href: "/company/contact-sales",
                                                children: (0, p.jsx)("span", {
                                                    children: "Contact sales"
                                                })
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)(v(), {
                                                href: "/download",
                                                children: (0, p.jsx)("span", {
                                                    children: "Download"
                                                })
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)("a", {
                                                href: "/login",
                                                children: (0, p.jsx)("span", {
                                                    children: "Log in"
                                                })
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)(v(), {
                                                href: "/pricing",
                                                children: (0, p.jsx)("span", {
                                                    children: "Pricing"
                                                })
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)("a", {
                                                href: "/signup",
                                                children: (0, p.jsx)("span", {
                                                    children: "Sign up"
                                                })
                                            })
                                        })]
                                    })]
                                }), (0, p.jsxs)("div", {
                                    className: M().linkGroup,
                                    children: [(0, p.jsx)("p", {
                                        className: M().linkGroupHd,
                                        children: "Support"
                                    }), (0, p.jsxs)("ul", {
                                        children: [(0, p.jsx)("li", {
                                            children: (0, p.jsx)("a", {
                                                href: "mailto:hello@whimsical.com?subject=Contact%20Whimsical%20Support",
                                                children: (0, p.jsx)("span", {
                                                    children: "Contact support"
                                                })
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)("a", {
                                                href: "https://help.whimsical.com/",
                                                children: (0, p.jsx)("span", {
                                                    children: "Help center"
                                                })
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)("a", {
                                                href: "https://status.whimsical.com/",
                                                children: (0, p.jsx)("span", {
                                                    children: "Status"
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            }), (0, p.jsxs)("div", {
                                className: M().contentFooter,
                                children: [(0, p.jsxs)("div", {
                                    className: M().termsLinks,
                                    children: [(0, p.jsx)("a", {
                                        href: "https://trust.whimsical.com",
                                        children: (0, p.jsx)("span", {
                                            children: "Compliance"
                                        })
                                    }), (0, p.jsx)("div", {
                                        className: M().termsLinksDivider
                                    }), (0, p.jsx)(v(), {
                                        href: "/terms/privacy",
                                        children: (0, p.jsx)("span", {
                                            children: "Privacy"
                                        })
                                    }), (0, p.jsx)("div", {
                                        className: M().termsLinksDivider
                                    }), (0, p.jsx)(v(), {
                                        href: "/company/security",
                                        children: (0, p.jsx)("span", {
                                            children: "Security"
                                        })
                                    }), (0, p.jsx)("div", {
                                        className: M().termsLinksDivider
                                    }), (0, p.jsx)(v(), {
                                        href: "/terms",
                                        children: (0, p.jsx)("span", {
                                            children: "Terms"
                                        })
                                    })]
                                }), (0, p.jsxs)("div", {
                                    className: M().socialAndCopyright,
                                    children: [(0, p.jsxs)("ul", {
                                        className: M().socialLinks,
                                        children: [(0, p.jsx)("li", {
                                            children: (0, p.jsx)("a", {
                                                href: "https://www.linkedin.com/company/whimsical",
                                                target: "_blank",
                                                children: (0, p.jsx)(linkedin_circleinline, {})
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)("a", {
                                                href: "https://x.com/whimsical",
                                                target: "_blank",
                                                children: (0, p.jsx)(x_circleinline, {})
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)("a", {
                                                href: "https://www.youtube.com/@WhimsicalPowers",
                                                target: "_blank",
                                                children: (0, p.jsx)(youtube_circleinline, {})
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)("a", {
                                                href: "https://bsky.app/profile/whimsical.com",
                                                target: "_blank",
                                                children: (0, p.jsx)(bluesky_circleinline, {})
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)("a", {
                                                href: "https://www.reddit.com/r/WhimsicalApp/",
                                                target: "_blank",
                                                children: (0, p.jsx)(reddit_circleinline, {})
                                            })
                                        })]
                                    }), (0, p.jsxs)("p", {
                                        className: M().copyright,
                                        children: ["\xa9 ", x.z, " ", (0, p.jsx)(j.A, {
                                            noSpace: !0
                                        }), ", Inc."]
                                    }), (0, p.jsx)("div", {
                                        className: M().copyrightDivider
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        51583: function(e, n, l) {
            "use strict";
            l.r(n);
            var s = l(57437),
                t = l(13884),
                i = l(40150),
                r = l.n(i),
                c = l(16691),
                a = l.n(c),
                o = l(48652),
                d = l.n(o);
            let h = r().bind(d());
            n.default = e => {
                let {
                    className: n,
                    children: l,
                    iconSrc: i,
                    isDark: r,
                    gradient: c = !1,
                    accent: o = null,
                    down: p = !1,
                    up: _ = !1,
                    tag: u = "button",
                    ...x
                } = e;
                return (0, s.jsx)("div", {
                    className: h(d().wrapper, n),
                    children: (0, s.jsxs)(u, {
                        className: h(d().primaryBtn, d()[o], {
                            [d().gradient]: c,
                            [d().isDark]: r
                        }),
                        ...x,
                        children: [(0, s.jsx)("div", {
                            className: d().btnContent,
                            children: l
                        }), (0, s.jsx)("div", {
                            className: h({
                                iconWrapper: !0,
                                down: p,
                                up: _
                            }),
                            children: i ? (0, s.jsx)(a(), {
                                className: d().icon,
                                src: i,
                                alt: ""
                            }) : (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)("span", {
                                    className: h(d().arrow, d().first),
                                    children: (0, s.jsx)(t.Z, {})
                                }), (0, s.jsx)("span", {
                                    className: h(d().arrow, d().last),
                                    children: (0, s.jsx)(t.Z, {})
                                })]
                            })
                        })]
                    })
                })
            }
        },
        98497: function(e) {
            e.exports = {
                callout: "styles_callout__x6_ga",
                calloutContent: "styles_calloutContent__7T4vS",
                calloutHd: "styles_calloutHd__umTux",
                isInverted: "styles_isInverted__KsHs_",
                pointers: "styles_pointers__Xv_la",
                pointer: "styles_pointer__Lrr2A",
                hasRendered: "styles_hasRendered__fpM20",
                pointerPadder: "styles_pointerPadder__q9Gt_",
                pointerText: "styles_pointerText__z5wEf",
                pointerIcon: "styles_pointerIcon__7dp98",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__Mqt6p"
            }
        },
        37248: function(e) {
            e.exports = {
                footer: "styles_footer__VhI4k",
                wrapper: "styles_wrapper__5wI5z",
                includeCallout: "styles_includeCallout__kAoex",
                isBgDarkened: "styles_isBgDarkened__AkxU3",
                content: "styles_content__Zkrjr",
                contentHeader: "styles_contentHeader__7p4Di",
                logoLink: "styles_logoLink__tBKWa",
                downloadBtn: "styles_downloadBtn__oFCpR",
                "bounce-up-and-down": "styles_bounce-up-and-down__JsvCd",
                downloadBtnTooltip: "styles_downloadBtnTooltip__npYfx",
                downloadBtnTooltipTip: "styles_downloadBtnTooltipTip__05mB7",
                contentBody: "styles_contentBody__0E07J",
                linkGroup: "styles_linkGroup__hCbx5",
                linkGroupHd: "styles_linkGroupHd__ViBni",
                contentFooter: "styles_contentFooter__RAh77",
                termsLinks: "styles_termsLinks__EZ462",
                termsLinksDivider: "styles_termsLinksDivider__7CwsN",
                socialAndCopyright: "styles_socialAndCopyright___w2vN",
                socialLinks: "styles_socialLinks__AypGr",
                copyright: "styles_copyright__SJtSn",
                copyrightDivider: "styles_copyrightDivider__HMGZW",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__kJmBa"
            }
        },
        48652: function(e) {
            e.exports = {
                wrapper: "styles_wrapper__TwzZk",
                primaryBtn: "styles_primaryBtn__6yxCh",
                btnContent: "styles_btnContent__9IKRH",
                iconWrapper: "styles_iconWrapper__075uX",
                up: "styles_up__jJQuI",
                down: "styles_down__FLg7U",
                icon: "styles_icon__5FE82",
                arrow: "styles_arrow__ULqDf",
                last: "styles_last__e9DXz",
                first: "styles_first__qs3BI",
                isDark: "styles_isDark__970Ba",
                gradient: "styles_gradient__KqNIX",
                purple: "styles_purple__zDh5I",
                blue: "styles_blue__KvaXB",
                teal: "styles_teal__SVzO0",
                pink: "styles_pink__tHPNQ",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__WYwY7"
            }
        }
    }
]);