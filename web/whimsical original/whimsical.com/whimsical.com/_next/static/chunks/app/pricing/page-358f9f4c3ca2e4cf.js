(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9979], {
        16746: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 66407))
        },
        66407: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return page_inner
                }
            });
            var r, n, i, a = s(57437),
                l = s(69934),
                o = s(11833),
                c = s(41766),
                d = s(69565),
                h = s(61396),
                m = s.n(h),
                x = s(2265),
                j = s(16127),
                p = s(90952);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var checkinline = function(e) {
                    return p.createElement("svg", _extends({
                        width: 16,
                        height: 16,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), r || (r = p.createElement("path", {
                        d: "M3 8.5L6 11.5L13 4.5",
                        stroke: "currentColor",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })))
                },
                u = s(68924),
                g = s(63632),
                _ = s(40150),
                f = s.n(_),
                y = s(62288),
                F = s.n(y);
            let k = f().bind(F());
            var toggle = e => {
                    let {
                        className: t,
                        onClick: s,
                        isActive: r
                    } = e;
                    return (0, a.jsxs)("button", {
                        onClick: s,
                        className: k(F().toggle, t, {
                            isActive: r
                        }),
                        children: [(0, a.jsx)("span", {
                            className: F().dot
                        }), (0, a.jsx)("span", {
                            className: "visually-hidden",
                            children: r ? "Disable" : "Enable"
                        })]
                    })
                },
                b = s(90983),
                w = s(54887),
                v = s(15845),
                C = s.n(v);
            let N = f().bind(C()),
                A = "RIGHT",
                P = {
                    TOP: 216,
                    RIGHT: 240
                };
            var with_tooltip = e => {
                    let {
                        className: t,
                        tooltipContent: s,
                        children: r,
                        direction: n
                    } = e, i = n || "TOP", l = P[i], [o, c] = (0, x.useState)(null), [d, h] = (0, x.useState)(null), [m, j] = (0, x.useState)(!1), [p, u] = (0, x.useState)(!1), [{
                        bottom: g,
                        left: _,
                        top: f
                    }, y] = (0, x.useState)({
                        bottom: 0,
                        left: 0
                    }), [F, k] = (0, b.Z)(), v = (0, x.useRef)(null), onMouseEnter = () => {
                        clearTimeout(d), clearTimeout(o), j(!0);
                        let e = v.current.getBoundingClientRect();
                        "TOP" === i && y({
                            bottom: window.innerHeight - e.top + 4,
                            left: Math.min(Math.max(20, e.left + e.width / 2 - l / 2), window.innerWidth - 20 - l)
                        }), i === A && y({
                            top: e.top + e.height / 2,
                            left: e.left + e.width + 8
                        })
                    }, onMouseLeave = () => {
                        clearTimeout(d), clearTimeout(o), h(window.setTimeout(() => {
                            u(!1)
                        }, 200)), c(window.setTimeout(() => {
                            j(!1)
                        }, 400))
                    };
                    return (0, x.useEffect)(() => {
                        clearTimeout(d), clearTimeout(o), j(!1), u(!1)
                    }, [k]), (0, x.useEffect)(() => {
                        !0 === m && setTimeout(() => u(!0), 20)
                    }, [m]), (0, a.jsxs)("span", {
                        ref: v,
                        className: N(C().wrapper, t),
                        onMouseEnter,
                        onMouseLeave,
                        children: [r, m && (0, w.createPortal)((0, a.jsxs)("span", {
                            className: N(C().tooltip, {
                                isRight: i === A,
                                isTop: "TOP" === i,
                                isVisible: p
                            }),
                            onMouseEnter,
                            onMouseLeave,
                            style: {
                                bottom: g,
                                left: _,
                                top: f,
                                width: l
                            },
                            children: [s, (0, a.jsx)("span", {
                                className: C().tooltipNotch
                            })]
                        }), document.getElementById("tooltip-portal"))]
                    })
                },
                T = s(42744),
                S = s.n(T),
                D = s(43506),
                H = s.n(D),
                card_kicker = e => {
                    let {
                        className: t,
                        theme: s,
                        children: r
                    } = e;
                    return (0, a.jsx)("p", {
                        className: S()(H().cardKicker, t),
                        "data-theme": s,
                        children: r
                    })
                };

            function _typeof(e) {
                return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function infoinline_extends() {
                return (infoinline_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function _defineProperty(e, t, s) {
                var r;
                return (r = function(e, t) {
                    if ("object" != _typeof(e) || !e) return e;
                    var s = e[Symbol.toPrimitive];
                    if (void 0 !== s) {
                        var r = s.call(e, t || "default");
                        if ("object" != _typeof(r)) return r;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string"), (t = "symbol" == _typeof(r) ? r : String(r)) in e) ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            var infoinline = function(e) {
                    return p.createElement("svg", infoinline_extends({
                        width: 16,
                        height: 16,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), p.createElement("path", {
                        d: "M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z",
                        stroke: "currentColor",
                        style: _defineProperty(_defineProperty({
                            stroke: "currentColor"
                        }, "stroke", "color(display-p3 0.7255 0.6902 0.7490)"), "strokeOpacity", 1),
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), n || (n = p.createElement("path", {
                        d: "M8 4.5V5",
                        stroke: "currentColor",
                        strokeWidth: 1.5,
                        strokeLinecap: "round"
                    })), i || (i = p.createElement("path", {
                        d: "M8 7.5V11.5",
                        stroke: "currentColor",
                        strokeWidth: 1.5,
                        strokeLinecap: "round"
                    })))
                },
                I = s(75116),
                U = s(13199),
                L = s(94786),
                E = s.n(L),
                animate_width = e => {
                    let {
                        children: t
                    } = e, [s, r] = (0, x.useState)(null), n = (0, x.useRef)(null), syncWidths = () => {
                        r(n.current.getBoundingClientRect().width)
                    };
                    return (0, x.useEffect)(() => {
                        n.current && syncWidths()
                    }, [n]), (0, U.Z)(n, () => {
                        syncWidths()
                    }), (0, a.jsx)("span", {
                        className: E().outer,
                        style: {
                            width: null !== s ? s : null
                        },
                        children: (0, a.jsx)("span", {
                            className: E().inner,
                            ref: n,
                            children: t
                        })
                    })
                },
                tween_number = e => {
                    let {
                        firstNumber: t,
                        secondNumber: s,
                        isSecondNumber: r
                    } = e, n = 800 / (s - t), i = !!r, [l, o] = (0, x.useState)(!!i), [c, d] = (0, x.useState)(i ? s : t), [h, m] = (0, x.useState)(c), [j, p] = (0, x.useState)(!1);
                    return (0, x.useEffect)(() => {
                        i !== l && (o(i), d(i ? s : t), p(!0))
                    }, [t, s, i, l]), (0, x.useEffect)(() => {
                        let e;
                        return j ? e = setInterval(() => {
                            h === c ? p(!1) : c > h ? m(h + 1) : m(h - 1)
                        }, n) : clearInterval(e), () => clearInterval(e)
                    }, [j, c, h, n]), (0, a.jsx)(animate_width, {
                        children: h
                    })
                },
                q = s(54393),
                M = s.n(q);
            let B = f().bind(M()),
                Card = e => {
                    let {
                        title: t,
                        rows: s
                    } = e, [r, n] = (0, x.useState)(!0);
                    return (0, a.jsxs)("li", {
                        className: B({
                            card: !0,
                            isExpanded: r
                        }),
                        children: [(0, a.jsxs)("div", {
                            className: M().cardHeader,
                            children: [(0, a.jsx)("h3", {
                                className: M().cardTitle,
                                children: t
                            }), (0, a.jsxs)("button", {
                                onClick: () => n(!r),
                                className: M().cardToggle,
                                children: [(0, a.jsx)("span", {
                                    className: "visually-hidden",
                                    children: r ? "Collapse" : "Expanded"
                                }), (0, a.jsx)(u.Z, {})]
                            })]
                        }), (0, a.jsx)("div", {
                            className: M().cardBody,
                            children: (0, a.jsx)("table", {
                                className: M().cardTable,
                                cellSpacing: "0",
                                children: (0, a.jsxs)("tbody", {
                                    children: [(0, a.jsxs)("tr", {
                                        className: "visually-hidden",
                                        children: [(0, a.jsx)("td", {}), (0, a.jsx)("th", {
                                            children: "Free"
                                        }), (0, a.jsx)("th", {
                                            children: "Pro"
                                        }), (0, a.jsx)("td", {
                                            children: "Business"
                                        }), (0, a.jsx)("td", {
                                            children: "Enterprise"
                                        })]
                                    }), s.map(e => {
                                        let {
                                            title: t,
                                            tooltip: s,
                                            cells: r
                                        } = e;
                                        return (0, a.jsxs)("tr", {
                                            children: [(0, a.jsxs)("th", {
                                                children: [t, (0, a.jsx)(with_tooltip, {
                                                    className: M().cardTooltip,
                                                    tooltipContent: s,
                                                    direction: A,
                                                    children: (0, a.jsx)(infoinline, {})
                                                })]
                                            }), r.map((e, t) => (0, a.jsx)("td", {
                                                children: e
                                            }, t))]
                                        }, t)
                                    })]
                                })
                            })
                        })]
                    })
                },
                Dash = () => (0, a.jsx)("div", {
                    className: M().dash,
                    children: (0, a.jsx)("span", {
                        className: "visually-hidden",
                        children: "Not included"
                    })
                }),
                Check = e => {
                    let {
                        theme: t
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: M().check,
                        "data-theme": t,
                        children: [(0, a.jsx)(checkinline, {}), (0, a.jsx)("span", {
                            className: "visually-hidden",
                            children: "Included"
                        })]
                    })
                };
            var grid = e => {
                    let {
                        isMonthlyBilling: t,
                        setIsMonthlyBilling: s
                    } = e, {
                        isHidden: r
                    } = (0, x.useContext)(I.HeaderContext);
                    return (0, a.jsxs)("div", {
                        className: M().grid,
                        children: [(0, a.jsxs)("div", {
                            className: M().gridContent,
                            children: [(0, a.jsx)("div", {
                                className: B({
                                    planChooser: !0,
                                    isNavHidden: r
                                }),
                                children: (0, a.jsxs)("div", {
                                    className: B({
                                        planChooserInner: !0,
                                        isNavHidden: r
                                    }),
                                    children: [(0, a.jsx)("p", {
                                        className: M().planChooserTitle,
                                        children: "Choose the perfect plan"
                                    }), (0, a.jsxs)("ol", {
                                        className: M().planChooserOptions,
                                        children: [(0, a.jsx)("li", {
                                            children: (0, a.jsx)(c.Z, {
                                                tag: "a",
                                                href: "/signup",
                                                theme: "teal",
                                                children: "Free"
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(c.Z, {
                                                tag: "a",
                                                href: "/signup",
                                                theme: "blue",
                                                children: "Pro"
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(c.Z, {
                                                tag: "a",
                                                href: "/signup",
                                                theme: "purple",
                                                children: "Business"
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(c.Z, {
                                                tag: m(),
                                                href: "/company/contact-sales",
                                                theme: "pink",
                                                children: "Enterprise"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: M().cards,
                                children: (0, a.jsxs)("ol", {
                                    className: M().cardsList,
                                    children: [(0, a.jsx)(Card, {
                                        title: "Create and build",
                                        rows: [{
                                            title: "Boards",
                                            tooltip: "File type for diagramming, wireframing and other visual thinking.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: "3"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Docs",
                                            tooltip: "File type for text editing with embeds and tables.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Projects",
                                            tooltip: "File type for organizing tasks, documentation, and posts.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Tasks and subtasks",
                                            tooltip: "Action item in a project with status, assignee, and tags.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: "100 (excludes archive)"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Nested files",
                                            tooltip: (0, a.jsxs)(a.Fragment, {
                                                children: ["Create ", (0, a.jsx)(g.A, {}), " files inside other ", (0, a.jsx)(g.A, {}), " files to organize and share important related information."]
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "teal"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Version history",
                                            tooltip: "Version history enables you to track changes to a file and revert to previous versions.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: "7 days"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "90 days"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "1 year"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Custom themes",
                                            tooltip: "Use themes to customize the colors of your entire workspace or individual files.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Custom templates",
                                            tooltip: "Templates are files created with reusable content you can add to another file or use as a starting point when creating a new file.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "100"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Backlinks",
                                            tooltip: (0, a.jsxs)(a.Fragment, {
                                                children: ["When you link to or mention another file from somewhere in", " ", (0, a.jsx)(g.A, {
                                                    noSpace: !0
                                                }), ", that file will display a backlink to the file where it was linked from."]
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "teal"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Voting",
                                            tooltip: "Add votes to cards and sticky notes with your team in real time.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Timer",
                                            tooltip: "Set a time limit for certain activities, like brainstorming or voting.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Export options",
                                            tooltip: "Advanced export options enable you to export a whole board, selection, or frame at 2x resolution with a transparent background and no watermark.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsxs)("ul", {
                                                    children: [(0, a.jsx)("li", {
                                                        children: "1x resolution only"
                                                    }), (0, a.jsx)("li", {
                                                        children: "Whole board only"
                                                    }), (0, a.jsx)("li", {
                                                        children: "Includes background"
                                                    }), (0, a.jsxs)("li", {
                                                        children: [(0, a.jsx)(g.A, {
                                                            noSpace: !0
                                                        }), " watermark"]
                                                    })]
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Advanced export options"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Advanced export options"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Advanced export options"
                                            })]
                                        }, {
                                            title: "AI actions",
                                            tooltip: "Use AI to generate diagrams, sticky notes, and tasks in seconds.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: "100 / editor"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "500 / editor / month"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "1000 / editor / month"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "2000 / editor / month"
                                            })]
                                        }, {
                                            title: "Desktop app",
                                            tooltip: (0, a.jsxs)(a.Fragment, {
                                                children: ["Download ", (0, a.jsx)(g.A, {}), " for macOS ", (0, a.jsx)(m(), {
                                                    href: "/download",
                                                    children: "here"
                                                }), "."]
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "teal"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }]
                                    }), (0, a.jsx)(Card, {
                                        title: "Collaboration",
                                        rows: [{
                                            title: "Real-time collaboration",
                                            tooltip: "Work together in the same file at the same time with other collaborators.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "teal"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Editors",
                                            tooltip: "Can access, comment on, and edit all shared files in a workspace. Can also create new files and folders. This is a paid role (except for Free plans).",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Viewers",
                                            tooltip: "Can access and comment on all shared files in a workspace. Viewers are free. Viewers can request to be upgraded to Editors.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Guests",
                                            tooltip: "Invite individuals who need limited or temporary access to certain folders or files, such as external collaborators (contractors, clients, etc.) or co-workers who only need occasional access. Guests are free.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: "10"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "50"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "100"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Starting at 200"
                                            })]
                                        }, {
                                            title: "Teams",
                                            tooltip: "Teams allow you to organize different groups of people and information. Teams are visible to everyone in the workspace and all workspace members can join.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: "3"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "6"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Private teams",
                                            tooltip: "A private team is a team that is only visible to members and can only be joined by invitation.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Public share link access",
                                            tooltip: "Allow people outside of your workspace to view, comment, or edit a specific file.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: "View only and comment"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "View, comment, and edit"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "View, comment, and edit"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "View, comment, and edit"
                                            })]
                                        }, {
                                            title: "Password protected files",
                                            tooltip: "Allows you to protect a file or folder with a password.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Notification inbox",
                                            tooltip: (0, a.jsxs)(a.Fragment, {
                                                children: ["View @-mentions, comments, replies, file access requests, and more—all within", " ", (0, a.jsx)(g.A, {
                                                    noSpace: !0
                                                }), "."]
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "teal"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Posts",
                                            tooltip: "Keep team members informed on project progress, share team check-ins, request feedback, and more. Automatically share posts to Slack for greater visibility.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "teal"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Custom post templates",
                                            tooltip: "Create reusable post templates with writing prompts or other info to streamline your workflow in Posts.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "teal"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }]
                                    }), (0, a.jsx)(Card, {
                                        title: "Integrations",
                                        rows: [{
                                            title: "Task importer (CSV format)",
                                            tooltip: "Upload a CSV file to import tasks from other tools, including Asana, ClickUp, Jira, Notion, ClickUp, Trello, and more.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "teal"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: (0, a.jsxs)(a.Fragment, {
                                                children: ["Live ", (0, a.jsx)(g.A, {}), " embeds"]
                                            }),
                                            tooltip: (0, a.jsxs)(a.Fragment, {
                                                children: ["Embed live ", (0, a.jsx)(g.A, {}), " files where you need them in other tools. Learn more", " ", (0, a.jsx)("a", {
                                                    target: "_blank",
                                                    href: "https://help.whimsical.com/imports-exports",
                                                    children: "here."
                                                })]
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: "Public and private"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Public and private"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Public and private"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Public and private"
                                            })]
                                        }, {
                                            title: "Third-party embeds",
                                            tooltip: (0, a.jsxs)(a.Fragment, {
                                                children: ["Embed live views from your other tools into ", (0, a.jsx)(g.A, {}), " files."]
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "teal"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Slack integration",
                                            tooltip: (0, a.jsxs)(a.Fragment, {
                                                children: ["With the ", (0, a.jsx)(g.A, {}), " integration for Slack, you can create tasks, receive notifications, see rich previews, and more—all within Slack. Learn more", " ", (0, a.jsx)("a", {
                                                    target: "_blank",
                                                    href: "https://help.whimsical.com/integrations/slack",
                                                    children: "here."
                                                })]
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "teal"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "GitHub integration",
                                            tooltip: (0, a.jsxs)(a.Fragment, {
                                                children: ["Show GitHub backlinks when you integrate your ", (0, a.jsx)(g.A, {}), " account with GitHub. Learn more", " ", (0, a.jsx)("a", {
                                                    target: "_blank",
                                                    href: "https://help.whimsical.com/integrations/github",
                                                    children: "here."
                                                })]
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Front integration",
                                            tooltip: (0, a.jsxs)(a.Fragment, {
                                                children: ["Link customer conversations in Front to ", (0, a.jsx)(g.A, {}), " tasks. Quickly search, link, or create tasks directly from Front. Learn more", " ", (0, a.jsx)("a", {
                                                    target: "_blank",
                                                    href: "https://help.whimsical.com/integrations/front-integration",
                                                    children: "here."
                                                })]
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }]
                                    }), (0, a.jsx)(Card, {
                                        title: "Admin",
                                        rows: [{
                                            title: "Admin role",
                                            tooltip: (0, a.jsx)(a.Fragment, {
                                                children: "Admins can change workspace member roles and other workspace settings."
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: "Every member is an admin"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Ability to choose who has admin access"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Ability to choose who has admin access"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Ability to choose who has admin access"
                                            })]
                                        }, {
                                            title: "Role management",
                                            tooltip: (0, a.jsx)(a.Fragment, {
                                                children: "Admins are able to set workspace members to editors or viewers."
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "teal"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "blue"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "User offboarding file transfers",
                                            tooltip: (0, a.jsx)(a.Fragment, {
                                                children: "When offboarding a user, an admin is able to move all the user’s “My Files” to a new destination."
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Flexible licensing",
                                            tooltip: (0, a.jsx)(a.Fragment, {
                                                children: "Purchase the amount of licenses you think you’ll need based on a good faith estimate. Additional editors added during the contract term will not increase total cost of your contract."
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Payment method",
                                            tooltip: (0, a.jsx)(a.Fragment, {
                                                children: "Annual contracts greater than $10K USD are eligible for payment by invoice."
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: "Credit card only"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Credit card only"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Credit card only"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Credit card or invoicing"
                                            })]
                                        }, {
                                            title: "Flexible payment terms",
                                            tooltip: (0, a.jsx)(a.Fragment, {
                                                children: "Select quarterly or semi-annual payments. Requires an annual contract greater than $10K USD."
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Negotiable Master Service Agreement",
                                            tooltip: (0, a.jsx)(a.Fragment, {
                                                children: "Negotiate changes or additions to the Master Service Agreement. Requires an annual contract greater than $25K USD."
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }]
                                    }), (0, a.jsx)(Card, {
                                        title: "Security",
                                        rows: [{
                                            title: "SAML Single Sign-On (SSO)",
                                            tooltip: (0, a.jsxs)(a.Fragment, {
                                                children: [(0, a.jsx)(g.A, {}), " offers SSO based on SAML. Learn more about our supported SAML providers", " ", (0, a.jsx)("a", {
                                                    target: "_blank",
                                                    href: "https://help.whimsical.com/security/saml-sso",
                                                    children: "here"
                                                }), "."]
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "SCIM",
                                            tooltip: (0, a.jsxs)(a.Fragment, {
                                                children: ["System for cross-domain identity management. Automatically provision members in and out of your workspace via your identity provider. Learn more", " ", (0, a.jsx)("a", {
                                                    target: "_blank",
                                                    href: "https://help.whimsical.com/security",
                                                    children: "here"
                                                }), "."]
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Domain management",
                                            tooltip: (0, a.jsx)(a.Fragment, {
                                                children: "Allow people with matching email domains to automatically join your company’s workspace. Also allows admins to block new workspace creation."
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: "Auto-join workspace based on domain matching"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Auto-join workspace based on domain matching"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Auto-join workspace based on domain matching"
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: "Auto-join workspace based on domain matching and ability for admins to block creation of new workspaces"
                                            })]
                                        }, {
                                            title: "Content security lock",
                                            tooltip: (0, a.jsx)(a.Fragment, {
                                                children: "Enhanced controls locking down sharing on a workspace, team, or file level."
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Custom security reviews",
                                            tooltip: (0, a.jsxs)(a.Fragment, {
                                                children: ["If you cannot find what you need in our", " ", (0, a.jsx)("a", {
                                                    target: "_blank",
                                                    href: "https://trust.whimsical.com",
                                                    children: "trust center"
                                                }), ", we will provide additional security-related information and documentation in for procurement on an as needed basis. Requires an annual contract greater than $25K USD."]
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }]
                                    }), (0, a.jsx)(Card, {
                                        title: "Support",
                                        rows: [{
                                            title: "Priority support",
                                            tooltip: "Faster replies to support questions.",
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "purple"
                                                })
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Dedicated success manager",
                                            tooltip: (0, a.jsxs)(a.Fragment, {
                                                children: ["Our team of customer success managers are here to help you get the most out of", " ", (0, a.jsx)(g.A, {}), "."]
                                            }),
                                            cells: [(0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Dash, {})
                                            }), (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(Check, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }]
                                    })]
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: M().gridFooter,
                            children: (0, a.jsxs)("div", {
                                className: M().gridFooterInner,
                                children: [(0, a.jsx)("div", {
                                    className: M().gridFooterHeader,
                                    children: (0, a.jsxs)("div", {
                                        className: M().gridFooterAnnualBilling,
                                        children: ["Annual billing", (0, a.jsx)(toggle, {
                                            className: M().gridFooterToggle,
                                            isActive: !t,
                                            onClick: () => s(!t)
                                        })]
                                    })
                                }), (0, a.jsxs)("ol", {
                                    className: M().gridFooterPlans,
                                    children: [(0, a.jsxs)("li", {
                                        children: [(0, a.jsx)(card_kicker, {
                                            className: M().gridFooterPlanCardKicker,
                                            theme: "teal",
                                            children: "Free"
                                        }), (0, a.jsxs)("p", {
                                            className: M().gridFooterPlanPrice,
                                            children: [(0, a.jsx)("b", {
                                                children: "$0"
                                            }), " / Month / Editor"]
                                        }), (0, a.jsx)("p", {
                                            className: M().gridFooterPlanDescription,
                                            children: "For personal projects and flexible collaboration"
                                        }), (0, a.jsx)(c.Z, {
                                            className: M().gridFooterPlanBtn,
                                            invert: !0,
                                            href: "/signup",
                                            tag: "a",
                                            children: "Get started"
                                        })]
                                    }), (0, a.jsxs)("li", {
                                        children: [(0, a.jsx)(card_kicker, {
                                            className: M().gridFooterPlanCardKicker,
                                            theme: "blue",
                                            children: "Pro"
                                        }), (0, a.jsxs)("p", {
                                            className: M().gridFooterPlanPrice,
                                            children: [(0, a.jsxs)("b", {
                                                children: ["$", (0, a.jsx)(tween_number, {
                                                    firstNumber: 10,
                                                    secondNumber: 12,
                                                    isSecondNumber: t
                                                })]
                                            }), " ", "/ Month / Editor"]
                                        }), (0, a.jsx)("p", {
                                            className: M().gridFooterPlanDescription,
                                            children: "For small-but-mighty teams or individuals"
                                        }), (0, a.jsx)(c.Z, {
                                            className: M().gridFooterPlanBtn,
                                            invert: !0,
                                            href: "/signup",
                                            tag: "a",
                                            children: "Start free trial"
                                        })]
                                    }), (0, a.jsxs)("li", {
                                        children: [(0, a.jsx)(card_kicker, {
                                            className: M().gridFooterPlanCardKicker,
                                            theme: "purple",
                                            children: "Business"
                                        }), (0, a.jsxs)("p", {
                                            className: M().gridFooterPlanPrice,
                                            children: [(0, a.jsxs)("b", {
                                                children: ["$", (0, a.jsx)(tween_number, {
                                                    firstNumber: 15,
                                                    secondNumber: 18,
                                                    isSecondNumber: t
                                                })]
                                            }), " ", "/ Month / Editor"]
                                        }), (0, a.jsx)("p", {
                                            className: M().gridFooterPlanDescription,
                                            children: "For large teams or entire organizations"
                                        }), (0, a.jsx)(c.Z, {
                                            className: M().gridFooterPlanBtn,
                                            invert: !0,
                                            href: "/signup",
                                            tag: "a",
                                            children: "Start free trial"
                                        })]
                                    }), (0, a.jsxs)("li", {
                                        children: [(0, a.jsx)(card_kicker, {
                                            className: M().gridFooterPlanCardKicker,
                                            theme: "pink",
                                            children: "Enterprise"
                                        }), (0, a.jsxs)("p", {
                                            className: M().gridFooterPlanPrice,
                                            children: [(0, a.jsx)("b", {
                                                children: "$20"
                                            }), " / Month / Editor"]
                                        }), (0, a.jsx)("p", {
                                            className: M().gridFooterPlanDescription,
                                            children: "For organizations who need advanced controls"
                                        }), (0, a.jsx)(c.Z, {
                                            className: M().gridFooterPlanBtn,
                                            invert: !0,
                                            href: "/company/contact-sales",
                                            tag: m(),
                                            children: "Contact sales"
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                },
                O = s(87358),
                W = s.n(O),
                compare = e => {
                    let {
                        isMonthlyBilling: t,
                        setIsMonthlyBilling: s
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: W().compare,
                        id: "compare",
                        children: [(0, a.jsx)("div", {
                            className: W().intro,
                            children: (0, a.jsxs)("div", {
                                className: W().introInner,
                                children: [(0, a.jsx)(j.Z, {
                                    children: "For teams of 1 to 1000+"
                                }), (0, a.jsx)("h2", {
                                    className: W().hd,
                                    children: "Compare plans and features"
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: W().content,
                            children: (0, a.jsx)(grid, {
                                isMonthlyBilling: t,
                                setIsMonthlyBilling: s
                            })
                        })]
                    })
                },
                R = s(22092),
                K = s.n(R);
            let V = f().bind(K()),
                Z = [{
                    q: (0, a.jsxs)(a.Fragment, {
                        children: ["Can I use ", (0, a.jsx)(g.A, {}), " for free?"]
                    }),
                    a: "Yes! With our free Starter plan, you get unlimited private files, unlimited shared docs, 3 team boards for collaborating, and 100 AI actions."
                }, {
                    q: "What types of payment do you accept?",
                    a: "We accept all major credit and debit cards. For Enterprise plans, we also accept wire and ACH transfers."
                }, {
                    q: "How many free workspaces can I create?",
                    a: "You can create 2 free workspaces and switch between them seamlessly."
                }, {
                    q: "Do you offer discounts for non-profits?",
                    a: (0, a.jsxs)(a.Fragment, {
                        children: ["Yes, we gladly offer a 20% discount to non-profit organizations.", " ", (0, a.jsx)("a", {
                            href: "mailto:help@whimsical.com",
                            children: "Contact us"
                        }), " to learn more."]
                    })
                }, {
                    q: "Do you offer discounts for students and teachers?",
                    a: (0, a.jsxs)(a.Fragment, {
                        children: ["Yes, students and teachers can use ", (0, a.jsx)(g.A, {}), " free of charge. Sign up and", " ", (0, a.jsx)("a", {
                            href: "https://whimsicalpowers.typeform.com/to/oK8ZTz?typeform-source=whimsical.com",
                            children: "fill out this form"
                        }), " ", "to apply."]
                    })
                }, {
                    q: "Can I collaborate with people outside my organization?",
                    a: "Yes, you can share files with people outside your workspace or invite them into your workspace as guests. On our free Starter plan, guests have view and comment access, while on the Pro plan, you have the flexibility to invite them as editors, commenters, or viewers."
                }],
                Question = e => {
                    let {
                        question: t
                    } = e, [s, r] = (0, x.useState)(!1), [n, i] = (0, x.useState)(!1);
                    return (0, a.jsx)("li", {
                        className: V({
                            question: !0,
                            isOpen: s,
                            isHovered: n
                        }),
                        children: (0, a.jsxs)("div", {
                            className: K().questionInner,
                            children: [(0, a.jsx)("button", {
                                className: K().questionQ,
                                onClick: () => r(!s),
                                onMouseEnter: () => i(!0),
                                onMouseLeave: () => i(!1),
                                children: t.q
                            }), (0, a.jsx)("p", {
                                className: K().questionA,
                                children: t.a
                            })]
                        })
                    })
                };
            var faq = () => (0, a.jsxs)("div", {
                    id: "faqs",
                    className: K().faq,
                    children: [(0, a.jsx)("h2", {
                        className: K().faqHd,
                        children: "Frequently asked questions"
                    }), (0, a.jsx)("ul", {
                        className: K().questions,
                        children: Z.map(e => (0, a.jsx)(Question, {
                            question: e
                        }, e.q))
                    })]
                }),
                G = s(8537),
                Q = s(16691),
                z = s.n(Q),
                Y = {
                    src: "/_next/static/media/carbon-removal-icon.fb6cc718.svg",
                    height: 36,
                    width: 37,
                    blurWidth: 0,
                    blurHeight: 0
                },
                J = s(13884),
                X = s(13560),
                $ = s(40889),
                ee = s.n($);
            let cards_Card = e => {
                    let {
                        kicker: t,
                        kickerTheme: s,
                        isAnnualOnly: r,
                        price: n,
                        description: i,
                        btnHref: l,
                        btnText: o,
                        featuresHd: d,
                        features: h
                    } = e;
                    return (0, a.jsxs)("li", {
                        className: ee().card,
                        children: [(0, a.jsxs)("div", {
                            className: ee().cardKickerWrapper,
                            children: [(0, a.jsx)(card_kicker, {
                                theme: s,
                                children: t
                            }), r && (0, a.jsx)(card_kicker, {
                                className: ee().cardKickerAddendum,
                                children: "Billed annually"
                            })]
                        }), (0, a.jsxs)("h2", {
                            className: ee().cardPrice,
                            children: [(0, a.jsxs)("span", {
                                className: ee().cardPriceAmount,
                                children: ["$", n]
                            }), (0, a.jsx)("span", {
                                className: ee().cardPricePer,
                                children: "/ Month / Editor"
                            })]
                        }), (0, a.jsx)("div", {
                            className: ee().cardPriceDivider
                        }), (0, a.jsx)("p", {
                            className: ee().cardDescription,
                            children: i
                        }), (0, a.jsx)(c.Z, {
                            invert: !0,
                            tag: "/signup" === l ? "a" : m(),
                            href: l,
                            children: o
                        }), (0, a.jsx)("h3", {
                            className: ee().cardFeaturesHd,
                            children: d
                        }), (0, a.jsx)("ul", {
                            className: ee().cardFeaturesList,
                            children: h && h.map((e, t) => (0, a.jsx)("li", {
                                children: e
                            }, t))
                        })]
                    })
                },
                ReadMoreLink = e => {
                    let {
                        id: t,
                        className: s,
                        children: r
                    } = e;
                    return (0, a.jsxs)("a", {
                        href: "#" + t,
                        className: s,
                        onClick: e => (0, X.D)(e, t),
                        children: [r, (0, a.jsx)("span", {
                            children: (0, a.jsx)(J.Z, {})
                        })]
                    })
                };
            var cards = e => {
                    let {
                        isMonthlyBilling: t
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: ee().cards,
                        children: [(0, a.jsxs)("ol", {
                            className: ee().cardList,
                            children: [(0, a.jsx)(cards_Card, {
                                kicker: "Free",
                                kickerTheme: "teal",
                                price: 0,
                                description: "For personal projects and flexible collaboration",
                                btnHref: "/signup",
                                btnText: "Get started",
                                featuresHd: "Free includes:",
                                features: [(0, a.jsxs)(a.Fragment, {
                                    children: ["Unlimited", " ", (0, a.jsx)(with_tooltip, {
                                        className: ee().cardTooltipText,
                                        tooltipContent: "Workspace members are able to access your workspace as editors or viewers.",
                                        children: "workspace members"
                                    })]
                                }), (0, a.jsxs)(a.Fragment, {
                                    children: ["All ", (0, a.jsx)(g.A, {}), (0, a.jsx)(with_tooltip, {
                                        className: ee().cardTooltipText,
                                        tooltipContent: (0, a.jsxs)(a.Fragment, {
                                            children: ["Projects, docs, and boards are different types of files in ", (0, a.jsx)(g.A, {}), "."]
                                        }),
                                        children: "file types"
                                    })]
                                }), (0, a.jsx)(a.Fragment, {
                                    children: "3 team boards"
                                }), (0, a.jsx)(a.Fragment, {
                                    children: "100 team tasks"
                                }), (0, a.jsxs)(a.Fragment, {
                                    children: ["3", " ", (0, a.jsx)(with_tooltip, {
                                        className: ee().cardTooltipText,
                                        tooltipContent: "Teams allow you to organize different groups of people and information.",
                                        children: "teams"
                                    })]
                                }), (0, a.jsxs)(a.Fragment, {
                                    children: ["10", " ", (0, a.jsx)(with_tooltip, {
                                        className: ee().cardTooltipText,
                                        tooltipContent: "Invite individuals who need limited or temporary access to certain folders or files.",
                                        children: "guests"
                                    })]
                                }), (0, a.jsxs)(a.Fragment, {
                                    children: ["7-day", " ", (0, a.jsx)(with_tooltip, {
                                        className: ee().cardTooltipText,
                                        tooltipContent: "Use version history to view previous versions of any file and restore it to any earlier state.",
                                        children: "version history"
                                    })]
                                }), (0, a.jsxs)(a.Fragment, {
                                    children: ["100", " ", (0, a.jsx)(with_tooltip, {
                                        className: ee().cardTooltipText,
                                        tooltipContent: "Use AI to generate diagrams, sticky notes, and tasks in seconds.",
                                        children: "AI actions"
                                    }), " ", "/ editor"]
                                })]
                            }), (0, a.jsx)(cards_Card, {
                                kicker: "Pro",
                                kickerTheme: "blue",
                                price: (0, a.jsx)(tween_number, {
                                    firstNumber: 10,
                                    secondNumber: 12,
                                    isSecondNumber: t
                                }),
                                description: "For small-but-mighty teams or individuals",
                                btnText: "Start free trial",
                                btnHref: "/signup",
                                featuresHd: "Everything in Free, and:",
                                features: [(0, a.jsx)(a.Fragment, {
                                    children: "Unlimited team files and tasks"
                                }), (0, a.jsx)(a.Fragment, {
                                    children: "100 custom templates"
                                }), (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(with_tooltip, {
                                        className: ee().cardTooltipText,
                                        tooltipContent: "A private team is only visible to invited members within the workspace.",
                                        children: "Private teams"
                                    })
                                }), (0, a.jsx)(a.Fragment, {
                                    children: "6 teams"
                                }), (0, a.jsx)(a.Fragment, {
                                    children: "50 guests"
                                }), (0, a.jsx)(a.Fragment, {
                                    children: "90-day version history"
                                }), (0, a.jsx)(a.Fragment, {
                                    children: "500 AI actions / editor / month"
                                }), (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(with_tooltip, {
                                        className: ee().cardTooltipText,
                                        tooltipContent: "Assign admin access to specific users. Admins can change workspace member roles and other workspace settings.",
                                        children: "Admin roles"
                                    })
                                })]
                            }), (0, a.jsx)(cards_Card, {
                                kicker: "Business",
                                kickerTheme: "purple",
                                price: (0, a.jsx)(tween_number, {
                                    firstNumber: 15,
                                    secondNumber: 18,
                                    isSecondNumber: t
                                }),
                                description: "For large teams or entire organizations",
                                btnText: "Start free trial",
                                btnHref: "/signup",
                                featuresHd: "Everything in Pro, and:",
                                features: [(0, a.jsx)(a.Fragment, {
                                    children: "Unlimited teams"
                                }), (0, a.jsx)(a.Fragment, {
                                    children: "Unlimited custom templates"
                                }), (0, a.jsx)(a.Fragment, {
                                    children: "100 guests"
                                }), (0, a.jsx)(a.Fragment, {
                                    children: "1-year version history"
                                }), (0, a.jsx)(a.Fragment, {
                                    children: "1000 AI actions / editor / month"
                                }), (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(with_tooltip, {
                                        className: ee().cardTooltipText,
                                        tooltipContent: "Set up SSO based on SAML for your workspace.",
                                        children: "SSO / SAML"
                                    })
                                })]
                            }), (0, a.jsx)(cards_Card, {
                                kicker: "Enterprise",
                                kickerTheme: "pink",
                                price: 20,
                                description: "For organizations who need advanced controls and support",
                                btnText: "Contact sales",
                                btnHref: "/company/contact-sales",
                                isAnnualOnly: !0,
                                featuresHd: "Everything in Business, and:",
                                features: [(0, a.jsx)(a.Fragment, {
                                    children: "Starting at 200 guests"
                                }), (0, a.jsx)(a.Fragment, {
                                    children: "Unlimited version history"
                                }), (0, a.jsx)(a.Fragment, {
                                    children: "2000 AI actions / editor / month"
                                }), (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(with_tooltip, {
                                        className: ee().cardTooltipText,
                                        tooltipContent: "Automatically provision members in and out of your workspace via your identity provider.",
                                        children: "SCIM"
                                    })
                                }), (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(with_tooltip, {
                                        className: ee().cardTooltipText,
                                        tooltipContent: "Block creation of new workspaces for your email domain, access and move files of offboarded users, and more.",
                                        children: "Advanced security controls"
                                    })
                                }), (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(with_tooltip, {
                                        className: ee().cardTooltipText,
                                        tooltipContent: "Your help requests are answered before customers with Free, Pro, or Business plans.",
                                        children: "Priority support"
                                    })
                                }), (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(with_tooltip, {
                                        className: ee().cardTooltipText,
                                        tooltipContent: (0, a.jsxs)(a.Fragment, {
                                            children: ["Our team of customer success managers are here to help you get the most out of", " ", (0, a.jsx)(g.A, {}), "."]
                                        }),
                                        children: "Dedicated success manager"
                                    })
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: ee().readMoreLinks,
                            children: [(0, a.jsx)(ReadMoreLink, {
                                className: ee().hideOnMobile,
                                id: "compare",
                                children: "See feature comparison"
                            }), (0, a.jsx)(ReadMoreLink, {
                                id: "faqs",
                                children: "Explore our FAQs"
                            })]
                        })]
                    })
                },
                et = s(23382),
                es = s.n(et);
            let er = f().bind(es()),
                HiddenCurrentlyViewingText = () => (0, a.jsx)("span", {
                    className: "visually-hidden",
                    children: "(Currently viewing)"
                });
            var hero = e => {
                    let {
                        isMonthlyBilling: t,
                        setIsMonthlyBilling: s
                    } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: es().hero,
                            children: (0, a.jsxs)("div", {
                                className: es().heroInner,
                                children: [(0, a.jsxs)("div", {
                                    className: es().heroHeader,
                                    children: [(0, a.jsx)("h1", {
                                        className: es().heroHd,
                                        children: "Pricing"
                                    }), (0, a.jsxs)("p", {
                                        className: es().heroDescription,
                                        children: ["Use ", (0, a.jsx)(g.A, {}), " for free, or upgrade for advanced features and controls. Viewers are always free."]
                                    }), (0, a.jsxs)("button", {
                                        className: es().toggle,
                                        onClick: () => s(!t),
                                        children: [(0, a.jsxs)("span", {
                                            className: er({
                                                togglePill: !0,
                                                isActive: !t
                                            }),
                                            children: [!t && (0, a.jsx)(HiddenCurrentlyViewingText, {}), "Annual", (0, a.jsx)("span", {
                                                className: es().toggleDiscount,
                                                children: "-17%"
                                            })]
                                        }), (0, a.jsxs)("span", {
                                            className: er({
                                                togglePill: !0,
                                                isActive: t
                                            }),
                                            children: [t && (0, a.jsx)(HiddenCurrentlyViewingText, {}), "Monthly"]
                                        })]
                                    })]
                                }), (0, a.jsx)(cards, {
                                    isMonthlyBilling: t
                                }), (0, a.jsxs)("div", {
                                    className: es().socialProof,
                                    children: [(0, a.jsxs)("h2", {
                                        className: es().socialProofHd,
                                        children: [(0, a.jsx)(g.A, {}), " powers the world’s top teams, from startups to enterprises."]
                                    }), (0, a.jsx)("ul", {
                                        className: es().socialProofLogos,
                                        children: G.Z.map(e => {
                                            let [t, s] = e;
                                            return (0, a.jsx)("li", {
                                                children: (0, a.jsx)(s, {})
                                            }, t)
                                        })
                                    })]
                                })]
                            })
                        }), (0, a.jsxs)("p", {
                            className: es().carbonRemoval,
                            children: [(0, a.jsx)(z(), {
                                src: Y,
                                alt: "",
                                width: 38,
                                height: 38
                            }), (0, a.jsxs)("span", {
                                children: ["We ", (0, a.jsx)(m(), {
                                    href: "/blog/investing-in-a-sustainable-future",
                                    children: "contribute 1% of purchases"
                                }), " to fund next-generation carbon removal."]
                            })]
                        })]
                    })
                },
                en = {
                    src: "/_next/static/media/ccpa.e2166a6a.svg",
                    height: 65,
                    width: 57,
                    blurWidth: 0,
                    blurHeight: 0
                },
                ei = {
                    src: "/_next/static/media/gdpr.e9bf93da.svg",
                    height: 71,
                    width: 72,
                    blurWidth: 0,
                    blurHeight: 0
                },
                ea = {
                    src: "/_next/static/media/soc2@2x.a614b7da.webp",
                    height: 144,
                    width: 144,
                    blurDataURL: "data:image/webp;base64,UklGRrwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABN6AmAAFGLQ0ldq0aERG4HwpsI9lqKymigMPlPvcdkCPTAFJE/2PnXyx4LRwFTkGxcBa8e34CAFZQOCBeAAAAcAIAnQEqCAAIAAJAOCWwAnS6AfgBM/wJ8u+qAAD+g9y1xMMxf8fnSR8T6IPHSiqeIyL6iWlDjrm5+iiQXup6oEPsU9n/xvIO6m0V9eA//mCk9QroVN4ZAk3xS2AAAA==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                el = s(6634),
                eo = s.n(el),
                security = () => (0, a.jsx)("div", {
                    className: eo().security,
                    children: (0, a.jsxs)("div", {
                        className: eo().securityInner,
                        children: [(0, a.jsxs)("div", {
                            className: eo().securityContent,
                            children: [(0, a.jsx)("h2", {
                                className: eo().securityHd,
                                children: "Safe and secure"
                            }), (0, a.jsxs)("p", {
                                className: eo().securityDescription,
                                children: [(0, a.jsx)(g.A, {}), " is committed to helping customers comply with their GDPR and CCPA requirements, and are SOC 2 Type 2 compliant."]
                            }), (0, a.jsx)(c.Z, {
                                tag: "a",
                                invert: !0,
                                href: "https://trust.whimsical.com/",
                                children: "View compliance"
                            })]
                        }), (0, a.jsxs)("ul", {
                            className: eo().logos,
                            children: [(0, a.jsxs)("li", {
                                children: [(0, a.jsx)("div", {
                                    className: eo().logoImgWrapper,
                                    children: (0, a.jsx)(z(), {
                                        src: ei,
                                        width: 72,
                                        height: 71,
                                        alt: ""
                                    })
                                }), (0, a.jsx)("abbr", {
                                    className: eo().logoTitle,
                                    title: "General Data Protection Regulation",
                                    children: "GDPR"
                                })]
                            }), (0, a.jsxs)("li", {
                                children: [(0, a.jsx)("div", {
                                    className: eo().logoImgWrapper,
                                    children: (0, a.jsx)(z(), {
                                        src: en,
                                        width: 57,
                                        height: 65,
                                        alt: ""
                                    })
                                }), (0, a.jsx)("abbr", {
                                    className: eo().logoTitle,
                                    title: "California Consumer Privacy Act",
                                    children: "CCPA"
                                })]
                            }), (0, a.jsxs)("li", {
                                children: [(0, a.jsx)("div", {
                                    className: eo().logoImgWrapper,
                                    children: (0, a.jsx)(z(), {
                                        src: ea,
                                        width: 72,
                                        height: 72,
                                        alt: ""
                                    })
                                }), (0, a.jsx)("abbr", {
                                    className: eo().logoTitle,
                                    title: "Service Organization Control Type 2",
                                    children: "SOC 2"
                                })]
                            })]
                        })]
                    })
                }),
                ec = s(39073),
                ed = s.n(ec),
                page_inner = () => {
                    let [e, t] = (0, x.useState)();
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(o.default, {}), (0, a.jsxs)("main", {
                            children: [(0, a.jsx)(hero, {
                                isMonthlyBilling: e,
                                setIsMonthlyBilling: t
                            }), (0, a.jsx)(compare, {
                                isMonthlyBilling: e,
                                setIsMonthlyBilling: t
                            }), (0, a.jsx)(d.default, {
                                introDescription: "Apply to Whimsical for Startups and get 12 months of our Pro plan free with no future commitment.",
                                ctaComponent: m(),
                                children: (0, a.jsx)(c.Z, {
                                    tag: m(),
                                    invert: !0,
                                    className: ed().startupLearnMoreBtn,
                                    href: "/startups",
                                    children: "Learn more"
                                })
                            }), (0, a.jsx)(security, {}), (0, a.jsx)(faq, {})]
                        }), (0, a.jsx)(l.default, {
                            includeCallout: !0
                        })]
                    })
                }
        },
        13560: function(e, t, s) {
            "use strict";
            s.d(t, {
                D: function() {
                    return smoothScrollToId
                }
            });
            let smoothScrollToId = function(e, t) {
                let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                e.preventDefault(), history.pushState({}, "", "#".concat(t));
                let r = document.querySelector("#".concat(t)),
                    n = window.scrollY + r.getBoundingClientRect().top + s;
                window.scrollTo({
                    left: 0,
                    top: n,
                    behavior: "smooth"
                })
            }
        },
        41766: function(e, t, s) {
            "use strict";
            var r = s(57437),
                n = s(40150),
                i = s.n(n),
                a = s(71215),
                l = s.n(a);
            let o = i().bind(l());
            t.Z = e => {
                let {
                    children: t,
                    className: s,
                    inline: n,
                    tag: i = "button",
                    theme: a,
                    invert: c,
                    ...d
                } = e;
                return (0, r.jsx)(i, {
                    "data-theme": a,
                    className: o(l().secondaryBtn, s, {
                        inline: n,
                        invert: c
                    }),
                    ...d,
                    children: (0, r.jsx)("span", {
                        className: l().inner,
                        children: t
                    })
                })
            }
        },
        16127: function(e, t, s) {
            "use strict";
            var r = s(57437),
                n = s(16446),
                i = s.n(n);
            t.Z = e => {
                let {
                    children: t
                } = e;
                return (0, r.jsx)("p", {
                    className: i().sectionKicker,
                    children: t
                })
            }
        },
        69565: function(e, t, s) {
            "use strict";
            s.r(t);
            var r = s(57437),
                n = s(48410),
                i = s(41766),
                a = s(16127),
                l = s(41929),
                o = s.n(l);
            t.default = e => {
                let {
                    introDescription: t,
                    ctaComponent: s,
                    ctaHref: l,
                    children: c
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: o().startups,
                        children: (0, r.jsxs)("div", {
                            className: o().inner,
                            children: [(0, r.jsxs)("div", {
                                className: o().content,
                                children: [(0, r.jsx)(a.Z, {
                                    children: "Whimsical for Startups"
                                }), (0, r.jsx)("h2", {
                                    className: o().hd,
                                    children: "Less distraction, more traction"
                                }), (0, r.jsx)("p", {
                                    className: o().description,
                                    children: t
                                }), c]
                            }), (0, r.jsx)("div", {
                                className: o().callout,
                                children: (0, r.jsxs)("div", {
                                    className: o().calloutInner,
                                    children: [(0, r.jsx)("p", {
                                        className: o().calloutKicker,
                                        children: "Get Whimsical Pro"
                                    }), (0, r.jsxs)("h3", {
                                        className: o().calloutHd,
                                        children: ["One year", (0, r.jsx)("br", {}), "for free"]
                                    }), (0, r.jsx)("p", {
                                        className: o().calloutDescription,
                                        children: "Get 12 months of our Pro plan for free with no future commitment. Open to all startups, regardless of funding or accelerator affiliation."
                                    }), (0, r.jsxs)("ul", {
                                        className: o().calloutFeatures,
                                        children: [(0, r.jsx)("li", {
                                            children: "New Whimsical customer"
                                        }), (0, r.jsx)("li", {
                                            children: "Fewer than 50 employees"
                                        }), (0, r.jsx)("li", {
                                            children: "Revenue under $1M gets 12 months free"
                                        }), (0, r.jsx)("li", {
                                            children: "Revenue over $1M gets 6 months free"
                                        })]
                                    }), (0, r.jsx)(i.Z, {
                                        tag: s,
                                        href: "https://whimsicalpowers.typeform.com/to/UlZ4xwmj",
                                        children: "Apply now"
                                    })]
                                })
                            })]
                        })
                    }), (0, r.jsx)(n.Z, {
                        isInset: !0
                    })]
                })
            }
        },
        43506: function(e) {
            e.exports = {
                cardKicker: "styles_cardKicker__6vBdH",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__uDUi2"
            }
        },
        54393: function(e) {
            e.exports = {
                grid: "styles_grid__6FB4v",
                planChooser: "styles_planChooser__aEODG",
                isNavHidden: "styles_isNavHidden__h02ID",
                planChooserInner: "styles_planChooserInner__gnoJl",
                planChooserTitle: "styles_planChooserTitle__GKGB6",
                planChooserOptions: "styles_planChooserOptions__1yh18",
                cards: "styles_cards__rbVyr",
                cardsList: "styles_cardsList__eJo_U",
                card: "styles_card__Zy4BK",
                cardHeader: "styles_cardHeader__FaJpK",
                cardTitle: "styles_cardTitle__OxFFe",
                cardToggle: "styles_cardToggle__X6Yr1",
                isExpanded: "styles_isExpanded__kQKUx",
                cardBody: "styles_cardBody__Ns2GZ",
                cardTooltip: "styles_cardTooltip__g5Wle",
                cardTable: "styles_cardTable__wPnDc",
                dash: "styles_dash__g8_wB",
                check: "styles_check__rA6lW",
                gridFooter: "styles_gridFooter__a07i_",
                gridFooterInner: "styles_gridFooterInner__iQtJR",
                gridFooterHeader: "styles_gridFooterHeader__2kLO4",
                gridFooterAnnualBilling: "styles_gridFooterAnnualBilling__OmURQ",
                gridFooterToggle: "styles_gridFooterToggle__go4JD",
                gridFooterPlans: "styles_gridFooterPlans__Z84Y6",
                gridFooterPlanCardKicker: "styles_gridFooterPlanCardKicker__yMZw5",
                gridFooterPlanPrice: "styles_gridFooterPlanPrice__K_Nn_",
                gridFooterPlanDescription: "styles_gridFooterPlanDescription__nppRl",
                gridFooterPlanBtn: "styles_gridFooterPlanBtn__A8iYP",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__pLcfA"
            }
        },
        87358: function(e) {
            e.exports = {
                compare: "styles_compare__PPqeP",
                intro: "styles_intro__del_m",
                introInner: "styles_introInner___RtG_",
                hd: "styles_hd__u8KVY",
                content: "styles_content__VLIjm",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__gY7PL"
            }
        },
        22092: function(e) {
            e.exports = {
                faq: "styles_faq__5MWIg",
                faqHd: "styles_faqHd__Fja7w",
                questions: "styles_questions__zV9Tu",
                question: "styles_question__0AtEz",
                questionInner: "styles_questionInner__l_Vwi",
                isOpen: "styles_isOpen__usAkT",
                isHovered: "styles_isHovered__rViWZ",
                questionQ: "styles_questionQ__e7tLm",
                questionA: "styles_questionA__El5a6",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__wegwI"
            }
        },
        40889: function(e) {
            e.exports = {
                cards: "styles_cards__aE_J_",
                cardList: "styles_cardList__TnlZX",
                card: "styles_card__ayXl_",
                cardKickerWrapper: "styles_cardKickerWrapper__w0_mT",
                cardKickerAddendum: "styles_cardKickerAddendum__2Lcyo",
                cardPrice: "styles_cardPrice__vFZx7",
                cardPriceAmount: "styles_cardPriceAmount__ivkTM",
                cardPricePer: "styles_cardPricePer__8fPmg",
                cardPriceDivider: "styles_cardPriceDivider__FmewX",
                cardDescription: "styles_cardDescription__9dFQf",
                cardFeaturesHd: "styles_cardFeaturesHd__6FDFF",
                cardFeaturesList: "styles_cardFeaturesList__Kfuqc",
                cardTooltipText: "styles_cardTooltipText__1EUWW",
                readMoreLinks: "styles_readMoreLinks__aD8uw",
                hideOnMobile: "styles_hideOnMobile__sE9Yt",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__UgtSl"
            }
        },
        23382: function(e) {
            e.exports = {
                hero: "styles_hero__g7a4c",
                heroInner: "styles_heroInner__rkF5x",
                heroHeader: "styles_heroHeader__GtXr6",
                heroHd: "styles_heroHd__Cbwu5",
                heroDescription: "styles_heroDescription__efyQ9",
                toggle: "styles_toggle__DBCn9",
                togglePill: "styles_togglePill__Jlmar",
                isActive: "styles_isActive__5RPrG",
                toggleDiscount: "styles_toggleDiscount___1yEn",
                carbonRemoval: "styles_carbonRemoval__QGuHA",
                socialProof: "styles_socialProof__malBc",
                socialProofHd: "styles_socialProofHd__rlaRd",
                socialProofLogos: "styles_socialProofLogos__XgVm3",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__fVHRF"
            }
        },
        6634: function(e) {
            e.exports = {
                security: "styles_security__OVsSQ",
                securityInner: "styles_securityInner__j2atG",
                securityContent: "styles_securityContent__ygDde",
                securityHd: "styles_securityHd__xW8uo",
                securityDescription: "styles_securityDescription__HHJB7",
                logos: "styles_logos__T9_85",
                logoImgWrapper: "styles_logoImgWrapper__4cj1l",
                logoTitle: "styles_logoTitle__D4XlH",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__SR99o"
            }
        },
        39073: function(e) {
            e.exports = {
                startupLearnMoreBtn: "styles_startupLearnMoreBtn__KHLc4",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__Qffyg"
            }
        },
        94786: function(e) {
            e.exports = {
                outer: "styles_outer__81esB",
                inner: "styles_inner__AKRh7",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__kFeUi"
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
        16446: function(e) {
            e.exports = {
                sectionKicker: "styles_sectionKicker__iYx9O",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__tXouv"
            }
        },
        41929: function(e) {
            e.exports = {
                startups: "styles_startups__wPyEU",
                inner: "styles_inner__GHXew",
                content: "styles_content__8d8VF",
                hd: "styles_hd__1Fjc4",
                description: "styles_description__ZomNr",
                callout: "styles_callout__szj4R",
                calloutInner: "styles_calloutInner__3FV7J",
                calloutKicker: "styles_calloutKicker__VRl0B",
                calloutHd: "styles_calloutHd__1xvP3",
                calloutDescription: "styles_calloutDescription__ajNZ6",
                calloutFeatures: "styles_calloutFeatures__973l8",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__PQrio"
            }
        },
        62288: function(e) {
            e.exports = {
                toggle: "styles_toggle__r31nd",
                isActive: "styles_isActive__NMB3l",
                dot: "styles_dot__OSeYy",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__nbQw1"
            }
        },
        15845: function(e) {
            e.exports = {
                wrapper: "styles_wrapper__c47wR",
                tooltip: "styles_tooltip__tq5mY",
                isVisible: "styles_isVisible___9TuC",
                isTop: "styles_isTop__tFiU2",
                isRight: "styles_isRight__F6zEM",
                tooltipNotch: "styles_tooltipNotch__P3WPi",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__jIDrF"
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
    },
    function(e) {
        e.O(0, [5938, 1048, 1833, 9934, 8410, 2971, 7864, 1744], function() {
            return e(e.s = 16746)
        }), _N_E = e.O()
    }
]);