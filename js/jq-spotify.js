$(document).ready(function() {

  //define variables
  var inputSearch = $('#search-music');
  var searchSelect = $('#select-search');
  var results = $('#results');
  var button = $('#submit');
  var searchInput;


  //Event listeners
  inputSearch.on('change', getSearchInput);
  searchSelect.on('change', getResults);
  button.on('click', getResults);

  function getSearchInput() {
    searchInput = inputSearch.val().toLowerCase();
  }

  function getResults(e) {
    
    event.preventDefault();
    results.empty();

    var searchType = $('#select-search').val();
    console.log('Search type = ' + searchType);

    $.get('https://api.spotify.com/v1/search?q=' + searchInput + '&type=' + searchType, function(response) {
        
        var music = response[searchType+'s']['items'];

      if (searchType === 'track')
        $.each(music, function(index, item) {
          results.append("<div class='track'><a href ='"+music[index]['preview_url'] +"'>" + music[index]['name'] + "</a></div>")
        })
      else
      $.each(music, function(index, item) {
        console.log(music[index]['name']);
        results.append("<p>" + music[index]['name'] + "</p>")
      });
    })
  };
});