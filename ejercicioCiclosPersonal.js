/* Link de donde se toma el ejercicio: https://github.com/alexanyernas/Ejercicios-Practicos/blob/main/3-Ciclos.pdf
Descripción del problema: 
1. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los números impares desde 1 hasta ese número

*/


//Se solicita el número entero positivo al usuario
numero = prompt("Ingresa un número entero positivo");

//se crea la función que realize lo que se describe en el programa

function numerosImparesHastaN() {

    //Se declaran las variables necesarias, fuera del ciclo para que no se renicien cada vez que se se realice el ciclo, porque así no tiene fin

    var numeroImpar = 0;
    var contador = 0;
    var numeroImpar = 1;
    var numerosImpares = [];

    while (numeroImpar <= numero) {
        
        numerosImpares.push(numeroImpar);

        contador++;
        numeroImpar += 2;

    }

    console.log("Estos son todos los  números impares desde 1 hasta ", numero, numerosImpares);

}

//Se llama a la función porque si no se llama no se realiza nada

numerosImparesHastaN(numero);



