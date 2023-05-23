function pesoProducto() {

    pesoPayasog = 112;

    pesoMuñecag = 75;

    numeroPayasos = prompt("Ingresa el número de payasos ");

    numeroDeMuñecas = prompt("Ingresa el número de muñecas ");

    pesoPaquete = (pesoPayasog * numeroPayasos) + (pesoMuñecag * numeroDeMuñecas);
    alert("El peso total del paquete es de: " +pesoPaquete + " gramos" );
    console.log("El peso total del paquete es  : " + pesoPaquete + " gramos");
}

pesoProducto()