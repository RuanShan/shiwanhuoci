//= require jquery
//= require jquery_ujs
//= require iciba_common_top_v4w
//= require facebox
$(function(){
  $('a[data-lightbox]').facebox()

  $('body').on( 'click','a.operate-btn', function(){
    $this = $(this);
    if( $this.hasClass("op-card") ){
      
      $(this).next().toggle();

    }else if ($this.hasClass("op-prev")) {
      if($(".word.active").prev().is('*')){
        $(".word.active").hide().toggleClass("active").prev().show().toggleClass("active");
      }

    }else if ($this.hasClass("op-next")) {
      if($(".word.active").next().is('*')){
        $(".word.active").hide().toggleClass("active").next().show().toggleClass("active");
      }
    }

  })


});
