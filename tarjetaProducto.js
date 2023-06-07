//Obtener los elementos del HTML para guardarlos en variables

//Almaceno el lugar de destino de mi tarjeta en una constante
const container = document.getElementById("product-container");
const botonAgregarProductos = document.getElementById("agregarProducto");


//Almacenar elementos del formulario en variables JS, se trae todo el objeto completo

var nombreProducto = document.getElementById("nombreProducto");
var descripcionProducto = document.getElementById("descripcionProducto");
var imagenProducto = document.getElementById("imagenProducto");





function agregarProducto() {

    
//Guardo los valores de mis inputs

var valorInputProducto = nombreProducto.value;
var valorInputDescripcion = descripcionProducto.value;
var valorInputImagen = imagenProducto.value;

    //Quiero que cada tarjetita tenga su propio div o contenedor

const productCard = document.createElement("div");


    //1Creo el elemento

    productCard.innerHTML = `
<img src="${valorInputImagen}" alt= "producto">
<h3> ${valorInputProducto} </h3>
<p> Descripcion: ${valorInputDescripcion} </p>
<p> Precio $9.99 </p>
<button class = "btn"> Agregar al carrito </button>
`;

    //Agregar esa tarjeta de producto al container especificado (este es el hijo). Inserto el elemento

    container.appendChild(productCard);

}

//Creamos el botón de escucha
botonAgregarProductos.addEventListener("click", agregarProducto);




