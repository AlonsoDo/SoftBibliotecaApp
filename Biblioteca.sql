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
  `FechaEntrada` date NOT NULL,
  KEY `IdLote` (`IdLote`),
  KEY `IdSocio` (`IdSocio`),
  KEY `IdLibro` (`IdLibro`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- La exportación de datos fue deseleccionada.

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

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla biblioteca.master
CREATE TABLE IF NOT EXISTS `master` (
  `IdLote` int NOT NULL AUTO_INCREMENT,
  `IdSocio` int NOT NULL DEFAULT '0',
  `NombreSocio` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `FechaSalida` date NOT NULL,
  `FechaEntrada` date NOT NULL,
  PRIMARY KEY (`IdLote`),
  KEY `IdSocio` (`IdSocio`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- La exportación de datos fue deseleccionada.

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- La exportación de datos fue deseleccionada.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
