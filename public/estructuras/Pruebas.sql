USE gamechronicle;

SELECT * FROM articulos;
SELECT * FROM categorias_productos;
SELECT * FROM direcciones;
SELECT * FROM editoriales;
SELECT * FROM formatos;
SELECT * FROM idioma_libro_formato;

SELECT * FROM juegos;
SELECT * FROM libro_formato;
SELECT * FROM libros;
SELECT * FROM productos;

-- ver un producto de tipo libro
SELECT *
FROM libros l
JOIN productos p ON l.id = p.id;

