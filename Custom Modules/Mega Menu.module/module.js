$(document).ready(function() {
    //var yetVisited = localStorage['visitedBright'];
    var yetVisited = sessionStorage.getItem("visitedBright");
    if (!yetVisited) {
        //localStorage['visitedBright'] = "yes";
        sessionStorage.setItem("visitedBright", "yes");
    }
});


$('.custom-menu-primary .navigation-primary > ul > li > a').each(function(){
  var menuText = $ (this).text();
  $(this).parent().addClass(menuText);
});

$('#menu-toggle').click(function() {
  $('body').toggleClass('mobile-open');
  $(this).toggleClass('open');
  //$('.menu-expand').removeClass('child-open');
  //$('.submenu.level-2').slideUp(250);
  return false;
});

$('.menu-expand').click(function() {
  $(this).parent().siblings('.has-submenu').find('.menu-expand').removeClass('child-open');
  $(this).parent().siblings('.has-submenu').find('.menu-link').removeClass('child-open');
  $(this).parent().siblings('.has-submenu').find('.submenu').slideUp(250);
  $(this).next('.submenu').slideToggle(250);
  $(this).toggleClass('child-open');
  $(this).prev('.menu-link').toggleClass('child-open');
  
  return false;
});


$('.custom-header .menu-link').click(function(e) {
  
  if ($(this).attr('href') != '') { 
    //console.log('content in href'); 
  } else {
    e.preventDefault();
    //console.log('no href'); 
  }

});







// Desktop home page - add class so white background can be added
$('.mega-menu-primary .navigation-primary > ul > li.has-submenu').hover(
  function(){ $('.custom-header').addClass('mega-open') },
  function(){ $('.custom-header').removeClass('mega-open') }
)