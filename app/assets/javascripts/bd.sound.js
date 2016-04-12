;
define("translation:widget/translate/input/sound.js",
function(t, e) {
    var n = {
        timer: null,
        makeSound: function(t, e) {
            var n = $(t);
            n.addClass("op-sound-active"),
            this.timer && clearTimeout(this.timer),
            this.timer = setTimeout(function() {
                n.removeClass("op-sound-active"),
                $(".hover-tips-wrap .tips-content").text("发音")
            },
            2e3),
            BTPM.setUrl(e)
        }
    };
    e.makeSound = function(t, e) {
        n.makeSound(t, e)
    }
});
