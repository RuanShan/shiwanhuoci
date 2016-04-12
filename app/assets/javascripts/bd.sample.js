;
define("translation:widget/translate/details/sample.js",
function(e, t) {
    var n = e("translation:widget/common/tools/template.js"),
    i = e("translation:widget/common/sendLog.js"),
    a = {
        buildSample: function(e) {
            var t, a = e.data,
            o = e.to,
            s = {};
            if (a["double"] = a["double"].replace(/\\'/g, "'"), a.single = a.single.replace(/\\'/g, "'"), a["double"] = a["double"].replace(/[‘|’]/g, "'"), a.single = a.single.replace(/[‘|’]/g, "'"), a["double"]) {
                a["double"] = $.parseJSON(a["double"]),
                a.senData = [];
                for (var l = 0,
                u = a["double"].length; u > l; l++) {
                    var r, g = "";
                    "zh" === o ? r = a["double"][l][0] : "en" === o && (r = a["double"][l][1]);
                    for (var d = 0,
                    p = r.length; p > d; d++) g += r[d][0],
                    r[d][4] && (g += r[d][4]);
                    if (g = encodeURIComponent(g), a.senData[l] = g, t = a["double"][l][2], /^http\:\/\//.test(t)) {
                        t = t.replace(/^http\:\/\//, "");
                        var h = t.indexOf("/");
                        a["double"][l][3] = h > 0 ? t.substr(0, h) : t
                    } else a["double"][l][3] = a["double"][l][2],
                    a["double"][l][2] = "#"
                }
            }
            if (a.single) {
                a.single = $.parseJSON(a.single),
                a.senData2 = [];
                for (var l = 0,
                u = a.single.length; u > l; l++) {
                    var r, g = "";
                    "zh" === o ? r = a.single[l][0] : "en" === o && (r = a.single[l][1]);
                    for (var d = 0,
                    p = r.length; p > d; d++) g += r[d][0],
                    r[d][3] && (g += r[d][3]);
                    if (g = encodeURIComponent(g), a.senData2[l] = g, t = a.single[l][1], /^http\:\/\//.test(t)) {
                        t = t.replace(/^http\:\/\//, "");
                        var h = t.indexOf("/");
                        a.single[l][2] = h > 0 ? t.substr(0, h) : t
                    } else a.single[l][2] = a.single[l][1],
                    a.single[l][1] = "#"
                }
            }
            s.tplData = a,
            s.tplData.to_lang = o;
            var c = n("tplSample", s);
            $("#transDetailsCont").append(c),
            i.sendDisplayLog({
                module: "output",
                action: "sample"
            }),
            _hmt.push(["_trackEvent", "首页", "web端例句展现次数"])
        },
        bindEvents: function() {
            var e = this;
            $(".translate-wrap").on("click", ".item-sample .op-sound",
            function() {
                e.clickSound({
                    target: this
                })
            }).on("mouseover", ".item-sample .op-sound",
            function() {
                e.mouseOverSound({
                    target: this
                })
            }).on("mouseout", ".item-sample .op-sound",
            function() {
                e.mouseOutSound()
            }).on("mouseover", ".sample-wrap span[high-light-id]",
            function() {
                e.mouseOverHighlight({
                    target: this
                })
            }).on("mouseout", ".sample-wrap span[high-light-id]",
            function() {
                e.mouseOutHighlight({
                    target: this
                })
            })
        },
        clickSound: function(e) {
            var t = $(e.target);
            BTPM.setUrl(t.attr("data-url"));
            var n;
            t.addClass("op-sound-active"),
            n && clearTimeout(n),
            n = setTimeout(function() {
                t.removeClass("op-sound-active")
            },
            2e3),
            i.sendClickLog({
                op_type: "click_sound",
                action: 3
            }),
            _hmt.push(["_trackEvent", "首页", "web端点击双语例句TTS"])
        },
        mouseOverSound: function(e) {
            var t = this;
            this.timer = setTimeout(function() {
                t.clickSound({
                    target: e.target
                })
            },
            500)
        },
        mouseOutSound: function() {
            clearTimeout(this.timer)
        },
        mouseOverHighlight: function(e) {
            var t = $(e.target),
            n = t.attr("high-light-id");
            if ("" !== n) {
                var i = t.parent().parent();
                i.find("span").each(function() {
                    $(this).attr("high-light-id") === n && $(this).addClass("high-light-bg")
                })
            }
        },
        mouseOutHighlight: function(e) {
            var t = $(e.target),
            n = t.parent().parent();
            n.find("span").removeClass("high-light-bg")
        }
    };
    $(function() {
        a.bindEvents()
    }),
    t.buildSample = function(e) {
        a.buildSample(e)
    }
});
