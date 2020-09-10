class tempUI{
    constructor(loc,des,temp,ic){
        this.location = document.getElementById(loc);
        this.weatherDes = document.getElementById(des);
        this.temperature = document.getElementById(temp); 
        this.icon = document.getElementById(ic);
        //this.currentDate = document.getElementById(currDate); 
    }

    paint(weather){
        this.location.textContent = getLocation();
        let x = weather.current.weather[0].description;
        let weatherDescription = x.charAt(0).toUpperCase() + x.slice(1);
        this.weatherDes.textContent = weatherDescription;
        let w = weather.current.temp.toFixed();
        this.temperature.textContent = w + "°C";
        let iconCode = weather.current.weather[0].icon;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconCode}@2x.png`)

    }

    paint1(weather){
        let x = weather.daily[1].weather[0].description;
        let weatherDescription = x.charAt(0).toUpperCase() + x.slice(1);
        this.weatherDes.textContent = weatherDescription;
        let w = weather.daily[1].temp.day.toFixed();
        this.temperature.textContent = w + "°C";
        let iconCode = weather.daily[1].weather[0].icon;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconCode}@2x.png`)

    }

    paint2(weather){
        let x = weather.daily[2].weather[0].description;
        let weatherDescription = x.charAt(0).toUpperCase() + x.slice(1);
        this.weatherDes.textContent = weatherDescription;
        let w = weather.daily[2].temp.day.toFixed();
        this.temperature.textContent = w + "°C";
        let iconCode = weather.daily[2].weather[0].icon;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconCode}@2x.png`)

    }

    paint3(weather){
        let x = weather.daily[3].weather[0].description;
        let weatherDescription = x.charAt(0).toUpperCase() + x.slice(1);
        this.weatherDes.textContent = weatherDescription;
        let w = weather.daily[3].temp.day.toFixed();
        this.temperature.textContent = w + "°C";
        let iconCode = weather.daily[3].weather[0].icon;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconCode}@2x.png`)

    }

    paint4(weather){
        let x = weather.daily[4].weather[0].description;
        let weatherDescription = x.charAt(0).toUpperCase() + x.slice(1);
        this.weatherDes.textContent = weatherDescription;
        let w = weather.daily[4].temp.day.toFixed();
        this.temperature.textContent = w + "°C";
        let iconCode = weather.daily[4].weather[0].icon;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconCode}@2x.png`)

    }

    paint5(weather){
        let x = weather.daily[5].weather[0].description;
        let weatherDescription = x.charAt(0).toUpperCase() + x.slice(1);
        this.weatherDes.textContent = weatherDescription;
        let w = weather.daily[5].temp.day.toFixed();
        this.temperature.textContent = w + "°C";
        let iconCode = weather.daily[5].weather[0].icon;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconCode}@2x.png`)

    }

}

//send in the ids as parameters for the constructor 

//maybe use a switch statement for weatherdes and etc based off the currentDate of Today
//there will be an array of 6 elements today,day1,day2,day3.....,./