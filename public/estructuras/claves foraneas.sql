Use gameChronicle;
select * from juegos;
SELECT * FROM libros;
select * FROM categorias;

select * from productos;
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

-- Tamaño
ALTER TABLE productos
ADD Tamanio VARCHAR(50);
ALTER TABLE JUEGOS 
ADD Jugadores Varchar(100) NOT NULL;
SELECT * FROM libros;
ALTER TABLE libros
DROP Editorial;
CREATE TABLE formatos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  Tipo ENUM('TAPA DURA','TAPA BLANDA') NOT NULL,
  Bolsillo Boolean Default TRUE,
  editorial VARCHAR(100),
  factor_precio DECIMAL(8,2) -- ej: 1.20 (20% más caro)
 );
CREATE TABLE libro_formato (
  id_libro INT,
  id_formato INT,
  PRIMARY KEY (id_libro, id_formato),
  FOREIGN KEY (id_libro) REFERENCES libros(id),
  FOREIGN KEY (id_formato) REFERENCES formatos(id)
  );