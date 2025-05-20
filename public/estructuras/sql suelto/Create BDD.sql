CREATE DATABASE gameChronicle;
Use gameChronicle;
-- SUPERCLASE
CREATE TABLE Productos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(60) NOT NULL,
  imagen VARCHAR(100) ,
  descripcion TEXT Not NULL,
  accesibilidad TEXT,
  precio DECIMAL(10, 2) NOT NULL,
  peso DECIMAL(10, 2) );
 
  -- USERs 
CREATE TABLE Usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    nombreDeUsuario VARCHAR(50) UNIQUE,
    correo VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(400) NOT NULL,
    telefono VARCHAR(20),
    admin BOOLEAN DEFAULT FALSE
);
-- DIRECCIONES
CREATE TABLE Direcciones(
  id INT PRIMARY KEY AUTO_INCREMENT,
  Alias VARCHAR(30),
  Calle VARCHAR(50) NOT NULL,
  Numero INT,
  PisoDepto VARCHAR(20),
  Provincia VARCHAR(20),
  Localidad VARCHAR(30)
);
-- HEREDA DE PRODUCTOS
CREATE TABLE Juegos(
id INT PRIMARY KEY AUTO_INCREMENT,
edad INT,
Duracion INT);
-- HEREDA DE PRODUCTOS
CREATE TABLE Libros(
  id INT PRIMARY KEY AUTO_INCREMENT,
  ISBN VARCHAR(30) NOT NULL,
  autor VARCHAR(100) NOT NULL,
  paginas INT NOT NULL,
  Fecha_De_Publicacion YEAR);
SELECT * FROM LIBROS;
-- HEREDA DE PRODUCTOS
CREATE TABLE Articulos(
id INT PRIMARY KEY AUTO_INCREMENT
);
-- generos comunes y no comunes 
CREATE TABLE Categorias(
id INT PRIMARY KEY AUTO_INCREMENT,
genero VARCHAR(50) NOT NULL UNIQUE,
-- puede haber un genero fantastico que sea de libro y articulo el tipo es "JUEGO,ARTICULO"
Tipo ENUM('JUEGO', 'LIBRO', 'ARTICULO','ARTICULO,LIBRO','ARTICULO,JUEGO','JUEGO,LIBRO') NOT NULL
);
-- TARJETAS 
CREATE TABLE Tarjetas(
id INT PRIMARY KEY AUTO_INCREMENT,
Fecha_De_vencimiento  DATE ,
Titular VARCHAR(70) NOT NULL,
DNI VARCHAR(10) NOT NULL,
Numero_Tarjeta VARCHAR(16) NOT NULL UNIQUE,
Tipo ENUM('CREDITO','DEBITO'),
Clase ENUM('Visa', 'MasterCard', 'American Express', 'Naranja', 'Maestro', 'Cabal', 'Discover') NOT NULL
);
-- VENTAS  REALIZADAS
CREATE TABLE Ventas(
id INT PRIMARY KEY AUTO_INCREMENT,
Fecha_De_Compra  DATETIME NOT NULL ,
MONTO DECIMAL NOT NULL,
Medio_De_Pago ENUM('EFECTIVO','TARJETA','MP'),
Direccion VARCHAR(100) NOT NULL
);
-- TABLA INTERMEDIA ENTRE PRODUCTOS Y VENTAS 
CREATE TABLE Venta_Productos(
id_venta INT NOT NULL,
id_producto INT NOT NULL,
  cantidad INT NOT NULL,
  precio_unit DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (id_venta, id_producto),
    FOREIGN KEY (id_venta) REFERENCES Ventas(id),
    FOREIGN KEY (id_producto) REFERENCES Productos(id));
    
-- TABLAS DE TALLES Y ARTICULOS  PARA LOS ARTICULOS
CREATE TABLE talles(
id INT PRIMARY KEY AUTO_INCREMENT,
Tamanio VARCHAR(8) NOT NULL UNIQUE);
CREATE TABLE talles_color(
id_talle INT,
id_Articulo INT,
color VARCHAR(200) NOT NULL,
PRIMARY KEY (id_talle, id_Articulo),
    FOREIGN KEY (id_talle) REFERENCES talles(id),
    FOREIGN KEY (id_Articulo) REFERENCES articulos(id));

-- ------------------------------- 
-- Agregar columna y clave foránea en juegos
ALTER TABLE juegos
ADD COLUMN id_producto INT NOT NULL;

ALTER TABLE juegos
ADD CONSTRAINT fk_juegos_producto
FOREIGN KEY (id_producto) REFERENCES Productos(id);
-- Agregar columna y clave foránea en articulos
ALTER TABLE articulos
ADD COLUMN id_producto INT NOT NULL;

ALTER TABLE articulos
ADD CONSTRAINT fk_articulos_producto
FOREIGN KEY (id_producto) REFERENCES Productos(id);

-- Agregar columna y clave foránea en libros
ALTER TABLE libros
ADD COLUMN id_producto INT NOT NULL;

ALTER TABLE libros
ADD CONSTRAINT fk_libros_producto
FOREIGN KEY (id_producto) REFERENCES Productos(id);

ALTER TABLE libros ADD COLUMN
editorial VARCHAR(50) NOT NULL;
ALTER TABLE libros ADD COLUMN
formato ENUM('TAPA DURA','TAPA BLANDA') NOT NULL;
ALTER TABLE libros ADD COLUMN
bolsillo boolean default TRUE;
ALTER TABLE libros ADD COLUMN
cantidad INT UNSIGNED NOT NULL;
ALTER table libros ADD COLUMN 
idioma ENUM('ESPAÑOL','FRANCES','INGLES','ALEMAN','ITALIANO','RUSO') NOT NULL DEFAULT 'ESPAÑOL';
ALTER TABLE libro DROP COLUMN factor_precio;
ALTER TABLE libros ADD COLUMN
factor_precio DECIMAL(4,2) UNSIGNED NOT NULL;
-- Tamaño
ALTER TABLE productos ADD Tamanio VARCHAR(50);
ALTER TABLE JUEGOS  ADD Jugadores Varchar(100) NOT NULL;


ALTER TABLE juegos ADD COLUMN
cantidad INT unsigned NOT NULL;
ALTER TABLE articulos ADD COLUMN
cantidad INT unsigned NOT NULL;
-- Relacion del libro_formato con los idiomas disponibles 

-- secciones de usuario y ventas
-- Usuario con varias direcciones almacenadas 
CREATE TABLE Usuario_Direccion(
  id_usuario INT,
  id_direccion INT,
  PRIMARY KEY (id_usuario, id_direccion),
  FOREIGN KEY ( id_direccion) REFERENCES direcciones(id),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);
-- usuario con varias tarjetas cargadas
CREATE TABLE Usuario_Tarjeta(
  id_usuario INT,
  id_tarjeta INT,
  PRIMARY KEY (id_usuario, id_tarjeta),
  FOREIGN KEY ( id_tarjeta) REFERENCES tarjetas(id),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);
CREATE TABLE Ventas_Usuario(
  id_usuario INT,
  id_venta INT,
  PRIMARY KEY (id_usuario, id_venta),
  FOREIGN KEY ( id_venta) REFERENCES Ventas(id),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);
CREATE TABLE Categorias_Producto(
  id_producto INT,
  id_categoria INT,
  PRIMARY KEY (id_categoria, id_producto),
  FOREIGN KEY ( id_producto) REFERENCES productos(id),
  FOREIGN KEY (id_categoria) REFERENCES categorias(id)
);
