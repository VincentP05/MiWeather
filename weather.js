class Weather {
    constructor(latitude, longitude) {
        this.apiKey = 'APIKEYGOESHERE';
        this.latitude = latitude;
        this.longitude = longitude;
    }

    //Fetch Weather from API 
    async getWeather() {
        //fetch returns a promise, which then needs to be formatted 
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&units=metric&exclude=minutely&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;

    }

}