let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");
let weatherCountry = document.querySelector("#weatherCountry");
let precaution = document.querySelector("#precaution");
let temperature = document.querySelector("#temperature");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let weatherDescription = document.querySelector("#weatherDescription");


check.addEventListener("click", () => {
    let key = `bd4ea33ecf905116d12af172e008dbae`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&lang=en&units=metric&appid=${key}`;

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        weatherCountry.innerText = `${data.name} / ${data.sys.country}`;
        temperature.innerHTML = `${data.main.temp}°<b>C</b>`;
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + "')";

        

        feelsLike.innerText = `Feels Like ${data.main.feels_like}°C`;

        humidity.innerText = `Humidity ${data.main.humidity}`;
		
		data.weather.forEach(items => {
            weatherDescription.innerText = items.description;
            if (items.id < 250) {
                tempIcon.src = `tempicons/storm.svg`;
            } else if (items.id < 350) {
                tempIcon.src = `tempicons/drizzle.svg`;
            } else if (items.id < 550) {
                tempIcon.src = `tempicons/snow.svg`;
            } else if (items.id < 650) {
                tempIcon.src = `tempicons/heavyrain.svg`;
            } else if (items.id < 800) {
                tempIcon.src = `tempicons/winds.svg`;
            } else if (items.id === 800) {
                tempIcon.src = `tempicons/increasingtemperature.svg`;
            } else if (items.id > 800) {
                tempIcon.src = `tempicons/lightning.svg`;
            }
        })
		
        latitude.innerText = `Latitude ${data.coord.lat}`;
        longitude.innerText = `Latitude ${data.coord.lon}`;

    })
	
    country.value = "";
    city.value = "";
})