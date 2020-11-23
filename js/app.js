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
    fetch("https://cors-anywhere.herokuapp.com/metaweather.com/api/location/search/?query=denver")
    .then(response => response.json())
    console.log(response.json())
    // .then((data) => {
    // console.log(data[0])
})
.catch(err => console.log(err))

})

// dallas.addEventListener('click', () )

// la.addEventListener('click', ())




// --------------------FUNCTIONS----------------------



// fetch(sunsetAPI)
// .then(response => response.json())
// .then((data) => {
//   console.log(data[0])
// })
// .catch(err => console.log(err))











