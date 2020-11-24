// -------------------CONSTANTS-------------------



// -------------------VARIABLES--------------------

let weatherAPI = "https://www.metaweather.com/api/location/search/?query=denver"
let sunsetAPI = "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&callback=mycallback"

// ----------------CACHED ELEMENTS------------------
const results = document.querySelectorAll('.search-results');
const den = document.getElementById('denver');
const dallas = document.getElementById('dallas');
const la = document.getElementById('los-ang');
const container = document.querySelector('.container')
let dallasInfo = [] 


// ----------------EVENT LISTENERS-------------------
den.addEventListener('click', () => {
    fetch("https://cors-anywhere.herokuapp.com/metaweather.com/api/location/2391279/2020/11/23/")
    .then(response => response.json())
    .then((data) => {
        let totalData = {}
    container.innerHTML = data[0].weather_state_name
    container.innerHTML = data[0].visibility
    container.innerHTML = data[0].wind_speed
    container.innerHTML = data[0].wind_direction
    })

    .catch((err) => {console.log(err)})

})
dallas.addEventListener('click', () => {
    fetch("https://cors-anywhere.herokuapp.com/metaweather.com/api/location/2388929/2020/11/23/")
    .then(response => response.json())
    .then((data) => {
    let dallasData = {}
        dallasData['location'] = 'Dallas'
        dallasData['visibility'] = data[0].visibility
        dallasData['wind_speed'] = data[0].wind_speed
        dallasData['wind_direction'] = data[0].wind_direction
        dallasData['weather_state_name'] = data[0].weather_state_name
        dallasInfo.push(dallasData)
        // container.innerHTML = dallasInfo
        render()
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

function appendDiv(visibility, wind_direction, wind_speed, weather_state_name, location, idx) {
    let newDiv = document.createElement("div")
    newDiv.innerHTML = `
                        <div class="card h-100" >
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>Location: ${location}</p>
                                    <p>Visibility:${visibility}</p>
                                    <p>Cloud Coverage: ${weather_state_name}</p>
                                    <p>Wind direction: ${wind_direction}</p>
                                    <p>Wind Speed: ${wind_speed}</p>

                                </blockquote>
                            </div>
                            <button id="delButton" class="btn" onClick={deleteQuote(${idx})}>X</button>
                        </div>    
                        `
    container.appendChild(newDiv)
}

function deleteQuote(idx) {
    quotes.splice(idx, 1)
    render()
  }

function render() {
    container.innerHTML = ''
    dallasInfo.forEach((x, idx) => {
        appendDiv(x['visibility'], x['wind_speed'], x['wind_direction'], x['weather_state_name'], idx)
    })
}

// --------------------FUNCTIONS----------------------



// fetch(sunsetAPI)
// .then(response => response.json())
// .then((data) => {
//   console.log(data[0])
// })
// .catch(err => console.log(err))








