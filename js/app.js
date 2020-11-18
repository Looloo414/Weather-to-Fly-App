// -------------------CONSTANTS-------------------



// -------------------VARIABLES--------------------

let weatherAPI = "https://www.metaweather.com/api/location/search/?query=denver"
let sunsetAPI = "https://sunrise-sunset.org/api"

// ----------------CACHED ELEMENTS------------------
const userInput = document.querySelectorAll('.input');
const userSubmit = document.querySelector('.search-button');
const results = document.querySelectorAll('.search-results');


// ----------------EVENT LISTENERS-------------------



// --------------------FUNCTIONS----------------------

// fetch(weatherAPI,{
//     mode: "no-cors"
// })                   
// .then(response) => {
//     console.log(response)
//     return response.json()   
// }
// .catch(err => console.log(err));



fetch("https://www.metaweather.com/api/location/2391279", {mode: 'no-cors'})
  .then(response => response.json())
  .then(result => {
    const today = result.consolidated_weather[0]
    console.log(`temperature in ${result.title} stay between ${today.min_temp} and ${today.max_temp}`)
    })
  .then(data => console.log(data));












// fetch(weatherAPI).then(function (data) {
//     console.log(data);
// }).catch(function (err) {
//     console.log(err);
// });

// let promise2 = fetch(sunsetAPI);
// console.log(promise2)


// const weather_api_url = 'https://www.metaweather.com/api/'
//         async function getWeatherApi() {
//             const response = await fetch(weather_api_url);
//             const data = await response.json();
//             console.log(data);
//         }
//         getWeatherApi();
