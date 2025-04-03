document.addEventListener('DOMContentLoaded', function () {
    // Aquí va todo tu código JavaScript
});

let elementSelect = document.getElementById("operacion");
let cargar = document.querySelector(".new-product");
let modificarEliminar = document.querySelector(".modify-remove-product");

elementSelect.addEventListener("change", function() {
    let y = elementSelect.value; // Se usa "elementSelect" en lugar de "selectElement"

    // Hacer distintas cosas según la opción seleccionada
    switch(y) {
        case "1":
            cargar.style.display = "flex";
            modificarEliminar.style.display = "none";
            break;
        case "2":
            cargar.style.display = "none";
            modificarEliminar.style.display = "flex";
            break;}});
//-------------------------------------------------------------------
let tipo = document.getElementById("tipo-producto");
let game = cargar.querySelector(".Juego");
let Book = cargar.querySelector(".Libro");
let Article = cargar.querySelector(".Articulo");

tipo.addEventListener("change", function() {
  let y = tipo.value; // Se usa "elementSelect" en lugar de "selectElement"


  switch(y){

    case "1":
game.style.display="flex";
requerido(game);
Book.style.display = "none";
Article.style.display = "none";
quitarRequerimiento(Book);
quitarRequerimiento(Article);

    break;
  case "2":
    game.style.display="none";
    Book.style.display = "flex";
    Article.style.display = "none";
requerido(Book);
    quitarRequerimiento(game);
quitarRequerimiento(Article);


    break;
  case "3":
    game.style.display="none";
    Book.style.display = "none";
    Article.style.display = "flex";
  requerido(Article);
  quitarRequerimiento(Book);
  quitarRequerimiento(game);
    break;
    default:
      game.style.display="none";
      Book.style.display = "none";
      Article.style.display = "none";
      quitarRequerimiento(game);
      quitarRequerimiento(game);
      quitarRequerimiento(Article);

  }});

  function requerido(seccion){
let inputs = seccion.querySelectorAll("input, select, textarea"); // Obtiene todos los inputs, selects y textareas

inputs.forEach(elemento => {
    elemento.required = true; // Aplica required a cada elemento
});};
function quitarRequerimiento(seccion){
  let inputs = seccion.querySelectorAll("input, select, textarea"); // Obtiene todos los inputs, selects y textareas
  
  inputs.forEach(elemento => {
      elemento.required = false; // Aplica required a cada elemento
  });};
