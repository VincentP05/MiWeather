//Converts City, Country to Longitude and Latitude values

async function convertLocation(city, country) {

     const geocode = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}+${country}&key=APIKEYGOESHERE`);

     const geocodeData = await geocode.json();


     // console.log(geocodeData);
     //let test = geocodeData.results[0].geometry.location;
     let latitude = geocodeData.results[0].geometry.location.lat;
     let longitude = geocodeData.results[0].geometry.location.lng;
     let coords = [latitude, longitude]
     //console.log(test);
     //console.log(latitude);
     // console.log(longitude);

     console.log(coords);
     return coords;
}



function getLocation() {
     let locationData = storage.getLocationData()
     let tempCity = locationData.city;
     let tempCountry = locationData.country;


     let cityName = tempCity.charAt(0).toUpperCase() + tempCity.slice(1);
     let countryName = tempCountry.charAt(0).toUpperCase() + tempCountry.slice(1);

     return '' + cityName + ', ' + countryName;

}