function mostrarCapitulo(capitulo, boton) {
    document.getElementById('capitulo' + capitulo).style.display = 'block';
    boton.style.display = 'none';

    // Reproducir el audio al iniciar el capítulo
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause');
    const gif = document.getElementById('gif');
    const gifSrc = "video/duck.gif"; // Ruta del GIF

    
    audio.play(); // Reproducir el audio
    playPauseButton.classList.remove('play');
    playPauseButton.classList.add('pause');
    gif.src = gifSrc;  // Mostrar el GIF cuando se reproduce la música
}

function reiniciarHistoria() {
    document.getElementById('inicio').style.display = 'block';
    for (let i = 1; i <= 3; i++) {
        document.getElementById('capitulo' + i).style.display = 'none';
    }
    // Restaurar botones
    let botones = document.querySelectorAll("#cap-button");
    botones.forEach(boton => boton.style.display = 'inline-block');
}

/* Button siguente-atras */

const textos = [
    "En un futuro distante, la galaxia se encontraba en un estado de desequilibrio. Cuatro gemas legendarias, Alnasis, Perseverancia, Creatividad y Cooperatividad, habían sido escondidas en la Luna para mantener su poder a salvo. Estas gemas podían otorgar un poder inimaginable a quien las poseyera, pero también podían destruir el universo si caían en las manos equivocadas.",
    "Nuestro héroe, un valiente astronauta guerrero conocido como Orion, fue seleccionado para una misión crucial: recuperar las gemas antes de que cayeran en manos de fuerzas oscuras. Orion, equipado con su armadura espacial y su nave, despegó hacia la Luna, sabiendo que no sería una misión fácil.",
    
];

const audios = [
    "voz/voz1.mp3",  // Audio para el primer texto
    "voz/voz2.mp3",  // Audio para el segundo texto
];

let indice = 0;

function cambiarTexto(direccion) {
    indice += direccion;
    document.getElementById("narrative").innerText = textos[indice];
    document.getElementById("btn-atras").style.display = indice === 0 ? "none" : "inline-block";
    document.getElementById("btn-siguiente").style.display = indice === textos.length - 1 ? "none" : "inline-block";
}

// Cambiar el audio
function reproducirVoz(){
    const audio = new Audio(audios[indice]);
    audio.play();
}


