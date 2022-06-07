(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-index-index"], {
        "0157": function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("b8ca"),
                a = n("0bbd");
            for (var s in a) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return a[e]
                }))
            }(s);
            n("a8e5");
            var i, c = n("f0c5"),
                u = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, "0801f73e", null, !1, r["a"], i);
            t["default"] = u.exports
        },
        "0683": function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("aeca"),
                a = n("836f");
            for (var s in a) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return a[e]
                }))
            }(s);
            n("67f5");
            var i, c = n("f0c5"),
                u = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, "788ef30c", null, !1, r["a"], i);
            t["default"] = u.exports
        },
        "09c1": function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = {
                data: function () {
                    return {
                        time: "",
                        visible: !1
                    }
                },
                methods: {
                    show: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        this.time = e, this.visible = parseInt(e) > 0
                    },
                    hide: function (e) {
                        this.visible = !1, this.time = ""
                    },
                    send: function () {
                        uni.$emit("send", "5")
                    }
                }
            };
            t.default = r
        },
        "0ae8": function (e, t, n) {
            "use strict";
            var r = n("e79d"),
                a = n.n(r);
            a.a
        },
        "0bbd": function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("99b0"),
                a = n.n(r);
            for (var s in r) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return r[e]
                }))
            }(s);
            t["default"] = a.a
        },
        "0dce": function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("55bb"),
                a = {
                    methods: {
                        parseHtml: r.parseHtml
                    }
                };
            t.default = a
        },
        1102: function (e, t, n) {
            t = e.exports = n("2350")(!1), t.push([e.i, ".uni-numbox[data-v-f89d6fe8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:35px;line-height:35px;width:120px}.uni-numbox__value[data-v-f89d6fe8]{width:40px;height:35px;text-align:center}.uni-numbox__minus[data-v-f89d6fe8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:35px;height:35px;font-size:20px}.uni-numbox__plus[data-v-f89d6fe8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:35px;height:35px}.uni-numbox--text[data-v-f89d6fe8]{font-size:20px}", ""])
        },
        1139: function (e, t, n) {
            "use strict";
            var r = n("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("0dce")),
                s = {
                    mixins: [a.default],
                    data: function () {
                        return {
                            title: "",
                            text: "",
                            list: [],
                            visible: !1,
                            next: []
                        }
                    },
                    methods: {
                        show: function (e, t) {
                            var n = this;
                            if (!this.visible || t) {
                                var r = e.data,
                                    a = e.props;
                                console.log("data:", r), console.log("props:", a);
                                var s = r.title,
                                    i = r.text,
                                    c = r.list;
                                this.visible = !0, this.title = s, this.text = i, this.list = c.length ? c : [{
                                    code: "",
                                    title: "确定"
                                }], this.props = a, this.$nextTick((function () {
                                    n.$el.querySelector(".content").scrollTop = 0
                                }))
                            } else this.next.push(e)
                        },
                        hide: function (e) {
                            this.visible = !1, this.title = "", this.text = "", this.list = [], this.props = {}, e && (this.next = [])
                        },
                        send: function (e) {
                            var t = this.props,
                                n = this.text;
                            this.hide(!!e), e ? ("~" === t.x && " ok" === e && (/限时惊奇蛋.+确认开启吗/.test(n) || /确认不提高几率开启吗/.test(n)) && (e = {
                                msg: e,
                                t: "l"
                            }), uni.$emit("send", e)) : this.next.length ? this.show(this.next.shift()) : "y" !== t.g || getCurrentPages()[0].$refs.menu.visible || uni.$emit("send", "?")
                        }
                    }
                };
            t.default = s
        },
        1439: function (e, t, n) {
            "use strict";
            var r = n("ca42"),
                a = n.n(r);
            a.a
        },
        "179e": function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("e903"),
                a = n.n(r);
            for (var s in r) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return r[e]
                }))
            }(s);
            t["default"] = a.a
        },
        "1db7": function (e, t, n) {
            t = e.exports = n("2350")(!1), t.push([e.i, ".kd-wg[data-v-a30b097e]{position:fixed;top:0;top:var(--window-top);left:0;right:0;background-color:rgba(0,0,0,.8);color:#fff;display:none;text-align:center;font-size:16px;line-height:30px}.kd-wg.show[data-v-a30b097e]{display:block}", ""])
        },
        2452: function (e, t, n) {
            var r = n("e869");
            "string" === typeof r && (r = [
                [e.i, r, ""]
            ]), r.locals && (e.exports = r.locals);
            var a = n("4f06").default;
            a("1a1c8b96", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        2528: function (e, t, n) {
            var r = n("7e30");
            "string" === typeof r && (r = [
                [e.i, r, ""]
            ]), r.locals && (e.exports = r.locals);
            var a = n("4f06").default;
            a("3f540be4", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        "26ae": function (e, t, n) {
            "use strict";
            var r;
            n.d(t, "b", (function () {
                return a
            })), n.d(t, "c", (function () {
                return s
            })), n.d(t, "a", (function () {
                return r
            }));
            var a = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-uni-view", {
                    staticClass: "mask",
                    class: {
                        show: e.visible
                    }
                }, [n("v-uni-view", {
                    staticClass: "content"
                }, [n("v-uni-image", {
                    staticClass: "loading",
                    attrs: {
                        src: "//static.i-weather.cn/kdjl-helper/static/loading.png"
                    }
                }), n("v-uni-view", {
                    staticClass: "title"
                }, [e._v("准备重新登录")]), n("v-uni-button", {
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.login.apply(void 0, arguments)
                        }
                    }
                }, [e._v("立刻登录")]), n("v-uni-button", {
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.hide.apply(void 0, arguments)
                        }
                    }
                }, [e._v("取消登录")])], 1)], 1)
            },
                s = []
        },
        2817: function (e, t, n) {
            "use strict";
            var r = n("e08f"),
                a = n.n(r);
            a.a
        },
        "283c": function (e, t, n) {
            "use strict";
            var r;
            n.d(t, "b", (function () {
                return a
            })), n.d(t, "c", (function () {
                return s
            })), n.d(t, "a", (function () {
                return r
            }));
            var a = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-uni-view", {
                    staticClass: "kd-menu-item"
                }, [n("v-uni-view", {
                    staticClass: "title list",
                    domProps: {
                        innerHTML: e._s(e.parseHtml(e.index + 1 + "." + e.item.title + (e.item.hint ? "❗️" : "")))
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.titleClick(e.item.code)
                        }
                    }
                }), n("v-uni-view", {
                    staticClass: "child"
                }, e._l(e.item.list, (function (t, r) {
                    return n("v-uni-view", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.visible,
                            expression: "visible"
                        }],
                        key: r,
                        staticClass: "list",
                        attrs: {
                            disabled: !!e.keep(t.title) && "lock"
                        },
                        nativeOn: {
                            click: function (n) {
                                return e.childClick(n, e.item.code, t.code)
                            }
                        }
                    }, [n("v-uni-text", {
                        domProps: {
                            innerHTML: e._s(e.parseHtml(t.title))
                        }
                    }), n("v-uni-view", {
                        staticClass: "item-btn copy",
                        on: {
                            click: function (n) {
                                n.stopPropagation(), arguments[0] = n = e.$handleEvent(n), e.copy(t.title)
                            }
                        }
                    }, [e._v("")]), n("v-uni-view", {
                        staticClass: "item-btn lock",
                        nativeOn: {
                            click: function (t) {
                                return t.stopPropagation(), e.lock(t, !1)
                            }
                        }
                    }, [e._v("")]), n("v-uni-view", {
                        staticClass: "item-btn unlock",
                        nativeOn: {
                            click: function (t) {
                                return t.stopPropagation(), e.lock(t, !0)
                            }
                        }
                    }, [e._v("")])], 1)
                })), 1), n("v-uni-view", {
                    staticClass: "item-btn",
                    on: {
                        click: function (t) {
                            t.stopPropagation(), arguments[0] = t = e.$handleEvent(t), e.copy(e.item.title)
                        }
                    }
                }, [e._v("")])], 1)
            },
                s = []
        },
        2920: function (e, t, n) {
            "use strict";
            var r = n("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n("a481"), n("7514"), n("f559"), n("28a5"), n("6762"), n("2fdb"), n("c5f6");
            var a = n("55bb"),
                s = r(n("0dce")),
                i = n("80d4"),
                c = [],
                u = {
                    mixins: [s.default],
                    props: {
                        index: {
                            type: Number,
                            default: 0
                        },
                        item: {
                            type: Object,
                            difault: function () {
                                return {}
                            }
                        }
                    },
                    data: function () {
                        return {
                            visible: !1
                        }
                    },
                    created: function () {
                        if (0 === this.index) {
                            var e = this.item.list || [];
                            e.length && e[e.length - 1].title.includes("摆摊") && (this.visible = !0)
                        }
                        c = a.globalSettings.get("keepItem").split(/[｜|]/).filter((function (e) {
                            return e.length
                        }))
                    },
                    methods: {
                        titleClick: function (e) {
                            this.item.list && this.item.list.length ? this.visible = !this.visible : this.$emit("send", e)
                        },
                        childClick: function (e, t, n) {
                            "lock" !== e.currentTarget.getAttribute("disabled") && this.$emit("send", "".concat(t).concat(t.startsWith("~") && !/^~\d+$/.test(t) ? "" : " ").concat(n))
                        },
                        keep: function (e) {
                            var t = this;
                            return c.find((function (n) {
                                return (0, a.clearText)(t.item.title).includes(n) && (0, a.clearText)(e).includes("丢弃")
                            }))
                        },
                        copy: function (e) {
                            e = (0, a.clearText)(e).replace(/\(共\d+组\)/, "").trim();
                            var t = document.createElement("textarea");
                            t.style.position = "absolute", t.style.top = "0", t.style.zIndex = "-9999", document.body.appendChild(t), t.value = e, t.focus(), t.select();
                            var n = document.execCommand("Copy", !1, null);
                            t.remove(), n ? uni.showToast({
                                title: "复制成功",
                                icon: "none"
                            }) : i({
                                title: "手动复制",
                                type: "input",
                                inputValue: e
                            })
                        },
                        lock: function (e, t) {
                            e.target.parentElement.setAttribute("disabled", t ? "lock" : "unlock")
                        }
                    }
                };
            t.default = u
        },
        "2d83": function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("4c17"),
                a = n("a09a");
            for (var s in a) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return a[e]
                }))
            }(s);
            n("1439");
            var i, c = n("f0c5"),
                u = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, "3c73b0f2", null, !1, r["a"], i);
            t["default"] = u.exports
        },
        "32e1": function (e, t, n) {
            "use strict";
            var r = n("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n("c5f6");
            var a = r(n("7618")),
                s = {
                    filters: {
                        title: function (e) {
                            var t = e.range[e.value];
                            return "object" === (0, a.default)(t) ? t.title : t
                        }
                    },
                    data: function () {
                        return {
                            visible: !1,
                            form: []
                        }
                    },
                    methods: {
                        show: function (e) {
                            var t = this;
                            return this.cancel(), this.form = JSON.parse(JSON.stringify(e)), this.visible = !0, new Promise((function (e, n) {
                                t.resolve = e, t.reject = n
                            }))
                        },
                        submit: function () {
                            this.resolve && this.resolve(JSON.parse(JSON.stringify(this.form))), this.reset()
                        },
                        radioChange: function (e, t) {
                            var n = e.detail;
                            t.value = Number(n.value)
                        },
                        checkboxChange: function (e, t) {
                            var n = e.detail;
                            t.value = 1 === n.value.length
                        },
                        cancel: function () {
                            this.reject && this.reject(), this.reset()
                        },
                        reset: function () {
                            this.visible = !1, this.form = [], this.resolve = null, this.reject = null
                        }
                    }
                };
            t.default = s
        },
        "36b3": function (e, t, n) {
            "use strict";
            var r = n("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = s;
            var a = r(n("ecd6"));
            console.log(a.toString())
            function s() {
                return a.default('', "Worker", void 0, "kdjl/index.worker.e5bfd839.worker.js")
            }
        },
        "381f": function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("98e6"),
                a = n.n(r);
            for (var s in r) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return r[e]
                }))
            }(s);
            t["default"] = a.a
        },
        3980: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("91aa"),
                a = n.n(r);
            for (var s in r) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return r[e]
                }))
            }(s);
            t["default"] = a.a
        },
        "43a1": function (e, t, n) {
            "use strict";
            var r = n("f551"),
                a = n.n(r);
            a.a
        },
        "4c17": function (e, t, n) {
            "use strict";
            var r;
            n.d(t, "b", (function () {
                return a
            })), n.d(t, "c", (function () {
                return s
            })), n.d(t, "a", (function () {
                return r
            }));
            var a = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-uni-view", {
                    staticClass: "mask",
                    class: {
                        show: e.visible
                    }
                }, [n("v-uni-view", {
                    staticClass: "content"
                }, [n("v-uni-view", {
                    staticClass: "title",
                    domProps: {
                        innerHTML: e._s(e.parseHtml(e.title))
                    }
                }), n("v-uni-checkbox-group", {
                    on: {
                        change: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.checkboxChange.apply(void 0, arguments)
                        }
                    }
                }, e._l(e.list, (function (t, r) {
                    return n("v-uni-label", {
                        key: r,
                        attrs: {
                            disabled: e.isKeep(t.title),
                            ignore: e.ignore.includes(r)
                        }
                    }, [n("v-uni-checkbox", {
                        attrs: {
                            disabled: e.isKeep(t.title, r),
                            value: t.id
                        }
                    }), n("v-uni-text", {
                        domProps: {
                            innerHTML: e._s(e.parseHtml(t.title))
                        }
                    }), e.ignore.includes(r) ? n("v-uni-view", {
                        staticClass: "item-btn",
                        nativeOn: {
                            click: function (t) {
                                return t.stopPropagation(), e.lock(r, !1)
                            }
                        }
                    }, [e._v("")]) : n("v-uni-view", {
                        staticClass: "item-btn",
                        nativeOn: {
                            click: function (t) {
                                return t.stopPropagation(), e.lock(r, !0)
                            }
                        }
                    }, [e._v("")])], 1)
                })), 1), n("v-uni-button", {
                    attrs: {
                        type: "default"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.send.apply(void 0, arguments)
                        }
                    }
                }, [e._v("确定")])], 1)], 1)
            },
                s = []
        },
        "4d27": function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("e252"),
                a = n.n(r);
            for (var s in r) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return r[e]
                }))
            }(s);
            t["default"] = a.a
        },
        5172: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = {
                data: function () {
                    return {
                        visible: !1
                    }
                },
                methods: {
                    show: function (e, t) {
                        var n = this;
                        this.visible = !0;
                        var r = this.$el;
                        r.remove(), document.body.appendChild(r), this.callback = e, console.log(t), this.timeout = setTimeout((function () {
                            n.login()
                        }), t)
                    },
                    hide: function () {
                        this.visible = !1, this.$el.remove(), delete this.callback, clearTimeout(this.timeout), delete this.timeout
                    },
                    login: function () {
                        this.callback && this.callback(), this.hide()
                    }
                }
            };
            t.default = r
        },
        5553: function (e, t, n) {
            t = e.exports = n("2350")(!1), t.push([e.i, ".mask[data-v-6b17e30a]{position:fixed;top:0;left:0;right:0;bottom:0;display:none;background-color:rgba(0,0,0,.4)}.mask.show[data-v-6b17e30a]{display:block}.title[data-v-6b17e30a]{text-align:center\n  /* font-size: 1.2em; */}.content[data-v-6b17e30a]{position:absolute;box-sizing:border-box;background-color:#fff;\n    /* background-color: rgba(0, 0, 0, 0.8); */\n    /* color: white; */top:50%;top:calc(50% + 22px);left:20px;right:20px;max-height:90%;max-height:calc(90% - 44px);overflow-y:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%);border:1px solid #ccc;border-radius:5px}uni-button[data-v-6b17e30a]{\n    /* color: white; */\n    /* background-color: rgba(0, 0, 0, 0.4); */margin-top:3px;line-height:2.2}uni-button[data-v-6b17e30a]:after{\n    /* border: 1px solid rgb(255, 255, 255); */}.input-box[data-v-6b17e30a]{margin:5px 0}.input-box>uni-input[data-v-6b17e30a]{border-bottom:1px solid #ccc}.input-box-fast>uni-input[data-v-6b17e30a]{margin-right:56px}.input-box-fast>uni-button[data-v-6b17e30a]{position:absolute;right:0;top:0;line-height:22px}.send[data-v-6b17e30a]{margin-top:10px}", ""])
        },
        "5a80": function (e, t, n) {
            "use strict";
            var r = n("a4c3"),
                a = n.n(r);
            a.a
        },
        "5dea": function (e, t, n) {
            "use strict";
            var r = n("b431"),
                a = n.n(r);
            a.a
        },
        6055: function (e, t, n) {
            "use strict";
            var r = n("e494"),
                a = n.n(r);
            a.a
        },
        "67f5": function (e, t, n) {
            "use strict";
            var r = n("2452"),
                a = n.n(r);
            a.a
        },
        "68a7": function (e, t, n) {
            "use strict";
            var r = n("d793"),
                a = n.n(r);
            a.a
        },
        "6c84": function (e, t, n) {
            "use strict";
            var r;
            n.d(t, "b", (function () {
                return a
            })), n.d(t, "c", (function () {
                return s
            })), n.d(t, "a", (function () {
                return r
            }));
            var a = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-uni-view", {
                    staticClass: "kd-wg",
                    class: {
                        show: e.visible
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.send.apply(void 0, arguments)
                        }
                    }
                }, [e._v("点击进行反外挂验证：" + e._s(e.time) + "秒")])
            },
                s = []
        },
        "6d8f": function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("26ae"),
                a = n("a0b3");
            for (var s in a) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return a[e]
                }))
            }(s);
            n("5dea");
            var i, c = n("f0c5"),
                u = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, "3a807853", null, !1, r["a"], i);
            t["default"] = u.exports
        },
        "6df2": function (e, t, n) {
            "use strict";
            var r = n("e2f7"),
                a = n.n(r);
            a.a
        },
        "6e89": function (e, t, n) {
            t = e.exports = n("2350")(!1), t.push([e.i, '@font-face{font-family:iconfont;  /* Project id 3180747 */src:url(https://at.alicdn.com/t/font_3180747_vqf0iwum1cl.woff2?t=1644746163956) format("woff2"),url(https://at.alicdn.com/t/font_3180747_vqf0iwum1cl.woff?t=1644746163956) format("woff"),url(https://at.alicdn.com/t/font_3180747_vqf0iwum1cl.ttf?t=1644746163956) format("truetype")}.kd-menu-item[data-v-e9fe6d14]{position:relative;line-height:40px}.item-btn[data-v-e9fe6d14]{font-family:iconfont;position:absolute;right:0;top:0}.item-btn.lock[data-v-e9fe6d14],.item-btn.unlock[data-v-e9fe6d14]{display:none}[disabled]>.item-btn[data-v-e9fe6d14]{display:none}[disabled]>.item-btn.lock[data-v-e9fe6d14]{display:block}[disabled=unlock]>.item-btn.lock[data-v-e9fe6d14]{display:none}[disabled=unlock]>.item-btn.unlock[data-v-e9fe6d14]{display:block}.child[data-v-e9fe6d14]{padding-left:20px}.list[data-v-e9fe6d14]{position:relative;border-top:1px solid #ccc;padding-right:1em}.list[disabled=lock]>uni-text[data-v-e9fe6d14]{opacity:.4}', ""])
        },
        7456: function (e, t, n) {
            "use strict";
            var r = n("7bb6"),
                a = n.n(r);
            a.a
        },
        "748a": function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("922a"),
                a = n("fe15");
            for (var s in a) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return a[e]
                }))
            }(s);
            n("7456");
            var i, c = n("f0c5"),
                u = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, "212c66ce", null, !1, r["a"], i);
            t["default"] = u.exports
        },
        "75c8": function (e, t, n) {
            "use strict";
            var r;
            n.d(t, "b", (function () {
                return a
            })), n.d(t, "c", (function () {
                return s
            })), n.d(t, "a", (function () {
                return r
            }));
            var a = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-uni-view", {
                    staticClass: "mask",
                    class: {
                        show: e.visible
                    }
                }, [n("v-uni-view", {
                    staticClass: "content"
                }, [n("v-uni-view", {
                    staticClass: "title",
                    domProps: {
                        innerHTML: e._s(e.parseHtml(e.title))
                    }
                }), n("v-uni-view", {
                    staticClass: "text",
                    domProps: {
                        innerHTML: e._s(e.parseHtml(e.text))
                    }
                }), e._l(e.list, (function (t, r) {
                    return n("v-uni-view", {
                        key: r,
                        staticClass: "list"
                    }, [n("v-uni-view", {
                        staticClass: "title",
                        on: {
                            click: function (t) {
                                arguments[0] = t = e.$handleEvent(t), e.itemIndex = r
                            }
                        }
                    }, [n("v-uni-view", {
                        domProps: {
                            innerHTML: e._s(e.parseHtml(t.title))
                        }
                    }), n("uni-number-box", {
                        attrs: {
                            min: t.value,
                            value: t.value,
                            max: t.value + e.value[r] + e.numberSync
                        },
                        on: {
                            change: function (t) {
                                arguments[0] = t = e.$handleEvent(t), e.change(r, t)
                            }
                        }
                    })], 1)], 1)
                })), e.list.length ? n("v-uni-view", {
                    staticClass: "list-text",
                    domProps: {
                        innerHTML: e._s(e.parseHtml(e.list[e.itemIndex].text))
                    }
                }) : e._e(), n("v-uni-view", {
                    staticClass: "number"
                }, [e._v("剩余点数：" + e._s(e.numberSync))]), n("v-uni-button", {
                    attrs: {
                        type: "default"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.send.apply(void 0, arguments)
                        }
                    }
                }, [e._v("确定")]), n("v-uni-button", {
                    attrs: {
                        type: "default"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.cancel.apply(void 0, arguments)
                        }
                    }
                }, [e._v("返回")])], 2)], 1)
            },
                s = []
        },
        "791f": function (e, t, n) {
            t = e.exports = n("2350")(!1), t.push([e.i, '.mask[data-v-0801f73e]{position:fixed;top:0;left:0;right:0;bottom:0;display:none;background-color:rgba(0,0,0,.4);z-index:999}.mask.show[data-v-0801f73e]{display:block}.content[data-v-0801f73e]{position:absolute;left:0;right:0;bottom:0;height:85%;background-color:#fff;overflow:auto;padding:80px 10px 0 10px;box-sizing:border-box}.header[data-v-0801f73e]{position:absolute;top:0;height:40px;left:0;right:0;line-height:40px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;border-bottom:1px solid #ccc}.header>uni-view[data-v-0801f73e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;overflow:hidden;word-break:keep-all}.header>uni-view.active[data-v-0801f73e]{color:#007aff}.search[data-v-0801f73e]{position:absolute;left:0;right:0;top:40px;height:40px;line-height:40px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;border-bottom:1px solid #007aff;padding-left:10px}.search>uni-input[data-v-0801f73e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:40px;height:40px}.search>.button[data-v-0801f73e]{width:3em;padding:0;line-height:40px;text-align:center;overflow:hidden;word-break:keep-all}.list[data-v-0801f73e]{height:100%;overflow:auto;counter-reset:section}.item[data-v-0801f73e]{line-height:40px;font-size:20;text-align:center;display:none;border-bottom:1px solid #ccc;position:relative}.common[data-v-0801f73e]{position:absolute;right:0;top:0;width:40px;height:40px;line-height:40px;text-align:center;background-color:hsla(0,0%,100%,.5);border-radius:50%}.item.show[data-v-0801f73e]{display:block}.item.show[data-v-0801f73e]:before{position:absolute;left:10px;top:0;line-height:40px;counter-increment:section;content:counters(section,".") ". "}\n\n/* .item:not(:last-child) {\n  border-bottom: 1px solid #ccc;\n} */', ""])
        },
        "7bb6": function (e, t, n) {
            var r = n("9cac");
            "string" === typeof r && (r = [
                [e.i, r, ""]
            ]), r.locals && (e.exports = r.locals);
            var a = n("4f06").default;
            a("b58193dc", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        "7c8c": function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("6c84"),
                a = n("96e2");
            for (var s in a) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return a[e]
                }))
            }(s);
            n("2817");
            var i, c = n("f0c5"),
                u = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, "a30b097e", null, !1, r["a"], i);
            t["default"] = u.exports
        },
        "7e30": function (e, t, n) {
            t = e.exports = n("2350")(!1), t.push([e.i, '.mask[data-v-912910f0]{position:fixed;top:0;left:0;right:0;bottom:0;display:none;background-color:rgba(0,0,0,.4);z-index:999}.mask.show[data-v-912910f0]{display:block}.content[data-v-912910f0]{position:absolute;left:0;right:0;bottom:0;background-color:#fff;max-height:100%;overflow:auto}.label[data-v-912910f0]{min-width:7em}.line[data-v-912910f0]{display:-webkit-box;display:-webkit-flex;display:flex;line-height:44px;border-bottom:1px solid #ccc}.line>.value[data-v-912910f0]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.line>uni-input[data-v-912910f0]{line-height:44px;height:44px;-webkit-box-flex:1;-webkit-flex:1;flex:1}.line>uni-checkbox-group[data-v-912910f0]{margin:auto}\n\n/* .line > input.value::after,\n.line > picker.value::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 4px;\n  height: 1px;\n  background-color: #cccccc;\n} */.buttons[data-v-912910f0]{display:-webkit-box;display:-webkit-flex;display:flex;line-height:44px;margin-top:10px}uni-button[data-v-912910f0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:2.2}', ""])
        },
        "836f": function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("d379"),
                a = n.n(r);
            for (var s in r) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return r[e]
                }))
            }(s);
            t["default"] = a.a
        },
        "85e3": function (e, t, n) {
            "use strict";
            var r;
            n.d(t, "b", (function () {
                return a
            })), n.d(t, "c", (function () {
                return s
            })), n.d(t, "a", (function () {
                return r
            }));
            var a = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-uni-view", {
                    staticClass: "mask",
                    class: {
                        show: e.visible
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.cancel.apply(void 0, arguments)
                        }
                    }
                }, [n("v-uni-view", {
                    staticClass: "content",
                    on: {
                        click: function (t) {
                            t.stopPropagation(), arguments[0] = t = e.$handleEvent(t)
                        }
                    }
                }, [e._l(e.form, (function (t, r) {
                    return n("v-uni-label", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.hidden,
                            expression: "!item.hidden"
                        }],
                        key: r,
                        staticClass: "line"
                    }, [n("v-uni-view", {
                        staticClass: "label"
                    }, [e._v(e._s(t.title) + "：")]), "picker" === t.type ? n("v-uni-radio-group", {
                        on: {
                            change: function (n) {
                                arguments[0] = n = e.$handleEvent(n), e.radioChange(n, t)
                            }
                        }
                    }, e._l(t.range, (function (r, a) {
                        return n("v-uni-radio", {
                            key: a,
                            attrs: {
                                checked: a === t.value,
                                value: String(a)
                            }
                        }, [e._v(e._s("object" === typeof r ? r.title : r))])
                    })), 1) : e._e(), "input" === t.type ? n("v-uni-input", {
                        attrs: {
                            focus: t.focus,
                            maxlength: "-1",
                            placeholder: t.placeholder
                        },
                        on: {
                            confirm: function (t) {
                                arguments[0] = t = e.$handleEvent(t), e.submit.apply(void 0, arguments)
                            }
                        },
                        model: {
                            value: t.value,
                            callback: function (n) {
                                e.$set(t, "value", n)
                            },
                            expression: "item.value"
                        }
                    }) : e._e(), "checkbox" === t.type ? n("v-uni-checkbox-group", {
                        on: {
                            change: function (n) {
                                arguments[0] = n = e.$handleEvent(n), e.checkboxChange(n, t)
                            }
                        }
                    }, [n("v-uni-checkbox", {
                        attrs: {
                            checked: t.value
                        }
                    })], 1) : e._e()], 1)
                })), n("v-uni-view", {
                    staticClass: "buttons"
                }, [n("v-uni-button", {
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.cancel.apply(void 0, arguments)
                        }
                    }
                }, [e._v("取消")]), n("v-uni-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.submit.apply(void 0, arguments)
                        }
                    }
                }, [e._v("确定")])], 1)], 2)], 1)
            },
                s = []
        },
        8964: function (e, t, n) {
            t = e.exports = n("2350")(!1), t.push([e.i, ".mask[data-v-3a807853]{position:fixed;top:0;left:0;right:0;bottom:0;display:none}.mask.show[data-v-3a807853]{display:block}.content[data-v-3a807853]{position:absolute;background-color:rgba(0,0,0,.5);color:#fff;top:50%;top:calc(50% + 22px);width:120px;left:50%;max-height:calc(90% - 44px);overflow-y:auto;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:5px}.loading[data-v-3a807853]{display:block;margin:auto;width:40px;height:40px;-webkit-animation:loading-data-v-3a807853 2s linear infinite;animation:loading-data-v-3a807853 2s linear infinite}@-webkit-keyframes loading-data-v-3a807853{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.title[data-v-3a807853]{font-size:14px;line-height:1em;text-align:center;margin-top:5px}uni-button[data-v-3a807853]{display:block;margin:auto;color:#fff;background-color:rgba(0,0,0,.4);margin-top:3px}", ""])
        },
        "8a54": function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = {
                71: "<input(@)(x:~7 11)>【同屏聊天】所有本地图的玩家都能听见，你想说什么?",
                762: "<input(@)(x:~7 62)>队伍频道：你想说什么?",
                ls: "<input(@)(x:~7 61)>家族频道：你想说什么?",
                f1: "<input(@)(x:~7 14)>所有本服务器的玩家都能听见，你想说什么?",
                l1: "<input(@)(x:~7 18)>所有本线的玩家都能听见，你想说什么?",
                f7: "<input(@)(x:~7 17)>你想对队伍说什么?",
                ftk: "<input(@)(x:fmcmds tlk )>家族的人都能听见，你要广播什么?",
                "0gg": "<menu(t:l)(g:b)(tou:5)>任务系统 - 每日活动|[~hd_bz]{dd}每日{dd}口袋精灵日报|[~hd_lsj]{dd}定时{dd}里世界狂欢4 (晚上 9 点)a|[~hd_zzzs]{dd}每周{dd}珍珠钻石大礼包4 (每周一)a|[~hd_hl]{dd}月度{dd}红龙降世|[0g]{dd}上一页",
                "0g": "<menu(t:l)(g:b)(tou:5)>任务系统 - 每日活动|[~store]{dd}每日{dd}领取活动奖励|[~hd_lq]{dd}每日{dd}领取每日奖励|[~wenda]{dd}每日{dd}智力问答|[~hd_sx]{dd}每日{dd}生肖大冒险4 (需10级)a|[~hd_yg]{dd}每日{dd}阳光与友情4 (需10级)a|[~hd_gwy]{dd}每日{dd}3公务员的委托a4 (需20级)a|[~hd_sl]{dd}每日{dd}异界试炼4 (需20级)a|[~hd_yt]{dd}每日{dd}夜兔的挑战4 (需20级)a|[~hd_wq]{dd}每日{dd}精灵的温泉4 (需20级)a|[~hd_mj]{dd}每日{dd}永恒梦境4 (挂机用)a|[0gg]{dd}下一页 (还有 4 个)",
                "0q": "<menu(t:l)(g:b)(tou:5)>系统功能 - 退出游戏|[~quit log]{dd} 退至选单 {dd}|[~quit]{dd} 退出游戏 {dd}",
                "0fs": "<menu(t:l)(g:b)(tou:5)>幸运交友 - 交友搜索|[~w_online c]{x26} 在线玩家 {x26}|[~wms_choose c tj]{x26} 条件搜索 {x26}|[~wms_choose c xyid]{x26} 按幸运号搜索 {x26}|[~wms_choose c name]{x26} 按昵称搜索 {x26}|[~wquick_friend c]{m5} 交友速配 {m5}",
                vassal: "<menu(t:l)(g:b)(tou:5)>常用功能 - 佣兵指令|[~vs_cmd vs_view]{sg} 查看佣兵 {sg}|[~vs_cmd vs_call]{lg} 叫出佣兵 {lg}|[~vs_cmd vs_fire]{:`(} 解雇佣兵 {:`(}|[~vs_cmd vs_skill]{sg} 佣兵技能 {sg}|[~vs_cmd vs_equip]{sg} 佣兵装备 {sg}|[~vs_cmd vs_sum]{sg} 佣兵招募 {sg}|[~vs_cmd vs_task]{sg} 佣兵日常 {sg}|[~vs_cmd vs_mend]{sg} 佣兵修炼 {sg}|[~vs_cmd vs_pearl]{sg} 佣兵宝珠 {sg}"
            };
            t.default = r
        },
        "8ecc": function (e, t, n) {
            "use strict";
            var r = n("2528"),
                a = n.n(r);
            a.a
        },
        9037: function (e, t, n) {
            "use strict";
            var r;
            n.d(t, "b", (function () {
                return a
            })), n.d(t, "c", (function () {
                return s
            })), n.d(t, "a", (function () {
                return r
            }));
            var a = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-uni-view", {
                    staticClass: "content",
                    class: {
                        color: e.color
                    }
                }, [e.notLogin ? n("v-uni-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.create.apply(void 0, arguments)
                        }
                    }
                }, [e._v("登录")]) : e._e(), e.notLogin ? n("v-uni-button", {
                    staticStyle: {
                        "margin-top": "10px"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.toOld.apply(void 0, arguments)
                        }
                    }
                }, [e._v("回到旧版")]) : e._e(), e.notLogin ? e._e() : n("v-uni-view", {
                    staticClass: "status"
                }, [e.showUserInfo ? n("v-uni-view", [e._v("登录信息：" + e._s(e.user.username) + " 角色" + e._s(e.user.player + 1) + "\n      " + e._s(e.serverList[e.user.server] || "PK服") + " " + e._s(e.user.line + 1) + "线")]) : e._e(), n("v-uni-view", [e._v("网络信息：" + e._s(e.network || "未连接"))]), n("v-uni-view", {
                    staticClass: "task"
                }, [e._v("任务状态：" + e._s(e.taskInfo.main.title || e.taskInfo.other.title || "未执行")), e.taskInfo.main.id || e.taskInfo.other.id ? n("v-uni-button", {
                    attrs: {
                        type: "warn",
                        size: "mini"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.stopTask.apply(void 0, arguments)
                        }
                    }
                }, [e._v("停止")]) : e._e()], 1), n("v-uni-view", [e._v("当前位置：" + e._s(e.map.title || "未知"))])], 1), n("v-uni-view", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isLogin && !e.combat.ing,
                        expression: "isLogin && !combat.ing"
                    }],
                    staticClass: "move block"
                }, [n("v-uni-view", {
                    staticClass: "title"
                }, [e._v("区域操作")]), e._l(e.map.tns, (function (t, r) {
                    return n("v-uni-button", {
                        key: r,
                        attrs: {
                            size: "mini",
                            type: "default"
                        },
                        on: {
                            click: function (n) {
                                arguments[0] = n = e.$handleEvent(n), e.send(t.code)
                            }
                        }
                    }, [e._v(e._s(t.text))])
                })), n("v-uni-button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.map.monster,
                        expression: "map.monster"
                    }],
                    attrs: {
                        size: "mini",
                        type: "default"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.send("kill")
                        }
                    }
                }, [e._v("遇怪")]), n("v-uni-button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.map.npc.length,
                        expression: "map.npc.length"
                    }],
                    attrs: {
                        size: "mini",
                        type: "default"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.showNpc.apply(void 0, arguments)
                        }
                    }
                }, [e._v("NPC")]), n("v-uni-button", {
                    attrs: {
                        size: "mini",
                        type: "default"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.send("5")
                        }
                    }
                }, [e._v("附近")])], 2), n("v-uni-view", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isLogin && !e.combat.ing,
                        expression: "isLogin && !combat.ing"
                    }],
                    staticClass: "handle block"
                }, e._l(e.menus, (function (t, r) {
                    return n("v-uni-button", {
                        key: r,
                        attrs: {
                            size: "mini",
                            type: "default"
                        },
                        on: {
                            click: function (n) {
                                arguments[0] = n = e.$handleEvent(n), t.title && e.showMenus(t.code)
                            }
                        }
                    }, [e._v(e._s(t.title)), n("sub", [e._v(e._s(t.code))])])
                })), 1), e.combat.ing ? n("v-uni-view", {
                    staticClass: "combat block"
                }, [n("v-uni-view", {
                    staticClass: "title"
                }, [e._v("战斗操作")]), n("v-uni-view", {
                    staticClass: "title"
                }, [e._v(e._s(e.combat.step ? "第 " + e.combat.step + " 回合结束" : "战斗开始"))]), n("v-uni-view", {
                    staticClass: "person",
                    class: "side-" + e.combat.person0[0].actx.side
                }, [e.combat.person0.length > 5 ? n("v-uni-view", [n("v-uni-view", [e._v("己方")]), e._l(e.combat.person0.slice(5), (function (e, t) {
                    return n("person", {
                        key: t,
                        staticClass: "item",
                        attrs: {
                            item: e
                        }
                    })
                }))], 2) : e._e(), n("v-uni-view", [n("v-uni-view", [e._v("己方")]), e._l(e.combat.person0.slice(0, 5), (function (e, t) {
                    return n("person", {
                        key: t,
                        staticClass: "item",
                        attrs: {
                            item: e
                        }
                    })
                }))], 2), n("v-uni-view", [n("v-uni-view", [e._v("敌方")]), e._l(e.combat.person1.slice(0, 5), (function (e, t) {
                    return n("person", {
                        key: t,
                        staticClass: "item",
                        attrs: {
                            item: e
                        }
                    })
                }))], 2), e.combat.person1.length > 5 ? n("v-uni-view", [n("v-uni-view", [e._v("敌方")]), e._l(e.combat.person1.slice(5), (function (e, t) {
                    return n("person", {
                        key: t,
                        staticClass: "item",
                        attrs: {
                            item: e
                        }
                    })
                }))], 2) : e._e()], 1), e._l(e.combat.btns, (function (t, r) {
                    return n("v-uni-button", {
                        key: r,
                        attrs: {
                            size: "mini",
                            disabled: t.handle || e.combat.endfight || e.combat.auto,
                            type: "default"
                        },
                        on: {
                            click: function (n) {
                                arguments[0] = n = e.$handleEvent(n), e.selectCombat(t)
                            }
                        }
                    }, [e._v(e._s(e.combat.history ? e.getCombatHistory(t) || "普通攻击" : t.selected || t.title))])
                })), n("v-uni-button", {
                    attrs: {
                        size: "mini",
                        type: "primary"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.combat.history = !e.combat.history
                        }
                    }
                }, [e._v(e._s(e.combat.history ? "停用" : "使用") + "历史操作")]), n("v-uni-button", {
                    attrs: {
                        size: "mini",
                        type: "primary"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.combat.history = !1, e.send("f9")
                        }
                    }
                }, [e._v(e._s(e.combat.auto ? "关闭" : "开启") + "自动战斗")])], 2) : e._e(), e._l(e.logs, (function (t, r) {
                    return n("v-uni-view", {
                        key: r,
                        staticClass: "log",
                        domProps: {
                            innerHTML: e._s(e.parseHtml("string" === typeof t ? t : t.text))
                        },
                        on: {
                            click: function (n) {
                                arguments[0] = n = e.$handleEvent(n), e.logClick(t)
                            }
                        }
                    })
                })), !e.notLogin && e.isDev ? n("v-uni-view", {
                    staticClass: "footer"
                }, [n("v-uni-input", {
                    attrs: {
                        type: "text",
                        maxlength: "-1",
                        placeholder: "指令"
                    },
                    on: {
                        keydown: function (t) {
                            if (!t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter")) return null;
                            arguments[0] = t = e.$handleEvent(t), e.send(e.text), e.text = ""
                        }
                    },
                    model: {
                        value: e.text,
                        callback: function (t) {
                            e.text = t
                        },
                        expression: "text"
                    }
                }), n("v-uni-button", {
                    attrs: {
                        size: "mini",
                        type: "primary"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.send(e.text), e.text = ""
                        }
                    }
                }, [e._v("发送")])], 1) : e._e(), n("login-loading", {
                    ref: "loading"
                }), n("kd-menu", {
                    ref: "menu"
                }), n("kd-input", {
                    ref: "input"
                }), n("kd-sell", {
                    ref: "sell"
                }), n("kd-addp", {
                    ref: "addp"
                }), n("kd-mp", {
                    ref: "mp"
                }), n("kd-pmg", {
                    ref: "pmg"
                }), n("kd-wg", {
                    ref: "wg"
                }), n("task-list", {
                    ref: "taskList"
                }), n("task-form", {
                    ref: "taskForm"
                })], 2)
            },
                s = []
        },
        "91aa": function (e, t, n) {
            "use strict";
            var r = n("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n("a481"), n("4917"), n("28a5");
            var a = r(n("0dce")),
                s = {
                    mixins: [a.default],
                    data: function () {
                        return {
                            texts: [],
                            number: 1,
                            code: "",
                            input: "",
                            input2: "",
                            input3: "",
                            visible: !1
                        }
                    },
                    methods: {
                        show: function (e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                            this.visible = !0, this.number = r, this.texts = e.split(/[\u001e\u001f]/), this.code = n.x || "", this.$nextTick((function () {
                                t.$el.querySelector(".content").scrollTop = 0
                            }))
                        },
                        hide: function () {
                            this.visible = !1, this.number = 1, this.texts = [], this.code = "", this.input = "", this.input2 = "", this.input3 = ""
                        },
                        fast: function () {
                            this.input = (this.texts[0].match(/\d+/) || ["1"])[0]
                        },
                        send: function () {
                            var e = "^&" === this.code ? ["".concat(this.code).concat(this.input)] : [this.code.replace(/^~/, ""), this.input],
                                t = e.join(" ").trim();
                            this.number > 1 && (t += "".concat(this.input2)), this.number > 2 && (t += "".concat(this.input3)), this.hide(), uni.$emit("send", t || "cnt")
                        }
                    }
                };
            t.default = s
        },
        "922a": function (e, t, n) {
            "use strict";
            var r;
            n.d(t, "b", (function () {
                return a
            })), n.d(t, "c", (function () {
                return s
            })), n.d(t, "a", (function () {
                return r
            }));
            var a = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-uni-view", {
                    staticClass: "mask",
                    class: {
                        show: e.visible
                    }
                }, [n("v-uni-view", {
                    staticClass: "content"
                }, [n("v-uni-view", {
                    staticClass: "title",
                    domProps: {
                        innerHTML: e._s(e.parseHtml(e.title))
                    }
                }), n("v-uni-view", {
                    staticClass: "text",
                    domProps: {
                        innerHTML: e._s(e.parseHtml(e.text))
                    }
                }), e._l(e.list, (function (t, r) {
                    return n("v-uni-button", {
                        key: r,
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function (n) {
                                arguments[0] = n = e.$handleEvent(n), e.send(t.code)
                            }
                        }
                    }, [n("v-uni-text", {
                        domProps: {
                            innerHTML: e._s(e.parseHtml(t.title))
                        }
                    })], 1)
                })), e.list.length && !e.list[0].code && e.next.length ? n("v-uni-button", {
                    attrs: {
                        type: "default"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.send("?")
                        }
                    }
                }, [e._v("全部关闭")]) : e._e()], 2)], 1)
            },
                s = []
        },
        "96e2": function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("09c1"),
                a = n.n(r);
            for (var s in r) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return r[e]
                }))
            }(s);
            t["default"] = a.a
        },
        9759: function (e, t, n) {
            "use strict";
            var r;
            n.d(t, "b", (function () {
                return a
            })), n.d(t, "c", (function () {
                return s
            })), n.d(t, "a", (function () {
                return r
            }));
            var a = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-uni-view", {
                    staticClass: "mask",
                    class: {
                        show: e.visible
                    }
                }, [n("v-uni-view", {
                    staticClass: "content"
                }, [n("v-uni-view", {
                    staticClass: "title",
                    domProps: {
                        innerHTML: e._s(e.parseHtml(e.title))
                    }
                }), n("v-uni-view", {
                    staticClass: "grid",
                    style: {
                        width: e.size.width * e.grid + "px",
                        "margin-left": "-" + (e.size.x * e.grid + (e.size.width - e.size.x) * e.grid * .5) + "px",
                        "margin-top": "-" + e.size.y * e.grid + "px"
                    }
                }, [e._l(e.lines, (function (t, r) {
                    return n("v-uni-view", {
                        key: r + "l",
                        staticClass: "line",
                        class: {
                            "rotate-y": t.to.x < t.from.x,
                            "rotate-x": t.to.y < t.from.y
                        },
                        style: {
                            left: t.from.x * e.grid + .5 * e.grid + "px",
                            top: t.from.y * e.grid + .5 * e.grid + "px",
                            width: (Math.abs(t.to.x - t.from.x) * e.grid || 2) + "px",
                            height: (Math.abs(t.to.y - t.from.y) * e.grid || 2) + "px"
                        }
                    })
                })), e._l(e.size.height, (function (t, r) {
                    return n("v-uni-view", {
                        key: r + "y",
                        staticClass: "y"
                    }, e._l(e.size.width, (function (t, a) {
                        return n("v-uni-view", {
                            key: a,
                            staticClass: "x",
                            class: {
                                slected: e.slected.x === a && e.slected.y === r
                            },
                            attrs: {
                                "data-num": e.get(a, r) && e.get(a, r).num || ""
                            },
                            domProps: {
                                innerHTML: e._s(e.get(a, r) ? e.parseHtml("{" + e.get(a, r).img + "}") || "●" : "")
                            },
                            on: {
                                click: function (t) {
                                    arguments[0] = t = e.$handleEvent(t), e.slect(a, r)
                                }
                            }
                        })
                    })), 1)
                }))], 2), e.item ? n("v-uni-view", {
                    staticClass: "item"
                }, [n("v-uni-view", {
                    staticClass: "item-title",
                    domProps: {
                        innerHTML: e._s(e.parseHtml(e.item.title))
                    }
                }), n("v-uni-view", {
                    staticClass: "item-text",
                    domProps: {
                        innerHTML: e._s(e.parseHtml(e.item.text))
                    }
                })], 1) : e._e(), e._l(e.menu, (function (t, r) {
                    return ["世界" === t.title ? n("v-uni-button", {
                        key: r + "s",
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function (t) {
                                arguments[0] = t = e.$handleEvent(t), e.updateShortcutList(e.inList)
                            }
                        }
                    }, [e._v(e._s(e.inList ? "取消" : "加入") + "快捷")]) : e._e(), n("v-uni-button", {
                        key: r + "b",
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function (n) {
                                arguments[0] = n = e.$handleEvent(n), e.send(t.code)
                            }
                        }
                    }, [e._v(e._s(t.title))])]
                })), n("v-uni-button", {
                    attrs: {
                        type: "default"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.hide.apply(void 0, arguments)
                        }
                    }
                }, [e._v("退出")])], 2)], 1)
            },
                s = []
        },
        "97ce": function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.npcData = void 0;
            var r = {
                "魔界入口1层": {
                    "npc 1000": "魔化蜘蛛",
                    "npc 1001": "魔族冲锋队长",
                    "npc 1002": "精灵指挥官",
                    "npc 1003": "飞行怪人",
                    "npc 1004": "邪恶水元素"
                },
                "魔界入口2层": {
                    "npc 1000": "暗影魅魔",
                    "npc 1001": "骸骨魔龙"
                },
                "魔界入口3层": {
                    "npc 1000": "恶灵领主",
                    "npc 1001": "毒液之王"
                },
                "魔界入口4层": {
                    "npc 1000": "蛇发女妖",
                    "npc 1001": "罪恶魔眼"
                },
                "魔界入口5层": {
                    "npc 1000": "恶魔门卫",
                    "npc 1001": "吸血鬼王"
                },
                "魔界郊外1层": {
                    "npc 1000": "魅惑女妖",
                    "npc 1001": "炎魔队长"
                },
                "魔界郊外2层": {
                    "npc 1000": "死亡魔眼",
                    "npc 1001": "恐惧骨龙"
                },
                "罗克萨斯家": {
                    "npc 1000": "宝箱",
                    "npc 1001": "镇长.罗克萨斯",
                    "npc 1002": "神秘宠训师",
                    "npc 1003": {
                        old: "神兽大师",
                        new: "神兽大师",
                        tx: "troodo使者 "
                    },
                    "npc 1004": {
                        old: "troodo使者",
                        new: "troodo使者",
                        tx: "小企鹅"
                    },
                    "npc 1005": {
                        old: "跨服比武使者",
                        new: "坐骑驯养师",
                        tx: "宠物合成大师"
                    },
                    "npc 1006": {
                        old: "宠物合成大师",
                        new: "宠物转生大师",
                        tx: "宠物转生大师"
                    },
                    "npc 1007": {
                        old: "小雪球",
                        new: "宠物合成大师",
                        tx: "小雪球"
                    },
                    "npc 1008": {
                        old: "宠物转生大师",
                        new: "小雪球",
                        tx: "SS圣宠兑换使者"
                    },
                    "npc 1009": {
                        old: "SS圣宠兑换使者",
                        new: "宝箱送礼使者"
                    },
                    "npc 1010": "SS圣宠兑换使者"
                },
                "光芒市场": {
                    "npc 1000": "生产导师.璃梦",
                    "npc 1001": "杂货商人.罗格",
                    "npc 1002": "卖报女孩.笛子",
                    "npc 1003": "礼物.小雪人",
                    "npc 1004": "宝箱",
                    "npc 1005": "自动柜员机",
                    "npc 1006": {
                        old: "传送管理员",
                        new: "传送管理员",
                        tx: "勤劳的兔子先生"
                    },
                    "npc 1007": "勤劳的兔子先生"
                },
                "迷失之地": {
                    "npc 1000": "锻皇.柳柳",
                    "npc 1001": "师徒指引人",
                    "npc 1002": {
                        old: "防御战指挥官",
                        new: "雪之使者",
                        tx: "雪之使者"
                    },
                    "npc 1003": {
                        new: "防御战指挥官",
                        tx: "洗练宝石商人"
                    },
                    "npc 1004": "防御战指挥官"
                },
                "寂寥之地": {
                    "npc 1000": "梨落",
                    "npc 1001": "星澈",
                    "npc 1002": "舞镜",
                    "npc 1003": "粽子精灵",
                    "npc 1004": "精灵王界",
                    "npc 1005": "木子李",
                    "npc 1006": "金线豹"
                },
                "枯萎之地": {
                    "npc 1000": "巴菲特",
                    "npc 1001": "结婚登记人",
                    "npc 1002": "奥巴马【套装】",
                    "npc 1003": "告示牌",
                    "npc 1004": "先知.比亚克"
                },
                "荫凉之地": {
                    "npc 1000": "宠物卡商人",
                    "npc 1001": "卡妙",
                    "npc 1002": "艾欧里亚",
                    "npc 1003": "乌克巴",
                    "npc 1004": "精灵宝瓶",
                    "npc 1005": "精灵宝瓶",
                    "npc 1006": "世界冒险家"
                },
                "里闪光.无垢者之城": {
                    "npc 1000": "绝世工匠.璃梦",
                    "npc 1001": "暗狱魔痴.罗格",
                    "npc 1002": "精灵大帝.笛子"
                },
                "尚武擂台(95级)": {
                    "npc 1000": "邪恶意志",
                    "npc 1001": "邪恶灵魂"
                }
            };
            t.npcData = r
        },
        "98e6": function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n("28a5"), n("c5f6");
            var r = {
                name: "UniNumberBox",
                props: {
                    value: {
                        type: [Number, String],
                        default: 1
                    },
                    min: {
                        type: Number,
                        default: 0
                    },
                    max: {
                        type: Number,
                        default: 100
                    },
                    step: {
                        type: Number,
                        default: 1
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function () {
                    return {
                        inputValue: 0
                    }
                },
                watch: {
                    value: function (e) {
                        this.inputValue = +e
                    },
                    inputValue: function (e, t) {
                        +e !== +t && this.$emit("change", e)
                    }
                },
                created: function () {
                    this.inputValue = +this.value
                },
                methods: {
                    _calcValue: function (e) {
                        if (!this.disabled) {
                            var t = this._getDecimalScale(),
                                n = this.inputValue * t,
                                r = this.step * t;
                            if ("minus" === e) {
                                if (n -= r, n < this.min) return;
                                n > this.max && (n = this.max)
                            } else if ("plus" === e) {
                                if (n += r, n > this.max) return;
                                n < this.min && (n = this.min)
                            }
                            this.inputValue = String(n / t)
                        }
                    },
                    _getDecimalScale: function () {
                        var e = 1;
                        return ~~this.step !== this.step && (e = Math.pow(10, (this.step + "").split(".")[1].length)), e
                    },
                    _onBlur: function (e) {
                        var t = e.detail.value;
                        t && (t = +t, t > this.max ? t = this.max : t < this.min && (t = this.min), this.inputValue = t)
                    },
                    longpress: function (e) {
                        console.log(e)
                    }
                }
            };
            t.default = r
        },
        "99b0": function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("55bb"),
                a = {
                    data: function () {
                        return {
                            visible: !1,
                            tags: [{
                                title: "全部",
                                id: "all"
                            }, {
                                title: "常用",
                                id: "common"
                            }, {
                                title: "活动",
                                id: "event"
                            }, {
                                title: "兑换",
                                id: "change"
                            }, {
                                title: "物品",
                                id: "item"
                            }, {
                                title: "其他",
                                id: "other"
                            }],
                            tag: "common",
                            common: [],
                            tasks: {},
                            value: "",
                            text: ""
                        }
                    },
                    methods: {
                        show: function (e) {
                            var t = this;
                            return this.cancel(), this._tasks = e, this.tasks = JSON.parse(JSON.stringify(e)), this.common = r.globalSettings.get("commonTask"), this.visible = !0, new Promise((function (e, n) {
                                t.resolve = e, t.reject = n
                            }))
                        },
                        submit: function (e) {
                            if (this.resolve) {
                                var t = this._tasks[e];
                                this.resolve({
                                    key: e,
                                    task: t
                                })
                            }
                            this.reset()
                        },
                        cancel: function () {
                            this.reject && this.reject(), this.reset()
                        },
                        reset: function () {
                            this.visible = !1, delete this._tasks, this.tasks = {}, this.resolve = null, this.reject = null, this.value = "", this.text = "", this.common = []
                        },
                        clear: function () {
                            this.text = this.value = ""
                        },
                        search: function () {
                            this.text = this.value
                        },
                        setCommon: function (e, t) {
                            var n = this.common,
                                a = n.indexOf(e);
                            t ? (a < 0 && n.push(e), uni.showToast({
                                title: "已添加到常用"
                            })) : a >= 0 && n.splice(a, 1), r.globalSettings.set("common", n)
                        }
                    }
                };
            t.default = a
        },
        "9cac": function (e, t, n) {
            t = e.exports = n("2350")(!1), t.push([e.i, ".mask[data-v-212c66ce]{position:fixed;top:0;left:0;right:0;bottom:0;display:none;background-color:rgba(0,0,0,.4)}.mask.show[data-v-212c66ce]{display:block}.title[data-v-212c66ce]{text-align:center\n  /* font-size: 1.2em; */}.content[data-v-212c66ce]{position:absolute;box-sizing:border-box;background-color:#fff;\n    /* background-color: rgba(0, 0, 0, 0.8); */\n    /* color: white; */top:50%;top:calc(50% + 22px);left:20px;right:20px;max-height:90%;max-height:calc(90% - 44px);overflow-y:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%);border:1px solid #ccc;border-radius:5px}uni-button[data-v-212c66ce]{\n    /* color: white; */\n    /* background-color: rgba(0, 0, 0, 0.4); */margin-top:3px;line-height:2.2}uni-button[data-v-212c66ce]:after{\n    /* border: 1px solid rgb(255, 255, 255); */}.text[data-v-212c66ce]{white-space:pre-wrap}", ""])
        },
        "9e53": function (e, t, n) {
            var r = n("791f");
            "string" === typeof r && (r = [
                [e.i, r, ""]
            ]), r.locals && (e.exports = r.locals);
            var a = n("4f06").default;
            a("0484c81e", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        a09a: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("fb05"),
                a = n.n(r);
            for (var s in r) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return r[e]
                }))
            }(s);
            t["default"] = a.a
        },
        a0b3: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("5172"),
                a = n.n(r);
            for (var s in r) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return r[e]
                }))
            }(s);
            t["default"] = a.a
        },
        a4c3: function (e, t, n) {
            var r = n("b92c");
            "string" === typeof r && (r = [
                [e.i, r, ""]
            ]), r.locals && (e.exports = r.locals);
            var a = n("4f06").default;
            a("f0dd9872", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        a78d: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("e4d1"),
                a = n.n(r);
            for (var s in r) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return r[e]
                }))
            }(s);
            t["default"] = a.a
        },
        a8e5: function (e, t, n) {
            "use strict";
            var r = n("9e53"),
                a = n.n(r);
            a.a
        },
        ad12: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("75c8"),
                a = n("c65b");
            for (var s in a) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return a[e]
                }))
            }(s);
            n("6055");
            var i, c = n("f0c5"),
                u = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, "a173a62a", null, !1, r["a"], i);
            t["default"] = u.exports
        },
        ad2c: function (e, t, n) {
            "use strict";
            var r = n("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.tasks = t.Task = void 0, n("8615"), n("96cf");
            var a = r(n("3b8d")),
                s = r(n("7618")),
                i = r(n("d225")),
                c = r(n("b0b4")),
                u = r(n("bd86")),
                o = r(n("75fc"));
            n("28a5"), n("456d"), n("ac6a");
            var l = r(n("768b"));
            n("f559");
            var f = n("55bb"),
                d = r(n("36b3")),
                p = n("80d4"),
                h = {};

            function x(e) {
                function t(t) {
                    return function () {
                        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        e.postMessage({
                            name: "callback",
                            data: {
                                callback: t,
                                args: r
                            }
                        })
                    }
                }

                function n(e) {
                    var n = {};
                    for (var r in e) {
                        var a = e[r];
                        n[r] = "string" === typeof a && a.startsWith("$callback") ? t(a) : a
                    }
                    return n
                }

                function r(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = e.data,
                        s = a.name,
                        i = a.args,
                        c = a.callback;
                    if (s in r) r[s](i);
                    else switch (s) {
                        case "getMainData":
                            var u = t(c),
                                d = (0, f.getMainData)(),
                                h = d.serverType,
                                x = d.map,
                                v = d.user,
                                m = d.cache,
                                k = d.$refs,
                                b = d.wgpic;
                            u({
                                serverType: h,
                                map: x,
                                user: v,
                                cache: {
                                    pet: m.pet
                                },
                                wgVisible: k.wg.visible,
                                wgpic: b
                            });
                            break;
                        case "setMainData":
                            var g = t(c),
                                w = (0, l.default)(i, 1),
                                y = w[0];
                            Object.keys(y).forEach((function (e) {
                                return Object.assign((0, f.getMainData)()[e], y[e])
                            })), g();
                            break;
                        case "userSettings.get":
                        case "userSettings.set":
                            var _ = t(c),
                                R = s.split(".")[1],
                                S = f.userSettings[R].apply(f.userSettings, (0, o.default)(i));
                            _(S);
                            break;
                        case "globalSettings":
                            var E = t(c),
                                M = f.globalSettings.data;
                            E(M);
                            break;
                        case "globalSettings.get":
                        case "globalSettings.set":
                            var O = t(c),
                                j = s.split(".")[1],
                                P = f.globalSettings[j].apply(f.globalSettings, (0, o.default)(i));
                            O(P);
                            break;
                        case "getUserInfo":
                            var T = t(c),
                                C = (0, f.getUserInfo)();
                            T(C);
                            break;
                        case "uni.showToast":
                        case "uni.showModal":
                        case "uni.showActionSheet":
                        case "uni.request":
                            var A = (0, l.default)(i, 1),
                                I = A[0],
                                N = s.split(".")[1];
                            uni[N](n(I));
                            break;
                        case "x0popup":
                            var z = t(c);
                            p.apply(void 0, (0, o.default)(i)).then((function (e) {
                                z(JSON.stringify(e))
                            }));
                            break;
                        default:
                            break
                    }
                }
                return {
                    decodeCallback: t,
                    decodeOptions: n,
                    decodeMessage: r
                }
            }

            function v(e, t) {
                return new Promise((function (n, r) {
                    var a = new d.default;

                    function s() {
                        a.terminate(), a.onmessage = null, a.onerror = null
                    }
                    var i = x(a),
                        c = i.decodeMessage;
                    a.onmessage = function (e) {
                        c(e, {
                            callback: function (e) {
                                s(), n.apply(void 0, (0, o.default)(e))
                            }
                        })
                    }, a.onerror = function (e) {
                        s(), r(e)
                    }, a.postMessage({
                        name: e,
                        data: t
                    })
                }))
            }
            t.tasks = h;
            var m = function () {
                function e(t, n) {
                    var r = this;
                    (0, i.default)(this, e), (0, u.default)(this, "ons", {}), "object" === (0, s.default)(t) && (Object.assign(this, t), t.before && (this.before = (0, a.default)(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, v("before", {
                                        key: n
                                    });
                                case 2:
                                    t = e.sent, Object.assign(this, t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))))), this.resume = function () {
                        var e = this,
                            t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        if (!this.worker) {
                            var r = this.worker = new d.default,
                                a = x(r),
                                s = a.decodeMessage,
                                i = a.decodeCallback;
                            r.onmessage = function (t) {
                                s(t, {
                                    stop: function (t) {
                                        return e.stop.apply(e, (0, o.default)(t.map((function (e) {
                                            return new Error(e)
                                        }))))
                                    },
                                    update: function (t) {
                                        return Object.assign(e, t[0])
                                    },
                                    "uni.$emit": function (e) {
                                        var t;
                                        (t = uni).$emit.apply(t, (0, o.default)(e))
                                    },
                                    "uni.$once": function (t) {
                                        var n = (0, l.default)(t, 2),
                                            r = n[0],
                                            a = n[1],
                                            s = i(a),
                                            c = "".concat(r, ".").concat(a);
                                        e.ons[c] = [r, s], uni.$once(r, (function () {
                                            delete e.ons[c], s.apply(void 0, arguments)
                                        }))
                                    },
                                    "uni.$on": function (t) {
                                        var n = (0, l.default)(t, 2),
                                            r = n[0],
                                            a = n[1],
                                            s = i(a),
                                            c = "".concat(r, ".").concat(a);
                                        e.ons[c] = [r, s], uni.$on(r, s)
                                    },
                                    "uni.$off": function (t) {
                                        var n = (0, l.default)(t, 2),
                                            r = n[0],
                                            a = n[1],
                                            s = "".concat(r, ".").concat(a),
                                            i = e.ons[s] || [],
                                            c = (0, l.default)(i, 2),
                                            u = (c[0], c[1]);
                                        u && (delete e.ons[s], uni.$off(r, u))
                                    }
                                })
                            }, r.onerror = function (t) {
                                console.error(t), e.stop(t)
                            };
                            for (var c = arguments.length, u = new Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++) u[f - 1] = arguments[f];
                            r.postMessage({
                                name: "startTask",
                                data: {
                                    key: n,
                                    form: this.form,
                                    options: this.options,
                                    args: [!1, t].concat(u)
                                }
                            })
                        }
                    }, this.pause = function () {
                        r.stop(null, !0)
                    }
                }
                return (0, c.default)(e, [{
                    key: "start",
                    value: function () {
                        for (var e = this, t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                        return new Promise((function (n, a) {
                            e.resolve = n, e.reject = a;
                            var s = (0, f.getMainData)();
                            s.isLogin ? s.combat.ing ? e.stop(new Error("战斗中")) : (s.hidePopup(), t ? (e.logouted = function () {
                                e.pause()
                            }, uni.$on("logouted", e.logouted), e.taskready = function () {
                                e.resume.apply(e, r)
                            }, uni.$on("taskready", e.taskready)) : (e.logouted = function () {
                                e.stop()
                            }, uni.$on("logouted", e.logouted)), e.resume.apply(e, r)) : e.stop(new Error("未登陆"))
                        }))
                    }
                }, {
                    key: "stop",
                    value: function (e, t) {
                        var n = this.worker;
                        if (n && (n.terminate(), n.onmessage = null, n.onerror = null, this.worker = null, Object.values(this.ons).forEach((function (e) {
                            var t = (0, l.default)(e, 2),
                                n = t[0],
                                r = t[1];
                            return uni.$off(n, r)
                        })), this.ons = {}), !t) {
                            this.logouted && (uni.$off("logouted", this.logouted), delete this.logouted), this.taskready && (uni.$off("taskready", this.taskready), delete this.taskready);
                            var r = this.callback;
                            this.callback = null, r && r();
                            var a = this.resolve;
                            this.resolve = null, a && !e && a();
                            var s = this.reject;
                            this.reject = null, s && e && s(e)
                        }
                    }
                }, {
                    key: "onEnd",
                    value: function (e) {
                        this.callback = e
                    }
                }]), e
            }();

            function k(e) {
                for (var t in e)
                    if (Object.hasOwnProperty.call(e, t)) {
                        var n = e[t];
                        h[t] = new m(n, t)
                    }
            }
            t.Task = m, v("getList", null).then((function (e) {
                k(e)
            })).catch((function (e) {
                console.error(e)
            }))
        },
        adbc: function (e, t, n) {
            t = e.exports = n("2350")(!1), t.push([e.i, '.person[data-v-3efa0cf6]{position:relative;font-size:12px;margin:4px;border:1px solid #ccc;border-radius:5px\n  /* margin: 4px auto;\n  max-width: 80px; */}.title[data-v-3efa0cf6]{position:relative;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:2.4em}.title.died[data-v-3efa0cf6]:after{position:absolute;content:"";width:18px;height:18px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-image:url(kdjl/ico.png);background-size:auto 500%;vertical-align:middle;background-position-x:-90px;background-position-y:-54px}.types[data-v-3efa0cf6]{display:-webkit-box;display:-webkit-flex;display:flex;height:16px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.types>uni-view[data-v-3efa0cf6]{height:16px;width:16px;background-size:auto 100%}.hp[data-v-3efa0cf6],.mp[data-v-3efa0cf6]{font-size:10px}.msg[data-v-3efa0cf6]{position:absolute;width:100%;height:1em;bottom:0;opacity:0;-webkit-animation:push-data-v-3efa0cf6 1.5s linear forwards;animation:push-data-v-3efa0cf6 1.5s linear forwards}@-webkit-keyframes push-data-v-3efa0cf6{0%{bottom:0;opacity:0}50%{bottom:50%;opacity:1}to{bottom:100%;opacity:0}}@keyframes push-data-v-3efa0cf6{0%{bottom:0;opacity:0}50%{bottom:50%;opacity:1}to{bottom:100%;opacity:0}}', ""])
        },
        ae2b: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("be12"),
                a = n("381f");
            for (var s in a) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return a[e]
                }))
            }(s);
            n("43a1");
            var i, c = n("f0c5"),
                u = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, "f89d6fe8", null, !1, r["a"], i);
            t["default"] = u.exports
        },
        ae83: function (e, t, n) {
            t = e.exports = n("2350")(!1), t.push([e.i, ".mask[data-v-a173a62a]{position:fixed;top:0;left:0;right:0;bottom:0;display:none;background-color:rgba(0,0,0,.4)}.mask.show[data-v-a173a62a]{display:block}.title[data-v-a173a62a]{text-align:center\n  /* font-size: 1.2em; */}.content[data-v-a173a62a]{position:absolute;box-sizing:border-box;background-color:#fff;\n    /* background-color: rgba(0, 0, 0, 0.8); */\n    /* color: white; */top:50%;top:calc(50% + 22px);left:20px;right:20px;max-height:90%;max-height:calc(90% - 44px);overflow-y:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%);border:1px solid #ccc;border-radius:5px}uni-button[data-v-a173a62a]{\n    /* color: white; */\n    /* background-color: rgba(0, 0, 0, 0.4); */margin-top:3px;line-height:2.2}uni-button[data-v-a173a62a]:after{\n    /* border: 1px solid rgb(255, 255, 255); */}.list>.title[data-v-a173a62a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list-text[data-v-a173a62a]{margin:6px 0}.number[data-v-a173a62a]{text-align:center}", ""])
        },
        aeca: function (e, t, n) {
            "use strict";
            var r;
            n.d(t, "b", (function () {
                return a
            })), n.d(t, "c", (function () {
                return s
            })), n.d(t, "a", (function () {
                return r
            }));
            var a = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-uni-view", {
                    staticClass: "mask",
                    class: {
                        show: e.visible
                    }
                }, [n("v-uni-view", {
                    staticClass: "content"
                }, [n("v-uni-view", {
                    staticClass: "title",
                    domProps: {
                        innerHTML: e._s(e.parseHtml(e.title))
                    }
                }), n("v-uni-view", {
                    staticClass: "text",
                    domProps: {
                        innerHTML: e._s(e.parseHtml(e.text))
                    }
                }), e._l(e.list, (function (t, r) {
                    return n("kd-menu-item", {
                        key: r,
                        attrs: {
                            index: r,
                            item: t
                        },
                        on: {
                            send: function (t) {
                                arguments[0] = t = e.$handleEvent(t), e.send.apply(void 0, arguments)
                            }
                        }
                    })
                })), n("v-uni-button", {
                    attrs: {
                        type: "default"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.cancel.apply(void 0, arguments)
                        }
                    }
                }, [e._v("返回")])], 2)], 1)
            },
                s = []
        },
        aef6: function (e, t, n) {
            "use strict";
            var r = n("5ca1"),
                a = n("9def"),
                s = n("d2c8"),
                i = "endsWith",
                c = ""[i];
            r(r.P + r.F * n("5147")(i), "String", {
                endsWith: function (e) {
                    var t = s(this, e, i),
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        r = a(t.length),
                        u = void 0 === n ? r : Math.min(a(n), r),
                        o = String(e);
                    return c ? c.call(t, o, u) : t.slice(u - o.length, u) === o
                }
            })
        },
        af96: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("85e3"),
                a = n("cdc7");
            for (var s in a) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return a[e]
                }))
            }(s);
            n("8ecc");
            var i, c = n("f0c5"),
                u = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, "912910f0", null, !1, r["a"], i);
            t["default"] = u.exports
        },
        b0b4: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function () {
                return i
            }));
            var r = n("85f2"),
                a = n.n(r);

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), a()(e, r.key, r)
                }
            }

            function i(e, t, n) {
                return t && s(e.prototype, t), n && s(e, n), a()(e, "prototype", {
                    writable: !1
                }), e
            }
        },
        b431: function (e, t, n) {
            var r = n("8964");
            "string" === typeof r && (r = [
                [e.i, r, ""]
            ]), r.locals && (e.exports = r.locals);
            var a = n("4f06").default;
            a("e82477ee", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        b65f: function (e, t, n) {
            var r = n("adbc");
            "string" === typeof r && (r = [
                [e.i, r, ""]
            ]), r.locals && (e.exports = r.locals);
            var a = n("4f06").default;
            a("4048b954", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        b8ca: function (e, t, n) {
            "use strict";
            var r;
            n.d(t, "b", (function () {
                return a
            })), n.d(t, "c", (function () {
                return s
            })), n.d(t, "a", (function () {
                return r
            }));
            var a = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-uni-view", {
                    staticClass: "mask",
                    class: {
                        show: e.visible
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.cancel.apply(void 0, arguments)
                        }
                    }
                }, [n("v-uni-view", {
                    staticClass: "content",
                    on: {
                        click: function (t) {
                            t.stopPropagation(), arguments[0] = t = e.$handleEvent(t)
                        }
                    }
                }, [n("v-uni-view", {
                    staticClass: "header"
                }, e._l(e.tags, (function (t, r) {
                    return n("v-uni-view", {
                        key: r,
                        class: {
                            active: t.id === e.tag
                        },
                        on: {
                            click: function (n) {
                                arguments[0] = n = e.$handleEvent(n), e.tag = t.id
                            }
                        }
                    }, [e._v(e._s(t.title))])
                })), 1), n("v-uni-view", {
                    staticClass: "search"
                }, [n("v-uni-input", {
                    attrs: {
                        maxlength: "-1",
                        placeholder: "输入关键词"
                    },
                    model: {
                        value: e.value,
                        callback: function (t) {
                            e.value = t
                        },
                        expression: "value"
                    }
                }), n("v-uni-view", {
                    staticClass: "button",
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.clear.apply(void 0, arguments)
                        }
                    }
                }, [e._v("清空")]), n("v-uni-view", {
                    staticClass: "button",
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.search.apply(void 0, arguments)
                        }
                    }
                }, [e._v("查找")])], 1), n("v-uni-view", {
                    staticClass: "list"
                }, e._l(e.tasks, (function (t, r) {
                    return n("v-uni-view", {
                        key: r,
                        staticClass: "item",
                        class: {
                            show: ("all" === e.tag || "common" === e.tag && e.common.includes(r) || t.tags.includes(e.tag)) && (!e.text || t.title.includes(e.text))
                        },
                        on: {
                            click: function (t) {
                                arguments[0] = t = e.$handleEvent(t), e.submit(r)
                            }
                        }
                    }, [e._v(e._s(t.title)), "common" !== e.tag ? n("v-uni-view", {
                        staticClass: "common",
                        on: {
                            click: function (t) {
                                t.stopPropagation(), arguments[0] = t = e.$handleEvent(t), e.setCommon(r, !0)
                            }
                        }
                    }, [e._v("+")]) : e._e(), "common" === e.tag ? n("v-uni-view", {
                        staticClass: "common",
                        on: {
                            click: function (t) {
                                t.stopPropagation(), arguments[0] = t = e.$handleEvent(t), e.setCommon(r, !1)
                            }
                        }
                    }, [e._v("-")]) : e._e()], 1)
                })), 1)], 1)], 1)
            },
                s = []
        },
        b92c: function (e, t, n) {
            t = e.exports = n("2350")(!1), t.push([e.i, ".mask[data-v-71cc677a]{position:fixed;top:0;left:0;right:0;bottom:0;display:none;background-color:rgba(0,0,0,.4)}.mask.show[data-v-71cc677a]{display:block}.title[data-v-71cc677a]{text-align:center\n  /* font-size: 1.2em; */}.content[data-v-71cc677a]{position:absolute;box-sizing:border-box;background-color:#fff;\n    /* background-color: rgba(0, 0, 0, 0.8); */\n    /* color: white; */top:50%;top:calc(50% + 22px);left:20px;right:20px;max-height:90%;max-height:calc(90% - 44px);overflow-y:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%);border:1px solid #ccc;border-radius:5px}uni-button[data-v-71cc677a]{\n    /* color: white; */\n    /* background-color: rgba(0, 0, 0, 0.4); */margin-top:3px;line-height:2.2}uni-button[data-v-71cc677a]:after{\n    /* border: 1px solid rgb(255, 255, 255); */}.content[data-v-71cc677a]{overflow-x:hidden;overflow-y:auto}.grid[data-v-71cc677a]{position:relative;left:50%}.y[data-v-71cc677a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.x[data-v-71cc677a]{position:relative;width:36px;height:36px;line-height:36px;text-align:center}.x[data-v-71cc677a]:after{position:absolute;content:attr(data-num);width:20px;height:20px;right:0;bottom:0;line-height:20px;font-size:12px;text-align:center;text-shadow:#fff 1px 1px 2px,#fff 1px 1px 2px,#fff -1px 1px 2px,#fff 1px -1px 2px}.x.slected[data-v-71cc677a]{outline:1px solid}.item[data-v-71cc677a]{font-size:14px;line-height:1.4em;margin-top:8px}.item-title[data-v-71cc677a]{text-align:center}.item-text[data-v-71cc677a]{min-height:2.8em}.line[data-v-71cc677a]{position:absolute;-webkit-transform-origin:0 0;transform-origin:0 0;background:-webkit-linear-gradient(bottom left,transparent 0,transparent calc(50% - 1px),#000 50%,transparent calc(50% + 1px),transparent);background:linear-gradient(to top right,transparent 0,transparent calc(50% - 1px),#000 50%,transparent calc(50% + 1px),transparent)}.line.rotate-x[data-v-71cc677a]{-webkit-transform:rotateX(180deg);transform:rotateX(180deg)}.line.rotate-y[data-v-71cc677a]{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}", ""])
        },
        be12: function (e, t, n) {
            "use strict";
            var r;
            n.d(t, "b", (function () {
                return a
            })), n.d(t, "c", (function () {
                return s
            })), n.d(t, "a", (function () {
                return r
            }));
            var a = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-uni-view", {
                    staticClass: "uni-numbox"
                }, [n("v-uni-view", {
                    staticClass: "uni-numbox__minus",
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e._calcValue("minus")
                        },
                        longpress: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.longpress("minus")
                        }
                    }
                }, [n("v-uni-text", {
                    staticClass: "uni-numbox--text",
                    class: {
                        "uni-numbox--disabled": e.inputValue <= e.min || e.disabled
                    }
                }, [e._v("-")])], 1), n("v-uni-input", {
                    staticClass: "uni-numbox__value",
                    attrs: {
                        disabled: e.disabled,
                        type: "number",
                        maxlength: "-1"
                    },
                    on: {
                        blur: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e._onBlur.apply(void 0, arguments)
                        }
                    },
                    model: {
                        value: e.inputValue,
                        callback: function (t) {
                            e.inputValue = t
                        },
                        expression: "inputValue"
                    }
                }), n("v-uni-view", {
                    staticClass: "uni-numbox__plus",
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e._calcValue("plus")
                        },
                        longpress: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.longpress("plus")
                        }
                    }
                }, [n("v-uni-text", {
                    staticClass: "uni-numbox--text",
                    class: {
                        "uni-numbox--disabled": e.inputValue >= e.max || e.disabled
                    }
                }, [e._v("+")])], 1)], 1)
            },
                s = []
        },
        bf4d: function (e, t, n) {
            "use strict";
            var r = n("b65f"),
                a = n.n(r);
            a.a
        },
        c1eb: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("2920"),
                a = n.n(r);
            for (var s in r) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return r[e]
                }))
            }(s);
            t["default"] = a.a
        },
        c301: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fixCombatMsg = o, n("7514"), n("20d6"), n("f559"), n("ac6a"), n("28a5"), n("c5f6");
            var r, a, s = [],
                i = [],
                c = [];

            function u(e) {
                return Number(e.split(" ")[1].split(",")[0])
            }

            function o(e, t, n) {
                e.forEach((function (e) {
                    if ("string" === typeof e)
                        if (e.startsWith("<r>combat") || e.startsWith("<r>person")) r = !0, s.push(e);
                        else if (e.startsWith("<r>auto") || e.startsWith("<r>step")) s.push(e);
                        else if (e.startsWith("<r>act") || e.startsWith("<r>quake")) {
                            var t = u(e),
                                n = i.findIndex((function (e) {
                                    return u(e) > t
                                }));
                            n < 0 ? i.push(e) : i.splice(n, 0, e)
                        } else c.push(e)
                }));
                var o = i.find((function (e, t) {
                    return u(e) - (0 === t ? 0 : u(i[t - 1])) > 50
                }));
                a && clearTimeout(a), a = setTimeout((function () {
                    a = void 0;
                    var e = s.concat(i, c);
                    s.length = i.length = c.length = 0, console.log("fixCombatMsg:", e), r ? t(e) : n(e), r = !1
                }), o ? 3e3 : 200)
            }
        },
        c513: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("283c"),
                a = n("c1eb");
            for (var s in a) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return a[e]
                }))
            }(s);
            n("0ae8");
            var i, c = n("f0c5"),
                u = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, "e9fe6d14", null, !1, r["a"], i);
            t["default"] = u.exports
        },
        c65b: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("f45c"),
                a = n.n(r);
            for (var s in r) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return r[e]
                }))
            }(s);
            t["default"] = a.a
        },
        c9b3: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("ff38"),
                a = n("3980");
            for (var s in a) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return a[e]
                }))
            }(s);
            n("68a7");
            var i, c = n("f0c5"),
                u = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, "6b17e30a", null, !1, r["a"], i);
            t["default"] = u.exports
        },
        ca42: function (e, t, n) {
            var r = n("f831");
            "string" === typeof r && (r = [
                [e.i, r, ""]
            ]), r.locals && (e.exports = r.locals);
            var a = n("4f06").default;
            a("5e8d93c4", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        cb73: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("d586"),
                a = n("179e");
            for (var s in a) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return a[e]
                }))
            }(s);
            n("bf4d");
            var i, c = n("f0c5"),
                u = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, "3efa0cf6", null, !1, r["a"], i);
            t["default"] = u.exports
        },
        cdc7: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("32e1"),
                a = n.n(r);
            for (var s in r) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return r[e]
                }))
            }(s);
            t["default"] = a.a
        },
        d225: function (e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.r(t), n.d(t, "default", (function () {
                return r
            }))
        },
        d379: function (e, t, n) {
            "use strict";
            var r = n("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("c513")),
                s = r(n("0dce")),
                i = {
                    components: {
                        kdMenuItem: a.default
                    },
                    mixins: [s.default],
                    data: function () {
                        return {
                            title: "",
                            text: "",
                            list: [],
                            visible: !1
                        }
                    },
                    methods: {
                        show: function (e) {
                            var t = this,
                                n = e.data,
                                r = e.props,
                                a = void 0 === r ? {} : r;
                            console.log("data:", n), console.log("props:", a);
                            var s = n.title,
                                i = n.text,
                                c = n.list;
                            this.visible = !0, this.title = s, this.text = i, this.list = c, this.props = a, this.$nextTick((function () {
                                t.$el.querySelector(".content").scrollTop = 0
                            }))
                        },
                        cancel: function () {
                            this.send("?")
                        },
                        hide: function () {
                            this.visible = !1, this.title = "", this.text = "", this.list = [], this.props = {}
                        },
                        send: function (e) {
                            var t = this.props,
                                n = t.t;
                            /^~?\?view$/.test(e) || /^~?[a-z0-9]+ a$/.test(e) && "a" !== t.g || this.hide(), uni.$emit("send", {
                                msg: e,
                                t: n
                            })
                        }
                    }
                };
            t.default = i
        },
        d586: function (e, t, n) {
            "use strict";
            var r;
            n.d(t, "b", (function () {
                return a
            })), n.d(t, "c", (function () {
                return s
            })), n.d(t, "a", (function () {
                return r
            }));
            var a = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-uni-view", {
                    staticClass: "person"
                }, [n("v-uni-view", {
                    staticClass: "title",
                    class: {
                        died: e.color && !e.item.hp
                    },
                    domProps: {
                        innerHTML: e._s(e.parseTitle(e.item.title))
                    }
                }), e.color ? n("v-uni-view", {
                    staticClass: "types"
                }, [e.item.type ? n("v-uni-view", {
                    style: {
                        "background-image": e.typeImage
                    }
                }) : e._e()], 1) : e._e(), e.color ? e._e() : n("v-uni-view", [n("v-uni-view", {
                    staticClass: "hp"
                }, [e._v("HP:" + e._s(e.item.hp) + "%")]), n("v-uni-view", {
                    staticClass: "mp"
                }, [e._v("MP:" + e._s(e.item.mp) + "%")])], 1), e.color ? n("v-uni-view", [n("v-uni-progress", {
                    attrs: {
                        percent: e.item.hp,
                        active: !1,
                        activeColor: "red",
                        backgroundColor: "#ffc1c1",
                        "stroke-width": "5"
                    }
                }), n("v-uni-progress", {
                    attrs: {
                        percent: e.item.mp,
                        active: !1,
                        activeColor: "blue",
                        backgroundColor: "#c1c1ff",
                        "stroke-width": "5"
                    }
                })], 1) : e._e(), e._l(e.color ? e.item.msgs : [], (function (t, r) {
                    return n("v-uni-view", {
                        key: r,
                        staticClass: "msg",
                        style: "animation-delay: " + .06 * t.id + "s;",
                        nativeOn: {
                            animationend: function (t) {
                                return e.animationend(t)
                            }
                        }
                    }, e._l(t.msg, (function (t, r) {
                        return n("v-uni-text", {
                            key: r,
                            style: {
                                color: t.color
                            },
                            domProps: {
                                innerHTML: e._s(e.parseHtml(t.text))
                            }
                        })
                    })), 1)
                }))], 2)
            },
                s = []
        },
        d793: function (e, t, n) {
            var r = n("5553");
            "string" === typeof r && (r = [
                [e.i, r, ""]
            ]), r.locals && (e.exports = r.locals);
            var a = n("4f06").default;
            a("9d94889e", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        dd82: function (e, t, n) {
            t = e.exports = n("2350")(!1), t.push([e.i, 'uni-page-body[data-v-b11b28fa]{height:100%;overflow:auto}.content[data-v-b11b28fa]{padding-bottom:44px}.status[data-v-b11b28fa]{color:#007aff;line-height:22px}.status uni-button[data-v-b11b28fa]{line-height:22px;vertical-align:bottom}.block[data-v-b11b28fa]{padding:5px 0;text-align:center}.block>.title[data-v-b11b28fa]{line-height:40px}.block>uni-button[data-v-b11b28fa]{margin:5px}.handle[data-v-b11b28fa]{border-width:2px;border-style:solid;border-color:#ccc;padding:2px}.handle[data-v-b11b28fa]:after{content:"";display:block;clear:both}.handle>uni-button[data-v-b11b28fa]{float:left;width:25%;margin:0;font-weight:700;padding:0}.handle>uni-button[data-v-b11b28fa]:after{border-width:1px;border-style:solid}.color .handle[data-v-b11b28fa]{background-color:#a7702f;border-color:#ece4da}.color .handle>uni-button[data-v-b11b28fa]{background-color:#ffd870;color:#96fbfa;text-shadow:#450000 1px 1px 2px,#450000 1px 1px 2px,#450000 -1px 1px 2px,#450000 1px -1px 2px}.color .handle>uni-button[data-v-b11b28fa]:after{border-color:#450000}.combat>.person[data-v-b11b28fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.combat>.person.side-l[data-v-b11b28fa]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.combat>.person>uni-view[data-v-b11b28fa]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:0}.footer[data-v-b11b28fa]{position:fixed;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;padding:5px;background-color:#fff;z-index:999}.footer>uni-input[data-v-b11b28fa]{-webkit-box-flex:1;-webkit-flex:1;flex:1;border:1px solid #007aff;border-radius:5px;line-height:30px;height:30px;padding:0 5px}.footer>uni-button[data-v-b11b28fa]{line-height:30px;height:30px;margin-left:5px}.log[data-v-b11b28fa]{margin:5px;padding:5px;border:1px solid #ccc;border-radius:4px;cursor:auto;-webkit-user-select:text;user-select:text}', ""])
        },
        e08f: function (e, t, n) {
            var r = n("1db7");
            "string" === typeof r && (r = [
                [e.i, r, ""]
            ]), r.locals && (e.exports = r.locals);
            var a = n("4f06").default;
            a("f3a7142a", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        e252: function (e, t, n) {
            "use strict";
            var r = n("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n("aef6"), n("28a5");
            var a = r(n("768b"));
            n("4917"), n("c5f6"), n("6762"), n("2fdb"), n("f559"), n("7514"), n("3b2b"), n("a481"), n("96cf");
            var s = r(n("3b8d"));
            n("456d"), n("ac6a");
            var i = r(n("7618")),
                c = r(n("75fc")),
                u = n("55bb"),
                o = n("97ce"),
                l = r(n("6d8f")),
                f = r(n("0683")),
                d = r(n("748a")),
                p = r(n("c9b3")),
                h = r(n("2d83")),
                x = r(n("ad12")),
                v = r(n("f2a2")),
                m = r(n("7c8c")),
                k = r(n("cb73")),
                b = r(n("0157")),
                g = r(n("af96")),
                w = n("ad2c"),
                y = r(n("8a54")),
                _ = n("7280"),
                R = n("c301"),
                S = {
                    components: {
                        loginLoading: l.default,
                        kdMenu: f.default,
                        kdPmg: d.default,
                        kdInput: p.default,
                        person: k.default,
                        taskList: b.default,
                        taskForm: g.default,
                        kdSell: h.default,
                        kdAddp: x.default,
                        kdMp: v.default,
                        kdWg: m.default,
                        getHosts: u.getHosts
                    },
                    data: function () {
                        return {
                            showUserInfo: !1,
                            color: u.globalSettings.get("color"),
                            isDev: u.isDev,
                            serverList: (0, c.default)(u.serverList),
                            user: {
                                username: "",
                                password: "",
                                server: 0,
                                line: 0,
                                playe: 0
                            },
                            network: "",
                            relogin: null,
                            needCreate: !1,
                            status: 0,
                            menus: [{
                                code: "1",
                                title: "常用"
                            }, {
                                code: "2",
                                title: ""
                            }, {
                                code: "3",
                                title: "辅助"
                            }, {
                                code: "r",
                                title: "商城"
                            }, {
                                code: "4",
                                title: ""
                            }, {
                                code: "5",
                                title: "周围"
                            }, {
                                code: "6",
                                title: ""
                            }, {
                                code: "0",
                                title: "系统"
                            }, {
                                code: "7",
                                title: "聊天"
                            }, {
                                code: "8",
                                title: ""
                            }, {
                                code: "9",
                                title: "任务"
                            }, {
                                code: "#",
                                title: ""
                            }],
                            taskInfo: {
                                main: {
                                    title: "",
                                    id: ""
                                },
                                other: {
                                    title: "",
                                    id: ""
                                }
                            },
                            isOtherTaskStop: !1,
                            map: {
                                title: "",
                                tns: [],
                                monster: 0,
                                npc: []
                            },
                            tryMove: "",
                            tryMap: "",
                            logs: [],
                            text: "",
                            combat: {
                                getPet: !1,
                                pet: !1,
                                ing: !1,
                                auto: !1,
                                history: !1,
                                stepMax: 0,
                                step: 0,
                                endfight: !1,
                                person1: [],
                                person0: [],
                                btns: [],
                                timer: 0,
                                timeLeft: 10,
                                now: 0,
                                ballNeedReplace: !1
                            },
                            cache: Object.assign({}, y.default, JSON.parse(u.storage.getItem("cache") || "{}")),
                            useCache: !1,
                            outing: 0,
                            sleep: 0,
                            willFull: 9999,
                            full: !1,
                            full7: !1,
                            value7: 0,
                            time7: 0,
                            petSoulTime: 0
                        }
                    },
                    computed: {
                        serverType: function () {
                            var e = this.user.server,
                                t = "old";
                            return e < 19 ? t = "new" : e >= 43 && (t = "tx"), t
                        },
                        isLogin: function () {
                            return "object" === ("undefined" === typeof kdjl ? "undefined" : (0, i.default)(kdjl)) && this.status === kdjl.Status.ed
                        },
                        notLogin: function () {
                            return "object" !== ("undefined" === typeof kdjl ? "undefined" : (0, i.default)(kdjl)) || this.status === kdjl.Status.none
                        },
                        canCombatOperate: function () {
                            var e = this.combat;
                            return e.ing && !e.auto && !e.endfight && 0 !== e.timeLeft
                        },
                        tasking: function () {
                            var e = this.taskInfo;
                            return !(!e.main.title && !e.other.title)
                        },
                        canOtherTask: function () {
                            var e = this.isLogin && !this.isOtherTaskStop && !this.combat.ing;
                            return e || console.warn("this.isLogin, this.isOtherTaskStop, this.combat.ing:", this.isLogin, this.isOtherTaskStop, this.combat.ing), e
                        }
                    },
                    filters: {
                        Status: function (e) {
                            switch (e) {
                                case kdjl.Status.none:
                                    return "未登录";
                                case kdjl.Status.ing:
                                    return "登录中";
                                case kdjl.Status.ed:
                                    return "已登录"
                            }
                        }
                    },
                    watch: {
                        cache: function (e) {
                            var t = {};
                            Object.keys(e).filter((function (t) {
                                return e[t] !== y.default[t]
                            })).forEach((function (n) {
                                return t[n] = e[n]
                            })), u.storage.setItem("cache", JSON.stringify(t))
                        },
                        status: function (e) {
                            var t = this;
                            e !== kdjl.Status.none && (this.outing = 0), (u.globalSettings.get("reconnect") || this.relogin) && e === kdjl.Status.none && 0 === this.outing && this.$refs.loading.show((function () {
                                t.login()
                            }), 1e3 * Math.max(this.relogin ? 1 : 60, this.sleep))
                        },
                        "combat.ing": function (e) {
                            var t = this,
                                n = this.combat;
                            if (clearTimeout(n.timer), e) {
                                var r = this.taskInfo.other.id;
                                r && w.tasks[r].stop(), uni.$emit("combating", n), this.tasking && ("全服竞技场" === this.taskInfo.main.title ? n.history = !1 : "history" !== u.globalSettings.get("autoCombat") ? (n.history = !1, n.auto || setTimeout((function () {
                                    t.send("f9")
                                }), 100)) : n.history = !0), n.history && this.startCombatHistory(), this.checkCombat(!0)
                            } else n.getPet = !1, n.pet = !1, n.endfight = !1, n.stepMax = 0, n.step = 0, n.person1 = [], n.person0 = [], n.btns = [], uni.$emit("endfight", {})
                        },
                        "combat.step": function (e) {
                            var t = this.combat;
                            clearTimeout(t.timer), t.btns.forEach((function (e) {
                                e.handle = "", e.selected = ""
                            })), t.ing && this.checkCombat(), this.combat.history && this.startCombatHistory()
                        },
                        "combat.history": function (e) {
                            var t = this;
                            e && (this.combat.auto && setTimeout((function () {
                                t.combat.auto && t.combat.history && t.send("f9")
                            }), 100), this.startCombatHistory())
                        },
                        "combat.auto": function (e) {
                            var t = this;
                            this.combat.history && e && setTimeout((function () {
                                t.combat.auto && t.combat.history && t.send("f9")
                            }), 100)
                        },
                        "combat.btns": function (e) {
                            e.forEach((function (e) {
                                var t = e.title,
                                    n = e.handles;
                                n.forEach((function (e) {
                                    var n = e.title;
                                    (0, _.addCombatItem)(t, n)
                                }))
                            }))
                        },
                        logs: function (e) {
                            var t = u.globalSettings.get("logMax");
                            e.length > t && (e.length = t)
                        }
                    },
                    onLoad: function () {
                        var e = this;
                        "object" === ("undefined" === typeof kdjl ? "undefined" : (0, i.default)(kdjl)) && (uni.$on("login", (function (t) {
                            Object.keys(t).forEach((function (n) {
                                e.user[n] = t[n]
                            })), (0, u.setUserInfo)(t), e.login()
                        })), uni.$on("log", (function (t) {
                            e.logs.unshift(t)
                        })), uni.$on("send", (function (t) {
                            var n, r;
                            "object" === (0, i.default)(t) ? (n = t.msg, r = t.t) : n = t, e.send(n, r)
                        })), uni.$on("combatend", (0, s.default)(regeneratorRuntime.mark((function t() {
                            var n, r, a, s, i, c, o, l, f, d, p, h, x, v, m, k = arguments;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return n = k.length > 0 && void 0 !== k[0] ? k[0] : {}, r = n.sleep, a = void 0 !== r && r, s = n.msgs, i = void 0 === s ? [] : s, c = e.combat, o = e.taskInfo.other, t.next = 5, new Promise((function (e) {
                                            setTimeout(e, 100)
                                        }));
                                    case 5:
                                        if (l = e.full || e.willFull < u.globalSettings.get("clearThreshold"), console.log("this.full, this.willFull, this.canOtherTask:", e.full, e.willFull, e.canOtherTask), !e.canOtherTask) {
                                            t.next = 26;
                                            break
                                        }
                                        if (!u.globalSettings.get("clear") || !l) {
                                            t.next = 25;
                                            break
                                        }
                                        return f = w.tasks.clear, o.title = f.title, o.id = "clear", t.prev = 12, t.next = 15, f.start(!1, !0, "not");
                                    case 15:
                                        e.willFull = 9999, e.full = !1, t.next = 21;
                                        break;
                                    case 19:
                                        t.prev = 19, t.t0 = t["catch"](12);
                                    case 21:
                                        o.title = "", o.id = "", t.next = 26;
                                        break;
                                    case 25:
                                        e.willFull--;
                                    case 26:
                                        if (console.log("this.full7, this.value7, this.time7, this.canOtherTask:", e.full7, e.value7, e.time7, e.canOtherTask), !(e.canOtherTask && u.globalSettings.get("auto7") && (e.full7 || e.value7 > 4e7 || Date.now() - 36e5 > e.time7))) {
                                            t.next = 43;
                                            break
                                        }
                                        return d = w.tasks.auto7, o.title = d.title, o.id = "auto7", t.prev = 31, t.next = 34, d.start(!1);
                                    case 34:
                                        e.full7 = !1, e.value7 = 0, e.time7 = Date.now(), t.next = 41;
                                        break;
                                    case 39:
                                        t.prev = 39, t.t1 = t["catch"](31);
                                    case 41:
                                        o.title = "", o.id = "";
                                    case 43:
                                        if (p = c.ballNeedReplace, c.ballNeedReplace = !1, console.log("ballNeedReplace, this.canOtherTask:", p, e.canOtherTask), !(e.canOtherTask && u.globalSettings.get("autoBall") && p)) {
                                            t.next = 59;
                                            break
                                        }
                                        return h = w.tasks.leftball, o.title = h.title, o.id = "leftball", t.prev = 50, t.next = 53, h.start(!1);
                                    case 53:
                                        t.next = 57;
                                        break;
                                    case 55:
                                        t.prev = 55, t.t2 = t["catch"](50);
                                    case 57:
                                        o.title = "", o.id = "";
                                    case 59:
                                        if (!e.canOtherTask || !u.globalSettings.get("ksbx")) {
                                            t.next = 75;
                                            break
                                        }
                                        if (!u.globalSettings.get("autoBall") || p) {
                                            t.next = 63;
                                            break
                                        }
                                        t.next = 75;
                                        break;
                                    case 63:
                                        return x = w.tasks.ksbx, o.title = x.title, o.id = "ksbx", t.prev = 66, t.next = 69, x.start(!1);
                                    case 69:
                                        t.next = 73;
                                        break;
                                    case 71:
                                        t.prev = 71, t.t3 = t["catch"](66);
                                    case 73:
                                        o.title = "", o.id = "";
                                    case 75:
                                        if (console.log("this.petSoulTime, this.canOtherTask:", e.petSoulTime, e.canOtherTask), !(e.canOtherTask && u.globalSettings.get("petSoul") && Date.now() - 36e5 > e.petSoulTime)) {
                                            t.next = 90;
                                            break
                                        }
                                        return v = w.tasks.petsoul, o.title = v.title, o.id = "petsoul", t.prev = 80, t.next = 83, v.start(!1, !0, "d100");
                                    case 83:
                                        e.petSoulTime = Date.now(), t.next = 88;
                                        break;
                                    case 86:
                                        t.prev = 86, t.t4 = t["catch"](80);
                                    case 88:
                                        o.title = "", o.id = "";
                                    case 90:
                                        e.resetOtherTask(), m = {
                                            needClear: l,
                                            sleep: a,
                                            msgs: i
                                        }, console.log("uni.$emit combatready", m), e.isLogin && uni.$emit("combatready", m);
                                    case 94:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [12, 19],
                                [31, 39],
                                [50, 55],
                                [66, 71],
                                [80, 86]
                            ])
                        })))), kdjl.onStatusChange((function (t) {
                            t === kdjl.Status.none && e.status === kdjl.Status.ing ? uni.showToast({
                                title: "登录失败",
                                icon: "none"
                            }) : t === kdjl.Status.none && e.status === kdjl.Status.ed && (uni.showToast({
                                title: "已断开",
                                icon: "none"
                            }), e.resetOtherTask(), e.combat.ing = !1, e.combat.auto = !1, e.full7 = !1, e.value7 = 0, e.time7 = 0, e.hidePopup(), e.$refs.wg.hide(!0), e.needCreate && (e.needCreate = !1, e.$refs.taskForm.reset()), uni.$emit("logouted", {})), e.status = t, t === kdjl.Status.ed && (uni.$emit("logined", {}), setTimeout((function () {
                                e.needCreate || (e.check(), uni.showToast({
                                    title: "登录成功"
                                }))
                            }), 20))
                        })), kdjl.onMessage((function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                n = t.filter((function (e) {
                                    return "rate::100" !== e
                                }));
                            e.isDev && n.length && console.log("kdjl.onMessage:".concat(Date.now(), ":"), n), e.parseMsgs(n)
                        })))
                    },
                    onReady: function () { },
                    onShow: function () {
                        this.showUserInfo = u.globalSettings.get("showUserInfo")
                    },
                    onNavigationBarButtonTap: function (e) {
                        switch (e.index) {
                            case 0:
                                this.selectTask();
                                break;
                            case 1:
                                this.shortcut();
                                break;
                            case 2:
                                uni.navigateTo({
                                    url: "../settings/settings"
                                });
                                break;
                            case 3:
                                uni.navigateTo({
                                    url: "../help/help"
                                });
                                break;
                            default:
                                break
                        }
                    },
                    methods: {
                        toOld: function () {
                            location.href = "https://i-weather.cn/kdjl-helper-old/index.html"
                        },
                        parseHtml: u.parseHtml,
                        parseMsgs: function (e) {
                            var t = this;
                            if (e = e.map((function (e) {
                                return "string" === typeof e ? (Object.keys(u.chars).forEach((function (t) {
                                    e = e.replace(new RegExp(t, "g"), u.chars[t])
                                })), e = e.replace(/\{`wgpic\}/g, '<img src="data:image/png;base64,'.concat(t.wgpic, '"/>')), e = e.replace(/^<a>s \d+ /, ""), (0, u.preImgs)(e)) : e
                            })), e.forEach((function (n, r) {
                                if ("string" === typeof n) {
                                    if (t.tryMove) {
                                        if (1 === e.length && "<r>cnt" === n) return void setTimeout((function () {
                                            t.send(t.tryMove)
                                        }), 100);
                                        t.tryMove = ""
                                    }
                                    var s = (0, u.parseMsg)(n),
                                        i = s.type,
                                        c = (0, u.clearText)(s.text);
                                    switch ("msg" === i || "pmg" === i || "smg" === i ? t.logs.unshift(s) : u.globalSettings.get("allLog") && t.logs.unshift(n), i) {
                                        case "title":
                                            t.hidePopup(), t.parseMap(s.text, e);
                                            break;
                                        case "wgpic":
                                            t.wgpic = s.text;
                                            break;
                                        case "table":
                                        case "menu":
                                            t.taskInfo.other.id || t.pauseOtherTask(), t.tasking || (e.find((function (e) {
                                                return e.startsWith && e.startsWith("<title>")
                                            })) ? setTimeout((function () {
                                                t.showMenu(s)
                                            }), 0) : t.showMenu(s));
                                            break;
                                        case "pmg":
                                            if (c.includes("这是个充满魔力的地方")) setTimeout((function () {
                                                t.send("t l 6001"), setTimeout((function () {
                                                    t.send(t.tryMap)
                                                }), 500)
                                            }), 100);
                                            else if (c.includes("密码输入错误")) t.tasking && t.stopTask(), t.showPmg(s);
                                            else {
                                                if (c.includes("你已经超过你行囊上限")) t.full = !0;
                                                else if (/财富花瓣.*开奖了，结果揭晓！|夺宝骑兵.*你随机到了/.test(c) || c.includes("猜拳中") && 0 === r) setTimeout((function () {
                                                    t.send("storyend")
                                                }), 100);
                                                else if (c.includes("你的项链吸取")) {
                                                    var o = Number(c.match(/你的项链吸取(\d+)经验/)[1]) || 0;
                                                    t.value7 += o
                                                } else if (c.includes("已经击败仙人无双")) {
                                                    var l = ["手之修炼", "脚之修炼", "身之修炼", "脑之修炼", "心之修炼"],
                                                        f = l.indexOf(t.map.title.replace(/-副本\d*/, ""));
                                                    u.userSettings.set("xrws-".concat(f), Date.now())
                                                } else if (c.includes("重置成功") && t.map.title.startsWith("仙人无双塔"))
                                                    for (var d = 0; d < 5; d++) u.userSettings.set("xrws-".concat(d), "");
                                                else "before" !== t.lucky && "start" !== t.lucky || (clearTimeout(t._luckyTimer), t.lucky = "end", uni.$emit("combatend", t.combatendMsgs || {}));
                                                t.tasking || (e.find((function (e) {
                                                    return e.startsWith && e.startsWith("<title>")
                                                })) ? setTimeout((function () {
                                                    t.showPmg(s)
                                                }), 0) : t.showPmg(s))
                                            }
                                            break;
                                        case "wg":
                                            t.$refs.wg.show(s.text);
                                            break;
                                        case "input3":
                                            t.tasking || t.showInput(s.text, s.props, 3);
                                            break;
                                        case "input2":
                                            t.tasking || t.showInput(s.text, s.props, 2);
                                            break;
                                        case "input":
                                            if ("输入密码" === s.props.t) {
                                                var p = u.globalSettings.get("itemPassword");
                                                p ? setTimeout((function () {
                                                    t.send("".concat(s.props.x).concat(p))
                                                }), 100) : t.showInput(s.text, s.props, 1)
                                            } else t.tasking || t.showInput(s.text, s.props, 1);
                                            break;
                                        case "sell":
                                            t.tasking || t.$refs.sell.show(s);
                                            break;
                                        case "addp":
                                            t.tasking || t.$refs.addp.show(s);
                                            break;
                                        case "cache":
                                            t.parseCache(s.text);
                                            break;
                                        case "pilot":
                                            t.pilot = s.data;
                                            break;
                                        case "mp":
                                            t.tasking || t.$refs.mp.show(s, t.pilot);
                                            break;
                                        case "lucky":
                                            t._luckyTimer = setTimeout((function () {
                                                t.send("lucky over"), "before" === t.lucky && (t.lucky = "start")
                                            }), 500);
                                            break;
                                        case "pop":
                                            setTimeout((function () {
                                                t.send("cnt")
                                            }), 100);
                                            break;
                                        case "login":
                                            var h = c.match(/(\w+?)(\d)#/);
                                            t.relogin = {
                                                line: h[2] - 1
                                            }, kdjl.n && (t.relogin.server = h[1]);
                                            break;
                                        default:
                                            if (c.includes("auto 1")) t.combat.auto = !0;
                                            else if (c.includes("auto 0")) t.combat.auto = !1;
                                            else if (c.match(/wait (\d+),([a-z]+),/)) {
                                                var x = c.match(/wait (\d+),([a-z]+),(.+)/),
                                                    v = (0, a.default)(x, 4),
                                                    m = (v[0], v[1]),
                                                    k = v[2],
                                                    b = v[3];
                                                e.find((function (e) {
                                                    return e.startsWith && e.startsWith("<pmg")
                                                })) || (uni.showLoading({
                                                    title: b
                                                }), setTimeout((function () {
                                                    uni.hideLoading(), t.send(k)
                                                }), Number(1e3 * m)))
                                            } else if (/请等待(\d+)秒恢复知觉/.test(c)) t.sleep = Number(c.match(/请等待(\d+)秒恢复知觉/)[1]), uni.showLoading({
                                                title: "晕倒中...",
                                                mask: !1
                                            }), t.sleepTimer = setInterval((function () {
                                                t.sleep--, 0 === t.sleep && (uni.hideLoading(), clearInterval(t.sleepTimer), delete t.sleepTimer)
                                            }), 1e3);
                                            else if (/慢慢地你终于又有了知觉/.test(c)) uni.$emit("combatend", {
                                                sleep: !0
                                            });
                                            else if (/你的背包快满了，还剩\d+个空位/.test(c)) t.willFull = Number(c.match(/你的背包快满了，还剩(\d+)个空位/)[1]);
                                            else if (c.startsWith("你的背包已经满了")) t.full = !0;
                                            else if (/你把(.+?)指派为自己的随行宠物/.test(c)) {
                                                var g = c.match(/你把(.+?)指派为自己的随行宠物/)[1];
                                                u.userSettings.set("pet", g)
                                            } else "r" === i && c.startsWith("npc ") ? t.parseNpc(s.text) : c.includes("已经吸满了经验") ? t.full7 = !0 : "r" !== i || "create" !== c && ("createno" !== c || e.find((function (e) {
                                                return /<r>charset/.test(e)
                                            }))) || (t.needCreate = !0, t.create5("createno" === c))
                                    }
                                }
                            })), e.find((function (e) {
                                return e.startsWith && (e.startsWith("<r>combat") || e.startsWith("<r>act"))
                            })) && (0, R.fixCombatMsg)(e, (function (e) {
                                t.isLogin && (t.combat.ing = !0, t.combat.now = 0, t.parseCombat(e))
                            }), (function (e) {
                                t.combat.ing && (t.timeLog(), t.updateCombat(e))
                            })), this.combat.ing && e.find((function (e) {
                                return /^<title>/.test(e)
                            }))) {
                                this.timeLog(), this.combat.ing = !1;
                                var n = e.find((function (e) {
                                    var t = "string" === typeof e ? (0, u.clearText)(e) : "";
                                    return t.startsWith("<msg>您的生命球已经用尽") || t.startsWith("<msg>背包中没有可以更换的生命球了")
                                }));
                                if (n && (this.combat.ballNeedReplace = !0), e.find((function (e) {
                                    return /^<lucky/.test(e)
                                })) && (this.lucky = "before"), !this.sleep) {
                                    var r = e.filter((function (e) {
                                        return "string" === typeof e && !e.startsWith("<cache")
                                    })).map((function (e) {
                                        return (0, u.clearText)(e)
                                    }));
                                    this.lucky && "end" !== this.lucky ? this.combatendMsgs = r : uni.$emit("combatend", {
                                        msgs: r
                                    })
                                }
                            }
                            uni.$emit("msgs", e.filter((function (e) {
                                return "string" === typeof e && !e.startsWith("<cache")
                            })).map((function (e) {
                                return (0, u.removeColor)(e)
                            })))
                        },
                        showMenus: function (e) {
                            this.useCache = !0, this.send(e)
                        },
                        create: function () {
                            uni.navigateTo({
                                url: "../login/login"
                            })
                        },
                        create5: function () {
                            var e = (0, s.default)(regeneratorRuntime.mark((function e(t) {
                                var n, r, a, s;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return n = [{
                                                title: "性别",
                                                type: "picker",
                                                range: [{
                                                    title: "男",
                                                    code: "53"
                                                }, {
                                                    title: "女",
                                                    code: "54"
                                                }],
                                                value: 0
                                            }], t || n.push({
                                                title: "角色昵称",
                                                type: "input",
                                                placeholder: "2-4个汉字",
                                                value: ""
                                            }), e.prev = 2, e.next = 5, this.$refs.taskForm.show(n);
                                        case 5:
                                            r = e.sent, a = r[0], s = a.range[a.value].code, this.send(t ? s : "<create>".concat(s, ":").concat(r[1].value)), this.needCreate = !1, e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e["catch"](2), this.create5(t);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [2, 12]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        login: function () {
                            var e = Object.assign(this.user, this.relogin);
                            if (this.relogin = null, kdjl.status === kdjl.Status.none) {
                                var t, n = u.globalSettings.get("host"),
                                    r = [e.username, e.password, e.server, e.line, e.player, e.server > 42 ? "221.181.70.17" : n],
                                    s = (0, u.getHosts)().find((function (e) {
                                        var t = e.host;
                                        return t === n
                                    })).title,
                                    c = "object" === ("undefined" === typeof kdjl ? "undefined" : (0, i.default)(kdjl)) && kdjl.p && u.globalSettings.get("proxy");
                                if (c) {
                                    var o = c.split(":"),
                                        l = (0, a.default)(o, 2),
                                        f = l[0],
                                        d = l[1];
                                    r.push({
                                        host: f,
                                        port: Number(d),
                                        type: 5
                                    }), this.network = "代理 + ".concat(s)
                                } else this.network = s;
                                (t = kdjl).login.apply(t, r)
                            }
                        },
                        logout: function () {
                            var e = this;
                            this.send("quit"), setTimeout((function () {
                                e.send("s")
                            }), 500)
                        },
                        send: function () {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                n = arguments.length > 1 ? arguments[1] : void 0;
                            t = t.replace(/^~/, "");
                            var r = /t:\S/;
                            r.test(t) && (n = "l", t = t.replace(r, "")), "l" !== n && (t = t.trim());
                            var a = [];
                            a.includes(t) || (t = t.replace("  ", " "));
                            var s = ["buy_vep"];
                            if (s.includes(t) && !t.startsWith(" ") && (t = " " + t), t && this.isLogin) {
                                if (this.sleep > 0) return void setTimeout((function () {
                                    e.send(t)
                                }), 1e3 * this.sleep);
                                if (this.useCache || "fanwg" === t) {
                                    if (t in this.cache) return void this.parseMsgs([this.cache[t]]);
                                    this.useCache = !1
                                }
                                if (t.startsWith("t l ")) {
                                    var i = Number(t[t.length - 1]) + 1;
                                    this.tryMove = i < 9 ? t.replace(/(.+?)[\d]$/, "$1".concat(i)) : ""
                                }
                                t.startsWith("map move ") && (this.tryMap = t), "quit" === t && 0 === this.outing ? this.outing = 1 : 1 === this.outing && (this.outing = "s" === t ? 2 : 0), this.isDev && console.log("kdjl.sendMessage:", t), this.disconnectTimeout && clearTimeout(this.disconnectTimeout), this.disconnectTimeout = setTimeout((function () {
                                    u.globalSettings.get("disconnect") && e.tasking && kdjl.status === kdjl.Status.ed && kdjl.close && kdjl.close()
                                }), 6e4), kdjl.sendMessage(t)
                            } else console.log("send:", t)
                        },
                        parseMap: function (e, t) {
                            var n = this.map;
                            n.title = e, n.tns = [], n.npc = [], n.monster = 0;
                            var r = "";
                            t.forEach((function (e) {
                                if ("string" === typeof e) {
                                    var t = (0, u.parseMsg)(e).text;
                                    t.startsWith("tns") ? r = t : t.startsWith("monster ") && (n.monster = Number(t.replace("monster ", "")))
                                }
                            }));
                            var a = r.split(",");
                            a.forEach((function (e) {
                                var t = e.match(/(\d+)\|(.+)/);
                                if (t) {
                                    var r = t[1],
                                        a = t[2];
                                    "↑下地界" === a ? (r = "60", a = "↓ 下地界") : a.endsWith("赛场西") && (r = "80"), n.tns.push({
                                        code: "t l ".concat(r, "01"),
                                        text: a
                                    })
                                }
                            })), e.startsWith("光芒市场") ? n.tns.push({
                                code: "t l 8004",
                                text: "← 魔族入侵"
                            }) : e.startsWith("魔族入侵") ? n.tns.push({
                                code: "t l 5001",
                                text: "↑ 光芒市场"
                            }) : e.startsWith("魔界入口") ? n.tns.push({
                                code: "t l 8001",
                                text: "魔界入口1层" === e ? "← 迷失之地" : "← 魔界入口"
                            }, {
                                code: "魔界入口5层" === e ? "t l 5002" : "t l 12002",
                                text: "魔界入口5层" === e ? "↑ 魔界郊外" : "→ 魔界入口"
                            }) : "魔界郊外1层" === e ? n.tns.push({
                                code: "t l 8001",
                                text: "← 魔界入口"
                            }, {
                                code: "t l 12002",
                                text: "→ 魔界郊外"
                            }) : "魔界郊外2层" === e ? n.tns.push({
                                code: "t l 8001",
                                text: "← 魔界郊外"
                            }) : e.endsWith("复赛场地") ? n.tns.push({
                                code: "t l 6001",
                                text: "↓ 报名区"
                            }) : "闪光镇东路" === e && (2 === n.tns.length ? (n.tns.length = 0, n.tns.push({
                                code: "t l 12001",
                                text: "→ 时光小屋"
                            })) : 0 === n.tns.length && n.tns.push({
                                code: "t l 5001",
                                text: "↑ 罗克萨斯家"
                            }));
                            var s = ["原绿丛林", "玲珑之林", "绿溪沼泽", "红枫之地", "石峰谷", "绿园湾", "阴暗丛林", "百花林", "埋骨森林", "寒雪之地", "火云林地", "岩溶炼窟", "古峰回廊", "风雪冰地"],
                                i = ["沼泽深处", "荒漠深处"];
                            s.concat(i).includes(e) && (n.monster = n.monster || 1)
                        },
                        parseNpc: function (e) {
                            var t = this,
                                n = this.map,
                                r = e.replace(/(npc \d+):(.*)/, (function (e, r, a) {
                                    var s = o.npcData[n.title.replace(/-副本\d*/, "")],
                                        c = s && s[r];
                                    return c = "object" === (0, i.default)(c) ? c[t.serverType] : c, c = c || r, "<menu>NPC|[".concat(r, "]").concat(c).concat(u.chars[""]).concat(a)
                                })),
                                a = (0, u.parseMsg)(r).data;
                            if (a) {
                                var s = n.npc,
                                    c = a.list || [];
                                if (c.length) {
                                    var l = c[0];
                                    l.hint = l.list && l.list.find((function (e) {
                                        var t = e.code;
                                        return t.startsWith("~q")
                                    }));
                                    var f = s.find((function (e) {
                                        var t = e.title;
                                        return t === l.title
                                    }));
                                    f ? (f.hint = l.hint, f.list = l.list, f.list && f.list.length || s.splice(s.indexOf(f), 1)) : s.push(l)
                                }
                            }
                        },
                        showMenu: function (e) {
                            this.$refs.menu.show(e)
                        },
                        showPmg: function (e) {
                            var t = getCurrentPages(),
                                n = t[t.length - 1];
                            "pages/login/login" !== n.$vm.route && this.$refs.pmg.show(e)
                        },
                        showNpc: function () {
                            this.showMenu({
                                data: {
                                    title: "NPC",
                                    list: this.map.npc
                                }
                            })
                        },
                        parseCombatAnimation: function (e) {
                            var t, n, r, s = this,
                                c = this.combat,
                                o = {};

                            function l(e, t, n, r, a, s) {
                                var c = o[e];
                                if (c) {
                                    if ("number" === typeof t || "string" === typeof t) {
                                        var u = Date.now();
                                        t = parseInt(t), (0 !== t || u - c.act5 > 1e3) && (-1 === t && (c.act5 = u), c.hp = t)
                                    }
                                    "number" !== typeof n && "string" !== typeof n || (c.mp = parseInt(n)), "object" === (0, i.default)(r) && r && c.msgs.push(r), "string" === typeof a && (c.type = a), "object" === (0, i.default)(s) && (c.actx = s)
                                }
                            }
                            c.person1.concat(c.person0).forEach((function (e) {
                                o[e.id] = e
                            })), e.forEach((function (e) {
                                if ("string" === typeof e) {
                                    var i = (0, u.parseMsg)(e).text,
                                        f = i.split(" ")[0],
                                        d = i.replace("".concat(f, " "), "").split(",");
                                    switch (f) {
                                        case "actx":
                                            if ("0" === d[0]) {
                                                var p = (0, a.default)(d, 6),
                                                    h = (p[0], p[1]),
                                                    x = p[2],
                                                    v = p[3],
                                                    m = (p[4], p[5]);
                                                l(h, null, null, null, null, {
                                                    x: x,
                                                    y: v,
                                                    side: m
                                                })
                                            } else n && (l(d[1], null, null, {
                                                id: d[0],
                                                msg: [{
                                                    text: n
                                                }]
                                            }), n = null);
                                            break;
                                        case "quake":
                                            break;
                                        case "actr":
                                            break;
                                        case "emotion":
                                            l(d[0], null, null, {
                                                id: 0,
                                                msg: [{
                                                    text: d[2]
                                                }]
                                            });
                                            break;
                                        case "act8":
                                            var k = i.replace(/^act8 \d+,/, "").trim(),
                                                b = (0, u.parseMsg)(k),
                                                g = b.type;
                                            "msg" !== g && "pmg" !== g && "smg" !== g || s.logs.unshift(b), "pmg" !== g || s.tasking || c.history || c.auto || s.$nextTick((function () {
                                                s.showPmg(b)
                                            }));
                                            break;
                                        case "step":
                                            break;
                                        case "acts":
                                            t = d[1];
                                            break;
                                        case "acth":
                                            t && (l(d[1], null, null, {
                                                id: d[0],
                                                msg: [{
                                                    text: t
                                                }]
                                            }), t = null), l(d[1], null, null, null, d[2] || "");
                                            break;
                                        case "act7":
                                            n = d[1], d.includes("逃跑") && (c.endfight = !0);
                                            break;
                                        case "actb":
                                            break;
                                        case "act2":
                                            var w = (0, a.default)(d, 7),
                                                y = (w[0], w[1]),
                                                _ = (w[2], w[3]),
                                                R = w[4],
                                                S = (w[5], w[6]);
                                            r = _, l(y, S, null, {
                                                id: d[0],
                                                msg: [{
                                                    text: _,
                                                    color: "red"
                                                }, {
                                                    text: R,
                                                    color: "blue"
                                                }]
                                            });
                                            break;
                                        case "act5":
                                            "+1" === r && l(d[1], -1), r = null;
                                            break;
                                        case "act0":
                                            var E = (0, a.default)(d, 7),
                                                M = (E[0], E[1]),
                                                O = E[2],
                                                j = E[3],
                                                P = (E[4], E[5], E[6]);
                                            l(M, P, null, {
                                                id: d[0],
                                                msg: [{
                                                    text: O,
                                                    color: "red"
                                                }, {
                                                    text: j,
                                                    color: "blue"
                                                }]
                                            });
                                            break;
                                        case "actq":
                                            break;
                                        case "acte":
                                            l(d[1], null, null, {
                                                id: d[0],
                                                msg: [{
                                                    text: d[3]
                                                }]
                                            });
                                            break;
                                        case "acty":
                                            var T = (0, a.default)(d, 5),
                                                C = (T[0], T[1]),
                                                A = T[2],
                                                I = (T[3], T[4]);
                                            l(C, I, null, {
                                                id: d[0],
                                                msg: [{
                                                    text: A,
                                                    color: "red"
                                                }]
                                            });
                                            break;
                                        case "act4":
                                            break;
                                        case "act9":
                                            break;
                                        case "lm":
                                            var N = (0, a.default)(d, 3),
                                                z = N[0],
                                                B = N[1],
                                                L = N[2];
                                            o[z];
                                            l(z, B, L);
                                            break;
                                        case "endfight":
                                            c.endfight = !0;
                                            break
                                    }
                                }
                            }))
                        },
                        parseCombat: function (e) {
                            var t, n = this.combat;

                            function r(e) {
                                e = e.split(" ")[1];
                                var t = e.split(",");
                                return {
                                    title: t[0],
                                    id: t[2],
                                    hp: t[3],
                                    mp: t[4],
                                    type: "",
                                    msgs: [],
                                    act5: 0,
                                    actx: {}
                                }
                            }

                            function s(e) {
                                var t = e.split(" ")[0];
                                e = e.replace(/^\S+\s/, ""), e = (0, u.parseMsg)(e).text;
                                var n = e.split("|").slice(1);
                                return n.map((function (e) {
                                    var n = e.match(/\[(\d+)\](.+)/),
                                        r = (0, a.default)(n, 3),
                                        s = (r[0], r[1]),
                                        i = r[2],
                                        c = i.split(u.chars[""]),
                                        o = (0, a.default)(c, 2),
                                        l = o[0],
                                        f = o[1];
                                    return {
                                        id: s,
                                        title: l,
                                        scope: f,
                                        type: t
                                    }
                                }))
                            }
                            n.now = Date.now();
                            var i = [{
                                id: "",
                                title: "普通攻击",
                                scope: "s1",
                                type: "attack"
                            }],
                                o = [];
                            e.forEach((function (e) {
                                if ("string" === typeof e) {
                                    var a = (0, u.parseMsg)(e).text;
                                    a.startsWith("person(0") ? n.person0.push(r(a)) : a.startsWith("person(1") ? n.person1.push(r(a)) : a.startsWith("skill") ? i.push.apply(i, (0, c.default)(s(a))) : a.startsWith("pets") ? o.push.apply(o, (0, c.default)(s(a))) : a.startsWith("ownpet") ? o.push({
                                        id: "",
                                        title: "普通攻击",
                                        scope: "s1",
                                        type: "peta"
                                    }) : a.startsWith("item") ? (t = s(a), i.push.apply(i, (0, c.default)(t))) : a.includes("可捕捉的宠物出现") && (n.pet = !0)
                                }
                            })), i.push({
                                id: "",
                                title: "逃跑",
                                scope: "s3",
                                type: "escape"
                            }), n.btns.push({
                                type: "person",
                                title: "人物操作",
                                handles: i,
                                handle: "",
                                selected: ""
                            }), o.length && (n.btns.push({
                                type: "pet",
                                title: "宠物操作",
                                handles: o,
                                handle: "",
                                selected: ""
                            }), t && t.length && o.push.apply(o, (0, c.default)(t)), o.push({
                                id: "",
                                title: "逃跑",
                                scope: "s3",
                                type: "pete"
                            })), this.parseCombatAnimation(e)
                        },
                        updateCombat: function (e) {
                            var t = this.combat;
                            t.step++, this.parseCombatAnimation(e)
                        },
                        getCombatHistory: function (e) {
                            return (0, u.filterHandle)(u.userSettings.get(e.title))
                        },
                        startCombatHistory: function () {
                            var e = this;
                            this.combat.btns.forEach((function (t) {
                                t.handle || e.selectCombat(t, !0)
                            }))
                        },
                        selectCombat: function (e, t) {
                            var n = this,
                                r = this.combat;

                            function a(a) {
                                var s = e.handles[a];
                                if (!t) {
                                    var i = (0, u.filterHandle)(s.title);
                                    e.selected = i, u.userSettings.set(e.title, i)
                                }
                                var c = [s.type];
                                if ("s2" === s.scope || "s3" === s.scope || "s7" === s.scope) return s.id && c.push(s.id), void (e.handle = c.join(" "));
                                var o = "s0" === s.scope ? r.person0 : r.person1;

                                function l(t) {
                                    s.id && c.push(s.id), c.push(o[t].id), e.handle = c.join(" ")
                                }
                                t || "s1992" === s.scope ? l(o.length < 5 ? Math.round(o.length / 2) - 1 : 2) : uni.showActionSheet({
                                    title: "选择对象",
                                    itemList: o.map((function (e) {
                                        return e.title
                                    })),
                                    success: function (e) {
                                        var t = e.tapIndex;
                                        n.canCombatOperate && l(t)
                                    }
                                })
                            }
                            if (t) {
                                var s = (0, u.filterHandle)(u.userSettings.get(e.title)),
                                    i = e.handles.find((function (e) {
                                        return (0, u.filterHandle)(e.title).includes("精灵球")
                                    }));
                                if (r.pet && (u.globalSettings.get("getPet") || r.getPet) && i) a(e.handles.indexOf(i));
                                else {
                                    r.stepMax && r.step > r.stepMax && (s = "逃跑");
                                    var c = e.handles.find((function (e) {
                                        return (0, u.filterHandle)(e.title) === s
                                    }));
                                    a(c ? e.handles.indexOf(c) : 0)
                                }
                            } else uni.showActionSheet({
                                title: e.title,
                                itemList: e.handles.map((function (e) {
                                    return (0, u.clearText)(e.title)
                                })),
                                success: function (e) {
                                    var t = e.tapIndex;
                                    n.canCombatOperate && a(t)
                                }
                            })
                        },
                        checkCombat: function (e) {
                            var t = this,
                                n = this.combat,
                                r = 1e3 * u.globalSettings.get("combatUpdate"),
                                a = [300, 3e3, 5e3],
                                s = 0;

                            function i() {
                                var t = e ? a[s] : r;
                                t && (n.timer = setTimeout(c, t), s++)
                            }

                            function c() {
                                if (n.ing) {
                                    if (n.auto || n.endfight) return t.send("eft"), void i();
                                    var r = n.btns;
                                    0 !== r.length && r.filter((function (e) {
                                        return e.handle
                                    })).length === r.length ? (e || t.send("eft"), n.timer = setTimeout((function () {
                                        t.send(r[0].handle), r[1] ? n.timer = setTimeout((function () {
                                            t.send(r[1].handle), i()
                                        }), 100) : i()
                                    }), e ? 20 : 100)) : n.timer = setTimeout(c, 100)
                                }
                            }
                            i()
                        },
                        timeLog: function () {
                            console.log("wait:", Date.now() - this.combat.now), this.combat.now = Date.now()
                        },
                        selectTask: function () {
                            var e = (0, s.default)(regeneratorRuntime.mark((function e() {
                                var t, n, r, a, s, c;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = this.taskInfo.main, !this.tasking) {
                                                e.next = 4;
                                                break
                                            }
                                            return uni.showToast({
                                                title: "任务进行中"
                                            }), e.abrupt("return");
                                        case 4:
                                            return e.next = 6, this.$refs.taskList.show(w.tasks);
                                        case 6:
                                            if (n = e.sent, r = n.task, a = n.key, s = r.title, "function" !== typeof r.before) {
                                                e.next = 14;
                                                break
                                            }
                                            return r.status = "before", e.next = 14, r.before();
                                        case 14:
                                            if ("object" !== (0, i.default)(r.form)) {
                                                e.next = 19;
                                                break
                                            }
                                            return e.next = 17, this.$refs.taskForm.show(r.form);
                                        case 17:
                                            c = e.sent, r.form = c;
                                        case 19:
                                            t.title = s, t.id = a, r.onEnd((function () {
                                                t.title = "", t.id = ""
                                            })), r.start();
                                        case 23:
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
                        shortcut: function () {
                            var e = this;
                            if (this.isLogin) {
                                var t = [].concat((0, c.default)(u.globalSettings.get("shortcutList")), [{
                                    title: "退出登录",
                                    code: ""
                                }]);
                                uni.showActionSheet({
                                    itemList: t.map((function (e) {
                                        var t = e.title;
                                        return t
                                    })),
                                    success: function (n) {
                                        var r = n.tapIndex;
                                        if (!(r < 0)) {
                                            var a = t[r];
                                            a.code ? e.send(a.code) : e.logout()
                                        }
                                    }
                                })
                            } else uni.showToast({
                                title: "未登录"
                            })
                        },
                        stopTask: function () {
                            var e = this.taskInfo,
                                t = e.main.id || e.other.id;
                            t && (t === e.other.id && this.pauseOtherTask(), w.tasks[t].stop())
                        },
                        showInput: function (e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                            this.$refs.input.show(e, t, n)
                        },
                        parseCache: function (e) {
                            var t = e.split(":")[0],
                                n = e.replace("".concat(t, ":"), "");
                            n !== e && this.$set(this.cache, t, n)
                        },
                        hidePopup: function () {
                            this.$refs.menu.hide(!0), this.$refs.input.hide(!0), this.$refs.sell.hide(!0), this.$refs.addp.hide(!0), this.$refs.mp.hide(!0), this.$refs.pmg.hide(!0)
                        },
                        pauseOtherTask: function () {
                            var e = this;
                            this.isOtherTaskStop = !0, clearTimeout(this.otherTaskTimeout), this.otherTaskTimeout = setTimeout((function () {
                                e.isOtherTaskStop = !1
                            }), 1e3)
                        },
                        resetOtherTask: function () {
                            clearTimeout(this.otherTaskTimeout), this.isOtherTaskStop = !1
                        },
                        logClick: function () {
                            var e = (0, s.default)(regeneratorRuntime.mark((function e(t) {
                                var n, r, a, s, i, c;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (console.log(t), n = t.type, r = t.props, "msg" !== n || !r.chnl) {
                                                e.next = 14;
                                                break
                                            }
                                            return a = [], r.name && a.push({
                                                title: "发送私信",
                                                code: "chatfb 1 ".concat(r.name),
                                                input: !0
                                            }, {
                                                title: "添加好友",
                                                code: "chatfb 2 ".concat(r.name)
                                            }), r.id && a.push({
                                                title: "查看物品",
                                                code: "chatfb 3 ".concat(r.id)
                                            }), e.next = 8, (0, u.showActionSheet)({
                                                itemList: a.map((function (e) {
                                                    var t = e.title;
                                                    return t
                                                }))
                                            });
                                        case 8:
                                            if (s = e.sent, i = s.tapIndex, !(i < 0)) {
                                                e.next = 12;
                                                break
                                            }
                                            throw new Error("取消");
                                        case 12:
                                            c = a[i], c.input ? this.showInput("输入对话内容", {
                                                x: c.code
                                            }) : this.send(c.code);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        check: function () {
                            var e = (0, s.default)(regeneratorRuntime.mark((function e() {
                                var t, n, r, a, s = this;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, new Promise((function (e, t) {
                                                setTimeout((function () {
                                                    (s.status === kdjl.Status.ed ? e : t)()
                                                }), 500)
                                            }));
                                        case 2:
                                            if (t = this.taskInfo.other, !this.canOtherTask || !u.globalSettings.get("checkPet")) {
                                                e.next = 16;
                                                break
                                            }
                                            return n = w.tasks.checkpet, t.title = n.title, t.id = "checkpet", e.prev = 7, e.next = 10, n.start(!1);
                                        case 10:
                                            e.next = 14;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e["catch"](7);
                                        case 14:
                                            t.title = "", t.id = "";
                                        case 16:
                                            if (!this.canOtherTask || !u.globalSettings.get("petSoul")) {
                                                e.next = 30;
                                                break
                                            }
                                            return r = w.tasks.petsoul, t.title = r.title, t.id = "petsoul", e.prev = 20, e.next = 23, r.start(!1, !0, "d100");
                                        case 23:
                                            this.petSoulTime = Date.now(), e.next = 28;
                                            break;
                                        case 26:
                                            e.prev = 26, e.t1 = e["catch"](20);
                                        case 28:
                                            t.title = "", t.id = "";
                                        case 30:
                                            if (!this.canOtherTask || !u.globalSettings.get("auto7")) {
                                                e.next = 46;
                                                break
                                            }
                                            return a = w.tasks.auto7, t.title = a.title, t.id = "auto7", e.prev = 34, e.next = 37, a.start(!1, !1);
                                        case 37:
                                            this.full7 = !1, this.value7 = 0, this.time7 = Date.now(), e.next = 44;
                                            break;
                                        case 42:
                                            e.prev = 42, e.t2 = e["catch"](34);
                                        case 44:
                                            t.title = "", t.id = "";
                                        case 46:
                                            this.resetOtherTask(), uni.$emit("taskready", {});
                                        case 48:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [7, 12],
                                    [20, 26],
                                    [34, 42]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                };
            t.default = S
        },
        e2f7: function (e, t, n) {
            var r = n("dd82");
            "string" === typeof r && (r = [
                [e.i, r, ""]
            ]), r.locals && (e.exports = r.locals);
            var a = n("4f06").default;
            a("e6fdcfb8", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        e494: function (e, t, n) {
            var r = n("ae83");
            "string" === typeof r && (r = [
                [e.i, r, ""]
            ]), r.locals && (e.exports = r.locals);
            var a = n("4f06").default;
            a("39a9f154", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        e4d1: function (e, t, n) {
            "use strict";
            var r = n("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n("a481"), n("7514");
            var a = r(n("0dce")),
                s = n("55bb"),
                i = {
                    mixins: [a.default],
                    data: function () {
                        return {
                            grid: 36,
                            visible: !1,
                            title: "",
                            code: "",
                            list: [],
                            size: {
                                width: 0,
                                height: 0,
                                x: 0,
                                y: 0
                            },
                            item: null,
                            slected: {
                                x: -1,
                                y: -1
                            },
                            menu: [],
                            lines: [],
                            shortcutList: []
                        }
                    },
                    computed: {
                        inList: function () {
                            for (var e = this.shortcutList, t = 0; t < e.length; t++) {
                                var n = e[t],
                                    r = this.getTargetCode();
                                if (n.code === r) return {
                                    index: t
                                }
                            }
                            return null
                        }
                    },
                    methods: {
                        reset: function () {
                            this.title = "", this.code = "", this.list = [], this.size = {
                                width: 0,
                                height: 0,
                                x: 0,
                                y: 0
                            }, this.item = null, this.slected = {
                                x: -1,
                                y: -1
                            }, this.menu = [], this.lines = [], this.shortcutList = []
                        },
                        show: function (e, t) {
                            var n = this,
                                r = e.data;
                            this.reset(), this.visible = !0;
                            var a = r.title,
                                i = r.code,
                                c = r.list,
                                u = r.at,
                                o = r.target,
                                l = r.size,
                                f = r.lines;
                            console.log("data:", r), console.log("pilot:", t), this.title = a, this.code = i, this.list = c, this.lines = f, this.size = l, t && t.menu && (this.menu = t.menu.list.map((function (e) {
                                var t = e.title,
                                    n = e.code;
                                return {
                                    title: t,
                                    code: n
                                }
                            })));
                            var d = o || u || c[0],
                                p = d.position;
                            this.slect(p.x, p.y), this.$nextTick((function () {
                                n.$el.querySelector(".content").scrollTop = 0
                            })), this.shortcutList = JSON.parse(JSON.stringify(s.globalSettings.get("shortcutList")))
                        },
                        get: function (e, t) {
                            return this.list.find((function (n) {
                                var r = n.position;
                                return r.x === e && r.y === t
                            }))
                        },
                        slect: function (e, t) {
                            var n = this.get(e, t);
                            n && (this.item = n, this.slected.x === e && this.slected.y === t ? this.send(this.menu[0].code) : (this.slected.x = e, this.slected.y = t))
                        },
                        hide: function () {
                            this.visible = !1, this.reset()
                        },
                        send: function (e) {
                            e = e.replace(/^\u001b/, "");
                            var t = "map world" === e ? "9 3 mps" : "".concat(e, " ").concat(this.code, " ").concat(this.item.code);
                            uni.$emit("send", t)
                        },
                        getTargetCode: function () {
                            return "".concat(this.menu[0].code, " ").concat(this.code, " ").concat(this.item.code).replace(/^\u001b/, "")
                        },
                        updateShortcutList: function (e) {
                            var t = this.getTargetCode(),
                                n = this.shortcutList;
                            e ? n.splice(e.index, 1) : n.push({
                                title: this.item.title,
                                code: t
                            }), s.globalSettings.set("shortcutList", n)
                        }
                    }
                };
            t.default = i
        },
        e79d: function (e, t, n) {
            var r = n("6e89");
            "string" === typeof r && (r = [
                [e.i, r, ""]
            ]), r.locals && (e.exports = r.locals);
            var a = n("4f06").default;
            a("0be87b38", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        e869: function (e, t, n) {
            t = e.exports = n("2350")(!1), t.push([e.i, ".mask[data-v-788ef30c]{position:fixed;top:0;left:0;right:0;bottom:0;display:none;background-color:rgba(0,0,0,.4)}.mask.show[data-v-788ef30c]{display:block}.title[data-v-788ef30c]{text-align:center\n  /* font-size: 1.2em; */}.content[data-v-788ef30c]{position:absolute;box-sizing:border-box;background-color:#fff;\n    /* background-color: rgba(0, 0, 0, 0.8); */\n    /* color: white; */top:50%;top:calc(50% + 22px);left:20px;right:20px;max-height:90%;max-height:calc(90% - 44px);overflow-y:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%);border:1px solid #ccc;border-radius:5px}uni-button[data-v-788ef30c]{\n    /* color: white; */\n    /* background-color: rgba(0, 0, 0, 0.4); */margin-top:3px;line-height:2.2}uni-button[data-v-788ef30c]:after{\n    /* border: 1px solid rgb(255, 255, 255); */}", ""])
        },
        e903: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n("6762"), n("2fdb"), n("a481");
            var r = n("55bb"),
                a = "//static.i-weather.cn/kdjl-helper/",
                s = {
                    props: {
                        item: {
                            type: Object
                        }
                    },
                    data: function () {
                        return {
                            color: r.globalSettings.get("color")
                        }
                    },
                    computed: {
                        typeImage: function () {
                            return 'url("'.concat(a, "/static/c/").concat(r.cList[this.item.type], '")')
                        }
                    },
                    methods: {
                        parseHtml: r.parseHtml,
                        animationend: function (e) {
                            e.target.remove()
                        },
                        parseTitle: function (e) {
                            e = e.replace(":", "");
                            var t = "ff0000<hr/>",
                                n = this.color && e.includes(t);
                            return e = e.replace(t, ""), n ? '<span style="color:red">'.concat(e, "</span>") : e
                        }
                    }
                };
            t.default = s
        },
        ecd6: function (e, t, n) {
            "use strict";
            e.exports = function (e, t, n, r) {
                var a = self || window;
                try {
                    try {
                        // var s;
                        // try {
                        //     s = new a.Blob([e])
                        // } catch (l) {
                        //     var i = a.BlobBuilder || a.WebKitBlobBuilder || a.MozBlobBuilder || a.MSBlobBuilder;
                        //     s = new i, s.append(e), s = s.getBlob()
                        // }
                        var c = a.URL || a.webkitURL,
                            // u = c.createObjectURL(s),
                            // o = new a[t](u, n);
                            o = new a[t](r);
                        // return c.revokeObjectURL(u), o
                        return o
                    } catch (l) {
                        return new a[t]("data:application/javascript,".concat(encodeURIComponent(e)), n)
                    }
                } catch (l) {
                    if (!r) throw Error("Inline worker is not supported");
                    return new a[t](r, n)
                }
            }
        },
        f2a2: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("9759"),
                a = n("a78d");
            for (var s in a) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return a[e]
                }))
            }(s);
            n("5a80");
            var i, c = n("f0c5"),
                u = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, "71cc677a", null, !1, r["a"], i);
            t["default"] = u.exports
        },
        f45c: function (e, t, n) {
            "use strict";
            var r = n("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n("6b54"), n("c5f6");
            var a = r(n("0dce")),
                s = r(n("ae2b")),
                i = {
                    components: {
                        uniNumberBox: s.default
                    },
                    mixins: [a.default],
                    data: function () {
                        return {
                            title: "",
                            text: "",
                            list: [],
                            value: [],
                            visible: !1,
                            code: "",
                            number: 0,
                            itemIndex: 0
                        }
                    },
                    computed: {
                        numberSync: function () {
                            for (var e = this.value, t = this.number, n = 0; n < e.length; n++) t -= e[n];
                            return t
                        }
                    },
                    methods: {
                        show: function (e) {
                            var t = e.data;
                            this.visible = !0;
                            var n = t.title,
                                r = t.text,
                                a = t.list,
                                s = t.code,
                                i = t.number;
                            this.title = n, this.text = r, this.list = a, this.value = this.list.map((function (e) {
                                return 0
                            })), this.code = s, this.number = i
                        },
                        hide: function () {
                            this.visible = !1, this.title = "", this.text = "", this.code = "", this.number = 0, this.itemIndex = 0, this.list = [], this.value = []
                        },
                        change: function (e, t) {
                            var n = this.list[e];
                            t = Number(t), t >= n.value && t <= n.value + this.value[e] + this.numberSync && this.value.splice(e, 1, t - n.value)
                        },
                        send: function () {
                            var e = this.code,
                                t = this.value.toString() + ",";
                            this.hide(), uni.$emit("send", "".concat(e, " ").concat(t))
                        },
                        cancel: function () {
                            this.hide(), uni.$emit("send", "cl")
                        }
                    }
                };
            t.default = i
        },
        f551: function (e, t, n) {
            var r = n("1102");
            "string" === typeof r && (r = [
                [e.i, r, ""]
            ]), r.locals && (e.exports = r.locals);
            var a = n("4f06").default;
            a("8aad1828", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        f75a: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("9037"),
                a = n("4d27");
            for (var s in a) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return a[e]
                }))
            }(s);
            n("6df2");
            var i, c = n("f0c5"),
                u = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, "b11b28fa", null, !1, r["a"], i);
            t["default"] = u.exports
        },
        f831: function (e, t, n) {
            t = e.exports = n("2350")(!1), t.push([e.i, ".mask[data-v-3c73b0f2]{position:fixed;top:0;left:0;right:0;bottom:0;display:none;background-color:rgba(0,0,0,.4)}.mask.show[data-v-3c73b0f2]{display:block}.title[data-v-3c73b0f2]{text-align:center\n  /* font-size: 1.2em; */}.content[data-v-3c73b0f2]{position:absolute;box-sizing:border-box;background-color:#fff;\n    /* background-color: rgba(0, 0, 0, 0.8); */\n    /* color: white; */top:50%;top:calc(50% + 22px);left:20px;right:20px;max-height:90%;max-height:calc(90% - 44px);overflow-y:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%);border:1px solid #ccc;border-radius:5px}uni-button[data-v-3c73b0f2]{\n    /* color: white; */\n    /* background-color: rgba(0, 0, 0, 0.4); */margin-top:3px;line-height:2.2}uni-button[data-v-3c73b0f2]:after{\n    /* border: 1px solid rgb(255, 255, 255); */}uni-label[data-v-3c73b0f2]{display:block;position:relative}uni-label[disabled][data-v-3c73b0f2]{opacity:.5}uni-label[ignore][data-v-3c73b0f2]{opacity:1}.item-btn[data-v-3c73b0f2]{font-family:iconfont;position:absolute;right:0;top:0;display:none;font-size:20px}uni-label[disabled] uni-text[data-v-3c73b0f2]{padding-right:20px}uni-label[disabled] .item-btn[data-v-3c73b0f2]{display:block}", ""])
        },
        fb05: function (e, t, n) {
            "use strict";
            var r = n("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n("7514"), n("28a5"), n("6762"), n("2fdb");
            var a = n("55bb"),
                s = r(n("0dce")),
                i = [],
                c = {
                    filters: {},
                    mixins: [s.default],
                    data: function () {
                        return {
                            title: "",
                            list: [],
                            visible: !1,
                            x: "",
                            selected: "",
                            ignore: []
                        }
                    },
                    methods: {
                        show: function (e) {
                            var t = this,
                                n = e.props,
                                r = void 0 === n ? {} : n,
                                s = e.data;
                            this.visible = !0, this.list = [], this.x = r.x || "";
                            var c = s.title,
                                u = s.list;
                            i = (0, a.clearText)(c).includes("卖出") ? a.globalSettings.get("keepItem").split(/[｜|]/).filter((function (e) {
                                return e.length
                            })) : [], this.title = c, this.list = u, this.$nextTick((function () {
                                t.$el.querySelector(".content").scrollTop = 0
                            }))
                        },
                        hide: function () {
                            this.visible = !1, this.title = "", this.x = "", this.selected = "", this.list = [], this.ignore = []
                        },
                        checkboxChange: function (e) {
                            var t = e.detail;
                            this.selected = t.value.map((function (e) {
                                return e + ",-1"
                            })).join(";")
                        },
                        send: function () {
                            var e = this.selected,
                                t = "".concat(this.x, " ").concat(e);
                            this.hide(), uni.$emit("send", e ? t : "cnt")
                        },
                        isKeep: function (e, t) {
                            return i.find((function (t) {
                                return (0, a.clearText)(e).includes(t)
                            })) && !this.ignore.includes(t)
                        },
                        lock: function (e, t) {
                            var n = this.ignore,
                                r = n.indexOf(e);
                            t ? r < 0 && n.push(e) : r >= 0 && n.splice(r, 1)
                        }
                    }
                };
            t.default = c
        },
        fe15: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("1139"),
                a = n.n(r);
            for (var s in r) ["default"].indexOf(s) < 0 && function (e) {
                n.d(t, e, (function () {
                    return r[e]
                }))
            }(s);
            t["default"] = a.a
        },
        ff38: function (e, t, n) {
            "use strict";
            var r;
            n.d(t, "b", (function () {
                return a
            })), n.d(t, "c", (function () {
                return s
            })), n.d(t, "a", (function () {
                return r
            }));
            var a = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-uni-view", {
                    staticClass: "mask",
                    class: {
                        show: e.visible
                    }
                }, [n("v-uni-view", {
                    staticClass: "content"
                }, [n("v-uni-view", {
                    staticClass: "text",
                    domProps: {
                        innerHTML: e._s(e.parseHtml(e.texts[0]))
                    }
                }), n("v-uni-view", {
                    staticClass: "input-box",
                    class: {
                        "input-box-fast": 1 === e.number
                    },
                    staticStyle: {
                        position: "relative"
                    }
                }, [n("v-uni-input", {
                    attrs: {
                        type: "text",
                        maxlength: "-1",
                        placeholder: "请输入..."
                    },
                    model: {
                        value: e.input,
                        callback: function (t) {
                            e.input = t
                        },
                        expression: "input"
                    }
                }), 1 === e.number ? n("v-uni-button", {
                    attrs: {
                        type: "default",
                        size: "mini"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.fast.apply(void 0, arguments)
                        }
                    }
                }, [e._v("＜")]) : e._e()], 1), e.number > 1 ? n("v-uni-view", {
                    staticClass: "text",
                    domProps: {
                        innerHTML: e._s(e.parseHtml(e.texts[1]))
                    }
                }) : e._e(), e.number > 1 ? n("v-uni-view", {
                    staticClass: "input-box",
                    staticStyle: {
                        position: "relative"
                    }
                }, [n("v-uni-input", {
                    attrs: {
                        type: "text",
                        maxlength: "-1",
                        placeholder: "请输入..."
                    },
                    model: {
                        value: e.input2,
                        callback: function (t) {
                            e.input2 = t
                        },
                        expression: "input2"
                    }
                })], 1) : e._e(), e.number > 1 ? n("v-uni-view", {
                    staticClass: "text",
                    domProps: {
                        innerHTML: e._s(e.parseHtml(e.texts[2]))
                    }
                }) : e._e(), e.number > 2 ? n("v-uni-view", {
                    staticClass: "input-box",
                    staticStyle: {
                        position: "relative"
                    }
                }, [n("v-uni-input", {
                    attrs: {
                        type: "text",
                        maxlength: "-1",
                        placeholder: "请输入..."
                    },
                    model: {
                        value: e.input3,
                        callback: function (t) {
                            e.input3 = t
                        },
                        expression: "input3"
                    }
                })], 1) : e._e(), e.number > 2 ? n("v-uni-view", {
                    staticClass: "text",
                    domProps: {
                        innerHTML: e._s(e.parseHtml(e.texts[3]))
                    }
                }) : e._e(), n("v-uni-button", {
                    staticClass: "send",
                    attrs: {
                        type: "default"
                    },
                    on: {
                        click: function (t) {
                            arguments[0] = t = e.$handleEvent(t), e.send.apply(void 0, arguments)
                        }
                    }
                }, [e._v("确定")])], 1)], 1)
            },
                s = []
        }
    }
]);