// -------------------CONSTANTS-------------------



// -------------------VARIABLES--------------------

let weatherAPI = "https://www.metaweather.com/api/location/search/?query=denver"
let sunsetAPI = "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&callback=mycallback"

// ----------------CACHED ELEMENTS------------------
const results = document.querySelectorAll('.search-results');
const den = document.getElementById('denver');
const dallas = document.getElementById('dallas');
const la = document.getElementById('los-ang');


// ----------------EVENT LISTENERS-------------------
den.addEventListener('click', () => {
    fetch("https://cors-anywhere.herokuapp.com/metaweather.com/api/location/2391279/2020/11/23/")
    .then(response => response.json())
    .then((data) => {
    console.log(data[0].weather_state_name)
})
.catch(err => console.log(err))

})
dallas.addEventListener('click', () => {
    fetch("https://cors-anywhere.herokuapp.com/metaweather.com/api/location/2388929/2020/11/23/")
    .then(response => response.json())
    .then((data) => {
    let dallasData = {}
        dallasData['']
})
.catch(err => console.log(err))

})
la.addEventListener('click', () => {
    fetch("https://cors-anywhere.herokuapp.com/metaweather.com/api/location/2442047/2020/11/23/")
    .then(response => response.json())
    .then((data) => {
    console.log(data[0].weather_state_name)
})
.catch(err => console.log(err))

})




// --------------------FUNCTIONS----------------------



// fetch(sunsetAPI)
// .then(response => response.json())
// .then((data) => {
//   console.log(data[0])
// })
// .catch(err => console.log(err))











