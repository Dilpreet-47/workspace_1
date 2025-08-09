(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1031], {
        38362: function(e, s, t) {
            Promise.resolve().then(t.bind(t, 87398)), Promise.resolve().then(t.t.bind(t, 21253, 23)), Promise.resolve().then(t.t.bind(t, 23134, 23)), Promise.resolve().then(t.bind(t, 69934)), Promise.resolve().then(t.bind(t, 11833))
        },
        87398: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return contact_sales_form
                }
            });
            var r = t(57437),
                a = t(8839),
                i = t.n(a),
                error = e => {
                    let {
                        children: s
                    } = e;
                    return (0, r.jsx)("div", {
                        className: i().error,
                        children: s
                    })
                },
                l = t(2124),
                n = t(41766),
                c = t(40150),
                o = t.n(c),
                d = t(56230),
                _ = t(16691),
                m = t.n(_),
                u = t(24033),
                h = t(2265),
                p = t(35691);
            let b = (0, p.Ry)({
                    data__Name: (0, p.Z_)().min(2, "Name must be at least 2 characters").required("Name is required"),
                    data__email: (0, p.Z_)().email("Invalid email address").required("Email is required")
                }),
                y = [{
                    autoComplete: "name",
                    label: "Name",
                    name: "data__Name",
                    required: !0,
                    type: "text"
                }, {
                    autoComplete: "email",
                    label: "Work email",
                    name: "data__email",
                    required: !0,
                    type: "text"
                }, {
                    as: "textarea",
                    label: (0, r.jsxs)(r.Fragment, {
                        children: ["How can we help? ", (0, r.jsx)("em", {
                            children: "(optional)"
                        })]
                    }),
                    name: "data__details",
                    placeholder: "Tell us about your team and provide some details about how you’d like to use Whimsical..."
                }],
                getInitialValues = e => y.reduce((s, t) => {
                    let {
                        name: r
                    } = t;
                    return { ...s,
                        [r]: e && e.get(r.replace(/^data__/, "").replace(/\s/, "-")) || ""
                    }
                }, {});
            var f = {
                    src: "/_next/static/media/macos-icon@89x89@2x.c2cf7456.webp",
                    height: 178,
                    width: 178,
                    blurDataURL: "data:image/webp;base64,UklGRsAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDoAAAANYFTbtpLzDZnb2LvQjkRM/yIDIdy1RkQE+D7HBqUFVVmRAibpkADy4zbAI2ibgCkW/1L3+Aq+60UAVlA4IGAAAABwAgCdASoIAAgAAkA4JbACdLoB+AARB5V9ic6AAP7qVYl+WVCNXnW+/VtHT3tLwcNzB1mYKiiMTyxisrhF9bUG5/9DmKu2JImzHYc8jM6W4h/2ufOEMF4bYmv1jnMYAAA=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                x = t(51814),
                g = t.n(x);
            let A = o().bind(g()),
                onSubmit = (e, s, t) => {
                    let {
                        setStatus: a,
                        setSubmitting: i
                    } = t;
                    window.fetch("https://hooks.zapier.com/hooks/catch/8662302/3cbjetn/", {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        mode: "no-cors",
                        body: JSON.stringify({
                            submittedAt: new Date().toISOString(),
                            name: "Sales Contact",
                            ...s
                        })
                    }).then(s => {
                        i(!1), e(!0)
                    }).catch(e => {
                        console.log("Error!", e), a({
                            api: (0, r.jsxs)(r.Fragment, {
                                children: ["Sorry, something went wrong. Please try again, or email", " ", (0, r.jsx)("a", {
                                    href: "mailto:success@whimsical.com",
                                    children: "success@whimsical.com"
                                }), "."]
                            })
                        }), i(!1)
                    })
                },
                FormField = e => {
                    let {
                        getError: s,
                        ...t
                    } = e;
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)("div", {
                            className: g().formFieldWrapper,
                            children: (0, r.jsx)(l.U, { ...t
                            })
                        })
                    })
                },
                FormInner = e => {
                    let {
                        didSucceed: s,
                        formikProps: t
                    } = e, {
                        values: a,
                        errors: i,
                        status: l,
                        touched: c,
                        isSubmitting: o
                    } = t;
                    return (0, r.jsxs)(d.l0, {
                        className: g().form,
                        children: [(0, r.jsxs)("div", {
                            className: A({
                                formInner: !0,
                                isSubmitting: o,
                                didSucceed: s
                            }),
                            children: [(0, r.jsxs)("div", {
                                className: g().formContent,
                                children: [y.map(e => (0, r.jsx)(FormField, {
                                    values: a,
                                    errors: i,
                                    touched: c,
                                    ...e
                                }, e.name)), l && l.api && (0, r.jsx)(error, {
                                    children: l.api
                                }), (0, r.jsx)(n.Z, {
                                    className: g().submitBtn,
                                    invert: !0,
                                    type: "submit",
                                    disabled: o,
                                    children: "Contact sales"
                                }), (0, r.jsx)("p", {
                                    className: g().or,
                                    children: (0, r.jsx)("span", {
                                        children: "or"
                                    })
                                }), (0, r.jsx)(n.Z, {
                                    target: "_blank",
                                    tag: "a",
                                    href: "https://calendly.com/george-whimsical/30min",
                                    children: "Schedule a call"
                                })]
                            }), (0, r.jsx)("div", {
                                className: g().success,
                                children: (0, r.jsxs)("div", {
                                    className: g().successInner,
                                    children: [(0, r.jsx)(m(), {
                                        className: g().successLogo,
                                        width: 89,
                                        height: 89,
                                        src: f,
                                        alt: ""
                                    }), (0, r.jsx)("h3", {
                                        className: g().successHd,
                                        children: "Thank you!"
                                    }), (0, r.jsx)("p", {
                                        className: g().successSubHd,
                                        children: "Your submission has been received."
                                    }), (0, r.jsx)("p", {
                                        className: g().successDescription,
                                        children: "Someone from our sales team will reach out to you shortly."
                                    })]
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: g().contactSupport,
                            children: [(0, r.jsx)("h3", {
                                className: g().contactSupportHd,
                                children: "Looking for support?"
                            }), "Head over to the ", (0, r.jsx)("a", {
                                href: "https://help.whimsical.com/",
                                children: "help center"
                            }), " or", " ", (0, r.jsx)("a", {
                                href: "mailto:help@whimsical.com",
                                children: "get in touch"
                            }), " with our support team."]
                        })]
                    })
                };
            var contact_sales_form = () => {
                let [e, s] = (0, h.useState)(!1), t = (0, u.useSearchParams)();
                return (0, r.jsx)(d.J9, {
                    initialValues: getInitialValues(t),
                    validationSchema: b,
                    onSubmit: (e, t) => onSubmit(s, e, t),
                    children: s => (0, r.jsx)(FormInner, {
                        formikProps: s,
                        didSucceed: e
                    })
                })
            }
        },
        2124: function(e, s, t) {
            "use strict";
            t.d(s, {
                U: function() {
                    return FormikField
                },
                Z: function() {
                    return u
                }
            });
            var r = t(57437),
                a = t(40150),
                i = t.n(a),
                l = t(56230),
                n = t(16691),
                c = t.n(n),
                o = {
                    src: "/_next/static/media/error-corner.883a08a7.svg",
                    height: 10,
                    width: 10,
                    blurWidth: 0,
                    blurHeight: 0
                },
                d = t(66999),
                _ = t.n(d);
            let m = i().bind(_()),
                Field = e => {
                    let {
                        label: s,
                        component: t,
                        children: a,
                        error: i,
                        value: l,
                        ...n
                    } = e, d = t || "input", u = !!i, h = !!l, p = "select" === t || "select" === n.as;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(c(), {
                            priority: !0,
                            alt: "",
                            src: o,
                            width: 1,
                            height: 1,
                            className: "visually-hidden"
                        }), (0, r.jsx)("div", {
                            className: m({
                                field: !0,
                                hasError: u
                            }),
                            children: (0, r.jsxs)("label", {
                                children: [s && (0, r.jsx)("div", {
                                    className: _().labelText,
                                    children: s
                                }), (0, r.jsx)("div", {
                                    className: m({
                                        inputWrapper: !0,
                                        hasError: u,
                                        isFilled: h,
                                        isSelect: p
                                    }),
                                    children: (0, r.jsx)(d, { ...n,
                                        className: m(n.className, {
                                            isFilled: h,
                                            hasError: u
                                        }),
                                        children: a
                                    })
                                }), u && (0, r.jsx)("div", {
                                    className: _().error,
                                    children: i
                                })]
                            })
                        })]
                    })
                };
            var u = Field;
            let FormikField = e => {
                let {
                    errors: s,
                    touched: t,
                    values: a,
                    ...i
                } = e, {
                    name: n
                } = i, c = t[i.name] && s[n];
                return (0, r.jsx)(Field, {
                    component: l.gN,
                    value: a[n],
                    error: c && s[n],
                    ...i
                })
            }
        },
        41766: function(e, s, t) {
            "use strict";
            var r = t(57437),
                a = t(40150),
                i = t.n(a),
                l = t(71215),
                n = t.n(l);
            let c = i().bind(n());
            s.Z = e => {
                let {
                    children: s,
                    className: t,
                    inline: a,
                    tag: i = "button",
                    theme: l,
                    invert: o,
                    ...d
                } = e;
                return (0, r.jsx)(i, {
                    "data-theme": l,
                    className: c(n().secondaryBtn, t, {
                        inline: a,
                        invert: o
                    }),
                    ...d,
                    children: (0, r.jsx)("span", {
                        className: n().inner,
                        children: s
                    })
                })
            }
        },
        51814: function(e) {
            e.exports = {
                form: "styles_form__Ld2wh",
                formInner: "styles_formInner__e_AUK",
                isSubmitting: "styles_isSubmitting__JzosW",
                didSucceed: "styles_didSucceed__1MxZ2",
                formContent: "styles_formContent__P8DsN",
                formFieldWrapper: "styles_formFieldWrapper__YXO2F",
                isLast: "styles_isLast__0K9d1",
                submitBtn: "styles_submitBtn__L4Nij",
                or: "styles_or__zkL7T",
                success: "styles_success__7QCII",
                successInner: "styles_successInner__KcPpQ",
                successLogo: "styles_successLogo__2jLI_",
                successHd: "styles_successHd__oOKHv",
                successSubHd: "styles_successSubHd__EAWQl",
                successDescription: "styles_successDescription__b94IH",
                contactSupport: "styles_contactSupport__0EvmL",
                contactSupportHd: "styles_contactSupportHd__AUO_a",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__ib1ZT"
            }
        },
        23134: function(e) {
            e.exports = {
                socialProof: "styles_socialProof__lV8zN",
                socialProofHd: "styles_socialProofHd__gthid",
                logos: "styles_logos__q1zEa",
                spacer: "styles_spacer__yCjFX",
                isLast: "styles_isLast__VPkDc",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__umXZ_"
            }
        },
        21253: function(e) {
            e.exports = {
                mainContent: "styles_mainContent__7IDA2",
                mainContentInner: "styles_mainContentInner__DR_3T",
                intro: "styles_intro__NsgiF",
                hd: "styles_hd__b4pOX",
                subHd: "styles_subHd__H7Rtc",
                formWrapper: "styles_formWrapper__6Q_X6",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__gSSaj"
            }
        },
        8839: function(e) {
            e.exports = {
                error: "styles_error__PHiHy",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__V0tGd"
            }
        },
        66999: function(e) {
            e.exports = {
                field: "styles_field__ris8k",
                isFilled: "styles_isFilled__PgJf8",
                hasError: "styles_hasError__1tKwD",
                error: "styles_error__hQKYU",
                inputWrapper: "styles_inputWrapper__P5rGL",
                isSelect: "styles_isSelect__DfYSt",
                labelText: "styles_labelText__KhZWX",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__jycSm"
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
        }
    },
    function(e) {
        e.O(0, [5938, 1048, 6230, 5691, 1833, 9934, 2971, 7864, 1744], function() {
            return e(e.s = 38362)
        }), _N_E = e.O()
    }
]);