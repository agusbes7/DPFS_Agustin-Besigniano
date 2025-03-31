class Producto {
        nombre;
imagen;
descripcion;
accesibilidad;
precio;
tipo;
categoria;
peso;
        constructor(nombre, imagen, descripcion, accesibilidad, precio, tipo, categoria, peso) {
            this.nombre = nombre;
            this.imagen = imagen;
            this.descripcion = descripcion;
            this.accesibilidad = accesibilidad;
            this.precio = precio;
            this.tipo = tipo;
            this.categoria = categoria;
            this.peso = peso;
        }
    }
    
    class Juego extends Producto {
   edad;
    Jugadores;
    Duracion;
        constructor(producto, edad, cantidadJugadores, duracion) {
            super(producto.nombre, producto.imagen, producto.descripcion, producto.accesibilidad, producto.precio, producto.tipo, producto.categoria, producto.peso);
            this.edad = edad;
            this.cantidadJugadores = cantidadJugadores;
            this.duracion = duracion;
        }
    }
    
    class Libro extends Producto {
        ISBN;
Autor;
Paginas;
FechaDePublicacion;
idiomas;
Formato;
Editorial;
        constructor(producto, ISBN, autor, paginas, fechaDePublicacion, idiomas, formato, editorial) {
            super(producto.nombre, producto.imagen, producto.descripcion, producto.accesibilidad, producto.precio, producto.tipo, producto.categoria, producto.peso);
            this.ISBN = ISBN;
            this.autor = autor;
            this.paginas = paginas;
            this.fechaDePublicacion = fechaDePublicacion;
            this.idiomas = idiomas;
            this.formato = formato;
            this.editorial = editorial;
        }
    }
    
    class Articulo extends Producto {
        Talle; //M/s,/XL/XXL/XXXL / 48-52
        color; //Variable dependiendo el producto definir options Verde,azul,rojo,amarillo}
    
        constructor(producto, talle, color) {
            super(producto.nombre, producto.imagen, producto.descripcion, producto.accesibilidad, producto.precio, producto.tipo, producto.categoria, producto.peso);
            this.talle = talle;
            this.color = color;}
    }

class Dirección{
    apodo;
    calle;
    numero;
    pisoDepto;
    provincia;
constructor(provincia,calle,numero,pisoDepto,apodo){
    this.calle=calle;
    this.provincia=provincia;
    this.numero=numero;
    this.pisoDepto=pisoDepto;
    this.apodo=apodo;
}}
class  Tarjeta{
nombreTitular;
fechaDeVencimiento;
DNI;
NumeroTarjeta;
codigoSeguridad;
Tipo; //visa,mastercad,american express;
clase; //credito,debito

constructor(NombreDelTitular,fechaDeVencimiento,DNI,NumeroDeTarjeta,codigoSeguridad,Tipo,clase){

this.nombreTitular=NombreDelTitular;
this.fechaDeVencimiento=fechaDeVencimiento;
this.DNI=DNI;
this.NumeroTarjeta=NumeroDeTarjeta;
this.codigoSeguridad=codigoSeguridad;
this.Tipo=Tipo;
this.clase=clase;}
}

class Usuario {

        nombre;
        apellido;
        nombreDeUsuario;
        correo;
        telefono;
        direccion
      
        constructor(nombre, apellido, nombreDeUsuario, correo, telefono, direccion, tarjeta, contrasena) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.nombreDeUsuario = nombreDeUsuario;
            this.correo = correo;
            this.telefono = telefono;
            this.direccion = new Set();
            this.direccion.add(new Dirección(direccion.provincia,direccion.calle,direccion.numero,direccion.pisoDepto,direccion.apodo));
            this.tarjetas = new Set();
  this.tarjetas.add(new Tarjeta(tarjeta.NombreDelTitular,tarjeta.fechaDeVencimiento,tarjeta.DNI,tarjeta.NumeroDeTarjeta,tarjeta.codigoSeguridad,tarjeta.Tipo,tarjeta.clase))
        };
    }
module.exports={Dirección,Tarjeta,Usuario,Producto, Articulo,Juego,Libro};
    