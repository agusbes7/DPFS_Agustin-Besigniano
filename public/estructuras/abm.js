document.addEventListener('DOMContentLoaded', function () {
    // Aquí va todo tu código JavaScript
});

let elementSelect = document.getElementById("operacion");
let cargar = document.querySelector(".new-product");
let modificarEliminar = document.querySelector(".modify-remove-product");

elementSelect.addEventListener("change", function() {
    let y = elementSelect.value; 

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
  let y = tipo.value;


  switch(y){

    case "1":
game.style.display="flex";
requerido(game);
Book.style.display = "none";
Article.style.display = "none";
quitarRequerimiento(Book);
quitarRequerimiento(Article);
eliminarFilasAll(cuerpoTabla,tablaLibro,btnEliminarL);
  eliminarFilasAll(cuerpoTablaA,tablaArticulo,btnEliminarA);

    break;
  case "2":
    game.style.display="none";
    Book.style.display = "flex";
    Article.style.display = "none";
requerido(Book);
    quitarRequerimiento(game);
quitarRequerimiento(Article);

  eliminarFilasAll(cuerpoTablaA,tablaArticulo,btnEliminarA);

    break;
  case "3":
    game.style.display="none";
    Book.style.display = "none";
    Article.style.display = "flex";
  requerido(Article);
  quitarRequerimiento(Book);
  quitarRequerimiento(game);
 eliminarFilasAll(cuerpoTabla,tablaLibro,btnEliminarL);
 
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
 function toggleSelect(checkbox) {
    const select = checkbox.nextElementSibling;
    if (checkbox.checked) {
      select.classList.remove("d-none");
    } else {
      select.classList.add("d-none");
      select.value = ""; // Reinicia el valor si se desmarca
    }
  }

  //---------------------------LIBRO-------------------------------------------
const libro = document.querySelector(".Libro");
const tablaLibro=libro.querySelector(".table"); 
const cuerpoTabla = tablaLibro.querySelector("#cuerpoTabla");
const btnAgregarL = libro.querySelector("#agregarFila");
const btnEliminarL = libro.querySelector("#eliminarFila");
//----------------------------ARTICULO------------------
const articulo=document.querySelector(".Articulo")
const tablaArticulo=articulo.querySelector(".table"); 
const cuerpoTablaA = tablaArticulo.querySelector("#cuerpoTabla2");
const btnAgregarA = articulo.querySelector("#agregarFila2");
const btnEliminarA = articulo.querySelector("#eliminarFila2");
//----------------------------------------------------------------
    function crearFila(x) {
      const fila = document.createElement("tr");
      if(x==1){
      fila.innerHTML = `
        <td><input type="text" name="isbn[]" class="form-control form-control-sm" required></td>

        <td><input type="number" name="paginas[]" class="form-control form-control-sm" min="1" required></td>

        <td><input type="text" name="editorial[]" class="form-control form-control-sm" required></td>
       
        <td><input type="checkbox" name="bolsillo[]"></td>
       
        <td>
          <select name="tapas[]" class="form-select form-select-sm" required>
            <option value="">--</option>
            <option value="dura">Dura</option>
            <option value="blanda">Blanda</option>
          </select>
        </td>
         <td>
          <select name="idiomas[]" class="form-select form-select-sm" required>
            <option value="INGLES">Ingles</option>
            <option value="ESPAÑOL">Español</option>
            <option value="ITALIANO">Italiano</option>
             <option value="FRANCES">Frances</option>
            <option value="RUSO">Ruso</option>
            <option value="ALEMAN">Aleman</option>
          </select>
        </td>
 <td> <input type="number" name="cantidad[]" class="form-control form-control-sm" step="0.01" min="0" required></td>
      
        <td><input type="number" name="factor[]" class="form-control form-control-sm" step="0.01" min="0" required></td>
      `;
   if(cuerpoTabla.rows.length==0){btnEliminarL.classList.remove("d-none");}
          cuerpoTabla.appendChild(fila);
       console.log("Fila agregada");
    }
    else  if(x==2){
fila.innerHTML= `
    <td>
          <select name="talles[]" class="form-select form-select-sm" required>
            <option value="">--</option>
            <option value="S">S</option>
            <option value="M">M</option>
                  <option value="XL">XL</option>
            <option value="XXXL">XXXL</option>
            <option value="N/A">N/A</option>
          </select>
        </td>

<td>
<div class="form-check form-check-inline">
  <input name="colores[]" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Azul">
  <label class="form-check-label" for="inlineCheckbox1">Azul</label>
</div>

<div class="form-check form-check-inline">
  <input name="colores[]"  class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Rojo">
  <label class="form-check-label" for="inlineCheckbox1">Rojo</label>
</div>
<div class="form-check form-check-inline">
  <input name="colores[]"  class="form-check-input" type="checkbox" id="inlineCheckbox3" value="Amarillo">
  <label class="form-check-label" for="inlineCheckbox2">Amarillo</label>
</div>

<div class="form-check form-check-inline">
  <input name="colores[]"  class="form-check-input" type="checkbox" id="inlineCheckbox4" value="Negro">
  <label class="form-check-label" for="inlineCheckbox1">Negro</label>
</div>

<div class="form-check form-check-inline">
  <input name="colores[]"  class="form-check-input" type="checkbox" id="inlineCheckbox5" value="Blanco">
  <label class="form-check-label" for="inlineCheckbox1">Blanco</label>
</div>

<div class="form-check form-check-inline">
  <input name="colores[]"  class="form-check-input" type="checkbox" id="inlineCheckbox6" value="N/a">
  <label class="form-check-label" for="inlineCheckbox1">N/A</label>
</div>
</td>

 <td>
  <input type="number" name="cantidad" class="form-control form-control-sm" step="0.01" min="0" required>
  </td>


`;
 if(cuerpoTablaA.rows.length==0){btnEliminarA.classList.remove("d-none");}
          cuerpoTablaA.appendChild(fila);
       console.log("Fila agregada");
    }  
}
//---------------------------------------------
      function eliminarFila(x){
if(x==1){

        rows=tablaLibro.getElementsByTagName("tr");
             tablaLibro.deleteRow(rows.length - 1);

if(cuerpoTabla.rows.length==0){btnEliminarL.classList.add("d-none");
  console.log("boton ocultado");
}
      }
else   if(x==2){
          tablaArticulo.deleteRow(rows.length - 1);

if(cuerpoTablaA.rows.length==0){btnEliminarA.classList.add("d-none");
  console.log("boton ocultado");
}
  }

    }
function eliminarFilasAll(cuerpo, tablax, button) {
  while (cuerpo.rows.length !== 0) {
    cuerpo.deleteRow(cuerpo.rows.length - 1);
  }
  button.classList.add("d-none");
  console.log("filas removidas");
}


btnAgregarL.addEventListener("click", () => crearFila(1));
btnEliminarL.addEventListener("click", () => eliminarFila(1));
btnAgregarA.addEventListener("click", () => crearFila(2));
btnEliminarA.addEventListener("click", () => eliminarFila(2));


