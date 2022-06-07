(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-index-index~pages-login-login~pages-settings-settings"], {
        "1af6": function(t, e, n) {
            var r = n("63b6");
            r(r.S, "Array", {
                isArray: n("9003")
            })
        },
        "20fd": function(t, e, n) {
            "use strict";
            var r = n("d9f6"),
                a = n("aebd");
            t.exports = function(t, e, n) {
                e in t ? r.f(t, e, a(0, n)) : t[e] = n
            }
        },
        3702: function(t, e, n) {
            var r = n("481b"),
                a = n("5168")("iterator"),
                c = Array.prototype;
            t.exports = function(t) {
                return void 0 !== t && (r.Array === t || c[a] === t)
            }
        },
        "40c3": function(t, e, n) {
            var r = n("6b4c"),
                a = n("5168")("toStringTag"),
                c = "Arguments" == r(function() {
                    return arguments
                }()),
                o = function(t, e) {
                    try {
                        return t[e]
                    } catch (n) {}
                };
            t.exports = function(t) {
                var e, n, i;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = o(e = Object(t), a)) ? n : c ? r(e) : "Object" == (i = r(e)) && "function" == typeof e.callee ? "Arguments" : i
            }
        },
        "4ee1": function(t, e, n) {
            var r = n("5168")("iterator"),
                a = !1;
            try {
                var c = [7][r]();
                c["return"] = function() {
                    a = !0
                }, Array.from(c, (function() {
                    throw 2
                }))
            } catch (o) {}
            t.exports = function(t, e) {
                if (!e && !a) return !1;
                var n = !1;
                try {
                    var c = [7],
                        i = c[r]();
                    i.next = function() {
                        return {
                            done: n = !0
                        }
                    }, c[r] = function() {
                        return i
                    }, t(c)
                } catch (o) {}
                return n
            }
        },
        "549b": function(t, e, n) {
            "use strict";
            var r = n("d864"),
                a = n("63b6"),
                c = n("241e"),
                o = n("b0dc"),
                i = n("3702"),
                p = n("b447"),
                g = n("20fd"),
                l = n("7cd6");
            a(a.S + a.F * !n("4ee1")((function(t) {
                Array.from(t)
            })), "Array", {
                from: function(t) {
                    var e, n, a, u, s = c(t),
                        x = "function" == typeof this ? this : Array,
                        f = arguments.length,
                        d = f > 1 ? arguments[1] : void 0,
                        m = void 0 !== d,
                        v = 0,
                        h = l(s);
                    if (m && (d = r(d, f > 2 ? arguments[2] : void 0, 2)), void 0 == h || x == Array && i(h))
                        for (e = p(s.length), n = new x(e); e > v; v++) g(n, v, m ? d(s[v], v) : s[v]);
                    else
                        for (u = h.call(s), n = new x; !(a = u.next()).done; v++) g(n, v, m ? o(u, d, [a.value, v], !0) : a.value);
                    return n.length = v, n
                }
            })
        },
        "55bb": function(t, e, n) {
            "use strict";
            var r = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.cList = void 0, Object.defineProperty(e, "chars", {
                enumerable: !0,
                get: function() {
                    return c.chars
                }
            }), Object.defineProperty(e, "clearText", {
                enumerable: !0,
                get: function() {
                    return c.clearText
                }
            }), e.csysList = void 0, e.filterHandle = d, e.getHosts = p, e.getMainData = void 0, e.getUserInfo = b, e.isDev = e.globalSettings = void 0, e.parseColor = x, e.parseHtml = f, e.parseImgs = s, Object.defineProperty(e, "parseMsg", {
                enumerable: !0,
                get: function() {
                    return c.parseMsg
                }
            }), e.preImgs = u, Object.defineProperty(e, "removeColor", {
                enumerable: !0,
                get: function() {
                    return c.removeColor
                }
            }), e.serverList = void 0, e.setUserInfo = m, Object.defineProperty(e, "showActionSheet", {
                enumerable: !0,
                get: function() {
                    return c.showActionSheet
                }
            }), e.userSettings = e.storage = void 0, n("ac6a"), n("c5f6");
            var a = r(n("768b"));
            n("4917"), n("28a5"), n("a481"), n("7514");
            var c = n("f161");
            window.parseMsg = c.parseMsg, window.clearText = c.clearText;
            var o = {
                getItem: function(t) {
                    return sessionStorage.getItem(t) || localStorage.getItem(t)
                },
                setItem: function(t, e) {
                    sessionStorage.setItem(t, e), localStorage.setItem(t, e)
                },
                data: function() {
                    for (var t = {}, e = 0; e < localStorage.length; e++) {
                        var n = localStorage.key(e);
                        t[n] = localStorage.getItem(n)
                    }
                    for (var r = 0; r < sessionStorage.length; r++) {
                        var a = sessionStorage.key(r);
                        t[a] = sessionStorage.getItem(a)
                    }
                    return t
                }
            };
            e.storage = o;
            var i = ["风车镇(新开)", "迷失谷", "忆童年", "麒麟殿", "雪心禅", "冰晶崖", "闪光镇", "下玄月", "上玄月", "女神湖", "天之翼", "海豚湾", "七夜岛", "英雄团", "恋爱季", "海之韵", "奇缘星", "皇骑殿", "圣光殿", "精灵物语", "梦幻精灵", "宠物家园", "梦境传说", "创世大陆", "梦之长空", "幻月迷情", "精灵之歌", "冰玲珑", "青色河", "繁星醉", "朔月情", "精灵梦", "彩云谷", "北极雪", "风之翼", "水晶湖", "金沙堡", "木桶镇", "忘忧岛", "月影梦", "咕噜村", "梦见镇", "云之国", "企鹅村", "静逸林", "童心意", "雨梦林", "寒冰镇", "妙树源", "梦奇缘", "七星岩", "花语梦", "奇遇镇", "爱琴海", "紫雾林", "冰灵泉", "彩虹翼", "风雪谷", "红枫林", "回音泉", "光霞滩", "流星崖", "世界树", "魔法屋"];

            function p() {
                var t = w.get("host"),
                    e = [{
                        host: "221.181.70.11",
                        title: "高速"
                    }, {
                        host: "221.181.70.12",
                        title: "高速"
                    }, {
                        host: "221.181.70.13",
                        title: "高速"
                    }],
                    n = e.find((function(e) {
                        var n = e.host;
                        return n === t
                    })) || e[0];
                return [n, {
                    host: "221.181.70.30",
                    title: "普通"
                }, {
                    host: "211.139.94.154",
                    title: "其他"
                }]
            }
            e.serverList = i;
            var g = [
                [":-)", ":-D", ":-(", "X:(", "8-|", ":`(", "|-)", "X-|", "8-D", ":%", "[H]", "[X]", "Z-)", "[R]", "[S]", ":-O", "[Y]", "[N]", "pic", "link", "warn", "info", "b", "nb", "r", "f", "p", "rht", "ght", "chat", "dice", "flw", "say", "talk", "ok", "del", "#", "#", "#", "#", "#", "#", "#", "jian", "jia", "face0", "face1", "face2", "face3", "face4", "face5", "face6", "face7", "face8", "face9", "face10", "face11", "face12", "face13", "face14", "face15", "face16", "face17", "face18", "face19", "face20", "face21", "face22", "face23", "face24", "face25", "face26", "face27", "face28", "face29", "face30", "face31", "face32", "face33", "face34", "face35", "face36", "face37", "face38", "face39", "face40", "face41", "face42", "face43", "face44", "face45", "face46", "face47", "face48", "face49", "face50", "face51", "face52", "face53"],
                ["la", "ra", "ua", "da", "l", "up", "u", "n", "d1", "d2", "d3", "d4"],
                ["s1", "s2", "s3", "a1", "a2", "a3", "gr", "sr", "sg", "lg", "gt", "bk", "dd", "boh", "crd", "box", "m1", "m2", "m3", "m4", "m5", "y1", "y2", "y3", "y4", "y5", "y6", "y7", "y8", "y9", "y10", "y11", "y12", "y13", "y14", "y15", "y16", "y17", "y18", "y19", "y20", "y21", "dt1", "dt2", "dt3", "dt4", "dt5", "dt6", "dt7", "dt8", "dt9", "x0", "x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8", "x9", "x10", "x11", "x12", "x13", "x14", "x15", "x16", "x17", "x18", "x19", "x20", "x21", "x22", "x23", "x24", "x25", "x26", "x27"]
            ];
            e.csysList = g;
            var l = {
                14: "14-1-18x19-1.png",
                15: "15-1-16x24-2.png",
                17: "17-1-18x19-1.png",
                18: "18-1-18x18-1.png",
                19: "19-1-17x16-4.png",
                20: "20-1-22x25-1.png",
                21: "21-4-27x26-8.png",
                22: "22-1-16x32-1.png",
                23: "23-1-24x28-2.png",
                29: "29-4-16x18-3.png",
                31: "31-1-19x17-1.png",
                32: "32-1-19x17-1.png",
                33: "33-1-19x17-1.png",
                34: "34-1-19x17-1.png",
                35: "35-1-16x32-1.png",
                37: "37-1-64x64-3.png",
                39: "39-4-16x18-3.png",
                42: "42-10-29x32-14.png",
                51: "51-1-22x22-1.png",
                53: "53-12-26x39-14.png",
                54: "54-12-25x37-14.png",
                56: "56-1-22x21-2.png",
                57: "57-8-32x32-4.png",
                58: "58-8-32x32-4.png",
                59: "59-8-32x32-4.png",
                60: "60-8-20x37-1.png",
                61: "61-8-25x37-1.png",
                77: "77-5-12x12-9.png",
                105: "105-10-21x24-9.png",
                106: "106-10-18x35-2.png",
                108: "108-10-20x25-3.png",
                117: "117-10-24x32-4.png",
                121: "121-10-21x23-9.png",
                129: "129-10-37x44-5.png",
                133: "133-1-23x37-1.png",
                156: "156-10-26x32-3.png",
                160: "160-8-32x32-4.png",
                161: "161-8-24x32-8.png",
                162: "162-8-24x38-3.png",
                248: "248-8-28x31-3.png",
                249: "249-8-41x48-4.png",
                250: "250-8-48x48-4.png",
                251: "251-8-26x40-3.png",
                252: "252-8-33x29-3.png",
                255: "255-8-35x35-8.png",
                256: "256-8-29x30-9.png",
                257: "257-12-44x40-14.png",
                259: "259-12-40x42-14.png",
                261: "261-12-23x37-8.png",
                263: "263-12-31x39-10.png",
                265: "265-12-42x38-14.png",
                267: "267-12-46x38-14.png",
                269: "269-12-29x38-14.png",
                271: "271-12-25x38-14.png",
                273: "273-12-21x38-14.png",
                275: "275-12-21x38-16.png",
                277: "277-12-21x38-11.png",
                279: "279-12-23x39-10.png",
                281: "281-8-42x44-3.png",
                283: "283-8-42x44-3.png",
                285: "285-12-24x40-14.png",
                287: "287-12-26x39-14.png",
                289: "289-8-31x44-10.png",
                291: "291-8-58x44-9.png",
                297: "297-8-26x29-5.png",
                301: "301-10-32x41-8.png",
                302: "302-10-34x36-6.png",
                303: "303-8-40x45-4.png",
                305: "305-8-44x51-2.png",
                307: "307-8-49x45-2.png",
                309: "309-1-23x32-1.png",
                310: "310-10-38x44-10.png",
                313: "313-12-51x40-14.png",
                315: "315-12-49x39-14.png",
                317: "317-12-26x38-15.png",
                319: "319-12-23x39-14.png",
                340: "340-8-40x42-3.png",
                341: "341-8-26x29-3.png",
                342: "342-8-40x40-3.png",
                345: "345-8-43x33-4.png",
                350: "350-8-42x48-4.png",
                365: "365-1-16x16-2.png",
                366: "366-1-16x16-1.png",
                367: "367-1-16x16-1.png",
                368: "368-1-16x16-1.png",
                369: "369-1-16x16-2.png",
                370: "370-1-16x16-1.png",
                371: "371-1-16x16-1.png",
                372: "372-1-16x16-2.png",
                373: "373-1-16x16-2.png",
                374: "374-1-16x16-2.png",
                375: "375-1-16x16-2.png",
                376: "376-1-16x16-2.png",
                377: "377-1-16x16-2.png",
                378: "378-1-16x16-2.png",
                379: "379-1-16x16-2.png",
                380: "380-1-16x16-2.png",
                381: "381-1-16x16-2.png",
                382: "382-1-16x16-2.png",
                383: "383-1-16x16-2.png",
                384: "384-1-16x16-2.png",
                385: "385-1-16x16-2.png",
                389: "389-8-34x31-4.png",
                391: "391-8-41x49-4.png",
                421: "421-12-44x42-12.png",
                422: "422-12-40x39-11.png",
                425: "425-8-60x49-4.png",
                427: "427-8-56x55-3.png",
                429: "429-8-53x59-4.png",
                438: "438-8-39x30-4.png",
                440: "440-8-60x74-2.png",
                442: "442-8-53x44-2.png",
                461: "461-8-32x36-15.png",
                465: "465-8-57x44-4.png",
                1e3: "1000-1-32x32-18.png",
                1001: "1001-1-32x32-18.png",
                1002: "1002-1-32x32-20.png",
                1003: "1003-1-32x32-14.png",
                1004: "1004-1-32x32-24.png",
                1005: "1005-1-32x32-16.png",
                1006: "1006-1-32x32-51.png",
                1007: "1007-1-32x32-16.png",
                1008: "1008-1-32x32-13.png",
                1009: "1009-1-32x32-13.png",
                1010: "1010-1-32x32-13.png",
                1011: "1011-1-32x32-14.png",
                1012: "1012-1-32x32-16.png",
                1013: "1013-1-32x32-36.png",
                1014: "1014-1-32x32-22.png",
                1015: "1015-1-8x8-2.png",
                1016: "1016-1-32x32-4.png",
                1017: "1017-1-32x32-15.png",
                1018: "1018-1-32x32-26.png",
                1019: "1019-1-32x32-20.png",
                1020: "1020-1-32x32-10.png",
                1021: "1021-1-16x16-25.png",
                1022: "1022-1-32x32-2.png",
                1023: "1023-1-32x32-13.png",
                1024: "1024-1-32x32-13.png",
                1025: "1025-1-32x32-3.png",
                1026: "1026-1-32x32-15.png",
                1027: "1027-1-32x32-11.png",
                1028: "1028-1-32x32-24.png",
                1029: "1029-1-32x32-16.png",
                1030: "1030-1-32x32-9.png",
                1031: "1031-1-32x32-9.png",
                1032: "1032-1-32x32-33.png",
                1033: "1033-1-32x32-6.png",
                1034: "1034-1-32x32-7.png",
                1035: "1035-1-16x16-6.png",
                1036: "1036-1-32x32-12.png",
                1037: "1037-1-32x32-18.png",
                1038: "1038-1-32x32-6.png",
                1039: "1039-1-16x16-13.png",
                1040: "1040-1-32x32-5.png",
                1041: "1041-1-32x32-1.png",
                1042: "1042-1-32x32-6.png",
                1043: "1043-1-32x32-16.png",
                2e3: "2000-3-18x38-2.png",
                2001: "2001-3-16x37-3.png",
                2004: "2004-3-18x37-2.png",
                2005: "2005-3-19x39-2.png",
                2006: "2006-3-18x37-2.png",
                2007: "2007-3-22x37-2.png",
                2012: "2012-3-22x38-3.png",
                2013: "2013-3-17x37-2.png",
                2014: "2014-3-17x38-2.png",
                2015: "2015-3-20x36-2.png",
                2016: "2016-8-16x36-2.png",
                2017: "2017-3-20x38-3.png",
                2021: "2021-8-32x32-3.png",
                2025: "2025-8-48x53-4.png",
                2026: "2026-8-48x51-1.png",
                2027: "2027-8-48x51-1.png",
                2035: "2035-8-23x38-12.png",
                2036: "2036-8-23x37-12.png",
                2040: "2040-3-22x38-3.png",
                2053: "2053-10-64x49-4.png",
                2056: "2056-10-19x37-2.png",
                2572: "2572-8-66x50-1.png",
                2592: "2592-8-66x50-1.png",
                2612: "2612-8-66x50-1.png",
                2632: "2632-8-66x50-1.png",
                2652: "2652-8-66x50-1.png",
                2672: "2672-8-66x50-1.png",
                2692: "2692-8-66x50-1.png",
                2712: "2712-8-66x50-1.png",
                2732: "2732-8-66x50-1.png",
                2752: "2752-8-66x50-1.png",
                2772: "2772-8-66x50-2.png",
                2792: "2792-8-66x50-2.png",
                2852: "2852-8-66x50-1.png",
                2872: "2872-8-66x50-1.png",
                3132: "3132-8-66x50-1.png",
                3152: "3152-8-66x50-1.png",
                3172: "3172-8-66x50-1.png",
                3192: "3192-8-66x50-1.png",
                3612: "3612-8-66x50-2.png",
                4001: "4001-8-44x44-8.png",
                4002: "4002-8-43x55-4.png",
                5e3: "5000-9-32x32-10.png",
                5302: "5302-8-66x50-1.png",
                5402: "5402-8-66x50-2.png",
                a53: "a53-8-34x39-4.png",
                a54: "a54-8-34x39-4.png"
            };

            function u() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return t.replace(/\{.+?\}/g, (function(t) {
                    return t.replace(/\[/g, "【").replace(/\]/g, "】").replace(/\|/g, "▎")
                }))
            }

            function s() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";

                function e(t) {
                    var e = "kdjl/";
                    t = t.replace(/【/g, "[").replace(/】/g, "]").replace(/▎/g, "|");
                    var n = t.split("&").filter((function(t) {
                        return t
                    }));
                    return n.map((function(t, n) {
                        var r, a = g[2].indexOf(t),
                            c = 0,
                            o = 0,
                            i = "auto",
                            p = "auto";
                        if (a >= 0) r = e + (a >= 51 ? "item2.png" : "item.png"), a %= 51, c = 18 * a, p = "100%";
                        else {
                            var u = g[0].indexOf(t);
                            if (u >= 0 && u < 45) r = e + "ico.png", c = u % 9 * 18, o = 18 * Math.floor(u / 9), p = "500%";
                            else {
                                var s = /^\.\d+/.test(t) && l[t.match(/\d+/)[0]];
                                if (s) {
                                    var x = s.match(/(\d+)\./)[1];
                                    i = 100 * x + "%", r = "".concat(e, "static/c/").concat(s)
                                }
                            }
                        }
                        return r ? '<face data-pic="'.concat(t, '" style="display:inline-block;width:18px;height:18px;background-image:url(').concat(r, ");background-size:").concat(i, " ").concat(p, ";vertical-align:middle;background-position-x:-").concat(c, "px;background-position-y:-").concat(o, "px;").concat(0 === n ? "" : "margin-left:-18px;", '"></face>') : '<face data-pic="'.concat(t, '"/>')
                    })).join("")
                }
                return t.replace(/\{.+?\}/g, (function(t) {
                    t = t.replace(/^\{/g, "").replace(/\}$/g, "");
                    var n = t.split("$"),
                        r = (0, a.default)(n, 2),
                        c = r[0],
                        o = r[1];
                    return e(c) + (Number(o) ? "<sub>".concat(o, "</sub>") : "")
                }))
            }

            function x(t) {
                return t.replace(/\u0014[1]/g, '<light style="display:inline;color:white;text-shadow:red 1px 1px 2px, red 1px 1px 2px, red -1px 1px 2px,red 1px -1px 2px;">').replace(/\u0017/g, "</light>").replace(/\u001b[a0]/g, "</color>").replace(/\u001b[a-z0-9]/g, (function(e) {
                    var n = ["", "#e20000", "#dc6700", "#009400", "#c10303", "#ce9c00", "#800080", "#00c5c5", "#009400", "white"],
                        r = n[e[1]];
                    return r || console.error(r, e, t), r ? '<color style="display:inline;color:'.concat(r, ';">') : e[1]
                })).replace(/<color.*?<\/color>/g, (function(t) {
                    return t.match(/<color/g).forEach((function(e, n) {
                        t += 0 === n ? "" : "</color>"
                    })), t
                }))
            }

            function f(t) {
                return t ? w.get("color") ? (t = x(t), t = s(t), t) : (0, c.clearText)(t) : t
            }

            function d(t) {
                return (0, c.clearText)(t || "").replace(/\((武器|法宝)\)/, "").replace(/(主动神符技|神符技\.英雄|神符技【\d】|普通技|天生技|宠物法宝技)\./, "").trim()
            }

            function m(t) {
                o.setItem("user", JSON.stringify(t))
            }
            e.cList = l;
            var v = !!Object({
                NODE_ENV: "production",
                VUE_APP_PLATFORM: "h5",
                VUE_APP_INDEX_CSS_HASH: "439536fb",
                BASE_URL: "//static.i-weather.cn/kdjl-helper/"
            }).npm_package_name;
            e.isDev = v;
            var h = function() {
                var t = getCurrentPages()[0];
                return t && "pages/index/index" === t.route ? t.$vm : {}
            };

            function b() {
                var t = o.getItem("user") || "{}",
                    e = JSON.parse(t);
                return e.data || e
            }

            function y() {
                var t = b(),
                    e = "";
                return t.username && "player" in t && (e = "".concat(t.username, "-").concat(t.username)), e
            }
            e.getMainData = h;
            var S = {
                get: function(t) {
                    var e = y();
                    return e ? o.getItem("".concat(e, "-").concat(t)) : null
                },
                set: function(t, e) {
                    var n = y();
                    n && o.setItem("".concat(n, "-").concat(t), e)
                }
            };
            e.userSettings = S;
            var w = {
                data: {},
                init: function() {
                    this.ready = !0;
                    var t = {
                            disconnect: !1,
                            reconnect: !1,
                            autoBall: !0,
                            ksbx: !1,
                            clear: !0,
                            clearThreshold: 5,
                            clearItem: "配方|宝藏.|防护头巾|迅捷之靴|贴身皮甲|魔力项链|尖刺护腕|木棉|湍流|鹰眼|金盾|狂刃|会心|正气|紫荆|飓风|迷踪|寂语|灵魄|喧嚣|哭神|凡尘|一品.生命球|二品.生命球|三品.生命球|四品.生命球|龙珠|一品.攻击宝石|二品.攻击宝石|三品.攻击宝石|一品.生命宝石|二品.生命宝石|三品.生命宝石|一品.速度宝石|二品.速度宝石|三品.速度宝石|一品.法力宝石|二品.法力宝石|三品.法力宝石|一品.防御宝石|二品.防御宝石|三品.防御宝石|神秘精灵宝箱|五星连珠宝箱|附魔|锻造宝石|一品.闪光|一品.孔雀|一品.龙牙|一品.无名|一品.九炼银|一品.炎风木|一品.炎皇革|宠物命名卡|记忆之笛|精灵球",
                            discardItem: "五品.生命球|小卖部银会员卡|双倍经验卡|任务库好运卡",
                            sellItem: "",
                            checkPet: !1,
                            autoCombat: "auto",
                            itemFind: "all",
                            userNames: "",
                            allLog: !1,
                            petSoul: !1,
                            auto7: !1,
                            keepItem: "绝世|完美|圣品|魂品|护符|超级|强化|高级|孔雀|+10|+11|+12|+13|+14|+15",
                            getPet: !1,
                            combatUpdate: 1,
                            host: "221.181.70.13",
                            itemPassword: "",
                            showUserInfo: !1,
                            color: !0,
                            logMax: 20,
                            delay: 0,
                            proxy: "",
                            commonTask: ["day", "item2", "jldhkDt", "jncz", "jz", "kill", "mzrq", "sava", "ylshd", "zzjngjk"],
                            shortcutList: [{
                                title: "飞到仓库",
                                code: "map move sgz 102"
                            }, {
                                title: "飞到下地界",
                                code: "map move mszy 113"
                            }, {
                                title: "飞到绿宝石广场",
                                code: "map move lbsc 213"
                            }, {
                                title: "飞到迷失之地",
                                code: "map move msgd 101"
                            }, {
                                title: "飞到无垢者之城",
                                code: "map move lsj 200"
                            }, {
                                title: "飞到虫鸣山",
                                code: "map move blue 101"
                            }, {
                                title: "飞到残月平原",
                                code: "map move ylshd 102"
                            }, {
                                title: "飞到尚武擂台",
                                code: "map move msgd 195"
                            }, {
                                title: "飞到宝库入口",
                                code: "map move jlwbk 100"
                            }, {
                                title: "飞到绿野小径(打孔/宝石/粉碎)",
                                code: "map move yzg 108"
                            }, {
                                title: "飞到燃灰之地(宝石/粉碎)",
                                code: "map move hyzd 113"
                            }, {
                                title: "飞到牯岭山道(宝石/粉碎)",
                                code: "map move lysm 123"
                            }, {
                                title: "飞到沼泽深处",
                                code: "map move zszd 103"
                            }, {
                                title: "飞到职业者广场",
                                code: "map move zz 100"
                            }]
                        },
                        e = o.getItem("globalSettings"),
                        n = this.data = Object.assign(t, e ? JSON.parse(e) : {});
                    n.aotoCombat && (n.autoCombat = "aoto" === n.aotoCombat ? "auto" : n.aotoCombat, delete n.aotoCombat, o.setItem("globalSettings", JSON.stringify(n)))
                },
                get: function(t) {
                    return this.data[t]
                },
                set: function(t, e) {
                    this.data[t] = e, o.setItem("globalSettings", JSON.stringify(this.data)), uni.$emit("globalSettingsChange", this.data)
                }
            };
            e.globalSettings = w, w.init()
        },
        "75fc": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", (function() {
                return m
            }));
            var r = n("a745"),
                a = n.n(r),
                c = n("db2a");

            function o(t) {
                if (a()(t)) return Object(c["a"])(t)
            }
            var i = n("67bb"),
                p = n.n(i),
                g = n("5d58"),
                l = n.n(g),
                u = n("774e"),
                s = n.n(u);

            function x(t) {
                if ("undefined" !== typeof p.a && null != t[l.a] || null != t["@@iterator"]) return s()(t)
            }
            var f = n("e630");

            function d() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function m(t) {
                return o(t) || x(t) || Object(f["a"])(t) || d()
            }
        },
        "768b": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", (function() {
                return x
            }));
            var r = n("a745"),
                a = n.n(r);

            function c(t) {
                if (a()(t)) return t
            }
            var o = n("67bb"),
                i = n.n(o),
                p = n("5d58"),
                g = n.n(p);

            function l(t, e) {
                var n = null == t ? null : "undefined" !== typeof i.a && t[g.a] || t["@@iterator"];
                if (null != n) {
                    var r, a, c = [],
                        o = !0,
                        p = !1;
                    try {
                        for (n = n.call(t); !(o = (r = n.next()).done); o = !0)
                            if (c.push(r.value), e && c.length === e) break
                    } catch (l) {
                        p = !0, a = l
                    } finally {
                        try {
                            o || null == n["return"] || n["return"]()
                        } finally {
                            if (p) throw a
                        }
                    }
                    return c
                }
            }
            var u = n("e630");

            function s() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function x(t, e) {
                return c(t) || l(t, e) || Object(u["a"])(t, e) || s()
            }
        },
        "774e": function(t, e, n) {
            t.exports = n("d2d5")
        },
        "7cd6": function(t, e, n) {
            var r = n("40c3"),
                a = n("5168")("iterator"),
                c = n("481b");
            t.exports = n("584a").getIteratorMethod = function(t) {
                if (void 0 != t) return t[a] || t["@@iterator"] || c[r(t)]
            }
        },
        a745: function(t, e, n) {
            t.exports = n("f410")
        },
        b0dc: function(t, e, n) {
            var r = n("e4ae");
            t.exports = function(t, e, n, a) {
                try {
                    return a ? e(r(n)[0], n[1]) : e(n)
                } catch (o) {
                    var c = t["return"];
                    throw void 0 !== c && r(c.call(t)), o
                }
            }
        },
        d2d5: function(t, e, n) {
            n("1654"), n("549b"), t.exports = n("584a").Array.from
        },
        db2a: function(t, e, n) {
            "use strict";

            function r(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            n.d(e, "a", (function() {
                return r
            }))
        },
        e630: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var r = n("774e"),
                a = n.n(r),
                c = n("db2a");

            function o(t, e) {
                if (t) {
                    if ("string" === typeof t) return Object(c["a"])(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? a()(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Object(c["a"])(t, e) : void 0
                }
            }
        },
        f161: function(t, e, n) {
            "use strict";
            var r = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.chars = void 0, e.clearText = I, e.log = void 0, e.parseMsg = w, e.removeColor = k, e.removeImgs = j, e.request = O, e.send = void 0, e.showActionSheet = N, e.toArray = A, n("6b54"), n("c5f6"), n("ac6a");
            var a = r(n("75fc"));
            n("6762"), n("2fdb"), n("a481"), n("f559"), n("4917");
            var c = r(n("768b"));
            n("28a5");
            var o = function(t) {
                uni.$emit("send", t)
            };
            e.send = o;
            var i = function(t) {
                uni.$emit("log", t)
            };
            e.log = i;
            var p = {
                "": "",
                "": "",
                "": "<br/>",
                "": "<hr/>"
            };

            function g(t) {
                var e = t.split(/[｜|]/),
                    n = e[0],
                    r = e.slice(1).map((function(t) {
                        var e = t.match(/\[(\d+)\](.+)/),
                            n = (0, c.default)(e, 3),
                            r = (n[0], n[1]),
                            a = n[2];
                        return {
                            id: r,
                            title: a
                        }
                    }));
                return {
                    title: n,
                    list: r
                }
            }

            function l(t, e) {
                var n = e.c,
                    r = void 0 === n ? "" : n,
                    a = e.cc,
                    c = void 0 === a ? "" : a,
                    o = s(r || c),
                    i = "",
                    g = t.split(p[""]);
                return 2 === g.length && (i = g[0], t = g[1]), {
                    title: i,
                    text: t,
                    list: o
                }
            }

            function u(t, e, n, r) {
                var a = t.split("]"),
                    o = (0, c.default)(a, 2),
                    i = o[0],
                    g = o[1];
                i = e ? "".concat(e).concat(e.startsWith("~") || r ? "" : " ").concat(i) : i;
                var l = {
                    title: g,
                    code: i
                };
                if (n) {
                    var u = g.split(p[""]),
                        s = (0, c.default)(u, 2),
                        x = s[0],
                        f = s[1],
                        d = void 0 === f ? "" : f;
                    l.title = x.trim(), l.list = d.split("")
                }
                return l
            }

            function s() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                if (!t) return [];
                var e = t.replace(/\[/, "").split("|[");
                return e.map((function(t) {
                    return u(t)
                }))
            }
            e.chars = p;
            var x = {
                    a: "{x26}快速查看",
                    b: "{nb}发送私聊信件",
                    c: "{x6}发悄悄话",
                    d: "{m5}加入队伍",
                    e: "{m2}战斗切磋 (需对方同意)",
                    f: "{flw}添加口袋好友",
                    g: "{flw}添加幸运好友",
                    q: "{box}3查看摆摊的商品a",
                    p: "{m2}强行击杀"
                },
                f = {
                    j: "{x7}购买物品",
                    k: "{box}卖出物品"
                },
                d = {
                    a: "{x26}查看",
                    l: "{box}给人",
                    m: "{x25}丢弃"
                },
                m = {
                    z: "无效操作",
                    0: "无效操作",
                    1: "无效操作"
                };

            function v(t, e) {
                var n = e.x,
                    r = void 0 === n ? "" : n,
                    c = e.c,
                    o = void 0 === c ? "" : c,
                    i = e.g,
                    g = void 0 === i ? "" : i,
                    l = t.split("|["),
                    v = l[0],
                    h = l.slice(1).map((function(t) {
                        var e, n = t.split(";["),
                            c = u(n[0], r, !0, v.includes("家族物资") && /\dg/.test(r));
                        (c.list = c.list.map((function(t) {
                            return {
                                code: t,
                                title: "a" === g ? x[t] || f[t] || d[t] : d[t] || x[t] || f[t] || m[t] || t
                            }
                        })).filter((function(t) {
                            var e = t.title;
                            return "无效操作" !== e
                        })), !o || /[上下]一页/.test(c.title) || "宝库看守者" === v || v.includes("查看任务") && !/\d+/.test(c.code)) || (e = c.list).push.apply(e, (0, a.default)(s(o)));
                        return n.slice(1).forEach((function(t) {
                            c.list.push(u(t, r))
                        })), c
                    })),
                    b = v.split(p[""]);
                return 2 === b.length ? (v = b[0], t = b[1]) : t = "", {
                    title: v,
                    text: t,
                    list: h
                }
            }

            function h(t, e) {
                var n = e.cells;
                n = n.split("*");
                var r = Number(n[0]),
                    a = Number(n[1]),
                    c = t.split("|"),
                    o = c.shift(),
                    i = [];
                c.forEach((function(t, e) {
                    var n = i[Math.floor(e / a)] = i[Math.floor(e / a)] || [];
                    n.push(t)
                }));
                var p = i.shift();
                return {
                    title: o,
                    row: r,
                    column: a,
                    text: p.join("｜").replace(/\/$/, ""),
                    list: i.map((function(t) {
                        var e = t.join("｜"),
                            n = e.replace(/^\[/, "").replace(/\/$/, "").split("]");
                        return {
                            code: n[0],
                            title: n[1]
                        }
                    }))
                }
            }

            function b(t, e) {
                var n = e.x,
                    r = void 0 === n ? "" : n,
                    a = e.p,
                    o = t.split(/[｜|]/),
                    i = o[0],
                    g = o.slice(1).map((function(t) {
                        var e, n = t.match(/\[(\d+)\](.+)/),
                            r = (0, c.default)(n, 3),
                            a = (r[0], r[1]),
                            o = r[2],
                            i = o.split("$");
                        return 2 === i.length ? (o = i[0], e = i[1]) : e = "", {
                            value: Number(a),
                            title: o,
                            text: e
                        }
                    })),
                    l = i.split(p[""]);
                return 2 === l.length ? (i = l[0], t = l[1]) : t = "", {
                    title: i,
                    text: t,
                    list: g,
                    number: Number(a),
                    code: r
                }
            }

            function y(t) {
                var e = t.split(":"),
                    n = (0, c.default)(e, 2),
                    r = n[0],
                    a = n[1],
                    o = {
                        method: r
                    };
                return a && (o[r] = w(t.match(/\S+?:(.+)/)[1]).data), o
            }

            function S(t) {
                for (var e, n, r, a, o, i, p = t.split("|"), g = p[0].split(""), l = (0, c.default)(g, 2), u = l[0], s = l[1], x = p[1].split(","), f = [], d = 0, m = p[2]; d < m.length; d += 4) f.push({
                    from: {
                        x: Number("0x".concat(m[d + 0])),
                        y: Number("0x".concat(m[d + 1]))
                    },
                    to: {
                        x: Number("0x".concat(m[d + 2])),
                        y: Number("0x".concat(m[d + 3]))
                    }
                });
                u ? (e = p[3].split("&"), a = p[4].replace("", ""), i = p[5], u = p[6]) : (u = p[5] || p[6], n = p[7], e = p[8].split("&"));
                var v = Number("0x".concat(x.shift())).toString(),
                    h = {
                        width: 0,
                        height: 0,
                        x: 999,
                        y: 999
                    };
                return x = x.map((function(t, p) {
                    var g = Number("0x".concat(t[0])),
                        l = Number("0x".concat(t[1]));
                    h.width = Math.max(h.width, g + 1), h.height = Math.max(h.height, l + 1), h.x = Math.min(h.x, g), h.y = Math.min(h.y, l);
                    var u = Number("0x".concat(t.substring(4, 8))).toString(),
                        s = t.substring(8, t.length).split("$"),
                        x = (0, c.default)(s, 2),
                        f = x[0],
                        d = x[1],
                        m = {
                            "龙牙集市": "龙牙市集",
                            "通往平原": "通往闪光平原"
                        },
                        v = {
                            code: u,
                            title: m[f] || f.trim(),
                            text: d,
                            position: {
                                x: g,
                                y: l
                            },
                            img: e[p],
                            num: n ? Number("".concat(n[2 * p]).concat(n[2 * p + 1])) : NaN
                        };
                    return r = a === u ? v : r, o = i === u ? v : o, v
                })), {
                    title: s,
                    code: u,
                    length: v,
                    list: x,
                    lines: f,
                    at: r,
                    target: o,
                    size: h
                }
            }

            function w(t) {
                t = t.replace(/\(c:.+?<login>.+?取消\)/, ""), t = t.replace(/\(c:.+?进入官网.+?返回\)/, "");
                var e = /^<([a-z0-9*]+)(.*?)>(.*)/,
                    n = t.match(e) || [],
                    r = n[2] || "",
                    a = {};
                if (r) {
                    var o = r.match(/\(.*?\)/g);
                    o && o.forEach((function(t) {
                        t = t.replace(/^\(|\)$/g, "");
                        var e = t.split(":"),
                            n = (0, c.default)(e, 2),
                            r = n[0],
                            o = n[1];
                        a[r] = o ? o.trim() : o
                    }))
                }
                var i, p = n[1] || "",
                    u = n[1] ? n[3] || "" : t;
                switch (p) {
                    case "sell":
                        i = g(u);
                        break;
                    case "pmg":
                        i = l(u, a);
                        break;
                    case "menu":
                        i = v(u, a);
                        break;
                    case "table":
                        i = h(u, a);
                        break;
                    case "addp":
                        i = b(u, a);
                        break;
                    case "pilot":
                        i = y(u);
                        break;
                    case "mp":
                        i = S(u, a);
                        break
                }
                return {
                    type: p,
                    other: r,
                    props: a,
                    text: u,
                    data: i
                }
            }

            function j(t) {
                return t ? (t = t.replace(/\{.+?\}/g, "").replace(/<span.+?span>/, "").replace(/<sub.+?sub>/, ""), t) : t
            }

            function k(t) {
                return t.replace(/\u001b[a-z0-9]/g, "").replace(/<color.+?>/g, "").replace(/<\/color>/g, "").replace(/<light.+?>/g, "").replace(/<\/light>/g, "")
            }

            function I(t) {
                return t ? (t = k(t), t = j(t), t.replace(/<\S+>.*?<\/\S+>/g, "")) : t
            }

            function O(t) {
                return new Promise((function(e, n) {
                    uni.request(Object.assign({}, t, {
                        success: e,
                        fail: n
                    }))
                }))
            }

            function A(t) {
                return t.split(/[｜|]/).filter((function(t) {
                    return t.length
                }))
            }

            function N(t) {
                return new Promise((function(e, n) {
                    uni.showActionSheet(Object.assign({}, t, {
                        success: e,
                        fail: n
                    }))
                }))
            }
        },
        f410: function(t, e, n) {
            n("1af6"), t.exports = n("584a").Array.isArray
        }
    }
]);