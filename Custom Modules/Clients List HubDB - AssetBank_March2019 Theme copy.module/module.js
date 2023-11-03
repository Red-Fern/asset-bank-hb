function getHashFilter() {
  // get filter=filterName
  var matches = location.hash.match( /filter=([^&]+)/i );
  var hashFilter = matches && matches[1];

  return hashFilter && decodeURIComponent(hashFilter);
}

function filterResults() {
  var hashFilter = getHashFilter();
  if (!hashFilter) {
    return;
  }
  // init Isotope
  var $grid = $('.client-logo-grid');
  // filter isotope
  $grid.isotope({
    itemSelector: '.client-logo',
    // use filterFns
    filter: hashFilter
  });
} 

function initialFilterButtonState() {
  var hashFilter = getHashFilter();

  if (hashFilter) {
    //remove classes
    $('.button-group').find('.is-checked').removeClass('is-checked');

    // selectively add active class
    var activeFilters = hashFilter.split('.');

    for(var i=0;i<activeFilters.length;i++) {
      var tabnumber = activeFilters[i];

      $(".button-group").find("[data-filter='." + tabnumber + "']").addClass('is-checked');    
    }
  }
}

$('.button-group').on('click', '.button', function (event) {
  var $button = $( event.currentTarget );
  var $buttonGroup = $button.parents('.button-group');

  $buttonGroup.find('.is-checked').removeClass('is-checked');
  $button.addClass('is-checked');


  $selectedButtons = $('.filters').find('button.is-checked');

  var filterValue = '';

  $selectedButtons.each(function (i, $selectedButton) {
    filterValue += $selectedButton.dataset.filter;
  })

  location.hash = 'filter=' + encodeURIComponent(filterValue);

  filterResults();
})

initialFilterButtonState();
filterResults();
