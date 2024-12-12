function mostrarCapitulo(capitulo, boton) {
    document.getElementById('capitulo' + capitulo).style.display = 'block';
    boton.style.display = 'none';

    
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
    "Nuestro héroe, un valiente astronauta guerrero conocido como Orion, fue seleccionado para una misión crucial: recuperar las gemas antes de que cayeran en manos de fuerzas oscuras. Orion, equipado con su armadura espacial y su nave, despegó hacia la Luna, sabiendo que no sería una misión fácil."
];

let indice = 0;

function cambiarTexto(direccion) {
    indice += direccion;

    // Cambiar el texto
    document.getElementById("narrative").innerText = textos[indice];

    // Cambiar visibilidad de los botones de navegación
    document.getElementById("btn-atras").style.display = indice === 0 ? "none" : "inline-block";
    document.getElementById("btn-siguiente").style.display = indice === textos.length - 1 ? "none" : "inline-block";

    // Cambiar visibilidad de los botones de voces
    document.getElementById("voces1").style.display = indice === 0 ? "inline-block" : "none";
    document.getElementById("voces2").style.display = indice === 1 ? "inline-block" : "none";
}