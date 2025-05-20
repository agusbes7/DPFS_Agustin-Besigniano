USE gamechronicle;

SELECT * FROM articulos;
SELECT * FROM categorias_productos;
SELECT * FROM direcciones;
SELECT * FROM editoriales;
SELECT * FROM juegos;
SELECT * FROM libros;
SELECT * FROM productos;
SELECT * FROM talles;
SELECT * FROM talles_color;
SELECT * FROM usuario_direccion;
SELECT * FROM usuarios;
-- ver un producto de tipo libro
SELECT *
FROM libros l
JOIN productos p ON l.id = p.id;
-- probando mostrar las direcciones de un usuario
SELECT *
FROM usuarios u
JOIN usuario_direccion ud ON u.id = ud.id_usuario
JOIN direcciones d ON ud.id_direccion = d.id;

