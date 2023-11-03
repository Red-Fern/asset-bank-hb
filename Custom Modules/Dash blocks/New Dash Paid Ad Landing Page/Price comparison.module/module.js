// get the geo location API result via jQuery.ajax
$.ajax({
  url: 'https://ipapi.co/json/',   
  //dataType: 'jsonp',
  success: function(data) {
    $('.js-price-value').removeClass('active');
    $('.js-currency-selector').removeClass('active');
    
    //if (data.country_code = 'GB','US','AU','CA','AL','AD','AT','BY','BE','BA','BG','HR','CY','CZ','DK','EE','FO','FI','FR','DE','GI','GR','HU','IS','IE','IM','IT','XK','LV','LI','LT','LU','MK','MT','MD','MC','ME','NL','NO','PL','PT','RO','RU','SM','RS','SK','SI','ES','SE','CH','UA','VA') {
    if (['GBP', 'USD', 'AUD', 'CAD', 'EUR'].indexOf(data.currency) !== -1) {
      $('.js-price-value' + '.' + data.country_code).addClass('active');
      $('.js-currency-selector' + '.' + data.country_code).addClass('active');
      console.log('if');
    } else {
      $('.js-price-value.GB').addClass('active');
      $('.js-currency-selector.GB').addClass('active');
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


// Set up currency selector behaviour

let prices = [];
$('.js-price-value').each(function() {
  prices.push(parseFloat($(this).text().substring(1)));
});

var currencies = {
  gbp: { symbol: '£', multiplier: 1 },
  eur: { symbol: '€', multiplier: 1.3 },
  usd: { symbol: '$', multiplier: 1.5 },
  aud: { symbol: '$', multiplier: 2 },
  cad: { symbol: '$', multiplier: 1.9 }
};

$('.js-currency-selector').on('click', function() {
  var currency = $(this).data('currency');
  
  $('.js-price-value').removeClass('active');
  $('.js-price-list').each(function() {
    var $priceValue = $('.js-price-value.' + currency.toUpperCase(), this);
    $priceValue.addClass('active');
  });

  $('.js-currency-selector').removeClass( "active" );
  $(this).addClass( "active" );
});


