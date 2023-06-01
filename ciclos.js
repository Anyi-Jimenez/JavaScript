

/*

Bucles e iteracion

En JS un bucle es una estructura de control que permite repetir un bloque de instrucciones, o lo que es lo mismo, repetir una tarea tantas veces queramos. Gracias a esto vamos a poder automatizar tareas repetitivas.


*/

/*

- While (mientras)
- Do While (hacer mientras)
- For (para)



While (mientras)

Este bucle nos sirve para realizar una tarea repetitiva mientras una condición sea VERDADERA. A diferencia del if, que pregunta una vez y después ejecuta el bloque del código, el while pregunta continuamente la condición y ejecuta el bloque de código hasta que la condición devuelva FALSE.


*/

/*

Estructura básica de un while

while (tenerSuenio &&tenerUnaCamita){
    //hacer la dormición
}

Ejemplo de un ciclo o bucle infinito

while(true){
    amarAMiCrush();
    noAmarANadieMas();
}


*/

/*

let = rolDeUsuario = "premium"; //Esto ya es definido

while(!"premium"){//La evaluación es sobre el rol
    function registrarUsuario(){
        console.log("Usuario Registrado");
    }
}

dejaloComprar();


Casos de uso del ciclo while

-Para verificar si un usuario está registrado o no
-Verificamos la disponibilidad de un producto (stock)
-Realizar acciones sobre nuestro carrito de compras (revisar productos, aplicar descuentos, impuestos, actualizar información, etc.)
-Recorrer publicaciones de un usuario
-Contadores de likes
*/

/*

let Felipe = "listaDeAmigos";
let Fernanda = "bloqueada";

while ("listaDeAmigos"){
    console.log("Mostrar publicacion")
}

*/

//Código de verduritas con pollito

//Declaro e inicializó un array con mis ingredientes

var ingredientes = ["zanahorias", "cebollas", "apio", "papa", "espinaca", "pollito"]; //6 elementos

//Declaramos una variable llamada ingredientesAgregadosALaOlla inicializada en 0, para usarla como un contador

var ingredientesAgregadosALaOlla =0;

//mientras los ingredinetes agregados a la olla sean menor que los ingredientes que me quedan disponibles...

while (ingredientesAgregadosALaOlla < ingredientes.length){

    //..Ire agregando elementos a la olla//
    console.log("Agregando " + ingredientes[ingredientesAgregadosALaOlla] + " a la olla");

//..y voy aumentado el contador para saber cuando parar
    ingredientesAgregadosALaOlla ++;

}

console.log("La sopita ya esta lista, yumi \n********************************");


/*

Do - while (hacer mientras)

Es similar al whike, con la diferencia de que la condición se evalua después de cada iteración. ESto garantiza que el bloque de código se ejecute al menos una vez, incluso si la condición inicial es falsa.

do {
    //bloque de codigo que vamos a ejecutar
} while (condicion);

*/

//variable tiempo de cocción que servirá como contador
var tiempoTranscurridoDeCocción = 0;

//usamos el ciclo do-while

do{
    console.log("Horneando las galletas..");
    tiempoTranscurridoDeCocción +=5;

    //Todo el bloque de código se va a evaluar mientras el timepo de cocción sea menor a 30 minutos. Esto es porque las galletas se pueden cocinar en 5, 10, 15, 20 o 25 minutos, teniendo un máximo de 30 minutos. Si pasamos de ese tiempo, puede que las galletas se quemen.

//Esto es como si revisaramos el horno cada 5 minutos

}while (tiempoTranscurridoDeCocción <30);

/* For (para)

Se utiliza cuando se conoce el número exacto de iteraciones que se realizrán. Consiste en tres partes: inicialicación, condición y expresión final.
El bloque de código se ejecuta mientras la condición sea verdadera, y despyés de cada iteración se ejecuta la expresión final.

for(inicialización; condición; expresión de iteración){
    //Bloque de código a ejecutar

}
-Inicilaización: se ejecuta antes de que el bucle comience, y se utiliza para establecer una varianle de control (contador)

-condición: Se verifica antes de cada iteración, u si se evalua como verdadera, el bucle se ejecuta

- expresion de iteracion: se ejecuta al final de cada iteaciones, y se utiliza para actualizar o modificar la variable de control.



*/


console.log("Ejemplo de la pizza con for");

//Definir mi lista de pasos

var pasosDeReceta = ["Preparar la masa", "Agregar los ingredientes", "Preparar la pizza"]

//Definir mi lista de tiempo por paso

var tiempoPorPaso = [10,15,20];

//En el ciclo for, para cada paso, se tiene un timepo estimado

for (var paso = 0; paso < pasosDeReceta.length; paso++){
    console.log("Realizando paso " + pasosDeReceta[paso]);
    console.log("Esperando " + tiempoPorPaso[paso] + " minutos");
}

console.log("Disfruta tu pizza")


//Ejemplo contador con for (contador de cohetes)

for (let i = 10; i>0; i--){
    console.log("Faltan " + i + " segundos para el despegue");

}

//Ejemplo de for para cupones de descuento

for(let cupones = 10; cupones >0 ; cupones --){
    console.log("tienes un cupón de descuento nos quedan " + (cupones-1));
}


