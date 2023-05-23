//alert("Estoy vivoooooooo");

console.log("Status de la mamá de Bambi " + mamaDeBambiViva);

//Así se ponen los comentarios
/*
Este
es un 
comentario
multilínea
*/
/*
Variables

Es un elemento del cual su valor puede cambiar o variar dependiendo de la circunstacia. Esta variable ocupa un espacio en la memoria y dependiendo de su valor o del elelemntoque esté dentro de este espacio, es el tipo de var9able que tenemos.

variable = recipiente donde pondremos el valor

valor = la información con la que llenamos el recipiente

Declarar = Ponerle nombre a nuestro recipiente

Inicializar = Llenar ese recipiente

*/

recipiente = "agua";
recipiente = "café";
recipiente = "colores y lápices";
recipiente = "leche";

//Usamos esta líneade código para imprimir o mostrar la información de mi recipiente


console.log(recipiente);

//Declarar vs inicializar

//quieresSerMiNovia;
//edad;
//altura;
//peso;
//Genero;

/*
Tipos de datos (primitivos y no primitivos)

Todos son primitivos excepto object

Se llaman primitivos porque son datos que no pueden ser modificados, ya vienen con el lenguaje y se consideran el dato más simple o más básico que existe.

-String: Sirve para agregar valores en forma de texto. Para que se considere así, el valor debe de estar dentro de comillar simples ('') o dobles ("") y backticks (´´)

-Number: Sirve para agregar valores en formato numérico (para poder usarlos en operaciones aritméticas). Estos valores no usan comillas.

-Boolean: Sirven para representar valores del tipo true o false (encendido o apagado, 0 y 1, si y no)

-Undefined: Sirve para representar una variable o un tipo de dato que no tiene valor. Cuando declaramos variables sin inicializar, tendremos datos del tipo undefined.

-Null: Sirve para definir que un valor es nulo. 

-NaN (Not a Number): Sive para representar un valor que no es un número. Lo obtenemossi hacemos una operación con una variable que no es un número o con una operación que no es posible.

-Symbol


-Object (No es primitivo)

*/

apodoDeFelipe = 'El "amante número uno" de los chilaquiles verdes';

console.log(apodoDeFelipe);

//Ejemplos de valores numéricos

edadDeFelipe = 31;
constoDeUnGansito = 18.50;
cuentaDeFelipe = -156.35;


console.log(edadDeFelipe);
console.log(constoDeUnGansito);
console.log(cuentaDeFelipe);

//Ejemplos de valores booleanos

esAdministrador = true;
contraseniaCorrecta = false;
cuentaPremium = false;


//Ejemplos de datos indefinidos
/*respuestaDeMiCrush;
precioBoletoEstacionamiento;*/

//Ejemplos de variables nulo
//Cuando el valor es nullo no marca error con el console
respuestaDeMiCrush = null;

//Ejemplo con valores NaN

operacionMatematica = 0/0;

console.log(operacionMatematica);

operacionMatematica = 5/0;

console.log(operacionMatematica);

/*typeof

Es una expresión que nos ayuda a saber que tipo de dato es el que estamos evaluando 
typeof(elDatoAvaluar);
Todos los resultados que arroja son cadenas con el tipod e dato que estamos evaluando.

*/

console.log(typeof(esAdministrador)); //boolean

console.log(typeof(edadDeFelipe));//number

console.log(typeof(operacionMatematica));//number


/* Tipos de variables

En JS tenemos tres tipos principales de variables:

-var: Era la forma principal de declarar variables. Es una variable muy flexble, tiene un scope (alcance) global, esto es, que el valor de esta variable esta disponible en todo el programa.


-let: Lo usamos para limitar el alcance de nuestras variables (scope); y se limita a un bloque de código o expresión (meter a la mamá de bambi en una cajita), es una variable local.


-const: Se usan para declarar una variable con un valor constante o inmutable (que no cambia).


*/

//En este caso la mamá de BAbi esta visible desde cualquier lugar del programa

var mamaDeBambiViva = false;
var cazador = "listo para disparar"

let nomb = "Felipe Maqueda";

const pi = 3.1416

/*

Funciones

Una función es una agrupación de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parámetros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan.

Parámetros = variables que necesitamos para alimentar mi función (todas las variables se tienen que ejecutar).

Ejemplo: limón, azúcar, vasito de agua, cucharita, hielos, agua.

Nombre para la función= Con el nombre nosotros vamos a poder activar o invocar la función (básicamente, tenemos que llamarla para que funcione).

Ejemplo: PrepararAguitaDeLimon


Operaciones: Conjunto de instrucciones (en orden específico).

Ejemplo: 1) Cortar el limón, 2)Exprimir el limon, tc

Resultado: Las funciones generalmente deben tener un resultado

Ejemplo: Vasito de agua de limón



*/

//1- Creamos la función con la palabra reservada function y le ponemos un nombre. Después, abriremos y cerramos paréctesis y abrimos y cerramos y cerraremos llaves {}.

//los paréntesis son para nuestros parámetros o argumentos, y las llaves para delimitar el bloque o la funcion.

//2- Ponemos nuestros parámetros (variables) dentro de los paréntesis

//3- Poner las instrucciones dentro de las llaves

//4- Invocar la función escibiendo su nombre y abimos y cerramos paréntesis.

/*

    var limon = "limón";
    var agua = "agua";
    var hielos = "hielos";
    var azucar = "azucar";
    var vaso = "vaso";
    var cuchara = "cuchara";


    */

    
    

function PrepararAguitaDeLimon(limon, agua, hielos, azucar, vaso, cuchara) {

    var limon = "limón";
    var agua = "agua";
    var hielos = "hielos";
    var azucar = "azucar";
    var vaso = "vaso";
    var cuchara = "cuchara";

    

    console.log("cortar el limon" + limon);
    console.log("Exprimir el limon");
    console.log("Agregar el jugo de limon al vaso" + vaso);
    console.log("agregamos los hielos al vaso" + hielos);
    console.log("Agregamos el agua al vaso" + agua); 7
    console.log("Endulzamos al gusto" + azucar);
    console.log("Mezclar y disfrutar" + cuchara);

    var cuchara = "tenedor"

    console.log(cuchara);


}


PrepararAguitaDeLimon();




//Ejemplo de las 3 foras de agregar parámetros a las funciones

function suma (a,b){ //valores estan en undefined
    var a = 5; //cambio el undefined por 5
    var b = 7; //cambio el undefined por el 7

    operacion = a+b; //hago mi suma utilizando lso dos valores

    console.log(operacion); //imprimir mi operacion
}

suma(); //Invocamos la función

//Segunda forma: usando parametros dentro de parentesis, ya inicializados

function resta (a=8, b=5){
    operacion =a-b;
    console.log(operacion);
}

resta();

//Tercera forma: Inicializando valores dentro de la invocacion

function multiplicacion (a,b){
    operacion = a*b;
    console.log(operacion);
    suma();
}

multiplicacion(3,9);

multiplicacion(3); //Se imprime Nan porque nos falta un parámetro








