var keys = require("./keys.js");
var Twitter = require("twitter");
var request = require('request');
var queryUrl;

var command = process.argv[2];
var client = new Twitter({
  consumer_key: 'RBiCgwHUHwIqGgRYyIwr6oP1I',
  consumer_secret: '0Vjn7QvK8gCanmzI5DK7QxmczWUo3KkJyWH8m6OBdUWToCH4PS',
  access_token_key: '917800911837294593-OwIJrrE75aQW1epUyGTcSHhCZpB2kZ7',
  access_token_secret: 'Iz8pI1CCooeT9XKXvia5ft0S9vphVYKrmxYfh9LTblNYv',
});

if(command === "my-tweets") {
	
	var params = {
		user_id: "MyProject009",
		count: 20
	};
//	queryUrl = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" + screenName + "&count=" + count
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			console.log(tweets[0].text);
		}
		if (error) {
			console.log(error);
		}
});
}
if(command === "spotify-this-song") {

}
if(command === "movie-this") {

}
if(command === "do-what-it-says") {

}