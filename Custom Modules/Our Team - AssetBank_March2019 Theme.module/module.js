$(window).on("load resize", function(){
  $('.card-team').each(function(){
    var boxHeight = $(this).find('.card-hover').outerHeight();
    var textHeight = $(this).find('.card-team-text').outerHeight();
    if ( textHeight > boxHeight ){
      $(this).addClass('overflow');
    }else{
      $(this).removeClass('overflow');
    }
  });
});