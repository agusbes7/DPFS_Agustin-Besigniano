    /*    function cambiarGrilla() {
            // Obtén el contenedor de la grilla y el aside
            var container = document.querySelector('.contenido');
            var aside = document.querySelector('.aside');
            var toggleButton = document.getElementById('toggleButton');
        
            // Alterna la clase 'hidden' en el aside
            aside.classList.toggle('hidden'); 
        
            // Alterna la clase 'cambiada' en el contenedor
            container.classList.toggle('cambiada');
        
            // Cambia el texto del botón dependiendo de si el aside está visible o no
            if (aside.classList.contains('hidden')) {
                toggleButton.innerHTML = '>'; // Cuando el aside está oculto, el botón muestra '>'
                toggleButton.classList.add('hidden');
            } else {
                toggleButton.innerHTML = '<'; // Cuando el aside está visible, el botón muestra '<'
                toggleButton.classList.remove('hidden');
            }
        }
        const aside = document.querySelector('.aside');
const mostrarBtn = document.getElementById('mostrarAside');
const ocultarBtn = document.getElementById('ocultarAside');
const container = document.querySelector('.container');

ocultarBtn.addEventListener('click', () => {
  aside.style.display = 'none'; // Oculta el aside
  mostrarBtn.style.display = 'block'; // Muestra el botón de 'Mostrar Aside'

  // Cambia la estructura del grid
  container.style.gridTemplateAreas = `
    "pagos pagos"
    "ofertas ofertas"
    "productos productos"
  `;
});

mostrarBtn.addEventListener('click', () => {
  aside.style.display = 'block'; // Muestra el aside nuevamente
  mostrarBtn.style.display = 'none'; // Oculta el botón de 'Mostrar Aside'

  // Restaura la estructura del grid
  container.style.gridTemplateAreas = `
    "pagos pagos"
    "aside ofertas"
    "aside productos"
  `;
});*/
