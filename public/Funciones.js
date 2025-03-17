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
