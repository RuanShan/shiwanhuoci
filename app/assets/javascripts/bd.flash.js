;
define("translation:widget/translate/input/flash.js",
function() {
    var a = $("#btpm-swf-src").attr("src"),
    e = /msie/i.test(navigator.userAgent) === !0,
    t = /ipad/i.test(navigator.userAgent) === !0,
    r = {
        isIE: ['<object id="bt-flash-object" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="200" height="200" align="middle">', '<param name="movie" value="' + a + '" />', '<param name="allowScriptAccess" value="always" />', '<param name="allowNetworking" value="all" />', '<param name="flashVars" value="_instanceName=BTPM" />', '<param name="wmode" value="window" />', '<param name="scale" value="noscale" />', '<param name="salign" value="lt" />', "</object>"].join(""),
        notIE: ['<embed id="bt-flash-embed" src="' + a + '"', 'width="0" height="0" allowScriptAccess="always"', 'allowNetworking="all" flashVars="_instanceName=BTPM"', 'quality="high" type="application/x-shockwave-flash"', 'pluginspage="http://www.adobe.com/go/getflashplayer"></embed>'].join("")
    } [e ? "isIE": "notIE"];
    $(".bt-flash").html(r),
    window.BTPM = e ? $("#bt-flash-object")[0] : $("#bt-flash-embed")[0];
    var n;
    t && !n && (n = $('<audio id="dictVoice" style="display: none"></audio>'), $("body").append(n), BTPM = $("#dictVoice")[0]),
    BTPM.setUrl = function(a) {
        if (t) return BTPM.src = a,
        BTPM.load(a),
        void BTPM.play();
        try {
            BTPM._setVar && BTPM._setVar("url", a)
        } catch(e) {}
        return BTPM
    },
    BTPM.getUrl = function() {
        try {
            if (BTPM._getVar) return BTPM._getVar("url")
        } catch(a) {}
        return BTPM
    },
    BTPM.pause = function() {
        try {
            BTPM._pause && BTPM._pause()
        } catch(a) {}
        return BTPM
    },
    BTPM.getCurrentPosition = function() {
        return BTPM._getVar ? BTPM._getVar("currentPosition") / 1e3: BTPM
    },
    BTPM.getDuration = function() {
        return BTPM._getVar ? BTPM._getVar("duration") / 1e3: BTPM
    },
    BTPM.getDownloadProgress = function() {
        return BTPM._getVar ? 100 * BTPM._getVar("downloadProgress") : BTPM
    }
});
