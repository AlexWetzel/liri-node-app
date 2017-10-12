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
				console.log("test");
				console.log(tweets[i].created_at);
				console.log(tweets[i].text);
			}			
		}
		if (error) {
			console.log(error);
		}
	});
}

if(command === "do-what-it-says") {
	fs.readFile("random.txt", "utf8", function(error, data) {
		if (error) {
			console.log(error);
		}
		console.log(JSON.stringify(data, null, 2));

		var dataArr = data.split(",");

		
	});
}
if(command === "my-tweets") {
	
	getTwitter()
}
if(command === "spotify-this-song") {
	var params = {
		type: 'track',
		query: 'All the Small Things',
		limit: 1
	}
	spotify.search(params, function(err, data) {
		if (err) {
	  		return console.log('Error occurred: ' + err);
		}
	 	var track = data.tracks.items[0]
		console.log(track.artists[0].name); 
		console.log(track.name); 
		console.log(track.preview_url); 
		console.log(track.album.name); 
	});
}
if(command === "movie-this") {

	var movie = "remember+the+titans"
	request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
		if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
			console.log(JSON.stringify(response, null, 2));
			console.log(JSON.parse(body).Title);
			console.log(JSON.parse(body).Year);
			console.log(JSON.parse(body).imdbRating);
			console.log(JSON.parse(body).Ratings[1].Value);
			console.log(JSON.parse(body).Country);
			console.log(JSON.parse(body).Language);
			console.log(JSON.parse(body).Plot);
			console.log(JSON.parse(body).Actors);
		}
	});
}