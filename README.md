# liri-node-app

A command line node application that interprets commands and gives back data.

LIRI acceps four commands:
	
	my-tweets: Displays the last 20 tweets from @MyProject009 with their timestamps.

	movie-this "<Movie Title>": Seaches OMDB for <Movie Title>, returns data, and displays the movie title, year it was released, IMDB rating, Rotten Tomatoes rating, country it was produced, plot, and actors. If no movie title is entered, it defaults to "Mr. Nobody".
	
	spotify-this-song "<Song Title>": Searches Spotify for <Song Title>, returns data, and displays the atrist(s), song name, song preview link, and the album the song is from. If no song title is entered, it searches for "The Sign" by Ace of Base.
	
	do-what-it-says: Takes the text from random.txt and uses it to call one of LIRI's commands. As of writing this, it should search spotify for the song "I Want it That Way".