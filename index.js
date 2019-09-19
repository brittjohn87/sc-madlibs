// this how you make a function
function madlibs() {
	var adjective1 = prompt("Give me an adjective");
	var adjective2 = prompt("Give me another adjective");
	var ride = prompt("Favorite Carnival Ride");
	var restaurant = prompt("Favorite Restaurant");
	var game = prompt("Fave Game");
	var hobby = prompt("Fave Hobby");
	alert("Thank you for playing");

	$('.madlibs').html("A vacation is when you take a trip to some "+adjective1+" place with your "+adjective2+" family. Usually you go to some place that is near a "+ride+" or a "+restaurant+". A good vacation place is one where you can play "+game+" or "+hobby+"!");
}

function madlibsTech(){
	var adjective = prompt("Give me an adjective");
	var number = prompt("Give me a number");
	var noun = prompt("Give me a noun");
	var room = prompt("Give me a room in your house");
	var pluralNoun = prompt("Give me a plural noun");

	$('.madlibs').html("Since I use my computer every day, it can get "+adjective+" really quickly. I usually clean it "+number+ " times a day. My routine consists of grabbing a soft " +noun+ " from the " +room+ " and wiping down the keyboard to get rid of all the " +pluralNoun+".")
}


// Clear Function (to clear the game once it's complete)
function clear() {
	$('.madlibs').html("")
}

$('#clear').click(function(){
	clear();
})

$('#start').click(function(){
	madlibs();
})

$('#tech').click(function(){
	madlibsTech();
})

// this is how you call a function
// madlibs();