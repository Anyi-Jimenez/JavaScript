/*DOM

Cuando aprendemos a crear paginas web, normalmente comenzamos con la construccion de sitios que estan estructurados con HTML y que tienen CSS como fuente de estilo. Hasta este momento, nuestras paginas son estaticas. Si nosotros queremos convertir estas paginas a paginas dinamicas, debemos agregar JavaScript a la ecuacion. Debemos recordar que cuando hablamos de paginas dinamicas, nos referimos a paginas que cambian de acuerdo a los datos que nos envie el usuario, esto con el fin de brindar una experiencias mucho mas completa, ademas de tener tareas o acciones que se puedan automatizar.

DOM significa Document Object Model, o modelo de objetos de documento. Podemos hacer una analogia con un arbol, donde el DOM es el arbol y cada una de las etiquetas del HTML es un nodo o rama, ademas de que cada nodo puede tener una propiedad o un atributo, que es lo que nos permite saber que es lo que esta dentro de ese nodo.

Cuando nos referimos al DOM, nos referimos a esta estructura de arbol, que podremos modificar de forma rapida y dinamica desde el propio JS y donde podremos agregar, eliminar, modificar y cambiar el contenido de nuestras paginas. Gracias a que usamos JS para estas modificaciones, vamos a poder automatizar tareas que se realicen cuando el usuario haga alguna tarea determinada, como mover el raton, pulsar un boton, hacer click en alguna parte del documento, escribir un texto, etc.

En resumen, DOM es lo que nos permite manejar HTML con JavaScript a traves del navegador y podemos visualizarlo como un gran arbol, donde cada etiqueta puede representar un nodo, y cada nodo puede tener una propiedad o un atributo (hojitas de arbol); es la representación de la página web en la memoria del navegador, a la que podemos acceder a través de JS.

Elementos del DOM

Todos los elementos del DOM se consideran nodos.

Vamos a encontrar nodos de los siguientes tipos:

-Document(Es el nodo raíz)
-Element (todas las etiquetas de HTML)
-Texto (textos que estan dentro de las etiquetas)
-Atributos (Todos los atributos que pueden llegar a tener las etiquetas)
- Comentario(Todos los comentarios del documento)


Comunicación entre HTML y JS


Métodos de selección de elementos

Son elementos que nos van a  permitir seleccionar uno o varios elementos o grupos de ellos del DOM. Estos métodos se utilizan en el documento, por eso se agrega un document.getElement

Tradicionales

//getElementById: busca elementos por su id
//getElemetByClassName: busca elementos por su clase
//getElemetByTagName


Modernos

  querySelector(): Busca el primer elemento que coincide con el selector de CSS
    querySelectorAll(): Busca todos los elementos que coinciden con el selector de CSS



*/


/*
let parrafo = document.getElementById("parrafo1");

parrafo.style.color = "blue";

parrafo.innerHTML= "Hola, este es un nuevo texto generado con un InnerHTML";

console.log(parrafo);

let parrafitos = document.getElementsByClassName("parrafos");



var parrafosEtiqueta = document.getElementsByTagName("p");
console.log(parrafosEtiqueta);

//Métodos más actuales

var parrafoQuerySelector = document.querySelector("#parrafo1");

var parrafoQuerySelectorAll = document.querySelectorAll(".parrafos");

console.log(parrafoQuerySelectorAll);

*/



/*

Eventos (accion y reaccion)

Los eventos son una forma mucho más fácil de modificar o alterar el contenido de un elemento. Los eventos son accines que se pueden reliazar soble un elemento y objeto y se usan para modificar atributos, estilos, textos o para invocar funciones de JS

*/

//Crea una función llamada cambiaColor donde yo paso un color como parametro (red, blue, black)

/*

function cambiaColor(color){

  //con ese color que paso como parametro, se lo aplico a un elemento en especifico
  parrafo.style.color = color;
}
*/

/*Evento con Eventlistener

Permite escucha el evento indicado (primer parámetro) y después en el caso de que ocurra o de que alguien lo (escuche), se ejecuta la funcion asociada (segundo parámetro)

Sintaxis

object.addEventListener(nombreDelEvento, funcionQueSeDispara)

*/

//Referenciar el botón

/*

const botonCambiarColor = document.querySelector("#botonCambiarColor")

botonCambiarColor.addEventListener("click", function(){
alert("Hola, has presionado el botón para cambiar color")
})

*/

/*

Elementos para crear y agregar nodos a nuestro DOM

FLujo normal para esto:

1 Primero se crean
2 Se agregan


*/

//Para crear elementos createElement()

//elementoPadre.createElement("tipoDeElemento")

const div = document.createElement("div");

//Para insentarlo appendChild
document.body.appendChild(div);

//Código para agregar una imagen a mi documento

//1ro Creo la imagen

var appendImg = document.createElement("img");
appendImg.src = "https://cdns-images.dzcdn.net/images/artist/098ea0886f463cf48b75d2af855ad3b9/500x500.jpg";
appendImg.alt = "Imagen Sorpresa";

//2do Insertarlo

document.body.appendChild(appendImg);


