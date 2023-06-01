/*
Arreglos (arrays, matrices, colecciones de datos)


*/

//Formas de declarar un array o arreglo

//1. Usando los corchetes []

var miArray = [1, 2, 3, 4, 5, 6];

//Variable sin inicializar

var colores;

//Arreglo sin asignar a una variable

["azul", "rojo", "naranja", "verde"];

//Variable colores declarada e inicializada

var colores = ["azul", "rojo", "naranja", "verde"];

var colores2 = ["azul", "rojo", "naranja", ["verde pastel", "amarillo pastel", "rosa paste"]];

//Podemos tener distintios tipos de datos en un mismo arreglo

var datosDeFelipe = ["Felipe", 31, "Guadalajara", "Nikky", true, undefined, null]



//Cada asignatura está asociada a una variable individual

var asignatura1 ="Matemáticas";
var asignatura2 = "Literatura";
var asignatura3 = "Física";

//Array

var asignaturas = ["Matemáticas", "Literatura", "Física"];

console.log(typeof(asignaturas));

//Acceso a elementos de un arreglo

console.log("El elemento en la posición 2 de mis asignaturas es: ", asignaturas[2]);

console.log("El elemento en la posición 2 de mis asignaturas es: ", asignaturas[6]);

//Mostrar la longitud de mi arreglo

console.log(asignaturas.length)

//Ejemplos arrays

//Array carrito de compras

var carrito = ["pantalon", "camisa", "corbata"];
var publicacion = ["Felipe", 137, "29-may-2023"];


//Modificar los elementos dentro de ellos

//Reasignamos el valor a un elemento de nuestro arreglo por medio de su index

publicacion[1] = 138;

console.log(publicacion)

publicacion[4] = 150;

//No teníamos un elemento en la posición (index) 4 (indefinido = 150)

console.log(publicacion)


//Método para agregar elementos al final de un arreglo

asignaturas.push("Biología")

console.log(asignaturas);

asignaturas.push("Inglés")

console.log(asignaturas);

//Método para eliminar el último elemento de un arreglo

asignaturas.pop();

console.log(asignaturas);


//Método para agregar elementos al incio del arreglo

asignaturas.unshift("Química", "Educación física", "artes");

console.log(asignaturas);

//Metodo para eliminar elementos del principio de un arreglo

asignaturas.shift();
console.log(asignaturas);

//Método para saber si mi arreglo incluye un elemento específico

let carritoDeWalmart = ["Gansitos", "Coquita", "Galletas María", "Mazapan"];

console.log(carritoDeWalmart.includes("Coquita"));

regalo = console.log(carritoDeWalmart.includes("Coquita"));


if (regalo === true) {
    console.log("Te regalo un sartén")
}


var amigos = ["Felipe", "Mariana", "Fernanda", "Maara", "Gaby", "Mariana"];

var mejoresAmigos;

var publico;

if(!amigos){
    console.log("Mi meme de Bob esponja")
}


//Método para concatenar arreglos

var listaDeGolosinas = ["Gansitos", "Coquita", "Galletas Marias", "MAzapan"];

var listaDeFrutitasYVerduritas = ["manzanas", "mangos", "toronjas", "platanos", "fresas"];

var listaDeComprasDeLaQuincena = listaDeGolosinas.concat(listaDeFrutitasYVerduritas)

console.log(listaDeComprasDeLaQuincena);

console.log(listaDeGolosinas + listaDeFrutitasYVerduritas);

console.log(listaDeGolosinas, listaDeFrutitasYVerduritas);

//Método para buscar un elemnto en un arreglo y devolver el índice de su primera aparición. Si el elemento no lo encuentra, retorna -1

console.log(listaDeComprasDeLaQuincena.indexOf("toronjas"));

//Método para unir elementos de un arreglo en una cadena de texto
console.log(listaDeComprasDeLaQuincena.join('\n'));

//Modificación del arreglo (push, pop, shift, unshift, splice)

//Acceso y busqueda de elementos (indexof, LastIndexOf, includes)

//Transformación de elementos (sort, reverse, map, forEach) **Map aplica la función a cada uno de los elementos del arreglo

/*

let precios = [100, 54, 67, 45];

function descuento(){
    //código para aplicar descuento
}

let preciosConDescuento = []

*/


//Operaciones lógicas (every, some)

//Creación de nuevo arreglos (slice, concat, join, referse)

//Splice (agregar, eliminar o reemplazar elementos en posiciones específicas)


/*

Sintaxis del aplice

array.splice(iniciamos, numeroElementosABorrar, ElementoAInsertar);

*/

//Splice para borrar elementos

var abecedario = ["A", "B", "C", "D", "E"]; //Borrar C y D

abecedario.splice (2,2);

console.log(abecedario);

//Splice para insertar elementos

abecedario2 = abecedario

console.log(abecedario2)

abecedario2.splice(2,0,"C", "D");

console.log(abecedario2);

//Splice para reemplazar elementos del arreglo

var vocales = ["A", "E", "I", "O", "U"]; //Remplazar e, i

vocales.splice(1,2, "COMER","COMER","COMER");

console.log(vocales);























