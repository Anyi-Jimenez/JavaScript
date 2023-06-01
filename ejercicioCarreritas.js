var posicionesIniciales = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];


var posicionesFinales = posicionesIniciales;

posicionesFinales.splice(2,1);

posicionesFinales.unshift("Jorge");

posicionesFinales.splice(3,1);

posicionesFinales.unshift("Ramiro");

posicionesFinales.splice(2,1);

posicionesFinales.splice(2,1);

posicionesFinales.push("Andrea")

posicionesFinales.push("José")

console.log("Posiciones finales después de la tercera vuelta");

console.log("Primer lugar: ", posicionesFinales[0], "\nSegundo lugar: ", posicionesFinales[1], "\nTercer lugar: ", posicionesFinales[2], "\nCuarto lugar: ", posicionesFinales[3], "\nQuinto lugar: ", posicionesFinales[4],)





