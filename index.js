const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));


// Servir archivos estáticos (si tienes archivos en 'public')
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para mostrar la página de inicio (Home)
app.get('/', (req, res) => {  res.render('Home',{Libros,Juegos,Articulos}); });

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



// carga de productos 
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