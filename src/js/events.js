const path = window.require('path');
const fs = window.require('fs');
var files = fs.readdirSync(path.join(__dirname, 'assets', 'music_list'));
var audio = new Audio();
audio.volume = 0.8;


function playMusic(isToggle){
    if (isToggle.checked){
        if (audio.src.length == 0){
            var random_file = files[Math.floor(Math.random() * files.length)];
            const file = path.join(__dirname, 'assets', 'music_list', random_file);
            audio = new Audio(file);
        }
        audio.play();
    }
    else{
        audio.pause();
    }
}