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
      var $word_active =  $("#facebox .word.active");
      var lesson_id = $word_active.data('lesson-id');
      var word_id =  $word_active.data('word-id');
      var goto_next = true;
      //
      if( $word_active.prevAll().size() == 1 ){
        $.ajax( {url:'/lessons/get_more', data: {lesson_id: lesson_id, word_id: word_id} } )
      }else{
        if($word_active.prev().is('*')){
          $word_active.hide().toggleClass("active").prev().show().toggleClass("active");
        }
      }

    }else if ($this.hasClass("op-next")) {
      var $word_active =  $("#facebox .word.active");
      var lesson_id = $word_active.data('lesson-id');
      var word_id =  $word_active.data('word-id');
      var goto_next = true;
      if( $word_active.prevAll().size() == 1 ){
        $.ajax( {url:'/lessons/get_more', data: {lesson_id: lesson_id, word_id: word_id} } )
      }else{
        if($word_active.next().is('*')){
          $word_active.hide().toggleClass("active").next().show().toggleClass("active");
        }
      }
    }

  })


});
