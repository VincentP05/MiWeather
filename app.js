// Initialize Storage
const storage = new Storage();

//Gets stored location data on load
let weatherLocation = storage.getLocationData();
let currentCity = weatherLocation.city;
let currentCountry = weatherLocation.country;
console.log(currentCity);
console.log(currentCountry);
updateLocation();

//Update Current City
function updateCity(){
    weatherLocation = storage.getLocationData();
    currentCity = weatherLocation.city;
}

//Update Current Country
function updateCountry(){
    weatherLocation = storage.getLocationData();
    currentCountry = weatherLocation.city;
}

//Date variables
const day0 = new tempUI('weather-location','weather-description','temperature-string','weather-icon');
const day1 = new tempUI('weather-location1','weather-description1','temperature-string1','weather-icon1');
const day2 = new tempUI('weather-location2','weather-description2','temperature-string2','weather-icon2');
const day3 = new tempUI('weather-location3','weather-description3','temperature-string3','weather-icon3');
const day4 = new tempUI('weather-location4','weather-description4','temperature-string4','weather-icon4');
const day5 = new tempUI('weather-location5','weather-description5','temperature-string5','weather-icon5');
   
//Changes Location, and stores the data
document.getElementById("weather-change-btn").addEventListener("click", (event) => {
    let changedCity = document.getElementById("city").value;
    let changedCountry = document.getElementById("country").value;
    console.log(changedCity);
    console.log(changedCountry);
    //make it so that if an error, occurs do not do this 
    validateLocation(changedCity,changedCountry);  
})


function updateLocation(){ 
    convertLocation(currentCity, currentCountry).then(locationData => {
        const weather = new Weather(locationData[0], locationData[1]);
        setWeek();

        weather.getWeather()
        .then(results => {
            day0.paint(results);
            day1.paint1(results);
            day2.paint2(results);
            day3.paint3(results);
            day4.paint4(results);
            day5.paint5(results);
            console.log(results)})
            .catch(err => { console.log(err)})

    }).catch(err => {
        console.log(err)
        alert("Invalid Input");
        
    });
}
 
//Function to check if the Location is valid
// true for all good
// false for error
//There’s no way to otherwise make a Promise “return” something back to synchronous code – once you start using them, you’re stuck with them.
//so I just decided to make the promise call another function 
function validateLocation(changedCity, changedCountry){
    
        convertLocation(changedCity, changedCountry).then(() => {
            console.log("All Clear, no errors");
            loadLocation(changedCity,changedCountry);  
        })
        .catch((error) => {
            console.log(`we got a fat ${error.name} error`);
            alert("Invalid Input");
        })
}

function loadLocation(city,country){
    storage.setLocation(city,country);
    updateCity();
    updateCountry();
    updateLocation();
}