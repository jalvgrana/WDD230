const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		console.table(jsonObject); // temporary checking for valid response and data parsing
		const towns = jsonObject['towns'];

		for (let i = 0; i < towns.length; i++) {

			if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {


				let card = document.createElement('section');
				let h2 = document.createElement('h2');
				let h3 = document.createElement('h3');
				let p1 = document.createElement('p');
				let p2 = document.createElement('p');
				let p3 = document.createElement('p');
				let p4 = document.createElement('p');
				let image = document.createElement('img')




				h2.textContent = towns[i].name;
				h3.textContent = towns[i].motto;
				p2.textContent = "Year Founded: " + towns[i].yearFounded;
				p3.textContent = "Current Population: " + towns[i].currentPopulation;
				p4.textContent = "Average Rainfall: " + towns[i].averageRainfall;
				image.setAttribute('src', "images/index/" + towns[i].photo);



				card.appendChild(h2);
				card.appendChild(h3);
				card.appendChild(p2);
				card.appendChild(p3);
				card.appendChild(p4);
				card.appendChild(image);


				document.querySelector('div.threetowns').appendChild(card);
			}


		}
	});
