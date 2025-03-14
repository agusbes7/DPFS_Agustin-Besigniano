var estadoRegistro =0;
function mostrarOcultarRegistro(){
  var x=document.querySelector('.registro');
if(estadoRegistro==0){
  estadoRegistro=1;
  x.style.display='flex';
}
else{
  estadoRegistro=0;
  x.style.display='none';}
}

function ocultarGrilla(x) {

  let aux = document.getElementById(getElemento(x));
  let botonO = document.getElementById(getBotonO(x));
  let botonM = document.getElementById(getBotonM(x));
  let seccion=document.getElementById(getTitulo(x));
  if (aux) aux.style.display = 'none';
  if (botonO) botonO.style.display = 'none';
  if (botonM) botonM.style.display = 'flex';
seccion.style.height='auto';

}
/*
function ocultarAside() {
  let aside = document.querySelector(".aside");
  let contenido = document.querySelector(".contenido"); 
  let productos = document.querySelector(".productos");
  let buttonOcultar = document.getElementById("otogglebutton");
  let buttonMostrar = document.getElementById("mtogglebutton");

  aside.style.display = "none";
  contenido.style.gridTemplateAreas = `
      "ofertas ofertas"
      "productos productos"  `;

  buttonOcultar.style.display = "none";
  buttonMostrar.style.display = "flex";
}
function mostrarAside() {
  let aside = document.querySelector(".aside");
  let contenido = document.querySelector(".contenido"); 
  let buttonOcultar = document.getElementById("otogglebutton");
  let buttonMostrar = document.getElementById("mtogglebutton");

  aside.style.display = "flex"; 
  contenido.style.gridTemplateAreas = `
      "ofertas ofertas"
      "aside productos"  `;

  buttonOcultar.style.display = "flex";
  buttonMostrar.style.display = "none";
}*/
function total(x,id){
  let y=document.getElementById(id);
  y.style.display="flex";

}


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

function getTitulo(x){
  switch(x){
    case 1: return 'tituloJ';
    case 2: return 'tituloL';
    case 3: return 'tituloA';
    default: return null;
}
}
function getElemento(x) {
  switch (x) {
      case 1: return 'juegos';
      case 2: return 'libros';
      case 3: return 'articulos';
      default: return null;
  }
}

function getBotonO(x) {
  switch (x) {
      case 1: return 'oTogglebuttonJ';
      case 2: return 'oTogglebuttonL';
      case 3: return 'oTogglebuttonA';
      default: return null;
  }
}

function getBotonM(x) {
  switch (x) {
      case 1: return 'mTogglebuttonJ';
      case 2: return 'mTogglebuttonL';
      case 3: return 'mTogglebuttonA';
      default: return null;
  }
}
//---------------------------------------------
function eliminarFila(boton) {
  let fila = boton.parentNode.parentNode; // Se obtiene la fila del botón
  fila.parentNode.removeChild(fila); // Se elimina la fila de la tabla
}