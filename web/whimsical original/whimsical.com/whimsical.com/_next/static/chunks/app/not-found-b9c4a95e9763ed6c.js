(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9160], {
        42867: function(s, e, t) {
            Promise.resolve().then(t.t.bind(t, 95266, 23)), Promise.resolve().then(t.bind(t, 11833)), Promise.resolve().then(t.bind(t, 51583))
        },
        51583: function(s, e, t) {
            "use strict";
            t.r(e);
            var _ = t(57437),
                n = t(13884),
                r = t(40150),
                l = t.n(r),
                a = t(16691),
                i = t.n(a),
                o = t(48652),
                c = t.n(o);
            let d = l().bind(c());
            e.default = s => {
                let {
                    className: e,
                    children: t,
                    iconSrc: r,
                    isDark: l,
                    gradient: a = !1,
                    accent: o = null,
                    down: p = !1,
                    up: y = !1,
                    tag: u = "button",
                    ...b
                } = s;
                return (0, _.jsx)("div", {
                    className: d(c().wrapper, e),
                    children: (0, _.jsxs)(u, {
                        className: d(c().primaryBtn, c()[o], {
                            [c().gradient]: a,
                            [c().isDark]: l
                        }),
                        ...b,
                        children: [(0, _.jsx)("div", {
                            className: c().btnContent,
                            children: t
                        }), (0, _.jsx)("div", {
                            className: d({
                                iconWrapper: !0,
                                down: p,
                                up: y
                            }),
                            children: r ? (0, _.jsx)(i(), {
                                className: c().icon,
                                src: r,
                                alt: ""
                            }) : (0, _.jsxs)(_.Fragment, {
                                children: [(0, _.jsx)("span", {
                                    className: d(c().arrow, c().first),
                                    children: (0, _.jsx)(n.Z, {})
                                }), (0, _.jsx)("span", {
                                    className: d(c().arrow, c().last),
                                    children: (0, _.jsx)(n.Z, {})
                                })]
                            })
                        })]
                    })
                })
            }
        },
        95266: function(s) {
            s.exports = {
                root: "styles_root__Wgx4r",
                inner: "styles_inner__xylDR",
                content: "styles_content__46XBO",
                preHd: "styles_preHd__4ozt8",
                hd: "styles_hd__M41_T",
                description: "styles_description__5NJ2B",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__k6bIt"
            }
        },
        48652: function(s) {
            s.exports = {
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
    },
    function(s) {
        s.O(0, [5938, 1833, 2971, 7864, 1744], function() {
            return s(s.s = 42867)
        }), _N_E = s.O()
    }
]);