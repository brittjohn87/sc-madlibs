// this how you make a function
function madlibs() {
	var adjective1 = prompt("Give me an adjective");
	var adjective2 = prompt("Give me another adjective");
	var ride = prompt("Favorite Carnival Ride");
	var restaurant = prompt("Favorite Restaurant");
	var game = prompt("Fave Game");
	var hobby = prompt("Fave Hobby");
	alert("Thank you for playing");

	$('div').html("A vacation is when you take a trip to some "+adjective1+" place with your "+adjective2+" family. Usually you go to some place that is near a "+ride+" or a "+restaurant+". A good vacation place is one where you can play "+game+" or "+hobby+"!");
}

// this is how you call a function
madlibs();