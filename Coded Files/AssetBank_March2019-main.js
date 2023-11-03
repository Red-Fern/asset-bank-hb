  $(function() {
    
    
    
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    

    /** 
       * Mobile Nav
       *
       * Hubspot Standard Toggle Menu
       */

    $('.custom-menu-primary').addClass('js-enabled');

    /* Mobile button with three lines icon */
    $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger"><i></i></div>');

    /* Uncomment for mobile button that says 'MENU' 
          $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger">MENU</div>');
      */

    $('.custom-menu-primary .flyouts .hs-item-has-children > a').after(' <div class="child-trigger"><i></i></div>');
    $('.mobile-trigger').click(function() {
      $(this).next('.custom-menu-primary .hs-menu-wrapper').slideToggle(250);
      $('body').toggleClass('mobile-open');
      $('.child-trigger').removeClass('child-open');
      $('.custom-menu-primary .hs-menu-children-wrapper').slideUp(250);
      return false;
    });

    $('.child-trigger').click(function() {
      $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
      $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
      $(this).next('.hs-menu-children-wrapper').slideToggle(250);
      $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
      $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
      $(this).toggleClass('child-open');
      return false;
    });

    $('.child-trigger').hover(function(){
      $(this).parent().addClass('hover');
    },function(){
      $(this).parent().removeClass('hover');
    });

    $('.custom-menu-primary .hs-menu-wrapper > ul li').each(function(){
      $(this).addClass( $(this).children('a').text().trim().split(' ').join('-').toLowerCase() );
    });

    $('.hs-menu-wrapper > ul > li.hs-item-has-children > a').each(function(){
      $(this).append('<svg class="ab-icon" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"></path></svg>');
    });

   $('.hs-menu-wrapper > ul > li > a').click(function(){
      $('.hs-menu-wrapper > ul > li').removeClass('active');
      $(this).parent().toggleClass('active');
    });
    
    $('body').click(function(){
      $('.hs-menu-wrapper > ul > li').removeClass('active');
    });
    $('.hs-menu-wrapper > ul > li > a,.hs-menu-wrapper > ul > li > ul').click(function(e){
      e.stopPropagation();
    });

//     $(window).scroll(function(){
//       if ($(this).scrollTop() > 170){
//         $('body').addClass("scroll-body");
//       }
//       else{
//         $('body').removeClass("scroll-body");
//       }
//     });


   

//     var previousScroll = 0;
//     $(window).scroll(function() {
//       var currentScroll = $(this).scrollTop();
//       if (currentScroll > previousScroll) {
//         $('body').removeClass('scroll-body1');
//       }
//       else {
//         $('body').addClass('scroll-body1');
//       }
//       if (currentScroll < 100) {
//         $('body').removeClass('scroll-body1');
//       }
//       previousScroll = currentScroll;
//     });

    if ($('div#comments-listing').html() == "" ){
      $('div#comments-listing').addClass('no-comments');
    }

    $('.subheader').parent().css('min-height','0');

    $(window).on("load resize", function(){
      var yetVisited = sessionStorage.getItem("visitedBright");
      if (yetVisited == 'yes') {
        console.log('LOG');
        $(".asset-bank-header-top").show();
      }
      if( $('.ab-secondary-nav').length > 0 ){
        if ($(this).width() > 991) {
          var headerHeight = $('.custom-header').outerHeight();
          var subHeaderHeight = $('.ab-secondary-nav').outerHeight();
          $('body:not(.hs-home-v4) .body-container-wrapper').css('padding-top', headerHeight + subHeaderHeight );
        }
      }else{
        var headerHeight = $('.custom-header').outerHeight();
        $('body:not(.hs-home-v4) .body-container-wrapper').css('padding-top', headerHeight );
      }

    });

    $('.abt-wrapper>.row-fluid-wrapper>.row-fluid').addClass('row');
    $('.abt-lyt .content_with_image_group .flex-sm-row-reverse .col-md-4').before('<div class="col-md-1"></div>');

    $(window).load(function(){
      $('.hs-rss-listing .hs-rss-item .hs-rss-byline span.hs-rss-date').text($('.hs-rss-listing .hs-rss-item .hs-rss-byline span.hs-rss-date').text().split(' at')[0]);
      $('.hs-rss-listing .hs-rss-item').each(function(){
        $(this).find('span.hs-rss-date').text($(this).find('span.hs-rss-date').text().split(' at')[0]);
      });
      $('.hs-rss-listing .hs-rss-item .hs-rss-byline').each(function () {
        $(this).insertBefore($(this).prev('.hs-rss-listing .hs-rss-item a.hs-rss-title'));
      });
    });


  });





  $(document).ready(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 72
          }, 500);
          return false;
        }
      }
    });
  });

