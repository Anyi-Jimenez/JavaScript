//alert("Estoy vivoooooooo");
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











