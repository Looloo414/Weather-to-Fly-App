// ----------------CACHED ELEMENTS------------------
const results = document.querySelectorAll('.search-results');
const den = document.getElementById('denver');
const dallas = document.getElementById('dallas');
const la = document.getElementById('los-ang');
const container = document.querySelector('.container')
const footer = document.querySelector('.sunsetSunrise')


// -------------Fetch Function------------------------
async function fetchDataMutipleAPI(firstAPI = null, secondAPI = null) {
    let newDiv = document.createElement("div")
    newDiv.innerHTML = `
                        <h3 class="card h-100">
                        Pending Please Wait Until We Fetch The Data From The API...
                        </h3>    
                        `
    container.appendChild(newDiv)

    const [firstResponse, secondResponse] = await Promise.all(
        [
            fetch(firstAPI),
            fetch(secondAPI)
        ]
    );

    const first_API = await firstResponse.json();
    const second_API = await secondResponse.json();

    return {
        first_API,
        second_API
    };
}

function APIURLs(target) {
    if (target === 'Denver')
        return [
            'https://cors-anywhere.herokuapp.com/metaweather.com/api/location/2391279/2020/11/23/', // Forcast API
            'https://api.sunrise-sunset.org/json?lat=39.740009&lng=-104.992264'                     // Sunset/Sunrise API
        ]
    if (target === 'Dallas')
        return [
            'https://cors-anywhere.herokuapp.com/metaweather.com/api/location/2388929/2020/11/23/', // Forcast API
            'https://api.sunrise-sunset.org/json?lat=32.778149&lng=-96.795403'                      // Sunset/Sunrise API
        ]
    if (target === 'LosAngeles')
        return [
            'https://cors-anywhere.herokuapp.com/metaweather.com/api/location/2442047/2020/11/23/', // Forcast API
            'https://api.sunrise-sunset.org/json?lat=34.053490&lng=-118.245323'                     // Sunset/Sunrise API
        ]
}

// ----------------EVENT LISTENERS-------------------

[den, dallas, la].forEach(item => {
    item.addEventListener('click', (e) => {
        let targetLocation = e.target.getAttribute('data-location');
        const [first_API_URL, second_API_URL] = APIURLs(targetLocation);
        fetchDataMutipleAPI(first_API_URL, second_API_URL)
            .then(({ first_API, second_API }) => {
// -----------Handle First data Forcast Info-------
                let firstData = {}
                firstData['visibility'] = first_API[0].visibility
                firstData['wind_speed'] = first_API[0].wind_speed
                firstData['wind_direction'] = first_API[0].wind_direction
                firstData['weather_state_name'] = first_API[0].weather_state_name
                renderForcastInfo(firstData)

//-------------- Handle Second API Sun Info----------
                let secondData = {}
                secondData['sunrise'] = second_API.results.sunrise
                secondData['sunset'] = second_API.results.sunset
                renderSunInfo(secondData)
            });
    })
})

// --------------------FUNCTIONS----------------------

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
                            
                                    <p>Sunrise in UTC:${sunrise}</p>
                                    <p>Sunset in UTC: ${sunset}</p>
                                </blockquote>
                            </div>   
                        `
    footer.appendChild(newDiv)
}


function deleteQuote(idx) {
    renderForcastInfo({})
    renderSunInfo({})
}

function deleteQuote(idx) {
    renderForcastInfo({})
    renderSunInfo({})
}

function deleteQuote(idx) {
    renderForcastInfo({})
    renderSunInfo({})
}

function renderForcastInfo(forcastInfo) {
    container.innerHTML = ''
    appendDiv(
        forcastInfo['visibility'],
        forcastInfo['wind_speed'],
        forcastInfo['wind_direction'],
        forcastInfo['weather_state_name'],
        0
    )
}
function renderSunInfo(sunInfo) {
    footer.innerHTML = ''
    appendFooter(sunInfo['sunrise'], sunInfo['sunset'], 0)
}








