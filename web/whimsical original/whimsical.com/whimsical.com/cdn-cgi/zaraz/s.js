try {
    (function(w, d) {
        zaraz.debug = (eX = "") => {
            document.cookie = `zarazDebug=${eX}; path=/`;
            location.reload()
        };
        window.zaraz._al = function(dZ, d$, ea) {
            w.zaraz.listeners.push({
                item: dZ,
                type: d$,
                callback: ea
            });
            dZ.addEventListener(d$, ea)
        };
        zaraz.preview = (db = "") => {
            document.cookie = `zarazPreview=${db}; path=/`;
            location.reload()
        };
        zaraz.i = function(eH) {
            const eI = d.createElement("div");
            eI.innerHTML = unescape(eH);
            const eJ = eI.querySelectorAll("script"),
                eK = d.querySelector("script[nonce]"),
                eL = eK ? .nonce || eK ? .getAttribute("nonce");
            for (let eM = 0; eM < eJ.length; eM++) {
                const eN = d.createElement("script");
                eL && (eN.nonce = eL);
                eJ[eM].innerHTML && (eN.innerHTML = eJ[eM].innerHTML);
                for (const eO of eJ[eM].attributes) eN.setAttribute(eO.name, eO.value);
                d.head.appendChild(eN);
                eJ[eM].remove()
            }
            d.body.appendChild(eI)
        };
        zaraz.f = async function(eb, ec) {
            const ed = {
                credentials: "include",
                keepalive: !0,
                mode: "no-cors"
            };
            if (ec) {
                ed.method = "POST";
                ed.body = new URLSearchParams(ec);
                ed.headers = {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
            return await fetch(eb, ed)
        };
        window.zaraz._p = async bs => new Promise((bt => {
            if (bs) {
                bs.e && bs.e.forEach((bu => {
                    try {
                        const bv = d.querySelector("script[nonce]"),
                            bw = bv ? .nonce || bv ? .getAttribute("nonce"),
                            bx = d.createElement("script");
                        bw && (bx.nonce = bw);
                        bx.innerHTML = bu;
                        bx.onload = () => {
                            d.head.removeChild(bx)
                        };
                        d.head.appendChild(bx)
                    } catch (by) {
                        console.error(`Error executing script: ${bu}\n`, by)
                    }
                }));
                Promise.allSettled((bs.f || []).map((bz => fetch(bz[0], bz[1]))))
            }
            bt()
        }));
        zaraz.pageVariables = {};
        zaraz.__zcl = zaraz.__zcl || {};
        zaraz.track = async function(eh, ei, ej) {
            return new Promise(((ek, el) => {
                const em = {
                    name: eh,
                    data: {}
                };
                if (ei ? .__zarazClientEvent) Object.keys(localStorage).filter((eo => eo.startsWith("_zaraz_google_consent_"))).forEach((en => em.data[en] = localStorage.getItem(en)));
                else {
                    for (const ep of [localStorage, sessionStorage]) Object.keys(ep || {}).filter((er => er.startsWith("_zaraz_"))).forEach((eq => {
                        try {
                            em.data[eq.slice(7)] = JSON.parse(ep.getItem(eq))
                        } catch {
                            em.data[eq.slice(7)] = ep.getItem(eq)
                        }
                    }));
                    Object.keys(zaraz.pageVariables).forEach((es => em.data[es] = JSON.parse(zaraz.pageVariables[es])))
                }
                Object.keys(zaraz.__zcl).forEach((et => em.data[`__zcl_${et}`] = zaraz.__zcl[et]));
                em.data.__zarazMCListeners = zaraz.__zarazMCListeners;
                //
                em.data = { ...em.data,
                    ...ei
                };
                em.zarazData = zarazData;
                fetch("/cdn-cgi/zaraz/t", {
                    credentials: "include",
                    keepalive: !0,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(em)
                }).catch((() => {
                    //
                    return fetch("/cdn-cgi/zaraz/t", {
                        credentials: "include",
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(em)
                    })
                })).then((function(ev) {
                    zarazData._let = (new Date).getTime();
                    ev.ok || el();
                    return 204 !== ev.status && ev.json()
                })).then((async eu => {
                    await zaraz._p(eu);
                    "function" == typeof ej && ej()
                })).finally((() => ek()))
            }))
        };
        zaraz.set = function(ew, ex, ey) {
            try {
                ex = JSON.stringify(ex)
            } catch (ez) {
                return
            }
            prefixedKey = "_zaraz_" + ew;
            sessionStorage && sessionStorage.removeItem(prefixedKey);
            localStorage && localStorage.removeItem(prefixedKey);
            delete zaraz.pageVariables[ew];
            if (void 0 !== ex) {
                ey && "session" == ey.scope ? sessionStorage && sessionStorage.setItem(prefixedKey, ex) : ey && "page" == ey.scope ? zaraz.pageVariables[ew] = ex : localStorage && localStorage.setItem(prefixedKey, ex);
                zaraz.__watchVar = {
                    key: ew,
                    value: ex
                }
            }
        };
        for (const {
                m: eA,
                a: eB
            } of zarazData.q.filter((({
                m: eC
            }) => ["debug", "set"].includes(eC)))) zaraz[eA](...eB);
        for (const {
                m: eD,
                a: eE
            } of zaraz.q) zaraz[eD](...eE);
        delete zaraz.q;
        delete zarazData.q;
        zaraz.spaPageview = () => {
            zarazData.l = d.location.href;
            zarazData.t = d.title;
            zaraz.pageVariables = {};
            zaraz.__zarazMCListeners = {};
            zaraz.track("__zarazSPA")
        };
        zaraz.fulfilTrigger = function(dy, dz, dA, dB) {
            zaraz.__zarazTriggerMap || (zaraz.__zarazTriggerMap = {});
            zaraz.__zarazTriggerMap[dy] || (zaraz.__zarazTriggerMap[dy] = "");
            zaraz.__zarazTriggerMap[dy] += "*" + dz + "*";
            zaraz.track("__zarazEmpty", { ...dA,
                __zarazClientTriggers: zaraz.__zarazTriggerMap[dy]
            }, dB)
        };
        zaraz._processDataLayer = eQ => {
            for (const eR of Object.entries(eQ)) zaraz.set(eR[0], eR[1], {
                scope: "page"
            });
            if (eQ.event) {
                if (zarazData.dataLayerIgnore && zarazData.dataLayerIgnore.includes(eQ.event)) return;
                let eS = {};
                for (let eT of dataLayer.slice(0, dataLayer.indexOf(eQ) + 1)) eS = { ...eS,
                    ...eT
                };
                delete eS.event;
                eQ.event.startsWith("gtm.") || zaraz.track(eQ.event, eS)
            }
        };
        window.dataLayer = w.dataLayer || [];
        const eP = w.dataLayer.push;
        Object.defineProperty(w.dataLayer, "push", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function(...eU) {
                let eV = eP.apply(this, eU);
                zaraz._processDataLayer(eU[0]);
                return eV
            }
        });
        dataLayer.forEach((eW => zaraz._processDataLayer(eW)));
        zaraz._cts = () => {
            zaraz._timeouts && zaraz._timeouts.forEach((bC => clearTimeout(bC)));
            zaraz._timeouts = []
        };
        zaraz._rl = function() {
            w.zaraz.listeners && w.zaraz.listeners.forEach((bD => bD.item.removeEventListener(bD.type, bD.callback)));
            window.zaraz.listeners = []
        };
        history.pushState = function() {
            try {
                zaraz._rl();
                zaraz._cts && zaraz._cts()
            } finally {
                History.prototype.pushState.apply(history, arguments);
                setTimeout(zaraz.spaPageview, 100)
            }
        };
        history.replaceState = function() {
            try {
                zaraz._rl();
                zaraz._cts && zaraz._cts()
            } finally {
                History.prototype.replaceState.apply(history, arguments);
                setTimeout(zaraz.spaPageview, 100)
            }
        };
        zaraz._c = cZ => {
            const {
                event: c$,
                ...da
            } = cZ;
            zaraz.track(c$, { ...da,
                __zarazClientEvent: !0
            })
        };
        zaraz._syncedAttributes = ["altKey", "clientX", "clientY", "pageX", "pageY", "button"];
        zaraz.__zcl.track = !0;
        const fj = "zaraz-consent",
            fk = "whimsical.com",
            _eY = Symbol(),
            _eZ = Symbol(),
            _e$ = Symbol(),
            _fa = Symbol(),
            _fb = Symbol(),
            _fc = Symbol(),
            _fd = Symbol(),
            _fe = Symbol(),
            _ff = Symbol(),
            _fg = Symbol(),
            _fh = Symbol(),
            _fi = Symbol();

        function fl(fm) {
            "Escape" === fm.key && zaraz.hideConsentModal()
        }
        zaraz.consent = {
            [_fa]: () => ({ ...Object.fromEntries(["KvAc"].map((fn => [fn, !1]))),
                ...JSON.parse((d.cookie.split("; ").find((fo => fo.startsWith(`${fj}=`))) || "={}").split("=")[1])
            }),
            [_fb]: fp => zaraz.consent[_fa]()[fp],
            [_fe]: () => {
                if (!zaraz[_fh]) return zaraz.consent[_fa]();
                const fq = {};
                for (const fr of ["KvAc"]) fq[fr] = zaraz[_fh].querySelector(`input[type=checkbox][data-purpose-id="${fr}"`).checked;
                return fq
            },
            [_ff]: fs => {
                if (zaraz[_fh]) {
                    zaraz[_eZ] = !0;
                    for (const ft in fs)["KvAc"].includes(ft) && (zaraz[_fh].querySelector(`input[type=checkbox][data-purpose-id="${ft}"`).checked = !!fs[ft])
                }
            },
            [_fg]: fu => {
                if (zaraz.consent[_eY])
                    for (const fv of zaraz[_fh].querySelectorAll(".cf-checkbox")) fv.checked = fu;
                zaraz[_eZ] = !0
            },
            [_fc]: function(fw) {
                if (null !== fw) {
                    zaraz.consent[_fi] ? .setAllVendors(fw);
                    zaraz.consent[_fd](Object.fromEntries(["KvAc"].map((fx => [fx, fw]))))
                } else document.cookie = `${fj}=; Domain=${fk}; SameSite=Strict; Path=/`
            },
            [_fd]: fy => {
                const fz = "The zaraz.consent.set method takes an object as an argument. The keys are the purpose ids, and values are booleans (true=has consent).";
                if ("boolean" == typeof fy) throw new Error(`${fz} If you want to (de)select all purposes, use zaraz.consent.setAll(true/false)`);
                if ("object" != typeof fy) throw new Error(fz);
                for (const fA of Object.keys(fy)) {
                    if (!["KvAc"].includes(fA)) throw new Error(`Unknown purpose id: ${fA}`);
                    if ("boolean" != typeof fy[fA]) throw new Error(`Invalid value for purpose ${fA}: ${fy[fA]} (${typeof fy[fA]})`)
                }
                document.cookie = `${fj}=${JSON.stringify({...zaraz.consent[_fa](),...fy})}; SameSite=Strict; Domain=${fk}; Path=/; Max-Age=31536000`;
                zaraz[_eZ] = !0;
                zaraz.consent[_ff](fy);
                zaraz.consent[_fi] ? .setChoices(fy);
                d.dispatchEvent(new Event("zarazConsentChoicesUpdated"))
            },
            [_eY]: null,
            [_eZ]: !1,
            [_e$]: function() {
                zaraz[_eZ] && zaraz.track("__zarazConsentedPageview");
                zaraz[_eZ] = !1
            }
        };
        zaraz.hideConsentModal = function(fB = !1) {
            d.body.removeChild(zaraz.consent[_eY]);
            zaraz.consent[_eY] = null;
            fB && zaraz.consent[_e$]();
            d.removeEventListener("keydown", fl);
            d.dispatchEvent(new Event("zarazConsentModalClosed"))
        };
        zaraz.showConsentModal = function(fC = !1) {
            if (zaraz.consent[_eY]) return;
            zaraz.consent[_eY] = d.createElement("div");
            const fD = zaraz.consent[_eY].attachShadow({
                mode: "open"
            });
            zaraz[_fh] = fD;
            zaraz.consent[_eY].classList.add("cf_modal_container");
            fD.innerHTML = "<dialog class=\"cf_modal\" aria-modal=\"true\" aria-labelledby=\"cf_modal_title\">\n  <style>\n    .cf_modal_container {\n      position: fixed;\n      z-index: 99999999999999999;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100vh;\n      display: grid;\n      color: #000;\n    }\n\n    dialog::backdrop {\n      backdrop-filter: blur(3px);\n      background-color: #00000061;\n    }\n\n    .title_container {\n      display: flex;\n      align-items: center;\n      margin-bottom: calc(1.5 * var(--padding));\n    }\n\n    .title__logo {\n      margin-right: 14px;\n    }\n\n    .cf_modal {\n      --padding: 25px;\n      box-sizing: border-box;\n      margin: auto;\n      font-family: sans-serif;\n      border-radius: 4px;\n      max-height: calc(100vh - 6.25em);\n      max-width: 480px;\n      width: calc(100vw - 2 * 1.25em);\n      grid-template-rows: min-content min-content min-content 1fr min-content;\n      background-color: white;\n      padding: var(--padding);\n      filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07))\n        drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06));\n\n      overflow-y: auto;\n      grid-row: 1/2;\n      grid-column: 1/2;\n      border: none;\n      position: fixed;\n    }\n\n    .cf_consent-buttons {\n      display: flex;\n      flex-flow: row wrap;\n      max-width: 50em;\n      background-color: #d9d9d9;\n      margin: calc(-1 * var(--padding));\n      margin-top: 0;\n      align-items: center;\n      justify-content: flex-end;\n      padding: 12px 18px;\n      padding-right: 12px;\n    }\n\n    .cf_button {\n      background-color: #0074d9;\n      color: white;\n      font-size: 1em;\n      padding: 0 16px;\n      flex-grow: 1;\n      cursor: pointer;\n      transition: background-color 200ms;\n      margin: 4px;\n      border-radius: 5px;\n      height: 32px;\n      line-height: 32px;\n      flex-grow: 0;\n    }\n\n    .cf_button:hover {\n      background-color: #0082f2;\n    }\n\n    .cf_modal h3 {\n      font-size: 14px;\n      line-height: 1.5em;\n      margin: 0;\n    }\n\n    .cf_modal h2 {\n      font-size: 24px;\n      font-weight: 400;\n      padding: 0;\n      margin: 0;\n    }\n\n    @media (max-width: 600px) {\n      .cf_modal h2 {\n        font-size: 1.5em;\n      }\n    }\n\n    .cf_consent-container {\n      overflow-y: auto;\n    }\n\n    .cf_consent-intro {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 24px;\n      text-align: justify;\n    }\n\n    .cf_consent-element {\n      display: grid;\n      grid-template-columns: 15px 1fr;\n      grid-column-gap: 12px;\n    }\n\n    .cf_consent-element + .cf_consent-element {\n      margin-top: var(--padding);\n    }\n\n    .cf_consent-element h3 {\n      grid-row: 1;\n      grid-column: 2;\n    }\n\n    .cf_consent-element__checkbox-wrapper {\n      grid-row: 1/3;\n      grid-column: 1;\n      margin: auto;\n      margin-top: 0;\n      line-height: 1.5em;\n      height: 15px;\n      width: 15px;\n      display: flex;\n      flex-flow: row;\n      align-items: center;\n      justify-content: flex-start;\n      padding-top: 2.5px;\n      grid-template-rows: 1fr;\n      grid-template-columns: 1fr;\n    }\n\n    .cf_consent-element p {\n      grid-row: 2;\n      grid-column: 2;\n      font-size: 14px;\n      line-height: 21px;\n    }\n\n    ul {\n      padding: 0;\n      padding-right: var(--padding);\n      margin: 0;\n      margin-right: calc(-1 * var(--padding));\n      padding-top: var(--padding);\n      padding-bottom: var(--padding);\n    }\n\n    p {\n      margin: 0;\n    }\n\n    button {\n      border: none;\n    }\n\n    hr {\n      margin-top: 24px;\n      width: 100%;\n      height: 1px;\n      border: none;\n      background-color: #d9d9d9;\n      margin-block-end: 0;\n    }\n    @media (max-width: 480px) {\n      .cf_button {\n        flex-grow: 1;\n      }\n\n      .cf_consent-buttons {\n        padding: 12px;\n      }\n    }\n\n    @media (max-width: 440px) {\n      .cf_modal {\n        --padding: 18px;\n      }\n    }\n\n    @media (max-width: 400px) {\n      .cf_modal {\n        width: 100vw;\n      }\n      .cf_consent-intro {\n        line-height: 22px;\n      }\n    }\n\n    @media (prefers-color-scheme: dark) {\n      .cf_modal {\n        background-color: #222;\n        color: #ececec;\n      }\n\n      .cf_consent-buttons {\n        background-color: #111;\n      }\n    }\n\n    /* Fix for Safari */\n    .cf_modal,\n    .cf_modal_container,\n    #cf_modal_body,\n    .cf_consent-buttons {\n      transform: translate3d(0, 0, 0);\n    }\n  </style>\n  <div class=\"title_container\">\n    <h2 id=\"cf_modal_title\">Cookie Settings</h2>\n  </div>\n  <p class=\"cf_consent-intro\">Whimsical uses third party services to track visitors to it's website to improve it.</p>\n  <hr>\n  <ul class=\"cf_consent-container\">\n    <li class=\"cf_consent-element\">\n  <div class=\"cf_consent-element__checkbox-wrapper\">\n    <input type=\"checkbox\" data-purpose-id=\"KvAc\" class=\"cf-checkbox\" id=\"checkbox-0\" >\n  </div>\n  <label for=\"checkbox-0\">\n    <h3>Tracking for website improvement</h3>\n    <p>To improve website</p>\n  </label>\n</li>\n\n  </ul>\n  <div class=\"cf_consent-buttons\">\n    <button class=\"cf_button cf_button--accept\" id=\"cf_consent-buttons__accept-all\">\n      Accept All\n    </button>\n    <button class=\"cf_button cf_button--reject\" id=\"cf_consent-buttons__reject-all\">\n      Reject All\n    </button>\n    <button class=\"cf_button cf_button--save\" id=\"cf_consent-buttons__save\">\n      Confirm My Choices\n    </button>\n  </div>\n</dialog>\n";
            d.addEventListener("keydown", fl);
            fD.querySelector("style").setAttribute("nonce", zaraz._n);
            fD.getElementById("cf_consent-buttons__accept-all").addEventListener("click", (() => {
                zaraz.consent[_fc](!0);
                zaraz.hideConsentModal(true)
            }));
            fD.getElementById("cf_consent-buttons__reject-all").addEventListener("click", (() => {
                zaraz.consent[_fc](!1);
                zaraz.hideConsentModal(true)
            }));
            fD.getElementById("cf_consent-buttons__save").addEventListener("click", (() => {
                zaraz.consent[_fd](zaraz.consent[_fe]());
                zaraz.hideConsentModal(true)
            }));
            fD.getElementById("cf_consent-buttons__view-partners") ? .addEventListener("click", (() => {
                fD.getElementById("cf_modal_vendors").style.display = "block";
                fD.getElementById("cf_modal_body").style.display = "none"
            }));
            fD.getElementById("cf_consent-buttons__hide-partners") ? .addEventListener("click", (() => {
                fD.getElementById("cf_modal_vendors").style.display = "none";
                fD.getElementById("cf_modal_body").style.display = "block"
            }));
            d.body.appendChild(zaraz.consent[_eY]);
            const fE = d.createElement("style");
            fE.setAttribute("nonce", zaraz._n);
            fE.textContent = ``;
            fD.appendChild(fE);
            if (!fC) {
                ["KvAc"].forEach(((fF, fG) => {
                    const fH = fD.getElementById(`checkbox-${fG}`);
                    zaraz.consent[_fb](`${fF}`) && (fH.checked = !0)
                }));
                zaraz.consent[_fi] ? .setVendorCheckboxesFromCookie()
            }
            fD.querySelector("dialog").showModal();
            d.dispatchEvent(new Event("zarazConsentModalOpened"))
        };
        zaraz.consent = {
            get modal() {
                return !!zaraz.consent[_eY]
            },
            set modal(fI) {
                fI ? zaraz.showConsentModal() : zaraz.hideConsentModal()
            },
            sendQueuedEvents() {
                zaraz.consent[_e$]()
            },
            get: zaraz.consent[_fb],
            getAll: zaraz.consent[_fa],
            set: zaraz.consent[_fd],
            setAll: zaraz.consent[_fc],
            setCheckboxes: zaraz.consent[_ff],
            setAllCheckboxes: zaraz.consent[_fg],
            getAllCheckboxes: zaraz.consent[_fe],
            ...zaraz.consent
        };
        Object.defineProperty(zaraz.consent, "purposes", {
            value: {
                "KvAc": {
                    "description": {
                        "en": "To improve website"
                    },
                    "id": "KvAc",
                    "name": {
                        "en": "Tracking for website improvement"
                    },
                    "order": 100
                }
            },
            writable: !1
        });
        Object.defineProperty(zaraz.consent, "APIReady", {
            value: !0,
            writable: !1
        });
        d.dispatchEvent(new Event("zarazConsentAPIReady"));
        zaraz._p({
            "e": ["(function(w,d){;w.zarazData.executed.push(\"Pageview\");})(window,document)", "(function(w,d){{const d = document.createElement('div');d.innerHTML = ``;document.body.appendChild(d);};{\n  function handleZarazConsentAPIReady() {\n    // See https://whimsical.com/disable-tracking-for-california-visitors-6H1JRtC1equc8mfkDnuHhQ\n    if (\"IN\" !== \"US\" || \"PB\" === \"CA\") {\n      return \n    }\n\n    zaraz.consent.setAll(true)\n    zaraz.consent.sendQueuedEvents()\n  }\n\n  if (typeof zaraz !== undefined && zaraz?.consent?.APIReady) {\n    handleZarazConsentAPIReady()\n  } else {\n    document.addEventListener(\"zarazConsentAPIReady\", handleZarazConsentAPIReady)\n  }\n}})(window,document)"]
        })
    })(window, document)
} catch (e) {
    throw fetch("/cdn-cgi/zaraz/t"), e;
}