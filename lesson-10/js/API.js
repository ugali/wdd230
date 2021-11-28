
let cityCode = 5604473;
let cityName = '';

const apiURL =
	'https://api.openweathermap.org/data/2.5/weather?id=' +
	cityCode +
	'&appid=2ace1636d2b567ce42e688891813d59d&units=imperial';
let temperature = 0;
let windSpeed = 0;

fetch(apiURL)
	.then((response) => response.json())
	.then((jsObject) => {
		const desc = jsObject.weather[0].description;
		temperature = jsObject.main.temp_max.toFixed(0);
		windSpeed = jsObject.wind.speed;
		document.querySelector('#current').innerHTML = desc;
		document.querySelector('#tem').innerHTML = temperature;
		document.querySelector('#humidity').innerHTML = jsObject.main.humidity;
		document.querySelector('#ws').innerHTML = windSpeed;
		windChill(temperature, windSpeed);
	});

function windChill(t, ws) {
	if (t <= 50 && ws > 3) {
		wind_chill =
			35.74 + 0.6215 * t - 35.75 * ws ** 0.16 + 0.4275 * t * ws ** 0.16;
		ws = wind_chill.toFixed(0) + '&deg; F';
		document.querySelector('#wc').innerHTML = ws;
	} else {
		document.querySelector('#wc').innerHTML = 'not apply';
	}
}

//Forecast

const forecastURL =
	'https://api.openweathermap.org/data/2.5/forecast?id=' +
	cityCode +
	'&units=imperial&cnt=40&appid=2ace1636d2b567ce42e688891813d59d';

let forecast = [];

function createForecast(fList) {
	fList.forEach((item) => {
		if (item.dt_txt.includes('18:00:00')) {
			let section = document.createElement('section');
			let h5 = document.createElement('h5');
			let image = document.createElement('img');
			let p = document.createElement('p');
			let p2 = document.createElement('p');

			let date = new Date(item.dt_txt);
			let day = date.getDay();
			let today = new Date().getDay();
			const weekday = [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
			];
			if (day == today) {
				h5.textContent = 'Today';
			} else {
				h5.textContent = weekday[day];
			}

			image.setAttribute(
				'src',
				`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
			);
			image.setAttribute('alt', item.weather[0].description);
			p.innerHTML = `${item.main.temp_max.toFixed(0)}&deg; F`;
			p2.innerHTML = item.weather[0].description;

			section.appendChild(h5);
			section.appendChild(image);
			section.appendChild(p);
			section.appendChild(p2);
			document.querySelector('.forecast').appendChild(section);
		}
	});
}

fetch(forecastURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		forecast = jsonObject['list'];
		createForecast(forecast);
	});
