
/* javascript */
"use strict";

// Haversine formula, call convertToMiles(earthRadiusKM, userLat, userLong, parkLat, parkLong) to get final value in miles//
var earthRadiusKM = 6378;
var userLat = 35.50071444;
var userLong = -80.84472615;
var parkLat = 34.67214084;
var parkLong = -77.14148631;

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

	if (errors <= numberErrorsAllowed) {
			$(".errorDisplay").html(errors);
	}	else {
		errors = 0
		$(".errorDisplay").html(errors)
		imoverIt()
	}
*/
