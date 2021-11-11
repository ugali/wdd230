const requestURL =
	'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
        
        console.log(jsonObject);
        const prophets = jsonObject['prophets'];
        
        for (let i = 0; i < prophets.length; i++) {
            let cards = document.createElement('section');
            cards.setAttribute("class", "card");
            let h2 = document.createElement('h2');
            let image = document.createElement('IMG');
            let url = prophets[i].imageurl;
            image.setAttribute("src", url);
            h2.textContent = `${prophets[i].name}  ${prophets[i].lastname}`;
            cards.appendChild(image);
            cards.appendChild(h2);
            document.querySelector('div.container').appendChild(cards); 
        }
	});

