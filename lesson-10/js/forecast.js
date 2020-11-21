const d = new Date();

	const todayDayNumber = d.getDay();

	const weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Firday";
	weekday[6] = "Saturday";

	const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5816861&appid=ecc2a14865c0e91eab93612d2db7f58c&units=imperial";

	fetch(apiURL)
	    .then((response) => response.json())
	    .then((weatherInfo) => {
	       
	        document.getElementById("townName").textContent = weatherInfo.city.name;

	        let mylist = weatherInfo.list;

	        let forecastDayNumber = todayDayNumber;
	        console.log(forecastDayNumber);

	        for (i = 0; i < mylist.length; i++) {

	            let time = mylist[i].dt_txt;

	            if (time.includes('21:00:00')) {
	                console.log("Found an entry with 21:00:00 in the time. It was report " + i + " from the mylist of 40");

	                forecastDayNumber += 1;
	                if (forecastDayNumber === 7) {
	                    forecastDayNumber = 0;
	                }
	                console.log("Forecast Day Number " + forecastDayNumber + " which is" + weekday[forecastDayNumber]);

	                let theDayName = document.createElement("span");
	                theDayName.textContent = weekday[forecastDayNumber];

	                let theTemp = document.createElement("p");
	                theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

	                let iconcode = weatherInfo.list[i].weather[0].icon;
                    let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
	                let theIcon = document.createElement("img");
	                theIcon.src = iconPath;

	                let theDay = document.createElement("div");
	                theDay.appendChild(theDayName);
	                theDay.appendChild(theTemp);
	                theDay.appendChild(theIcon);

	                document.getElementById('weatherforecast').appendChild(theDay);
	            } // end if
	        } //end for

	    }); //end of "then" fat arrow function



 