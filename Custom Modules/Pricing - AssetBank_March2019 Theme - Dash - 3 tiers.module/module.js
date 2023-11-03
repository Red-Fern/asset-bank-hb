// get the geo location API result via jQuery.ajax
$.ajax({
  url: 'https://ipapi.co/json/',   
  //dataType: 'jsonp',
  success: function(data) {

    console.log(data);

    $('.price-value').removeClass('active');
    $('.currency-selector').removeClass('active');
    
    //if (data.country_code = 'GB','US','AU','CA','AL','AD','AT','BY','BE','BA','BG','HR','CY','CZ','DK','EE','FO','FI','FR','DE','GI','GR','HU','IS','IE','IM','IT','XK','LV','LI','LT','LU','MK','MT','MD','MC','ME','NL','NO','PL','PT','RO','RU','SM','RS','SK','SI','ES','SE','CH','UA','VA') {
    if (['GBP', 'USD', 'AUD', 'CAD', 'EUR'].indexOf(data.currency) !== -1) {
      $('.price-value' + '.' + data.country_code).addClass('active');
      $('.currency-selector' + '.' + data.country_code).addClass('active');
      console.log('if');
    } else {
      $('.price-value.GB').addClass('active');
      $('.currency-selector.GB').addClass('active');
      console.log('else');
    }
  },
  done: function() {
    console.log('done');
  },
  error: function() {
    console.log('error');
  }
});





$('.accordion-1').squeezebox({
  closeOthers: false, 
  timing: 300,
  onOpen: function(el){
    el.clickedEl.addClass('accordion_open');
  },
  onClose: function(el){
    el.clickedEl.removeClass('accordion_open');
  }			
});




var a = $("#cd-table .cd-table-container").find(".cd-table-column").length;
$(".cd-table-container").on("scroll", function() {
 $this = $(this), $this.scrollLeft() > 0 && $(".cd-scroll-right").hide();
 var e = parseInt($(".cd-table-wrapper").css("width").replace("px", "")),
  i = parseInt($("#cd-table").css("width").replace("px", ""));
 $this.scrollLeft() >= e - i - a ? $("#cd-table").addClass("table-end") : $("#cd-table").removeClass("table-end")
}), $(".cd-scroll-right").on("click", function() {
 $this = $(this);
 var e = $(this).siblings(".cd-table-container").find(".cd-table-column").eq(0).css("width").replace("px", ""),
  i = parseInt($(".cd-table-container").scrollLeft()) + parseInt(e);
 $(".cd-table-container").animate({
  scrollLeft: i
 }, 200), $this.hide()
})

let prices = [];
$('.price-value').each(function() {
  prices.push(parseFloat($(this).text().substring(1)));
});

var currencies = {
  gbp: { symbol: '£', multiplier: 1 },
  eur: { symbol: '€', multiplier: 1.3 },
  usd: { symbol: '$', multiplier: 1.5 },
  aud: { symbol: '$', multiplier: 2 },
  cad: { symbol: '$', multiplier: 1.9 }
};

$('.currency-selector').on('click', function() {
  var currency = $(this).data('currency');
  
  $('.price-value').removeClass('active');
  $('.price-list').each(function() {
    var $priceValue = $('.price-value.' + currency.toUpperCase(), this);
    $priceValue.addClass('active');
  });

//    $('.price-value').each(function(index) {
//      var currencyData = currencies[currency];
//      var priceValue = parseFloat(prices[index]);
//      var convertedPrice = Math.ceil(priceValue * currencyData.multiplier);
//      var label = currencyData.symbol + convertedPrice;
//      $(this).text(label);
//    });
  $('.currency-selector').removeClass( "active" );
  $(this).addClass( "active" );
});


