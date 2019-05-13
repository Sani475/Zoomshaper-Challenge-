var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');


// select launch date in ms
var launchDate = new Date('May 10, 2019 00:00:00').getTime();


// update every seconds
var interval = setInterval(function(){

    //get present date and timeout
    var today = new Date().getTime();

    // get the distance from today to launch Date
    var distance = launchDate - today;

    // time  calculation
    var sec = Math.floor(distance/1000);
    var min = Math.floor(sec/60);
    var hour = Math.floor(min/60);
    var day = Math.floor(hour/24);

    // hour = hour%60;
    min = min%60;
    sec = sec%60;

    min = (min<10)?'0'+min : min;
    sec = (sec<10)?'0'+sec : sec;

    //display the result
    hours.innerHTML = hour;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;


    // if the launch date passed
    if(distance < 0){
        // stop countdown
        clearInterval(interval);
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;
    }

},1000);
