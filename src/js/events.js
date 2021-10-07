const path = window.require('path');
const fs = window.require('fs');
var files = fs.readdirSync(path.join(__dirname, 'assets', 'music_list'));
var audio = new Audio();
audio.volume = 0.6;


function playMusic(isToggle){
    let label = document.getElementById('musicTitle_id');
    label.style.color = "lightgray";
    label.style.fontSize = "9px";
    if (isToggle){
        var random_file = files[Math.floor(Math.random() * files.length)];
        if (!random_file.includes(".")){
            playMusic(true);
            return;
        }
        const file = path.join(__dirname, 'assets', 'music_list', random_file);
        audio = new Audio(file);
        audio.addEventListener('ended', function() {playMusic(true);});
        label.innerHTML = random_file;
        audio.play();        
    }
    else{
        label.innerHTML = '';
        audio.pause();
    }
}