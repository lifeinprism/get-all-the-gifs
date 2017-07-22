var api = 'https://api.giphy.com/v1/gifs/';
var query = 'random?';
var apiKey = 'api_key=a89fcdd94f6e49bfabea496708aa14d1';
var rating = '&tag=&rating=R';
//var gifButton = document.getElementById("serve-gif");

window.onload = function() {

  document.getElementById("serve-gif").onclick = () => {imgGrab()};
  
  let imgGrab = () => {
    var url = api + query + apiKey + rating;
    var gifJSON = $.getJSON(url);
    
    gifJSON.done((data) => { 
    	document.getElementById("gif-displayer").innerHTML = '<img src="' + data.data.image_url + '">'; 
    });

  };

  imgGrab();

}