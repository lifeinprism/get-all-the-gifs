var api = 'https://api.giphy.com/v1/gifs/';
var query = 'random?';
var apiKey = 'api_key=a89fcdd94f6e49bfabea496708aa14d1';
var rating = '&tag=&rating=R';
var limit = '&limit=1&offset=0&rating=R&lang=en';

// if user uses the search button set query = 'search?'
// if user uses the search button set rating = '&limit=1&offset=0&rating=R&lang=en'
// format for search string '&q=search term'
// full url with search = api + query + apiKey + searchTerm + rating

window.onload = function() {

  //serves random gif onclick
  document.getElementById("serve-gif").onclick = () => {imgGrab()};
  
  //function that gets the JSON from the url, and posts its data as an img
  let imgGrab = (search) => {

  	if (search === undefined) {
      var url = api + query + apiKey + rating;    
    } else {
    	var searchData = 'https://api.giphy.com/v1/gifs/search?api_key=a89fcdd94f6e49bfabea496708aa14d1&q=ryan gosling&limit=1&offset=0&rating=R&lang=en';
    }

    var gifJSON = $.getJSON(url);
    
    gifJSON.done((data) => { 
    	if (searchData) {
    	  document.getElementById("gif-displayer").innerHTML = '<img src="' + data.data[0].images.original.url + '">';
      } else {
    	  document.getElementById("gif-displayer").innerHTML = '<img src="' + data.data.image_url + '">'; 
      }
    });

  };

  imgGrab();

  //onclick, grabs search string and executes search
  document.getElementById("search-gif").onclick = () => {activateSearch()};
  
  //runs imgGrab based on search entry
  let activateSearch = () => {
    imgGrab(document.getElementById("search-string").value);
  }

}