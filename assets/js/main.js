
/* javascript */
"use strict";

//functions to get data inputted by user & put as variables userLat, userLong, userHours, userMinutes

/*
var userLat = 35.50071444;
var userLong = -80.84472615;
var userHours = 4;
var userMinutes = 17;
*/
var parkLat = 34.67214084;
var parkLong = -77.14148631;


//FUNCTION NOW WORKS IN THE CONSOLE!!!!!!!!!!!!!!
function haversineFormula(userLat, userLong, parkLat, parkLong) { //can i pass in data[i].lat and data[i].long? does it matter what is passed in?
  var radUserLat = userLat * (Math.PI / 180);
  var radUserLong = userLong * (Math.PI / 180);
  var radParkLat = parkLat * (Math.PI / 180); //change park lat to somehow have data index data[i].lat??
  var radParkLong = parkLong * (Math.PI / 180);//change park long to somehow have data index data[i].long??

  var difLat = radParkLat - radUserLat;
  var difLong = radParkLong - radUserLong;

  var haversineOne = Math.sin(difLat/2) * Math.sin(difLat/2) + Math.cos(radUserLat)*Math.cos(radParkLat) * Math.sin(difLong/2) * Math.sin(difLong/2);

  var haversineTwo = 2 * 6378 * Math.asin(Math.sqrt(haversineOne));

  var havmiles = haversineTwo * 0.621371;

	return havmiles;
}

// Time Calculation

function timeToHikingMiles(userHours, userMinutes){
  return ((userHours * 60) + userMinutes)/25;
}
/*
//Go through every park lat/long & calculate distance between park and user
for(let i = 0; i < data.length; i++){
	data[i].haversine = convertToMiles(data[i].lat)
}

//compare the returned haversine values from above, ordering them from lowest to highest
function compare( a, b ) {
  if ( a.haversine < b.haversine ){
    return -1;
  }
  if ( a.haversine > b.haversine ){
    return 1;
  }
  return 0;
}

//return the smallest value from above sorted array
console.log(data.sort( compare ));

*/
$("#findmyparkbutton").on("click",function () {
 var userHours = document.getElementById("hours").value;
//  alert(hours);
 var userMinutes = document.getElementById("minutes").value;
//  alert(minutes);
  var userLat = document.getElementById("latitude").value;
//  alert(latitude);
  var userLong  = document.getElementById("longitude").value;
//  alert(longitude);

//alert(haversineFormula(userLat, userLong, parkLat, parkLong));

alert(timeToHikingMiles(userHours, userMinutes));
}
);







//functions to return associated park info (phone number, lat/long, suggested hike, etc. etc.) and appear in right row/col in html




//PSEUDO code

/* from prev. code, ex for function syntax

	if (errors <= numberErrorsAllowed) {
			$(".errorDisplay").html(errors);
	}	else {
		errors = 0
		$(".errorDisplay").html(errors)
		imoverIt()
	}
*/


//HAVERSINE
//CHANGING TO ONE FUNCTION _-------------------> SEE BELOW FOR CODE //
/* from jsfiddle today
function haversineFormula(userLat, userLong, parkLat, parkLong) {
  var radUserLat = userLat * (Math.PI / 180);
  var radUserLong = userLong * (Math.PI / 180);
  var radParkLat = parkLat * (Math.PI / 180);
  var radParkLong = parkLong * (Math.PI / 180);

  var difLat = radParkLat - radUserLat;
  var difLong = radParkLong - radUserLong;

insert step one of haversine

insert step two of haversine

insert convert to miles formula

	return haversine value
}

//OLD haversine
var userLat = 35.50071444;
var userLong = -80.84472615;
var parkLat = 34.67214084;
var parkLong = -77.14148631;
/*
function userLatToRadians(userLat){
  return userLat * (Math.PI / 180);
}

function userLongToRadians(userLong){
  return userLong * (Math.PI / 180);
}

function parkLatToRadians(parkLat){
  return parkLat * (Math.PI / 180);
}

function parkLongtoRadians(parkLong){
  return parkLong * (Math.PI / 180);
}

//convert to radians
function convertToRadians(num){
  return num * (Math.PI / 180);
}


function differenceLat(parkLat, userLat){
  return parkLatToRadians(parkLat) - userLatToRadians(userLat);
}

function differenceLong(parkLong, userLong){
  return parkLongtoRadians(parkLong) - userLongToRadians(userLong);
}

function haversineStepOne (userLat, userLong, parkLat, parkLong){
  return Math.sin(differenceLat(userLat, parkLat)/2) * Math.sin(differenceLat(userLat, parkLat)/2) + Math.cos(userLatToRadians(userLat)) * Math.cos(parkLatToRadians(parkLat)) * Math.sin(differenceLong(parkLong, userLong)/2) * Math.sin(differenceLong(parkLong, userLong)/2);
}

function haversineStepTwo (earthRadiusKM, userLat, userLong, parkLat, parkLong) {
  return 2 * earthRadiusKM * Math.asin(Math.sqrt(haversineStepOne(parkLat, parkLong, userLat, userLong)));
}

function convertToMiles(earthRadiusKM, userLat, userLong, parkLat, parkLong) {
  return (haversineStepTwo(earthRadiusKM, userLat, userLong, parkLat, parkLong) * 0.621371);
}
function mockHaver(lat){
 return 4 + Number(lat);
}

/*$(".findmyparkbox").on("click",function(){
	errors ++;
	updatingerrorDisplay();
});
*/
