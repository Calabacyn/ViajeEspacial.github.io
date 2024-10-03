const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const gif = document.getElementById('gif');
const volumeControl = document.getElementById('volume');

const gifSrc = "video/duck.gif"; // Ruta del GIF
const staticSrc = "video/unscreen-072.png"; // Ruta de la imagen estática

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.classList.remove('play');
        playPauseButton.classList.add('pause');
        gif.src = gifSrc;  // Mostrar el GIF
    } else {
        audio.pause();
        playPauseButton.classList.remove('pause');
        playPauseButton.classList.add('play');
        gif.src = staticSrc;  // Pausar el GIF mostrando la imagen estática
    }
});

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
    if (audio.volume > 0) {
        audio.muted = false; // Desmutear si el volumen se ajusta
    } else {
        audio.muted = true; // Mutear si el volumen es cero
    }
});

audio.addEventListener('ended', () => {
    playPauseButton.classList.remove('pause');
    playPauseButton.classList.add('play');
    gif.src = staticSrc;  // Pausar el GIF al finalizar la música
});


