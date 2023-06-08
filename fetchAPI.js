//JavaScript sincrono

console.log("Inicia sincrono");
function dosSync (){
    console.log("Se ejecuta la función dos");
}

function unoSync(){
    console.log("Se ejecuta la funcion 1");
    dosSync();
    console.log("Se ejecuta el código 3");
}
unoSync();
console.log("Fin de sincrono")

/*
Ejemplos de tareas sincronas

-ciclos
Invocaciones a funciones
-EventListener (específicamente cuando necesito el clic)
-Condicionales y todo lo que tenga que ver con toma de desiciones
*/

//Java Script asíncrono

console.log("Inicio de asíncrono");
function dosAsync(){
    setTimeout(function(){
        console.log("Dos");
    }, 5000); //Tiempo es en milisegundos
}

function unoAsync(){
    console.log("Tres");
}

unoAsync();
console.log("Fin de Asincrono");

/*
-Function setTimeout
-Notificaciones de cierre de sesion en apps bancarias
-Spotify con su cola de reproducción
-Conexiones a servidor
-Cargas de APIs
*/

/*
Ya que entendemos que la asincronía nos sevira para conectarnos a un servidoe, y que sin importar la respuesta que este nos de (exitosa o no), o incluso el tiempo que tarde en responder, (milisegundos o segundos), es neceasrio saber que jay varios mecanismos para manejar operaciones asincronas en JS.

-Calbbacks (llamdas de vuelta): La forma más clásica de gersionar la asincronía

-Promises (promesas): forma moderna
-
-Async/Await: forma moderna con una sintáxis más ligera

*/

/* Que es un Callback (llamada de vuelta)

Un callback es una función que se pasa como argumento a otra función. ESta función se ejecutara después de que la otra lo jaga, ESte mecanismo nos ayuda a controlar qque cierto código no se ejecute antes de que el oro termine.

Para qué las necesitamos}}0
Sabemos que JS trabaja de forma descentdente, entonces habrá casos que queramos hacer que un código se ejecute después de que ocurra otra cosak y también de forma no secuencial.
 */

function hazClick(){
    console.log("Le hiciste click al botón");

    
}

const boton = document. getElementById("boton");
    boton.addEventListener("click", hazClick) 
    

    //Ejemplo de Callback

    //Defino una función que toma un número y un callback(función) como parámetros

    function dobleNumero (num, callback){
        const resultado = num*2; //Operación común y corriente
        callback(resultado)//Invocación de ese callback con el resultado como parámetro
    
    }


    //Definir una función para mostrar el resultado
    function mostrarResultado(resultado){
        console.log("El resultado es: ", resultado);
    }

    dobleNumero (5, mostrarResultado);
      
