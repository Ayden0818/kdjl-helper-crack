(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-login-login"], {
        "0850": function(t, e, n) {
            "use strict";
            var i;
            n.d(e, "b", (function() {
                return s
            })), n.d(e, "c", (function() {
                return a
            })), n.d(e, "a", (function() {
                return i
            }));
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("v-uni-view", {
                        staticClass: "content"
                    }, [n("v-uni-view", {
                        class: !0
                    }, [n("v-uni-view", {
                        staticStyle: {
                            position: "relative"
                        }
                    }, [n("v-uni-label", {
                        attrs: {
                            for: "username"
                        }
                    }), n("v-uni-input", {
                        attrs: {
                            id: "username",
                            type: "text",
                            placeholder: "用户名"
                        },
                        model: {
                            value: t.username,
                            callback: function(e) {
                                t.username = e
                            },
                            expression: "username"
                        }
                    }), n("v-uni-picker", {
                        staticClass: "right",
                        attrs: {
                            id: "usernamePicker",
                            mode: "selector",
                            range: t.usernameRange,
                            value: t.usernameRange.indexOf(t.username)
                        },
                        on: {
                            change: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.usernameChange.apply(void 0, arguments)
                            }
                        }
                    }, [n("v-uni-view", [t._v("▼")])], 1)], 1), n("v-uni-view", {
                        staticStyle: {
                            position: "relative"
                        }
                    }, [n("v-uni-label", {
                        attrs: {
                            for: "password"
                        }
                    }), n("v-uni-input", {
                        attrs: {
                            id: "password",
                            password: !t.showPassword,
                            maxlength: "-1",
                            placeholder: "密码"
                        },
                        model: {
                            value: t.password,
                            callback: function(e) {
                                t.password = e
                            },
                            expression: "password"
                        }
                    })], 1), n("v-uni-picker", {
                        attrs: {
                            mode: "selector",
                            range: t.serverRange,
                            value: t.server
                        },
                        on: {
                            change: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.serverChange.apply(void 0, arguments)
                            }
                        }
                    }, [n("v-uni-view", [t._v("服务器: " + t._s(t.serverRange[t.server]))])], 1), n("v-uni-picker", {
                        staticClass: "item",
                        attrs: {
                            mode: "selector",
                            range: t.hosts,
                            "range-key": "title",
                            value: t.hostIndex
                        },
                        on: {
                            change: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.hostChange.apply(void 0, arguments)
                            }
                        }
                    }, [t._v("网络: " + t._s(t.proxy ? "代理 + " : "") + t._s(t.hosts[t.hostIndex].title))]), n("v-uni-radio-group", {
                        on: {
                            change: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.lineChange.apply(void 0, arguments)
                            }
                        }
                    }, t._l(6, (function(e, i) {
                        return n("v-uni-label", {
                            key: i,
                            class: !0
                        }, [n("v-uni-radio", {
                            attrs: {
                                value: i.toString(),
                                checked: i === t.line
                            }
                        }), t._v(t._s(i + 1) + "线")], 1)
                    })), 1), n("v-uni-radio-group", {
                        on: {
                            change: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.playerChange.apply(void 0, arguments)
                            }
                        }
                    }, t._l(3, (function(e, i) {
                        return n("v-uni-label", {
                            key: i,
                            class: !0
                        }, [n("v-uni-radio", {
                            attrs: {
                                value: i.toString(),
                                checked: i === t.player
                            }
                        }), t._v("角色" + t._s(i + 1))], 1)
                    })), 1)], 1), n("v-uni-button", {
                        attrs: {
                            loading: t.loading,
                            type: "button"
                        },
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.login.apply(void 0, arguments)
                            }
                        }
                    }, [t._v("登录" + t._s(t.loading ? "中..." : ""))]), n("kd-pmg", {
                        ref: "pmg"
                    })], 1)
                },
                a = []
        },
        "0dce": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n("55bb"),
                s = {
                    methods: {
                        parseHtml: i.parseHtml
                    }
                };
            e.default = s
        },
        1139: function(t, e, n) {
            "use strict";
            var i = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = i(n("0dce")),
                a = {
                    mixins: [s.default],
                    data: function() {
                        return {
                            title: "",
                            text: "",
                            list: [],
                            visible: !1,
                            next: []
                        }
                    },
                    methods: {
                        show: function(t, e) {
                            var n = this;
                            if (!this.visible || e) {
                                var i = t.data,
                                    s = t.props;
                                console.log("data:", i), console.log("props:", s);
                                var a = i.title,
                                    o = i.text,
                                    r = i.list;
                                this.visible = !0, this.title = a, this.text = o, this.list = r.length ? r : [{
                                    code: "",
                                    title: "确定"
                                }], this.props = s, this.$nextTick((function() {
                                    n.$el.querySelector(".content").scrollTop = 0
                                }))
                            } else this.next.push(t)
                        },
                        hide: function(t) {
                            this.visible = !1, this.title = "", this.text = "", this.list = [], this.props = {}, t && (this.next = [])
                        },
                        send: function(t) {
                            var e = this.props,
                                n = this.text;
                            this.hide(!!t), t ? ("~" === e.x && " ok" === t && (/限时惊奇蛋.+确认开启吗/.test(n) || /确认不提高几率开启吗/.test(n)) && (t = {
                                msg: t,
                                t: "l"
                            }), uni.$emit("send", t)) : this.next.length ? this.show(this.next.shift()) : "y" !== e.g || getCurrentPages()[0].$refs.menu.visible || uni.$emit("send", "?")
                        }
                    }
                };
            e.default = a
        },
        3285: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("5803"),
                s = n.n(i);
            for (var a in i)["default"].indexOf(a) < 0 && function(t) {
                n.d(e, t, (function() {
                    return i[t]
                }))
            }(a);
            e["default"] = s.a
        },
        5803: function(t, e, n) {
            "use strict";
            var i = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, n("28a5"), n("456d"), n("ac6a"), n("c5f6"), n("20d6");
            var s = i(n("7618")),
                a = i(n("75fc")),
                o = n("55bb"),
                r = i(n("a056")),
                u = i(n("748a")),
                l = {
                    components: {
                        kdPmg: u.default
                    },
                    mixins: [r.default],
                    data: function() {
                        return {
                            showPassword: !1,
                            username: "",
                            password: "",
                            usernameRange: [],
                            serverRange: (0, a.default)(o.serverList),
                            server: 0,
                            line: 0,
                            player: 0,
                            loading: !1,
                            hosts: (0, o.getHosts)(),
                            host: o.globalSettings.get("host"),
                            proxy: "object" === ("undefined" === typeof kdjl ? "undefined" : (0, s.default)(kdjl)) && kdjl.p && o.globalSettings.get("proxy")
                        }
                    },
                    computed: {
                        hostIndex: function() {
                            var t = this,
                                e = this.hosts.findIndex((function(e) {
                                    var n = e.host;
                                    return n === t.host
                                }));
                            return e < 0 ? 0 : e
                        }
                    },
                    methods: {
                        serverChange: function(t) {
                            var e = t.detail;
                            this.server = e.value
                        },
                        usernameChange: function(t) {
                            var e = t.detail;
                            this.username = this.usernameRange[e.value]
                        },
                        lineChange: function(t) {
                            var e = t.detail;
                            this.line = Number(e.value)
                        },
                        playerChange: function(t) {
                            var e = t.detail;
                            this.player = Number(e.value)
                        },
                        hostChange: function(t) {
                            var e = t.detail,
                                n = this.host = this.hosts[e.value].host;
                            o.globalSettings.set("host", n)
                        },
                        login: function() {
                            var t, e = this.username.trim(),
                                n = this.password.trim();
                            e || (t = "用户名不能为空"), n || (t = "密码不能为空"), t ? uni.showToast({
                                title: t,
                                icon: "none"
                            }) : kdjl.status === kdjl.Status.none ? (uni.$emit("login", {
                                username: e,
                                password: n,
                                server: this.server,
                                line: this.line,
                                player: this.player
                            }), this.loading = !0) : uni.showToast({
                                title: "登录中请稍等重试",
                                icon: "none"
                            })
                        },
                        onmsgs: function(t) {
                            var e = this;
                            t.forEach((function(t) {
                                t = (0, o.parseMsg)(t), "pmg" === t.type && (t.props = {}, t.data.list = [], e.$refs.pmg.show(t, !0))
                            }))
                        },
                        onlogined: function() {
                            uni.navigateBack()
                        }
                    },
                    onLoad: function() {
                        var t = this;
                        uni.$on("logined", this.onlogined), uni.$on("msgs", this._onmsgs = this.onmsgs.bind(this));
                        var e = (0, o.getUserInfo)();
                        Object.keys(e).forEach((function(n) {
                            t[n] = e[n]
                        })), this.usernameRange = o.globalSettings.get("userNames").split(/[｜|]/).filter((function(t) {
                            return t.length
                        })).map((function(t) {
                            return t.split(",")[0]
                        }))
                    },
                    onUnload: function() {
                        uni.$off("logined", this.onlogined), this._onmsgs && uni.$off("msgs", this._onmsgs)
                    }
                };
            e.default = l
        },
        7456: function(t, e, n) {
            "use strict";
            var i = n("7bb6"),
                s = n.n(i);
            s.a
        },
        "748a": function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("922a"),
                s = n("fe15");
            for (var a in s)["default"].indexOf(a) < 0 && function(t) {
                n.d(e, t, (function() {
                    return s[t]
                }))
            }(a);
            n("7456");
            var o, r = n("f0c5"),
                u = Object(r["a"])(s["default"], i["b"], i["c"], !1, null, "212c66ce", null, !1, i["a"], o);
            e["default"] = u.exports
        },
        "7bb6": function(t, e, n) {
            var i = n("9cac");
            "string" === typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            var s = n("4f06").default;
            s("b58193dc", i, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        "7d22": function(t, e, n) {
            e = t.exports = n("2350")(!1), e.push([t.i, ".right[data-v-0f0107a7]{position:absolute;right:0;top:0;width:1em;text-align:center}", ""])
        },
        "88b9": function(t, e, n) {
            "use strict";
            var i = n("eaa5"),
                s = n.n(i);
            s.a
        },
        "922a": function(t, e, n) {
            "use strict";
            var i;
            n.d(e, "b", (function() {
                return s
            })), n.d(e, "c", (function() {
                return a
            })), n.d(e, "a", (function() {
                return i
            }));
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("v-uni-view", {
                        staticClass: "mask",
                        class: {
                            show: t.visible
                        }
                    }, [n("v-uni-view", {
                        staticClass: "content"
                    }, [n("v-uni-view", {
                        staticClass: "title",
                        domProps: {
                            innerHTML: t._s(t.parseHtml(t.title))
                        }
                    }), n("v-uni-view", {
                        staticClass: "text",
                        domProps: {
                            innerHTML: t._s(t.parseHtml(t.text))
                        }
                    }), t._l(t.list, (function(e, i) {
                        return n("v-uni-button", {
                            key: i,
                            attrs: {
                                type: "default"
                            },
                            on: {
                                click: function(n) {
                                    arguments[0] = n = t.$handleEvent(n), t.send(e.code)
                                }
                            }
                        }, [n("v-uni-text", {
                            domProps: {
                                innerHTML: t._s(t.parseHtml(e.title))
                            }
                        })], 1)
                    })), t.list.length && !t.list[0].code && t.next.length ? n("v-uni-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.send("?")
                            }
                        }
                    }, [t._v("全部关闭")]) : t._e()], 2)], 1)
                },
                a = []
        },
        "9cac": function(t, e, n) {
            e = t.exports = n("2350")(!1), e.push([t.i, ".mask[data-v-212c66ce]{position:fixed;top:0;left:0;right:0;bottom:0;display:none;background-color:rgba(0,0,0,.4)}.mask.show[data-v-212c66ce]{display:block}.title[data-v-212c66ce]{text-align:center\n  /* font-size: 1.2em; */}.content[data-v-212c66ce]{position:absolute;box-sizing:border-box;background-color:#fff;\n    /* background-color: rgba(0, 0, 0, 0.8); */\n    /* color: white; */top:50%;top:calc(50% + 22px);left:20px;right:20px;max-height:90%;max-height:calc(90% - 44px);overflow-y:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%);border:1px solid #ccc;border-radius:5px}uni-button[data-v-212c66ce]{\n    /* color: white; */\n    /* background-color: rgba(0, 0, 0, 0.4); */margin-top:3px;line-height:2.2}uni-button[data-v-212c66ce]:after{\n    /* border: 1px solid rgb(255, 255, 255); */}.text[data-v-212c66ce]{white-space:pre-wrap}", ""])
        },
        a056: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                onShow: function() {
                    "pages/index/index" !== getCurrentPages()[0].route && uni.redirectTo({
                        url: "/pages/index/index"
                    })
                }
            };
            e.default = i
        },
        a86a: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("0850"),
                s = n("3285");
            for (var a in s)["default"].indexOf(a) < 0 && function(t) {
                n.d(e, t, (function() {
                    return s[t]
                }))
            }(a);
            n("88b9");
            var o, r = n("f0c5"),
                u = Object(r["a"])(s["default"], i["b"], i["c"], !1, null, "0f0107a7", null, !1, i["a"], o);
            e["default"] = u.exports
        },
        eaa5: function(t, e, n) {
            var i = n("7d22");
            "string" === typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            var s = n("4f06").default;
            s("199c969a", i, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        fe15: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("1139"),
                s = n.n(i);
            for (var a in i)["default"].indexOf(a) < 0 && function(t) {
                n.d(e, t, (function() {
                    return i[t]
                }))
            }(a);
            e["default"] = s.a
        }
    }
]);