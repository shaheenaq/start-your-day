

const currentTime = () => {
	document.querySelector('#currentTime').innerHTML = new Date();
}

let myVar = setInterval(currentTime, 1000);

let quotes = [
		{
		content : "Insanity is doing the same thing, over and over again, but expecting different results.",
		author : "-Narcotics Anonymous"
		},
		{
		content : "We accept the love we think we deserve.",
		author : "-Stephen Chbosky, The Perks of Being a Wallflower"
		},
		{
		content : "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
		author : "-Ralph Waldo Emerson"
		},
		{
		content : "Live as if you were to die tomorrow. Learn as if you were to live forever.",
		author : "-Mahatma Gandhi"
		}
		];
let index = Math.floor(Math.random() * quotes.length);
document.querySelector('#quote').innerHTML = `&#8220 ${quotes[index].content} &#8221 <br> ${quotes[index].author}`;


const handleClick = (e) => {

	let userZipcode = document.getElementById('zipcode').value;
	let weatherData;
		const urlW = `http://api.openweathermap.org/data/2.5/weather?zip=${userZipcode},us&units=imperial&appid=e609adc51cd1d7c976b4c68b8e4e1962`;
		fetch(urlW)
			.then(response => response.json())
			.then(data2 => {
				console.log(data2);
				weatherData = data2;
				let para1 = document.createElement('p');
				para1.innerHTML = `Today's weather in ${weatherData.name}, ${weatherData.sys.country}`;
				document.getElementById('weather').appendChild(para1);
				let para2 = document.createElement('p');
				para2.innerHTML = `${weatherData.main.temp}&#8457 : ${weatherData.weather[0].description}`;
				document.getElementById('weather').appendChild(para2);
				let image1 = document.createElement('img');
				image1.setAttribute('src','http://openweathermap.org/img/w/'+weatherData.weather[0].icon+'.png');
				document.getElementById('weather').appendChild(image1);
			
		});
}

document.querySelector('button').addEventListener('click', handleClick);



