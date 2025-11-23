(function() {
    "use strict";
    var e = {
        5276: function(e, t, n) {
            var a = n(144)
              , o = n(8345)
              , i = n(2970)
              , r = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t("TheNavBar"), t("router-view", {
                    ref: "routerView"
                })], 1)
            }
              , s = []
              , l = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", [t("b-navbar", {
                    attrs: {
                        type: "light",
                        variant: "light"
                    }
                }, [t("b-navbar-brand", {
                    attrs: {
                        to: {
                            name: e.routerLocations.Root.Root
                        }
                    }
                }, [e._v(" Carbon Neutral Neighbourhoods ")]), t("b-collapse", {
                    attrs: {
                        id: "nav-text-collapse",
                        "is-nav": ""
                    }
                }, [t("b-navbar-nav", [e._l(e.regions, (function(n) {
                    return [t("b-nav-item-dropdown", {
                        attrs: {
                            text: n.display
                        }
                    }, [t("b-dropdown-item", [t("b-nav-item", {
                        attrs: {
                            to: {
                                name: e.routerLocations.Emissions[n.key]
                            }
                        }
                    }, [e._v(" Emissions ")])], 1), t("b-dropdown-item", [t("b-nav-item", {
                        attrs: {
                            to: {
                                name: e.routerLocations.ModeShareFlow[n.key]
                            }
                        }
                    }, [e._v(" Mode Share Flow 2018 ")])], 1), t("b-dropdown-item", [t("b-nav-item", {
                        attrs: {
                            to: {
                                name: e.routerLocations.ModeShareFlow2023[n.key]
                            }
                        }
                    }, [e._v(" Mode Share Flow 2023 ")])], 1), t("b-dropdown-item", [t("b-nav-item", {
                        attrs: {
                            to: {
                                name: e.routerLocations.ModeShare2023[n.key]
                            }
                        }
                    }, [e._v(" Mode Share 2023 ")])], 1)], 1)]
                }
                )), t("b-nav-item", {
                    attrs: {
                        to: {
                            name: e.routerLocations.Root.About
                        }
                    }
                }, [e._v(" Find out more | Kimihia te roanga atu ")])], 2)], 1), t("b-navbar-brand", {
                    attrs: {
                        href: "https://geospatial.ac.nz"
                    }
                }, [t("img", {
                    attrs: {
                        src: "/GRI_no_subtitle_transparent.png",
                        alt: "Geospatial Research Institute Logo"
                    }
                })])], 1)], 1)
            }
              , u = []
              , d = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("Co2Sa1Viewer", {
                    attrs: {
                        "init-lat": e.auckland.latitude,
                        "init-long": e.auckland.longitude,
                        "urban-area-name": e.auckland.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }
              , c = []
              , h = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("MapViewer", {
                    attrs: {
                        "init-lat": e.initLat,
                        "init-long": e.initLong,
                        "init-height": e.initHeight,
                        "init-base-layer": e.baseLayer,
                        "cesium-access-token": e.cesiumApiToken,
                        "data-sources": e.dataSources
                    }
                }), t("div", {
                    staticClass: "card",
                    attrs: {
                        id: "control-card"
                    }
                }, [t("h2", [e._v("CO2 Scenario Controller")]), t("p", [e._v(" Baseline CO2: "), t("span", {
                    staticClass: "value"
                }, [e._v(e._s(e.formattedTotals.baselineCo2))])]), t("p", [e._v(" Scenario CO2: "), t("span", {
                    staticClass: "value"
                }, [e._v(e._s(e.formattedTotals.CO2))]), t("span", {
                    staticClass: "value",
                    class: e.percentageChangeClass.CO2
                }, [e._v(" ( " + e._s(e.percentageChanges.CO2) + ")  ")])]), e.sliderDefaultValues.length > 0 ? t("BalancedSlider", {
                    ref: "balanced-slider",
                    attrs: {
                        "init-values": e.sliderDefaultValues
                    },
                    on: {
                        submit: function(t) {
                            return e.changeUseRates(t)
                        }
                    }
                }) : e._e(), t("p", [e._v(" Baseline Vehicle Km Travelled: "), t("span", {
                    staticClass: "value"
                }, [e._v(e._s(e.formattedTotals.baselineVKT))])]), t("p", [e._v(" Scenario Vehicle Km Travelled: "), t("span", {
                    staticClass: "value"
                }, [e._v(e._s(e.formattedTotals.VKT))])]), t("div", {
                    staticClass: "vkt-adjuster"
                }, [t("label", {
                    attrs: {
                        for: "vkt-slider"
                    }
                }, [e._v("Adjust Scenario VKT")]), t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.VKTSlider,
                        expression: "VKTSlider"
                    }],
                    attrs: {
                        id: "vkt-slider",
                        type: "range",
                        min: "0",
                        max: "100",
                        step: "1"
                    },
                    domProps: {
                        value: e.VKTSlider
                    },
                    on: {
                        __r: function(t) {
                            e.VKTSlider = t.target.value
                        }
                    }
                }), t("span", {
                    staticClass: "value"
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.VKTSlider,
                        expression: "VKTSlider"
                    }],
                    attrs: {
                        id: "vkt-spinner",
                        type: "number",
                        min: "0",
                        max: "100"
                    },
                    domProps: {
                        value: e.VKTSlider
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.VKTSlider = t.target.value)
                        }
                    }
                }), t("label", {
                    attrs: {
                        for: "vkt-spinner"
                    }
                }, [e._v("%")])])]), t("div", [t("b-button", {
                    attrs: {
                        size: "sm"
                    },
                    on: {
                        click: e.onUpdateClicked
                    }
                }, [e._v(" Update ")]), t("b-button", {
                    attrs: {
                        size: "sm"
                    },
                    on: {
                        click: e.onResetDefaultClicked
                    }
                }, [e._v(" Reset to baseline ")])], 1)], 1), t("ColorLegend", {
                    staticClass: "card",
                    attrs: {
                        id: "legend",
                        "legend-steps": e.legendSteps,
                        "axis-label": "'000 Vehicle km / year"
                    }
                })], 1)
            }
              , m = []
              , p = (n(560),
            n(9669))
              , f = n.n(p)
              , g = n(6856)
              , b = n(9143)
              , v = n(4315)
              , _ = n(1106)
              , y = n(6344)
              , w = n(8670)
              , S = n.n(w)
              , C = n(543)
              , x = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    key: e.componentKey,
                    attrs: {
                        id: "balanced-slider"
                    }
                }, e._l(e.initValues, (function(n, a) {
                    return t("BalancedSliderRow", {
                        key: a,
                        ref: `slider-row-${a}`,
                        refInFor: !0,
                        attrs: {
                            name: n.name,
                            locked: e.sliderLocks[a]
                        },
                        on: {
                            input: function(t) {
                                return e.onChange(a, t)
                            },
                            "lock-change": function(t) {
                                return e.onLockChange(a, t)
                            }
                        },
                        model: {
                            value: e.sliderValues[a],
                            callback: function(t) {
                                e.$set(e.sliderValues, a, e._n(t))
                            },
                            expression: "sliderValues[i]"
                        }
                    })
                }
                )), 1)
            }
              , k = [];
            function A(e, t=0) {
                const n = 10 ** t;
                return (Math.round(e * n) / n).toFixed(t)
            }
            var V = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("span", [t("input", {
                    attrs: {
                        id: e.id,
                        type: "checkbox"
                    },
                    domProps: {
                        checked: e.checked
                    },
                    on: {
                        change: function(t) {
                            return e.$emit("change", t.target.checked)
                        }
                    }
                }), t("label", {
                    attrs: {
                        for: e.id
                    }
                }, [t("img", {
                    attrs: {
                        src: "" + (e.checked ? "/font-awesome/solid-lock.svg" : "/font-awesome/solid-lock-open.svg"),
                        alt: "" + (e.checked ? "Locked padlock" : "Unlocked padlock")
                    }
                })])])
            }
              , M = []
              , O = a["default"].extend({
                name: "LockCheckbox",
                model: {
                    prop: "checked",
                    event: "change"
                },
                props: {
                    id: {
                        type: String,
                        required: !0
                    },
                    checked: {
                        type: Boolean,
                        default: !1
                    }
                }
            })
              , N = O
              , T = n(1001)
              , H = (0,
            T.Z)(N, V, M, !1, null, "7d196ae0", null)
              , E = H.exports
              , P = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "slider-row"
                }, [t("input", {
                    ref: "slider",
                    attrs: {
                        id: `slider-${e.uuid}`,
                        type: "range",
                        min: "0",
                        max: "100",
                        disabled: e.locked || e.disabled
                    },
                    domProps: {
                        value: e.value
                    },
                    on: {
                        input: function(t) {
                            return e.onInput(t.target.value)
                        }
                    }
                }), t("LockCheckbox", {
                    attrs: {
                        id: `slider-lock-${e.uuid}`,
                        checked: e.locked
                    },
                    on: {
                        change: function(t) {
                            return e.$emit("lock-change", t)
                        }
                    }
                }), t("label", {
                    attrs: {
                        for: `slider-${e.uuid}`,
                        disabled: e.disabled
                    }
                }, [e._v(" " + e._s(e.name) + ": ")]), t("span", {
                    staticClass: "value"
                }, [t("RoundedSpinner", {
                    ref: "spinner",
                    attrs: {
                        id: `spinner-${e.uuid}`,
                        type: "number",
                        value: e.value
                    },
                    on: {
                        input: function(t) {
                            return e.onInput(t.target.value)
                        }
                    }
                }), t("label", {
                    attrs: {
                        for: `spinner-${e.uuid}`,
                        disabled: e.disabled
                    }
                }, [e._v(" % ")])], 1)], 1)
            }
              , L = []
              , R = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("input", {
                    ref: "spinner",
                    attrs: {
                        type: "number",
                        min: e.min,
                        max: e.max
                    },
                    domProps: {
                        value: e.spinnerDisplayValue
                    },
                    on: {
                        focusout: function(t) {
                            return e.$emit("input", t)
                        },
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.$emit("input", t)
                        }
                    }
                })
            }
              , K = []
              , F = a["default"].extend({
                name: "RoundedSpinner",
                props: {
                    value: Number,
                    min: {
                        type: Number,
                        default: 0
                    },
                    max: {
                        type: Number,
                        default: 100
                    },
                    decimalPlaces: {
                        type: Number,
                        default: 2
                    }
                },
                computed: {
                    spinnerDisplayValue() {
                        return A(this.value, this.decimalPlaces)
                    }
                }
            })
              , I = F
              , W = (0,
            T.Z)(I, R, K, !1, null, "d2b8aafc", null)
              , Z = W.exports;
            let D = 0;
            var U = a["default"].extend({
                name: "BalancedSliderRow",
                components: {
                    RoundedSpinner: Z,
                    LockCheckbox: E
                },
                props: {
                    name: String,
                    value: [Number, String],
                    locked: {
                        type: Boolean,
                        default: !1
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    }
                },
                data() {
                    return {
                        uuid: D,
                        internalLocked: this.locked
                    }
                },
                created() {
                    D++
                },
                methods: {
                    onInput(e) {
                        this.$emit("input", e)
                    }
                }
            })
              , $ = U
              , q = (0,
            T.Z)($, P, L, !1, null, "7420d9c6", null)
              , B = q.exports
              , Q = n(5108)
              , G = a["default"].extend({
                name: "BalancedSlider",
                components: {
                    BalancedSliderRow: B,
                    LockCheckbox: E
                },
                props: {
                    initValues: {
                        type: Array,
                        required: !0,
                        validator: function(e) {
                            if (0 === e.length)
                                return Q.error("initValues must have values"),
                                !1;
                            if (!e.every((e => e.value >= 0 && e.value <= 100)))
                                return Q.error("All initValues must be between 0 and 100"),
                                !1;
                            const t = e.reduce(( (e, t) => e + t.value), 0)
                              , n = Math.round(100 * t) / 100;
                            return 100 === n || (Q.error(`initValues must sum to 100, instead got ${t}`),
                            !1)
                        },
                        default() {
                            return []
                        }
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    }
                },
                data() {
                    return {
                        sliderValues: this.initValues.map((e => e.value)),
                        sliderLocks: new Array(this.initValues.length).fill(!1),
                        componentKey: 0
                    }
                },
                methods: {
                    onUpdateClicked() {
                        this.$emit("submit", this.sliderValues)
                    },
                    onResetDefaultClicked() {
                        this.sliderLocks = this.sliderLocks.fill(!1),
                        this.sliderValues = this.initValues.map((e => e.value)),
                        this.$emit("submit", this.sliderValues)
                    },
                    formattedSliderValue(e) {
                        return `${A(this.sliderValues[e], 2)}%`
                    },
                    async onChange(e, t) {
                        const n = this.getLockedSum()
                          , a = 100 - n
                          , o = Math.min(t, a)
                          , i = [];
                        for (const [u,d] of this.initValues.entries())
                            if (u === e)
                                i.push(o);
                            else if (this.sliderLocks[u])
                                i.push(this.sliderValues[u]);
                            else {
                                let t = d.value / (100 - this.initValues[e].value - this.getLockedInitSum());
                                const a = t * (100 - o - n);
                                i.push(a)
                            }
                        this.$emit("input", i),
                        this.$emit("change-sliders", i),
                        this.sliderValues = i;
                        const r = this.$refs[`slider-row-${e}`]
                          , s = r[0].$refs.slider
                          , l = r[0].$refs.spinner;
                        await this.$nextTick(),
                        r[0].value == s.value && r[0].value == l.value || this.forceRerender()
                    },
                    onLockChange(e, t) {
                        const n = this.sliderLocks.map((e => +e)).reduce(( (e, t) => e + t), 0);
                        (!t || n < this.sliderLocks.length - 2) && this.$set(this.sliderLocks, e, t)
                    },
                    getLockedSum() {
                        let e = 0;
                        for (const [t,n] of this.sliderLocks.entries())
                            n && (e += this.sliderValues[t]);
                        return e
                    },
                    getLockedInitSum() {
                        let e = 0;
                        for (const [t,n] of this.sliderLocks.entries())
                            n && (e += this.initValues[t].value);
                        return e
                    },
                    forceRerender() {
                        this.componentKey++
                    }
                },
                computed: {
                    sliderValuesDisplay: {
                        get() {
                            return this.sliderValues.map((e => parseFloat(A(e, 2))))
                        },
                        set(e) {
                            this.sliderValues = e
                        }
                    }
                }
            })
              , j = G
              , Y = (0,
            T.Z)(j, x, k, !1, null, "064ffd26", null)
              , z = Y.exports
              , J = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", [t("h2", [e._v("Legend")]), t("p", [e._v(e._s(e.axisLabel))]), t("div", {
                    staticClass: "legend-container"
                }, [t("div", {
                    staticClass: "legend-labels"
                }, e._l(e.legendSteps, (function(n) {
                    return t("div", {
                        staticClass: "legend-label"
                    }, [e._v(" " + e._s(n.label) + " ")])
                }
                )), 0), t("div", {
                    staticClass: "legend-colors"
                }, [t("div", {
                    staticClass: "color-box",
                    style: `height: ${1.5 * e.legendSteps.length}em; background-image: linear-gradient(${e.firstColour}, ${e.lastColour}`
                })])])])
            }
              , X = []
              , ee = n(5108)
              , te = a["default"].extend({
                name: "ColorLegend",
                props: {
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    legendSteps: {
                        type: Array,
                        required: !0,
                        validator: function(e) {
                            return !(e.length < 2) || (ee.error("ColorLegend prop legendSteps must have length >= 2"),
                            !1)
                        },
                        default() {
                            return [{
                                value: 0,
                                color: "#000000"
                            }, {
                                value: 10,
                                color: "#FFFFFF"
                            }]
                        }
                    },
                    axisLabel: {
                        type: String,
                        required: !0
                    }
                },
                computed: {
                    firstColour() {
                        return this.legendSteps[0].color
                    },
                    lastColour() {
                        return this.legendSteps[this.legendSteps.length - 1].color
                    }
                }
            })
              , ne = te
              , ae = (0,
            T.Z)(ne, J, X, !1, null, "be114684", null)
              , oe = ae.exports
              , ie = n(5108)
              , re = a["default"].extend({
                name: "Co2Sa1Viewer",
                components: {
                    RoundedSpinner: Z,
                    BalancedSlider: z,
                    ColorLegend: oe,
                    MapViewer: C.g
                },
                props: {
                    initLat: {
                        type: Number,
                        required: !0,
                        validator: e => -90 <= e && e <= 90
                    },
                    initLong: {
                        type: Number,
                        required: !0,
                        validator: e => -180 <= e && e <= 180
                    },
                    urbanAreaName: {
                        type: String,
                        required: !0
                    },
                    initHeight: {
                        type: Number,
                        default: 2e3
                    }
                },
                data() {
                    return {
                        baseLayer: new g.Z(new b.Z({}),{
                            saturation: 0
                        }),
                        geoserverHost: "https://geoserver.carbon-neutral.app.geospatial.ac.nz:443",
                        dataSources: {
                            geoJsonDataSources: []
                        },
                        cesiumApiToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmMTA5Mjg1Yi00YzhlLTQyOWUtYjcxYi05MWQwNjFjOTBhNDgiLCJpZCI6Nzk4NzUsImlhdCI6MTczMDc2NTg5Nn0.uCTQreWpF0Kfkno9IqsBLjxD2pZuqMujUUdfK-AjaGE",
                        vktUseRates: [],
                        baselineCo2: 0,
                        baselineVKT: 0,
                        VKT: 0,
                        VKTSlider: 100,
                        sliderDefaultValues: [],
                        colorScale: S().scale(S().brewer.Reds),
                        vktColorScalingFactor: 5e4,
                        co2HeightScalingFactor: 5
                    }
                },
                async created() {
                    this.vktUseRates = await this.fetchVktSums(),
                    this.sliderDefaultValues = this.vktUseRates.map((e => ({
                        name: e.fuel_type,
                        value: e.weight
                    }))),
                    this.baselineCo2 = this.vktUseRates.reduce(( (e, t) => e + t.CO2), 0),
                    this.baselineVKT = this.vktUseRates.reduce(( (e, t) => e + t.VKT), 0),
                    this.VKT = this.baselineVKT
                },
                async mounted() {
                    const e = await this.loadSa1s();
                    this.dataSources.geoJsonDataSources = [e],
                    await this.styleSa1s()
                },
                methods: {
                    async loadSa1s() {
                        const e = f().getUri({
                            url: `${this.geoserverHost}/geoserver/sa1_emissions/ows`,
                            params: {
                                service: "WFS",
                                version: "1.0.0",
                                request: "GetFeature",
                                outputFormat: "application/json",
                                typeName: "sa1_emissions:sa1s",
                                cql_filter: `UR2023_V1_00_NAME ILIKE '${this.urbanAreaName}'`
                            }
                        })
                          , t = await v.Z.load(e, {
                            fill: _.Z.fromAlpha(_.Z.ROYALBLUE, 1),
                            stroke: _.Z.ROYALBLUE.darken(.5, new _.Z),
                            strokeWidth: 10
                        });
                        return t
                    },
                    async fetchVktSums() {
                        const e = f().getUri({
                            url: `${this.geoserverHost}/geoserver/sa1_emissions/ows`,
                            params: {
                                service: "WFS",
                                version: "1.0.0",
                                request: "GetFeature",
                                outputFormat: "application/json",
                                typeName: "sa1_emissions:vkt_sum",
                                propertyname: "(fuel_type,VKT,CO2)",
                                cql_filter: `UR2023_V1_00_NAME ILIKE '${this.urbanAreaName}'`
                            }
                        })
                          , t = await f().get(e)
                          , n = t.data.features
                          , a = n.map((e => e.properties))
                          , o = a.reduce(( (e, t) => e + t.VKT), 0);
                        return a.map((e => ({
                            ...e,
                            weight: e.VKT / o * 100
                        })))
                    },
                    onUpdateClicked() {
                        const e = this.$refs["balanced-slider"];
                        this.VKT = this.VKTSlider / 100 * this.baselineVKT,
                        e.onUpdateClicked()
                    },
                    onResetDefaultClicked() {
                        const e = this.$refs["balanced-slider"];
                        this.VKTSlider = 100,
                        this.VKT = this.baselineVKT,
                        e.onResetDefaultClicked()
                    },
                    changeUseRates(e) {
                        for (const t in e)
                            this.vktUseRates[t].weight = e[t];
                        this.styleSa1s()
                    },
                    getInfoBoxTable(e, t, n) {
                        const a = `\n        <div class="cesium-infoBox-description">\n          <table class="cesium-infoBox-defaultTable">\n            <tbody>\n              <tr><th>SA12018_V1_00</th><td>${e.SA12018_V1_00}</td></tr>\n              <tr><th>Area (km&sup2)</th><td>${A(e.AREA_SQ_KM, 4)}</td></tr>\n              <tr><th>CO2 (T/Y)</th><td>${A(t)}</td></tr>\n              <tr><th>VKT (km/Y)</th><td>${A(1e3 * n)}</td></tr>\n            </tbody>\n          </table>\n        </div>\n      `;
                        return a
                    },
                    getStyleInputVariables(e) {
                        let t = e.CO2;
                        if (void 0 === t) {
                            t = 0;
                            for (const {fuel_type: n, weight: a} of this.vktUseRates) {
                                const o = this.sliderDefaultValues.find((e => e.name === n))?.value
                                  , i = e[`CO2_${n}`];
                                void 0 !== o && void 0 !== i && (t += a / o * i)
                            }
                        }
                        t = t * this.VKT / this.baselineVKT;
                        const n = e.VKT * this.VKT / this.baselineVKT;
                        return {
                            area_sq_km: e.AREA_SQ_KM,
                            vkt: n,
                            co2: t
                        }
                    },
                    getColorFromVkt(e) {
                        return this.colorScale(e / this.vktColorScalingFactor)
                    },
                    getExtrudedHeightFromCo2(e) {
                        return e / this.co2HeightScalingFactor
                    },
                    async styleSa1s() {
                        ie.log("Loading started");
                        const e = this.dataSources.geoJsonDataSources;
                        if (void 0 == e || 0 === e.length)
                            return;
                        const t = e[0]
                          , n = f().getUri({
                            url: `${this.geoserverHost}/geoserver/sa1_emissions/ows`,
                            params: {
                                service: "WFS",
                                version: "1.0.0",
                                request: "GetFeature",
                                outputFormat: "application/json",
                                typeName: "sa1_emissions:sa1_emissions_all_cars",
                                propertyname: `(SA12018_V1_00,VKT,AREA_SQ_KM,${this.co2PrefixedFuelTypes})`,
                                cql_filter: `UR2023_V1_00_NAME ILIKE '${this.urbanAreaName}'`
                            }
                        })
                          , a = await f().get(n)
                          , o = a.data.features
                          , i = t.entities.values
                          , r = "SA12018_V1_00";
                        for (const s of i) {
                            if (void 0 == s.polygon || void 0 == s.properties)
                                continue;
                            const e = o.find((e => e.properties[r] == s.properties?.[r]?.getValue()));
                            let t;
                            if (void 0 == e)
                                t = new y.Z({
                                    show: !1
                                });
                            else {
                                const {vkt: n, co2: a} = this.getStyleInputVariables(e.properties);
                                s.description = this.getInfoBoxTable(e.properties, a, n);
                                const o = this.getColorFromVkt(n)
                                  , i = this.getExtrudedHeightFromCo2(a);
                                t = new y.Z({
                                    extrudedHeight: i,
                                    show: !0,
                                    material: new _.Z(...o.gl()),
                                    outlineColor: new _.Z(...o.darken().gl())
                                })
                            }
                            t.merge(s.polygon),
                            s.polygon = t
                        }
                        ie.log("Loading ended")
                    }
                },
                computed: {
                    fuelTypes() {
                        return this.vktUseRates.map((e => e.fuel_type))
                    },
                    co2PrefixedFuelTypes() {
                        const e = this.fuelTypes.map((e => {
                            const t = e.replace(" ", "_");
                            return `CO2_${t}`
                        }
                        ));
                        return e.join(",")
                    },
                    totals() {
                        let e = 0;
                        for (const {fuel_type: t, weight: n, CO2: a} of this.vktUseRates) {
                            const o = this.sliderDefaultValues.find((e => e.name === t))?.value;
                            void 0 !== o && (e += n / o * a)
                        }
                        return e = e * this.VKT / this.baselineVKT,
                        {
                            VKT: this.VKT,
                            CO2: e
                        }
                    },
                    formattedTotals() {
                        const e = parseInt(A(this.totals.CO2))
                          , t = parseInt(A(1e3 * this.totals.VKT))
                          , n = parseInt(A(this.baselineCo2))
                          , a = parseInt(A(1e3 * this.baselineVKT))
                          , o = `${e.toLocaleString()} Tonnes / Year`
                          , i = `${t.toLocaleString()} km / Year`
                          , r = `${n.toLocaleString()} Tonnes / Year`
                          , s = `${a.toLocaleString()} km / Year`;
                        return {
                            CO2: o,
                            VKT: i,
                            baselineCo2: r,
                            baselineVKT: s
                        }
                    },
                    percentageChanges() {
                        let e = "";
                        this.totals.CO2 < this.baselineCo2 ? e = "- " : this.totals.CO2 > this.baselineCo2 && (e = "+ ");
                        const t = A(Math.abs(this.totals.CO2 - this.baselineCo2) / this.baselineCo2 * 100, 2)
                          , n = `${e}${t} %`;
                        let a = "";
                        this.totals.VKT < this.baselineVKT ? a = "- " : this.totals.VKT > this.baselineVKT && (a = "+ ");
                        const o = A(Math.abs(this.totals.VKT - this.baselineVKT) / this.baselineVKT * 100, 2)
                          , i = `${a}${o} %`;
                        return {
                            CO2: n,
                            VKT: i
                        }
                    },
                    percentageChangeClass() {
                        let e = "";
                        this.totals.CO2 < this.baselineCo2 ? e = "good-color" : this.totals.CO2 > this.baselineCo2 && (e = "bad-color");
                        let t = "";
                        return this.totals.VKT < this.baselineVKT ? t = "good-color" : this.totals.VKT > this.baselineVKT && (t = "bad-color"),
                        {
                            CO2: e,
                            VKT: t
                        }
                    },
                    legendSteps() {
                        const e = 5
                          , t = [];
                        for (let n = 0; n < e; n++) {
                            const a = n / e
                              , o = a * this.vktColorScalingFactor
                              , i = parseInt(A(o)).toLocaleString()
                              , r = this.colorScale(a).hex();
                            t.push({
                                label: i,
                                color: r
                            })
                        }
                        return t
                    }
                }
            })
              , se = re
              , le = (0,
            T.Z)(se, h, m, !1, null, "0c731fee", null)
              , ue = le.exports;
            const de = "Carbon Neutral Neighbourhoods";
            var ce, he, me, pe, fe, ge = {
                created: function() {
                    const e = this.$options.title;
                    e && (document.title = `${e} | ${de}`)
                }
            }, be = a["default"].extend({
                name: "AucklandCo2Sa1Page",
                title: "Auckland Map",
                mixins: [ge],
                components: {
                    Co2Sa1Viewer: ue
                },
                data() {
                    return {
                        auckland: {
                            latitude: -36.859963793734856,
                            longitude: 174.7609620989333,
                            urbanAreaName: "Auckland"
                        },
                        initHeight: 25e3
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), ve = be, _e = (0,
            T.Z)(ve, d, c, !1, null, null, null), ye = _e.exports, we = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("Co2Sa1Viewer", {
                    attrs: {
                        "init-lat": e.christchurch.latitude,
                        "init-long": e.christchurch.longitude,
                        "urban-area-name": e.christchurch.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, Se = [], Ce = a["default"].extend({
                name: "ChristchurchCo2Sa1Page",
                title: "Christchurch Map",
                mixins: [ge],
                components: {
                    Co2Sa1Viewer: ue
                },
                data() {
                    return {
                        christchurch: {
                            latitude: -43.514137213246535,
                            longitude: 172.62835098005368,
                            urbanAreaName: "Christchurch"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), xe = Ce, ke = (0,
            T.Z)(xe, we, Se, !1, null, null, null), Ae = ke.exports, Ve = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("Co2Sa1Viewer", {
                    attrs: {
                        "init-lat": e.oamaru.latitude,
                        "init-long": e.oamaru.longitude,
                        "urban-area-name": e.oamaru.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, Me = [], Oe = a["default"].extend({
                name: "OamaruCo2Sa1Page",
                title: "Oamaru Map",
                mixins: [ge],
                components: {
                    Co2Sa1Viewer: ue
                },
                data() {
                    return {
                        oamaru: {
                            latitude: -45.09652014809901,
                            longitude: 170.9714064482898,
                            urbanAreaName: "oamaru"
                        },
                        initHeight: 15e3
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), Ne = Oe, Te = (0,
            T.Z)(Ne, Ve, Me, !1, null, null, null), He = Te.exports, Ee = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("Co2Sa1Viewer", {
                    attrs: {
                        "init-lat": e.wellington.latitude,
                        "init-long": e.wellington.longitude,
                        "urban-area-name": e.wellington.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, Pe = [], Le = a["default"].extend({
                name: "WellingtonCo2Sa1Page",
                title: "Wellington Map",
                mixins: [ge],
                components: {
                    Co2Sa1Viewer: ue
                },
                data() {
                    return {
                        wellington: {
                            latitude: -41.29187960932575,
                            longitude: 174.7782747022341,
                            urbanAreaName: "Wellington"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), Re = Le, Ke = (0,
            T.Z)(Re, Ee, Pe, !1, null, null, null), Fe = Ke.exports, Ie = function() {
                var e = this
                  , t = e._self._c;
                return t("router-view")
            }, We = [], Ze = {}, De = (0,
            T.Z)(Ze, Ie, We, !1, null, null, null), Ue = De.exports, $e = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("Co2Sa1Viewer", {
                    attrs: {
                        "init-lat": e.hamilton.latitude,
                        "init-long": e.hamilton.longitude,
                        "urban-area-name": e.hamilton.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, qe = [], Be = a["default"].extend({
                name: "HamiltonCo2Sa1Page",
                title: "Hamilton Map",
                mixins: [ge],
                components: {
                    Co2Sa1Viewer: ue
                },
                data() {
                    return {
                        hamilton: {
                            latitude: -37.786394,
                            longitude: 175.277849,
                            urbanAreaName: "Hamilton"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), Qe = Be, Ge = (0,
            T.Z)(Qe, $e, qe, !1, null, null, null), je = Ge.exports, Ye = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("Co2Sa1Viewer", {
                    attrs: {
                        "init-lat": e.queenstown.latitude,
                        "init-long": e.queenstown.longitude,
                        "urban-area-name": e.queenstown.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, ze = [], Je = a["default"].extend({
                name: "QueenstownCo2Sa1Page",
                title: "Queenstown Map",
                mixins: [ge],
                components: {
                    Co2Sa1Viewer: ue
                },
                data() {
                    return {
                        queenstown: {
                            latitude: -45.02965,
                            longitude: 168.70099,
                            urbanAreaName: "Queenstown"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), Xe = Je, et = (0,
            T.Z)(Xe, Ye, ze, !1, null, null, null), tt = et.exports, nt = {
                Auckland: ye,
                Christchurch: Ae,
                EmissionsBase: Ue,
                Oamaru: He,
                Wellington: Fe,
                Queenstown: tt,
                Hamilton: je
            }, at = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.auckland.latitude,
                        "init-long": e.auckland.longitude,
                        "urban-area-name": e.auckland.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, ot = [], it = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-screen"
                }, [t("iframe", {
                    attrs: {
                        title: `Mode share flow map ${this.urbanAreaName}`,
                        src: e.flowMapSrcUrl,
                        width: "100%",
                        height: "1080px",
                        allowfullscreen: ""
                    }
                })])
            }, rt = [], st = (n(8858),
            n(1318),
            n(3228),
            a["default"].extend({
                name: "Co2Sa1Viewer",
                components: {
                    MapViewer: C.g
                },
                props: {
                    initLat: {
                        type: Number,
                        required: !0,
                        validator: e => -90 <= e && e <= 90
                    },
                    initLong: {
                        type: Number,
                        required: !0,
                        validator: e => -180 <= e && e <= 180
                    },
                    initHeight: {
                        type: Number,
                        default: 2e3
                    },
                    urbanAreaName: {
                        type: String,
                        required: !0
                    }
                },
                data() {
                    return {
                        geoserverHost: "https://geoserver.carbon-neutral.app.geospatial.ac.nz:443",
                        sheetId: void 0
                    }
                },
                async created() {
                    this.sheetId = await this.fetchSheetId()
                },
                methods: {
                    async fetchSheetId() {
                        const e = f().getUri({
                            url: `${this.geoserverHost}/geoserver/sa2_mode_share/ows`,
                            params: {
                                service: "WFS",
                                version: "1.0.0",
                                request: "GetFeature",
                                outputFormat: "application/json",
                                typeName: "sa2_mode_share:flow_sheets",
                                propertyname: "(sheet_url)",
                                cql_filter: `urban_area ILIKE '${this.urbanAreaName}'`
                            }
                        })
                          , t = await f().get(e)
                          , n = t.data.features
                          , a = new URL(n[0].properties.sheet_url);
                        return a.pathname.split("/").pop()
                    }
                },
                computed: {
                    flowMapSrcUrl() {
                        return `https://www.flowmap.blue/${this.sheetId}`
                    }
                }
            })), lt = st, ut = (0,
            T.Z)(lt, it, rt, !1, null, null, null), dt = ut.exports, ct = a["default"].extend({
                name: "AucklandModeShareViewer",
                components: {
                    ModeShareViewer: dt
                },
                title: "Auckland Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        auckland: {
                            latitude: -36.859963793734856,
                            longitude: 174.7609620989333,
                            urbanAreaName: "Auckland"
                        },
                        initHeight: 25e3
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), ht = ct, mt = (0,
            T.Z)(ht, at, ot, !1, null, null, null), pt = mt.exports, ft = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.christchurch.latitude,
                        "init-long": e.christchurch.longitude,
                        "urban-area-name": e.christchurch.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, gt = [], bt = a["default"].extend({
                name: "ChristchurchCo2Sa1Page",
                components: {
                    ModeShareViewer: dt
                },
                title: "Christchurch Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        christchurch: {
                            latitude: -43.514137213246535,
                            longitude: 172.62835098005368,
                            urbanAreaName: "Christchurch"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), vt = bt, _t = (0,
            T.Z)(vt, ft, gt, !1, null, null, null), yt = _t.exports, wt = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.hamilton.latitude,
                        "init-long": e.hamilton.longitude,
                        "urban-area-name": e.hamilton.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, St = [], Ct = a["default"].extend({
                name: "HamiltonCo2Sa1Page",
                components: {
                    ModeShareViewer: dt
                },
                title: "Hamilton Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        hamilton: {
                            latitude: -37.786394,
                            longitude: 175.277849,
                            urbanAreaName: "Hamilton"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), xt = Ct, kt = (0,
            T.Z)(xt, wt, St, !1, null, null, null), At = kt.exports, Vt = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.oamaru.latitude,
                        "init-long": e.oamaru.longitude,
                        "urban-area-name": e.oamaru.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, Mt = [], Ot = a["default"].extend({
                name: "OamaruCo2Sa1Page",
                components: {
                    ModeShareViewer: dt
                },
                title: "Oamaru Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        oamaru: {
                            latitude: -43.514137213246535,
                            longitude: 172.62835098005368,
                            urbanAreaName: "Oamaru"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), Nt = Ot, Tt = (0,
            T.Z)(Nt, Vt, Mt, !1, null, null, null), Ht = Tt.exports, Et = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.queenstown.latitude,
                        "init-long": e.queenstown.longitude,
                        "urban-area-name": e.queenstown.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, Pt = [], Lt = a["default"].extend({
                name: "QueenstownCo2Sa1Page",
                components: {
                    ModeShareViewer: dt
                },
                title: "Queenstown Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        queenstown: {
                            latitude: -45.02965,
                            longitude: 168.70099,
                            urbanAreaName: "Queenstown"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), Rt = Lt, Kt = (0,
            T.Z)(Rt, Et, Pt, !1, null, null, null), Ft = Kt.exports, It = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.wellington.latitude,
                        "init-long": e.wellington.longitude,
                        "urban-area-name": e.wellington.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, Wt = [], Zt = a["default"].extend({
                name: "WellingtonModeShareViewer",
                components: {
                    ModeShareViewer: dt
                },
                title: "Wellington Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        wellington: {
                            latitude: -41.29187960932575,
                            longitude: 174.7782747022341,
                            urbanAreaName: "Wellington"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), Dt = Zt, Ut = (0,
            T.Z)(Dt, It, Wt, !1, null, null, null), $t = Ut.exports, qt = function() {
                var e = this
                  , t = e._self._c;
                return t("router-view")
            }, Bt = [], Qt = {}, Gt = (0,
            T.Z)(Qt, qt, Bt, !1, null, null, null), jt = Gt.exports, Yt = {
                Auckland: pt,
                Christchurch: yt,
                Hamilton: At,
                ModeShareBase: jt,
                Oamaru: Ht,
                Queenstown: Ft,
                Wellington: $t
            }, zt = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.auckland.latitude,
                        "init-long": e.auckland.longitude,
                        "urban-area-name": e.auckland.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, Jt = [], Xt = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-screen"
                }, [t("iframe", {
                    attrs: {
                        title: `Mode share flow map ${this.urbanAreaName}`,
                        src: e.flowMapSrcUrl,
                        width: "100%",
                        height: "1080px",
                        allowfullscreen: ""
                    }
                })])
            }, en = [], tn = a["default"].extend({
                name: "Co2Sa1Viewer",
                components: {
                    MapViewer: C.g
                },
                props: {
                    initLat: {
                        type: Number,
                        required: !0,
                        validator: e => -90 <= e && e <= 90
                    },
                    initLong: {
                        type: Number,
                        required: !0,
                        validator: e => -180 <= e && e <= 180
                    },
                    initHeight: {
                        type: Number,
                        default: 2e3
                    },
                    urbanAreaName: {
                        type: String,
                        required: !0
                    }
                },
                data() {
                    return {
                        geoserverHost: "https://geoserver.carbon-neutral.app.geospatial.ac.nz:443",
                        sheetId: void 0
                    }
                },
                async created() {
                    this.sheetId = await this.fetchSheetId()
                },
                methods: {
                    async fetchSheetId() {
                        const e = f().getUri({
                            url: `${this.geoserverHost}/geoserver/sa2_mode_share/ows`,
                            params: {
                                service: "WFS",
                                version: "1.0.0",
                                request: "GetFeature",
                                outputFormat: "application/json",
                                typeName: "sa2_mode_share:flow_sheets_2023",
                                propertyname: "(sheet_url)",
                                cql_filter: `urban_area ILIKE '${this.urbanAreaName}'`
                            }
                        })
                          , t = await f().get(e)
                          , n = t.data.features
                          , a = new URL(n[0].properties.sheet_url);
                        return a.pathname.split("/").pop()
                    }
                },
                computed: {
                    flowMapSrcUrl() {
                        return `https://www.flowmap.blue/${this.sheetId}`
                    }
                }
            }), nn = tn, an = (0,
            T.Z)(nn, Xt, en, !1, null, null, null), on = an.exports, rn = a["default"].extend({
                name: "AucklandModeShareViewer",
                components: {
                    ModeShareViewer: on
                },
                title: "Auckland Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        auckland: {
                            latitude: -36.859963793734856,
                            longitude: 174.7609620989333,
                            urbanAreaName: "Auckland"
                        },
                        initHeight: 25e3
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), sn = rn, ln = (0,
            T.Z)(sn, zt, Jt, !1, null, null, null), un = ln.exports, dn = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.christchurch.latitude,
                        "init-long": e.christchurch.longitude,
                        "urban-area-name": e.christchurch.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, cn = [], hn = a["default"].extend({
                name: "ChristchurchCo2Sa1Page",
                components: {
                    ModeShareViewer: on
                },
                title: "Christchurch Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        christchurch: {
                            latitude: -43.514137213246535,
                            longitude: 172.62835098005368,
                            urbanAreaName: "Christchurch"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), mn = hn, pn = (0,
            T.Z)(mn, dn, cn, !1, null, null, null), fn = pn.exports, gn = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.hamilton.latitude,
                        "init-long": e.hamilton.longitude,
                        "urban-area-name": e.hamilton.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, bn = [], vn = a["default"].extend({
                name: "HamiltonCo2Sa1Page",
                components: {
                    ModeShareViewer: on
                },
                title: "Hamilton Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        hamilton: {
                            latitude: -37.786394,
                            longitude: 175.277849,
                            urbanAreaName: "Hamilton"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), _n = vn, yn = (0,
            T.Z)(_n, gn, bn, !1, null, null, null), wn = yn.exports, Sn = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.oamaru.latitude,
                        "init-long": e.oamaru.longitude,
                        "urban-area-name": e.oamaru.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, Cn = [], xn = a["default"].extend({
                name: "OamaruCo2Sa1Page",
                components: {
                    ModeShareViewer: on
                },
                title: "Oamaru Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        oamaru: {
                            latitude: -43.514137213246535,
                            longitude: 172.62835098005368,
                            urbanAreaName: "Oamaru"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), kn = xn, An = (0,
            T.Z)(kn, Sn, Cn, !1, null, null, null), Vn = An.exports, Mn = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.queenstown.latitude,
                        "init-long": e.queenstown.longitude,
                        "urban-area-name": e.queenstown.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, On = [], Nn = a["default"].extend({
                name: "QueenstownCo2Sa1Page",
                components: {
                    ModeShareViewer: on
                },
                title: "Queenstown Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        queenstown: {
                            latitude: -45.02965,
                            longitude: 168.70099,
                            urbanAreaName: "Queenstown"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), Tn = Nn, Hn = (0,
            T.Z)(Tn, Mn, On, !1, null, null, null), En = Hn.exports, Pn = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.wellington.latitude,
                        "init-long": e.wellington.longitude,
                        "urban-area-name": e.wellington.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, Ln = [], Rn = a["default"].extend({
                name: "WellingtonModeShareViewer",
                components: {
                    ModeShareViewer: on
                },
                title: "Wellington Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        wellington: {
                            latitude: -41.29187960932575,
                            longitude: 174.7782747022341,
                            urbanAreaName: "Wellington"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), Kn = Rn, Fn = (0,
            T.Z)(Kn, Pn, Ln, !1, null, null, null), In = Fn.exports, Wn = function() {
                var e = this
                  , t = e._self._c;
                return t("router-view")
            }, Zn = [], Dn = {}, Un = (0,
            T.Z)(Dn, Wn, Zn, !1, null, null, null), $n = Un.exports, qn = {
                Auckland: un,
                Christchurch: fn,
                Hamilton: wn,
                ModeShareBase: $n,
                Oamaru: Vn,
                Queenstown: En,
                Wellington: In
            }, Bn = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.auckland.latitude,
                        "init-long": e.auckland.longitude,
                        "urban-area-name": e.auckland.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, Qn = [], Gn = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("MapViewer", {
                    attrs: {
                        "init-lat": e.initLat,
                        "init-long": e.initLong,
                        "init-height": e.initHeight,
                        "init-base-layer": e.baseLayer,
                        "cesium-access-token": e.cesiumApiToken,
                        "data-sources": e.dataSources
                    }
                }), t("ColorLegend", {
                    staticClass: "card",
                    attrs: {
                        id: "legend",
                        "legend-steps": e.legendSteps,
                        "axis-label": "Total resident commuters"
                    }
                })], 1)
            }, jn = [], Yn = n(6581), zn = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", [t("div", {
                    staticStyle: {
                        height: "610px"
                    }
                }, [t("PlotlyPlot", {
                    ref: "plot",
                    attrs: {
                        data: e.plotData,
                        layout: e.plotLayout,
                        "display-mode-bar": !1
                    }
                })], 1), t("table", {
                    staticClass: "cesium-infoBox-defaultTable"
                }, [t("tbody", e._l(e.propNames, (function(n) {
                    return t("tr", {
                        key: n
                    }, [t("th", [e._v(e._s(n))]), t("td", [e._v(e._s(e.entityProperties[n]))])])
                }
                )), 0)])])
            }, Jn = [], Xn = n(8343), ea = n(5108), ta = a["default"].extend({
                components: {
                    PlotlyPlot: Xn.Plotly
                },
                props: {
                    entityProperties: {
                        required: !0
                    }
                },
                data() {
                    return {
                        plotLayout: {
                            width: 450,
                            title: {
                                text: "Number of resident commuters by mode share",
                                yref: 0,
                                font: {
                                    color: "#ffffff"
                                }
                            }
                        }
                    }
                },
                mounted() {
                    const e = this.$refs.plot
                      , t = e.$el.firstChild.firstChild
                      , n = t.firstChild;
                    n.style.height = "550px",
                    n.style.width = "510px";
                    const a = t.lastChild;
                    a.style.height = 0
                },
                computed: {
                    propNames() {
                        return ea.log(this.entityProperties.propertyNames),
                        this.entityProperties.propertyNames
                    },
                    dataPropNames() {
                        return this.propNames.filter((e => !(e.startsWith("SA2") || e.startsWith("UR2023"))))
                    },
                    propValues() {
                        return this.dataPropNames.map((e => this.entityProperties[e]._value))
                    },
                    plotData() {
                        return [{
                            x: this.dataPropNames,
                            y: this.propValues,
                            type: "bar"
                        }]
                    }
                }
            }), na = ta, aa = (0,
            T.Z)(na, zn, Jn, !1, null, null, null), oa = aa.exports, ia = n(5108), ra = a["default"].extend({
                name: "Co2Sa1Viewer",
                components: {
                    ColorLegend: oe,
                    MapViewer: C.g
                },
                props: {
                    initLat: {
                        type: Number,
                        required: !0,
                        validator: e => -90 <= e && e <= 90
                    },
                    initLong: {
                        type: Number,
                        required: !0,
                        validator: e => -180 <= e && e <= 180
                    },
                    urbanAreaName: {
                        type: String,
                        required: !0
                    },
                    initHeight: {
                        type: Number,
                        default: 2e3
                    }
                },
                data() {
                    return {
                        baseLayer: new g.Z(new b.Z({}),{
                            saturation: 0
                        }),
                        geoserverHost: "https://geoserver.carbon-neutral.app.geospatial.ac.nz:443",
                        dataSources: {
                            geoJsonDataSources: []
                        },
                        cesiumApiToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmMTA5Mjg1Yi00YzhlLTQyOWUtYjcxYi05MWQwNjFjOTBhNDgiLCJpZCI6Nzk4NzUsImlhdCI6MTczMDc2NTg5Nn0.uCTQreWpF0Kfkno9IqsBLjxD2pZuqMujUUdfK-AjaGE",
                        colorScale: S().scale(S().brewer.Blues),
                        modeShareColorScalingFactor: 2500
                    }
                },
                async mounted() {
                    const e = await this.loadSa2s();
                    this.dataSources.geoJsonDataSources = [e]
                },
                methods: {
                    createDescriptionCallbackProp(e) {
                        let t;
                        return new Yn.Z(( () => {
                            if (void 0 === t) {
                                const n = a["default"].extend(oa)
                                  , o = new n({
                                    propsData: {
                                        entityProperties: e
                                    }
                                });
                                o.$mount(),
                                t = o.$el.outerHTML
                            }
                            return t
                        }
                        ),!0)
                    },
                    async loadSa2s() {
                        ia.log("Loading started");
                        const e = f().getUri({
                            url: `${this.geoserverHost}/geoserver/sa2_mode_share/ows`,
                            params: {
                                service: "WFS",
                                version: "1.0.0",
                                request: "GetFeature",
                                outputFormat: "application/json",
                                typeName: "sa2_mode_share:mode_share_2023",
                                cql_filter: `UR2023_V1_00_NAME ILIKE '${this.urbanAreaName}'`
                            }
                        })
                          , t = await v.Z.load(e, {
                            fill: _.Z.fromAlpha(_.Z.ROYALBLUE, 1),
                            stroke: _.Z.ROYALBLUE.darken(.5, new _.Z),
                            strokeWidth: 10
                        });
                        for (const n of t.entities.values) {
                            if (void 0 == n.polygon || void 0 == n.properties)
                                continue;
                            const e = n.properties["Total commuters"] / this.modeShareColorScalingFactor
                              , t = this.colorScale(e);
                            n.description = this.createDescriptionCallbackProp(n.properties);
                            const a = new y.Z({
                                show: !0,
                                material: new _.Z(...t.gl()),
                                outlineColor: new _.Z(...t.darken().gl())
                            });
                            a.merge(n.polygon),
                            n.polygon = a
                        }
                        return ia.log("Loading ended"),
                        t
                    }
                },
                computed: {
                    legendSteps() {
                        const e = 5
                          , t = [];
                        for (let n = 0; n <= e; n++) {
                            const a = n / e
                              , o = a * this.modeShareColorScalingFactor
                              , i = parseInt(A(o)).toLocaleString()
                              , r = this.colorScale(a).hex();
                            t.push({
                                label: i,
                                color: r
                            })
                        }
                        return t
                    }
                }
            }), sa = ra, la = (0,
            T.Z)(sa, Gn, jn, !1, null, "eaa79b06", null), ua = la.exports, da = a["default"].extend({
                name: "AucklandModeShareViewer",
                components: {
                    ModeShareViewer: ua
                },
                title: "Auckland Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        auckland: {
                            latitude: -36.859963793734856,
                            longitude: 174.7609620989333,
                            urbanAreaName: "Auckland"
                        },
                        initHeight: 25e3
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), ca = da, ha = (0,
            T.Z)(ca, Bn, Qn, !1, null, null, null), ma = ha.exports, pa = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.christchurch.latitude,
                        "init-long": e.christchurch.longitude,
                        "urban-area-name": e.christchurch.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, fa = [], ga = a["default"].extend({
                name: "ChristchurchCo2Sa1Page",
                components: {
                    ModeShareViewer: ua
                },
                title: "Christchurch Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        christchurch: {
                            latitude: -43.514137213246535,
                            longitude: 172.62835098005368,
                            urbanAreaName: "Christchurch"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), ba = ga, va = (0,
            T.Z)(ba, pa, fa, !1, null, null, null), _a = va.exports, ya = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.oamaru.latitude,
                        "init-long": e.oamaru.longitude,
                        "urban-area-name": e.oamaru.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, wa = [], Sa = a["default"].extend({
                name: "OamaruCo2Sa1Page",
                components: {
                    ModeShareViewer: ua
                },
                title: "Oamaru Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        oamaru: {
                            latitude: -45.09652014809901,
                            longitude: 170.9714064482898,
                            urbanAreaName: "oamaru"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), Ca = Sa, xa = (0,
            T.Z)(Ca, ya, wa, !1, null, null, null), ka = xa.exports, Aa = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.wellington.latitude,
                        "init-long": e.wellington.longitude,
                        "urban-area-name": e.wellington.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, Va = [], Ma = a["default"].extend({
                name: "WellingtonModeShareViewer",
                components: {
                    ModeShareViewer: ua
                },
                title: "Wellington Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        wellington: {
                            latitude: -41.29187960932575,
                            longitude: 174.7782747022341,
                            urbanAreaName: "Wellington"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), Oa = Ma, Na = (0,
            T.Z)(Oa, Aa, Va, !1, null, null, null), Ta = Na.exports, Ha = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.queenstown.latitude,
                        "init-long": e.queenstown.longitude,
                        "urban-area-name": e.queenstown.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, Ea = [], Pa = a["default"].extend({
                name: "QueenstownCo2Sa1Page",
                components: {
                    ModeShareViewer: ua
                },
                title: "Queenstown Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        queenstown: {
                            latitude: -45.02965,
                            longitude: 168.70099,
                            urbanAreaName: "Queenstown"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), La = Pa, Ra = (0,
            T.Z)(La, Ha, Ea, !1, null, null, null), Ka = Ra.exports, Fa = function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "full-height"
                }, [t("ModeShareViewer", {
                    attrs: {
                        "init-lat": e.hamilton.latitude,
                        "init-long": e.hamilton.longitude,
                        "urban-area-name": e.hamilton.urbanAreaName,
                        "init-height": e.initHeight
                    }
                })], 1)
            }, Ia = [], Wa = a["default"].extend({
                name: "HamiltonCo2Sa1Page",
                components: {
                    ModeShareViewer: ua
                },
                title: "Hamilton Mode Shares",
                mixins: [ge],
                data() {
                    return {
                        hamilton: {
                            latitude: -37.786394,
                            longitude: 175.277849,
                            urbanAreaName: "Hamilton"
                        },
                        initHeight: 2e4
                    }
                },
                async mounted() {
                    document.body.style.overflow = "hidden"
                },
                beforeDestroy() {
                    document.body.style.overflow = ""
                }
            }), Za = Wa, Da = (0,
            T.Z)(Za, Fa, Ia, !1, null, null, null), Ua = Da.exports, $a = function() {
                var e = this
                  , t = e._self._c;
                return t("router-view")
            }, qa = [], Ba = {}, Qa = (0,
            T.Z)(Ba, $a, qa, !1, null, null, null), Ga = Qa.exports, ja = {
                Auckland: ma,
                Christchurch: _a,
                ModeShareBase: Ga,
                Oamaru: ka,
                Wellington: Ta,
                Hamilton: Ua,
                Queenstown: Ka
            }, Ya = function() {
                var e = this;
                e._self._c,
                e._self._setupProxy;
                return e._m(0)
            }, za = [function() {
                var e = this
                  , t = e._self._c;
                e._self._setupProxy;
                return t("main", [t("p", [e._v(" What if neighbourhoods were designed so that people could live sustainability with minimal effort? What can Aotearoa New Zealand learn from successful models both here and worldwide? To increase understanding of the relationship between urban form and emissions, this online mapping tool helps with visualisation of transport patterns and emissions. This tool is designed for a laptop or desktop machine, rather than a mobile device. ")]), t("div", [t("div", {
                    staticClass: "row container-fluid"
                }, [t("div", {
                    staticClass: "col-lg-12 col-md-12 col-xs-12 thumb"
                }, [t("figure", [t("img", {
                    staticClass: "img-fluid centre-block",
                    attrs: {
                        src: "/carbonneutralAI.png",
                        alt: "Graphic of a carbon neutral neighbourhood"
                    }
                }), t("figcaption", {
                    staticClass: "centre-block"
                }, [e._v("Figure made with AI (Prof. M. Campbell)")])])])])]), t("h2", [e._v("About the Visualisation")]), t("p", [e._v(" The tool itself currently has two key views: one is the emissions scenario visualisation; the other is the trends in travel mode. There are several tabs; Auckland, Hamilton, Wellington, Christchurch, Oamaru and Queenstown which show the patterns for both emissions and transport in these places. ")]), t("h2", [e._v("About the Emission Scenario Controller")]), t("p", [e._v(" The ‘emissions’ tab allows us to visualise how emissions change the overall flows of vehicles for each of the areas listed above. We can do this using the ‘Scenario Controller’. The baseline data is automatically loaded into the visualisation in the background map. Select any category to determine how shifts in the fuel type of vehicles will shift the CO2 footprint of the area of interest. In the example below we shift Hybrid to make up ¾ of the vehicle fleet and show that there would be a 44.91% reduction in total carbon emissions even with the same VKT ")]), t("div", [t("div", {
                    staticClass: "row container-fluid"
                }, [t("div", {
                    staticClass: "col-lg-6 col-md-6 col-xs-6 thumb"
                }, [t("img", {
                    staticClass: "img-fluid",
                    attrs: {
                        src: "/scenario_controller_base.png",
                        alt: "Screenshot of scenario controller panel"
                    }
                })]), t("div", {
                    staticClass: "col-lg-6 col-md-6 col-xs-6 thumb"
                }, [t("img", {
                    staticClass: "img-fluid",
                    attrs: {
                        src: "/scenario_controller_hybrid.png",
                        alt: "Screenshot of scenario with 75% hybrid fleet"
                    }
                })])])]), t("p", [e._v(" To see details about the emissions and VKT of each neighbourhood you can click on the neighbourhood. The info box below shows the emissions for one SA1 neighbourhood in the current scenario. ")]), t("div", [t("div", {
                    staticClass: "row container-fluid"
                }, [t("div", {
                    staticClass: "col-lg-12 col-md-12 col-xs-12 thumb"
                }, [t("img", {
                    staticClass: "img-fluid centre-block",
                    attrs: {
                        src: "/emission_info_box.png",
                        alt: "Screenshot of scenario controller panel"
                    }
                })])])]), t("p", [e._v(" The visualisation can be controlled using the instructions in the screenshot below. Click on the ‘question mark’ icon, see the icon here "), t("span", [t("img", {
                    staticClass: "img-thumbnail",
                    attrs: {
                        src: "/help_button.png",
                        alt: "help button"
                    }
                })]), e._v(" to bring up the navigation instructions, which are shown below. ")]), t("div", [t("div", {
                    staticClass: "row container-fluid"
                }, [t("div", {
                    staticClass: "col-lg-12 col-md-12 col-xs-12 thumb"
                }, [t("img", {
                    staticClass: "img-fluid centre-block",
                    attrs: {
                        src: "/help_full.png",
                        alt: "Screenshot of scenario controller panel"
                    }
                })])])]), t("h2", [e._v("About the Mode Share Visualiser")]), t("p", [e._v(" The mode share tab visualises the transport patterns from the 2018 and 2023 censuses for each of the cities and localities listed above. There are active transport (e.g. Walking and Cycling), public transport (e.g. bus), Drive, Passenger and other categories to select to help you understand the most recent travel trends in the region of interest. The data is focused on travel to work. There is a box in the top right-hand corner of the window to allow users to query the origin and destination data of where residents have come from and to work. Once an area is selected (e.g. Christchurch Central), it is possible to query Incoming, Outgoing or internal commuters for that area. Selecting a particular area, by clicking on any of the circles, will display the trip data. For example, 6,825 incoming commuters, 9 outgoing and 18 internal commuters for Christchurch Central. ")]), t("p", [e._v(" Note: it is this data that has formed the basis of the ‘mode shift’ scenarios developed as part of the project. ")]), t("div", {
                    staticClass: "row container-fluid"
                }, [t("div", {
                    staticClass: "col-lg-8 col-md-8 col-xs-8 thumb"
                }, [t("img", {
                    staticClass: "img-fluid",
                    attrs: {
                        src: "/mode_share_chch.png",
                        alt: "Commutes around Christchurch"
                    }
                })]), t("div", {
                    staticClass: "col-lg-4 col-md-4 col-xs-4 thumb"
                }, [t("img", {
                    staticClass: "img-fluid",
                    attrs: {
                        src: "/mode_share_chch_detail.png",
                        alt: "Commutes into and out of Christchurch Central"
                    }
                })])]), t("h2", [e._v("About the Carbon Neutral Neighbourhood team")]), t("p", [e._v(" The Carbon Neutral Neighbourhood project is led by an interdisciplinary team at "), t("span", {
                    staticClass: "text-nowrap"
                }, [e._v("Te Whare Wānanga o Waitaha | University of Canterbury.")]), e._v(" The team has analysed international examples of well-functioning cities, towns and neighbourhoods that have low greenhouse gas (GHG) emissions. We have put all these case studies together into digestible reports. See link here: "), t("a", {
                    attrs: {
                        href: "https://dx.doi.org/10.2139/ssrn.4410167"
                    }
                }, [e._v("https://dx.doi.org/10.2139/ssrn.4410167")]), e._v(" By providing accessible and actionable lessons, this knowledge will support planners to meet GHG emissions reduction goals. It aims to enable developing and retrofitting more sustainable, healthy, accessible, and resilient cities, towns and neighbourhoods across Aotearoa New Zealand. ")]), t("h2", [e._v("Working Papers")]), t("p", [e._v(" Campbell M, Conrow L, Logan T, Kingham S "), t("i", [e._v("International Case Studies Report for in Greenhouse Gas Emissions Reductions: A Selected Portfolio of International Examples of Greenhouse Gas Emission Reduction Exemplars.")]), e._v(" (October 31, 2022). Available at SSRN: "), t("a", {
                    attrs: {
                        href: "https://ssrn.com/abstract=4410167"
                    }
                }, [e._v("https://ssrn.com/abstract=4410167")]), e._v(" or "), t("a", {
                    attrs: {
                        href: "https://dx.doi.org/10.2139/ssrn.4410167"
                    }
                }, [e._v("https://dx.doi.org/10.2139/ssrn.4410167")]), e._v(". ")]), t("p", [e._v("And")]), t("p", [e._v(" Campbell M, Conrow L, Logan T, Kingham S "), t("i", [e._v("Working paper: Lessons learned on how to design Aotearoa New Zealand’s urban centres to better enable low(er) carbon living.")]), e._v(" (March 1, 2023). Available at SSRN: "), t("a", {
                    attrs: {
                        href: "https://ssrn.com/abstract=4486347"
                    }
                }, [e._v("https://ssrn.com/abstract=4486347")]), e._v(" or "), t("a", {
                    attrs: {
                        href: "https://dx.doi.org/10.2139/ssrn.4486347"
                    }
                }, [e._v("https://dx.doi.org/10.2139/ssrn.4486347")]), e._v(". ")]), t("p", [e._v("And")]), t("p", [e._v(" Campbell, Malcolm "), t("i", [e._v('Working paper: "Up" vs "Out". Carbon emission scenario planning in Aotearoa New Zealand\'s urban centres')]), e._v(" (March 29, 2024). Available at SSRN: "), t("a", {
                    attrs: {
                        href: "https://ssrn.com/abstract=4887672"
                    }
                }, [e._v("https://ssrn.com/abstract=4887672")]), e._v(" or "), t("a", {
                    attrs: {
                        href: "http://dx.doi.org/10.2139/ssrn.4887672"
                    }
                }, [e._v("http://dx.doi.org/10.2139/ssrn.4887672")]), e._v(". ")]), t("p", [e._v("And")]), t("p", [e._v(" Campbell, Malcolm "), t("i", [e._v("Working paper: Scenarios for carbon-neutral neighbourhoods in Aotearoa New Zealand's urban centres. Sprawl or Densify?")]), e._v(" (November 11, 2024). Available at SSRN: "), t("a", {
                    attrs: {
                        href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5067893"
                    }
                }, [e._v("https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5067893")]), e._v(". ")]), t("div", {
                    staticClass: "row container-fluid"
                }, [t("div", {
                    staticClass: "col-lg-12 col-md-12 col-xs-12 thumb"
                }, [t("a", {
                    attrs: {
                        href: "https://www.branz.co.nz/investing-research/building-research-levy/"
                    }
                }, [t("img", {
                    staticClass: "img-fluid",
                    attrs: {
                        src: "/branz-logo.png",
                        alt: "BRANZ inc. logo"
                    }
                })])]), t("div", {
                    staticClass: "row container-fluid"
                }, [t("div", {
                    staticClass: "col-lg-6 col-md-6 col-xs-6 thumb"
                }, [t("a", {
                    attrs: {
                        href: "https://canterbury.ac.nz"
                    }
                }, [t("img", {
                    staticClass: "img-fluid",
                    attrs: {
                        src: "/UCRed_RGB.svg",
                        alt: "University of Canterbury logo"
                    }
                })])]), t("div", {
                    staticClass: "col-lg-6 col-md-6 col-xs-6 thumb"
                }, [t("a", {
                    attrs: {
                        href: "https://geospatial.ac.nz"
                    }
                }, [t("img", {
                    staticClass: "img-fluid",
                    attrs: {
                        src: "/GRI_full_logo_transparent.png",
                        alt: "Geospatial Research Institute Logo"
                    }
                })])])])])])
            }
            ], Ja = a["default"].extend({
                name: "AboutPage",
                title: "About",
                mixins: [ge]
            }), Xa = Ja, eo = (0,
            T.Z)(Xa, Ya, za, !1, null, null, null), to = eo.exports;
            (function(e) {
                e["Auckland"] = "EMISSIONS_AUCKLAND",
                e["Hamilton"] = "EMISSIONS_HAMILTON",
                e["Christchurch"] = "EMISSIONS_CHRISTCHURCH",
                e["Oamaru"] = "EMISSIONS_OAMARU",
                e["Queenstown"] = "EMISSIONS_QUEENSTOWN",
                e["Wellington"] = "EMISSIONS_WELLINGTON"
            }
            )(ce || (ce = {})),
            function(e) {
                e["Auckland"] = "MODE_SHARE_FLOW_AUCKLAND",
                e["Hamilton"] = "MODE_SHARE_FLOW_HAMILTON",
                e["Christchurch"] = "MODE_SHARE_FLOW_CHRISTCHURCH",
                e["Oamaru"] = "MODE_SHARE_FLOW_OAMARU",
                e["Queenstown"] = "MODE_SHARE_FLOW_QUEENSTOWN",
                e["Wellington"] = "MODE_SHARE_FLOW_WELLINGTON"
            }(he || (he = {})),
            function(e) {
                e["Auckland"] = "MODE_SHARE_FLOW_2023_AUCKLAND",
                e["Hamilton"] = "MODE_SHARE_FLOW_2023_HAMILTON",
                e["Christchurch"] = "MODE_SHARE_FLOW_2023_CHRISTCHURCH",
                e["Oamaru"] = "MODE_SHARE_FLOW_2023_OAMARU",
                e["Queenstown"] = "MODE_SHARE_FLOW_2023_QUEENSTOWN",
                e["Wellington"] = "MODE_SHARE_FLOW_2023_WELLINGTON"
            }(me || (me = {})),
            function(e) {
                e["Auckland"] = "MODE_SHARE_2023_AUCKLAND",
                e["Hamilton"] = "MODE_SHARE_2023_HAMILTON",
                e["Christchurch"] = "MODE_SHARE_2023_CHRISTCHURCH",
                e["Oamaru"] = "MODE_SHARE_2023_OAMARU",
                e["Queenstown"] = "MODE_SHARE_2023_QUEENSTOWN",
                e["Wellington"] = "MODE_SHARE_2023_WELLINGTON"
            }(pe || (pe = {})),
            function(e) {
                e["About"] = "ROOT_ABOUT",
                e["Root"] = "ROOT_ROOT"
            }(fe || (fe = {}));
            const no = {
                Emissions: ce,
                ModeShareFlow: he,
                ModeShareFlow2023: me,
                ModeShare2023: pe,
                Root: fe
            }
              , ao = [{
                path: "/emissions",
                component: nt.EmissionsBase,
                children: [{
                    path: "auckland",
                    name: no.Emissions.Auckland,
                    component: nt.Auckland
                }, {
                    path: "hamilton",
                    name: no.Emissions.Hamilton,
                    component: nt.Hamilton
                }, {
                    path: "christchurch",
                    name: no.Emissions.Christchurch,
                    component: nt.Christchurch
                }, {
                    path: "oamaru",
                    name: no.Emissions.Oamaru,
                    component: nt.Oamaru
                }, {
                    path: "queenstown",
                    name: no.Emissions.Queenstown,
                    component: nt.Queenstown
                }, {
                    path: "wellington",
                    name: no.Emissions.Wellington,
                    component: nt.Wellington
                }, {
                    path: "*",
                    redirect: {
                        name: no.Emissions.Christchurch
                    }
                }]
            }, {
                path: "/mode-share-flow-2018",
                component: Yt.ModeShareBase,
                children: [{
                    path: "auckland",
                    name: no.ModeShareFlow.Auckland,
                    component: Yt.Auckland
                }, {
                    path: "hamilton",
                    name: no.ModeShareFlow.Hamilton,
                    component: Yt.Hamilton
                }, {
                    path: "christchurch",
                    name: no.ModeShareFlow.Christchurch,
                    component: Yt.Christchurch
                }, {
                    path: "wellington",
                    name: no.ModeShareFlow.Wellington,
                    component: Yt.Wellington
                }, {
                    path: "oamaru",
                    name: no.ModeShareFlow.Oamaru,
                    component: Yt.Oamaru
                }, {
                    path: "queenstown",
                    name: no.ModeShareFlow.Queenstown,
                    component: Yt.Queenstown
                }, {
                    path: "*",
                    redirect: {
                        name: no.ModeShareFlow.Christchurch
                    }
                }]
            }, {
                path: "/mode-share-flow-2023",
                component: qn.ModeShareBase,
                children: [{
                    path: "auckland",
                    name: no.ModeShareFlow2023.Auckland,
                    component: qn.Auckland
                }, {
                    path: "hamilton",
                    name: no.ModeShareFlow2023.Hamilton,
                    component: qn.Hamilton
                }, {
                    path: "christchurch",
                    name: no.ModeShareFlow2023.Christchurch,
                    component: qn.Christchurch
                }, {
                    path: "wellington",
                    name: no.ModeShareFlow2023.Wellington,
                    component: qn.Wellington
                }, {
                    path: "oamaru",
                    name: no.ModeShareFlow2023.Oamaru,
                    component: qn.Oamaru
                }, {
                    path: "queenstown",
                    name: no.ModeShareFlow2023.Queenstown,
                    component: qn.Queenstown
                }, {
                    path: "*",
                    redirect: {
                        name: no.ModeShareFlow2023.Christchurch
                    }
                }]
            }, {
                path: "/mode-share-2023",
                component: ja.ModeShareBase,
                children: [{
                    path: "auckland",
                    name: no.ModeShare2023.Auckland,
                    component: ja.Auckland
                }, {
                    path: "hamilton",
                    name: no.ModeShare2023.Hamilton,
                    component: ja.Hamilton
                }, {
                    path: "christchurch",
                    name: no.ModeShare2023.Christchurch,
                    component: ja.Christchurch
                }, {
                    path: "wellington",
                    name: no.ModeShare2023.Wellington,
                    component: ja.Wellington
                }, {
                    path: "oamaru",
                    name: no.ModeShare2023.Oamaru,
                    component: ja.Oamaru
                }, {
                    path: "queenstown",
                    name: no.ModeShare2023.Queenstown,
                    component: ja.Queenstown
                }, {
                    path: "*",
                    redirect: {
                        name: no.ModeShare2023.Christchurch
                    }
                }]
            }, {
                path: "/about",
                name: no.Root.About,
                component: to
            }, {
                path: "*",
                name: no.Root.Root,
                redirect: {
                    name: no.Root.About
                }
            }];
            var oo = ao
              , io = a["default"].extend({
                name: "TheNavBar",
                data() {
                    return {
                        routerLocations: no,
                        regions: [{
                            display: "Auckland | Tāmaki Makaurau",
                            key: "Auckland"
                        }, {
                            display: "Hamilton | Kirikiriroa",
                            key: "Hamilton"
                        }, {
                            display: "Wellington | Te Whanganui-a-Tara",
                            key: "Wellington"
                        }, {
                            display: "Christchurch | Ōtautahi",
                            key: "Christchurch"
                        }, {
                            display: "Oamaru | Oāmaru",
                            key: "Oamaru"
                        }, {
                            display: "Queenstown | Tāhuna",
                            key: "Queenstown"
                        }]
                    }
                }
            })
              , ro = io
              , so = (0,
            T.Z)(ro, l, u, !1, null, "16066935", null)
              , lo = so.exports
              , uo = a["default"].extend({
                name: "App",
                components: {
                    TheNavBar: lo
                }
            })
              , co = uo
              , ho = (0,
            T.Z)(co, r, s, !1, null, null, null)
              , mo = ho.exports;
            n(7024);
            a["default"].use(o.ZP),
            a["default"].use(i.ZPm),
            a["default"].config.productionTip = !1;
            const po = new o.ZP({
                routes: oo,
                mode: "history"
            });
            new a["default"]({
                router: po,
                render: e => e(mo)
            }).$mount("#app")
        }
    }
      , t = {};
    function n(a) {
        var o = t[a];
        if (void 0 !== o)
            return o.exports;
        var i = t[a] = {
            id: a,
            loaded: !1,
            exports: {}
        };
        return e[a].call(i.exports, i, i.exports, n),
        i.loaded = !0,
        i.exports
    }
    n.m = e,
    function() {
        var e = [];
        n.O = function(t, a, o, i) {
            if (!a) {
                var r = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    a = e[d][0],
                    o = e[d][1],
                    i = e[d][2];
                    for (var s = !0, l = 0; l < a.length; l++)
                        (!1 & i || r >= i) && Object.keys(n.O).every((function(e) {
                            return n.O[e](a[l])
                        }
                        )) ? a.splice(l--, 1) : (s = !1,
                        i < r && (r = i));
                    if (s) {
                        e.splice(d--, 1);
                        var u = o();
                        void 0 !== u && (t = u)
                    }
                }
                return t
            }
            i = i || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > i; d--)
                e[d] = e[d - 1];
            e[d] = [a, o, i]
        }
    }(),
    function() {
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e["default"]
            }
            : function() {
                return e
            }
            ;
            return n.d(t, {
                a: t
            }),
            t
        }
    }(),
    function() {
        var e, t = Object.getPrototypeOf ? function(e) {
            return Object.getPrototypeOf(e)
        }
        : function(e) {
            return e.__proto__
        }
        ;
        n.t = function(a, o) {
            if (1 & o && (a = this(a)),
            8 & o)
                return a;
            if ("object" === typeof a && a) {
                if (4 & o && a.__esModule)
                    return a;
                if (16 & o && "function" === typeof a.then)
                    return a
            }
            var i = Object.create(null);
            n.r(i);
            var r = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var s = 2 & o && a; "object" == typeof s && !~e.indexOf(s); s = t(s))
                Object.getOwnPropertyNames(s).forEach((function(e) {
                    r[e] = function() {
                        return a[e]
                    }
                }
                ));
            return r["default"] = function() {
                return a
            }
            ,
            n.d(i, r),
            i
        }
    }(),
    function() {
        n.d = function(e, t) {
            for (var a in t)
                n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
                    enumerable: !0,
                    get: t[a]
                })
        }
    }(),
    function() {
        n.f = {},
        n.e = function(e) {
            return Promise.all(Object.keys(n.f).reduce((function(t, a) {
                return n.f[a](e, t),
                t
            }
            ), []))
        }
    }(),
    function() {
        n.u = function(e) {
            return "js/" + e + "." + {
                258: "0098ed4f",
                267: "8b5806e2",
                501: "589b948a",
                575: "751455b1",
                635: "793a67ba"
            }[e] + ".js"
        }
    }(),
    function() {
        n.miniCssF = function(e) {}
    }(),
    function() {
        n.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }(),
    function() {
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
    }(),
    function() {
        var e = {}
          , t = "carbon-neutral-neighbourhoods:";
        n.l = function(a, o, i, r) {
            if (e[a])
                e[a].push(o);
            else {
                var s, l;
                if (void 0 !== i)
                    for (var u = document.getElementsByTagName("script"), d = 0; d < u.length; d++) {
                        var c = u[d];
                        if (c.getAttribute("src") == a || c.getAttribute("data-webpack") == t + i) {
                            s = c;
                            break
                        }
                    }
                s || (l = !0,
                s = document.createElement("script"),
                s.charset = "utf-8",
                s.timeout = 120,
                n.nc && s.setAttribute("nonce", n.nc),
                s.setAttribute("data-webpack", t + i),
                s.src = a),
                e[a] = [o];
                var h = function(t, n) {
                    s.onerror = s.onload = null,
                    clearTimeout(m);
                    var o = e[a];
                    if (delete e[a],
                    s.parentNode && s.parentNode.removeChild(s),
                    o && o.forEach((function(e) {
                        return e(n)
                    }
                    )),
                    t)
                        return t(n)
                }
                  , m = setTimeout(h.bind(null, void 0, {
                    type: "timeout",
                    target: s
                }), 12e4);
                s.onerror = h.bind(null, s.onerror),
                s.onload = h.bind(null, s.onload),
                l && document.head.appendChild(s)
            }
        }
    }(),
    function() {
        n.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    }(),
    function() {
        n.nmd = function(e) {
            return e.paths = [],
            e.children || (e.children = []),
            e
        }
    }(),
    function() {
        n.p = "/"
    }(),
    function() {
        var e = {
            143: 0
        };
        n.f.j = function(t, a) {
            var o = n.o(e, t) ? e[t] : void 0;
            if (0 !== o)
                if (o)
                    a.push(o[2]);
                else {
                    var i = new Promise((function(n, a) {
                        o = e[t] = [n, a]
                    }
                    ));
                    a.push(o[2] = i);
                    var r = n.p + n.u(t)
                      , s = new Error
                      , l = function(a) {
                        if (n.o(e, t) && (o = e[t],
                        0 !== o && (e[t] = void 0),
                        o)) {
                            var i = a && ("load" === a.type ? "missing" : a.type)
                              , r = a && a.target && a.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + i + ": " + r + ")",
                            s.name = "ChunkLoadError",
                            s.type = i,
                            s.request = r,
                            o[1](s)
                        }
                    };
                    n.l(r, l, "chunk-" + t, t)
                }
        }
        ,
        n.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, a) {
            var o, i, r = a[0], s = a[1], l = a[2], u = 0;
            if (r.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (o in s)
                    n.o(s, o) && (n.m[o] = s[o]);
                if (l)
                    var d = l(n)
            }
            for (t && t(a); u < r.length; u++)
                i = r[u],
                n.o(e, i) && e[i] && e[i][0](),
                e[i] = 0;
            return n.O(d)
        }
          , a = self["webpackChunkcarbon_neutral_neighbourhoods"] = self["webpackChunkcarbon_neutral_neighbourhoods"] || [];
        a.forEach(t.bind(null, 0)),
        a.push = t.bind(null, a.push.bind(a))
    }();
    var a = n.O(void 0, [998], (function() {
        return n(5276)
    }
    ));
    a = n.O(a)
}
)();
//# sourceMappingURL=app.d5e1ce38.js.map
