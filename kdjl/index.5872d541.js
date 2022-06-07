(function(e) {
    function t(t) {
        for (var o, i, s = t[0], l = t[1], p = t[2], f = 0, d = []; f < s.length; f++) i = s[f], Object.prototype.hasOwnProperty.call(a, i) && a[i] && d.push(a[i][0]), a[i] = 0;
        for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
        u && u(t);
        while (d.length) d.shift()();
        return r.push.apply(r, p || []), n()
    }

    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], o = !0, i = 1; i < n.length; i++) {
                var l = n[i];
                0 !== a[l] && (o = !1)
            }
            o && (r.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var o = {},
        a = {
            index: 0
        },
        r = [];

    function i(e) {
        return "kdjl/" + ({
            "pages-help-help": "pages-help-help",
            "pages-index-index~pages-login-login~pages-settings-settings": "pages-index-index~pages-login-login~pages-settings-settings",
            "pages-index-index~pages-settings-settings": "pages-index-index~pages-settings-settings",
            "pages-index-index": "pages-index-index",
            "pages-settings-settings": "pages-settings-settings",
            "pages-login-login": "pages-login-login"
        } [e] || e) + "." + {
            "pages-help-help": "e268d812",
            "pages-index-index~pages-login-login~pages-settings-settings": "d18c1be8",
            "pages-index-index~pages-settings-settings": "26bb33f0",
            "pages-index-index": "dfa85ad5",
            "pages-settings-settings": "d6fdf207",
            "pages-login-login": "29daad74"
        } [e] + ".js"
    }

    function s(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.e = function(e) {
        var t = [],
            n = a[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var o = new Promise((function(t, o) {
                    n = a[e] = [t, o]
                }));
                t.push(n[2] = o);
                var r, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, s.nc && l.setAttribute("nonce", s.nc), l.src = i(e);
                var p = new Error;
                r = function(t) {
                    l.onerror = l.onload = null, clearTimeout(f);
                    var n = a[e];
                    if (0 !== n) {
                        if (n) {
                            var o = t && ("load" === t.type ? "missing" : t.type),
                                r = t && t.target && t.target.src;
                            p.message = "Loading chunk " + e + " failed.\n(" + o + ": " + r + ")", p.name = "ChunkLoadError", p.type = o, p.request = r, n[1](p)
                        }
                        a[e] = void 0
                    }
                };
                var f = setTimeout((function() {
                    r({
                        type: "timeout",
                        target: l
                    })
                }), 12e4);
                l.onerror = l.onload = r, document.head.appendChild(l)
            } return Promise.all(t)
    }, s.m = e, s.c = o, s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) s.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "//static.i-weather.cn/kdjl-helper/", s.oe = function(e) {
        throw console.error(e), e
    };
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        p = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var f = 0; f < l.length; f++) t(l[f]);
    var u = p;
    r.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "034f": function(e, t, n) {
        "use strict";
        var o = n("1952"),
            a = n.n(o);
        a.a
    },
    "0c69": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            onLaunch: function() {
                var e = document.querySelector(".uni-actionsheet");
                e && e.addEventListener("touchmove", (function(e) {
                    e.stopPropagation()
                })), document.body.style.fontSize = "16px";
                var t = "//static.i-weather.cn/kdjl-helper/",
                    n = 5e3,
                    o = uni.createInnerAudioContext();

                function a() {
                    setTimeout((function() {
                        o.play()
                    }), n)
                }
                o.src = t + "static/no_notice.mp3", o.loop = !0, o.volume = 0, o.onPause(a), o.onEnded(a), o.onError(a), document.body.addEventListener("click", (function() {
                    o.play()
                }))
            },
            onShow: function() {},
            onHide: function() {}
        };
        t.default = o
    },
    1952: function(e, t, n) {
        var o = n("3359");
        "string" === typeof o && (o = [
            [e.i, o, ""]
        ]), o.locals && (e.exports = o.locals);
        var a = n("4f06").default;
        a("78eaa406", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "23be": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("0c69"),
            a = n.n(o);
        for (var r in o)["default"].indexOf(r) < 0 && function(e) {
            n.d(t, e, (function() {
                return o[e]
            }))
        }(r);
        t["default"] = a.a
    },
    "265d": function(e, t, n) {
        "use strict";
        var o;
        n.d(t, "b", (function() {
            return a
        })), n.d(t, "c", (function() {
            return r
        })), n.d(t, "a", (function() {
            return o
        }));
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("App", {
                    attrs: {
                        keepAliveInclude: e.keepAliveInclude
                    }
                })
            },
            r = []
    },
    3359: function(e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, '/* x0popup - v0.3.3 | http://gao-sun.github.io/x0popup */.x0l,.x0l .ball{position:absolute}.xi-error span:before,.xi-info span:before,.xi-ok span:before,.xi-warning span:before{content:"";box-sizing:border-box}.x0l{width:120px;height:10px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.x0l .ball{width:0;height:0;border:5px solid #000;border-radius:30%;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.x0l .ball-1{border-color:#555;-webkit-animation-name:BallFly-1;animation-name:BallFly-1}.x0l .ball-2{border-color:#777;-webkit-animation-name:BallFly-2;animation-name:BallFly-2}.x0l .ball-3{border-color:#999;-webkit-animation-name:BallFly-3;animation-name:BallFly-3}.x0l .ball-4{border-color:#bbb;-webkit-animation-name:BallFly-4;animation-name:BallFly-4}@-webkit-keyframes BallFly-1{0%,88%,to{margin-left:0}38%,50%{margin-left:110px}}@keyframes BallFly-1{0%,88%,to{margin-left:0}38%,50%{margin-left:110px}}@-webkit-keyframes BallFly-2{0%,4%,92%,to{margin-left:0}42%,54%{margin-left:110px}}@keyframes BallFly-2{0%,4%,92%,to{margin-left:0}42%,54%{margin-left:110px}}@-webkit-keyframes BallFly-3{0%,8%,96%,to{margin-left:0}46%,58%{margin-left:110px}}@keyframes BallFly-3{0%,8%,96%,to{margin-left:0}46%,58%{margin-left:110px}}@-webkit-keyframes BallFly-4{0%,12%,to{margin-left:0}50%,62%{margin-left:110px}}@keyframes BallFly-4{0%,12%,to{margin-left:0}50%,62%{margin-left:110px}}.x0p-overlay{position:fixed;left:0;top:0;width:100%;height:100%;background-color:hsla(0,0%,70.6%,.8);z-index:99998;-webkit-animation:x0pfadeIn .5s ease;animation:x0pfadeIn .5s ease}.x0p,.xi{left:50%}.x0p{position:fixed;top:50%;font-size:16px;background-color:#fff;-webkit-transform:translate(-50%,-60%);transform:translate(-50%,-60%);font-family:STHeiti,Helvetica;-webkit-animation:x0ppop .45s ease;animation:x0ppop .45s ease;z-index:99999}.x0p-overlay.no-animation,.x0p.no-animation,.x0p.no-animation .xi>span:before{-webkit-animation:none;animation:none}@-webkit-keyframes x0pfadeIn{0%{opacity:0}to{opacity:1}}@keyframes x0pfadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes x0ppop{0%{-webkit-transform:scale(.9) translate(-55%,-60%);transform:scale(.9) translate(-55%,-60%);opacity:.3}50%{-webkit-transform:scale(1.1) translate(-45%,-60%);transform:scale(1.1) translate(-45%,-60%);opacity:.7}to{-webkit-transform:scale(1) translate(-50%,-60%);transform:scale(1) translate(-50%,-60%);opacity:1}}@keyframes x0ppop{0%{-webkit-transform:scale(.9) translate(-55%,-60%);transform:scale(.9) translate(-55%,-60%);opacity:.3}50%{-webkit-transform:scale(1.1) translate(-45%,-60%);transform:scale(1.1) translate(-45%,-60%);opacity:.7}to{-webkit-transform:scale(1) translate(-50%,-60%);transform:scale(1) translate(-50%,-60%);opacity:1}}@-webkit-keyframes x0pslideUp{0%{-webkit-transform:translate(-50%,200%);transform:translate(-50%,200%);opacity:0}to{-webkit-transform:translate(-50%,-60%);transform:translate(-50%,-60%);opacity:1}}@keyframes x0pslideUp{0%{-webkit-transform:translate(-50%,200%);transform:translate(-50%,200%);opacity:0}to{-webkit-transform:translate(-50%,-60%);transform:translate(-50%,-60%);opacity:1}}@-webkit-keyframes x0pslideDown{0%{-webkit-transform:translate(-50%,-260%);transform:translate(-50%,-260%);opacity:0}to{-webkit-transform:translate(-50%,-60%);transform:translate(-50%,-60%);opacity:1}}@keyframes x0pslideDown{0%{-webkit-transform:translate(-50%,-260%);transform:translate(-50%,-260%);opacity:0}to{-webkit-transform:translate(-50%,-60%);transform:translate(-50%,-60%);opacity:1}}.xi{position:absolute;width:80px;height:80px;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.xi-ok span:before{position:absolute;height:8%;border-radius:10px;background-color:#60bf80}.xi-ok-left:before{width:40%;left:15%;top:50%;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:showOKLeft .6s ease;animation:showOKLeft .6s ease}.xi-ok-right:before{width:60%;left:35%;top:42%;-webkit-transform:rotate(-50deg);transform:rotate(-50deg);-webkit-animation:showOKRight .75s ease;animation:showOKRight .75s ease}@-webkit-keyframes showOKLeft{0%,75%{-webkit-transform:rotate(45deg);transform:rotate(45deg);width:0;left:21%;top:37%}to{-webkit-transform:rotate(45deg);transform:rotate(45deg);width:40%;left:15%;top:50%}}@keyframes showOKLeft{0%,75%{-webkit-transform:rotate(45deg);transform:rotate(45deg);width:0;left:21%;top:37%}to{-webkit-transform:rotate(45deg);transform:rotate(45deg);width:40%;left:15%;top:50%}}@-webkit-keyframes showOKRight{0%,80%{-webkit-transform:rotate(-50deg);transform:rotate(-50deg);width:0;left:46%;top:65%}to{-webkit-transform:rotate(-50deg);transform:rotate(-50deg);width:60%;left:35%;top:42%}}@keyframes showOKRight{0%,80%{-webkit-transform:rotate(-50deg);transform:rotate(-50deg);width:0;left:46%;top:65%}to{-webkit-transform:rotate(-50deg);transform:rotate(-50deg);width:60%;left:35%;top:42%}}.xi-info span:before{position:absolute;background-color:#5080df}.xi-info-circle:before{width:11%;height:11%;border-radius:50%;left:50%;top:15%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.xi-info-line:before{width:8%;height:45%;border-radius:10px;left:50%;top:35%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.xi-warning span:before{position:absolute;background-color:#f29f3f}.xi-warning-circle:before{width:11%;height:11%;border-radius:50%;left:50%;top:71%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.xi-warning-line:before{width:8%;height:45%;border-radius:10px;left:50%;top:15%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.xi-error span:before{position:absolute;background-color:#ef6080;width:8%;border-radius:10px}.xi-error-right:before{height:80%;top:10%;left:50%;-webkit-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg);-webkit-animation:errorDrawRight .6s ease;animation:errorDrawRight .6s ease}.xi-error-left:before{height:80%;top:10%;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg);-webkit-animation:errorDrawLeft .75s ease;animation:errorDrawLeft .75s ease}@-webkit-keyframes errorDrawLeft{0%,75%{height:0;top:22%;left:23%}to{height:80%;top:10%;left:50%}}@keyframes errorDrawLeft{0%,75%{height:0;top:22%;left:23%}to{height:80%;top:10%;left:50%}}@-webkit-keyframes errorDrawRight{0%,80%{height:0;top:22%;left:76%}to{height:80%;top:10%;left:50%}}@keyframes errorDrawRight{0%,80%{height:0;top:22%;left:76%}to{height:80%;top:10%;left:50%}}.noscroll{overflow:hidden}.x0p.default .button,.x0p.default .icon-wrapper,.x0p.default .text-pure-wrapper,.x0p.default .text-wrapper{display:inline-block;vertical-align:top}.x0p.default .icon-wrapper{position:relative;width:35%;height:100%}.x0p.default .text-wrapper{position:relative;width:65%;height:100%;margin:0 auto}.x0p.default .text-pure-wrapper{position:relative;width:100%;height:100%}.x0p.default .text-anchor{position:absolute;top:50%;width:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.x0p.default .content{width:100%;height:80%;height:calc(100% - 40px)}.x0p.default.no-button .content{height:100%}.x0p.default .buttons{width:100%;height:40px;position:absolute;bottom:0;background-color:#eee}.x0p.default .text-wrapper .input,.x0p.default .text-wrapper .text,.x0p.default .text-wrapper .title{padding-left:0}.x0p.default .title{padding:0 25px;box-sizing:border-box;font-size:28px;font-weight:700;color:#333}.x0p.default .text{margin-top:5%;padding:0 25px;font-size:18px;color:#777}.x0p.default .error{margin-top:1px;padding:5px 10px;font-size:13px;background-color:#fe9999;color:#fcfcfc}.x0p.default .input{padding:0 30px}.x0p.default uni-input[type=password],.x0p.default uni-input[type=text]{margin-top:7%;padding:8px 10px;outline:0;background-color:#f9f9f9;border-width:0 0 1px;border-style:solid;border-color:#aaa;font-size:18px;box-sizing:border-box;width:100%;color:#aaa;-webkit-transition:all ease .3s;transition:all ease .3s}.x0p.default uni-input[type=password]:focus,.x0p.default uni-input[type=text]:focus{border-color:#5080df;color:#5080df}.x0p.default .button{text-align:center;padding:12px 0;font-size:16px;margin-bottom:0;box-sizing:border-box;border:0;outline-width:0;outline-style:solid;outline-offset:-1px}.x0p.default .button-outline:focus{outline-width:1px;-webkit-animation:x0pButtonOutline .3s ease;animation:x0pButtonOutline .3s ease}.x0p.default .button:hover{cursor:pointer}@-webkit-keyframes x0pButtonOutline{0%{outline-offset:7px}to{outline-offset:-1px}}@keyframes x0pButtonOutline{0%{outline-offset:7px}to{outline-offset:-1px}}.x0p.default .button-ok{background-color:#60bf80;outline-color:#207f40;color:#fefefe}.x0p.default .button-ok:hover{background-color:#50af70}.x0p.default .button-cancel{background-color:#eee;outline-color:#aaa;color:#666}.x0p.default .button-cancel:hover{background-color:#e3e3e3}.x0p.default .button-warning{background-color:#f29f3f;outline-color:#b25f00;color:#fefefe}.x0p.default .button-warning:hover{background-color:#e28f2f}.x0p.default .button-info{background-color:#6090ef;outline-color:#2050af;color:#fefefe}.x0p.default .button-info:hover{background-color:#5080df}.x0p.default .button-error{background-color:#ef6080;outline-color:#af2040;color:#fefefe}.x0p.default .button-error:hover{background-color:#df5070}#x0p-input{margin-top:7%;padding:8px 10px;outline:none;background-color:#f9f9f9;border-width:0 0 1px 0;border-style:solid;border-color:#aaa;\r\n  /*border-radius: 5px;*/font-size:18px;box-sizing:border-box;width:100%;color:#aaa;-webkit-transition:all ease .3s;transition:all ease .3s}#x0p-input:focus{border-color:#5080df;color:#5080df}uni-page-body{word-break:break-word}.content{padding:10px}\n/* button[type="primary"] {\r\n  background-color: #1e064f;\r\n}\r\n\r\nbutton[type="primary"]::after {\r\n  border: 2px solid #ece4da;\r\n} */::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}\n/* 允许滚动 */.uni-actionsheet{max-height:80%;overflow:auto}\n/* 禁用标题文字选择 */uni-page-head .uni-page-head-bd{-webkit-user-select:none;user-select:none}', ""])
    },
    "3dfd": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("265d"),
            a = n("23be");
        for (var r in a)["default"].indexOf(r) < 0 && function(e) {
            n.d(t, e, (function() {
                return a[e]
            }))
        }(r);
        n("034f");
        var i, s = n("f0c5"),
            l = Object(s["a"])(a["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], i);
        t["default"] = l.exports
    },
    "56d7": function(e, t, n) {
        "use strict";
        var o = n("4ea4");
        n("8e6e"), n("ac6a"), n("456d");
        var a = o(n("bd86"));
        n("cadf"), n("551c"), n("f751"), n("097d"), n("6cdc"), n("1c31");
        var r = o(n("e143")),
            i = o(n("3dfd"));

        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function(t) {
                    (0, a.default)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        r.default.config.productionTip = !1, i.default.mpType = "app";
        var p = new r.default(l({}, i.default));
        p.$mount()
    },
    "6cdc": function(e, t, n) {
        "use strict";
        (function(e) {
            var t = n("4ea4"),
                o = t(n("e143"));
            e["____868FC32____"] = !0, delete e["____868FC32____"], e.__uniConfig = {
                globalStyle: {
                    navigationBarTextStyle: "black",
                    navigationBarTitleText: "口袋精灵助手",
                    navigationBarBackgroundColor: "#F8F8F8",
                    backgroundColor: "#F8F8F8"
                }
            }, e.__uniConfig.router = {
                mode: "hash",
                base: "/kdjl-helper/"
            }, e.__uniConfig["async"] = {
                loading: "AsyncLoading",
                error: "AsyncError",
                delay: 200,
                timeout: 6e4
            }, e.__uniConfig.debug = !1, e.__uniConfig.networkTimeout = {
                request: 6e3,
                connectSocket: 6e3,
                uploadFile: 6e3,
                downloadFile: 6e3
            }, e.__uniConfig.sdkConfigs = {}, e.__uniConfig.qqMapKey = "XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2", e.__uniConfig.nvue = {
                "flex-direction": "column"
            }, o.default.component("pages-index-index", (function(e) {
                var t = {
                    component: Promise.all([n.e("pages-index-index~pages-login-login~pages-settings-settings"), n.e("pages-index-index~pages-settings-settings"), n.e("pages-index-index")]).then(function() {
                        return e(n("f75a"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), o.default.component("pages-login-login", (function(e) {
                var t = {
                    component: Promise.all([n.e("pages-index-index~pages-login-login~pages-settings-settings"), n.e("pages-login-login")]).then(function() {
                        return e(n("a86a"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), o.default.component("pages-settings-settings", (function(e) {
                var t = {
                    component: Promise.all([n.e("pages-index-index~pages-login-login~pages-settings-settings"), n.e("pages-index-index~pages-settings-settings"), n.e("pages-settings-settings")]).then(function() {
                        return e(n("b653"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), o.default.component("pages-help-help", (function(e) {
                var t = {
                    component: n.e("pages-help-help").then(function() {
                        return e(n("7a3e"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), e.__uniRoutes = [{
                path: "/",
                alias: "/pages/index/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isEntry: !0
                            }, __uniConfig.globalStyle, {
                                navigationBarTitleText: "口袋精灵助手",
                                titleNView: {
                                    buttons: [{
                                        text: "自动",
                                        fontSize: "16px",
                                        float: "left"
                                    }, {
                                        text: "快捷",
                                        fontSize: "16px",
                                        float: "left"
                                    }, {
                                        text: "设置",
                                        fontSize: "16px",
                                        float: "right"
                                    }, {
                                        text: "帮助",
                                        fontSize: "16px",
                                        float: "right"
                                    }]
                                }
                            })
                        }, [e("pages-index-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 1,
                    name: "pages-index-index",
                    isNVue: !1,
                    pagePath: "pages/index/index",
                    isQuit: !0,
                    isEntry: !0,
                    windowTop: 44
                }
            }, {
                path: "/pages/login/login",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "登录"
                            })
                        }, [e("pages-login-login", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-login-login",
                    isNVue: !1,
                    pagePath: "pages/login/login",
                    windowTop: 44
                }
            }, {
                path: "/pages/settings/settings",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "设置"
                            })
                        }, [e("pages-settings-settings", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-settings-settings",
                    isNVue: !1,
                    pagePath: "pages/settings/settings",
                    windowTop: 44
                }
            }, {
                path: "/pages/help/help",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "帮助"
                            })
                        }, [e("pages-help-help", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-help-help",
                    isNVue: !1,
                    pagePath: "pages/help/help",
                    windowTop: 44
                }
            }, {
                path: "/preview-image",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-preview-image", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "preview-image",
                    pagePath: "/preview-image"
                }
            }, {
                path: "/choose-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-choose-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "choose-location",
                    pagePath: "/choose-location"
                }
            }, {
                path: "/open-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-open-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "open-location",
                    pagePath: "/open-location"
                }
            }]
        }).call(this, n("c8ba"))
    }
});