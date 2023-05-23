function velocidadCalculo (distancia,tiempo){
velocidad = distancia/tiempo;
console.log("La velocidad es: " +velocidad);
}


velocidadCalculo(20,10);


function formulaGeneral (a,b,c){

    x1 = (-b+Math.sqrt((Math.pow(b,2)-4*a*c),2))/(2*a);
    console.log("El valor x1 = " +x1);

    x2 = (-b-Math.sqrt((Math.pow(b,2)-4*a*c),2))/(2*a);
    console.log("El valor x2 = " +x2);

}

formulaGeneral(5,-15,-50);

//Funciones anónimas
let funcionAnonima = function(a,b){
    operacion = a/b;
    console.log(operacion)
}

funcionAnonima(10,5);

//Return

//Funcion para dar un saludo personalizado
/*
function saludo (nombre){
    console.log("Hola " + nombre + " que bueno que usas nuestra información");
}

saludo ("Felipe");

console.log(nombre);

*/

//Primero defino mi función

function saludo (){

    //Declaro e inicializo mis variables
    let nombre = "Felipe";
    let apellido = "Maqueda"

    //Uso ese nombre para personalizar mi saludo
    console.log("Hola " + nombre + " que bueno que usas nuestra información");

    //Finalizo la ejecucipon de mi función, y tomo el dato de la variable llamada nombre para poder verla (reocrdemos que esta en un contexto local) y también para poder usarla después en otras operaciones

    return nombre + " " + apellido; //limbo de las variables
}

//Para poder usar esa variable que hasta seete momento sacamos de la función, pero que no sabemos donde está (porque esta en el limbo de las funciones). Y en esta nueva variable podemos la invocación de la función


const nombreQueSaqueDeMiFuncion = saludo ();

console.log(nombreQueSaqueDeMiFuncion);

console.log("Estas son las personas que han iniciado sesión en mi aplicación " + nombreQueSaqueDeMiFuncion);

var nombreIngresadoDesdeElNavegador = prompt("Introduce tu nombre");

console.log("Gracias por entrar a mi página "+ nombreIngresadoDesdeElNavegador);

