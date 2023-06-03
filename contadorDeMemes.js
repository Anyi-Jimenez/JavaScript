//Traer o referenciar todos los lementos del HTML y los vamos a guardar en variablse para poder utilizarlas después

//Métodos de selección

let numeroContador = document.getElementById("numeroContador");
let botonIncremento = document.getElementById("botonIncrementar");
let botonDecremento = document.getElementById("botonDecrementar");
let botonResetear = document.querySelector("#botonResetear");
let memeRandom = document.querySelector("#memeRandom");



//Declarar una variable con un estado inicial

var valorContador = 0;

//Logica de negocio (funciones)

function incrementar(){
    valorContador++
    numeroContador.innerHTML = valorContador;

    if((valorContador % 10)==0){
        mostrarImagen();
    }else{
        memeRandom.style.display = "none";
    }
}



function decrementar(){
    valorContador--;
    numeroContador.innerHTML = valorContador;
    if((valorContador % 10)==0){
        mostrarImagen();
    }else{
        memeRandom.style.display = "none";
    }
    
}




function resetear(){
    valorContador = 0;
    numeroContador.innerHTML = valorContador;

}


//Función para mostrar la imagen
function mostrarImagen(){
    var coleccionImagenes = ["meme1.png", "meme2.png", "meme3.png", "meme4.png",];

    //Generar un índice aleatorio

    let indexRandom = Math.floor(Math.random()*coleccionImagenes.length);

    //Obtener la URL o dirección de la imagen

    let urlAleatoria = coleccionImagenes[indexRandom];
    
    //Agrego la URL al atributo src que deje vacio en e HTML
    memeRandom.src = "./imagenes/" + urlAleatoria;

    //Cambio la propiedad de visualización (display) a un block
    memeRandom.style.display = "block";
}


//Eventos en los botones

botonIncremento.addEventListener("click", incrementar);

botonDecremento.addEventListener("click", decrementar);

botonResetear.addEventListener("click", resetear);






