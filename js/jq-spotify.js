$(document).ready(function() {

  //define variables
  var submitButton = $('#submit-search');  
  var inputSearch = $('#search-music');
  var searchSelect = $('#select-search');
  var results = $('#results');

  //Event listeners
  // submitButton.on('click', getSpotifyData)
  inputSearch.on('change', getSearchInput)
  searchSelect.on('change', getSearchType)

  function getSearchType(e) {
    var searchType = $(this).val();
    console.log(searchType);
  }

  function getSearchInput(e) {
    var searchInput = $(this).val().toLowerCase();
    console.log(searchInput);
  }

});