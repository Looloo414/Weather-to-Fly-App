// -------------------CONSTANTS-------------------



// -------------------VARIABLES--------------------
let sunsetAPI = "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&callback=mycallback"

// ----------------CACHED ELEMENTS------------------
const results = document.querySelectorAll('.search-results');
const den = document.getElementById('denver');
const dallas = document.getElementById('dallas');
const la = document.getElementById('los-ang');
const container = document.querySelector('.container')
let dallasInfo = []
let denInfo = []
let laInfo = []


// ----------------EVENT LISTENERS-------------------
den.addEventListener('click', () => {
    fetch("https://cors-anywhere.herokuapp.com/metaweather.com/api/location/2391279/2020/11/23/")
        .then(response => response.json())
        .then((data) => {
            let denData = {}
            denData['visibility'] = data[0].visibility
            denData['wind_speed'] = data[0].wind_speed
            denData['wind_direction'] = data[0].wind_direction
            denData['weather_state_name'] = data[0].weather_state_name
            denInfo.push(denData)
            console.log(denInfo)
            renderDen()
        })
        .catch((err) => {
            console.log(err)
        })
})

dallas.addEventListener('click', () => {
    fetch("https://cors-anywhere.herokuapp.com/metaweather.com/api/location/2388929/2020/11/23/")
        .then(response => response.json())
        .then((data) => {
            let dallasData = {}
            dallasData['visibility'] = data[0].visibility
            dallasData['wind_speed'] = data[0].wind_speed
            dallasData['wind_direction'] = data[0].wind_direction
            dallasData['weather_state_name'] = data[0].weather_state_name
            dallasData['location'] = 'Dallas'
            dallasInfo.push(dallasData)
            render()
        })
        .catch((err) => {
            console.log(err)
        })

})

la.addEventListener('click', () => {
    fetch("https://cors-anywhere.herokuapp.com/metaweather.com/api/location/2442047/2020/11/23/")
        .then(response => response.json())
        .then((data) => {
            let laData = {}
            laData['visibility'] = data[0].visibility
            laData['wind_speed'] = data[0].wind_speed
            laData['wind_direction'] = data[0].wind_direction
            laData['weather_state_name'] = data[0].weather_state_name
            laInfo.push(laData)
            renderLA()
    })
    .catch((err) => {
        console.log(err)
    })

})

function appendDiv(visibility, wind_direction, wind_speed, weather_state_name, idx) {
    let newDiv = document.createElement("div")
    newDiv.innerHTML = `
                        <div class="card h-100">
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                            
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
   dallasInfo.splice(idx, 1)
    render()
}

function deleteQuote(idx) {
    denInfo.splice(idx, 1)
     renderDen()
 }

 function deleteQuote(idx) {
    laInfo.splice(idx, 1)
     renderLA()
 }


function render() {
    container.innerHTML = ''
    dallasInfo.forEach((x, idx) => {
        appendDiv(x['visibility'], x['wind_speed'], x['wind_direction'], x['weather_state_name'], idx)
    })
}

function renderDen() {
    container.innerHTML = ''
    denInfo.forEach((x, idx) => {
        appendDiv(x['visibility'], x['wind_speed'], x['wind_direction'], x['weather_state_name'], idx)
    })
}

function renderLA() {
    container.innerHTML = ''
    laInfo.forEach((x, idx) => {
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








