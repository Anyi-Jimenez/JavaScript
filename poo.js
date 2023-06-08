/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa


*/

/*

//Creación de un objeto casa

const casa = {
    numHabitaciones : 3,
    numPisos : 2,
    numBanios : 1,
    color: "Rojo",
};

//casa[3]; // Normalmente se hace con un arreglo

//Para imprimir la información de un obheto, utilixo la ferenciad al objeto, después un punto, y por último el onmbre de la propiedad o método qui qeuiro mostrar.

console.log(casa.color);

console.log("El color e mi casa es: ", casa.color);

//Plantilla para repetir 50 veces la misma casa

//Instrucción: Crear 50 casas con colores diferentes


//Clase para generar una plantilla, esta plantilla va a tener predefinidos las llaves (keys) de nuestras propiedades, y cada que instancie o cree un nuevo objeto, esa información se va a ir personalizando.

class casaPlantilla {
    //1. Definir mis propiedades como variables, para posteriormente agregarle valores (este valor se lo vamos a dar cuando instanciemos el objeto)

    numHabitaciones = 0;
    numBanios = 0;
    numPisos = 0;
    color = ";"

    //3. Definir una función constructora. Esta función es una función especial que se dedica única y exclusivamente a tomar los datos que definimos como variabes, para usarlas como parámetros de construcciión y así poder instanciar nuestro objeto.

    //Los parámetros se pasan ene el orden en el que fueron declarados, para que cada valor que se use, se asigne a la variable.

    constructor(numHabitaciones, numBanios, numPisos,color){
        this.numHabitaciones = numHabitaciones;
        this.numBanios = numBanios;
        this. numPisos = numPisos;
        this.color = color;
    }

    //2 .- Definimos los metodos como funciones, porque estas funciones nos dicen que es lo que puede haer mi objeto.

    encenderLuces(){
        console.log("Click, luces encendidas");
    }

    abrirVentanas (){
        console.log("Swiiiift, ventanas abiertas")
    }

    guardarmeDelFresnito(){
        console.log("Que agusticidad");
    }

 
}
*/

//En la clase ñdefinimos todo de forma ""normal (se declaran las variables como normalmente as usamos = y ;, pero cuando el objeto se crea (instancia), se vicualiza de otra forma con : y ,  entre cada valor.

/*
Instanciar objetos

Para instanciar objetos, usamos la siguiente sintaxisd:

variable con nombre = palabraReservadaNew referenciaDeClase (parámetros de construcción);

Let objeto = new ClaseObjeto (parametros)


*/

//Tengo una variable llamada "casa de FElipe", que es un nuevo objeto de la clase "casa plantilla" y que tiene los siguientes parámetros


/*

let casaDeFelipe = new casaPlantilla (6,3,3, "Azul");

console.log(casaDeFelipe);

casaDeFelipe.encenderLuces();


let casaDeGustavo = new casaPlantilla (5,3,2, "Azul");

let casaDeDaniel = new casaPlantilla (2,1,3, "Azul");

let casaDeAnyi = new casaPlantilla (10,4,3, "Azul");

//Ejemplo de POO con gatitos

*/

class gatitos {
    //Propiedades
    nombre = "";
    edad = 0;
    tamaño = "";
    caracter = "";
    numeroVidas = 0;
    color = "";
    raza = "";
    vacunas = false;

    //.Constructor
    constructor(nombre, edad, tamaño, caracter, numeroVidas, color, raza, vacunas){
        this.nombre = nombre;
        this.edad = edad;
        this. tamaño = tamaño;
        this.caracter = caracter;
        this.numeroVidas = numeroVidas;
        this.color = color;
        this.raza = raza;
        this.vacunas = vacunas;

    }

    //2. Métodos
    imprimirInfo(){
        console.log("El nombre de mi gato es: " , this.nombre);
        console.log("El edad de mi gato es: " , this.edad);
        console.log("El tamaño de mi gato es: " , this.tamaño);
        console.log("El caracter de mi gato es: " , this.caracter);
        console.log("El numeroVidas de mi gato es: " , this.numeroVidas);
        console.log("El color de mi gato es: " , this.color);
        console.log("El raza de mi gato es: " , this.raza);
        console.log("El vacunas de mi gato es: " , this.vacunas);

    };
    maullar(){
        console.log("Miaaaaua");

    };
    rasguñar(){
        console.log("El gato ha rasguado el sillón");

    };
    ronrronear(){
        console.log("Rrrrrrr");

    };

    cuidarGato(){
        if(this.numeroVidas < 3){
            console.log("Cuida a tu gatito porque tiene pocas vidas");
        }
    }


}

//instanciar

let juanchoDelCampo = new gatitos ("Juancho del Campo", 5, "Grande", "Tranquilo", 7, "naranja", "angora", true);

let nenito = new gatitos ("Nenito", 2, "Mediano", "Travieso", 2, "Blanco con naranja", "desconocida", true);

let Babid = new gatitos ("Babid", 2, "Grande", "Travieso", 2, "Negro", "desconocida", true);

let Lalo = new gatitos ("Lalo", 8, "Grande", "Travieso", 6, "Negro", "desconocida", true);

let Luna = new gatitos ("Luna", 8, "Pequeña", "Travieso", 1, "Negro", "desconocida", true);



nenito.imprimirInfo();
nenito.cuidarGato();





/*

JSON (JavaScript Object Notation)

Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, :})


JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/

// Objeto normal de JAVASCRIPT (tiene colores, me muestra las palabra reservadas)
objeto = {
    nombre: "Felipe",
    edad: 15,
}

console.log ("Este es un objeto normal: ", objeto);
console.log("Este es el nombre de mi objeto: ", objeto.nombre);


/*Como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. Este proceso se le conoce como serializar

La sintaxis para pasar de objeto normal de JS a JSON es:


JSON.stringify(objeto que quiero serializar)

*/

let objetoSerializado = (JSON.stringify(objeto));

//Podemos imprimir nuestro objeto serializado, y lo veremos como una cadena de texto
console.log("Este es un objeto serializado: ",objetoSerializado);

//Si tratamos de acceder a alguna de las propiedades de nuestro objeto serializado, no podremos ya que nos mostrara "undefined"
console.log(objetoSerializado.nombre);

//Para deserializar un objeto  JSON, vamos a utilizar un metodo llamado JSON.parse (objeto que queremos deserializar)

let objetoDeserializado = (JSON.parse(objetoSerializado));
console.log(objetoDeserializado);
