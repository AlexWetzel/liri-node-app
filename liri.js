var keys = require("./keys.js");
var Twitter = require("twitter");
var request = require('request');
var Spotify = require('node-spotify-api');
var fs = require("fs");

var command = process.argv[2];
var mediaQuery = process.argv[3]

var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);

function getTwitter(){
	var params = {
		user_id: "MyProject009",
		count: 20
	};

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			for (var i = 0; i < tweets.length; i++) {

				console.log(tweets[i].created_at);
				console.log(tweets[i].text + "\n");
			}
		}
		if (error) {
			console.log(error);
		}
	});
}
function getSpotify(){	
	if (mediaQuery === undefined){
		mediaQuery = "The Sign"
	}
	var params = {
		type: 'track',
		query: mediaQuery,
		limit: 1
	}
	spotify.search(params, function(error, data) {
		if (error) {
	  		return console.log('Error occurred: ' + err);
		}
	 	var track = data.tracks.items[0]
		console.log("\nArtist name(s): " + track.artists[0].name); 
		console.log("Track name: " + track.name); 
		console.log("Preview link: " + track.preview_url); 
		console.log("Album name: " + track.album.name); 
	});
}
function getOmdb(){
	if (mediaQuery === undefined){
		mediaQuery = "Mr. Nobody"
	}
	var movie = mediaQuery;
	request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

		if (!error && response.statusCode === 200) {
			console.log("\nTitle: " + JSON.parse(body).Title);
			console.log("Year: " + JSON.parse(body).Year);
			console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
			console.log("Rotten Tomatoes score: " +JSON.parse(body).Ratings[1].Value);
			console.log("Country: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Language);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);
		}
	});
}

if(command === "do-what-it-says") {
	fs.readFile("random.txt", "utf8", function(error, data) {
		if (error) {
			console.log(error);
		}
		var dataArr = data.split(",");

		command = dataArr[0];
		mediaQuery = dataArr[1];

		if(command === "my-tweets") {	
			getTwitter();
		}
		if(command === "spotify-this-song") {
			getSpotify();
		}
		if(command === "movie-this") {
			getOmdb();
		}
	});
}
if(command === "my-tweets") {	
	getTwitter();
}
if(command === "spotify-this-song") {
	getSpotify();
}
if(command === "movie-this") {
	getOmdb();
}