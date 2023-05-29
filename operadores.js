/*
Operadores

Los operadores nos permiten  realizar una operación en uno o varios operandos (variables o datos).

-Operadores de asignación
-Operadores de cadena
-Operadores lógicos
-Operadores de comparación
-Operadores aritméticos


Operadores de asignación (=)

Los operadores de asignación (=) se utilizan para asignarles valor a una variable. Asigna un valor al operando de la izquierda basado en el valor del operador de la derecha.



*/

//Operadores de asignación

let edadFelipe = 31;
var recipiente = "cafe";

/*
operadores de comparación (>, <, >=, <=, ==, ===, !=, !==)

Los operadores de conparación nos ayudan a coparar dos expresiones o valores ynos devuelven un valor boolean que representa la relación de sus valores.


*/

let numero1 = 13;
let numero2 = 25;
let numero3 = "25";


//operador menor que
console.log("El valor 13 es menor que el 25 " + (numero1 < numero2));

//Operador mayor que

console.log("El valor 13 es menor que el 25 " + (numero1 > numero2));

//Operador mayor o igual que

console.log("El valor 25 es menor o igual que el valor 25 " + (numero2 >= numero3));

//Operador de igualdad, verifica que sea lo mismo sin importar el tipo de dato 25 == "25" es true

console.log("El valor 25 es igual que el valor 25? " + (numero2 == numero3));

//Operador de igualdad estricta (evalua el valor y evalua el tipo de dato)

console.log("El valor 25 es igual que el valor 25? " + (numero2 === numero3));

console.log("El valor 25 es igual que el valor 25? " + ("veinticinco" == numero3));

console.log("El valor 25 es igual que el valor 25? " + ("veinticinco" == numero2));

//Operador de desigualdad (¡=)

console.log("El valor 13 no es igual al valor 25? " + (numero1 != numero2));

console.log("El valor 25 no es igual al valor 25? " + (numero2 != numero3));

//Operador de desigualdad estricta (!==)

console.log("El valor 25 no es igual al valor 25 " + (numero2 !== numero3));

/*

Operadores logicos (&& (and), || (or), !(not))

Los operadores lógicos nos devuelve un resultado a partir de que se cumpla (o no) una condición. El resultado será un valor boolean y sus operadores son lógicos o asimilables entre ellos (Los podemos combinar, y los podemos poner en un orden específico).

AND (&&)

Sirve para determinar si dos expresiones son verdaderas:

-Si ambas expresiones son verdaderas, el resultado es verdadero.
-Si una de las dos expresiones es falsa, todo el resultado es falso.

OR (||)

Sirve para determinar si dos expresiones son falsas.

-Si cualquiera de esas expresiones es verdadera, todo es verdadero.
-Si las dos afirmaciones son falsas, todo es falso.

NOT (!)




*/

//Ejemplo con AND (&&)

var num1 = 12;
var num2 = 24;

afirmacion1= (num1 > num2); //false
afirmacion2 = (num1 =! num2); //verdadero

console.log(afirmacion1 && afirmacion2); //imprime true si ambas afirmaciones son verdaderas y false si al menos una de las dos es false

//Ejemplo con OR (||)

afirmacion3 = (num1 < num2); //verdadero
afirmacion4 = (num1 != num2); //verdadero

console.log(afirmacion3 || afirmacion4); //true porque al menos una afirmacion es verdadera

//Ejemplo con NOT (!)

console.log(!afirmacion3);
console.log(!afirmacion4);


//Ejercicio de combinacion de operaciones

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op1 = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);

console.log(op1);



op2 = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);

console.log(op2);

/*

Operadores aritméticos (+, -, *, /, %, **, ++, --)

+ (suma): suma dos o mas valores numéricos
- (resta): resta dos o más valores numéricos
* (muliplicación): multiplica dos o más valores numéricos
/ (división): divide dos o más valores numéricos
% (modulo o residuo): retorna el residuo de una división
** (exponenciación): retorna el resultado de una potencia. Se escribe la base antes de los astériscos, y el exponente después de los asteriscos
++ (incremento) :  incrementa un valor de uno en uno
-- (decremento) : decrementa un valor de uno en uno


*/

let valor1 = 55;
let valor2 = 17;

console.log("Suma= " , valor1 + valor2);
console.log("Resta= " , valor1 - valor2);
console.log("Multiplicación= " , valor1* valor2);
console.log("División= " , valor1 / valor2);
console.log("Modulo= " , valor1 % valor2);
console.log("Exponente= " , valor1**valor2);
console.log("Incremento= " , ++valor1);
console.log("Decremento= " , --valor2);

//nada mas se esta concatenando

console.log("Suma= " + valor1 + valor2);

//aquí ya se suma pero el resultado es como cadena, por eso se debe de tener cuidado con el +
console.log("Suma= " + (valor1 + valor2));

//Aquí con la "," ya lo marca como número y ya no son necesarios los paréntesis, pero se recomeinda

console.log("Suma= " , (valor1 + valor2));

console.log("Suma= " , valor1 + valor2);

//el signo + concatena o suma dependiendo el contexto

//usando la coma se muestra el tipo de dato que es en realidad, con el + se muestra como texto



console.log("Suma= " , valor1 + valor2);


