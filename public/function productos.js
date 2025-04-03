// Obtener todos los contenedores .btn
  const btnContainers = document.querySelectorAll(".btn");
const btnDetalle=document.querySelector(".seccion_btn");
  // Elementos globales del carrito
  const carritoIconSpan = document.querySelector(".carrito_icon span");
  const mensajeCarrito = document.querySelector(".mensaje_carrito p");

  btnContainers.forEach((btnContainer) => {
      console.log("Se detectó un producto");

      // Obtener los elementos dentro de cada .btn
      const btn1 = btnContainer.querySelector(".btn1");
      const btn2 = btnContainer.querySelector(".btn2");
      const btnAgregar = btn1.querySelector("button");

      // Evento para añadir al carrito
      btnAgregar.addEventListener("click", function () {
          btn1.style.display = "none"; // Ocultar "Añadir al carrito"
          btn2.style.display = "flex"; // Mostrar botones de cantidad

          actualizarCarritoGlobal(1); // Aumenta el contador global en 1
      });

      // Inicialmente oculta btn2
      btn2.style.display = "none";
  });

  // Función para actualizar el carrito global
  function actualizarCarritoGlobal(nuevaCantidad) {
      let totalItems = parseInt(carritoIconSpan.textContent) || 0;
      totalItems += nuevaCantidad; // Incrementa la cantidad

      carritoIconSpan.textContent = totalItems > 0 ? totalItems : "∅";
      mensajeCarrito.textContent = totalItems > 0 ? "Hay elementos en el carrito" : "No hay artículos en el carrito aún";
  }
