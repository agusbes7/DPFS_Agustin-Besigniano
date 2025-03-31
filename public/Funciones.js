document.addEventListener("DOMContentLoaded", function() {
  // Tu código que se ejecutará cuando el DOM esté listo.
  console.log("El DOM se ha cargado correctamente.");
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
//-----------------LOGIN-------------------
let registro = document.getElementById("toggle_registro");
let x = document.querySelector('.registro');
let estadoRegistro = 0;

// Verificar si 'x' se obtiene correctamente
console.log(x);  // Esto debería mostrar el elemento o 'null' si no se encuentra
if(registro) {
registro.addEventListener("click", function () {
  console.log('estadoRegistro antes:', estadoRegistro);  // Depurar estado

  if (estadoRegistro == 0) {
    x.style.display = 'flex';  // Mostrar el elemento
    estadoRegistro++;  // Incrementar el estado
  } else {
    estadoRegistro--;  // Decrementar el estado
    x.style.display = 'none';  // Ocultar el elemento
  }

  console.log('estadoRegistro después:', estadoRegistro);  // Depurar estado
});
}


/*-----------------Abrir imagenes----------------*/
let abrir=document.querySelectorAll(".miniatura");

if(abrir){abrir.forEach(i => {
  i.addEventListener("click", function(event) {
    let hermano = this.nextElementSibling; 
    let elemento = hermano.querySelector(".img_exp"); 
    console.log("click src:" + this.src); 
    elemento.src = this.src; 
    console.log("hermano src:" + elemento.src); 
    hermano.style.display = "flex"; 
  });
});}
/*--------------------Cerrar imagenes--------------- */
let cerrar=document.querySelectorAll(".close");
if(cerrar){cerrar.forEach(i =>{
  i.addEventListener("click",function(event){

let padre=this.parentElement;
padre.style.display="none";
let hermano=this.previousElementSibling;
hermano.src="";})
  });}


//---------------------------------------------
function eliminarFila(boton) {
  let fila = boton.parentNode.parentNode; // Se obtiene la fila del botón
  fila.parentNode.removeChild(fila); // Se elimina la fila de la tabla
}
//--------------------pago
//  Abrir ventana de pago
document.getElementById("abrirPago").addEventListener("click", function () {
document.querySelector(".div_pago").classList.add("mostrar");
});

//  Cerrar ventana de pago
document.getElementById("cerrarPago").addEventListener("click", function () {
document.querySelector(".div_pago").classList.remove("mostrar");
});


// Mostrar los campos según el método de pago seleccionado
document.querySelector(".select_metodo_pago").addEventListener("change", function() {
  let metodo = this.value;

document.getElementById("pago_efectivo").classList.add("hidden");
document.getElementById("pago_tarjeta").classList.add("hidden");
document.getElementById("pago_mp").classList.add("hidden");

  if (metodo === "efectivo") {
    document.getElementById("pago_efectivo").classList.remove("hidden");
  } else if (metodo === "debito" || metodo === "credito") {
    document.getElementById("pago_tarjeta").classList.remove("hidden");
  } else if (metodo === "mp") {
    document.getElementById("pago_mp").classList.remove("hidden");
  }
});
//_-------------------------------------------
//Formulario de pago
//procesar pago de forma externa con pasarelas o hacerlo interno y   enviar datos? revisar decisiones de diseño a futuro
//Fecha de vencimiento
document.getElementById("expiry-date").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, ""); // Elimina caracteres no numéricos
  if (value.length >= 2) value = value.slice(0, 2) + "/" + value.slice(2); // Inserta "/"
  e.target.value = value.slice(0, 7); // Limita el formato a MM/AA
});
//numeros de la tarjeta
document.getElementById("numero_tarjeta").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, ""); // Elimina caracteres no numéricos
  value = value.replace(/(.{4})/g, "$1-").replace(/-$/, ""); // Agrupa en bloques de 4 y agrega "-"
  e.target.value = value.slice(0, 19); // Limita el formato a 19 caracteres (16 dígitos + 3 guiones)
});

