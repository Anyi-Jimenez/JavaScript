

/*

if (numeroAevaluar == 1){
    console.log("Por definición. La definición de «número primo» dice que «Un número entero mayor que 1 se denomina número primo si sólo tiene como divisores positivos (factores) a sí mismo y a la unidad». Así que el 1 queda automáticamente excluído.");
}else  {

    if (numeroAevaluar != 2){
    numeroAevaluar % 2 == 0;

    console.log("El número ingresado no es un número primo, ya que es un número par")

    }else {
        var divisores = numeroAevaluar
        
        while(divisores > 1 & evaluacion == 0){
            var evaluacion
            evaluacion = numeroAevaluar % (divisores-1)==0
    
            if (evaluacion == 0) {
                console.log("El número ", numeroAevaluar, "no es un número primo")
            }else {
                console.log("El número ", numeroAevaluar, "es un número primo")
        }
        }
    }
}

*/






/*

var numeroAevaluar = prompt("Ingresa el número que se va a evaluar si es número primo o no");

if (numeroAevaluar == 1){
    console.log("Por definición. La definición de «número primo» dice que «Un número entero mayor que 1 se denomina número primo si sólo tiene como divisores positivos (factores) a sí mismo y a la unidad». Así que el 1 queda automáticamente excluído.");
}else  {if (numeroAevaluar !=2){

    par(numeroAevaluar);

} else{

    console.log("El número ", numeroAevaluar, "es un número primo")

}
   

}


*/

/*



function par (numeroAevaluar ){

    var evaluacionPar
    
    evaluacionPar = numeroAevaluar % 2


    if (evaluacionPar==0){
        return   console.log("El número " + numeroAevaluar + " no es un número primo, ya que es un número par")

    }

    else {
        divisores (numeroAevaluar);
    }

  
}



function divisores (numeroAevaluar){

    var divisores = numeroAevaluar -1
        
    while(divisores > (Math.round(divisores/2)) & evaluacion != 0){
        var evaluacion
        evaluacion = numeroAevaluar % (divisores)

       divisores --

}

if (evaluacion == 0) {
    console.log("El número ", numeroAevaluar, "no es un número primo")
}else {
    console.log("El número ", numeroAevaluar, "es un número primo")


    }
}



var numeroAevaluar = prompt("Ingresa el número que se va a evaluar si es número primo o no");

if (numeroAevaluar <= 0){
    console.log("El número ", numeroAevaluar, "no es un número primo, por definición. La definición de «número primo» dice que «Un número entero mayor que 1 ");
} else {if (numeroAevaluar == 1){
    console.log("Por definición. La definición de «número primo» dice que «Un número entero mayor que 1 se denomina número primo si sólo tiene como divisores positivos (factores) a sí mismo y a la unidad». Así que el 1 queda automáticamente excluído.");
}else  {if (numeroAevaluar !=2){

    par(numeroAevaluar);

} else{

    console.log("El número ", numeroAevaluar, "es un número primo")

}
   

}

}

*/



function par(numeroAevaluar) {

    var evaluacionPar

    evaluacionPar = numeroAevaluar % 2


    if (evaluacionPar == 0) {
        return console.log("El número " + numeroAevaluar + " no es un número primo, ya que es un número par")

    }

    else {
        divisores(numeroAevaluar);
    }


}



function divisores(numeroAevaluar) {

    var divisores = 3

    while (divisores < (Math.round(numeroAevaluar / 2)) & evaluacion != 0) {
        var evaluacion
        evaluacion = numeroAevaluar % (divisores)

        divisores++

    }

    if (evaluacion == 0) {
        console.log("El número ", numeroAevaluar, "no es un número primo")
    } else {
        console.log("El número ", numeroAevaluar, "es un número primo")


    }
}



var numeroAevaluar = prompt("Ingresa el número que se va a evaluar si es número primo o no");

if (numeroAevaluar <= 0) {
    console.log("El número ", numeroAevaluar, "no es un número primo, por definición. La definición de «número primo» dice que «Un número entero mayor que 1 ");
} else {
    if (numeroAevaluar == 1) {
        console.log("Por definición. La definición de «número primo» dice que «Un número entero mayor que 1 se denomina número primo si sólo tiene como divisores positivos (factores) a sí mismo y a la unidad». Así que el 1 queda automáticamente excluído.");
    } else {
        if (numeroAevaluar != 2) {

            par(numeroAevaluar);

        } else {

            console.log("El número ", numeroAevaluar, "es un número primo")

        }


    }

}




