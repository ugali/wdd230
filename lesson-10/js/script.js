const townsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let cities = [];

function createHtmlElements(citiesList) {
	citiesList.forEach((city) => {
        console.log(city);
		if (
			city.name == 'Soda Springs' ||
			city.name == 'Fish Haven' ||
			city.name == 'Preston'
		) {
			let section = document.createElement('section');
			let artical = document.createElement('artical');
			let articalin = document.createElement('artical');
			let name = document.createElement('h3');
			let motto = document.createElement('p');
			let year = document.createElement('p');
			let population = document.createElement('p');
			let rain = document.createElement('p');
			let image = document.createElement('img');

			artical.setAttribute('class', 'home-section');
			name.textContent = city.name;
			motto.textContent = city.motto;
			year.textContent = `Year Founded: ${city.yearFounded}`;
			population.textContent = `Population: ${city.currentPopulation}`;
			rain.textContent = `Annual Rain Fall: ${city.averageRainfall}`;
			image.setAttribute('src', `images/${city.photo}`);
			image.setAttribute('alt', `${city.name} photo`);

			articalin.appendChild(name);
			articalin.appendChild(motto);
			articalin.appendChild(year);
			articalin.appendChild(population);
			articalin.appendChild(rain);
			artical.appendChild(articalin);
			section.appendChild(artical);
			section.appendChild(image);

			document.querySelector('.cities-container').appendChild(section);
		}
	});
}

fetch(townsURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		cities = jsonObject['towns'];
		createHtmlElements(cities);
	});
