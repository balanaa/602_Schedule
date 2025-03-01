function realtimeClock() {

    let rtClock = new Date();	    
    let hours = rtClock.getHours();
    let minutes = rtClock.getMinutes();
    let seconds = rtClock.getSeconds();
    let amPm;

    if (hours > 12){
        amPm = "PM";
        if (hours == 12){
            amPm = "AM"
        }
    } else if (hours < 12){
        amPm = "AM"
    }else{
        amPm = "NN";
    }

    if (hours > 12){
        hours = hours - 12;
    } else if (hours == 0){
       hours = 12;
    }

    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML = 
        hours + "  :  " + minutes + "  :  " + seconds + " " + amPm;
        var t = setTimeout(realtimeClock, 500);
}
