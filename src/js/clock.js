var justPlayed = false;


function playChime(){
    const path = window.require('path');
    const file = path.join(__dirname, 'assets', 'chime.wav');
    var audio = new Audio(file);
    audio.volume = 0.4;
    audio.play();
}


function chime(hours, minutes){
    var chimeAt = 0;
    if (minutes == chimeAt && justPlayed == false && hours >= 8){
        playChime()
        justPlayed = true;
    }
    if (minutes != chimeAt){
        justPlayed = false;
    }
}


function getTime() {
    let hour = document.getElementById('hour_id');
    let minute = document.getElementById('minute_id');
    let pmLabel = document.getElementById('pmlbl_id');
    let dateLabel = document.getElementById('date_id');

    let date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes(); 
    var pmText = 'AM';
    if (hours > 12){
        pmText = 'PM';
        hours = hours - 12;
    }
    hoursText = ("00" + hours).slice(-2);
    minutesText = ("00" + minutes).slice(-2);

    hour.innerHTML = hoursText;
    minute.innerHTML = minutesText;
    pmLabel.innerHTML = pmText;
    dateLabel.innerHTML = date.toDateString();

    chime(date.getHours(), minutes);
    
    setTimeout(getTime, 1000);
}

getTime();