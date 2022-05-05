-- --------------------------------------------------------
-- Host:                         
-- Versión del servidor:         8.0.28 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura para tabla biblioteca.detail
CREATE TABLE IF NOT EXISTS `detail` (
  `IdLote` int NOT NULL DEFAULT '0',
  `IdSocio` int NOT NULL DEFAULT '0',
  `IdLibro` int NOT NULL DEFAULT '0',
  `TituloLibro` varchar(200) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL DEFAULT '',
  `FechaSalida` date NOT NULL,
  `FechaEntrada` date NOT NULL DEFAULT '0000-00-00',
  KEY `IdLote` (`IdLote`),
  KEY `IdSocio` (`IdSocio`),
  KEY `IdLibro` (`IdLibro`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Volcando datos para la tabla biblioteca.detail: ~34 rows (aproximadamente)
/*!40000 ALTER TABLE `detail` DISABLE KEYS */;
INSERT INTO `detail` (`IdLote`, `IdSocio`, `IdLibro`, `TituloLibro`, `FechaSalida`, `FechaEntrada`) VALUES
	(1, 1, 1, 'La Biblia', '2022-04-22', '0000-00-00'),
	(4, 3, 5, 'Estadística', '2022-04-25', '2022-04-25'),
	(4, 3, 5, 'Estadística', '2022-04-25', '0000-00-00'),
	(6, 3, 4, 'Visual Basic 5', '2022-04-25', '0000-00-00'),
	(8, 5, 1, 'La Biblia', '2022-04-25', '0000-00-00'),
	(9, 5, 8, 'Fundamentals of Wavelets', '2022-04-25', '0000-00-00'),
	(9, 5, 3, 'Variable compleja', '2022-04-25', '0000-00-00'),
	(9, 5, 1, 'La Biblia', '2022-04-25', '0000-00-00'),
	(24, 5, 2, 'Don Quijote de la Mancha', '2022-04-26', '0000-00-00'),
	(28, 5, 2, 'Don Quijote de la Mancha', '2022-04-26', '0000-00-00'),
	(32, 5, 8, 'Fundamentals of Wavelets', '2022-04-26', '0000-00-00'),
	(32, 5, 2, 'Don Quijote de la Mancha', '2022-04-26', '0000-00-00'),
	(35, 5, 8, 'Fundamentals of Wavelets', '2022-04-26', '0000-00-00'),
	(39, 1, 8, 'Fundamentals of Wavelets', '2022-04-26', '0000-00-00'),
	(41, 2, 8, 'Fundamentals of Wavelets', '2022-04-26', '0000-00-00'),
	(43, 2, 3, 'Variable compleja', '2022-04-26', '0000-00-00'),
	(43, 2, 8, 'Fundamentals of Wavelets', '2022-04-26', '0000-00-00'),
	(45, 1, 1, 'La Biblia', '2022-04-27', '0000-00-00'),
	(47, 5, 2, 'Don Quijote de la Mancha', '2022-04-27', '0000-00-00'),
	(47, 5, 1, 'La Biblia', '2022-04-27', '0000-00-00'),
	(50, 5, 2, 'Don Quijote de la Mancha', '2022-04-27', '0000-00-00'),
	(54, 5, 2, 'Don Quijote de la Mancha', '2022-04-27', '0000-00-00'),
	(56, 5, 2, 'Don Quijote de la Mancha', '2022-04-27', '0000-00-00'),
	(58, 5, 2, 'Don Quijote de la Mancha', '2022-04-27', '0000-00-00'),
	(59, 3, 3, 'Variable compleja', '2022-04-27', '0000-00-00'),
	(60, 3, 3, 'Variable compleja', '2022-04-27', '0000-00-00'),
	(60, 3, 3, 'Variable compleja', '2022-04-27', '0000-00-00'),
	(60, 3, 3, 'Variable compleja', '2022-04-27', '0000-00-00'),
	(61, 3, 3, 'Variable compleja', '2022-04-27', '0000-00-00'),
	(61, 3, 3, 'Variable compleja', '2022-04-27', '0000-00-00'),
	(61, 3, 3, 'Variable compleja', '2022-04-27', '0000-00-00'),
	(70, 3, 6, 'Oracle Universit', '2022-04-27', '0000-00-00'),
	(71, 1, 2, 'Don Quijote de la Mancha', '2022-04-28', '0000-00-00'),
	(71, 1, 1, 'La Biblia', '2022-04-28', '0000-00-00');
/*!40000 ALTER TABLE `detail` ENABLE KEYS */;

-- Volcando estructura para tabla biblioteca.libros
CREATE TABLE IF NOT EXISTS `libros` (
  `IdLibro` int unsigned NOT NULL AUTO_INCREMENT,
  `Autor` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `Titulo` varchar(200) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `Editorial` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `IdiomaOriginal` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `FechaDeAlta` date NOT NULL,
  `DiasPermitidos` smallint NOT NULL,
  PRIMARY KEY (`IdLibro`),
  UNIQUE KEY `IdLibro` (`IdLibro`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Volcando datos para la tabla biblioteca.libros: ~9 rows (aproximadamente)
/*!40000 ALTER TABLE `libros` DISABLE KEYS */;
INSERT INTO `libros` (`IdLibro`, `Autor`, `Titulo`, `Editorial`, `IdiomaOriginal`, `FechaDeAlta`, `DiasPermitidos`) VALUES
	(1, 'Varios', 'La Biblia', 'Anaya', 'Hebreo', '2022-03-31', 12),
	(2, 'Miguel de Cervantes', 'Don Quijote de la Mancha', 'Anaya', 'Castellano', '1899-11-30', 15),
	(3, 'Murray Spiegel', 'Variable compleja', 'McGraw Hil', 'Ingles', '2022-03-28', 15),
	(4, 'E. Petroustsos', 'Visual Basic 5', 'Anaya', 'Ingles', '0000-00-00', 12),
	(5, 'Murray Spiegel', 'Estadística', 'McGraw Hill ', 'Ingles', '2022-04-22', 12),
	(6, 'Nancy Greenberg', 'Oracle Universit', 'Oracle Corp', 'Ingles', '2022-03-29', 20),
	(7, 'Ramalho', 'Clipper 5.01', 'McGraw Hill ', 'Ingles', '2022-04-22', 12),
	(8, 'Goswami, Jaideva', 'Fundamentals of Wavelets', '???', 'Ingles', '2022-03-28', 12),
	(9, 'Foreman, John', 'Data Smart', 'Anaya', 'Ingles', '0000-00-00', 12),
	(10, 'Hawking, Stephen', 'God Created the Integers', 'McGraw Hill ', 'Ingles', '0000-00-00', 20);
/*!40000 ALTER TABLE `libros` ENABLE KEYS */;

-- Volcando estructura para tabla biblioteca.master
CREATE TABLE IF NOT EXISTS `master` (
  `IdLote` int NOT NULL AUTO_INCREMENT,
  `IdSocio` int NOT NULL DEFAULT '0',
  `NombreSocio` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `FechaSalida` date NOT NULL,
  `FechaEntrada` date NOT NULL DEFAULT '0000-00-00',
  PRIMARY KEY (`IdLote`),
  KEY `IdSocio` (`IdSocio`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Volcando datos para la tabla biblioteca.master: ~59 rows (aproximadamente)
/*!40000 ALTER TABLE `master` DISABLE KEYS */;
INSERT INTO `master` (`IdLote`, `IdSocio`, `NombreSocio`, `FechaSalida`, `FechaEntrada`) VALUES
	(1, 1, 'Alonso Dominguez Escalona', '2022-04-22', '0000-00-00'),
	(3, 2, 'Maria Belmonte Murillo', '2022-04-25', '0000-00-00'),
	(4, 3, 'Jose Gomez Trujillo', '2022-04-25', '2022-04-25'),
	(5, 4, 'Antonio Sanchez Moreno', '2022-04-25', '0000-00-00'),
	(6, 3, 'Jose Gomez Trujillo', '2022-04-25', '0000-00-00'),
	(8, 5, 'Alberto Gomez Sanchez', '2022-04-25', '0000-00-00'),
	(9, 5, 'Alberto Gomez Sanchez', '2022-04-25', '0000-00-00'),
	(12, 3, 'Jose Gomez Trujillo', '2022-04-25', '0000-00-00'),
	(13, 3, 'Jose Gomez Trujillo', '2022-04-25', '2022-04-25'),
	(15, 1, 'Alonso Dominguez Escalona', '2022-04-26', '0000-00-00'),
	(16, 1, 'Alonso Dominguez Escalona', '2022-04-26', '0000-00-00'),
	(17, 5, 'Alberto Gomez Sanchez', '2022-04-26', '0000-00-00'),
	(18, 5, 'Alberto Gomez Sanchez', '2022-04-26', '0000-00-00'),
	(19, 3, 'Jose Gomez Trujillo', '2022-04-26', '0000-00-00'),
	(21, 3, 'Jose Gomez Trujillo', '2022-04-26', '0000-00-00'),
	(22, 4, 'Antonio Sanchez Moreno', '2022-04-26', '0000-00-00'),
	(23, 4, 'Antonio Sanchez Moreno', '2022-04-26', '0000-00-00'),
	(24, 5, 'Alberto Gomez Sanchez', '2022-04-26', '2022-04-26'),
	(25, 5, 'Alberto Gomez Sanchez', '2022-04-26', '0000-00-00'),
	(26, 5, 'Alberto Gomez Sanchez', '2022-04-26', '0000-00-00'),
	(27, 5, 'Alberto Gomez Sanchez', '2022-04-26', '2022-04-26'),
	(28, 5, 'Alberto Gomez Sanchez', '2022-04-26', '0000-00-00'),
	(29, 5, 'Alberto Gomez Sanchez', '2022-04-26', '0000-00-00'),
	(30, 5, 'Alberto Gomez Sanchez', '2022-04-26', '2022-04-26'),
	(31, 5, 'Alberto Gomez Sanchez', '2022-04-26', '0000-00-00'),
	(32, 5, 'Alberto Gomez Sanchez', '2022-04-26', '0000-00-00'),
	(33, 5, 'Alberto Gomez Sanchez', '2022-04-26', '0000-00-00'),
	(34, 5, 'Alberto Gomez Sanchez', '2022-04-26', '0000-00-00'),
	(35, 5, 'Alberto Gomez Sanchez', '2022-04-26', '0000-00-00'),
	(36, 5, 'Alberto Gomez Sanchez', '2022-04-26', '0000-00-00'),
	(37, 5, 'Alberto Gomez Sanchez', '2022-04-26', '0000-00-00'),
	(38, 1, 'Alonso Dominguez Escalona', '2022-04-26', '0000-00-00'),
	(39, 1, 'Alonso Dominguez Escalona', '2022-04-26', '0000-00-00'),
	(40, 2, 'Maria Belmonte Murillo', '2022-04-26', '0000-00-00'),
	(41, 2, 'Maria Belmonte Murillo', '2022-04-26', '0000-00-00'),
	(42, 2, 'Maria Belmonte Murillo', '2022-04-26', '0000-00-00'),
	(43, 2, 'Maria Belmonte Murillo', '2022-04-26', '0000-00-00'),
	(44, 2, 'Maria Belmonte Murillo', '2022-04-26', '0000-00-00'),
	(45, 1, 'Alonso Dominguez Escalona', '2022-04-27', '0000-00-00'),
	(46, 5, 'Alberto Gomez Sanchez', '2022-04-27', '0000-00-00'),
	(47, 5, 'Alberto Gomez Sanchez', '2022-04-27', '0000-00-00'),
	(48, 5, 'Alberto Gomez Sanchez', '2022-04-27', '0000-00-00'),
	(49, 5, 'Alberto Gomez Sanchez', '2022-04-27', '0000-00-00'),
	(50, 5, 'Alberto Gomez Sanchez', '2022-04-27', '0000-00-00'),
	(51, 5, 'Alberto Gomez Sanchez', '2022-04-27', '0000-00-00'),
	(53, 5, 'Alberto Gomez Sanchez', '2022-04-27', '0000-00-00'),
	(54, 5, 'Alberto Gomez Sanchez', '2022-04-27', '0000-00-00'),
	(56, 5, 'Alberto Gomez Sanchez', '2022-04-27', '0000-00-00'),
	(57, 5, 'Alberto Gomez Sanchez', '2022-04-27', '0000-00-00'),
	(58, 5, 'Alberto Gomez Sanchez', '2022-04-27', '0000-00-00'),
	(59, 3, 'Jose Gomez Trujillo', '2022-04-27', '0000-00-00'),
	(60, 3, 'Jose Gomez Trujillo', '2022-04-27', '0000-00-00'),
	(61, 3, 'Jose Gomez Trujillo', '2022-04-27', '0000-00-00'),
	(65, 5, 'Alberto Gomez Sanchez', '2022-04-27', '0000-00-00'),
	(67, 3, 'Jose Gomez Trujillo', '2022-04-27', '0000-00-00'),
	(68, 3, 'Jose Gomez Trujillo', '2022-04-27', '0000-00-00'),
	(69, 3, 'Jose Gomez Trujillo', '2022-04-27', '0000-00-00'),
	(70, 3, 'Jose Gomez Trujillo', '2022-04-27', '2022-04-27'),
	(71, 1, 'Alonso Dominguez Escalona', '2022-04-28', '0000-00-00');
/*!40000 ALTER TABLE `master` ENABLE KEYS */;

-- Volcando estructura para tabla biblioteca.socios
CREATE TABLE IF NOT EXISTS `socios` (
  `IdSocio` int unsigned NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `PrimerApellido` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `SegundoApellido` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `FechaAlta` date NOT NULL,
  `DNI` varchar(10) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `Direccion` varchar(200) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `Email` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `CodigoPostal` varchar(5) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `Ciudad` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `TelefonoMovil` varchar(15) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `TelefonoFijo` varchar(15) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL DEFAULT '1234',
  `PersonaContacto` varchar(50) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`IdSocio`),
  UNIQUE KEY `IdSocios` (`IdSocio`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Volcando datos para la tabla biblioteca.socios: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `socios` DISABLE KEYS */;
INSERT INTO `socios` (`IdSocio`, `Nombre`, `PrimerApellido`, `SegundoApellido`, `FechaNacimiento`, `FechaAlta`, `DNI`, `Direccion`, `Email`, `CodigoPostal`, `Ciudad`, `TelefonoMovil`, `TelefonoFijo`, `PersonaContacto`) VALUES
	(1, 'Alonso', 'Dominguez', 'Escalona', '1965-02-18', '2022-04-20', '27382345V', 'C/San Miguel 2', 'alonso.caspi@gmail.com', '29651', 'Mijas', '607969637', '607969637', 'Alonso'),
	(2, 'Maria', 'Belmonte', 'Murillo', '2022-04-21', '2022-04-21', '27380380P', 'C/San Felix 27', 'mariabelmonte@gmail.com', '29649', 'Mijas', '5899876', '12345678', 'Maria'),
	(3, 'Jose', 'Gomez', 'Trujillo', '2022-04-01', '2022-04-01', '132233445C', 'C/ Salinas 13', 'josegt@hotmail.com', '22222', 'Fuengirola', '34455667', '976544556', 'Jose'),
	(4, 'Antonio', 'Sanchez', 'Moreno', '2022-04-01', '2022-03-30', '21234432A', 'Avda. Santa Lucia 7', 'antoniosm@hotmail.com', '29651', 'Mijas-Costa', '609968574', '952344556', 'Antonio'),
	(5, 'Alberto', 'Gomez', 'Sanchez', '2022-04-01', '2022-03-30', '1223344C', 'C/ San Lucas 28', 'albertogomez@gmail.com', '29640', 'Fuengirola', '670988776', '952122334', 'Alberto');
/*!40000 ALTER TABLE `socios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
