/*
Control de flujo

Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).


Los comentarios no se cuentan como intrucciones.

Condicionales

Son estructuras o condiciones que nos permiten modificar el orden natural de ejecucuión de nuestro programa. Son setencias específicas que nos ayudará a deciir si una condición se cumple o no (verdadero o falso), a partir de esta respuesta se ejecuta una o varias instrucciones.

Ejemplo

Tengo limpia mi playera de la suerte? //pregunta o instrucción que detona la condición
   true: Entonces voy a la fiesta   //respuesta con su posible instrucción
   false: Entonces me quedo a dormir  //respuesta con su posible instrucción

*/

/*Condicional if (si)

If nos sirve para validar si una condición se cumple o no. Si se cumple, entonces se ejecuta el código que esté dentro del if,. Si no se cumple, entonces no se ejecuta ningún bloque de código.

if (condicion){
    //Ejecuto este bloque de código

}

*/

//Felipe tiene 17 años, y quiere ir a la fiesta. Dicha fiesta solo es para personas adultas (mayores de 18 años). Ayuda a Felipe a decidir si pude ir a la fiesta o no.

//Evaluamos solo una expresión (si Felipe tiene menos de 18 años), en caso de que sea verdadero, mostraremos el mensaje dentro del bloque. Si es falso, no mostrará nada porque nuestro programa no esta preparado para esa situación (incertidumbre).

let edadFelipe = 17; //Debemos tomar el cuenta primero la edad de FElipe
let edadPermitida = 18;
if(edadFelipe > edadPermitida){
    console.log("Lo siento Felipe, no puedes ir a la fiesta")
}

/*

Else ( de otro modo - si no)

Utilizamos esta instrucción o sentenccia pra especificar que un bloque de código se ejecutará si la condición es verdadera, y otro bloque de código se ejecuta en caso de que la condición sea falsa.

Estructura básica de Else

if (condición){
    //Este bloque se ejecuta si la condición es verdadera
} else {
    //este bloque se ejecuta si la condición es falsa
}

*/

let edadAxel = prompt("Ingresa tu edad ");
let edadParaEntrarALaFiesta= 18;

if(edadAxel < edadParaEntrarALaFiesta){//verdadero
    console.log("Lo siento no puedes entrar a la fiesta");

}else {
    //Se ejecuta cuando es falso (que Axel es mayor a la edad permitida)
    console.log("Felicidades, tienes la edad permitida para entrar a la fiesta18");
}

/*Test de nuestro programa (valores que también se evaluan como falsos)
-15
    -"false" (string)
    -NaN 
    -false (sin prompt boolean dispara verdadero "Losiento no puedes entrar a la fiesta")
    -true (sin prompt boolean dispara verdadero "Losiento no puedes entrar a la fiesta")

    */

    /*

    Else if (ademas si / si no entonces)

    Esta condicional nos ayuda a ejecutar una nueva condición en ccaso de que la primera sea falsa. Podemos usar todas las estructuras else if que sean enecesarias, terminando con una estructura else.

    Estructura bpasica del else if

    if (condición 1){
        //bloque que se ejecuta si la condición 1 es verdadera
    } else if (condición 2){
        //bloque de código que se ejecuta si la condición 1 es falsa y la condición 2 es verdadera

    } else if (condición 3){
        //bloque de código que se ejecuta si la condición 1 es falsa, y si la condición 2 también es falsa y si la condición 3 es verdadera.
    }else {
        //bloque de código que se ejecuta si la condición 1, 2, y 3 son falsas.
    }

    Se pueden anidar x cantidad de else if entre el if que evalúa la condición inicial y el else que termina toda la expresión

    */

    /*

    edadDeDavid = 19;
    edadPermitidaDelAntro = 18;
    dineroDeDavid = 20;
    coverDelAntro = 150;

    if (edadDeDavid > edadPermitidaDelAntro){
        console.log("Muy bien, puedes ir al antro");
    } else if (dineroDeDavid > coverDelAntro){
        console.log("Si puede entrar al antro");
    } else {
        console.log("lo siento, no tienes dinerito suficiente para paara pagar el cover");
    }

    */

    let hora =prompt("Ingrese la hora actual ");
    if (hora < 12 ) {
        console.log("Buenos días");
    } else if (hora <=19){
        console .log("Buenas tardes ya, que barbaro como pasa el timepo");
    }else {
        console.log("Buenas noches vamos a mimir")
    }