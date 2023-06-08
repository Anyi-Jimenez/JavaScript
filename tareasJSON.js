//1. Creamos un arreglo de objetos para nuestras tareas, estas tareas tendran atributos como id, titulo, estatus completada o no completada

//Esto donde se ejecuta? Del lado del cliente 

let tareas = [
        {
            id : 1,
            titulo : "Baniar al perro",
            estatus : true,
        },
        {
            id : 2,
            titulo : "Preparar la comida",
            estatus : false,
        }
    ]
    
    
    //Enviar ese arreglo al servidor 
    let tareasJSON = JSON.stringify(tareas);
    console.log(tareasJSON);
    
    
    
    //Ejemplo del carrito de compras
    
    //Declaramos un arreglo de objetos vacio
    let carritoDeCompras = [];
    
    //Producto de mi catalogo
    let producto = {
        id : 1,
        nombre : "Camisa de Pokemon",
        precio: 299.99,
        cantidad: 1
    };
    
    //Mostrar informacion del carrito de compras
    console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //undefined
    
    //Agregar un nuevo producto a mi carrito de compras
    carritoDeCompras.push(producto);
    
    //Muestro la nueva informacion de mi carrito
    console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //1
    
    
    //Actualizar la cantidad de productos en el carrito
    let idProductoAModficar = 1; //producto a actualizar
    let nuevaCantidad = 3; //cantidad nueva de productos que voy a comprar
    
    //Verifico si mi producto existe dentro del carrito de compras para poder modificarlo, si exsite, actualizo la cantidad, si no, no hago nada. Todo esto se evalua con base en el id que estoy buscando y este debe coincidir con el id del producto que deberia tener dentro de mi carrito de compras.
    let productoExiste = carritoDeCompras.find(function(producto){
        return producto.id === idProductoAModficar; //true or false
    })
    if (productoExiste) {
        productoExiste.cantidad = nuevaCantidad;
    }
    
    console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //1
    
    console.log(producto);

    //Eliminar un producto del carrito
    let productoAEliminar = 1;

    //Reviso el id del producto a eliminar en cada uno de los índices de mi arreglo, si encuetro un indice que dentro tenga un objeto que coincida con el id que quiero borrar, entonces lo elimini
    let indiceProductoAEliminar = carritoDeCompras.findIndex(function(producto){
        return producto.id === productoAEliminar;//true o false
    })

    //Verificar si el indice del elemento que se encontró es valido. Con el findIndex por a devolver el primer indice del elemento que cumpla con la condición. Si no se encuentra el elemento que coincida con la consición, entonces vamos a devolver un -1, esto para eitar borrar un elemento que no sea (pensando que tenemos un índice 0)

    if(indiceProductoAEliminar !== -1){//0,1, 2, 3 disparan true y se activa el if. Que el -1 dispara un fase, y no se activa el if.
        carritoDeCompras.splice(indiceProductoAEliminar, 1);

    }

    console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito")

    //Comprar productos (pagar carrito de compras)

    /*

    Elmétodo forEach es un metodo de array de JS, que nos va a ayudar a poder ejecutar una función en cada elemento de nuestro array.

    Sintaxis de un forEach

    array.forEach(function(elemento, indice, arreglo))

    */

    let total = 0;


    carritoDeCompras.push(producto);

    carritoDeCompras.forEach(function(producto){
        total += producto.precio * producto.cantidad;

    })

    //REviso el total de mi carrito de compras

console.log("El total de tu carrito de compras es de: ", total);

let carritoJSON = JSON.stringify(carritoDeCompras);
console.log(carritoJSON);


    /*
    function vaciarCarritoCompleto(){
        //Para vaciar todo el carrito
    }
    */
    
    
    /*
    //Con funcion flecha 
    carritoDeCompras.find(producto => producto.id === productoId);
    
    
    //Sin funcion flecha
    
    carritoDeCompras.find(function(producto){
        return producto.id === productoID; //true or false
    })
    
    */
    
    
