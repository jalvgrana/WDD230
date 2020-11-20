//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=ecc2a14865c0e91eab93612d2db7f58c&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
//	location
	document.getElementById("place").innerHTML = weatherInfo.name;
//	currently weather
	document.getElementById("currentWeather").innerHTML = weatherInfo.weather[0].main;
//	temperature
	document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp_max;
//	humidity
	document.getElementById("humidity").innerHTML = weatherInfo.main.humidity;
//	wind speed
	document.getElementById("windSpeed").innerHTML = weatherInfo.wind.speed;
//	wind chill
	var t = parseFloat(document.getElementById("currentTemp").innerHTML);
     var s = parseFloat(document.getElementById("windSpeed").innerHTML);
     var chill = 35.74 + .6215 * t - 35.75 * Math.pow(s, .16) +  .4275 * t * Math.pow(s, .16);
        if (t < 51 && s > 3) {
            document.getElementById("windChill").innerHTML = Math.round(chill);
        }
        else {
            document.getElementById("windChill").innerHTML = "N/A";
        }
	
 }); //end of "then" fat arrow function