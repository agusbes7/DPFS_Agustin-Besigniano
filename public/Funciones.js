document.addEventListener("DOMContentLoaded", function() {
  // Tu código que se ejecutará cuando el DOM esté listo.
  console.log("El DOM se ha cargado correctamente.");
});

// --------DESCRIPCION--------------------------
let target_efect = document.querySelectorAll(".frente");

target_efect.forEach(e => {
    let hijo_Img = e.querySelector(".efecto_target").querySelector(".img button"); // Botón rojo
    let reverso = e.parentElement.querySelector(".reverso"); // Panel reverso
    let botonVerde = reverso.querySelector("button"); // Botón verde en reverso

    // DEPURACIÓN: Verifica si se encuentran los elementos
    console.log("Elemento frente encontrado:", e);
    console.log("Botón rojo encontrado:", hijo_Img);
    console.log("Reverso encontrado:", reverso);
    console.log("Botón verde encontrado:", botonVerde);

    // Si algún elemento no se encuentra, muestra un error y detiene la ejecución.
    if (!hijo_Img || !reverso || !botonVerde) {
        console.warn("No se encontraron todos los elementos necesarios en una tarjeta.");
        return;
    }

    // Evento para botón rojo 🔴
    hijo_Img.addEventListener("click", function (event) {
        event.stopPropagation(); // Evita que otros eventos interfieran
        console.log("Clic en botón rojo");
        reverso.style.display = "flex";
        e.style.display = "none";
    });

    // Evento para botón verde 🟢
    botonVerde.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log("Clic en botón verde");
        reverso.style.display = "none";
        e.style.display = "flex";
    });
});
//-----------------LOGIN-------------------
let estadoRegistro =0;
let monto=0;

function mostrarOcultarRegistro(){
let x=document.querySelector('.registro');
if(estadoRegistro==0){
  estadoRegistro=1;
  x.style.display='flex';
}
else{
  estadoRegistro=0;
  x.style.display='none';}}

//--------------INDEX------------------------
function ocultarGrilla(x) {

  let aux = document.getElementById(getElemento(x));
  let botonO = document.getElementById(getBotonO(x));
  let botonM = document.getElementById(getBotonM(x));
  let seccion=document.getElementById(getTitulo(x));
  if (aux) aux.style.display = 'none';
  if (botonO) botonO.style.display = 'none';
  if (botonM) botonM.style.display = 'flex';
seccion.style.height='auto';}
//-----------------
function mostrarGrilla(x) {
  let seccion=document.getElementById(getTitulo(x));
  let aux = document.getElementById(getElemento(x));
  let botonO = document.getElementById(getBotonO(x));
  let botonM = document.getElementById(getBotonM(x));
  if (aux) aux.style.display = 'flex'; // Asegura que el elemento se muestre
  if (botonO) botonO.style.display = 'flex';
  if (botonM) botonM.style.display = 'none';
seccion.style.height='auto';
}
//-----------------
function getTitulo(x){
  switch(x){
    case 1: return 'tituloJ';
    case 2: return 'tituloL';
    case 3: return 'tituloA';
    default: return null;}}
//-----------------
function getElemento(x) {
  switch (x) {
      case 1: return 'juegos';
      case 2: return 'libros';
      case 3: return 'articulos';
      default: return null;  }}
//-----------------
function getBotonO(x) {
  switch (x) {
      case 1: return 'oTogglebuttonJ';
      case 2: return 'oTogglebuttonL';
      case 3: return 'oTogglebuttonA';
      default: return null;}}
//-----------------
function getBotonM(x) {
  switch (x) {
      case 1: return 'mTogglebuttonJ';
      case 2: return 'mTogglebuttonL';
      case 3: return 'mTogglebuttonA';
      default: return null;}}
//-----------------

function total(x,id){
  let y=document.getElementById(id);
  y.style.display="flex";

}
/*-----------------Abrir imagenes----------------*/
document.querySelectorAll(".miniatura").forEach(i => {
  i.addEventListener("click", function(event) {
    let hermano = this.nextElementSibling; // Selecciona el siguiente elemento hermano (el div que contiene la imagen ampliada)
    let elemento = hermano.querySelector(".img_exp"); // Selecciona la imagen dentro del div
    console.log("click src:" + this.src); // Muestra la fuente de la imagen en la consola
    elemento.src = this.src; // Establece el src de la imagen ampliada con el src de la imagen en miniatura
    console.log("hermano src:" + elemento.src); // Muestra la nueva fuente de la imagen ampliada
    hermano.style.display = "flex"; // Muestra el lightbox
  });
});
/*--------------------Cerrar imagenes--------------- */
document.querySelectorAll(".close").forEach(i =>{
  i.addEventListener("click",function(event){

let padre=this.parentElement;
padre.style.display="none";
let hermano=this.previousElementSibling;
hermano.src="";})
  });


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

