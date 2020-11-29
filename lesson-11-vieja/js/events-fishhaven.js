const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		console.table(jsonObject); // temporary checking for valid response and data parsing
		const towns = jsonObject['towns'];

		for (let i = 0; i < towns.length; i++) {

			if (towns[i].name == "Fish Haven") {


				let card = document.createElement('section');
				let h2 = document.createElement('h2');

				let p2 = document.createElement('p');
				let p3 = document.createElement('p');
				let p4 = document.createElement('p');
				let p5 = document.createElement('p');


				h2.textContent = "Coming Events";
				p2.textContent = towns[1].events[0];
				p3.textContent = towns[1].events[1];
				p4.textContent = towns[1].events[2];
				p5.textContent = towns[1].events[3];

				card.appendChild(h2);
				card.appendChild(p2);
				card.appendChild(p3);
				card.appendChild(p4);
				card.appendChild(p5);


				document.querySelector('div.events-preston').appendChild(card);
			}


		}
	});
