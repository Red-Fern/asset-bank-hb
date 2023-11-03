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
  eur: { symbol: '€', multiplier: 1.25 },
  usd: { symbol: '$', multiplier: 1.5 },
  aud: { symbol: '$', multiplier: 2 },
  cad: { symbol: '$', multiplier: 1.9 }
};

$('.currency-selector').on('click', function() {
   var currency = $(this).data('currency');
   $('.price-value').each(function(index) {
     var currencyData = currencies[currency];
     var priceValue = parseFloat(prices[index]);
     var convertedPrice = Math.ceil(priceValue * currencyData.multiplier);
     var label = currencyData.symbol + convertedPrice;
     $(this).text(label);
   });
});

