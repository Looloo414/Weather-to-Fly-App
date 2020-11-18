let weatherAPI = "https://www.metaweather.com/api/"
let sunsetAPI = "https://sunrise-sunset.org/api"



fetch(sunsetAPI)                     //fetch sunset API
.then(response => response.json())   //take the response and convert into json
.then(json => {                      //once it is a json
    createP(json.info);              //create the paragraph with info
    return fetch(weatherAPI + json.info);   //the fetch from the weather API
})
// .then(response => response.json())
// .then(json => {
//     createP(json.info);
//     return fetch(weatherAPI);
// })
.catch(err => console.log(err));


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
