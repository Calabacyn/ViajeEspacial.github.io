const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const gif = document.getElementById('gif');
const volumeControl = document.getElementById('volume');
const inicioButton = document.getElementById('cap-button');

const gifSrc = "video/duck.gif"; 
const staticSrc = "video/unscreen-072.png"; 


playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.classList.remove('play');
        playPauseButton.classList.add('pause');
        gif.src = gifSrc;  
    } else {
        audio.pause();
        playPauseButton.classList.remove('pause');
        playPauseButton.classList.add('play');
        gif.src = staticSrc;  
    }
});

// Evento para controlar el volumen
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
    if (audio.volume > 0) {
        audio.muted = false; 
    } else {
        audio.muted = true; 
    }
});

// Evento para detectar cuando el audio termina
audio.addEventListener('ended', () => {
    playPauseButton.classList.remove('pause');
    playPauseButton.classList.add('play');
    gif.src = staticSrc;  
});

// Evento para desmutear el audio cuando se hace clic en el botón "inicio"
inicioButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.classList.remove('play');
        playPauseButton.classList.add('pause');
        gif.src = gifSrc; 
    } else {
        audio.pause();
        playPauseButton.classList.remove('pause');
        playPauseButton.classList.add('play');
        gif.src = staticSrc;  
    }
});
