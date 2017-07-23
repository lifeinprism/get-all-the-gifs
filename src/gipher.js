var api = 'https://api.giphy.com/v1/gifs/';
var query = 'random?';
var apiKey = 'api_key=a89fcdd94f6e49bfabea496708aa14d1';
var rating = '&tag=&rating=R';
var limit = '&limit=15&offset=0&rating=R&lang=en';


window.onload = function() {

  //serves random gif onclick
  document.getElementById("serve-gif").onclick = () => {imgGrab()};
  
  //function that gets the JSON from the url, and posts its data as an img
  let imgGrab = (search) => {
 
    //without a search string, api will pull and parse JSON
    //with a search string, url will be compiled, then it will retrieve and parse JSON
  	if (search === undefined) {
      var url = api + query + apiKey + rating;
      var gifJSON = $.getJSON(url);    
    } else {
    	var searchData = api + 'search?' + apiKey + '&q=' + search + limit;
    	var gifJSON = $.getJSON(searchData);
    }

    //takes parsed JSON, the url within an img tag
    gifJSON.done((data) => { 
    	if (searchData && data.data.length) {
    		//with the current settings, 15 image urls will be pulled into an array
    		//this randomizes which image will be displayed based on the length of the image array
    		//handles errors, by serving a random page
    		var randomizer = Math.floor(Math.random() * data.data.length);
    	  document.getElementById("gif-displayer").innerHTML = '<img src="' + data.data[randomizer].images.original.url + '">';
      } else if (searchData && (!data.data.length)) {
        imgGrab();
      } else {
    	  document.getElementById("gif-displayer").innerHTML = '<img src="' + data.data.image_url + '">'; 
      }
    });

  };

  //onclick, grabs search string and executes search
  document.getElementById("search-gif").onclick = () => {activateSearch()};
  
  //runs imgGrab based on search entry
  let activateSearch = () => {
    imgGrab(document.getElementById("search-string").value);
  }

//automatically runs gipher onload and displays a random gif
imgGrab();

}