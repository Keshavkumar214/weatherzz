let weather = {
  apiKey: "784461abbf964775e4dbff256568926e",

  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);

    document.querySelector(".city").innerHTML = "Weather in " + name;

    document.querySelector(".temp").innerHTML = temp + "°C";
    document.querySelector("#icon").src =
      "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".humidity").innerHTML =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind Speed:" + speed + "km/h";
    document.querySelector(".W").classList.remove("loading");
    // document.body.style.backgroundImage="url('https://source.unsplash.com/random/1600x900/?"+ name +"')"
  },
  search: function () {
    this.fetchWeather(document.querySelector("#search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector("#search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Delhi");

// const IMG_URL='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'

// weather.fetchWeather("noida")

// const getWeather=(city)=>{
//     var cityName=Weather_App.querySelector("#cityName")
//     cityName.innerHTML=city

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chandigarh', options)
//     .then(response => response.json())
//     .then(response => {
//         console.log(response)

//         cloud_pct = response.cloud_pct
//         temp = response.temp
//         feels_like = response.feels_like
//         humidity = response.humidity
//         min_temp = response.min_temp
//         max_temp = response.max_temp
//         wind_speed = response.wind_speed
//         wind_degrees = response.wind_degrees
//         sunrise = response.sunrise
//         sunset = response.sunset
//     })
//     .catch(err => console.error(err));

// }

// const search_bar=Weather_App.querySelector("#search-bar")
// const b=Weather_App.querySelector("#enter")
// const c=Weather_App.querySelector("#icon")

// search-Bar.eventListener("submit",function(event){
//     console.log(search-bar.value)
//     event.preventDefault();
// })
