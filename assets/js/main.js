
/* javascript */
"use strict";
//functions to get data inputted by user//

//sort array by property
//console.log(data[0]); //take spaces out of names//


// Haversine formula, call convertToMiles(earthRadiusKM, userLat, userLong, parkLat, parkLong) to get final value in miles//

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
*/
var userLat = 35.50071444;
var userLong = -80.84472615;
var parkLat = 34.67214084;
var parkLong = -77.14148631;
//FUNCTION NOW WORKS IN THE CONSOLE!!!!!!!!!!!!!!
function haversineFormula(userLat, userLong, parkLat, parkLong) {
  var radUserLat = userLat * (Math.PI / 180);
  var radUserLong = userLong * (Math.PI / 180);
  var radParkLat = parkLat * (Math.PI / 180);
  var radParkLong = parkLong * (Math.PI / 180);

  var difLat = radParkLat - radUserLat;
  var difLong = radParkLong - radUserLong;

  var haversineOne = Math.sin(difLat/2) * Math.sin(difLat/2) + Math.cos(radUserLat)*Math.cos(radParkLat) * Math.sin(difLong/2) * Math.sin(difLong/2);

  var haversineTwo = 2 * 6378 * Math.asin(Math.sqrt(haversineOne));

  var havmiles = haversineTwo * 0.621371;

	return havmiles;
}

//console.log(haversineFormula(userLat, userLong, parkLat, parkLong))
/*
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

// Time Calculation - note 25 minutes per mile? //
var screenTimeHours = 4;
var screenTimeMinutes = 17;

function timeToHikingMiles(screenTimeHours, screenTimeMinutes){
  return ((screenTimeHours * 60) + screenTimeMinutes)/25;
}

/*
function mockHaver(lat){
 return 4 + Number(lat);
}
*/

for(let i = 0; i < data.length; i++){
	data[i].haversine = convertToMiles(data[i].lat)
}


function compare( a, b ) {
  if ( a.haversine < b.haversine ){
    return -1;
  }
  if ( a.haversine > b.haversine ){
    return 1;
  }
  return 0;
}

console.log(data.sort( compare ));

//NEED: An event listener, code to call functions when buttone clicked//

/*$(".findmyparkbox").on("click",function(){
	errors ++;
	updatingerrorDisplay();
});
*/

//Take in input values from user and assign them to variables//

//Call above formulas using inputted values and values from data//





/* from prev. code, ex for function syntax

	if (errors <= numberErrorsAllowed) {
			$(".errorDisplay").html(errors);
	}	else {
		errors = 0
		$(".errorDisplay").html(errors)
		imoverIt()
	}
*/
