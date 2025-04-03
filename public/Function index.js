document.addEventListener("DOMContentLoaded", function() {
  // Tu código que se ejecutará cuando el DOM esté listo.
  console.log("El DOM se ha cargado correctamente.");
});

//----------------------------------------------
/*EFECTO DE ROTACION EN EL INDEX*/
function rotarLista(lista, tiempo) {
  let primerElemento = lista.firstElementChild;
  let esPantallaPequeña = window.innerWidth <= 550;
  // Aplicar animación de salida
  primerElemento.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
  primerElemento.style.opacity = "0";
  primerElemento.style.transform = esPantallaPequeña ? "translateY(-20px)" : "translateX(-20px)";

  setTimeout(() => {
      lista.appendChild(primerElemento);
      primerElemento.style.transition = "none";
      primerElemento.style.opacity = "1";
      primerElemento.style.transform = "translate(0,0)";
  }, 500);

  // Reiniciar temporizador con el tiempo asignado
  lista.dataset.timer = setTimeout(() => rotarLista(lista, tiempo), tiempo);
}

// Inicializar rotación con tiempos diferidos
let listas = document.querySelectorAll(".tarjetas-list");
let tiempos = [4000, 5000, 6000];

listas.forEach((lista, index) => {
  let tiempoAsignado = tiempos[index % tiempos.length];
  lista.dataset.tiempo = tiempoAsignado;
  lista.dataset.timer = setTimeout(() => rotarLista(lista, tiempoAsignado), tiempoAsignado);

  // Evento para pausar al hacer hover
  lista.querySelectorAll("li").forEach((item) => {
      item.addEventListener("mouseover", () => {
          if (lista.dataset.timer) {
              clearTimeout(lista.dataset.timer);
              lista.dataset.timer = null; // Elimina el temporizador activo
          }
      });

      item.addEventListener("mouseleave", () => {
          resetearRotacion(lista);
      });
  });
});

// Función para resetear y reiniciar la rotación con el tiempo original
function resetearRotacion(lista) {
  if (lista.dataset.timer) {
      clearTimeout(lista.dataset.timer);
  }
  let tiempoOriginal = parseInt(lista.dataset.tiempo);
  lista.dataset.timer = setTimeout(() => rotarLista(lista, tiempoOriginal), tiempoOriginal);
}

// Eventos de las flechas
document.querySelectorAll(".flecha-derecha").forEach((boton) => {
  boton.addEventListener("click", () => {
      let contenedor = boton.closest(".tarjetas");
      let lista = contenedor.querySelector(".tarjetas-list");

      if (lista && lista.children.length > 0) {
          let primerElemento = lista.firstElementChild;
          lista.appendChild(primerElemento);
          resetearRotacion(lista);
      }
  });
});

document.querySelectorAll(".flecha-izquierda").forEach((boton) => {
  boton.addEventListener("click", () => {
      let contenedor = boton.closest(".tarjetas");
      let lista = contenedor.querySelector(".tarjetas-list");

      if (lista && lista.children.length > 0) {
          let ultimoElemento = lista.lastElementChild;
          lista.prepend(ultimoElemento);
          resetearRotacion(lista);
      }
  });
});


//---------------SECCION DE CONTENIDO DE INDEX--------------------
let botones = document.querySelectorAll(".ocultar_tipo");
let botonesMostrar = document.querySelectorAll(".mostrar_tipo");

botones.forEach(b => {
  b.addEventListener("click", function () {
    try {
      console.log("Se presionó");
    let padre = b.parentElement;  
    if (!padre) return; // Si el padre no existe, salir
    let hermano = padre.nextElementSibling;  
    let bot_hermano = b.nextElementSibling;  
   
    if (hermano) {   hermano.style.display = 'none'; }

    if (bot_hermano) {
      b.style.display = 'none';  
      bot_hermano.style.display = "flex"; }
    } catch (error) {
      console.error("Error en botón mostrar:", error);
    }
  });
});
botonesMostrar.forEach(b => {
  b.addEventListener("click", function () {
    try {
      console.log("Se presionó");
      let padre = b.parentElement;
      if (!padre) return; // Si el padre no existe, salir

      let hermano = padre.nextElementSibling;
      let bot_hermano = b.previousElementSibling;

      if (hermano) hermano.style.display = 'flex';
      if (bot_hermano) {
        b.style.display = 'none';
        bot_hermano.style.display = "flex";
      }
    } catch (error) {
      console.error("Error en botón mostrar:", error);
    }
  });
});
// --------DESCRIPCION TARJETAS EFECTO--------------------------
let target_efect = document.querySelectorAll(".frente");

target_efect.forEach(e => {
    let hijo_Img = e.querySelector(".efecto_target").querySelector(".img button"); // Botón rojo
    let reverso = e.parentElement.querySelector(".reverso"); // Panel reverso
    let botonVerde = reverso.querySelector("button"); // Botón verde en reverso

    // Si algún elemento no se encuentra, muestra un error y detiene la ejecución.
    if (!hijo_Img || !reverso || !botonVerde) {
        console.warn("No se encontraron todos los elementos necesarios en una tarjeta.");
        return;
    }

    // Evento para botón rojo 🔴
 
    hijo_Img.addEventListener("click", function (event) {
      event.stopPropagation(); // Evita que eventos padres se disparen
      try {
        console.log("Clic en botón rojo");
        reverso.style.display = "flex";
        e.style.display = "none";
      } catch (error) {
        console.error("Error en botón rojo:", error);
      }
    });
    
    // Evento para botón verde 🟢
    botonVerde.addEventListener("click", function (event) {
      event.stopPropagation(); // Evita que eventos padres se disparen
      try {
        console.log("Clic en botón verde");
        reverso.style.display = "none";
        e.style.display = "flex";
      } catch (error) {
        console.error("Error en botón rojo:", error);
      }
    });
});
