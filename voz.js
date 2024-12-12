
const class1 = document.getElementById('voces1');
const class2 = document.getElementById('voces2');
const class3 = document.getElementById('voces3');
const class4 = document.getElementById('voces4');
const class5 = document.getElementById('voces5');
const class6 = document.getElementById('voces6');
const class7 = document.getElementById('voces7');
const class8 = document.getElementById('voces8');

const voz1 = document.getElementById('voz1');
const voz2 = document.getElementById('voz2');
const voz3 = document.getElementById('voz3');
const voz4 = document.getElementById('voz4');
const voz5 = document.getElementById('voz5');
const voz6 = document.getElementById('voz6');
const voz7 = document.getElementById('voz7');
const voz8 = document.getElementById('voz8');

let audioreproduciendo =null;

function deteneraudio(){
    voz1.pause();
    voz2.pause();
    voz3.pause();
    voz4.pause();
    voz5.pause();
    voz6.pause();
    voz7.pause();
    voz8.pause();
}

function togglePlayPause(audioElement) {
    if (audioreproduciendo===audioElement) {
        if (!audioElement.paused) {
            audioElement.pause();
        } else {
            audioElement.play();
        }
    } else {
        deteneraudio();
        audioElement.currentTime=0;
        audioElement.play();
        audioreproduciendo=audioElement;
        
    }
}

class1.addEventListener('click', function() {
    togglePlayPause(voz1);
});
class2.addEventListener('click', function() {
    togglePlayPause(voz2);
});
class3.addEventListener('click', function() {
    togglePlayPause(voz3);
});
class4.addEventListener('click', function() {
    togglePlayPause(voz4);
});
class5.addEventListener('click', function() {
    togglePlayPause(voz5);
});
class6.addEventListener('click', function() {
    togglePlayPause(voz6);
});
class7.addEventListener('click', function() {
    togglePlayPause(voz7);
});
class8.addEventListener('click', function() {
    togglePlayPause(voz8);
});
