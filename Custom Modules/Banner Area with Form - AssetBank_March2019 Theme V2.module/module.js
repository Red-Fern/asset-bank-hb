$( window ).on('resize load',function() {
  var height = $(".landing-page_content-break").offset().top;
  $(".landing-page-bg").css('height',height + 'px' );
});