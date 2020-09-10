const week = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Each day in the array, corresponds to a number 0 to 6, in that order

function setWeek(){
    let today = new Date();
    let todayNum = today.getDay();
    let i;
    for(i=0; i<(week.length + 1); i++){
    i = weekCheck(i);
    if (i===todayNum){
       document.getElementById("date-today").innerHTML = week[i];
       i++; 
       i = weekCheck(i);
       document.getElementById("date-day1").innerHTML = week[i];
       i++;
       i = weekCheck(i);
       document.getElementById("date-day2").innerHTML = week[i];
       i++;
       i = weekCheck(i);
       document.getElementById("date-day3").innerHTML= week[i];
       i++;
       i = weekCheck(i);
       document.getElementById("date-day4").innerHTML= week[i];
       i++
       i = weekCheck(i);
       document.getElementById("date-day5").innerHTML= week[i];
       break;
    }
      
    }
}

function weekCheck(date){
    if(date === 7){
        return 0;
    } else {
        return date; 
    }
}

