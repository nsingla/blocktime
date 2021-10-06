var justPlayed = false;

function getTime() {
    let hour = document.getElementById('hour_id');
    let minute = document.getElementById('minute_id');
    let pmLabel = document.getElementById('pmlbl_id')
    let dateLabel = document.getElementById('date_id')

    let date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes(); 
    var pmText = 'AM';
    if (hours > 12){
        pmText = 'PM';
        hours = hours - 12
    }
    hours = ("00" + hours).slice(-2);
    minutes = ("00" + minutes).slice(-2);

    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    pmLabel.innerHTML = pmText;
    dateLabel.innerHTML = date.toDateString();

    if (minutes == 0 && justPlayed == false && hours >= 8){
        var audio = new Audio('assets/chime.wav');
        audio.volume = 0.25;
        audio.play();
        justPlayed = true;
    }
    if (minutes != 0){
        justPlayed = false;
    }
    setTimeout(getTime, 1000)
}

getTime();