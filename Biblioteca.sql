-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         5.5.8 - MySQL Community Server (GPL)
-- SO del servidor:              Win32
-- HeidiSQL Versión:             8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura para tabla biblioteca.detail
CREATE TABLE IF NOT EXISTS `detail` (
  `IdLote` int(11) NOT NULL DEFAULT '0',
  `IdSocio` int(11) NOT NULL DEFAULT '0',
  `IdLibro` int(11) NOT NULL DEFAULT '0',
  `TituloLibro` varchar(200) COLLATE latin1_spanish_ci NOT NULL DEFAULT '',
  `FechaSalida` date NOT NULL,
  `FechaEntrada` date NOT NULL,
  KEY `IdLote` (`IdLote`),
  KEY `IdSocio` (`IdSocio`),
  KEY `IdLibro` (`IdLibro`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- La exportación de datos fue deseleccionada.


-- Volcando estructura para tabla biblioteca.libros
CREATE TABLE IF NOT EXISTS `libros` (
  `IdLibro` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Autor` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `Titulo` varchar(200) COLLATE latin1_spanish_ci NOT NULL,
  `Editorial` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `PrimeraEdicion` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `IdiomaOriginal` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `FechaDePublicacion` date NOT NULL,
  `ISBN` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `FechaDeAlta` date NOT NULL,
  `DiasPermitidos` int(11) NOT NULL,
  PRIMARY KEY (`IdLibro`),
  UNIQUE KEY `IdLibro` (`IdLibro`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- La exportación de datos fue deseleccionada.


-- Volcando estructura para tabla biblioteca.master
CREATE TABLE IF NOT EXISTS `master` (
  `IdLote` int(11) NOT NULL AUTO_INCREMENT,
  `IdSocio` int(11) NOT NULL DEFAULT '0',
  `NombreSocio` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `FechaSalida` date NOT NULL,
  `FechaEntrada` date NOT NULL,
  PRIMARY KEY (`IdLote`),
  KEY `IdSocio` (`IdSocio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- La exportación de datos fue deseleccionada.


-- Volcando estructura para tabla biblioteca.socios
CREATE TABLE IF NOT EXISTS `socios` (
  `IdSocio` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `PrimerApellido` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `SegundoApellido` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `FechaAlta` date NOT NULL,
  `DNI` varchar(10) COLLATE latin1_spanish_ci NOT NULL,
  `Direccion` varchar(200) COLLATE latin1_spanish_ci NOT NULL,
  `Email` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `CodigoPostal` varchar(5) COLLATE latin1_spanish_ci NOT NULL,
  `Ciudad` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `TelefonoMovil` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `TelefonoFijo` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `PersonaContacto` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`IdSocio`),
  UNIQUE KEY `IdSocios` (`IdSocio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- La exportación de datos fue deseleccionada.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
