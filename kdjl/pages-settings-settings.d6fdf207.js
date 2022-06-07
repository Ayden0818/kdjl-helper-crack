(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-settings-settings"], {
        "0c3b": function(e, t, a) {
            "use strict";
            var n = a("5f5a"),
                i = a.n(n);
            i.a
        },
        "3eda": function(e, t, a) {
            "use strict";
            var n;
            a.d(t, "b", (function() {
                return i
            })), a.d(t, "c", (function() {
                return s
            })), a.d(t, "a", (function() {
                return n
            }));
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("v-uni-view", {
                        staticClass: "content"
                    }, [a("v-uni-view", {
                        staticClass: "settings"
                    }, [a("v-uni-view", {
                        staticClass: "row"
                    }, [a("v-uni-view", {
                        staticClass: "type"
                    }, [e._v("登录信息")]), a("v-uni-checkbox-group", {
                        staticClass: "item",
                        on: {
                            change: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.showUserInfoChange.apply(void 0, arguments)
                            }
                        }
                    }, [a("v-uni-label", [a("v-uni-checkbox", {
                        attrs: {
                            value: "showUserInfo",
                            checked: e.showUserInfo
                        }
                    }), e._v("显示登录信息")], 1)], 1)], 1), a("v-uni-view", {
                        staticClass: "row"
                    }, [a("v-uni-view", {
                        staticClass: "type"
                    }, [e._v("图形")]), a("v-uni-checkbox-group", {
                        staticClass: "item",
                        on: {
                            change: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.colorChange.apply(void 0, arguments)
                            }
                        }
                    }, [a("v-uni-label", [a("v-uni-checkbox", {
                        attrs: {
                            value: "color",
                            checked: e.color
                        }
                    }), e._v("显示花里胡哨")], 1)], 1)], 1), a("v-uni-view", {
                        staticClass: "row"
                    }, [a("v-uni-view", {
                        staticClass: "type"
                    }, [e._v("消息上限")]), a("v-uni-view", {
                        staticClass: "item",
                        staticStyle: {
                            display: "flex"
                        }
                    }, [a("v-uni-slider", {
                        staticStyle: {
                            flex: "1"
                        },
                        attrs: {
                            "block-size": "20",
                            value: e.logMax,
                            min: 10,
                            max: 200,
                            step: 10
                        },
                        on: {
                            change: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.logMaxChange.apply(void 0, arguments)
                            }
                        }
                    }), a("v-uni-view", {
                        staticStyle: {
                            width: "3em",
                            "text-align": "center"
                        }
                    }, [e._v(e._s(e.logMax) + "条")])], 1)], 1), a("v-uni-view", {
                        staticClass: "row"
                    }, [a("v-uni-view", {
                        staticClass: "type"
                    }, [e._v("连接")]), a("v-uni-checkbox-group", {
                        staticClass: "item",
                        on: {
                            change: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.connectChange.apply(void 0, arguments)
                            }
                        }
                    }, [e.supportDisconnect ? a("v-uni-label", [a("v-uni-checkbox", {
                        attrs: {
                            value: "disconnect",
                            checked: e.disconnect
                        }
                    }), e._v("防止发呆")], 1) : e._e(), a("v-uni-label", [a("v-uni-checkbox", {
                        attrs: {
                            value: "reconnect",
                            checked: e.reconnect
                        }
                    }), e._v("自动重连")], 1)], 1)], 1), a("v-uni-view", {
                        staticClass: "row"
                    }, [a("v-uni-view", {
                        staticClass: "type"
                    }, [e._v("网络")]), a("v-uni-picker", {
                        staticClass: "item",
                        attrs: {
                            mode: "selector",
                            range: e.hosts,
                            "range-key": "title",
                            value: e.hostIndex
                        },
                        on: {
                            change: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.hostChange.apply(void 0, arguments)
                            }
                        }
                    }, [e._v("▼ " + e._s(e.hosts[e.hostIndex].title) + " ▼")])], 1), e.supportProxy ? a("v-uni-view", {
                        staticClass: "row"
                    }, [a("v-uni-view", {
                        staticClass: "type"
                    }, [e._v("Sock代理")]), a("v-uni-view", {
                        staticClass: "item"
                    }, [a("v-uni-input", {
                        attrs: {
                            maxlength: "-1",
                            type: "text",
                            value: e.proxy,
                            placeholder: "如：127.0.0.1:1080"
                        },
                        on: {
                            blur: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.proxyChange.apply(void 0, arguments)
                            }
                        }
                    })], 1)], 1) : e._e(), e.isDev ? a("v-uni-view", {
                        staticClass: "row"
                    }, [a("v-uni-view", {
                        staticClass: "type"
                    }, [e._v("调试")]), a("v-uni-checkbox-group", {
                        staticClass: "item",
                        on: {
                            change: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.allLogChange.apply(void 0, arguments)
                            }
                        }
                    }, [a("v-uni-label", [a("v-uni-checkbox", {
                        attrs: {
                            value: "allLog",
                            checked: e.allLog
                        }
                    }), e._v("全部日志")], 1)], 1)], 1) : e._e(), a("v-uni-view", {
                        staticClass: "row"
                    }, [a("v-uni-view", {
                        staticClass: "type"
                    }, [e._v("增加延迟")]), a("v-uni-view", {
                        staticClass: "item",
                        staticStyle: {
                            display: "flex"
                        }
                    }, [a("v-uni-slider", {
                        staticStyle: {
                            flex: "1"
                        },
                        attrs: {
                            "block-size": "20",
                            value: e.delay,
                            min: 0,
                            max: 2,
                            step: .1
                        },
                        on: {
                            change: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.delayChange.apply(void 0, arguments)
                            }
                        }
                    }), a("v-uni-view", {
                        staticStyle: {
                            width: "3em",
                            "text-align": "center"
                        }
                    }, [e._v(e._s(e.delay) + "秒")])], 1)], 1), a("v-uni-view", {
                        staticClass: "row"
                    }, [a("v-uni-view", {
                        staticClass: "type"
                    }, [e._v("挂机")]), a("v-uni-checkbox-group", {
                        staticClass: "item",
                        on: {
                            change: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.autoChange.apply(void 0, arguments)
                            }
                        }
                    }, [a("v-uni-label", [a("v-uni-checkbox", {
                        attrs: {
                            value: "autoBall",
                            checked: e.autoBall
                        }
                    }), e._v("自动换球")], 1), a("v-uni-label", [a("v-uni-checkbox", {
                        attrs: {
                            value: "ksbx",
                            checked: e.ksbx
                        }
                    }), e._v("快速补血")], 1), a("v-uni-label", [a("v-uni-checkbox", {
                        attrs: {
                            value: "petSoul",
                            checked: e.petSoul
                        }
                    }), e._v("领取灵魂粉末")], 1), a("v-uni-label", [a("v-uni-checkbox", {
                        attrs: {
                            value: "clear",
                            checked: e.clear
                        }
                    }), e._v("背包小于"), a("v-uni-text", {
                        staticStyle: {
                            color: "rgb(0, 122, 255)",
                            "border-bottom": "1px solid",
                            padding: "0 8px"
                        },
                        on: {
                            click: function(t) {
                                t.stopPropagation(), arguments[0] = t = e.$handleEvent(t), e.clearThresholdClick.apply(void 0, arguments)
                            }
                        }
                    }, [e._v(e._s(e.clearThreshold))]), e._v("格自动出售:")], 1), a("v-uni-input", {
                        attrs: {
                            maxlength: "-1",
                            type: "text",
                            placeholder: "需要自动卖出的物品"
                        },
                        on: {
                            blur: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.clearItemChange.apply(void 0, arguments)
                            }
                        },
                        model: {
                            value: e.clearItem,
                            callback: function(t) {
                                e.clearItem = t
                            },
                            expression: "clearItem"
                        }
                    }), a("v-uni-label", [a("v-uni-checkbox", {
                        attrs: {
                            value: "checkPet",
                            checked: e.checkPet
                        }
                    }), e._v("检查宠物: " + e._s(e.pet || "最近或第一个"))], 1), a("v-uni-label", [a("v-uni-checkbox", {
                        attrs: {
                            value: "auto7",
                            checked: e.auto7
                        }
                    }), e._v("7号项链经验兑换: 银币")], 1)], 1)], 1), a("v-uni-view", {
                        staticClass: "row"
                    }, [a("v-uni-view", {
                        staticClass: "type"
                    }, [e._v("出售保护")]), a("v-uni-input", {
                        attrs: {
                            maxlength: "-1",
                            type: "text",
                            placeholder: "多个物品使用|分隔"
                        },
                        on: {
                            blur: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.keepItemChange.apply(void 0, arguments)
                            }
                        },
                        model: {
                            value: e.keepItem,
                            callback: function(t) {
                                e.keepItem = t
                            },
                            expression: "keepItem"
                        }
                    })], 1), a("v-uni-view", {
                        staticClass: "row"
                    }, [a("v-uni-view", {
                        staticClass: "type"
                    }, [e._v("账号列表")]), a("v-uni-checkbox-group", {
                        staticClass: "item",
                        on: {
                            change: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.taskChange.apply(void 0, arguments)
                            }
                        }
                    }, [a("v-uni-label"), a("v-uni-input", {
                        attrs: {
                            maxlength: "-1",
                            type: "text",
                            placeholder: "多个账号使用|分隔"
                        },
                        on: {
                            blur: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.userNamesChange.apply(void 0, arguments)
                            }
                        },
                        model: {
                            value: e.userNames,
                            callback: function(t) {
                                e.userNames = t
                            },
                            expression: "userNames"
                        }
                    })], 1)], 1), a("v-uni-view", {
                        staticClass: "row"
                    }, [a("v-uni-view", {
                        staticClass: "type"
                    }, [e._v("物品密码")]), a("v-uni-view", {
                        staticClass: "item"
                    }, [a("v-uni-input", {
                        attrs: {
                            maxlength: "-1",
                            type: "text",
                            password: "password",
                            placeholder: "用于自动解物品锁"
                        },
                        on: {
                            blur: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.itemPasswordChange.apply(void 0, arguments)
                            }
                        },
                        model: {
                            value: e.itemPassword,
                            callback: function(t) {
                                e.itemPassword = t
                            },
                            expression: "itemPassword"
                        }
                    })], 1)], 1), a("v-uni-view", {
                        staticClass: "row"
                    }, [a("v-uni-view", {
                        staticClass: "type"
                    }, [e._v("物品查找")]), a("v-uni-radio-group", {
                        staticClass: "item",
                        on: {
                            change: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.itemFindChange.apply(void 0, arguments)
                            }
                        }
                    }, [a("v-uni-label", [a("v-uni-radio", {
                        attrs: {
                            value: "one",
                            checked: "one" === e.itemFind
                        }
                    }), e._v("仅第一页")], 1), a("v-uni-label", [a("v-uni-radio", {
                        attrs: {
                            value: "all",
                            checked: "all" === e.itemFind
                        }
                    }), e._v("整个背包")], 1)], 1)], 1), a("v-uni-view", {
                        staticClass: "row"
                    }, [a("v-uni-view", {
                        staticClass: "type"
                    }, [e._v("回合频率")]), a("v-uni-view", {
                        staticClass: "item",
                        staticStyle: {
                            display: "flex"
                        }
                    }, [a("v-uni-slider", {
                        staticStyle: {
                            flex: "1"
                        },
                        attrs: {
                            "block-size": "20",
                            value: e.combatUpdate,
                            min: .5,
                            max: 4,
                            step: .1
                        },
                        on: {
                            change: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.combatUpdateChange.apply(void 0, arguments)
                            }
                        }
                    }), a("v-uni-view", {
                        staticStyle: {
                            width: "3em",
                            "text-align": "center"
                        }
                    }, [e._v(e._s(e.combatUpdate) + "秒")])], 1)], 1), a("v-uni-view", {
                        staticClass: "row"
                    }, [a("v-uni-view", {
                        staticClass: "type"
                    }, [e._v("自动战斗")]), a("v-uni-view", {
                        staticClass: "item"
                    }, [a("v-uni-radio-group", {
                        on: {
                            change: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.autoCombatChange.apply(void 0, arguments)
                            }
                        }
                    }, [a("v-uni-label", [a("v-uni-radio", {
                        attrs: {
                            value: "auto",
                            checked: "history" !== e.autoCombat
                        }
                    }), e._v("系统")], 1), a("v-uni-label", [a("v-uni-radio", {
                        attrs: {
                            value: "history",
                            checked: "history" === e.autoCombat
                        }
                    }), a("v-uni-text", {
                        class: {
                            history: e.history
                        },
                        on: {
                            click: function(t) {
                                arguments[0] = t = e.$handleEvent(t), "history" === e.autoCombat && (e.history = !e.history)
                            }
                        }
                    }, [e._v("历史操作")])], 1), a("v-uni-view", {
                        class: !0,
                        attrs: {
                            disabled: "history" !== e.autoCombat
                        },
                        on: {
                            click: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.selectCombat("人物操作")
                            }
                        }
                    }, [e._v("人物：" + e._s(e.btn0 || "普通攻击"))]), a("v-uni-view", {
                        class: !0,
                        attrs: {
                            disabled: "history" !== e.autoCombat
                        },
                        on: {
                            click: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.selectCombat("宠物操作")
                            }
                        }
                    }, [e._v("宠物：" + e._s(e.btn1 || "普通攻击"))])], 1), a("v-uni-checkbox-group", {
                        on: {
                            change: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.combatChange.apply(void 0, arguments)
                            }
                        }
                    }, [a("v-uni-label", {
                        class: {
                            disabled: "history" !== e.autoCombat
                        }
                    }, [a("v-uni-checkbox", {
                        attrs: {
                            disabled: "history" !== e.autoCombat,
                            value: "getPet",
                            checked: e.getPet
                        }
                    }), e._v("捕捉宠物（历史操作）")], 1)], 1)], 1)], 1)], 1)], 1)
                },
                s = []
        },
        "5f5a": function(e, t, a) {
            var n = a("e770");
            "string" === typeof n && (n = [
                [e.i, n, ""]
            ]), n.locals && (e.exports = n.locals);
            var i = a("4f06").default;
            i("0fff9488", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        a056: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                onShow: function() {
                    "pages/index/index" !== getCurrentPages()[0].route && uni.redirectTo({
                        url: "/pages/index/index"
                    })
                }
            };
            t.default = n
        },
        ab4d: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("b577"),
                i = a.n(n);
            for (var s in n)["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return n[e]
                }))
            }(s);
            t["default"] = i.a
        },
        b577: function(e, t, a) {
            "use strict";
            var n = a("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, a("f559"), a("c5f6"), a("96cf");
            var i = n(a("3b8d"));
            a("6762"), a("2fdb"), a("20d6");
            var s = n(a("7618")),
                l = a("55bb"),
                o = n(a("a056")),
                c = a("7280"),
                u = a("80d4"),
                r = {
                    mixins: [o.default],
                    data: function() {
                        var e = (0, l.getMainData)(),
                            t = Object.assign({
                                isDev: l.isDev,
                                // supportProxy: "object" === ("undefined" === typeof kdjl ? "undefined" : (0, s.default)(kdjl)) && kdjl.p,
                                supportProxy: true,
                                supportDisconnect: "object" === ("undefined" === typeof kdjl ? "undefined" : (0, s.default)(kdjl)) && kdjl.close,
                                hosts: (0, l.getHosts)()
                            }, l.globalSettings.data, {
                                history: e.combat && e.combat.history,
                                btn0: (0, l.filterHandle)(l.userSettings.get("人物操作")),
                                btn1: (0, l.filterHandle)(l.userSettings.get("宠物操作")),
                                pet: l.userSettings.get("pet")
                            });
                        return t
                    },
                    computed: {
                        hostIndex: function() {
                            var e = this,
                                t = this.hosts.findIndex((function(t) {
                                    var a = t.host;
                                    return a === e.host
                                }));
                            return t < 0 ? 0 : t
                        }
                    },
                    watch: {
                        history: function(e) {
                            (0, l.getMainData)().combat.history = e
                        }
                    },
                    methods: {
                        showUserInfoChange: function(e) {
                            var t = e.detail,
                                a = t.value;
                            l.globalSettings.set("showUserInfo", a.includes("showUserInfo"))
                        },
                        colorChange: function(e) {
                            var t = e.detail,
                                a = t.value,
                                n = a.includes("color");
                            l.globalSettings.set("color", n), (0, l.getMainData)().color = n
                        },
                        logMaxChange: function(e) {
                            var t = e.detail,
                                a = t.value;
                            this.logMax = a, l.globalSettings.set("logMax", a)
                        },
                        connectChange: function(e) {
                            var t = e.detail,
                                a = t.value;
                            l.globalSettings.set("disconnect", a.includes("disconnect")), l.globalSettings.set("reconnect", a.includes("reconnect"))
                        },
                        hostChange: function(e) {
                            var t = e.detail,
                                a = this.host = this.hosts[t.value].host;
                            l.globalSettings.set("host", a)
                        },
                        proxyChange: function(e) {
                            var t = e.detail,
                                a = t.value;
                            /^(\S+\.)+\S+:\d+$/.test(a) || "" === a ? (this.proxy = a, l.globalSettings.set("proxy", a)) : uni.showModal({
                                title: "代理设置格式错误",
                                showCancel: !1
                            })
                        },
                        allLogChange: function(e) {
                            var t = e.detail,
                                a = t.value;
                            l.globalSettings.set("allLog", a.includes("allLog"))
                        },
                        delayChange: function(e) {
                            var t = e.detail,
                                a = t.value.toFixed(1);
                            this.delay = a, l.globalSettings.set("delay", a)
                        },
                        autoChange: function(e) {
                            var t = e.detail,
                                a = t.value,
                                n = a.includes("autoBall"),
                                i = a.includes("ksbx");
                            !i || !n || l.globalSettings.get("ksbx") && l.globalSettings.get("autoBall") || uni.showModal({
                                content: "同时勾选“自动换球”和“快速补血”时仅在换球后快速补血",
                                showCancel: !1
                            }), l.globalSettings.set("autoBall", n), l.globalSettings.set("ksbx", i), l.globalSettings.set("clear", a.includes("clear")), l.globalSettings.set("petSoul", a.includes("petSoul"));
                            var s = a.includes("checkPet");
                            this.checkPet = s, l.globalSettings.set("checkPet", s);
                            var o = a.includes("auto7");
                            this.auto7 = o, l.globalSettings.set("auto7", o);
                            var c = a.includes("getPet");
                            this.getPet = c, l.globalSettings.set("getPet", c)
                        },
                        keepItemChange: function() {
                            l.globalSettings.set("keepItem", this.keepItem)
                        },
                        userNamesChange: function() {
                            l.globalSettings.set("userNames", this.userNames)
                        },
                        itemPasswordChange: function() {
                            l.globalSettings.set("itemPassword", this.itemPassword)
                        },
                        clearThresholdClick: function() {
                            var e = (0, i.default)(regeneratorRuntime.mark((function e() {
                                var t, a, n, i;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, u({
                                                title: "输入1-15",
                                                type: "input",
                                                inputValue: String(this.clearThreshold)
                                            });
                                        case 2:
                                            if (t = e.sent, a = t.button, n = t.text, "cancel" !== a && n) {
                                                e.next = 7;
                                                break
                                            }
                                            throw new Error("取消");
                                        case 7:
                                            i = Number(n), i >= 1 && i <= 15 && l.globalSettings.set("clearThreshold", this.clearThreshold = Math.round(i));
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        clearItemChange: function() {
                            l.globalSettings.set("clearItem", this.clearItem)
                        },
                        itemFindChange: function(e) {
                            var t = e.detail;
                            l.globalSettings.set("itemFind", t.value)
                        },
                        autoCombatChange: function(e) {
                            var t = e.detail,
                                a = t.value;
                            this.autoCombat = a, l.globalSettings.set("autoCombat", a)
                        },
                        combatUpdateChange: function(e) {
                            var t = e.detail,
                                a = t.value.toFixed(1);
                            this.combatUpdate = a, l.globalSettings.set("combatUpdate", a)
                        },
                        combatChange: function(e) {
                            var t = e.detail,
                                a = t.value;
                            l.globalSettings.set("getPet", a.includes("getPet"))
                        },
                        selectCombat: function() {
                            var e = (0, i.default)(regeneratorRuntime.mark((function e(t) {
                                var a, n, i, s;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return a = (0, c.getCombatItems)(t), e.next = 3, (0, l.showActionSheet)({
                                                itemList: ["清空"].concat(a)
                                            });
                                        case 3:
                                            if (n = e.sent, i = n.tapIndex, !(i < 0)) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 7:
                                            0 === i && ((0, c.clearCombatItems)(t), a = (0, c.getCombatItems)(t)), s = a[i - 1], l.userSettings.set(t, s), this[t.startsWith("人物") ? "btn0" : "btn1"] = s;
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                };
            t.default = r
        },
        b653: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("3eda"),
                i = a("ab4d");
            for (var s in i)["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return i[e]
                }))
            }(s);
            a("0c3b");
            var l, o = a("f0c5"),
                c = Object(o["a"])(i["default"], n["b"], n["c"], !1, null, "66c8a51e", null, !1, n["a"], l);
            t["default"] = c.exports
        },
        e770: function(e, t, a) {
            t = e.exports = a("2350")(!1), t.push([e.i, '.row[data-v-66c8a51e]{display:-webkit-box;display:-webkit-flex;display:flex}.row>.type[data-v-66c8a51e]{width:5em;text-align:right}.row>.type[data-v-66c8a51e]:after{content:":"}.row>.item[data-v-66c8a51e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:4px}.row>.item uni-label[data-v-66c8a51e]{display:block}uni-input[data-v-66c8a51e]{border-bottom:1px solid #ccc}uni-slider[data-v-66c8a51e]{margin:4px 18px}.disabled[data-v-66c8a51e]{opacity:.4}.history[data-v-66c8a51e]{border-bottom:2px solid #007aff}uni-view[disabled][data-v-66c8a51e]{opacity:.5}', ""])
        }
    }
]);