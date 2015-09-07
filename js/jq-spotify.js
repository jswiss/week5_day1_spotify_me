$(document).ready(function() {

  //define variables
  var submitButton = $('#submit-search');  
  var inputSearch = $('#search-music');
  var searchSelect = $('#select-search');
  var results = $('#results');
  var searchInput;

  //Event listeners
  // submitButton.on('click', getSpotifyData)
  inputSearch.on('change', getSearchInput);
  searchSelect.on('change', getResults);

  function getSearchInput() {
    searchInput = inputSearch.val().toLowerCase();
  }

  function getResults(e) {
    var searchType = $(this).val();
    console.log('Search type = ' + searchType);

    $.get('https://api.spotify.com/v1/search?q=' + searchInput + '&type=' + searchType, function(response) {
      console.log(response[searchType+'s']['items']);

      var 
    });
  }



});