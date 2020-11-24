// -------------------CONSTANTS-------------------



// -------------------VARIABLES--------------------
let sunsetAPI = "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&callback=mycallback"

// ----------------CACHED ELEMENTS------------------
const results = document.querySelectorAll('.search-results');
const den = document.getElementById('denver');
const dallas = document.getElementById('dallas');
const la = document.getElementById('los-ang');
const container = document.querySelector('.container')
const footer = document.querySelector('.sunsetSunrise')
const denSunBtn = document.querySelector('den-sunrise')
const dalSunBtn = document.querySelector('dal-sunrise')
const laSunBtn = document.querySelector('la-sunrise')
let dallasInfo = []
let denInfo = []
let laInfo = []
let sunInfoDen = []
let sunInfoDal = []
let sunInfoLA = []


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

denSunBtn.addEventListener('click', () => {
    fetch("https://api.sunrise-sunset.org/json?lat=39.740009&lng=-104.992264")
    .then(response => response.json())
    .then((data) => {
        let denSun = {}
        denSun['sunrise'] = response.results.sunrise
        denSun['sunset'] = response.results.sunset
        sunInfoDen.push(denSun)
        console.log(sunInfoDen)
    })
    renderDenSun()
    })
    .catch((err) => {
    console.log(err)
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
    container.innerHTML = ''
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

function appendFooter(sunrise, sunset, idx) {
    footer.innerHTML = ''
    let newDiv = document.createElement("div")
    newDiv.innerHTML = `
                        <div class="card h-100">
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                            
                                    <p>Sunrise:${sunrise}</p>
                                    <p>Sunset: ${sunset}</p>
                                </blockquote>
                            </div>   
                        `
    footer.appendChild(newDiv)
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

function renderDenSun() {
    footer.innerHTML = ''
    sunInfoDen.forEach((y, idx) => {
        appendFooter(x['sunrise'], x['sunset'], idx)
    })
}

// --------------------FUNCTIONS----------------------









