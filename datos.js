//Importar clases creadas para manejar articulos juegos,libros
const  { Dirección,Tarjeta,Usuario,Producto, Articulo,Juego,Libro}  = require('./clases.js');

//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//Ejemplos de productos
const oferta={
   MedioDeOferta: "Ofertas promocionales solo tarjetas de debito",
    Descuento:  "25% descuento",
    extra: "en todo lo relacionado con el señor de los anillos pagando con tarjeta Supervielle"
};
const ProductoOferta=[
        {
            nombre: "Sandman vol 2: La casa de las muñecas",
            precio: "20000",
            imagen: "./estructuras/Medias/productos/libro1.webp",
            descripcion: "Vol 2 que recopila números del 9-18 de la serie regular de Sandman de Neil Gaiman. Seguimos a Dream...",
        },
        {
            nombre: "El temor de un hombre sabio",
            precio: "50000",
            imagen: "./estructuras/Medias/productos/libro8.jpg",
            descripcion: "Comienza el 2do Día. Kvothe se dispone a continuar sus narraciones mientras se escucha el silencio...",
        }
]
const Libros = [
    {
        nombre: "Sandman vol 2: La casa de las muñecas",
        precio: "20000",
        imagen: "./estructuras/Medias/productos/libro1.webp",
        descripcion: "Vol 2 que recopila números del 9-18 de la serie regular de Sandman de Neil Gaiman. Seguimos a Dream...",
    },
    {
        nombre: "El temor de un hombre sabio",
        precio: "50000",
        imagen: "./estructuras/Medias/productos/libro8.jpg",
        descripcion: "Comienza el 2do Día. Kvothe se dispone a continuar sus narraciones mientras se escucha el silencio...",
    },
    {
        nombre: "Fundación e Imperio",
        precio: "40000",
        imagen: "./estructuras/Medias/productos/fundacion e imperio.jpg",
        descripcion: "Libro 3 de la trilogía original de la saga de la Fundación.",
    },
    {
        nombre: "Sandman vol 3: País de sueños",
        precio: "18000",
        imagen: "./estructuras/Medias/productos/libro2.webp",
        descripcion: "Vol 3 que recopila números del 19-28 de la serie regular de Sandman de Neil Gaiman. Seguimos a Dream...",
    },
    {
        nombre: "Isaac Asimov: Robot e Imperio",
        precio: "12500",
        imagen: "./estructuras/Medias/productos/assimov fin de la eternidad.jpg",
        descripcion: "Novela de ciencia ficción donde se explora el destino de la galaxia tras la guerra entre humanos y robots.",
    }
  ];
  const Juegos = [
    {
        nombre: "Sandman vol 2: La casa de las muñecas",
        precio: "20000",
        imagen: "./estructuras/Medias/productos/libro1.webp",
        descripcion: "Vol 2 que recopila números del 9-18 de la serie regular de Sandman de Neil Gaiman. Seguimos a Dream...",
    },
    {
        nombre: "El temor de un hombre sabio",
        precio: "50000",
        imagen: "./estructuras/Medias/productos/libro8.jpg",
        descripcion: "Comienza el 2do Día. Kvothe se dispone a continuar sus narraciones mientras se escucha el silencio...",
    },
    {
        nombre: "Fundación e Imperio",
        precio: "40000",
        imagen: "./estructuras/Medias/productos/fundacion e imperio.jpg",
        descripcion: "Libro 3 de la trilogía original de la saga de la Fundación.",
    },
    {
        nombre: "Sandman vol 3: País de sueños",
        precio: "18000",
        imagen: "./estructuras/Medias/productos/libro2.webp",
        descripcion: "Vol 3 que recopila números del 19-28 de la serie regular de Sandman de Neil Gaiman. Seguimos a Dream...",
    },
    {
        nombre: "Isaac Asimov: Robot e Imperio",
        precio: "12500",
        imagen: "./estructuras/Medias/productos/assimov fin de la eternidad.jpg",
        descripcion: "Novela de ciencia ficción donde se explora el destino de la galaxia tras la guerra entre humanos y robots.",
    }
  ];
  const Articulos = [
    {
        nombre: "Sandman vol 2: La casa de las muñecas",
        precio: "20000",
        imagen: "./estructuras/Medias/productos/libro1.webp",
        descripcion: "Vol 2 que recopila números del 9-18 de la serie regular de Sandman de Neil Gaiman. Seguimos a Dream...",
    },
    {
        nombre: "El temor de un hombre sabio",
        precio: "50000",
        imagen: "./estructuras/Medias/productos/libro8.jpg",
        descripcion: "Comienza el 2do Día. Kvothe se dispone a continuar sus narraciones mientras se escucha el silencio...",
    },
    {
        nombre: "Fundación e Imperio",
        precio: "40000",
        imagen: "./estructuras/Medias/productos/fundacion e imperio.jpg",
        descripcion: "Libro 3 de la trilogía original de la saga de la Fundación.",
    },
    {
        nombre: "Sandman vol 3: País de sueños",
        precio: "18000",
        imagen: "./estructuras/Medias/productos/libro2.webp",
        descripcion: "Vol 3 que recopila números del 19-28 de la serie regular de Sandman de Neil Gaiman. Seguimos a Dream...",
    },
    {
        nombre: "Isaac Asimov: Robot e Imperio",
        precio: "12500",
        imagen: "./estructuras/Medias/productos/assimov fin de la eternidad.jpg",
        descripcion: "Novela de ciencia ficción donde se explora el destino de la galaxia tras la guerra entre humanos y robots.",
    }
  ];
  /*
  const productoBase = new Producto(
    "El nombre del viento",
    "/estructuras/Medias/productos/libro8.jpg", 
    "comienza el segundia de las narraciones de Kvothe.",
    "Accesible para todos",
    30.99,  
    "LIBRO", 
    ["Fantasia", "Maravilloso"], 
    1.5    );
    const libro = new Libro(
    productoBase,
    "978-3-16-148410-0",  
    "Patrick RouthFuss",  
    1350,  
    "2013-03-30",  
    ["Español", "Inglés"], 
    "Tapa dura", 
    "horse comcis" );
*/
let items=new Set(); 
const productoBase1 = new Producto( //esto es un producto pero sin tipo falta las propiedades especificas de cada uno
        "El nombre del viento", "/estructuras/Medias/productos/libro8.jpg",
        "Comienza el segundo día de las narraciones de Kvothe.",
        "Accesible para todos", 30.99,
        "LIBRO", ["Fantasía", "Maravilloso"],1.5);
    
    const libro1 = new Libro(
        productoBase1,
        "978-3-16-148410-0", "Patrick Rothfuss",
        1350,"2013-03-30", ["Español", "Inglés"],
        "Tapa dura","Horse Comics");
    
    const productoBase2 = new Producto(
        "Duna",
        "/estructuras/Medias/productos/libro7.jpg",
        "El clásico de la ciencia ficción.",
        "Accesible para todos",
        28.99,
        "LIBRO",
        ["Ciencia Ficción"],
        1.8
    );
    
    const libro2 = new Libro(
        productoBase2,
        "978-0-441-17271-9",
        "Frank Herbert",
        896,
        "1965-06-01",
        ["Español", "Inglés"],
        "Tapa dura",
        "Ace Books"
    );
    
    // Agrupar libros en secciones
    const datosSecciones = [
        {
            titulo: "Libros de Fantasía",
            productos: [libro1,libro2,libro1,libro2]
        },
        {
            titulo: "Libros de Ciencia Ficción",
            productos: [libro2,libro1,libro2,libro1,libro2,libro1,libro2,libro1]
        }
    ];

    items.add(libro1);
    items.add(libro2);

//_----------------------------------------------------------
//_----------------------------------------------------------
module.exports = { oferta, ProductoOferta, Libros, Juegos, Articulos,datosSecciones,items };