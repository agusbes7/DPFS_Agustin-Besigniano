# Bienvenidos

![Banner de github](./public/estructuras/Medias/Imagenes/Banner-3.jpg)

---  

###  Presentacion   **SPRINT 2**
    
>A continuacion les comparto el trello del desafio que arme como guia para este sprint  [Desafio digital house](https://trello.com/invite/b/67d358788411ca33fc61e5bd/ATTIe1de96c027078418d2cf4be7685b84c3A37DD0EA/proyecto-dh)      

![Logo digital House](./public/estructuras/Medias/Modelos/logo%20digital.png)

A partir de este punto incursionaré en Sprints 2 en adelante.
El readme del sprint anterior lo deje disponible dentro de la carpeta de **'history readme'** como forma de tener seguimientos del proyecto ademas de poder verlo en el historial. No profundizaré demasiado en cosas ya mencionadas en el sprint anterior. Por ultimo tambien queda la retroalimentacion generada del sprint anterior. Sugiero leer ambas antes de venir aqui.  

---  
Estuve mucho tiempo ausente al seguir el proyecto con la constancia que me hubiese gustado por cuestiones extras. Sin embargo comenzamos a agarrar ritmo de nuevo y progresar con los contenidos del curso y del sprint para ponernos al dia.  
Pase varios dias desarrollando y refinando el index que posee estructuras basicas comunes a todas las secciones como el banner,footer,header,contenido(variable de seccion en seccion), la barra de navegacion. Tambien aplique mejoras significativas y media querys para hacer responsivo el mismo. Por ultimo agregue algun que otro codigo js que requeria para lograr el comportamiento deseado en mi pagina. Cuando quedo en condiciones optimas(siempre se puede mejorar y refinar, pero tambien es cierto que el proceso suele ser agotador y a veces es mejor cambiar de tarea para no agotarse). 
![Index.html](./public/estructuras/Medias/maquetas/vlc-record-2025-03-17-04h10m05s-2025-03-17%2004-07-29.mp4-.gif)

Del sprint anterior mi estructura de proyecto era la siguiente 

📁Home
📁Producto
📁Login
>Podria incluir el registro como seccion extra pero decidi hacerlo dentro mismo login.  

No considere la seccion del carrito debi agregarla posteriormente y hacer manualmente el diseño, pero con la ventaja de ya contar con el esquema basico de todas las secciones solo debia rellenar el contenido y la mejor estructura en la que pensé fue una tabla de items  
📁Carrito


A su vez mi proyecto requiere 3 secciones extras dedicadas a los productos con estructura muy similar al Home

📁Juegos  
📁Articulos  
📁Libros

 Tambien inclui una link de contacto en la navegacion que estoy en proceso de decidir si es mejor dejar como un mensaje o un bloque extra al oprimirlo o crear una seccion nueva entera. Lo consideré mas como informacion adicional de direccion,correo,telefono, pero podria incluir secciones de mensajes con un formulario y permitir enviarlos desde el mismo sitio.
 
 📁Por ultimo dentro del carrito Añadí una seccion para el proceso de compra aunque podria haberse realizado como una seccion más. Durante esta parte surgieron  muchas preguntas que aun esperan respuesta sobre mecanismos de seguridad y el procesamiento de la informacion sensible de tarjetas y otras medios. Estoy indecisos sobre si me conviene usar pasarelas dejando el proceso de compra en manos externa o si procesar pagos  en la pagina enviando hacia un 3ro los datos de la tarjeta o la informacion necesaria para generar  ordenes de pago.

 en definitiva el esquema dentro de lo publico es el siguiente  
 index.html  
Funciones.js  
 📁estructuras  
   |_📁Medias  
   |_📁Stilos  
   |_📁Secciones  
..............|_Juegoshtml   
..............|_Articulos.html    
..............|_Libros.html  
..............|_Producto.html  
..............|_Login.html  
..............|_Carrito.html  

>cuando avance con estas secciones sin estar familiarizado con js mas avanzado y herramientas como node js, express, el implementar bases de datos no estaba seguro de como podia cargar miles de productos aqui y tener todo controlado cada seccion con boton correspondiente y  tantos comportamiento tan milimetricos que era dificil iba a tener documentos tendiendo a infinito como en limites.Me preocupe demasiado por controlar cosas que excedian el control que html y css podian brindar y eso alargo mucho el proceso de trabajo. Luego comence a avanzar con los contenidos  del curso y me despreocupe de eso, ademas eran problemas para otros sprints. 
Dejo algunas imagenes de secciones para que puedan observar 
---


![alt text](./public/estructuras/Medias/Imagenes/banXH0tDw.jpg)

## **INDEX**
>![alt text](<public/estructuras/Medias/maquetas/sprint 2/index1.jpg>)  

>![alt text](<public/estructuras/Medias/maquetas/sprint 2/index2.jpg>)

## **CARRITO**
>![alt text](<public/estructuras/Medias/maquetas/sprint 2/carrito1.jpg>)  

>![alt text](<public/estructuras/Medias/maquetas/sprint 2/carrito2.jpg>)  

>![alt text](<public/estructuras/Medias/maquetas/sprint 2/carrito3.jpg>)  
>![alt text](<public/estructuras/Medias/maquetas/sprint 2/carrito4.jpg>)

## **LOGIN**  
>![alt text](<public/estructuras/Medias/maquetas/sprint 2/login1.jpg>)  

>![alt text](<public/estructuras/Medias/maquetas/sprint 2/login2.jpg>)  

## **PRODUCTO**   

>![alt text](<public/estructuras/Medias/maquetas/sprint 2/producto1.jpg>)  

>![alt text](<public/estructuras/Medias/maquetas/sprint 2/producto2.jpg>)
