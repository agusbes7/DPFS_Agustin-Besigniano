-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gamechronicle
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articulos`
--

DROP TABLE IF EXISTS `articulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articulos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_producto` int NOT NULL,
  `cantidad` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_articulos_producto` (`id_producto`),
  CONSTRAINT `fk_articulos_producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulos`
--

LOCK TABLES `articulos` WRITE;
/*!40000 ALTER TABLE `articulos` DISABLE KEYS */;
/*!40000 ALTER TABLE `articulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `genero` varchar(50) NOT NULL,
  `Tipo` enum('JUEGO','LIBRO','ARTICULO','ARTICULO,LIBRO','ARTICULO,JUEGO','JUEGO,LIBRO') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `genero` (`genero`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Harry Potter','ARTICULO,LIBRO'),(2,'El señor de los anillos','ARTICULO,LIBRO'),(3,'Marvel','ARTICULO,JUEGO'),(4,'DC','ARTICULO,JUEGO'),(5,'Coleccionables','ARTICULO'),(6,'Aventuras','JUEGO'),(7,'Deporte','JUEGO'),(8,'Estrategia','JUEGO'),(9,'Arcade','JUEGO'),(10,'EuroGames','JUEGO'),(11,'cartas','JUEGO'),(12,'Rol','JUEGO'),(13,'Educativos','JUEGO'),(14,'LIBROS','LIBRO'),(15,'Familiares','LIBRO'),(16,'Ficción','LIBRO'),(17,'No Ficción','LIBRO'),(18,'Ciencia Ficción','LIBRO'),(19,'Historia','LIBRO'),(20,'Comics','LIBRO'),(21,'Mangas','LIBRO'),(22,'Fantastico','LIBRO'),(23,'Cosmere','LIBRO');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias_producto`
--

DROP TABLE IF EXISTS `categorias_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias_producto` (
  `id_producto` int NOT NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id_categoria`,`id_producto`),
  KEY `id_producto` (`id_producto`),
  CONSTRAINT `categorias_producto_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`),
  CONSTRAINT `categorias_producto_ibfk_2` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias_producto`
--

LOCK TABLES `categorias_producto` WRITE;
/*!40000 ALTER TABLE `categorias_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorias_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direcciones`
--

DROP TABLE IF EXISTS `direcciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direcciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Alias` varchar(30) DEFAULT NULL,
  `Calle` varchar(50) NOT NULL,
  `Numero` int DEFAULT NULL,
  `PisoDepto` varchar(20) DEFAULT NULL,
  `Provincia` varchar(20) DEFAULT NULL,
  `Localidad` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direcciones`
--

LOCK TABLES `direcciones` WRITE;
/*!40000 ALTER TABLE `direcciones` DISABLE KEYS */;
INSERT INTO `direcciones` VALUES (1,'HP','Camino privet',123,'0','Entre Rios','Parana'),(2,'work','argentina',716,NULL,'Entre Rios ','Parana');
/*!40000 ALTER TABLE `direcciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `idiomas`
--

DROP TABLE IF EXISTS `idiomas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `idiomas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Idioma` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Idioma` (`Idioma`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `idiomas`
--

LOCK TABLES `idiomas` WRITE;
/*!40000 ALTER TABLE `idiomas` DISABLE KEYS */;
INSERT INTO `idiomas` VALUES (2,'Español'),(5,'Francés'),(1,'Inglés'),(3,'Italiano'),(4,'Ruso');
/*!40000 ALTER TABLE `idiomas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `juegos`
--

DROP TABLE IF EXISTS `juegos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `juegos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `edad` int DEFAULT NULL,
  `Duracion` int DEFAULT NULL,
  `id_producto` int NOT NULL,
  `Jugadores` varchar(100) NOT NULL,
  `cantidad` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_juegos_producto` (`id_producto`),
  CONSTRAINT `fk_juegos_producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juegos`
--

LOCK TABLES `juegos` WRITE;
/*!40000 ALTER TABLE `juegos` DISABLE KEYS */;
/*!40000 ALTER TABLE `juegos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `libros`
--

DROP TABLE IF EXISTS `libros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `libros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ISBN` varchar(30) NOT NULL,
  `autor` varchar(100) NOT NULL,
  `paginas` int NOT NULL,
  `Fecha_De_Publicacion` year DEFAULT NULL,
  `id_producto` int NOT NULL,
  `editorial` varchar(50) NOT NULL,
  `formato` enum('TAPA DURA','TAPA BLANDA') NOT NULL,
  `bolsillo` tinyint(1) DEFAULT '1',
  `cantidad` int unsigned NOT NULL,
  `idioma` enum('ESPAÑOL','FRANCES','INGLES','ALEMAN','ITALIANO','RUSO') NOT NULL DEFAULT 'ESPAÑOL',
  `factor_precio` decimal(10,0) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_libros_producto` (`id_producto`),
  CONSTRAINT `fk_libros_producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `libros`
--

LOCK TABLES `libros` WRITE;
/*!40000 ALTER TABLE `libros` DISABLE KEYS */;
INSERT INTO `libros` VALUES (1,'978-84-18974-95-3','Neil Gaiman',224,2021,1,'ovni Press','TAPA BLANDA',1,2,'ESPAÑOL',1),(2,'9781401236158','Neil Gaiman',240,1989,2,'ovni Press','TAPA BLANDA',1,3,'INGLES',1),(3,'9788401337208','Patrick Rothfuss',872,2007,3,'DeBolsillo','TAPA DURA',0,4,'ESPAÑOL',2),(4,'9788401337635','Patrick Rothfuss',1190,2011,4,'DeBolsillo','TAPA DURA',0,4,'INGLES',1),(5,'9788401352768','Patrick Rothfuss',150,2014,5,'DeBolsillo','TAPA BLANDA',1,1,'ESPAÑOL',1),(6,'9788445071754','Isaac Asimov',256,1951,6,'FPB','TAPA BLANDA',1,1,'RUSO',3),(7,'9788445071761','Isaac Asimov',270,1952,7,'FPB','TAPA BLANDA',1,0,'ESPAÑOL',3),(8,'9788445071778','Isaac Asimov',290,1953,10,'La Nacion','TAPA DURA',0,2,'ITALIANO',1),(9,'9788445071228','Isaac Asimov',310,1953,10,'abm','TAPA DURA',1,2,'ESPAÑOL',2);
/*!40000 ALTER TABLE `libros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `descripcion` text NOT NULL,
  `accesibilidad` text,
  `precio` decimal(10,2) NOT NULL,
  `peso` decimal(10,2) DEFAULT NULL,
  `Tamanio` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Sandman vol 2: La casa de las muñecas','./estructuras/Medias/productos/libro2.webp','Durante el cautiverio de Morfeo, cuatro arcanos mayores escaparon del Sueño y vagan ahora por el mundo despierto: Bruto, Glob, El Corintio y El Campo de Violín. Criaturas poderosas cuyo albedrío preocupa sobremanera al onírico Eterno, quien tras recuperar la plenitud de su poder y visitar el mismísimo Infierno, detecta la existencia de un vórtice en su reino. A punto están de cruzarse los caminos del Rey del Sueño y la joven Rose Walker, y la integridad de todos los soñadores –y del mundo entero– está en juego. La casa de muñecas (The Sandman núms. del 9 al 16 USA) presenta ante los lectores a personajes fundamentales en el desarrollo de esta fascinante historia urdida por Neil Gaiman','Portada que muestra a un hombre sosteniendo a un tiritero',22000.00,1.00,'20x30x5'),(2,'Sandman Vol. 1','./estructuras/Medias/productos/libro1.webp','Primer volumen de la saga de Sandman','Portada ilustrada con Morfeo sentado en un trono.',8999.99,0.50,'Mediano'),(3,'El nombre del viento','./estructuras/Medias/productos/libro6.jpg','Primer libro de la Crónica del Asesino de Reyes','Portada con un joven encapuchado frente al viento.',12499.50,0.60,'Mediano'),(4,'El temor de un hombre sabio','./estructuras/Medias/productos/libro9.jpg','Segundo libro de la Crónica del Asesino de Reyes','Portada con Kvothe sobre un fondo oscuro.',13999.99,0.70,'Grande'),(5,'La música del silencio','./estructuras/Medias/productos/libro7.jpg','Relato complementario de Auri en el mundo de Rothfuss','Portada etérea con silueta de una joven.',8999.00,0.40,'Pequeño'),(6,'Fundación','./estructuras/Medias/productos/fundacion e imperio.jpg','Primer libro del ciclo de la Fundación','Portada con galaxias y estructura tecnológica.',11000.00,0.55,'Mediano'),(7,'Fundación e Imperio','./estructuras/Medias/productos/assimov fin de la eternidad.jpg','Segundo libro del ciclo de la Fundación','Portada con una nave en el espacio profundo.',11500.00,0.58,'Mediano'),(8,'Segunda Fundación','./estructuras/Medias/productos/sueños de robot.jpg','Tercer libro del ciclo de la Fundación','Portada con figuras en túnicas sobre una ciudad futurista.',12000.00,0.60,'Mediano'),(9,'Viaje al centro de la Tierra','','Novela de aventuras de Julio Verne','Portada con túneles subterráneos y criaturas prehistóricas.',9500.00,0.52,'Mediano'),(10,'20.000 leguas de viaje submarino','','Aventura náutica con el Capitán Nemo','Portada con el Nautilus rodeado de criaturas marinas.',9700.00,0.56,'Mediano');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talles`
--

DROP TABLE IF EXISTS `talles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Tamanio` varchar(8) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Tamanio` (`Tamanio`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talles`
--

LOCK TABLES `talles` WRITE;
/*!40000 ALTER TABLE `talles` DISABLE KEYS */;
INSERT INTO `talles` VALUES (3,'M'),(6,'N/A'),(2,'S'),(4,'XL'),(1,'XS'),(5,'XXXL');
/*!40000 ALTER TABLE `talles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talles_color`
--

DROP TABLE IF EXISTS `talles_color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talles_color` (
  `id_talle` int NOT NULL,
  `id_Articulo` int NOT NULL,
  `color` varchar(200) NOT NULL,
  PRIMARY KEY (`id_talle`,`id_Articulo`),
  KEY `id_Articulo` (`id_Articulo`),
  CONSTRAINT `talles_color_ibfk_1` FOREIGN KEY (`id_talle`) REFERENCES `talles` (`id`),
  CONSTRAINT `talles_color_ibfk_2` FOREIGN KEY (`id_Articulo`) REFERENCES `articulos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talles_color`
--

LOCK TABLES `talles_color` WRITE;
/*!40000 ALTER TABLE `talles_color` DISABLE KEYS */;
/*!40000 ALTER TABLE `talles_color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjetas`
--

DROP TABLE IF EXISTS `tarjetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tarjetas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Fecha_De_vencimiento` date DEFAULT NULL,
  `Titular` varchar(70) NOT NULL,
  `DNI` varchar(10) NOT NULL,
  `Numero_Tarjeta` varchar(16) NOT NULL,
  `Tipo` enum('CREDITO','DEBITO') DEFAULT NULL,
  `Clase` enum('Visa','MasterCard','American Express','Naranja','Maestro','Cabal','Discover') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Numero_Tarjeta` (`Numero_Tarjeta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjetas`
--

LOCK TABLES `tarjetas` WRITE;
/*!40000 ALTER TABLE `tarjetas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjetas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_direccion`
--

DROP TABLE IF EXISTS `usuario_direccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_direccion` (
  `id_usuario` int NOT NULL,
  `id_direccion` int NOT NULL,
  PRIMARY KEY (`id_usuario`,`id_direccion`),
  KEY `id_direccion` (`id_direccion`),
  CONSTRAINT `usuario_direccion_ibfk_1` FOREIGN KEY (`id_direccion`) REFERENCES `direcciones` (`id`),
  CONSTRAINT `usuario_direccion_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_direccion`
--

LOCK TABLES `usuario_direccion` WRITE;
/*!40000 ALTER TABLE `usuario_direccion` DISABLE KEYS */;
INSERT INTO `usuario_direccion` VALUES (1,1),(1,2);
/*!40000 ALTER TABLE `usuario_direccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_tarjeta`
--

DROP TABLE IF EXISTS `usuario_tarjeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_tarjeta` (
  `id_usuario` int NOT NULL,
  `id_tarjeta` int NOT NULL,
  PRIMARY KEY (`id_usuario`,`id_tarjeta`),
  KEY `id_tarjeta` (`id_tarjeta`),
  CONSTRAINT `usuario_tarjeta_ibfk_1` FOREIGN KEY (`id_tarjeta`) REFERENCES `tarjetas` (`id`),
  CONSTRAINT `usuario_tarjeta_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_tarjeta`
--

LOCK TABLES `usuario_tarjeta` WRITE;
/*!40000 ALTER TABLE `usuario_tarjeta` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_tarjeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `nombreDeUsuario` varchar(50) DEFAULT NULL,
  `correo` varchar(100) NOT NULL,
  `password` varchar(400) NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `correo` (`correo`),
  UNIQUE KEY `nombreDeUsuario` (`nombreDeUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Agustin','Besigniano','Agusbes','aguscabj10.ab@gmai.com','1234','11111111',1),(2,'pepe','House','pepeDh','pepedh@hotmail.com','encriptar','222212',0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta_productos`
--

DROP TABLE IF EXISTS `venta_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venta_productos` (
  `id_venta` int NOT NULL,
  `id_producto` int NOT NULL,
  `cantidad` int NOT NULL,
  `precio_unit` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_venta`,`id_producto`),
  KEY `id_producto` (`id_producto`),
  CONSTRAINT `venta_productos_ibfk_1` FOREIGN KEY (`id_venta`) REFERENCES `ventas` (`id`),
  CONSTRAINT `venta_productos_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta_productos`
--

LOCK TABLES `venta_productos` WRITE;
/*!40000 ALTER TABLE `venta_productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `venta_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Fecha_De_Compra` datetime NOT NULL,
  `MONTO` decimal(10,0) NOT NULL,
  `Medio_De_Pago` enum('EFECTIVO','TARJETA','MP') DEFAULT NULL,
  `Direccion` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_usuario`
--

DROP TABLE IF EXISTS `ventas_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas_usuario` (
  `id_usuario` int NOT NULL,
  `id_venta` int NOT NULL,
  PRIMARY KEY (`id_usuario`,`id_venta`),
  KEY `id_venta` (`id_venta`),
  CONSTRAINT `ventas_usuario_ibfk_1` FOREIGN KEY (`id_venta`) REFERENCES `ventas` (`id`),
  CONSTRAINT `ventas_usuario_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_usuario`
--

LOCK TABLES `ventas_usuario` WRITE;
/*!40000 ALTER TABLE `ventas_usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'gamechronicle'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-20 20:35:13
