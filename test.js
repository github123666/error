(function() {
        var __webpack_modules__ = {
                18440: function() {
                    eval(function(e, t, s, r, n, a) {
                        if (n = String, !"".replace(/^/, String)) {
                            for (; s--;) a[s] = r[s] || s;
                            r = [function(e) {
                                return a[e]
                            }], n = function() {
                                return "\\w+"
                            }, s = 1
                        }
                        for (; s--;) r[s] && (e = e.replace(new RegExp("\\b" + n(s) + "\\b", "g"), r[s]));
                        return e
                    }('(()=>{1 0(){2(()=>{3("4")()},5)}6{0()}7(8){}})();', 0, 9, "block function setInterval Function debugger 50 try catch err".split(" "), 0, {}))
                },
                42618: function(e, t) {
                    "use strict";
                    const s = "official";
                    t["Z"] = {
                        version: "2.6.1.231204",
                        distDir: "/student",
                        env: s,
                        frontUrl: "test" === s ? "https://wordpalm-wap.099737.com" : "https://app.vocabgo.com",
                        serverUrl: "test" === s ? "https://wordpalm-wap.099737.com" : "https://app.vocabgo.com",
                        apiBaseUrl: "test" === s ? "https://wordpalm-wap.099737.com/Gateway" : "https://app.vocabgo.com",
                        startPageUrl: "test" === s ? "https://audiotest.sflep.com:8083/" : "https://vocab.sflep.com/",
                        sharePageUrl: "test" === s ? "https://audiotest.sflep.com:8083/SharePage" : "https://vocab.sflep.com/SharePage",
                        shareImageUrl: "test" === s ? "https://audiotest.sflep.com:8083/share_icon.png" : "https://vocab.sflep.com/share_icon.png",
                        resourceUrl: "https://resource.vocabgo.com",
                        resourceUrlCdn: "https://resource-cdn.vocabgo.com",
                        appId: "test" === s ? "wx082f5f8f998e7d01" : "wx2a694105a6abbe6d",
                        vocabgoUrl: "test" === s ? "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU3NDM4MDM4Nw==&scene=104#wechat_redirect" : "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzUzNTk0NjUxNg==&scene=106#wechat_redirect",
                        jsApiList: ["scanQRCode", "chooseWXPay", "updateAppMessageShareData", "updateTimelineShareData", "onMenuShareAppMessage"],
                        classQrCodeTime: 31536e6,
                        topicCountdown(e) {
                            switch (e) {
                                case 0:
                                    return 0;
                                case 15:
                                case 17:
                                case 18:
                                    return 10;
                                case 16:
                                case 21:
                                case 22:
                                case 46:
                                case 61:
                                case 62:
                                case 71:
                                case 72:
                                case 151:
                                case 152:
                                case 456:
                                    return 15;
                                case 11:
                                case 32:
                                case 111:
                                case 153:
                                case 171:
                                case 172:
                                case 451:
                                case 452:
                                case 453:
                                case 551:
                                case 571:
                                case 581:
                                    return 20;
                                case 31:
                                case 41:
                                case 42:
                                case 51:
                                case 52:
                                case 411:
                                case 413:
                                case 415:
                                case 421:
                                    return 25;
                                case 43:
                                case 44:
                                case 412:
                                case 414:
                                    return 30;
                                case 13:
                                case 53:
                                case 54:
                                case 73:
                                case 454:
                                case 455:
                                case 552:
                                    return 35;
                                case 531:
                                case 561:
                                    return 40;
                                default:
                                    return 20
                            }
                        },
                        energyPackTime: 10,
                        energyPackExpend: 1,
                        energyPackExpendPK: 10,
                        menusTipCount: 2,
                        energyPackTipCount: 2,
                        buttonKeyTime: 5e3,
                        topicNum: 200,
                        taskType: {
                            classStudyTask: 1,
                            testTask: 2,
                            selfStudyTask: 3,
                            contestTask: 4
                        },
                        gradeList: [{
                            text: "快速模式",
                            value: 1
                        }, {
                            text: "普通模式",
                            value: 2
                        }, {
                            text: "完整模式",
                            value: 3
                        }, {
                            text: "超级困难",
                            value: 4
                        }],
                        levelExp: [0, 400, 1200, 1700, 2200, 2800, 3300, 3800, 4300, 4800, 5400, 6e3, 6600, 7200, 7800, 8600, 9200, 9900, 10600, 11400, 12200, 13e3, 13800, 14600, 15400, 16200, 17e3, 17800, 18600, 19400, 20400, 21400, 22400, 23400, 24400, 34400, 44400, 54400, 54400, 64400, 84400, 104400, 124400, 144400, 164400, 204400, 244400, 284400, 324400, 364400, 404400, 504400, 604400, 704400, 804400, 1004400, 1204400, 1404400, 1604400, 1804400],
                        newUserGuidebook: {
                            course: "1"
                        },
                        reviewWordMin: 1,
                        reviewWordMax: 20,
                        reviewExistTime: 7,
                        wordAmendList: [{
                            listId: "SZCH_03",
                            word: "Hong%20Kong%E2%80%99s%20return%20to%20China",
                            wordAmend: "Chinese%20path%20to%20modernization"
                        }, {
                            listId: "SZCH_05",
                            word: "blue%20partnerships",
                            wordAmend: "blue%20partnership"
                        }, {
                            listId: "SZCH_15",
                            word: "the%20Terrocotta%20Army",
                            wordAmend: "the%20Terracotta%20Army"
                        }]
                    }
                },
                9666: function(e, t, s) {
                    "use strict";
                    var r = s(42618);
                    const n = "test" === r.Z.env ? r.Z.apiBaseUrl : "api",
                        a = {};
                    a.url = n, a.student = n + "/Student", a.teacher = n + "/Teacher", a.school = n + "/School", a.monitor = n + "/Monitor", a.auth = n + "/Auth", a.fileCenter = n + "/FileCenter", t["Z"] = a
                },
                98973: function(e, t, s) {
                    "use strict";
                    s.d(t, {
                        Nj: function() {
                            return n
                        },
                        Qq: function() {
                            return r
                        },
                        tv: function() {
                            return a
                        }
                    });
                    const r = ["0", "1", "2_1254", "3"],
                        n = [{
                            site: 0,
                            num: 3
                        }, {
                            site: 1,
                            num: 2
                        }, {
                            site: 31,
                            num: 1
                        }, {
                            site: 41,
                            num: 2
                        }, {
                            site: 51,
                            num: 1
                        }, {
                            site: 87,
                            num: 1
                        }, {
                            site: 97,
                            num: 1
                        }],
                        a = {
                            updateChars: [{
                                site: 0,
                                num: 1
                            }, {
                                site: 1,
                                num: 2
                            }, {
                                site: 33,
                                num: 1
                            }, {
                                site: 77,
                                num: 1
                            }],
                            average: 4,
                            locations: [1, 2, 0, 3]
                        }
                },
                25071: function(e, t, s) {
                    "use strict";
                    var r = s(23461),
                        n = s(65431);
                    t["Z"] = {
                        homeMiss: function(e) {
                            r.Z.push({
                                path: ` / error / homeMiss / $ {
                            e
                        }`,
                                replace: !0
                            })
                        },
                        pageMiss: function(e, t) {
                            n.Z.sSetStorage("ERROR_DATA", t), r.Z.push({
                                path: ` / error / pageMiss / $ {
                            e
                        }`,
                                replace: !0
                            })
                        },
                        pageSorry: function(e, t) {
                            n.Z.sSetStorage("ERROR_DATA", t), r.Z.push({
                                path: ` / error / pageSorry / $ {
                            e
                        }`,
                                replace: !0
                            })
                        },
                        taskCreate: function(e, t) {
                            n.Z.sSetStorage("ERROR_DATA", t), r.Z.push({
                                path: ` / error / taskCreate / $ {
                            e
                        }`,
                                replace: !0
                            })
                        },
                        answerException: function(e, t) {
                            n.Z.sSetStorage("ERROR_DATA", t), r.Z.push({
                                path: ` / error / answerException / $ {
                            e
                        }`,
                                replace: !0
                            })
                        },
                        serverFault: function(e, t) {
                            n.Z.sSetStorage("ERROR_DATA", t), r.Z.push({
                                path: ` / error / serverFault / $ {
                            e
                        }`,
                                replace: !0
                            })
                        },
                        topicMiss: function(e, t) {
                            n.Z.sSetStorage("ERROR_DATA", t), r.Z.push({
                                path: ` / error / topicMiss / $ {
                            e
                        }`,
                                replace: !0
                            })
                        },
                        safetyVerify: function(e, t) {
                            n.Z.sSetStorage("ERROR_DATA", t), r.Z.push({
                                path: ` / error / safetyVerify / $ {
                            e
                        }`,
                                replace: !0
                            })
                        },
                        errorMobile: function() {
                            r.Z.push({
                                path: "/errorMobile",
                                replace: !0
                            })
                        },
                        systemMaintain: function(e, t) {
                            n.Z.sSetStorage("ERROR_DATA", t), r.Z.push({
                                path: ` / error / systemMaintain / $ {
                            e
                        }`,
                                replace: !0
                            })
                        }
                    }
                },
                49101: function(e, t, s) {
                    "use strict";
                    var r = s(59028),
                        n = s.n(r),
                        a = s(29702),
                        o = s.n(a),
                        i = s(65431),
                        u = s(23461),
                        c = s(42618),
                        l = s(25071),
                        d = s(14377),
                        p = s(86704),
                        h = s(98973);
                    const m = "ajfajfamsnfaflfasakljdlalkflak",
                        g = c.Z.version;
                    t["Z"] = {
                        doSign(e) {
                            let t = Object.keys(e).sort(),
                                s = t.length,
                                r = "";
                            for (let n = 0; n < s; n++) {
                                let s = t[n],
                                    a = e[t[n]];
                                if (a instanceof Object && (a = JSON.stringify(a)), a || 0 === a) {
                                    let e = s + "=" + a;
                                    r = "" === r ? e : r + "&" + e
                                }
                            }
                            return e["sign"] = o()(r + m), e
                        },
                        requestTypeEnv: function(e) {
                            let t = {};
                            t.userType = e, t.env = "1", i.Z.sSetStorage("REQUEST_TYPE_ENV", t)
                        },
                        handlerStudentParamsForGet: function(e) {
                            return e = e || {}, e.timestamp = i.Z.getTimestamp(), e.version = g, this.requestTypeEnv("student"), e
                        },
                        handlerStudentParamsForPost: function(e) {
                            return e = e || {}, e.timestamp = i.Z.getTimestamp(), e.version = g, this.requestTypeEnv("student"), this.doSign(e)
                        },
                        respVerify(e, t, s, r, n) {
                            if (s.jv && "1" === s.jv && s.data && (s.data = this.respDecode(s.data)), s.jv && "2_1254" === s.jv && s.data && (s.data = this.respDecode2(s.data)), s.jv && "3" === s.jv && s.data && (s.data = this.respDecode3(s.data)), s.jv && !h.Qq.includes(s.jv)) {
                                const e = window.location.href.split("#");
                                if (e[0].includes("studentv2")) return d.Z.versionError();
                                if (e[0].includes("studentv1")) return e[0] = e[0].replace("studentv1", "studentv2"), window.location.replace(`$ {
                            e[0]
                        }
                        # $ {
                            e[1]
                        }`);
                                if (e[0].includes("student")) return e[0] = e[0].replace("student", "studentv2"), window.location.replace(`$ {
                            e[0]
                        }
                        # $ {
                            e[1]
                        }`)
                            }
                            switch (s.code) {
                                case 11003:
                                case 11006:
                                    i.Z.sSetStorage("ERROR_DATA", s);
                                    let a = i.Z.sGetStorage("REQUEST_TYPE_ENV");
                                    if ("0" === a.env) u.Z.push("/userLogin");
                                    else if (i.Z.lSetStorage("USER_TOKEN", null), r) {
                                        if ("home" === r) return u.Z.push("/authorize");
                                        let e = ` / authorize ? page = $ {
                                r
                            }`;
                                        if (u.Z.app && u.Z.app._route && u.Z.app._route.query) {
                                            let t = i.Z.paramsSplicing(u.Z.app._route.query);
                                            t && (e = `$ {
                                    e
                                } & $ {
                                    t
                                }`)
                                        }
                                        u.Z.push(encodeURI(e))
                                    } else l.Z.safetyVerify(e, s);
                                    n();
                                    break;
                                case 10001:
                                case 10002:
                                case 10003:
                                case 10014:
                                case 10015:
                                    l.Z.pageMiss(e, s);
                                    break;
                                case 0:
                                case 10004:
                                case 10005:
                                case 10006:
                                case 10007:
                                case 10008:
                                case 10013:
                                    d.Z.httpError(s), n();
                                    break;
                                case 10:
                                    d.Z.httpErrorAlert(s, "left");
                                    break;
                                case 11:
                                    d.Z.httpErrorAlert(s, "center");
                                    break;
                                case 15:
                                    d.Z.httpErrorAlertBack(s, "left");
                                    break;
                                case 16:
                                    d.Z.httpErrorAlertBack(s, "center");
                                    break;
                                case 30:
                                    l.Z.pageSorry(e, s);
                                    break;
                                case 12001:
                                case 13001:
                                case 13002:
                                case 13003:
                                case 13004:
                                    "1" === t && l.Z.pageMiss(e, s), "2" === t && d.Z.httpError(s), n();
                                    break;
                                case 1:
                                case 22002:
                                case 22003:
                                    n(s.data || !0);
                                    break;
                                case 2:
                                    l.Z.systemMaintain(e, s);
                                    break;
                                case 10019:
                                    n(s);
                                    break;
                                case 10016:
                                    l.Z.taskCreate(e, s);
                                    break;
                                case 10017:
                                    l.Z.answerException(e, s);
                                    break;
                                case 10018:
                                    l.Z.errorMobile();
                                    break;
                                default:
                                    l.Z.pageMiss(e, s), n()
                            }
                        },
                        respDecode(e) {
                            let t = e.substring(32);
                            return JSON.parse(p.DS.decode(t))
                        },
                        respDecode2(e) {
                            let t = e;
                            for (let s = 0; s < h.Nj.length; s++) {
                                let e = "";
                                h.Nj[s].site && (e = t.slice(0, h.Nj[s].site));
                                let r = t.slice(h.Nj[s].site + h.Nj[s].num);
                                t = e + r
                            }
                            return JSON.parse(p.DS.decode(t))
                        },
                        respDecode3(e) {
                            let t = e;
                            for (let o = 0; o < h.tv.updateChars.length; o++) {
                                let e = "";
                                h.tv.updateChars[o].site && (e = t.slice(0, h.tv.updateChars[o].site));
                                let s = t.slice(h.tv.updateChars[o].site + h.tv.updateChars[o].num);
                                t = e + s
                            }
                            const s = parseInt(t.length / h.tv.average);
                            let r = [];
                            for (let o = 0; o < h.tv.average; o++) r.push(t.slice(o * s, (o + 1) * s));
                            let n = "";
                            for (let o = 0; o < h.tv.average; o++) n += r[h.tv.locations.findIndex((e = > e === o))];
                            const a = t.length % s;
                            return a && (n += t.slice(h.tv.average * s, t.length)), JSON.parse(p.DS.decode(n))
                        },
                        permissionsValidation(e) {
                            n().config({
                                debug: e.debug,
                                appId: e.app_id,
                                timestamp: e.timestamp,
                                nonceStr: e.nonce_str,
                                signature: e.signature,
                                jsApiList: e.jsApiList
                            }), n().ready((function() {
                                console.log("权限校验成功")
                            })), n().error((function(e) {
                                console.log(e), console.log("权限校验失败")
                            }))
                        },
                        permissionsValidationShare(e, t) {
                            n().config({
                                debug: e.debug,
                                appId: e.app_id,
                                timestamp: e.timestamp,
                                nonceStr: e.nonce_str,
                                signature: e.signature,
                                jsApiList: e.jsApiList
                            }), n().ready((function() {
                                t(), console.log("权限校验成功")
                            })), n().error((function(e) {
                                console.log(e), console.log("权限校验失败")
                            }))
                        },
                        getScanQRCode(e) {
                            n().scanQRCode({
                                needResult: 1,
                                scanType: ["qrCode", "barCode"],
                                success: function(t) {
                                    e(t)
                                },
                                fail: function(t) {
                                    e(t)
                                }
                            })
                        },
                        getShareData({
                            title: e,
                            desc: t,
                            link: s,
                            imgUrl: r
                        }, a) {
                            n().updateAppMessageShareData({
                                title: e,
                                desc: t,
                                link: s,
                                imgUrl: r,
                                success: function() {
                                    a()
                                }
                            }), n().updateTimelineShareData({
                                title: e,
                                link: s,
                                imgUrl: r,
                                success: function() {
                                    a()
                                }
                            }), n().onMenuShareAppMessage({
                                title: e,
                                desc: t,
                                link: s,
                                imgUrl: r,
                                success: function() {
                                    a()
                                }
                            })
                        },
                        getUserLocation(e) {
                            n().getLocation({
                                type: "wgs84",
                                success: function(t) {
                                    e(t)
                                },
                                fail: function(t) {
                                    e(t)
                                }
                            })
                        },
                        showUserLocation(e) {
                            n().openLocation({
                                latitude: e.latitude,
                                longitude: e.longitude,
                                name: "",
                                address: "",
                                scale: 28,
                                infoUrl: ""
                            })
                        },
                        closeWxCurrentPage() {
                            n().closeWindow()
                        }
                    }
                },
                49926: function(e, t, s) {
                    "use strict";
                    s.d(t, {
                        Dt: function() {
                            return a
                        },
                        Mn: function() {
                            return n
                        }
                    });
                    const r = navigator.userAgent;

                    function n() {
                        let e = r.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
                        return null != e
                    }
                    const a = r.indexOf("Android") > -1 || r.indexOf("Adr") > -1;
                    r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
                },
                23184: function(e, t, s) {
                    "use strict";
                    s.d(t, {
                        D: function() {
                            return c
                        },
                        k: function() {
                            return l
                        }
                    });
                    var r = s(64002),
                        n = s.n(r);
                    let a;

                    function o() {
                        a = n().service({
                            lock: !0,
                            background: "rgba(255, 255, 255, 0.7)"
                        })
                    }

                    function i() {
                        a.close()
                    }
                    let u = 0;

                    function c() {
                        0 === u && o(), u++
                    }

                    function l() {
                        u <= 0 || (u--, 0 === u && i())
                    }
                },
                14377: function(e, t, s) {
                    "use strict";
                    s(99905);
                    var r = s(5348),
                        n = (s(58146), s(88848)),
                        a = s(23461);
                    t["Z"] = {
                        answerWrong: function(e) {
                            n.Z.loading({
                                duration: 0,
                                forbidClick: !0,
                                loadingType: "spinner",
                                message: "再试一次"
                            });
                            const t = setTimeout((() = > {
                                clearTimeout(t),
                                n.Z.clear(),
                                e()
                            }), 1e3)
                        },
                        unOpenMenu: function() {
                            r.Z.alert({
                                title: "标题",
                                message: "正在研发中，敬请期待"
                            }).then((() = > {}))
                        },
                        versionError: function() {
                            r.Z.alert({
                                title: "更新提示",
                                message: "当前版本过低，请回首页刷新页面或清除微信缓存后重试"
                            }).then((() = > {}))
                        },
                        loginSuccess: function() {
                            (0, n.Z)({
                                message: "登录成功",
                                duration: 3e3
                            })
                        },
                        httpError: function(e) {
                            (0, n.Z)({
                                message: e.msg,
                                duration: 3e3
                            })
                        },
                        httpErrorAlert: function(e, t) {
                            t = t || "center", r.Z.alert({
                                title: "系统提示",
                                message: e.msg,
                                messageAlign: t
                            }).then((() = > {}))
                        },
                        httpErrorAlertBack: function(e, t) {
                            t = t || "center", r.Z.alert({
                                title: "系统提示",
                                message: e.msg,
                                messageAlign: t
                            }).then((() = > {
                                a.Z.go(-1)
                            }))
                        },
                        httpErrorCustomAlert: function(e) {
                            e = e || {}, e.data = e.data || {}, e.data.title = e.data.title ? e.data.title : "" === e.data.title ? "" : "系统提示", e.data.message = e.data.message || "", e.data.message_align = e.data.message_align || "center", e.data.confirm_button_text = e.data.confirm_button_text || "确认", e.data.confirm_result = e.data.confirm_result || "", r.Z.alert({
                                title: e.data.title,
                                message: e.data.message,
                                messageAlign: e.data.message_align,
                                confirmButtonText: e.data.confirm_button_text
                            }).then((() = > {
                                "back" === e.data.confirm_result && a.Z.go(-1),
                                "home" === e.data.confirm_result && a.Z.push("/student/home")
                            }))
                        },
                        deleteSuccess: function() {
                            (0, n.Z)({
                                message: "删除成功",
                                duration: 3e3
                            })
                        },
                        toastTime: function(e, t) {
                            (0, n.Z)({
                                message: e,
                                duration: t
                            })
                        },
                        httpSuccess: function(e) {
                            (0, n.Z)({
                                message: e,
                                duration: 3e3
                            })
                        },
                        topicTips: function(e) {
                            (0, r.Z)({
                                title: "题型说明",
                                message: e
                            }).then((() = > {
                                clearTimeout(t)
                            }));
                            let t = setTimeout((function() {
                                r.Z.close()
                            }), 3e3)
                        },
                        voicePlayFailure() {
                            (0, n.Z)({
                                position: "bottom",
                                message: "语音播放失败，请手动点击播放图标或者刷新页面重试！",
                                duration: 5e3
                            })
                        }
                    }
                },
                65431: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                        "use strict";
                        var vant_es_toast_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58146),
                            vant_es_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88848),
                            js_md5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29702),
                            js_md5__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(js_md5__WEBPACK_IMPORTED_MODULE_1__),
                            _public_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42618);
                        __webpack_exports__["Z"] = {
                                getTimestamp: function() {
                                    return (new Date).getTime()
                                },
                                randomSort: function() {
                                    return Math.random() > .5 ? -1 : 1
                                },
                                wordCount: (str, word) = > {
                                    let reg = eval("/" + word + "/g");
                                    return str.match(reg).length
                                },
                                strRegExpSplit(e) {
                                    if (!e) return !1;
                                    let t = e.match(/([\s\S]*){/)[1],
                                        s = e.match(/}([\s\S]*)/)[1],
                                        r = e.match(/{([\s\S]*)}/)[1];
                                    return {
                                        strFront: t,
                                        strRear: s,
                                        strCenter: r
                                    }
                                },
                                strRegExpReplace(e) {
                                    if (!e) return !1;
                                    let t = /{(.*?)}/g;
                                    return e.replace(t, (function(e, t) {
                                        return ` < span class = "cjw-word-style" > $ {
                            t
                        } < /span>`
                                    }))
                                },
                                strRegExpReplaceUnderline(e) {
                                    if (!e) return !1;
                                    let t = / {
                                        (.* ? )
                                }
                                /g;return e.replace(t,(function(e,t){return'<span class="cjw-word-style-underline">&emsp;&emsp;&emsp;&emsp;</span > '}))},strRegExpReplaceInput(e){if(!e)return!1;let t=/{(.*?)}/,s=e.match(t)[1],r=this.wordCount(e,s);if(r>1)for(let n=1;n<r;n++)e=e.replace(t,(function(e,t){return t}));return this.strRegExpSplit(e)},topicStemFormatSpellWord:function(e){e=e||"";let t=[],s=[],r="";return e.includes("{}")?(e=e.split("{}"),t=this.myTrim(e[0]).split(/\s+/),s=this.myTrim(e[1]).split(/\s+/)):(e=e.split("{"),t=this.myTrim(e[0]).split(/\s+/),r=this.myTrim(e[1].split("}")[0]),s=this.myTrim(e[1].split("}")[1]).split(/\s+/)),{strFront:t,strBack:s,tips:r}},removeDuplicates:function(e){return Array.from(new Set(e))},deleteArrayElement:(e,t)=>{let s=e.indexOf(t);return s>-1?e.splice(s,1):console.log(t+"不在数组中"),e},deleteObjectArrayElement:(e,t,s)=>e.filter((e=>e[t]!==s)),signInGetDate:function(e){e=e||(new Date).getTime();let t=new Date(e),s=t.getFullYear(),r=t.getMonth()+1,n=t.getDate(),a=new Date(s,r,0).getDate();r<10&&(r="0"+r);let o=`${s}年${r}月`;t=new Date(t.setDate(1));let i=t.getDay();return{signInYear:s,signInMonth:r,currentYM:o,countDays:a,weekDay:i,today:n}},answerDispose(e){let t={score:0,time_spent:0},s=e.answerEndTime-e.answerStartTime,r=1e3*_public_config__WEBPACK_IMPORTED_MODULE_2__.Z.topicCountdown(e.topic_mode);return t.time_spent=s>5*r?5*r:s,t.score=10,2===e.answerCount&&(t.score=10),0===e.correctNum?(t.score=0,t):(1===e.correctNum||(t.score=parseInt(t.score*e.correctNum)),t)},sSetStorage(e,t){return t=JSON.stringify(t)||null,sessionStorage.setItem(e,t)},sGetStorage(e){let t=sessionStorage.getItem(e)||null;return t&&"undefined"!==t&&""!==t?(t=JSON.parse(t)||null,t):null},lSetStorage(e,t){return t=JSON.stringify(t)||null,localStorage.setItem(e,t)},lGetStorage(e){let t=localStorage.getItem(e)||null;return t&&"undefined"!==t&&""!==t?(t=JSON.parse(t)||null,t):null},disposeScanQRCodeResult(e){let t=e.split("?");return 1===t.length?[]:t[1].split("&")},getUserToken(){let e="";return e=this.lGetStorage("USER_TOKEN"),e||(e=js_md5__WEBPACK_IMPORTED_MODULE_1___default()(this.getTimestamp().toString()+parseInt(1e6*Math.random()).toString()),this.lSetStorage("USER_TOKEN",e)),e},removeRepeatSymbol(e){if(e.includes("{}"))e=e.replace("{}","&#&"),e=e.replace(/{/g,"").replace(/}/g,""),e=e.replace("&#&","{}");else{let t=/{(.*?)}/,s=e.match(t)[1];e=e.replace(`{${s}}`,"&#&"),e=e.replace(/{/g,"").replace(/}/g,""),e=e.replace("&#&",`{${s}}`)}return e},blankSplitSentence(e){e=e||"";let t=/{(.*?)}/g,s=e.match(t);if(s)for(let c=0;c<s.length;c++)e=e.replace(s[c],`&word&#${c}#`);let r=/\*(.*?)\*/g,n=/_(.*?)_/g,a=e.match(r),o=e.match(n),i=[];if(a&&(i=i.concat(a)),o&&(i=i.concat(o)),i.length)for(let c=0;c<i.length;c++)e=e.replace(i[c],`&italic&#${c}#`);e=e.trim().split(/\s+/);let u=[];for(let c=0;c<e.length;c++){let t=/#(.*?)#/;if(e[c].includes("&word&")){let r=parseInt(e[c].match(t)[1]);e[c]=e[c].replace(`&word&#${r}#`,s[r]),u.push(`${e[c]}`)}else if(e[c].includes("&italic&")){let s=parseInt(e[c].match(t)[1]),r=e[c].split(`&italic&#${s}#`);r[0].length&&u.push(r[0]);let n=i[s].replace(/\*/g,""),a=n.split(/\s+/);for(let e=0;e<a.length;e++)if(e===a.length-1){let t=[];t.push(`<i>${a[e]}</i>`),r[1].length&&t.push(r[1]),u.push(t)}else u.push(`<i>${a[e]}</i>`)}else u.push(e[c])}return u},disposeContestStemSentence(e){e=e||"";let t=/{(.*?)}/g,s=e.match(t);e=s&&"{}"===s[0]?e.replace(s[0],' < span class = "cjw-font-underline" > & word & < /span>'):e.replace(/ {
                                    /,'<span class="cjw-font-underline-subject">').replace(/
                                }
                                /,"</span > "),s&&s.length>1&&(e=e.replace(/{/g,"
                                ").replace(/}/g,"
                                "));let r=/\*(.*?)\*/g,n=e.match(r),a=[];if(n&&(a=n),a.length)for(let o=0;o<a.length;o++){let t=a[o].replace(/\*/g,"
                                ");e=e.replace(a[o],`<span class="
                                cjw - font - italic ">${t}</span>`)}return e=e.replace(" & word & ","
                                ______ "),e},disposeContestOptions(e){e=e||"
                                ";let t=/{(.*?)}/g,s=e.match(t);e=s&&" {}
                                "===s[0]?e.replace(s[0],'<span class="
                                cjw - font - underline ">&word&</span>'):e.replace(/{/,'<span class="
                                cjw - font - underline - black ">').replace(/}/," < /span>"),s&&s.length>1&&(e=e.replace(/ {
                                    /g,"").replace(/
                                }
                                /g,""));let r=/\ * (.* ? )\ * /g,n=e.match(r),a=[];if(n&&(a=n),a.length)for(let o=0;o<a.length;o++){let t=a[o].replace(/\ * /g,"");e=e.replace(a[o],`<span class="cjw-font-italic">${t}</span > `)
                    }
                    return e = e.replace("&word&", "______"), e
                    }, disposeContestTips(e) {
                        e = e || "";
                        let t = /{(.*?)}/g, s = e.match(t);
                        e = s && "{}" === s[0] ? e.replace(s[0], '<span class="cjw-font-underline">&word&</span>') : e.replace(/{/, '<span class="cjw-font-underline-black">').replace(/}/, "</span>"), s && s.length > 1 && (e = e.replace(/{/g, "").replace(/}/g, ""));
                        let r = /\*(.*?)\*/g, n = e.match(r), a = [];
                        if (n && (a = n), a.length) for (let o = 0; o < a.length; o++) {
                            let t = a[o].replace(/\*/g, "");
                            e = e.replace(a[o], ` < span class = "cjw-font-italic" > $ {
                                    t
                                } < /span>`)}return e=e.replace("&word&","______"),e},disposeContestSpellStem(e,t){let s={};s.wordTips=e.split("{")[1].split("}")[0],s.wordTips=this.myTrim(s.wordTips);let r=t-s.wordTips.length+1,n=" ";if(r>0)for(let a=0;a<r;a++)n+="- ";return s.wordTips.includes("-")&&2===s.wordTips.split("-").length&&(s.wordTips=s.wordTips.replace("-",n)),s.stemFront=e.split("{")[0].trim().split(/\
                                s + /)||[],s.stemBack=e.split("}")[1].trim().split(/\
                                s + /)||[],s},wordTranslateDispose(e){/ ^ [a - zA - Z] + $ / .test(e.charAt(0)) || (e = e.substring(1, e.length)),
                                /^[a-zA-Z]+$/.test(e.charAt(e.length - 1)) || (e = e.substring(0, e.length - 1)),
                                e.includes("'s") && (e = e.replace(/'s/g, ""));
                                let t = e.substring(0, 1).toLowerCase();
                                return t + e.substring(1, e.length)
                            }, wordMatching(e) {
                                let t = !1;
                                return -1 === e.indexOf("{") || (t = !0), t
                            }, wordListContainsWord(e, t) {
                                let s = !1;
                                for (let r = 0; r < e.length; r++)
                                    if (e[r].word === t) {
                                        s = !0;
                                        break
                                    }
                                return s
                            }, getNowDate() {
                                let e = new Date,
                                    t = e.getFullYear(),
                                    s = e.getMonth() + 1,
                                    r = e.getDate();
                                return s < 10 && (s = "0" + s), r < 10 && (r = "0" + r), t + "-" + s + "-" + r
                            }, timestampTowDate(e) {
                                let t = new Date(e),
                                    s = t.getFullYear(),
                                    r = t.getMonth() + 1,
                                    n = t.getDate();
                                return r < 10 && (r = "0" + r), n < 10 && (n = "0" + n), s + "-" + r + "-" + n
                            }, getCaption(e, t) {
                                let s = e.lastIndexOf(t);
                                return e = e.substring(s + t.length, e.length), e
                            }, getYearClassList(e) {
                                let t = new Date,
                                    s = t.getFullYear(),
                                    r = [];
                                for (let n = 0; n < e; n++) r.push(s - n);
                                return r
                            }, getCodeForHttp(e) {
                                let t = {};
                                return t.code = parseInt(e.replace(/[^0-9]/gi, "")), t.msg = e, t.data = {}, t
                            }, countDown(e, t) {
                                let s = e + t - this.getTimestamp();
                                return s > 0 ? s : 0
                            }, courseSelectVerify(e, t) {
                                let s = 0;
                                for (let r = 0; r < e.length; r++) 1 === e[r].chose_status && (s += e[r].scale);
                                return 100 === s ? t() : (0, vant_es_toast__WEBPACK_IMPORTED_MODULE_3__.Z)({
                                    message: `当前教材范围：$ {
                                        s
                                    } % \n教材范围不为100 % `
                                })
                            }, myTrim(e) {
                                return e = e || "", e.replace(/^\s+|\s+$/gm, "")
                            }, arrObjForArrSort(e, t) {
                                let s = [];
                                for (let r = 0; r < t.length; r++) {
                                    let e = {};
                                    e.word = t[r], e.sortId = [r] + 1, s.push(e)
                                }
                                return e.sort(this.arrObjForArrSortExtend("sortId"))
                            }, arrObjForArrSortExtend(e) {
                                return function(t, s) {
                                    let r = t[e],
                                        n = s[e];
                                    return isNaN(Number(r)) || isNaN(Number(n)) || (r = Number(r), n = Number(n)), r < n ? -1 : r > n ? 1 : 0
                                }
                            }, getOverTime(e, t) {
                                let s = new Date(new Date(e.getTime()).setHours(0, 0, 0, 0)),
                                    r = s.getTime() + 864e5 - 1,
                                    n = r + 24 * t * 60 * 60 * 1e3;
                                return n - e.getTime()
                            }, getLevelInfo(e) {
                                return e || (e = 0), 0
                            }, topicMode: function(e) {
                                switch (e) {
                                    case 0:
                                        return "c-mean";
                                    case 11:
                                        return "c-sentence-choose-mean";
                                    case 13:
                                        return "c-sentence-choose-sentence";
                                    case 15:
                                    case 16:
                                        return "c-word-choose-mean";
                                    case 17:
                                    case 18:
                                        return "c-mean-choose-word";
                                    case 21:
                                    case 22:
                                        return "c-sound-choose-mean";
                                    case 31:
                                        return "c-words-collocation";
                                    case 32:
                                        return "c-words-sort";
                                    case 41:
                                    case 42:
                                    case 43:
                                    case 44:
                                    case 46:
                                        return "c-sentence-choose-word";
                                    case 45:
                                        return "c-topic-ideological";
                                    case 51:
                                    case 52:
                                    case 53:
                                    case 54:
                                        return "c-mean-spell-word";
                                    case 55:
                                    case 56:
                                        return "c-topic-spell-picture-word";
                                    case 61:
                                        return "c-topic-sound-different";
                                    case 62:
                                        return "c-topic-judge";
                                    case 57:
                                        return "c-topic-spell-hypernym";
                                    case 58:
                                        return "c-topic-spell-hyponym";
                                    case 71:
                                        return "c-topic-word-choose-picture";
                                    case 72:
                                        return "c-topic-picture-choose-word";
                                    case 73:
                                        return "c-words-spell";
                                    default:
                                        return "c-unknown"
                                }
                            },
                            getRandomArrayElements: function(e, t) {
                                let s, r, n = e.slice(0),
                                    a = e.length,
                                    o = a - t;
                                while (a-- > o) r = Math.floor((a + 1) * Math.random()), s = n[r], n[r] = n[a], n[a] = s;
                                return n.slice(o)
                            },
                            emailVerify: function(e) {
                                let t = !0,
                                    s = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/gi;
                                return s.test(e) || (t = !1), t
                            },
                            getRandomNumber: function(e) {
                                if (e > 21) return null;
                                let t = Math.floor(10 * Math.random() + 1);
                                return 10 === t && (t = 8), parseInt((Math.random() + t) * Math.pow(10, e - 1)) + ""
                            },
                            timeSpentDispose(e, t, s) {
                                e = parseInt(e) || 0, t = parseInt(t) || 0, s = parseInt(s) || 0;
                                let r = 1e3 * _public_config__WEBPACK_IMPORTED_MODULE_2__.Z.topicCountdown(t);
                                return [1, 3].includes(e) && (r *= 5), s < 100 && (s = 100 + parseInt(10 * Math.random())), s > r && (s = r), s % 2 === 0 && 0 !== t && (s += 1), s
                            },
                            getTimeZone() {
                                let e = new Date,
                                    t = -e.getTimezoneOffset() / 60;
                                return t -= 8, t
                            },
                            getDeviceWidth() {
                                let e = window.devicePixelRatio || 1,
                                    t = window.screen.width || 375,
                                    s = t / 375,
                                    r = t - parseInt(90 * s);
                                r = parseInt(r * e);
                                let n = t - parseInt(40 * s);
                                n = parseInt(n * e);
                                let a = parseInt(16 * s);
                                a = parseInt(a * e);
                                let o = parseInt(18 * s);
                                o = parseInt(o * e);
                                let i = "#000000",
                                    u = "#303133";
                                return {
                                    width: t,
                                    dpr: e,
                                    widthOption: r,
                                    widthStem: n,
                                    fontSizeOption: a,
                                    fontSizeStem: o,
                                    colorOption: i,
                                    colorStem: u
                                }
                            },
                            audioPlayFormatUrl(e, t) {
                                this.stopAudioPlay(), e = e.replace(/%/g, "_");
                                let s = document.createElement("audio");
                                s.id = "cdrAudioPlay", s.controls = !1, s.autoplay = !1, s.preoload = "auto", -1 !== e.indexOf("https") ? s.src = `$ {
                                    e
                                } ? v = $ {
                                    this.getTimestamp()
                                }` : s.src = `$ {
                                    _public_config__WEBPACK_IMPORTED_MODULE_2__.Z.resourceUrl
                                }
                                $ {
                                    e
                                } ? v = $ {
                                    this.getTimestamp()
                                }`, document.body.appendChild(s), s.play().then((() = > {})).
                                catch((() = > {
                                    t(!1)
                                })), s.onended = () = > {
                                    this.stopAudioPlay(),
                                    t(!0)
                                }, s.onerror = () = > {
                                    t(!1)
                                }
                            },
                            pauseAudioPlay() {
                                let e = document.getElementById("cdrAudioPlay");
                                e && e.pause()
                            },
                            stopAudioPlay() {
                                let e = document.getElementById("cdrAudioPlay");
                                e && (e.pause(), e.remove())
                            },
                            arrayObjectSortAsc(e) {
                                return function(t, s) {
                                    let r = t[e],
                                        n = s[e];
                                    return r < n ? -1 : r > r ? 1 : 0
                                }
                            },
                            arrayObjectSortDesc(e) {
                                return function(t, s) {
                                    let r = t[e],
                                        n = s[e];
                                    return r > n ? -1 : r < r ? 1 : 0
                                }
                            },
                            setScrollTop(e, t) {
                                if (!t && 0 !== t) {
                                    let s = this.sGetStorage("SCROLL_TOP") || {};
                                    s[e] && (t = s[e].rank || 0)
                                }
                                window.scrollTo(0, parseInt(t))
                            },
                            saveScrollTop(e, t) {
                                t || 0 === t || (t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
                                let s = this.sGetStorage("SCROLL_TOP") || {};
                                s[e.rank] = {
                                    rank: t,
                                    pageSize: e.pageSize || 0
                                }, this.sSetStorage("SCROLL_TOP", s)
                            },
                            paramsSplicing(e) {
                                let t = "";
                                return Object.keys(e).forEach((function(s) {
                                    s && (t = t + s + "=" + e[s] + "&")
                                })), t = t.substring(0, t.length - 1), t
                            },
                            paramsSplit(e) {
                                let t = {},
                                    s = e.split("&");
                                for (let r = 0; r < s.length; r++) {
                                    let e = s[r].split("=");
                                    t[e[0]] = e[1]
                                }
                                return t
                            },
                            contestTopicDataCheck(e) {
                                let t = !0;
                                return e.topic_mode || (t = !1), e.topic_code || (t = !1), e.topic_total && e.topic_done_num || (t = !1), e.chance_num || (t = !1), [15, 17, 11, 42].includes(e.topic_mode) && (e.stem && e.stem.content || (t = !1), 1 !== e.answer_num && (t = !1), e.options.length && e.options[0].content && e.options[1].answer_tag || (t = !1)), [32].includes(e.topic_mode) && (e.stem && e.stem.content && e.stem.remark || (t = !1), 1 !== e.answer_num && (t = !1), e.options.length && e.options[0].content && !e.options[1].answer_tag || (t = !1)), [31].includes(e.topic_mode) && (e.stem && e.stem.content || (t = !1), e.answer_num < 1 && (t = !1), e.options.length && e.options[0].content && e.options[1].answer_tag || (t = !1)), [51, 52].includes(e.topic_mode) && (e.stem && e.stem.content && e.stem.remark || (t = !1), 1 !== e.answer_num && (t = !1), e.w_len && e.w_tip || (t = !1)), t
                            },
                            disposeAfterAuthorizeUrl(e) {
                                e = e || "";
                                let t = "";
                                if (e.includes("?page=")) {
                                    let s = e.split("#")[0].split("?")[1],
                                        r = this.paramsSplit(decodeURI(s));
                                    if (r && ["vocabularyTest", "courseActiveNotList"].includes(r.page)) {
                                        let s = r.page;
                                        delete r.page;
                                        let n = `$ {
                                            e.split("?")[0]
                                        }
                                        # / student / $ {
                                            s
                                        }`,
                                            a = this.paramsSplicing(r);
                                        a && (n = `$ {
                                            n
                                        } ? $ {
                                            a
                                        }`), t = encodeURI(n)
                                    }
                                    if (r && ["contestOfficial"].includes(r.page)) {
                                        delete r.page;
                                        let s = `$ {
                                            e.split("?")[0]
                                        }
                                        # / contest / official`,
                                            n = this.paramsSplicing(r);
                                        n && (s = `$ {
                                            s
                                        } ? $ {
                                            n
                                        }`), t = encodeURI(s)
                                    }
                                    r && "courseBuy" === r.page && (t = `$ {
                                        e.split("?")[0]
                                    }
                                    # / student / $ {
                                        r.page
                                    }
                                    /${r.course_id}`)
                                }
                                return t
                            }, disposeSentenceSymbolFormatColor(e) {
                                e = e || "";
                                let t = / {
                                    (.* ? )
                            }
                        /g,s=e.match(t);e=s&&"{}"===s[0]?e.replace(s[0],'<span class="cjw-color-subject">&word&</span > '):e.replace(/{/g,' < span class = "cjw-color-subject" > ').replace(/}/g,"</span>"),s&&s.length>1&&(e=e.replace(/{/g,"").replace(/}/g,""));let r=/\*(.*?)\*/g,n=e.match(r),a=[];if(n&&(a=n),a.length)for(let o=0;o<a.length;o++){let t=a[o].replace(/\*/g,"");e=e.replace(a[o],`<span class="cjw-font-italic">${t}</span>`)}return e=e.replace("&word&","______"),e},dateFormatYM(e,t){t=t||"-";let s=e.getFullYear(),r=e.getMonth()+1;return r=r<10?"0"+r:r,s+t+r},dateFormatYMD(e,t){t=t||"-";let s=e.getFullYear(),r=e.getMonth()+1,n=e.getDate();return r=r<10?"0"+r:r,n=n<10?"0"+n:n,s+t+r+t+n},getDateNextDay:function(e,t){return new Date(e.getTime()+24*t*60*60*1e3)},getDateNextWeek:function(e,t){return new Date(e.getTime()+7*t*24*60*60*1e3)},getDateNextMonth:function(e,t){let s=e.getMonth();return new Date(e.setMonth(s+t,1))},parseSentenceType:function(e,t){e=e||"",t=t||"";let s="",r=e.split("_"),n=t.split("_");if(!r.length)return s;switch(r[0]){case"CET4":case"CET6":case"TEM4":case"GET":case"CETA":case"CETB":s="真题";break;case"QXB":case"QXBGJ":case"JJ":case"XSJ":n.length>3&&r.length>2&&n[0]+n[1]+n[2]+n[3]===r[0]+r[1]+r[2]&&(s="课文");break;case"GZGJ":n.length>2&&r.length>2&&n[0]+n[1]+n[2]===r[0]+r[1]+r[2].substr(0,1)&&(s="课文");break;default:s=""}return s},millisecondFormatValidity:function(e){return e=parseInt(e)||0,e=parseInt(e/864e5),e<366||e%366?e+="天":e=parseInt(e/366)+"年",e},timestampFormatYMD(e,t){let s=new Date(e);t=t||"-";let r=s.getFullYear(),n=s.getMonth()+1,a=s.getDate();return n=n<10?"0"+n:n,a=a<10?"0"+a:a,r+t+n+t+a},calculateProgress(e,t){e=parseInt(e)||0,t=parseInt(t)||0;let s=0;return e&&t&&(s=e/t*100),s=s<1?1:s,s=s>100?100:s,parseInt(s)},timestampFormatYMDHS(e,t,s){e=parseInt(e);let r=new Date(e),n=r.getFullYear(),a=r.getMonth()+1,o=r.getDate(),i=r.getHours(),u=r.getMinutes();return a=a>9?a:"0"+a,o=o>9?o:"0"+o,i=i>9?i:"0"+i,u=u>9?u:"0"+u,s&&r.toDateString()===new Date(s).toDateString()?i+":"+u:s&&n===new Date(s).getFullYear()?t?a+t+o+" "+i+":"+u:a+"月"+o+"日"+i+":"+u:t?n+t+a+t+o+" "+i+":"+u:n+"年"+a+"月"+o+"日 "+i+":"+u}}},84159:function(e,t,s){"use strict";var r={};s.r(r),s.d(r,{MDTime:function(){return Rt},MDTime2:function(){return Mt},YMD:function(){return Wt},countdownTime:function(){return Ot},courseBuyNum:function(){return Ut},courseIndate:function(){return Bt},coursePrice:function(){return Vt},dateFormat:function(){return Zt},dateFormatYM:function(){return At},dateFormatYMD:function(){return Pt},dateFormatYMDHM:function(){return bt},overTime:function(){return Ft},overTimeYMD:function(){return xt},timeCycle:function(){return Ct},timeCycle2:function(){return yt},timestampFormatMD:function(){return jt},timestampFormatYMDHM:function(){return Et},timestampFormatYMDHMZone:function(){return It},timestampFormatYMDHS:function(){return Kt},timestampToDate:function(){return $t},timestampToYMD:function(){return qt},wordAmend:function(){return Gt},wordDecodeSymbol:function(){return Ht},wordDisposeSpace:function(){return Yt},wordRemoveSymbol:function(){return Lt},wordReplace:function(){return Tt},wordReplaceUnderline:function(){return Dt},wordsSortDispose:function(){return Nt}});var n=s(36369),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e._m(0),s("keep-alive",[e.$route.meta.keepAlive?s("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:e.$route.meta.title,expression:"$route.meta.title"}]}):e._e()],1),e.$route.meta.keepAlive?e._e():s("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:e.$route.meta.title,expression:"$route.meta.title"}]})],1)},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("audio",{attrs:{muted:"",autoplay:""}},[s("source",{attrs:{id:"wordAudio",type:"audio/mpeg"}})])}],i=s(18440),u=s.n(i),c=u(),l=s(1001),d=(0,l.Z)(c,a,o,!1,null,null,null),p=d.exports,h=s(23461),m=(s(56273),s(50705)),g=(s(292),s(66812)),f=(s(45465),s(86940)),S=(s(52680),s(58889)),w=(s(53429),s(17722)),_=(s(81049),s(60140)),v=(s(41640),s(94734)),k=(s(45061),s(41943)),C=(s(40431),s(31745)),y=(s(94439),s(73462)),Z=(s(94035),s(34814)),P=(s(71325),s(13062)),A=(s(32526),s(22201)),b=(s(8260),s(72488)),I=(s(59061),s(52075)),T=(s(57152),s(77304)),L=(s(40139),s(69294)),D=(s(48867),s(20541)),$=(s(22679),s(43414)),E=(s(43412),s(87740)),F=(s(40109),s(46142)),x=(s(16871),s(81765)),R=(s(64346),s(24329)),M=(s(31e3),s(66338)),W=(s(77396),s(98253)),j=(s(57133),s(84820)),O=(s(72121),s(44202)),q=(s(99905),s(5348)),V=(s(19692),s(98e3)),B=(s(73938),s(96606)),U=(s(3446),s(24861)),N=(s(40323),s(41698)),G=(s(98778),s(75910)),Y=(s(67284),s(69057)),H=(s(57505),s(42594)),K=(s(42443),s(39864)),Q=(s(7322),s(26631)),z=(s(42763),s(95094)),J=(s(10159),s(99978)),X=(s(53772),s(2778)),ee=(s(89571),s(94958)),te=(s(39385),s(30166)),se=(s(65825),s(19858)),re=(s(6125),s(21180)),ne=(s(6972),s(41878)),ae=(s(34672),s(57590)),oe=(s(58146),s(88848)),ie=(s(56791),s(64269)),ue=(s(3089),s(54398)),ce=(s(45816),s(59387)),le=(s(52679),s(79054)),de=(s(60836),s(46811)),pe=(s(76562),s(54159)),he=(s(24825),s(27165)),me=(s(77944),s(85650));n["default"].use(me.Z),n["default"].use(he.Z),n["default"].use(pe.Z),n["default"].use(de.Z),n["default"].use(le.Z),n["default"].use(ce.Z),n["default"].use(ue.Z),n["default"].use(ie.Z),n["default"].use(oe.Z),n["default"].use(ae.Z),n["default"].use(ne.Z),n["default"].use(re.Z),n["default"].use(se.Z),n["default"].use(te.Z),n["default"].use(ee.Z),n["default"].use(X.Z),n["default"].use(J.Z),n["default"].use(z.Z),n["default"].use(Q.Z),n["default"].use(K.Z),n["default"].use(H.Z),n["default"].use(Y.Z),n["default"].use(G.Z),n["default"].use(N.Z),n["default"].use(U.Z),n["default"].use(B.Z),n["default"].use(V.Z),n["default"].use(q.Z),n["default"].use(O.Z),n["default"].use(j.Z),n["default"].use(W.Z),n["default"].use(M.Z),n["default"].use(R.Z),n["default"].use(x.Z),n["default"].use(F.Z),n["default"].use(E.Z),n["default"].use($.Z),n["default"].use(D.Z),n["default"].use(L.Z),n["default"].use(T.Z),n["default"].use(I.Z),n["default"].use(b.Z),n["default"].use(A.Z),n["default"].use(P.Z),n["default"].use(Z.Z),n["default"].use(y.Z),n["default"].use(C.Z),n["default"].use(k.Z),n["default"].use(v.Z),n["default"].use(_.Z),n["default"].use(w.Z),n["default"].use(S.Z),n["default"].use(f.Z),n["default"].use(g.Z),n["default"].use(m.Z);var ge=s(63822),fe=s(42415);const Se=s(28935),we={};Se.keys().forEach((e=>{we[e.replace(/(\.\/|\.js)/g,"")]=Se(e).default}));var _e={namespaced:!0,modules:we};const ve=s(36911),ke={};ve.keys().forEach((e=>{ke[e.replace(/(\.\/|\.js)/g,"")]=ve(e).default}));var Ce={namespaced:!0,modules:ke};n["default"].use(ge.ZP);var ye=new ge.ZP.Store({modules:{student:_e,storage:Ce},plugins:[(0,fe.Z)({storage:window.sessionStorage,key:"vuexStorage",paths:["storage"]})]}),Ze=s(9666),Pe=s(56265),Ae=s.n(Pe),be=s(65431),Ie=s(23184),Te=s(29702),Le=s.n(Te);let De,$e={};Ae().CancelToken;let Ee=Ae().create({timeout:15e3,headers:{"X-Requested-With":"XMLHttpRequest"}});Ee.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",Ee.interceptors.request.use((e=>{const t=1;"get"===e.method&&(e.params.app_type=t),"post"===e.method&&(e.data.app_type=t),$e[e.url]?($e[e.url]("操作取消"),$e[e.url]=De):$e[e.url]=De;let s=["/ClassTask/List","/Student/Contest/Info","/StudyTask/StartTask","/ClassTask/StartTask","/Contest/Start","/Contest/QrcordStart","/Contest/QrcordSubmit","/StudyTask/SkipTopicMode","/ClassTask/SkipTopicMode","Teacher/TaskExperience/StartTest","Teacher/TaskExperience/Next","/StartAnswer","/VerifyAnswer","/SubmitAnswer","/SkipItem","/SkipAnswer","/SkipNowTopicMode","/ExchangeEnergyPack","/Course/SearchWord","/Captcha/Get","/Captcha/Check","/student/vocabularyTest","/Main","/get_chart","/Wechat/Config","/ClassTask/ScoreList","/Ranking/PageRankIntegral","/Ranking/ClassYearList","/Ranking/ClassList","TaskNewWordBook/AddWord","TaskNewWordBook/RemoveWord","/OilItemAnswer/SaveOilBagAnswerRecord","/ClassPk/Answer","ClassPk/ReleaseInfo/GetStatusInfoById","ClassTask/PageTask","/Contact/Save"],r=!0;for(let o=0;o<s.length;o++)if(-1!==e.url.indexOf(s[o])){r=!1;break}r&&(0,Ie.D)();let n=be.Z.sGetStorage("REQUEST_JV")||"0";e.headers["Authorization-v"]=Le()(n);let a=be.Z.sGetStorage("REQUEST_TYPE_ENV");return a&&"0"===a.env?e.headers.Authorization=be.Z.sGetStorage("ADMIN_TOKEN"):(e.headers["ABC"]=Le()(navigator.userAgent),be.Z.sGetStorage("ADMIN_TOKEN")?e.headers.Authorization=be.Z.sGetStorage("ADMIN_TOKEN"):e.headers["UserToken"]=be.Z.lGetStorage("USER_TOKEN")),e}),(e=>Promise.reject(e))),Ee.interceptors.response.use((function(e){return(0,Ie.k)(),200===e.status?(be.Z.sSetStorage("REQUEST_JV",e.data.jv),Promise.resolve(e.data)):Promise.reject(e.data)}),(function(e){(0,Ie.k)();let t=be.Z.getCodeForHttp(e.toString());return Promise.reject(t)}));var Fe=Ee;var xe=s(49101);const Re={getHome(e){return Fe.get(`${Ze.Z.student}/Main`,{params:xe.Z.handlerStudentParamsForGet(e)})},postJoinClass(e){return Fe.post(`${Ze.Z.teacher}/Class/JoinStudent`,xe.Z.handlerStudentParamsForPost(e))},postCourseCodeRegister(e){return Fe.post(`${Ze.Z.student}/MemberRegisterByCourse`,xe.Z.handlerStudentParamsForPost(e))}};var Me=Re;const We={getClassTaskList(e){return Fe.post(`${Ze.Z.student}/ClassTask/PageTask`,xe.Z.handlerStudentParamsForPost(e))},getStudyTask(e){return Fe.get(`${Ze.Z.student}/ClassTask/Info`,{params:xe.Z.handlerStudentParamsForGet(e)})},getStudyTaskGrade(e){return Fe.get(`${Ze.Z.student}/ClassTask/ScoreList`,{params:xe.Z.handlerStudentParamsForGet(e)})},getUpdateTaskStatus(e){return Fe.post(`${Ze.Z.url}/ClassPk/ReleaseInfo/GetStatusInfoById`,xe.Z.handlerStudentParamsForPost(e))},getTestTaskDetails(e){return Fe.post(`${Ze.Z.student}/ClassTask/TestInfo`,xe.Z.handlerStudentParamsForPost(e))},getCoursePurchaseStatus(e){return Fe.post(`${Ze.Z.student}/CourseOpen/InfoByCourse`,xe.Z.handlerStudentParamsForPost(e))}};var je=We;const Oe={getCourse(e){return Fe.get(`${Ze.Z.student}/StudyTask/List`,{params:xe.Z.handlerStudentParamsForGet(e)})},getCourseList(e){return Fe.get(`${Ze.Z.student}/Course/List`,{params:xe.Z.handlerStudentParamsForGet(e)})},postCourseChange(e){return Fe.post(`${Ze.Z.student}/StudyTask/ChangeCourse`,xe.Z.handlerStudentParamsForPost(e))},getUnit(e){return Fe.get(`${Ze.Z.student}/StudyTask/Info`,{params:xe.Z.handlerStudentParamsForGet(e)})},postGradeChange(e){return Fe.post(`${Ze.Z.student}/StudyTask/ChangeGrade`,xe.Z.handlerStudentParamsForPost(e))},getCourseGlossary(e){return Fe.post(`${Ze.Z.student}/CourseListWordInfo/PageInfo`,xe.Z.handlerStudentParamsForPost(e))}};var qe=Oe;const Ve={getStudyTaskSelectWords(e){return Fe.get(`${Ze.Z.student}/StudyTask/ChoseWordList`,{params:xe.Z.handlerStudentParamsForGet(e)})},postStudyTaskSelectWords(e){return Fe.post(`${Ze.Z.student}/StudyTask/SubmitChoseWord`,xe.Z.handlerStudentParamsForPost(e))},getStudyTaskStartAnswer(e){return Fe.get(`${Ze.Z.student}/StudyTask/StartAnswer`,{params:xe.Z.handlerStudentParamsForGet(e)})},postStudyTaskVerifyAnswer(e){return Fe.post(`${Ze.Z.student}/StudyTask/VerifyAnswer`,xe.Z.handlerStudentParamsForPost(e))},postStudyTaskSubmitAnswerAndSave(e){return Fe.post(`${Ze.Z.student}/StudyTask/SubmitAnswerAndSave`,xe.Z.handlerStudentParamsForPost(e))},postStudyTaskSkipAnswer(e){return Fe.post(`${Ze.Z.student}/StudyTask/SkipAnswer`,xe.Z.handlerStudentParamsForPost(e))},postStudyTaskSkipTopicModel(e){return Fe.post(`${Ze.Z.student}/StudyTask/SkipNowTopicMode`,xe.Z.handlerStudentParamsForPost(e))},getClassTaskSelectWords(e){return Fe.get(`${Ze.Z.student}/ClassTask/ChoseWordList`,{params:xe.Z.handlerStudentParamsForGet(e)})},postClassTaskSelectWords(e){return Fe.post(`${Ze.Z.student}/ClassTask/SubmitChoseWord`,xe.Z.handlerStudentParamsForPost(e))},getClassTaskStartAnswer(e){return Fe.get(`${Ze.Z.student}/ClassTask/StartAnswer`,{params:xe.Z.handlerStudentParamsForGet(e)})},postClassTaskVerifyAnswer(e){return Fe.post(`${Ze.Z.student}/ClassTask/VerifyAnswer`,xe.Z.handlerStudentParamsForPost(e))},postClassTaskSubmitAnswerAndSave(e){return Fe.post(`${Ze.Z.student}/ClassTask/SubmitAnswerAndSave`,xe.Z.handlerStudentParamsForPost(e))},postClassTaskSkipAnswer(e){return Fe.post(`${Ze.Z.student}/ClassTask/SkipAnswer`,xe.Z.handlerStudentParamsForPost(e))},postClassTaskSkipTopicModel(e){return Fe.post(`${Ze.Z.student}/ClassTask/SkipNowTopicMode`,xe.Z.handlerStudentParamsForPost(e))},postExchangeEnergyPack(e){return Fe.post(`${Ze.Z.student}/ExchangeEnergyPack`,xe.Z.handlerStudentParamsForPost(e))},getContestStartAnswer(e){return Fe.get(`${Ze.Z.student}/Contest/StartAnswer`,{params:xe.Z.handlerStudentParamsForGet(e)})},postContestVerifyAnswer(e){return Fe.post(`${Ze.Z.student}/Contest/VerifyAnswer`,xe.Z.handlerStudentParamsForPost(e))},postContestSubmitAnswerAndSave(e){return Fe.post(`${Ze.Z.student}/Contest/SubmitAnswerAndSave`,xe.Z.handlerStudentParamsForPost(e))},postContestSkipAnswer(e){return Fe.post(`${Ze.Z.student}/Contest/SkipAnswer`,xe.Z.handlerStudentParamsForPost(e))},postContestSubmitAnswerAndReturn(e){return Fe.post(`${Ze.Z.student}/Contest/SubmitAnswerAndReturn`,xe.Z.handlerStudentParamsForPost(e))},postWordBookAdd(e){return Fe.post(`${Ze.Z.student}/TaskNewWordBook/AddNewWord`,xe.Z.handlerStudentParamsForPost(e))},postWordCardInfo(e){return Fe.post(`${Ze.Z.student}/Course/GetStudyWordInfo`,xe.Z.handlerStudentParamsForPost(e))},getCaptchaData(e){return Fe.get(`${Ze.Z.student}/Captcha/Get`,{params:xe.Z.handlerStudentParamsForGet(e)})},postCaptchaData(e){return Fe.post(`${Ze.Z.student}/Captcha/Check`,xe.Z.handlerStudentParamsForPost(e))},getCertificateCode(e){return Fe.get(`${Ze.Z.fileCenter}/CertImage/SearchCertByUser`,{params:xe.Z.handlerStudentParamsForGet(e)})},getContestPKStartAnswer(e){return Fe.get(`${Ze.Z.student}/ContestPk/StartAnswer`,{params:xe.Z.handlerStudentParamsForGet(e)})},postContestPKSubmitAnswer(e){return Fe.post(`${Ze.Z.student}/ContestPk/SubmitAnswer`,xe.Z.handlerStudentParamsForPost(e))},getContestArtificialStartAnswer(e){return Fe.get(`${Ze.Z.student}/ContestType3/StartAnswer`,{params:xe.Z.handlerStudentParamsForGet(e)})},postContestArtificialSkipAnswer(e){return Fe.post(`${Ze.Z.student}/ContestType3/SkipAnswer`,xe.Z.handlerStudentParamsForPost(e))},postContestArtificialSubmitAnswer(e){return Fe.post(`${Ze.Z.student}/ContestType3/SubmitAnswer`,xe.Z.handlerStudentParamsForPost(e))}};var Be=Ve;const Ue={getWordInfo(e){return Fe.get(`${Ze.Z.student}/Course/StudyWordInfo`,{params:xe.Z.handlerStudentParamsForGet(e)})}};var Ne=Ue;const Ge={getSignIn(e){return Fe.get(`${Ze.Z.student}/TaskStudentSignin/Record`,{params:xe.Z.handlerStudentParamsForGet(e)})},postSignIn(e){return Fe.post(`${Ze.Z.student}/TaskStudentSignin/Do`,xe.Z.handlerStudentParamsForPost(e))}};var Ye=Ge;const He={getContestList(e){return Fe.get(`${Ze.Z.student}/Contest/List`,{params:xe.Z.handlerStudentParamsForGet(e)})},getContestListByYear(e){return Fe.post(`${Ze.Z.student}/Contest/ListByYear`,xe.Z.handlerStudentParamsForPost(e))},getQrcordStart(e){return Fe.get(`${Ze.Z.student}/Contest/QrcordStart`,{params:xe.Z.handlerStudentParamsForGet(e)})},postQrcordSubmit(e){return Fe.post(`${Ze.Z.student}/Contest/QrcordSubmit`,xe.Z.handlerStudentParamsForPost(e))},getQrcordRanking(e){return Fe.get(`${Ze.Z.student}/Contest/QrcordRanking`,{params:xe.Z.handlerStudentParamsForGet(e)})},postContestSignIn(e){return Fe.post(`${Ze.Z.student}/ContestSign/Do`,xe.Z.handlerStudentParamsForPost(e))},getJoinCode(e){return Fe.get(`${Ze.Z.student}/CheckContest/JoinCode`,{params:xe.Z.handlerStudentParamsForGet(e)})},getContestSignCode(e){return Fe.get(`${Ze.Z.student}/CheckContest/SignCode`,{params:xe.Z.handlerStudentParamsForGet(e)})},getContestJoinInfo(e){return Fe.get(`${Ze.Z.student}/CheckContest/JoinInfo`,{params:xe.Z.handlerStudentParamsForGet(e)})},getContestStartTime(e){return Fe.get(`${Ze.Z.student}/Contest/Info`,{params:xe.Z.handlerStudentParamsForGet(e)})},postContestJoinUserInfo(e){return Fe.post(`${Ze.Z.student}/Contest/SaveJoinUserInfo`,xe.Z.handlerStudentParamsForPost(e))},postContestPromised(e){return Fe.post(`${Ze.Z.student}/ContestSign/Promise`,xe.Z.handlerStudentParamsForPost(e))},getApplyInfo(e){return Fe.post(`${Ze.Z.student}/ContestUserInfoConfirm/GetUserInfo`,xe.Z.handlerStudentParamsForPost(e))},postApplyInfo(e){return Fe.post(`${Ze.Z.student}/ContestUserInfoConfirm/SaveUserInfo`,xe.Z.handlerStudentParamsForPost(e))},getContestCertificateList(e){return Fe.post(`${Ze.Z.student}/ContestCert/ListCertByUser`,xe.Z.handlerStudentParamsForPost(e))},postContestCertificate(e){return Fe.post(`${Ze.Z.student}/ContestCert/ListCertByUser`,xe.Z.handlerStudentParamsForPost(e))},getOfficialContestList(e){return Fe.post(`${Ze.Z.student}/ContestBigInfo/ListShowInfo`,xe.Z.handlerStudentParamsForPost(e))},getOfficialContestInfo(e){return Fe.post(`${Ze.Z.student}/ContestBigInfo/Details`,xe.Z.handlerStudentParamsForPost(e))},getStudentApplyInfo(e){return Fe.post(`${Ze.Z.student}/ContestBigSign/getInfoByCode`,xe.Z.handlerStudentParamsForPost(e))},getStudentApplyBaseInfo(e){return Fe.post(`${Ze.Z.student}/ContestBigSign/InfoByQrCode`,xe.Z.handlerStudentParamsForPost(e))},postSaveStudentApplyInfo(e){return Fe.post(`${Ze.Z.student}/ContestBigSign/SaveByCode`,xe.Z.handlerStudentParamsForPost(e))},getCheerPackInfo(e){return Fe.post(`${Ze.Z.student}/ContestBigOil/BuyInfo`,xe.Z.handlerStudentParamsForPost(e))},postBuyCheerPack(e){return Fe.post(`${Ze.Z.school}/ContestOilBagPay/PlaceOrder`,xe.Z.handlerStudentParamsForPost(e))},getCheerPackExamList(e){return Fe.post(`${Ze.Z.student}/ContestBigOil/OilItemInfo`,xe.Z.handlerStudentParamsForPost(e))},postResetCheerPackExam(e){return Fe.post(`${Ze.Z.student}/OilItemAnswer/Reset`,xe.Z.handlerStudentParamsForPost(e))},postSaveCheerPackExamAnswer(e){return Fe.post(`${Ze.Z.student}/OilItemAnswer/SaveOilBagAnswerRecord`,xe.Z.handlerStudentParamsForPost(e))},getCheerPackExamAnswer(e){return Fe.post(`${Ze.Z.student}/OilItemAnswer/GetOilByTag`,xe.Z.handlerStudentParamsForPost(e))},getOfficialContestHistory(e){return Fe.post(`${Ze.Z.student}/ContestBigInfo/ListHistoryInfo`,xe.Z.handlerStudentParamsForPost(e))},getOfficialContestPageTitleInfo(e){return Fe.post(`${Ze.Z.student}/ContestBigInfo/InfoByReleaseId`,xe.Z.handlerStudentParamsForPost(e))}};var Ke=He;const Qe={getMessage(e){return Fe.get(`${Ze.Z.sq}/message`,{params:xe.Z.handlerStudentParamsForGet(e)})},getMessageDetails(e){return Fe.get(`${Ze.Z.sq}/messageDetails`,{params:xe.Z.handlerStudentParamsForGet(e)})},getMessageTemplate(e){return Fe.post(`${Ze.Z.student}/StuMsg/GetById`,xe.Z.handlerStudentParamsForPost(e))}};var ze=Qe;const Je={getWordBookList(e){return Fe.get(`${Ze.Z.student}/TaskNewWordBook/BookList`,{params:xe.Z.handlerStudentParamsForGet(e)})},postWordBookAdd(e){return Fe.post(`${Ze.Z.student}/TaskNewWordBook/AddWord`,xe.Z.handlerStudentParamsForPost(e))},postWordBookDelete(e){return Fe.post(`${Ze.Z.student}/TaskNewWordBook/RemoveWord`,xe.Z.handlerStudentParamsForPost(e))},getWordBookWordList(e){return Fe.get(`${Ze.Z.student}/TaskNewWordBook/BookListV1`,{params:xe.Z.handlerStudentParamsForGet(e)})},getSearchWord(e){return Fe.get(`${Ze.Z.student}/Course/SearchWordCards`,{params:xe.Z.handlerStudentParamsForGet(e)})}};var Xe=Je;const et={getUserInfo(e){return Fe.get(`${Ze.Z.student}/Info`,{params:xe.Z.handlerStudentParamsForGet(e)})},getUserAvatar(e){return Fe.get(`${Ze.Z.student}/SynWechatInfo`,{params:xe.Z.handlerStudentParamsForGet(e)})},postUserInfo(e){return Fe.post(`${Ze.Z.student}/Update`,xe.Z.handlerStudentParamsForPost(e))},getMyClass(e){return Fe.get(`${Ze.Z.student}/ClassInfo`,{params:xe.Z.handlerStudentParamsForGet(e)})},getMessage(e){return Fe.get(`${Ze.Z.student}/MsgStatus`,{params:xe.Z.handlerStudentParamsForGet(e)})},postMessage(e){return Fe.post(`${Ze.Z.student}/UpdateMsgStatus`,xe.Z.handlerStudentParamsForPost(e))},getCourseActive(e){return Fe.get(`${Ze.Z.student}/VipInfo`,{params:xe.Z.handlerStudentParamsForGet(e)})},postMemberRegister(e){return Fe.post(`${Ze.Z.student}/MemberRegister`,xe.Z.handlerStudentParamsForPost(e))},postQuitClass(e){return Fe.post(`${Ze.Z.student}/QuitClass`,xe.Z.handlerStudentParamsForPost(e))}};var tt=et;const st={getIntegralRankingClass(e){return Fe.get(`${Ze.Z.student}/Ranking/ClassList`,{params:xe.Z.handlerStudentParamsForGet(e)})},getIntegralRankingClassYear(e){return Fe.get(`${Ze.Z.student}/Ranking/ClassYearList`,{params:xe.Z.handlerStudentParamsForGet(e)})},getIntegralRankingSchool(e){return Fe.get(`${Ze.Z.student}/Ranking/SchoolList`,{params:xe.Z.handlerStudentParamsForGet(e)})},getIntegralRanking(e){return Fe.post(`${Ze.Z.student}/Ranking/PageRankIntegral`,xe.Z.handlerStudentParamsForPost(e))}};var rt=st;const nt={getCourseActiveList(e){return Fe.get(`${Ze.Z.school}/CoursePay/CourseVipList`,{params:xe.Z.handlerStudentParamsForGet(e)})},getCourseActiveInfo(e){return Fe.get(`${Ze.Z.school}/CoursePay/CourseVipInfo`,{params:xe.Z.handlerStudentParamsForGet(e)})},postCourseBuy(e){return Fe.post(`${Ze.Z.school}/CoursePay/PlaceOrder`,xe.Z.handlerStudentParamsForPost(e))},getCourseReleaseMembers(e){return Fe.get(`${Ze.Z.school}/CoursePay/ReleaseMembers`,{params:xe.Z.handlerStudentParamsForGet(e)})},postCourseCodeCheck(e){return Fe.post(`${Ze.Z.student}/CheckCourseActivationCode`,xe.Z.handlerStudentParamsForPost(e))}};var at=nt;const ot={postVocabularyTestResult(e){return Fe.post("https://vocab-api.sflep.com/get_chart",e)}};var it=ot;const ut={postAddReviewWord(e){return Fe.post(`${Ze.Z.student}/ReviewStudy/AddWords`,xe.Z.handlerStudentParamsForPost(e))},getReviewWordList(e){return Fe.post(`${Ze.Z.student}/ReviewStudy/PageWordList`,xe.Z.handlerStudentParamsForPost(e))},postDeleteReviewWord(e){return Fe.post(`${Ze.Z.student}/ReviewStudy/DelWord`,xe.Z.handlerStudentParamsForPost(e))},postSearchReviewTask(e){return Fe.post(`${Ze.Z.student}/ReviewStudy/Info`,xe.Z.handlerStudentParamsForPost(e))},postStopReviewTask(e){return Fe.post(`${Ze.Z.student}/ReviewStudy/StopCurrentAnswer`,xe.Z.handlerStudentParamsForPost(e))},postStartReviewTask(e){return Fe.post(`${Ze.Z.student}/ReviewStudy/ChoseWordsToTask`,xe.Z.handlerStudentParamsForPost(e))},getReviewTaskTopic(e){return Fe.post(`${Ze.Z.student}/ReviewStudy/StartAnswer`,xe.Z.handlerStudentParamsForPost(e))},postReviewTaskVerityAnswer(e){return Fe.post(`${Ze.Z.student}/ReviewStudy/VerifyAnswer`,xe.Z.handlerStudentParamsForPost(e))},postReviewTaskSubmitAnswer(e){return Fe.post(`${Ze.Z.student}/ReviewStudy/SubmitAnswer`,xe.Z.handlerStudentParamsForPost(e))},postReviewTaskSkipTopic(e){return Fe.post(`${Ze.Z.student}/ReviewStudy/SkipItem`,xe.Z.handlerStudentParamsForPost(e))},postReviewTaskSkipTopicMode(e){return Fe.post(`${Ze.Z.student}/ReviewStudy/SkipTopicMode`,xe.Z.handlerStudentParamsForPost(e))}};var ct=ut;const lt={getPKTaskTopic(e){return Fe.post(`${Ze.Z.url}/ClassPk/Answer/NowStage`,xe.Z.handlerStudentParamsForPost(e))},postPKTaskSubmitAnswer(e){return Fe.post(`${Ze.Z.url}/ClassPk/Answer/Submit`,xe.Z.handlerStudentParamsForPost(e))},getPKTaskRanking(e){return Fe.post(`${Ze.Z.url}/ClassPk/Answer/RankList`,xe.Z.handlerStudentParamsForPost(e))},postPKTaskRevive(e){return Fe.post(`${Ze.Z.url}/ClassPk/Answer/Revive`,xe.Z.handlerStudentParamsForPost(e))},getPKTaskStudentLiveDetails(e){return Fe.post(`${Ze.Z.url}/ClassPk/Answer/LiveInfo`,xe.Z.handlerStudentParamsForPost(e))},getPKTaskStudentRanking(e){return Fe.post(`${Ze.Z.url}/ClassPk/Answer/RankList`,xe.Z.handlerStudentParamsForPost(e))}};var dt=lt;const pt={postAuthorize(e){return Fe.post(`${Ze.Z.auth}/Thirdpart/Authorize`,xe.Z.handlerStudentParamsForPost(e))},postAuthorizeLogin(e){return Fe.post(`${Ze.Z.auth}/Wechat/LoginByWechatCode`,xe.Z.handlerStudentParamsForPost(e))},postJsConfig(e){return Fe.post(`${Ze.Z.auth}/Wechat/Config`,xe.Z.handlerStudentParamsForPost(e))},getWordTranslate(e){return Fe.get(`${Ze.Z.student}/Course/SearchWord`,{params:xe.Z.handlerStudentParamsForGet(e)})},postTestLogin(e){return Fe.post(`${Ze.Z.auth}/Login/ByUserId`,xe.Z.handlerStudentParamsForPost(e))},postUserLogin(e){return Fe.post(`${Ze.Z.auth}/Login`,xe.Z.handlerStudentParamsForPost(e))},getCourseList(e){return Fe.get(`${Ze.Z.teacher}/Course/List`,{params:xe.Z.handlerStudentParamsForGet(e)})},getSystemTime(e){return Fe.get(`${Ze.Z.auth}/SystemTime`,{params:xe.Z.handlerStudentParamsForGet(e)})},getSchool(e){return Fe.get(`${Ze.Z.teacher}/School/ChoseList`,{params:xe.Z.handlerStudentParamsForGet(e)})},postTeacherDelete(e){return Fe.post(`${Ze.Z.school}/TeacherInfo/Remove`,xe.Z.handlerStudentParamsForPost(e))},postVerigyAnswer(e){return Fe.post(`${Ze.Z.student}/StudyTask/VerigyAnswer`,xe.Z.handlerStudentParamsForPost(e))},getWritings(e){return Fe.get(`${Ze.Z.student}/CourseSenInfo/ListSources`,{params:xe.Z.handlerStudentParamsForGet(e)})},PostPageCountStats(e){return Fe.post(`${Ze.Z.school}/AdCountInfo/SaveCount`,xe.Z.handlerStudentParamsForPost(e))},postContact(e){return Fe.post(`${Ze.Z.student}/Contact/Save`,xe.Z.handlerStudentParamsForPost(e))},postContestSchoolCertificateCheck(e){return Fe.post(`${Ze.Z.school}/ContestBigCertSchool/ExistCertByCode`,xe.Z.handlerStudentParamsForPost(e))},postContestSchoolCertificate(e){return Fe.post(`${Ze.Z.school}/ContestBigCertSchool/GetCertByCode`,xe.Z.handlerStudentParamsForPost(e))},postFrontLog(e){return Fe.post(`${Ze.Z.url}/LogFront/DaliyLog/Save`,xe.Z.handlerStudentParamsForPost(e))},postReport(e){return Fe.post(`${Ze.Z.url}/CourseSprint/SpMonitor/Report`,xe.Z.handlerStudentParamsForPost(e))}};var ht=pt,mt={commApi:ht,sHome:Me,sTask:je,sSelfStudyTask:qe,sStartExam:Be,sWord:Ne,sSignIn:Ye,sContest:Ke,sMessage:ze,sWordBook:Xe,sSetting:tt,sRanking:rt,sCourseActive:at,sVocabularyTest:it,sReview:ct,sTaskPK:dt},gt=s(59028),ft=s.n(gt),St=s(87616),wt=s.n(St),_t=s(14377),vt=s(25071),kt=s(42618);let Ct=function(e){let t=Math.ceil(e/1e3);return t>3600?(t/3600).toFixed(1)+"h":t>60?parseInt(t/60)+"m":parseInt(t)+"s"},yt=function(e){return e>3600?(e/3600).toFixed(1)+"h":e>60?parseInt(e/60)+"m":parseInt(e)+"s"},Zt=function(e){let t=e.getFullYear(),s=e.getMonth()+1,r=e.getDate();return s<10&&(s="0"+s),r<10&&(r="0"+r),t+"-"+s+"-"+r},Pt=function(e){let t=e.getFullYear(),s=e.getMonth()+1,r=e.getDate();return s<10&&(s="0"+s),r<10&&(r="0"+r),t+"-"+s+"-"+r},At=function(e){let t=e.getFullYear(),s=e.getMonth()+1;return s<10&&(s="0"+s),t+"-"+s},bt=function(e){let t=new Date(e),s=t.getFullYear(),r=t.getMonth()+1,n=t.getDate(),a=t.getHours(),o=t.getMinutes();return r<10&&(r="0"+r),n<10&&(n="0"+n),a<10&&(a="0"+a),o<10&&(o="0"+o),s+"-"+r+"-"+n+" "+a+":"+o},It=function(e,t){t=t||0,e+=t;let s=be.Z.getTimeZone();s&&(e-=36e5*s);let r=new Date(e),n=r.getFullYear(),a=r.getMonth()+1,o=r.getDate(),i=r.getHours(),u=r.getMinutes();a<10&&(a="0"+a),o<10&&(o="0"+o),i<10&&(i="0"+i),u<10&&(u="0"+u);let c=n+"-"+a+"-"+o+" "+i+":"+u;return s&&(c+="（北京时间）"),c},Tt=function(e){return e.replace(/\{/g,"").replace(/\}/g,"")},Lt=function(e){return e.includes("{")&&(e=e.replace(/{/g,"").replace(/}/g,"")),e.includes("<i>")&&(e=e.replace(/<i>/g,"").replace(/<\/i>/g,"")),e},Dt=function(e){return"________"},$t=function(e){let t=new Date(e),s=t.getFullYear(),r=t.getMonth()+1,n=t.getDate(),a=t.getHours(),o=t.getMinutes();r<10&&(r="0"+r),n<10&&(n="0"+n),a<10&&(a="0"+a),o<10&&(o="0"+o);let i=new Date,u=i.getFullYear();return s===u?r+"/"+n+" "+a+":"+o:s+"/"+r+"/"+n};const Et=function(e){let t=new Date(e),s=t.getFullYear(),r=t.getMonth()+1,n=t.getDate(),a=t.getHours(),o=t.getMinutes();return r<10&&(r="0"+r),n<10&&(n="0"+n),a<10&&(a="0"+a),o<10&&(o="0"+o),s+"-"+r+"-"+n+" "+a+":"+o},Ft=function(e,t){let s=new Date(e+t),r=s.getFullYear(),n=s.getMonth()+1,a=s.getDate(),o=s.getHours(),i=s.getMinutes();return n<10&&(n="0"+n),a<10&&(a="0"+a),o<10&&(o="0"+o),i<10&&(i="0"+i),r+"-"+n+"-"+a+" "+o+":"+i},xt=function(e,t){let s=new Date(e+t),r=s.getFullYear(),n=s.getMonth()+1,a=s.getDate();return n<10&&(n="0"+n),a<10&&(a="0"+a),r+"-"+n+"-"+a},Rt=function(e){let t=new Date(e),s=t.getMonth()+1,r=t.getDate(),n=t.getHours(),a=t.getMinutes();return s<10&&(s="0"+s),r<10&&(r="0"+r),n<10&&(n="0"+n),a<10&&(a="0"+a),s+"/"+r+" "+n+":"+a},Mt=function(e,t){let s=new Date(e+t),r=s.getMonth()+1,n=s.getDate(),a=s.getHours(),o=s.getMinutes();return r<10&&(r="0"+r),n<10&&(n="0"+n),a<10&&(a="0"+a),o<10&&(o="0"+o),r+"/"+n+" "+a+":"+o},Wt=function(e){let t=new Date(e),s=t.getFullYear(),r=t.getMonth()+1,n=t.getDate();return r<10&&(r="0"+r),n<10&&(n="0"+n),s+"-"+r+"-"+n},jt=function(e,t){t=t||"-";let s=new Date(e),r=s.getMonth()+1,n=s.getDate();return`${r}${t}${n}`},Ot=function(e){let t=0,s=0;return e>=60?(t=parseInt(e/60),s=e-60*t):s=e,(t>9?t:"0"+t)+":"+(s>9?s:"0"+s)},qt=function(e){let t=new Date(e),s=t.getFullYear(),r=t.getMonth()+1,n=t.getDate();return s=s.toString(),s=s.substring(s.length-2,s.length),r<10&&(r="0"+r),n<10&&(n="0"+n),s+"/"+r+"/"+n},Vt=function(e){return e=e||0,e/100},Bt=function(e){return e=e||0,e/316224e5},Ut=function(e){return e=e||0,e=parseInt(e),e>999999?(e=parseInt(e/1e3),e=e/10+"万",e):e},Nt=function(e){return e=e||"",e=e.replace("answer&&",""),e},Gt=function(e,t){kt.Z.wordAmendList;let s=[];return s=t?kt.Z.wordAmendList.filter((s=>s.listId===t&&decodeURIComponent(s.word)===decodeURIComponent(e))):kt.Z.wordAmendList.filter((t=>decodeURIComponent(t.word)===decodeURIComponent(e))),s&&s.length&&(e=s[0].wordAmend),decodeURIComponent(e)};let Yt=function(e){return e.includes("%20")&&(e=e.replace(/%20/g," ")),e},Ht=function(e){return decodeURIComponent(e)};const Kt=function(e){e=parseInt(e);let t=new Date(e),s=t.getFullYear(),r=t.getMonth()+1,n=t.getDate(),a=t.getHours(),o=t.getMinutes();return r=r<10?"0"+r:r,n=n<10?"0"+n:n,a=a<10?"0"+a:a,o=o<10?"0"+o:o,`${s}年${r}月${n}日 ${a}:${o}`};var Qt=s(49926);n["default"].prototype.$api=mt,n["default"].prototype.$tools=be.Z,n["default"].prototype.$httpTools=xe.Z,n["default"].prototype.$wx=ft(),n["default"].use(wt(),{name:"v-touch"}),wt().config.swipe={threshold:50},n["default"].use(s(36025)),n["default"].prototype.$messages=_t.Z,n["default"].prototype.$disposeResp=vt.Z,n["default"].prototype.$config=kt.Z,Object.keys(r).forEach((e=>n["default"].filter(e,r[e]))),h.Z.beforeEach(((e,t,s)=>{e.meta.keepAlive=!1;const r=["topicStudy&sUnit"];if(t&&!r.includes(t.name+"&"+e.name)&&t.meta.rank&&t.meta.rank>e.meta.rank&&(e.meta.keepAlive=!0),"topicExamContest"===e.name||"topicExam"===e.name){let t=(0,Qt.Mn)();t||"errorMobile"===e.name?s():s({path:"/errorMobile"})}else s();s()})),h.Z.afterEach((e=>{e.meta.keepAlive||be.Z.setScrollTop(e.meta.rank,0),gtag("config","UA-150293042-1",{page_path:e.fullPath,page_title:e.meta.title})})),n["default"].mixin({beforeRouteLeave:function(e,t,s){if(t&&t.meta.rank&&e.meta.rank&&t.meta.rank>e.meta.rank){if(this.$vnode&&this.$vnode.data.keepAlive&&this.$vnode.parent&&this.$vnode.parent.componentInstance&&this.$vnode.parent.componentInstance.cache&&this.$vnode.componentOptions){var r=null==this.$vnode.key?this.$vnode.componentOptions.Ctor.cid+(this.$vnode.componentOptions.tag?`::${this.$vnode.componentOptions.tag}`:""):this.$vnode.key,n=this.$vnode.parent.componentInstance.cache,a=this.$vnode.parent.componentInstance.keys;if(n[r]){if(a.length){var o=a.indexOf(r);o>-1&&a.splice(o,1)}delete n[r]}}this.$destroy()}s()}}),n["default"].config.productionTip=!1,new n["default"]({router:h.Z,store:ye,render:e=>e(p)}).$mount("#app")},23461:function(e,t,s){"use strict";s.d(t,{Z:function(){return H}});var r=s(36369),n=s(72631);let a=[{path:"/error/homeMiss/:name",name:"errorHomeMiss",meta:{title:"主页错误"},component:()=>s.e(763).then(s.bind(s,40763))},{path:"/error/pageMiss/:name",name:"errorPageMiss",meta:{title:"页面错误"},component:()=>s.e(2042).then(s.bind(s,52042))},{path:"/error/pageSorry/:name",name:"errorPageSorry",meta:{title:"系统提示"},component:()=>s.e(5180).then(s.bind(s,65180))},{path:"/error/safetyVerify/:name",name:"errorSafetyVerify",meta:{title:"安全检测"},component:()=>s.e(4308).then(s.bind(s,14308))},{path:"/error/serverFault/:name",name:"errorServerFault",meta:{title:"网络异常提醒"},component:()=>s.e(6760).then(s.bind(s,36760))},{path:"/error/topicMiss/:name",name:"errorTopicMiss",meta:{title:"题目加载错误"},component:()=>s.e(2946).then(s.bind(s,12946))},{path:"/errorScan",name:"errorScan",meta:{title:"扫码提示"},component:()=>s.e(561).then(s.bind(s,40561))},{path:"/errorWeChat",name:"errorWeChat",meta:{title:"微信认证错误"},component:()=>s.e(3642).then(s.bind(s,23642))},{path:"/error/answerException/:name",name:"answerException",meta:{title:"安全检测"},component:()=>s.e(2086).then(s.bind(s,52086))},{path:"/error/taskCreate/:name",name:"taskCreate",meta:{title:"任务创建失败"},component:()=>s.e(4652).then(s.bind(s,4652))},{path:"/errorMobile",name:"errorMobile",meta:{title:"设备限制"},component:()=>s.e(1104).then(s.bind(s,1104))},{path:"/error/systemMaintain/:name",name:"systemMaintain",meta:{title:"系统维护"},component:()=>s.e(7839).then(s.bind(s,17839))},{path:"/error/test",name:"errorTest",meta:{title:"测试"},component:()=>s.e(2484).then(s.bind(s,42484))}];var o=a;let i=[{path:"/student/taskList",name:"sTaskList",meta:{title:"班级任务",rank:2,keepAlive:!1},component:()=>s.e(8949).then(s.bind(s,98949))},{path:"/student/topicPK",name:"topicPK",meta:{title:"PK",rank:3,keepAlive:!1},component:()=>Promise.all([s.e(2351),s.e(3725),s.e(1539)]).then(s.bind(s,11539))},{path:"/student/topicExam",name:"topicExam",meta:{title:"测试",rank:3,keepAlive:!1},component:()=>Promise.all([s.e(2351),s.e(8629),s.e(5730),s.e(1608)]).then(s.bind(s,16321))},{path:"/student/studyTask",name:"sStudyTask",meta:{title:"学习任务",rank:3,keepAlive:!1},component:()=>s.e(5683).then(s.bind(s,25683))},{path:"/student/topicStudy",name:"topicStudy",meta:{title:"练习",rank:4,keepAlive:!1},component:()=>Promise.all([s.e(2351),s.e(8629),s.e(8785),s.e(5730),s.e(3317)]).then(s.bind(s,68998))},{path:"/student/studyTaskGrade",name:"sStudyTaskGrade",meta:{title:"学习任务成绩",rank:4,keepAlive:!1},component:()=>s.e(5874).then(s.bind(s,15874))},{path:"/student/taskGrade",name:"sTaskGrade",meta:{title:"任务成绩",rank:4,keepAlive:!1},component:()=>s.e(589).then(s.bind(s,40589))},{path:"/student/word1/:word",name:"sWord1",meta:{title:"单词学习",rank:5,keepAlive:!1},component:()=>s.e(9786).then(s.bind(s,9786))},{path:"/student/word/:word",name:"sWord",meta:{title:"单词学习",rank:4,keepAlive:!1},component:()=>s.e(9786).then(s.bind(s,9786))},{path:"/student/course",name:"sCourse",meta:{title:"课程首页",rank:2,keepAlive:!1},component:()=>s.e(4060).then(s.bind(s,74060))},{path:"/student/courseList",name:"sCourseList",meta:{title:"切换课程"},component:()=>s.e(4724).then(s.bind(s,34724))},{path:"/student/course/glossary/:courseId",name:"sCourseGlossary",meta:{title:"词汇总表",rank:3,keepAlive:!1},component:()=>Promise.all([s.e(3345),s.e(1505)]).then(s.bind(s,21505))},{path:"/student/course/glossaryWord",name:"sCourseGlossaryWord",meta:{title:"词汇总表单词",rank:4,keepAlive:!1},component:()=>s.e(891).then(s.bind(s,60891))},{path:"/student/unit/:unit_id",name:"sUnit",meta:{title:"单元首页",rank:3,keepAlive:!1},component:()=>s.e(9505).then(s.bind(s,99505))},{path:"/student/ranking",name:"sRanking",meta:{title:"排行榜",rank:2,keepAlive:!1},component:()=>s.e(4906).then(s.bind(s,94906))},{path:"/student/rankingHistory/:rankingType/:rankingTypeDate",name:"sRankingHistory",meta:{title:"历史榜单",rank:3,keepAlive:!1},component:()=>s.e(614).then(s.bind(s,3130))},{path:"/student/wordBook",name:"wordBook",meta:{title:"生词本",rank:2,keepAlive:!1},component:()=>s.e(7255).then(s.bind(s,47255))},{path:"/student/wordBookCourse",name:"wordBookCourse",meta:{title:"生词本教材列表",rank:2,keepAlive:!1},component:()=>s.e(1495).then(s.bind(s,41495))},{path:"/student/wordBookWordList",name:"wordBookWordList",meta:{title:"生词本单词列表",rank:3,keepAlive:!1},component:()=>s.e(2250).then(s.bind(s,2250))},{path:"/student/wordBookWord/:word",name:"wordBookWord",meta:{title:"生词本单词",rank:4,keepAlive:!1},component:()=>s.e(5228).then(s.bind(s,65228))},{path:"/student/signIn",name:"sSignIn",meta:{title:"签到",rank:2,keepAlive:!1},component:()=>s.e(6932).then(s.bind(s,66932))},{path:"/student/setting",name:"sSetting",meta:{title:"设置",rank:2,keepAlive:!1},component:()=>s.e(1787).then(s.bind(s,61787))},{path:"/student/setting/userInfo",name:"sUserInfo",meta:{title:"个人信息"},component:()=>s.e(9290).then(s.bind(s,29290))},{path:"/student/setting/myClass",name:"sMyClass",meta:{title:"我的班级"},component:()=>s.e(2751).then(s.bind(s,62751))},{path:"/student/setting/message",name:"sMessage",meta:{title:"通知设置"},component:()=>s.e(4799).then(s.bind(s,44799))},{path:"/student/setting/answer",name:"sAnswer",meta:{title:"答题设置"},component:()=>s.e(2511).then(s.bind(s,82511))},{path:"/student/courseActive",name:"sCourseActive",meta:{title:"激活课程",rank:2,keepAlive:!1},component:()=>s.e(8625).then(s.bind(s,8625))},{path:"/student/courseActiveSchool",name:"sCourseActiveSchool",meta:{title:"姓名学号激活"},component:()=>s.e(183).then(s.bind(s,80183))},{path:"/student/courseActiveNotList",name:"sCourseActiveNotList",meta:{title:"未激活课程列表"},component:()=>s.e(7217).then(s.bind(s,27217))},{path:"/student/courseBuy/:id",name:"sCourseBuy",meta:{title:"课程购买"},component:()=>s.e(6023).then(s.bind(s,66023))},{path:"/student/vocabularyTest",name:"vocabularyTest",meta:{title:"词汇量测试",rank:2,keepAlive:!1},component:()=>s.e(6467).then(s.bind(s,16467))},{path:"/message/template",name:"messageTemplate",meta:{title:"消息详情"},component:()=>s.e(3307).then(s.bind(s,93307))}];var u=i;let c=[{path:"/student/wordDash",name:"wordDash",meta:{title:"单词冲刺",rank:2,keepAlive:!1},component:()=>s.e(4339).then(s.bind(s,4339))},{path:"/student/wordDash/plan",name:"wordDashPlan",meta:{title:"更改计划",keepAlive:!1},component:()=>s.e(2539).then(s.bind(s,42539))},{path:"/student/wordDash/glossary",name:"wordDashPlanGlossary",meta:{title:"词表速览",rank:2,keepAlive:!1},component:()=>s.e(6989).then(s.bind(s,66989))},{path:"/student/wordDash/randomSpell",name:"wordDashRandomSpell",meta:{title:"速拼速记",rank:3,keepAlive:!1},component:()=>s.e(3121).then(s.bind(s,83121))},{path:"/student/wordDash/wordCard",name:"wordDashWordCard",meta:{title:"单词卡片",rank:3,keepAlive:!1},component:()=>s.e(9730).then(s.bind(s,69730))},{path:"/student/wordDash/study",name:"wordDashPlanStudy",meta:{title:"单词学习",keepAlive:!1},component:()=>s.e(9415).then(s.bind(s,39415))},{path:"/student/wordDash/finished",name:"wordDashPlanFinished",meta:{title:"单词学习",keepAlive:!1},component:()=>s.e(3145).then(s.bind(s,33145))}];var l=c;let d=[{path:"/activityArea/welfareTelecom",name:"activityAreaWelfareTelecom",meta:{title:"词达人福利",keepAlive:!1},component:()=>s.e(241).then(s.bind(s,90241))},{path:"/activityArea/welfareTelecom/userCard",name:"activityAreaWelfareTelecomUserCard",meta:{title:"我的新星卡",keepAlive:!1},component:()=>s.e(7052).then(s.bind(s,47052))}];var p=d;const h=[{path:"/contest/index",name:"contestIndex",meta:{title:"词汇竞赛",rank:2,keepAlive:!1},component:()=>s.e(9621).then(s.bind(s,9621))},{path:"/contest/certificate",name:"contestCertificate",meta:{title:"竞赛证书",rank:3,keepAlive:!1},component:()=>s.e(6651).then(s.bind(s,76651))},{path:"/contest/other",name:"contestOther",meta:{title:"校内竞赛",rank:3,keepAlive:!1},component:()=>s.e(2742).then(s.bind(s,52742))},{path:"/contest/grade",name:"contestGrade",meta:{title:"竞赛成绩",rank:4,keepAlive:!1},component:()=>s.e(5120).then(s.bind(s,25120))},{path:"/contest/history",name:"contestHistory",meta:{title:"往届大赛",rank:3,keepAlive:!1},component:()=>s.e(4925).then(s.bind(s,24925))},{path:"/contest/official",name:"contestOfficial",meta:{title:"大赛信息",rank:3,keepAlive:!1},component:()=>s.e(109).then(s.bind(s,70109))},{path:"/contest/apply",name:"contestApply",meta:{title:"学生报名",rank:4,keepAlive:!1},component:()=>s.e(4048).then(s.bind(s,34048))},{path:"/contest/applyInfo",name:"contestApplyInfo",meta:{title:"学生报名信息",rank:4,keepAlive:!1},component:()=>Promise.all([s.e(3345),s.e(5341)]).then(s.bind(s,35341))},{path:"/contest/cheerPack/buy",name:"contestCheerPackBuy",meta:{title:"加油包购买"},component:()=>s.e(1716).then(s.bind(s,11716))},{path:"/contest/cheerPack/examList",name:"contestCheerPackExamList",meta:{title:"加油包内容",rank:4,keepAlive:!1},component:()=>s.e(6133).then(s.bind(s,36133))},{path:"/contest/cheerPack/examInfo",name:"contestCheerPackExamInfo",meta:{title:"加油包试题首页",rank:5,keepAlive:!1},component:()=>s.e(6477).then(s.bind(s,56477))},{path:"/contest/cheerPack/exam",name:"contestCheerPackExam",meta:{title:"加油包试题",rank:6,keepAlive:!1},component:()=>Promise.all([s.e(2351),s.e(8629),s.e(8785),s.e(7170)]).then(s.bind(s,73496))},{path:"/student/topicExamContest",name:"topicExamContest",meta:{title:"竞赛",rank:3,keepAlive:!1},component:()=>Promise.all([s.e(2351),s.e(8517)]).then(s.bind(s,79556))},{path:"/student/topicExamContestPK",name:"topicExamContestPK",meta:{title:"pk竞赛",rank:3,keepAlive:!1},component:()=>Promise.all([s.e(2351),s.e(3725),s.e(4552)]).then(s.bind(s,14552))},{path:"/student/contestSpectator/:configId",name:"spectator",meta:{title:"体验",rank:2,keepAlive:!1},component:()=>s.e(4942).then(s.bind(s,24942))}];var m=h;let g=[{path:"/student/test",name:"test",meta:{title:"测试",rank:2,keepAlive:!1},component:()=>s.e(4317).then(s.bind(s,54317))},{path:"/student/test/wordCard",name:"testWordCard",meta:{title:"单词卡片",keepAlive:!1},component:()=>s.e(3649).then(s.bind(s,13649))},{path:"/student/test/ideologicalWordCard",name:"testIdeologicalWordCard",meta:{title:"思政单词卡片",keepAlive:!1},component:()=>s.e(7592).then(s.bind(s,47592))},{path:"/student/test/course",name:"testCourse",meta:{title:"课程首页",keepAlive:!1},component:()=>s.e(6024).then(s.bind(s,46024))},{path:"/student/test/taskList",name:"taskList",meta:{title:"班级任务",keepAlive:!1},component:()=>s.e(6751).then(s.bind(s,76751))},{path:"/student/test/task-study",name:"taskStudy",meta:{title:"学习任务",keepAlive:!1},component:()=>s.e(8164).then(s.bind(s,28164))}];var f=g;const S=[{path:"/student/review",name:"sReview",meta:{title:"复习",rank:2,keepAlive:!1},component:()=>s.e(1183).then(s.bind(s,71183))},{path:"/student/reviewTask",name:"sReviewTask",meta:{title:"复习",rank:2,keepAlive:!1},component:()=>Promise.all([s.e(2351),s.e(8629),s.e(8785),s.e(553)]).then(s.bind(s,33611))}];var w=S,_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.indexData?s("div",{staticClass:"home"},[s("c-user-info",{attrs:{userInfo:e.indexData.user_info,signIn:e.indexData.sign_in,isReview:e.isReview},on:{scanQRCode:e.handlerScanQRCode}}),e.activityAreaList.length?s("div",{staticClass:"cjw-activity-area"},[s("van-notice-bar",{attrs:{background:"#ffffff",scrollable:!1}},[s("van-swipe",{staticClass:"notice-swipe",attrs:{vertical:"",autoplay:3e3,"show-indicators":!1}},e._l(e.activityAreaList,(function(t,r){return s("van-swipe-item",{key:r,on:{click:function(s){return e.handleActivityArea(t)}}},[s("div",{staticClass:"cjw-activity-content cjw-ellipsis c-font-md c-flex c-color-bg-orange-light"},[s("div",{staticClass:"c-margin-right-10"},[s("i",{staticClass:"iconfont icon-new",staticStyle:{"font-size":"30px"}})]),s("div",{staticClass:"c-flex-1 c-font-color-main"},[e._v(e._s(t.title))]),s("div",{staticClass:"c-font-color-minor"},[s("i",{staticClass:"iconfont icon-toward-right"})])])])})),1)],1)],1):e._e(),s("c-task-last",{attrs:{taskLastList:e.indexData.task_last_list},on:{"on-continue":e.handleContinueTask}}),s("div",{staticClass:"cjw-menus cjw-grid"},e._l(e.menus,(function(t,r){return 1===t.status?s("div",{key:r,staticClass:" cjw-menus-item cjw-grid-3",on:{click:function(s){return e.handlerClickMenus(t)}}},[s("div",{staticClass:"cjw-icon"},[s("i",{class:"iconfont "+t.icon}),t.hot?s("div",{staticClass:"cjw-hot"},[s("i",{staticClass:"iconfont icon-hot"})]):e._e(),t.tag&&!t.hot?s("div",{staticClass:"cjw-tag"},[s("p",[e._v(e._s(t.tag))])]):e._e()]),s("div",{staticClass:"cjw-text"},[s("p",[e._v(e._s(t.label))])])]):e._e()})),0),e.signInShow?s("div",{staticClass:"popup-sign-in"},[s("c-sign-in",{attrs:{visible:e.signInShow},on:{"change-visible":e.handlerChangeVisibleSignIn,"on-sign-in":e.handlerSignInSuccess}})],1):e._e(),s("div",{staticClass:"contest-sign-in"},[s("c-contest-info",{attrs:{visible:e.studentInfoShow,configId:e.configId,ruleId:e.ruleId},on:{changeVisible:e.handlerChangeStudentInfoShow,onConfirm:e.handlerStudentInfoConfirm}})],1),e.showStudentInfo?s("div",[s("van-popup",{attrs:{"close-on-click-overlay":!1,round:""},model:{value:e.showStudentInfo,callback:function(t){e.showStudentInfo=t},expression:"showStudentInfo"}},[s("c-student-info",{on:{"on-close":function(t){e.showStudentInfo=!1},"on-confirm":e.handleConfirmStudentInfo}})],1)],1):e._e()],1):e._e()},v=[],k=s(63822),C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.userInfo?r("div",{staticClass:"home-user-info"},[r("div",{staticClass:"cjw-card"},[r("div",{staticClass:"cjw-half-top cjw-flex"},[r("div",{staticClass:"cjw-avatar",on:{click:e.toSettingUserInfo}},[e.userInfo.avatar?r("img",{staticClass:"cjw-avatar-img",attrs:{src:e.userInfo.avatar}}):r("img",{staticClass:"cjw-avatar-img",attrs:{src:s(38308)}})]),r("div",{staticClass:"cjw-user-base-info cjw-flex-1"},[r("div",{staticClass:"cjw-name cjw-flex"},[r("h4",{staticClass:"cjw-ellipsis"},[e._v(e._s(e.userInfo.student_name||"xxxxxx"))]),r("p",{directives:[{name:"show",rawName:"v-show",value:1===e.userInfo.member_state,expression:"userInfo.member_state === 1"}],staticClass:"cjw-member"},[r("i",{staticClass:"iconfont icon-vip1"})])]),r("p",{staticClass:"cjw-ellipsis"},[r("span",[e._v(e._s(e.userInfo.class_year))]),e.userInfo.class_year?r("span",[e._v("级")]):e._e(),r("span",[e._v(e._s(e.userInfo.class_name||"未加入班级"))])])]),r("div",{staticClass:"cjw-scan"},[r("div",{staticClass:"cjw-scan-icon cjw-flex"},[r("div",{staticClass:"cjw-scan-shell cjw-flex",on:{click:e.scanQRCode}},[r("i",{staticClass:"iconfont icon-scan"})])]),r("p",{staticClass:"cjw-icon-text"},[e._v("扫一扫")])])]),r("div",{staticClass:"cjw-user-data cjw-flex"},[r("div",{staticClass:"cjw-learning-level cjw-flex-1",on:{click:e.handlerLearningLevel}},[r("h4",[e._v("Lv."+e._s(e.learningLevelInfo.currentLevel))]),r("p",[e._v("等级")])]),r("div",{staticClass:"cjw-integral cjw-flex-1",on:{click:e.handlerIntegral}},[r("h4",[e._v(e._s(parseInt(e.userInfo.integral_study+e.userInfo.integral_sign)||0))]),r("p",[e._v("积分")])]),r("div",{staticClass:"cjw-energy-pack cjw-flex-1",on:{click:e.handlerEnergyPack}},[r("h4",[e._v(e._s(parseInt(e.userInfo.energy_pack)||0))]),r("p",[e._v("能量包")])])])]),r("van-popup",{model:{value:e.learningLevelShow,callback:function(t){e.learningLevelShow=t},expression:"learningLevelShow"}},[r("div",{staticClass:"cjw-popup-learning-level"},[r("div",{staticClass:"cjw-header cjw-flex"},[r("h4",[e._v("Lv."+e._s(e.learningLevelInfo.currentLevel))])]),r("div",{staticClass:"cjw-section"},[r("p",{staticClass:"cjw-current-exp"},[e._v("当前经验值："+e._s(e.learningLevelInfo.exp))]),r("div",{staticClass:"cjw-progress"},[r("van-progress",{attrs:{"pivot-text":"",color:"#f2826a",percentage:e.learningLevelInfo.progress}})],1),r("div",{staticClass:"cjw-level cjw-flex"},[r("p",{staticClass:"cjw-level-left cjw-flex-1"},[e._v("Lv."+e._s(e.learningLevelInfo.currentLevel)+"("+e._s(e.learningLevelInfo.currentLevelExp)+")")]),r("p",{staticClass:"cjw-level-right cjw-flex-1"},[e._v("Lv."+e._s(e.learningLevelInfo.nextLevel)+"("+e._s(e.learningLevelInfo.nextLevelExp)+")")])])])])]),r("van-popup",{model:{value:e.integralShow,callback:function(t){e.integralShow=t},expression:"integralShow"}},[r("div",{staticClass:"cjw-popup-integral"},[r("div",{staticClass:"cjw-header"},[r("h4",[e._v(e._s(parseInt(e.userInfo.integral_study+e.userInfo.integral_sign)||0))]),r("p",[e._v("当前累计积分")])]),r("div",{staticClass:"cjw-section cjw-flex"},[r("div",{staticClass:"cjw-study cjw-flex-1"},[r("h4",[e._v(e._s(parseInt(e.userInfo.integral_study)||0))]),r("p",[e._v("学习积分")])]),r("div",{staticClass:"cjw-sign-in-1 cjw-flex-1"},[r("h4",[e._v(e._s(parseInt(e.userInfo.integral_sign)||0))]),r("p",[e._v("签到积分")])])])])]),r("van-popup",{model:{value:e.energyPackShow,callback:function(t){e.energyPackShow=t},expression:"energyPackShow"}},[r("div",{staticClass:"cjw-popup-energy-pack"},[r("div",{staticClass:"cjw-header"},[r("h4",[e._v("能量包说明")])]),r("div",{staticClass:"cjw-get-way"},[r("h4",[e._v("获得方式：")]),r("p",[e._v("1、完成任务")]),r("p",[e._v("2、连续签到")])]),r("div",{staticClass:"cjw-use"},[r("h4",[e._v("使用场景：")]),r("p",[e._v("1、测试任务延长答题时间；每题限用3次")])])])])],1):e._e()},y=[],Z={name:"homeUserInfo",data(){return{learningLevelShow:!1,integralShow:!1,energyPackShow:!1}},props:{userInfo:Object,signIn:Object,isReview:{type:Boolean,default:!1}},created(){},computed:{learningLevelInfo:function(){let e=Math.round(this.userInfo.integral_study+this.userInfo.integral_sign)||0,t=this.$config.levelExp,s={progress:0};s.exp=e;for(let r=0;r<t.length;r++)if(e<t[r]){s.currentLevel=r,s.currentLevelExp=t[r-1],s.nextLevel=r+1,s.nextLevelExp=t[r],e===s.currentLevelExp?s.progress=0:(s.progress=parseInt((e-s.currentLevelExp)/(s.nextLevelExp-s.currentLevelExp)*100),0===s.progress&&(s.progress=1));break}return s}},methods:{scanQRCode(){this.$emit("scanQRCode")},handlerLearningLevel(){this.learningLevelShow=!0},handlerIntegral(){this.integralShow=!0},handlerEnergyPack(){this.energyPackShow=!0},toSettingUserInfo(){this.$router.push("/student/setting/userInfo")},onReview(){this.$router.push("/student/review")}}},P=Z,A=s(1001),b=(0,A.Z)(P,C,y,!1,null,"eb4bebaa",null),I=b.exports,T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.taskLastList.length?s("div",{staticClass:"home-task-last"},[s("v-touch",{staticClass:"wrapper",attrs:{"swipe-options":{direction:"horizontal"}},on:{swipeleft:e.swipeLeft,swiperight:e.swipeRight}},[s("div",{staticClass:"cjw-task-last"},[s("van-swipe",{ref:"swipeTaskLast",attrs:{touchable:!1,"stop-propagation":""},on:{change:e.handleChangeSwipeItem}},e._l(e.filterTaskLastList,(function(t,r){return s("van-swipe-item",{key:r},[s("div",{staticClass:"cjw-card cjw-flex"},[s("div",{staticClass:"cjw-card-icon"},[1===t.task_type?s("p",[s("i",{staticClass:"iconfont icon-task-study"})]):2===t.task_type?s("p",[s("i",{staticClass:"iconfont icon-task-test"})]):3===t.task_type?s("p",[s("i",{staticClass:"iconfont icon-task-self"})]):4===t.task_type&&2!==t.contest_type?s("p",[s("i",{staticClass:"iconfont icon-contest"})]):4===t.task_type&&2===t.contest_type?s("p",[s("i",{staticClass:"iconfont icon-pk"})]):5===t.task_type?s("p",[s("i",{staticClass:"iconfont icon-review"})]):6===t.task_type?s("p",[s("i",{staticClass:"iconfont icon-task-pk"})]):7===t.task_type?s("p",[s("i",{staticClass:"iconfont icon-word-dash"})]):e._e()]),s("div",{staticClass:"cjw-card-info cjw-flex-1"},[s("div",{staticClass:"cjw-flex"},[1===t.task_type?s("h4",[e._v("学习任务")]):e._e(),2===t.task_type?s("h4",[e._v("测试任务")]):e._e(),3===t.task_type?s("h4",[e._v("自学任务")]):e._e(),4===t.task_type?s("h4",[e._v("竞赛任务")]):e._e(),5===t.task_type?s("h4",[e._v("复习任务")]):e._e(),6===t.task_type?s("h4",[e._v("PK任务")]):e._e(),7===t.task_type?s("h4",[e._v("考前冲刺")]):e._e(),s("p",[e._v(e._s(t.last_time))])]),s("p",{staticClass:"cjw-ellipsis"},[e._v(e._s(t.task_name))])]),s("div",{staticClass:"cjw-card-right"},[s("van-button",{attrs:{round:"",size:"small",type:"primary"},on:{click:function(s){return e.handleContinueTask(t)}}},[e._v("继续任务")])],1)])])})),1)],1)])],1):e._e()},L=[],D={name:"taskLast",props:{taskLastList:{type:Array,default:function(){return[]}}},data(){return{currentSwipeIndex:0}},mounted(){},computed:{filterTaskLastList(){let e=[1,2,3,4,5,6,7];return this.taskLastList.filter((t=>e.includes(t.task_type)))}},methods:{handleContinueTask(e){this.$emit("on-continue",e)},swipeLeft:function(){let e=this.taskLastList.length-1;e>this.currentSwipeIndex&&this.$refs.swipeTaskLast.next()},swipeRight:function(){this.taskLastList.length;this.currentSwipeIndex>0&&this.$refs.swipeTaskLast.prev()},handleChangeSwipeItem(e){this.currentSwipeIndex=e}}},$=D,E=(0,A.Z)($,T,L,!1,null,"333c3fd5",null),F=E.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home-sign-in"},[s("van-popup",{model:{value:e.subVisible,callback:function(t){e.subVisible=t},expression:"subVisible"}},[s("div",{staticClass:"cjw-sign-in"},[s("div",{staticClass:"cjw-popup-header"},[e.signInStatus?s("h4",[e._v("签到成功")]):s("h4",[e._v("每日签到送积分")])]),s("div",{staticClass:"cjw-popup-content"},[e.signInStatus?s("div",[s("span",[e._v("恭喜您获得")]),e.signInData&&3===e.signInData.currency_now?s("span",[e._v("15积分，2能量包")]):e.signInData&&7===e.signInData.currency_now?s("span",[e._v("25积分，4能量包")]):e.signInData&&15===e.signInData.currency_now?s("span",[e._v("55积分，10能量包")]):e.signInData&&21===e.signInData.currency_now?s("span",[e._v("105积分，20能量包")]):e.signInData&&30===e.signInData.currency_now?s("span",[e._v("155积分，30能量包")]):s("span",[e._v("5积分")])]):s("div",[s("p",[e._v("连续签到，最高可领")]),s("p",[e._v("+150积分，30能量包")])])]),e.signInStatus?e._e():s("div",{staticClass:"cjw-popup-footer"},[s("van-button",{attrs:{round:"",type:"primary",disabled:e.loading},on:{click:e.handlerSignIn}},[e._v("签到")])],1)])])],1)},R=[],M={name:"home-sign-in",data(){return{loading:!1,signInStatus:!1,signInData:null,signInTimer:0}},props:{visible:{type:Boolean,default:!1}},created(){},computed:{subVisible:{get:function(){return this.visible},set:function(e){this.$emit("change-visible",e)}}},methods:{handlerSignIn(){this.loading=!0,this.$api.sSignIn.postSignIn().then((e=>{this.$httpTools.respVerify("student","2",e,"",(e=>{if(e){this.signInStatus=!0,this.signInData=e;let t={integral:5,energyPack:0};switch(this.signInData.currency_now){case 3:t.integral=15,t.energyPack=2;break;case 7:t.integral=25,t.energyPack=4;break;case 15:t.integral=55,t.energyPack=10;break;case 21:t.integral=105,t.energyPack=20;break;case 30:t.integral=155,t.energyPack=30;break}this.$emit("on-sign-in",t),this.signInTimer=setTimeout((()=>{clearInterval(this.signInTimer),this.$emit("change-visible",!1)}),3e3)}}))})).catch((e=>{this.$messages.httpError(e)}))}},beforeDestroy(){this.signInTimer&&clearInterval(this.signInTimer)}},W=M,j=(0,A.Z)(W,x,R,!1,null,"7f4467ed",null),O=j.exports,q={name:"home",components:{CUserInfo:I,CTaskLast:F,CSignIn:O,CContestInfo:()=>s.e(4227).then(s.bind(s,14227)),CStudentInfo:()=>s.e(6275).then(s.bind(s,76275))},data(){return{indexData:null,menus:[{icon:"icon-task-class",label:"班级任务",router:"/student/taskList",tag:0,value:1,status:1},{icon:"icon-task-self",label:"自学任务",router:"/student/course",tag:0,value:2,status:1},{icon:"icon-competition",label:"词汇竞赛",router:"/contest/index",tag:0,value:3,status:1},{icon:"icon-ranking",label:"排行榜",router:"/student/ranking",tag:0,value:4,status:1},{icon:"icon-word-book",label:"生词本",router:"/student/wordBook",tag:0,value:5,status:1},{icon:"icon-sign-in",label:"签到",router:"/student/signIn",tag:0,value:6,status:1},{icon:"icon-setting",label:"设置",router:"/student/setting",tag:0,value:7,status:1},{icon:"icon-activate",label:"激活课程",router:"/student/courseActive",tag:0,value:8,status:1},{icon:"icon-cheer-pack",label:"大赛加油包",router:"/contest/cheerPack",tag:0,value:9,status:0},{icon:"icon-vocabulary-test",label:"词汇量测试",router:"/student/vocabularyTest",tag:0,value:10,status:1}],contestTag:0,studentInfoShow:!1,configId:-1,ruleId:0,currentSwipeItem:0,SwipeItem:0,checkRegistStatus:1,signInShow:!1,isReview:!1,showStudentInfo:!1,classId:0,classCode:""}},mounted(){const e=window.location.href.split("#")[0];if(e.includes("?"))return this.disposePageUrlParams(e);this.$route.meta.keepAlive||this.getIndexData()},activated(){this.getIndexData()},computed:{...(0,k.rn)("storage/studentHome",["isWxConfig","isActivityArea","activityAreaList"])},methods:{...(0,k.OI)("storage/wordDash",["setWordDashId"]),...(0,k.OI)("storage/studentHome",["setIsWxConfig"]),...(0,k.OI)("student/contest",["setContestNotJoinNum"]),...(0,k.nv)("storage/studentHome",["requestWordDashOpenStatus"]),disposePageUrlParams(e){let t="",s={};return t=e.split("?")[1],s=this.$tools.paramsSplit(decodeURI(t)),s.authorize&&"2"===s.authorize?(delete s.authorize,this.handlerWechatAuthorizeLogin(s)):s.page?this.disposeUrlParamsRouter(s):void this.routerHomePage()},handlerWechatAuthorizeLogin(e){this.$api.commApi.postAuthorizeLogin({wechat_code:e.code}).then((t=>{if(1===t.code){if(delete e.code,this.$tools.lSetStorage("USER_TOKEN",t.data.token),t.data.subscribe&&"0"===t.data.subscribe)return this.$dialog.alert({title:"未关注提醒",message:"关注“词达人”公众号，获取赛事通知等更多服务。",messageAlign:"left",confirmButtonText:"去关注"}).then((()=>{window.location.replace(this.$config.vocabgoUrl)}));if(e.page)return this.disposeUrlParamsRouter(e);this.routerHomePage()}else this.$dialog.alert({message:t.msg}).then((()=>{this.routerHomePage()}))})).catch((e=>{const t=setTimeout((()=>{clearTimeout(t),this.routerHomePage()}),1e3)}))},disposeUrlParamsRouter(e){const t=e.page;delete e.page;let s=`${this.$config.frontUrl}${this.$config.distDir}/#/`;["vocabularyTest","courseActiveNotList","courseBuy","wordDash"].includes(t)&&(s=`${s}student/${t}`),"contestOfficial"===t&&(s=`${s}contest/official`),"messageTemplate"===t&&(s=`${s}message/template`),"welfareTelecom"===t&&(s=`${s}activityArea/welfareTelecom`);const r=this.$tools.paramsSplicing(e);r&&(s=`${s}?${r}`),window.location.replace(s)},routerHomePage(){window.location.replace(`${this.$config.frontUrl}${this.$config.distDir}/`)},getIndexData(){this.$api.sHome.getHome().then((e=>{this.$httpTools.respVerify("student","1",e,"home",(e=>{if(e){this.indexData=e,this.$tools.lSetStorage("S_HOME",this.indexData||null),this.$tools.sSetStorage("ENERGY_PACK",this.indexData.user_info.energy_pack),this.indexData.user_info.course_id||this.$tools.lSetStorage("new-user-guidebook",this.$config.newUserGuidebook),this.menus[8].status=0,this.menus[8].hot=!1,this.indexData.oil_info&&1===this.indexData.oil_info.show_status&&(this.menus[8].status=1,1===this.indexData.oil_info.hot_show_status&&(this.menus[8].hot=!0));let t=this.indexData.user_info.update_time||this.$tools.getTimestamp();if(new Date(t).toDateString()!==(new Date).toDateString()){setTimeout(function(){this.signInShow=!0}.bind(this),1e3)}if(this.indexData.contest_info){let e=this.indexData.contest_info.not_start_num||0;this.setContestNotJoinNum(e);let t=this.menus.findIndex((e=>"词汇竞赛"===e.label));e&&-1!==t&&(this.menus[t].tag=e)}this.isWxConfig||this.getConfig(),this.getActivityAreaInfo()}}))})).catch((e=>{this.$disposeResp.serverFault("student",e)}))},getContestList(){this.$api.sContest.getContestList().then((e=>{this.$httpTools.respVerify("student","3",e,"",(e=>{if(e){let t=e.task_list||[];this.contestTag=0;for(let e=0;e<t.length;e++)-1===t[e].task_id&&[1,2].includes(t[e].over_status)&&this.contestTag++;this.menus[2].tag=this.contestTag}}))})).catch((e=>{this.$messages.httpError(e)}))},getReviewWordList(){this.$api.sReview.getReviewWordList({page_count:1,page_size:1}).then((e=>{this.$httpTools.respVerify("student","2",e,"",(e=>{e&&(this.isReview=!!e.records.length)}))})).catch((e=>{this.$messages.httpError(e)}))},getConfig(){let e=encodeURIComponent(location.href.split("#")[0]);this.$api.commApi.postJsConfig({return_url:e}).then((e=>{this.$httpTools.respVerify("student","2",e,"",(e=>{if(e){let t=e.js_config;t.debug=!1,t.jsApiList=this.$config.jsApiList,this.$httpTools.permissionsValidation(t),this.setIsWxConfig(!0)}}))})).catch((e=>{this.$messages.httpError(e)}))},getActivityAreaInfo(){this.requestWordDashOpenStatus({closeLoading:!0,closeVerify:!0})},handleActivityArea(e){if("CC_HOME"===e.type)return this.setWordDashId(e.params.spc_id),this.$router.push(`/student/wordDash?id=${e.params.spc_id}`)},handlerClickMenus(e){switch(e.value){case 2:this.$tools.sSetStorage("COURSE_ID",this.indexData.user_info.course_id),this.$router.push(e.router);break;case 1:case 3:case 4:case 5:case 6:case 7:case 8:case 10:case 99:this.$router.push(e.router);break;case 9:let t="/contest/cheerPack/buy";this.indexData&&1===this.indexData.oil_info.buy_status&&(t="/contest/cheerPack/examList"),this.$router.push({path:t,query:{contestCode:this.indexData.oil_info.contest_code,groupCode:this.indexData.oil_info.group_code}});break;case 11:this.$router.push({path:"/activityArea/welfareTelecom",query:{type:1}})}},handlerScanQRCode(){let e=this;e.$httpTools.getScanQRCode((function(t){if("scanQRCode:ok"===t.errMsg){let s=e.$tools.disposeScanQRCodeResult(t.resultStr);if(!s.length)return e.$toast("未识别的二维码");let r=s[0].split("=");if("classId"===r[0]){let t="";s[1].includes("classCode")&&(t=s[1].replace("classCode=","")),e.classId=parseInt(r[1]),e.classCode=t,e.showStudentInfo=!0}else"c"===r[0]?e.courseCodeCheck(r[1]):"spectator"===r[0]?e.handlerContestSpectator(r[1]):"contestSignIn"===r[0]?(e.configId=r[1],e.studentInfoShow=!0):"stu_sign_qr_code"===r[0]?e.handlerContestStudentApply(r[1]):e.$toast("未识别的二维码")}else e.$toast("扫码失败，请在学生端首页刷新页面后重试")}))},handlerChangeVisibleSignIn(e){this.signInShow=e},handlerSignInSuccess(){this.getIndexData()},handleConfirmStudentInfo(){this.showStudentInfo=!1,this.joinClass(this.classId,this.classCode)},joinClass(e,t){this.$api.sHome.postJoinClass({class_id:e,cc:t}).then((e=>{this.$httpTools.respVerify("student","2",e,"",(e=>{e&&this.$dialog.alert({title:"加入班级成功",message:'
                        友情提示： 为了能收到任务提醒和班级通知， 请 < span class = "cjw-color-danger" > 关注 < /span>“词达人”公众号。'}).then((()=>{this.getIndexData()}))}))})).catch((e=>{this.$messages.httpError(e)}))},courseCodeCheck(e){this.$api.sCourseActive.postCourseCodeCheck({course_activation_code:e}).then((t=>{this.$httpTools.respVerify("student","2",t,"",(t=>{if(!t||1!==t.code_status)return this.$toast("教材码已使用");let s="激活提示",r="";!t.results.length||t.results[0].expire_time<t.now_time?r=`激活后，当前教材有效期至${this.$tools.timestampFormatYMD(t.time_len+t.now_time)}，是否确定激活？`:(s="重复激活提示",r=`当前教材尚处激活状态，有效期至${this.$tools.timestampFormatYMD(t.results[0].expire_time)}。如果继续激活将消耗当前教材码，并将有效期延长至${this.$tools.timestampFormatYMD(t.results[0].after_expire_time)}。是否确定激活？`),this.$dialog.confirm({title:s,message:r,messageAlign:"left",confirmButtonText:"确定"}).then((()=>{this.courseCodeRegister(e)})).catch((()=>{}))}))})).catch((e=>{this.$messages.httpError(e)}))},courseCodeRegister(e){this.$api.sHome.postCourseCodeRegister({course_activation_code:e}).then((e=>{this.$httpTools.respVerify("student","2",e,"",(e=>{e&&this.$dialog.alert({title:"提示",message:"激活成功"}).then((()=>{this.getIndexData()}))}))})).catch((e=>{this.$messages.httpError(e)}))},handlerContestStudentApply(e){this.$router.push({path:"/contest / apply ",query:{code:e}})},handlerContestSpectator(e){this.$tools.sSetStorage("
                        CONFIG_ID ",e),this.$tools.sSetStorage("
                        TASK_TYPE ",4),this.$router.push(`/student/contestSpectator/${e}`)},handlerChangeStudentInfoShow(e){this.studentInfoShow=e},handlerStudentInfoConfirm(){this.studentInfoShow=!1,this.$toast("
                        竞赛签到成功 ")},handleContinueTask(e){return 5===e.task_type?this.$router.push(" / student / reviewTask "):7===e.task_type?(this.setWordDashId(e.params.spc_id),this.$router.push(`/student/wordDash/study?id=${e.params.spc_id}`)):(this.$tools.sSetStorage("
                        TASK_ID ",e.task_id),this.$tools.sSetStorage("
                        TASK_TYPE ",e.task_type),3===e.task_type?(this.$tools.sSetStorage("
                        COURSE_ID ",e.course_id),this.$router.push(" / student / topicStudy ")):(this.$tools.sSetStorage("
                        RELEASE_ID ",e.release_id),1===e.task_type?(this.$tools.sSetStorage("
                        COURSE_ID ",e.course_id),this.$router.push(" / student / topicStudy ")):6===e.task_type?(this.$tools.sSetStorage("
                        RELEASE_ID ",e.release_id),this.$router.push(" / student / topicPK ")):4===e.task_type&&2===e.contest_type?(this.$tools.sSetStorage("
                        PAGE_TITLE ",e.task_name),this.$tools.sSetStorage("
                        CONTEST_TYPE ",e.contest_type),this.$router.push(" / student / topicExamContestPK ")):4===e.task_type?(this.$tools.sSetStorage("
                        PAGE_TITLE ",e.task_name),this.$tools.sSetStorage("
                        CONTEST_TYPE ",e.contest_type),this.$router.push(" / student / topicExamContest ")):void this.$router.push(" / student / topicExam ")))}}},V=q,B=(0,A.Z)(V,_,v,!1,null,"
                        e2f5eef2 ",null),U=B.exports;r["
                        default "].use(n.Z);const N=n.Z.prototype.push;n.Z.prototype.push=function(e){return N.call(this,e).catch((e=>e))};const G=[{path:" / ",name:"
                        vocabgo ",redirect:" / student / home "},{path:" / student / home ",name:"
                        studentHome ",meta:{title:"
                        学生首页 ",rank:1,keepAlive:!1},component:U},{path:" / login ",name:"
                        login ",meta:{title:"
                        用户登录 "},component:()=>s.e(112).then(s.bind(s,112))},{path:" / userLogin ",name:"
                        userLogin ",meta:{title:"
                        用户登录 "},component:()=>s.e(112).then(s.bind(s,112))},{path:" / testLogin ",name:"
                        testLogin ",meta:{title:"
                        测试登录 "},component:()=>s.e(1954).then(s.bind(s,1954))},{path:" / authorize ",name:"
                        authorize ",meta:{title:"
                        微信认证 "},component:()=>s.e(4860).then(s.bind(s,34860))}],Y=G.concat(o,u,l,m,f,w,p);var H=new n.Z({routes:Y})},62717:function(e,t,s){"
                        use strict ";s.d(t,{Z:function(){return y}});var r=s(82482),n=s(56265),a=s.n(n),o=s(42618);const i=o.Z.apiBaseUrl+" / student ",u=12e3,c=!0,l=!1;var d=s(65431),p=s(23184),h=s(25071),m=s(49101),g=s(98973),f=s(14377),S=s(23461);class w{constructor(e){(0,r.Z)(this,"
                        instance ",void 0),(0,r.Z)(this,"
                        interceptors ",void 0),(0,r.Z)(this,"
                        showLoading ",void 0),(0,r.Z)(this,"
                        closeVerify ",void 0),(0,r.Z)(this,"
                        loading ",void 0),this.instance=a().create(e),this.showLoading=e.showLoading??c,this.closeVerify=e.closeVerify??l,this.interceptors=e.interceptors,this.instance.interceptors.request.use((e=>(this.showLoading&&(0,p.D)(),e)),(e=>e)),this.instance.interceptors.response.use((e=>((0,p.k)(),200===e.status?e.data:{code:e.status,msg:e.statusText})),(e=>{switch((0,p.k)(),e.response.status){case 400:e.message="
                        请求错误 ";break;case 401:e.message="
                        未授权， 请登录 ";break;case 403:e.message="
                        拒绝访问 ";break;case 404:e.message="
                        请求地址出错 ";break;case 408:e.message="
                        请求超时 ";break;case 500:e.message="
                        服务不可用 ";break;case 501:e.message="
                        服务未实现 ";break;case 502:e.message="
                        网关错误 ";break;case 503:e.message="
                        服务不可用 ";break;case 504:e.message="
                        网关超时 ";break;case 505:e.message="
                        HTTP版本不受支持 ";break;default:break}const t={code:e.response.status,msg:e.message};return d.Z.sSetStorage("
                        ERROR_DATA ",t),h.Z.pageMiss("
                        student ",t),Promise.reject(t)})),this.interceptors&&(this.interceptors.requestInterceptor&&this.instance.interceptors.request.use(this.interceptors.requestInterceptor),this.interceptors.requestInterceptorCatch&&this.instance.interceptors.request.use(this.interceptors.requestInterceptorCatch),this.interceptors.responseInterceptor&&this.instance.interceptors.response.use(this.interceptors.responseInterceptor),this.interceptors.responseInterceptorCatch&&this.instance.interceptors.response.use(this.interceptors.responseInterceptorCatch))}request(e){return new Promise(((t,s)=>{e.interceptors&&e.interceptors.requestInterceptor&&(e=e.interceptors.requestInterceptor(e)),!1===e.showLoading&&(this.showLoading=e.showLoading),this.instance.request(e).then((r=>{if(e.interceptors&&e.interceptors.responseInterceptor&&(r=e.interceptors.responseInterceptor(r)),this.showLoading=c,d.Z.sSetStorage("
                        REQUEST_JV ",r.jv),r.jv&&"
                        1 "===r.jv&&r.data&&(r.data=m.Z.respDecode(r.data)),r.jv&&"
                        2 _1254 "===r.jv&&r.data&&(r.data=m.Z.respDecode2(r.data)),r.jv&&"
                        3 "===r.jv&&r.data&&(r.data=m.Z.respDecode3(r.data)),r.jv&&!g.Qq.includes(r.jv)){const e=window.location.href.split("
                        # ");if(e[0].includes("
                        studentv2 "))return f.Z.versionError();if(e[0].includes("
                        studentv1 "))return e[0]=e[0].replace("
                        studentv1 ","
                        studentv2 "),window.location.replace(`${e[0]}#${e[1]}`);if(e[0].includes("
                        student "))return e[0]=e[0].replace("
                        student ","
                        studentv2 "),window.location.replace(`${e[0]}#${e[1]}`)}switch(r.code){case 0:return s(r),!e.closeVerify&&f.Z.httpError(r);case 1:case 10019:case 20006:case 22002:case 22003:return t(r);case 2:return!e.closeVerify&&h.Z.systemMaintain("
                        student ",r);case 10:return!e.closeVerify&&f.Z.httpErrorAlert(r,"
                        left ");case 11:return!e.closeVerify&&f.Z.httpErrorAlert(r,"
                        center ");case 15:return!e.closeVerify&&f.Z.httpErrorAlertBack(r,"
                        left ");case 16:return!e.closeVerify&&f.Z.httpErrorAlertBack(r,"
                        center ");case 20:return!e.closeVerify&&f.Z.httpErrorCustomAlert(r);case 30:return d.Z.sSetStorage("
                        ERROR_DATA ",r),!e.closeVerify&&h.Z.pageSorry("
                        student ",r);case 10001:case 10002:case 10003:case 10014:case 10015:return d.Z.sSetStorage("
                        ERROR_DATA ",r),!e.closeVerify&&h.Z.pageMiss("
                        student ",r);case 10016:return d.Z.sSetStorage("
                        ERROR_DATA ",r),!e.closeVerify&&h.Z.taskCreate("
                        student ",r);case 10017:return d.Z.sSetStorage("
                        ERROR_DATA ",r),!e.closeVerify&&h.Z.answerException("
                        student ",r);case 10018:return d.Z.sSetStorage("
                        ERROR_DATA ",r),!e.closeVerify&&h.Z.errorMobile();case 11003:case 11006:return d.Z.sSetStorage("
                        ERROR_DATA ",r),d.Z.sSetStorage("
                        ADMIN_TOKEN ",null),d.Z.lSetStorage("
                        USER_TOKEN ",null),e.url.includes(" / Welfare / DxFlowCard / Home ")?S.Z.push(" / authorize ? page = welfareTelecom "):!e.closeVerify&&h.Z.safetyVerify("
                        student ",r);default:return!e.closeVerify&&f.Z.httpError(r)}})).catch((e=>{this.showLoading=c,s(e)}))}))}get(e){return this.request({...e,method:"
                        GET "})}post(e){return this.request({...e,method:"
                        POST "})}delete(e){return this.request({...e,method:"
                        DELETE "})}patch(e){return this.request({...e,method:"
                        PATCH "})}}var _=w,v=s(29702),k=s.n(v);const C=new _({baseURL:i,timeout:u,interceptors:{requestInterceptor:e=>{const t=1;"
                        get "===e.method&&(e.params.app_type=t),"
                        post "===e.method&&(e.data.app_type=t);let s=d.Z.sGetStorage("
                        REQUEST_JV ")||"
                        0 ";e.headers["
                        Authorization - v "]=k()(s);const r=d.Z.sGetStorage("
                        ADMIN_TOKEN ")||"
                        ",n=d.Z.lGetStorage("
                        USER_TOKEN ")||"
                        ";return r?e.headers["
                        Authorization "]=`${r}`:(e.headers["
                        ABC "]=k()(navigator.userAgent),e.headers["
                        UserToken "]=`${n}`),e},requestInterceptorCatch:e=>e,responseInterceptor:e=>e,responseInterceptorCatch:e=>e}});var y=C},46501:function(e,t,s){"
                        use strict ";s.r(t),s.d(t,{default:function(){return i}});var r=s(62717),n=s(49101),a=s(9666);function o(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.student}/SysActivities/ListShow`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}var i={namespaced:!0,state:{isWxConfig:!1,isWxConfigWelfareTelecom:!1,isActivityArea:!1,activityAreaList:[]},getters:{},mutations:{setIsWxConfig(e,t){e.isWxConfig=t},setIsWxConfigWelfareTelecom(e,t){e.isWxConfigWelfareTelecom=t},setIsActivityArea(e,t){e.isActivityArea=t},setActivityAreaList(e,t){e.activityAreaList=t}},actions:{requestWordDashOpenStatus({commit:e},t){return new Promise(((s,r)=>{o(t).then((async t=>{await e("
                        setActivityAreaList ",t.data.records),s()})).catch((e=>{r(e)}))}))}}}},90571:function(e,t,s){"
                        use strict ";s.r(t);var r=s(65431);t["
                        default "]={namespaced:!0,state:{wordDashId:0,wordDashInfo:null,memberStatus:2,preferencesSetting:{},searchWord:"
                        ",activeTab:1,wordFrequency:0,wordList:[],wordSpellIndex:0,wordCardIndex:0,wordExpandArray:[]},getters:{filterWordList(e){let t=e.wordList.filter((t=>t.status===e.activeTab));return e.wordFrequency&&(t=t.filter((t=>t.word_fre===e.wordFrequency))),e.searchWord&&(t=t.filter((t=>{let s=e.searchWord.toLowerCase(),r=t.word.toLowerCase();return r.includes(s)}))),1!==e.activeTab&&t.sort(r.Z.arrayObjectSortDesc("
                        update_time ")),t},filterWordId(e,t){let s=0;return t.filterWordList.length>=e.wordCardIndex+1&&(s=t.filterWordList[e.wordCardIndex].word_id),s},filterWordInfo(e,t){let s=null;return t.filterWordList.length>e.wordSpellIndex&&(s=t.filterWordList[e.wordSpellIndex]),s},filterIsSkipWordCard(e){return 2===e.preferencesSetting.show_master_word_card_status}},mutations:{setWordDashInfo(e,t){e.wordDashInfo=t},setWordDashId(e,t){e.wordDashId=t},setMemberStatus(e,t){e.memberStatus=t},setPreferencesSetting(e,t){e.preferencesSetting=t},setSearchWord(e,t){e.searchWord=t},setActiveTab(e,t){e.activeTab=t},setWordFrequency(e,t){e.wordFrequency=t},setWordList(e,t){e.wordList=t},setWordCardIndex(e,t){t=t<0?0:t,e.wordCardIndex=t},setWordSpellIndex(e,t){t=t<0?0:t,e.wordSpellIndex=t},setWordExpandArray(e,t){e.wordExpandArray=t}},actions:{}}},69553:function(e,t,s){"
                        use strict ";s.r(t),t["
                        default "]={namespaced:!0,state:{wordDashFinished:{}},getters:{},mutations:{setWordDashFinished(e,t){console.log("
                        setWordDashFinished "),console.log(t),e.wordDashFinished=t}},actions:{}}},62234:function(e,t,s){"
                        use strict ";s.r(t),s.d(t,{default:function(){return i}});var r=s(62717),n=s(49101),a=s(9666);function o(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.student}/Contest/Home`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}var i={namespaced:!0,state:{contestNotJoinNum:0},getters:{},mutations:{setContestNotJoinNum(e,t){e.contestNotJoinNum=t}},actions:{requestContestNotJoinNum({commit:e},t){return new Promise(((s,r)=>{o(t).then((async t=>{await e("
                        setContestNotJoinNum ",t.data.not_start_num),s()})).catch((e=>{r(e)}))}))}}}},69981:function(e,t,s){"
                        use strict ";s.r(t),t["
                        default "]={namespaced:!0,state:{},getters:{},mutations:{},actions:{}}},26226:function(e,t,s){"
                        use strict ";s.r(t),s.d(t,{default:function(){return d}});var r=s(62717),n=s(49101),a=s(9666);function o(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/Welfare/DxFlowCard/Home`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}function i(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/Welfare/DxFlowCard/NewPhoneNumList`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}function u(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/Welfare/DxFlowCard/Apply`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}function c(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/Welfare/DxFlowCard/PageByUser`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}function l(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/Welfare/DxApiDailyInfo/Report`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}var d={namespaced:!0,state:{checkedApply:!1,showFooter:!0,applyStatus:2,loadingRequest:!1},getters:{},mutations:{setCheckedApply(e,t){e.checkedApply=t},setShowFooter(e,t){e.showFooter=t},setApplyStatus(e,t){e.applyStatus=t},setLoadingRequest(e,t){e.loadingRequest=t}},actions:{requestWelfareTelecomUserInfo({commit:e},t){return new Promise(((s,r)=>{o(t).then((async t=>{await e("
                        setApplyStatus ",t.data.apply_status),s()})).catch((e=>{r(e)}))}))},requestWelfareTelecomPhoneNumList({commit:e},t){return new Promise(((e,s)=>{i(t).then((async t=>{e(t.data)})).catch((e=>{s(e)}))}))},requestWelfareTelecomPhoneNumApply({commit:e},t){return new Promise(((e,s)=>{u(t).then((async t=>{e(t.data)})).catch((e=>{s(e)}))}))},requestWelfareTelecomUserCard({commit:e},t){return new Promise(((e,s)=>{c(t).then((async t=>{e(t.data)})).catch((e=>{s(e)}))}))},requestWelfareTelecomFillFormReport({commit:e},t){return new Promise(((e,s)=>{l(t).then((async t=>{e(t.data)})).catch((e=>{s(e)}))}))}}}},8838:function(e,t,s){"
                        use strict ";s.r(t),s.d(t,{default:function(){return w}});var r=s(62717),n=s(49101),a=s(9666);function o(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/CourseSprint/SpMain/Status`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}function i(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/CourseSprint/SpMain/Info`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}function u(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/CourseSprint/SpUserSet/GetPreferences`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}function c(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/CourseSprint/SpUserSet/SavePreferences`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}function l(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/CourseSprint/SpMain/PlanInfo`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}function d(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/CourseSprint/SpMain/ChangePlan`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}function p(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/CourseSprint/SpMain/WordList`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}function h(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/CourseSprint/SpStudy/WordCard`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}function m(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/CourseSprint/SpStudy/ChangeWordStatus`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}function g(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/CourseSprint/SpMain/CleanRecord`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}function f(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,r.Z.request({url:`${a.Z.url}/CourseSprint/SpAudio/Read`,method:"
                        get ",data:e,showLoading:!t,closeVerify:s})}function S(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/CourseSprint/SpMonitor/Report`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}var w={namespaced:!0,state:{wordSpellIndex:0,wordCardIndex:0,isWordAudioPlaying:!1,isListenAudioPlaying:!1},getters:{},mutations:{setWordSpellIndex(e,t){e.wordSpellIndex=t},setWordCardIndex(e,t){e.wordCardIndex=t},setIsWordAudioPlaying(e,t){e.isWordAudioPlaying=t},setIsListenAudioPlaying(e,t){e.isListenAudioPlaying=t}},actions:{requestWordDashOpenStatus({commit:e},t){return new Promise(((s,r)=>{o(t).then((async t=>{await e("
                        storage / wordDash / setWordDashId ",t.data.spc_id,{root:!0}),s(t.data)})).catch((e=>{r(e)}))}))},requestWordDashInfo({state:e,commit:t},s){return new Promise(((e,r)=>{i(s).then((async s=>{await t("
                        storage / wordDash / setWordDashInfo ",s.data,{root:!0}),e()})).catch((e=>{r(e)}))}))},requestWordDashSettingInfo({state:e,commit:t},s){return new Promise(((e,r)=>{u(s).then((async s=>{await t("
                        storage / wordDash / setPreferencesSetting ",s.data,{root:!0}),e()})).catch((e=>{r(e)}))}))},requestAmendWordDashSettingInfo({state:e,commit:t},s){return new Promise(((e,t)=>{c(s).then((async t=>{e()})).catch((e=>{t(e)}))}))},requestWordDashPlanInfo({state:e,commit:t},s){return new Promise(((e,t)=>{l(s).then((async t=>{e(t.data)})).catch((e=>{t(e)}))}))},requestAmendWordDashPlan({state:e,commit:t},s){return new Promise(((e,t)=>{d(s).then((async t=>{e()})).catch((e=>{t(e)}))}))},requestWordDashGlossary({state:e,commit:t},s){return new Promise(((e,r)=>{p(s).then((async s=>{await t("
                        storage / wordDash / setWordList ",s.data.records,{root:!0}),e(s.data)})).catch((e=>{r(e)}))}))},requestWordDashWordCard({state:e,commit:t},s){return new Promise(((e,t)=>{h(s).then((async t=>{e(t.data)})).catch((e=>{t(e)}))}))},requestAmendWordDashWordStatus({state:e,commit:t},s){return new Promise(((e,t)=>{m(s).then((async t=>{e()})).catch((e=>{t(e)}))}))},requestResetWordDash({state:e,commit:t},s){return new Promise(((e,t)=>{g(s).then((async t=>{e()})).catch((e=>{t(e)}))}))},requestSenAudioResource({state:e,commit:t},s){return new Promise(((e,t)=>{f(s).then((async t=>{e()})).catch((e=>{t(e)}))}))},requestReport({state:e,commit:t},s){return new Promise(((e,t)=>{S(s).then((async t=>{e()})).catch((e=>{t(e)}))}))}}}},14012:function(e,t,s){"
                        use strict ";s.r(t),s.d(t,{default:function(){return l}});var r=s(62717),n=s(49101),a=s(9666);function o(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/CourseSprint/SpStudy/Start`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}function i(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/CourseSprint/SpStudy/WordCardStudy`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}function u(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/CourseSprint/SpStudy/Submit`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}function c(e){e=e||{};let t=e.closeLoading||!1,s=e.closeVerify||!1;return delete e.closeLoading,delete e.closeVerify,e=n.Z.handlerStudentParamsForPost(e),r.Z.request({url:`${a.Z.url}/CourseSprint/SpStudy/NextItem`,method:"
                        post ",data:e,showLoading:!t,closeVerify:s})}var l={namespaced:!0,state:{isAudioPlaying:!1,optionActive:-1,showConsolidatedButton:!1,loading:!1},getters:{filterWordList(e){let t=e.wordList.filter((t=>t.status===e.activeTab));return e.wordFrequency&&(t=t.filter((t=>t.word_fre===e.wordFrequency))),t=t.filter((e=>e.word_mean.length)),t}},mutations:{setIsAudioPlaying(e,t){e.isAudioPlaying=t},setOptionActive(e,t){e.optionActive=t},setShowConsolidatedButton(e,t){e.showConsolidatedButton=t},setLoading(e,t){e.loading=t}},actions:{requestWordDashStudy({commit:e},t){return new Promise(((e,s)=>{o(t).then((async t=>{e(t)})).catch((e=>{s(e)}))}))},requestWordDashStudyWordCard({commit:e},t){return new Promise(((e,s)=>{i(t).then((async t=>{e(t.data)})).catch((e=>{s(e)}))}))},requestWordDashStudySubmit({commit:e},t){return new Promise(((e,s)=>{u(t).then((async t=>{e(t)})).catch((e=>{s(e)}))}))},requestWordDashStudyNext({commit:e},t){return new Promise(((e,s)=>{c(t).then((async t=>{e(t)})).catch((e=>{s(e)}))}))}}}},36911:function(e,t,s){var r={". / studentHome.js ":46501,". / wordDash.js ":90571,". / wordDashStudy.js ":69553};function n(e){var t=a(e);return s(t)}function a(e){if(!s.o(r,e)){var t=new Error("
                        Cannot find module '"+e+"'
                        ");throw t.code="
                        MODULE_NOT_FOUND ",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=a,e.exports=n,n.id=36911},28935:function(e,t,s){var r={". / contest.js ":62234,". / studentHome.js ":69981,". / welfareTelecom.js ":26226,". / wordDash.js ":8838,". / wordDashStudy.js ":14012};function n(e){var t=a(e);return s(t)}function a(e){if(!s.o(r,e)){var t=new Error("
                        Cannot find module '"+e+"'
                        ");throw t.code="
                        MODULE_NOT_FOUND ",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=a,e.exports=n,n.id=28935},38308:function(e){"
                        use strict ";e.exports="
                        data:
                            image / png;
                        base64, iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAIAAAC2BqGFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167 + 3 t + 9 f7vOec5 / zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP / wBr28AAgBw1S4kEsfh / 4 O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv + CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH + OD + Q5 + bk4eZm52zv9MWi / mvwbyI + IfHf / ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3 / ldM9sJoFoK0Hr5i3k4 / EAenqFQyDwdHAoLC + 0 lYqG9MOOLPv8z4W / gi372 / EAe / tt68ABxmkCZrcCjg / 1 xYW52rlKO58sEQjFu9 + cj / seFf / 2 OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R + W / QmTdw0ArIZPwE62B7XLbMB + 7 gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv / mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5 + ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1 + TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q + 0 hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw + S3FDrFiOJMCaIkUqSUEko1ZT / lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC / pdLoJ3YMeRZfQl9Jr6Afp5 + mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA + Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV + jvl / 9 gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1 + rTfaetq + 2 mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z + o + 02 PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y / DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS + Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw + lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r + 00 umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle + 70 eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l + s7pAz7GPgKfep + Hvqa + It89viN + 1n 6 Zfgf8nvs7 + sv9j / i / 4 XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww + FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX + X0UKSoyqi7qUbRTdHF09yzWrORZ + 2e9 jvGPqYy5O9tqtnJ2Z6xqbFJsY + ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP + WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D + miGT0Z1xjMJT1IreZEZkrkj801WRNberM / ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c / PbFWyFTNGjtFKuUA4WTC + oK3hbGFt4uEi9SFrUM99m / ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl / VfPV5bdra3kq3yu3rSOuk626s91m / r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e + 2 Sba1r / dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q / 5n 7 duEd3T8Wej3ulewf2Re / ranRvbNyvv7 + yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9 + mfHvjUOihzsPcw83fmX + 39 QjrSHkr0jq / dawto22gPaG97 + iMo50dXh1Hvrf / fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1 / 3 yfPe549d8Lxw9CL3Ytslt0utPa49R35w / eFIr1tv62X3y + 1 XPK509E3rO9Hv03 / 6 asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r / y + 2 v3qB / oP6n + 0 / rFlwG3g + GDAYM / DWQ / vDgmHnv6U / 9 OH4dJHzEfVI0YjjY + dHx8bDRq98mTOk + GnsqcTz8p + Vv9563Or59 / 94 vtLz1j82PAL + YvPv655qfNy76uprzrHI8cfvM55PfGm / K3O233vuO + 638e9 H5ko / ED + UPPR + mPHp9BP9z7nfP78L / eE8 / sl0p8zAAAAIGNIUk0AAHolAACAgwAA + f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAkSSURBVHja7F29ixxHFn890 / MtrYy9w + 3 qQq / u / oMLlDg5lByLwUKBjQKBDRtIIJCDleEMAglsgyUQrAODBRcYKxBnMOaSw4mSC2zwxfKuE99JKxjpLE1311d / 1 AVvttzb89U9U907O10vGKpfVb2q + vXrV69eVfdYHhdgKH + qGAgM0EtFNkgDgtFoA7QhA / Si2mhjoo1GG6ANGaAX2I82jrTR6CXTaM0USSn8UMrBg2JXKzW7aoDWCbQfhB4V3A + ST03Fajfq7WbdssoLtOUyrkWQQzhhkyKulYr1yolWabVbj41 + 4 dDJKANAFMlfHSL8sKQa7cyt0Q7hlKXdPbAs69VT7WqldJPwvGHSIAzTowwAUkrH46 + caBnTkY1cmnknTPiBH4QG6KyeXDBDRSZ8A3QWf27Wmc1odDYKo6jgimYJnpHKF1 + ZC + hKxZq1Yvncu3l0a2Z3uFqtSKPRGe6SXZ1NN + u10i3E532EW41a5sWoZTXrtbIBPW / gv9WwKRdRlEFIp4VhPFkyoOcbrwXWqU7zhUtlOjmNmt2q14zXMdO9qlZXOi0rRbC5UbNPtptQSrL6hGkRFEaRS / m4KKhlWZ1mfQaDvjxAv9QENFIQhlwEfhCGkZRSViuVarVSr1UbNdtapP0VDLYUOSdr3jO0q1W7teiuGxcB44OoVmFYl26FJvyAHrzkwLhfWBzRLhvK3uFtCsoLsiEl0mg / CL1Rm0G0EL22y4OyS8bujlLmg4Rmnk5RKYAOgtCb5lyh4c4Pa1su + yItCCOPsDSjpFzI3Oz1kmt0GEYuZel1aaDXOWC9zJNhGEUOZTLjM0u5yGNuXNpju1EkXZIZ5ZheS716XVlWlB3CojnmH + 0 + 3 xLa6EhKh7BMIfICfL5C38qi3LcgX3cVj5yFkZ5hEe5LTR0uTqMJ41wEAGBZ0MjHhZJSOh7Te2hEl39dkI326ABlACBMzHaQbCrKLmF5HM2hXKho3xwanbPtkAAuZYkzYC7lJwDqtq2xFYfwIMzrABThQgK05ngQ89VoKaVD2MiTdi7lQtMJPLyXQZjveT7KBZ3DD7HzRnmClnmEWe3m / C9buGPupX6smQAJs23I5eV1RFK60 + YlCeASdqLTsquzP1ge5UWeTZ15bsxFo8MoSunJSgCHsJPt5mxYe5TzHObVVPY6I9Z2Lih7NP2qTErpELrSaWU9yecxzv2jOdBOOQeQrUb9yGIdQRg52SMMUkrHoyc7zfRYEyb4kb42gDYkvV5rfqHTIWy2AEMoZd9jpzqtNEeBCROUH / 3 LGfjGX0qstbl3wg / 7 HptnGyGKZN + bHgmi3F8ElLPecj07LNwPPKrhDdwwivouW + k0x522YcInbLG + iEiYkCl8Pg2mgwnf0zf4IIr6hK20R2DNhw4LLArWKey1PX8bVPdHN4Mw7BO20mlZh1F2KYNFJTLND5kLaI / ynE5EBEHoeHSl0zqYAAKXLC7Kh + fGumagHcJyXSyIIEQbggk4DuQxIQHao7CeEeg + YSL / JZnwg5cezTtalIdeD2OdOdYxISCXBx3Hd2xH2hA7K8rHTsWOyIbwhA3JEPiPpOx7JL / g + pIRoRzkb1in1egwivoeLeE73PPZEK7sdaqgUhhFLzwaReYLebPYEADZbtSna3QQhi + 8 GY / 8 GEKfb7rX4QcYKjIoz4c1FfZkN7ZPqAFZC40FmgnfOSbrsWMMNOX + IkdwlgRojwktwWVDh4E + bIJdyon5r6E8gI7j7BBKy / ehtEJNhwToe / Sodu / LArSU8NIjovCTKCUzHVL + 6 pISfvGvaKD / 53 gmIFcE0Ca4fAReh6Hi / GhDOZH5exBjOpbOjzZQF + RHGxCMjV6yJbhesiwYfkrwZOiEpydRa8I38lSx4YZGNj01N01bizUZWha8vvYapn9++lzKwRgUE / nDw9hYHxTY238evxxHe / vPE1WGhSQQjHcs3oE0bS2WHz3osYQ733x / 7 c0 / vf672AAk3PnmewBI8tWwD2pZh8uPpEGxgyoba6 + NFBK / u2M7lq4tLXpt / fvn / 2 rS5dVP / v6vOHP7 / FnF2T5 / FhPxMoqJ / PhlnIaz9vafbayvDmcNX07u9nCLI9taINOB93z7 / Nmb9x9++PYb + AsAQviYUKQ4N + 8 / vHn / YTwLLz98 + 429 p7 + NbWNtVQgfAA4x11eVNFUxLgTlxCFTwlXfBjg + fbaxtjpOwt7TZ7pMq / WjDo1Gpd5YW / 3 r3 / 6 pOLcunYtfKs6tS + cAQCWQEpdxGpmVhokgKv64pqf2YVeHUmvzOnBIty6de //zbwHg9tYmAFDOMfH+598qDpbHRIKP0KCEOCU4t7c2sSGsq0gJj3cJ68Z/4+0mJA83fXtrc7IzU+iCxbJAAly5+wAAdq5euHL3AV7uXL2A4hljKnH57oODeQg+3dq8fPfBztULWEDKAVNJRiH4G5vAAAA+3dpUjSpSwrGWSsfLoDRsV7WVaCLelpaTnXqW4Hi3sKPvfvxl4veQ0lF+7/rFeBalXP0CyN0nPXTLNta7idy9/V7MTHff/fjLe9cvKnTwMt6W6s9wNxLoj+ztvesX9/Z7ulxpbaYDAdpY71LGvrrxXiL3nRtfDGBlLJFAdNQl3jbE+p0bX6AolYvoxyXs7fcGt4SxeJUJ/cHOqIpYRVVMdHhxo3eM87c++Cxl7u5+DwDOrHcZ5/icSpxX17tYWNVSFuOtDz77+qPLSgiWRCYAfHXjPUyfOd1F4eP6E5c2rpjUF3LTH/jnnP/jzrUE8y/X7iRykXPmQEM5YirhD6e7qoqSg7lYGNNff3RZyVQlExwsjzgOUyI30e2BKH1I6491cOH/+con43LVYFRiuDByvtvZRgtw5nR3pEz1dQOVi1WUhAndQPpuZ3v3SQ8AxjWhMwT0w+5/NIr74++7E3IfPe4pVwkTifKPHvfinEePe1NlJuinJz31TKShyU1gri6gf9EevcsUCVPl42G5RPmEzPitGidBzahTnaVx3dYbqddvOrL2b7h8Gk6cOa58pp7kvQFiAv8FkdnKKoiMRhugl810GAyKAdqc6ygKaIOzsdHGRhsyGm2ANkAbMkAv1WRogh1Gow3QhjLT/wcAWEYBFeHW4DEAAAAASUVORK5CYII="}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var s=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(s.exports,s,s.exports,__webpack_require__),s.exports}__webpack_require__.m=__webpack_modules__,function(){__webpack_require__.amdO={}}(),function(){var e=[];__webpack_require__.O=function(t,s,r,n){if(!s){var a=1/0;for(c=0;c<e.length;c++){s=e[c][0],r=e[c][1],n=e[c][2];for(var o=!0,i=0;i<s.length;i++)(!1&n||a>=n)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](s[i])}))?s.splice(i--,1):(o=!1,n<a&&(a=n));if(o){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[s,r,n]}}(),function(){__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(t,{a:t}),t}}(),function(){__webpack_require__.d=function(e,t){for(var s in t)__webpack_require__.o(t,s)&&!__webpack_require__.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(t,s){return __webpack_require__.f[s](e,t),t}),[]))}}(),function(){__webpack_require__.u=function(e){return"js/"+e+".1701671432010.js?v=1701671432010"}}(),function(){__webpack_require__.miniCssF=function(e){return"css/"+e+".1701671432010.css?v=1701671432010"}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vocabgo-student-m:";__webpack_require__.l=function(s,r,n,a){if(e[s])e[s].push(r);else{var o,i;if(void 0!==n)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var l=u[c];if(l.getAttribute("src")==s||l.getAttribute("data-webpack")==t+n){o=l;break}}o||(i=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,__webpack_require__.nc&&o.setAttribute("nonce",__webpack_require__.nc),o.setAttribute("data-webpack",t+n),o.src=s),e[s]=[r];var d=function(t,r){o.onerror=o.onload=null,clearTimeout(p);var n=e[s];if(delete e[s],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),i&&document.head.appendChild(o)}}}(),function(){__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){__webpack_require__.p="/student/"}(),function(){var e=function(e,t,s,r){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=function(a){if(n.onerror=n.onload=null,"load"===a.type)s();else{var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=i,n.parentNode.removeChild(n),r(u)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var n=s[r],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){n=o[r],a=n.getAttribute("data-href");if(a===e||a===t)return n}},s=function(s){return new Promise((function(r,n){var a=__webpack_require__.miniCssF(s),o=__webpack_require__.p+a;if(t(a,o))return r();e(s,o,r,n)}))},r={2143:0};__webpack_require__.f.miniCss=function(e,t){var n={98:1,109:1,112:1,183:1,208:1,241:1,553:1,561:1,589:1,614:1,763:1,891:1,1104:1,1183:1,1252:1,1276:1,1376:1,1457:1,1495:1,1505:1,1539:1,1608:1,1664:1,1682:1,1716:1,1727:1,1787:1,1864:1,1954:1,2042:1,2086:1,2188:1,2250:1,2451:1,2464:1,2511:1,2516:1,2539:1,2575:1,2601:1,2671:1,2726:1,2742:1,2751:1,2777:1,2946:1,3121:1,3145:1,3234:1,3307:1,3317:1,3558:1,3642:1,3649:1,3671:1,3719:1,3725:1,4048:1,4060:1,4068:1,4227:1,4267:1,4308:1,4317:1,4339:1,4351:1,4525:1,4552:1,4577:1,4652:1,4724:1,4799:1,4865:1,4906:1,4925:1,4942:1,5120:1,5180:1,5221:1,5341:1,5683:1,5874:1,5924:1,5965:1,6023:1,6024:1,6064:1,6133:1,6189:1,6259:1,6275:1,6362:1,6422:1,6432:1,6467:1,6477:1,6651:1,6751:1,6760:1,6764:1,6902:1,6932:1,6957:1,6980:1,6989:1,7046:1,7052:1,7170:1,7217:1,7226:1,7255:1,7563:1,7592:1,7614:1,7715:1,7839:1,8018:1,8160:1,8164:1,8304:1,8517:1,8544:1,8625:1,8629:1,8679:1,8860:1,8949:1,9290:1,9415:1,9421:1,9505:1,9520:1,9621:1,9658:1,9730:1,9786:1,9872:1,9978:1,9992:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=s(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={2143:0};__webpack_require__.f.j=function(t,s){var r=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==r)if(r)s.push(r[2]);else{var n=new Promise((function(s,n){r=e[t]=[s,n]}));s.push(r[2]=n);var a=__webpack_require__.p+__webpack_require__.u(t),o=new Error,i=function(s){if(__webpack_require__.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var n=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",o.name="ChunkLoadError",o.type=n,o.request=a,r[1](o)}};__webpack_require__.l(a,i,"chunk-"+t,t)}},__webpack_require__.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,n,a=s[0],o=s[1],i=s[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in o)__webpack_require__.o(o,r)&&(__webpack_require__.m[r]=o[r]);if(i)var c=i(__webpack_require__)}for(t&&t(s);u<a.length;u++)n=a[u],__webpack_require__.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return __webpack_require__.O(c)},s=self["webpackChunkvocabgo_student_m"]=self["webpackChunkvocabgo_student_m"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var __webpack_exports__=__webpack_require__.O(void 0,[4998],(function(){return __webpack_require__(84159)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
