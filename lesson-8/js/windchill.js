/*This script helps calculate the Wind Chill in a given situation

INPUT: gets 2 values, temperature (temp) and windspeed (speed) from span tags in the HTML

PROCESS: then runs the formula f=35.74+0.6215*t−35.75*s^0.16+0.4275*t*s^0.16

OUTPUT: will be a single number displayed back into the HTML using span tag


*/

const tempNumber = parseFloat(document.getElementById("temp").textContent);
 //console.log(tempNumber);

 const speedNumber = parseFloat(document.getElementById("speed").textContent);
 //console.log(speedNumber);

 let windChill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
 //console.log(windChill);

 windChill = Math.round(windChill);
 //console.log(windChill);

 if (tempNumber <= 50 && speedNumber > 3) {
     document.getElementById("chill").textContent = "Low Wind Chill: " + windChill + "\xB0F";

 } else {
     document.getElementById("chill").textContent = "There is no Wind Chill Today";
 }
