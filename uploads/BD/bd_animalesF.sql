-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 02-02-2022 a las 04:57:45
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_animalesF`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `encuesta`
--

CREATE TABLE `encuesta` (
  `id` int(11) NOT NULL,
  `animal` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idEncuestador` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `encuestadors`
--

CREATE TABLE `encuestadors` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `encuestaPersonas`
--

CREATE TABLE `encuestaPersonas` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idEncuesta` int(11) DEFAULT NULL,
  `idPersona` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `userAt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rolPermisos`
--

CREATE TABLE `rolPermisos` (
  `id` int(11) NOT NULL,
  `permisoId` int(11) NOT NULL,
  `rolUsuarioId` int(11) NOT NULL,
  `userAt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rolUsuarios`
--

CREATE TABLE `rolUsuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  `userAt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rolUsuarios`
--

INSERT INTO `rolUsuarios` (`id`, `nombre`, `descripcion`, `estado`, `userAt`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin', 1, NULL, '2022-02-02 04:52:54', '2022-02-02 04:52:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `estado_usuario` tinyint(1) DEFAULT NULL,
  `nombre_usuario` varchar(255) NOT NULL,
  `email_usuario` varchar(255) NOT NULL,
  `clave_usuario` varchar(255) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `userAt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `estado_usuario`, `nombre_usuario`, `email_usuario`, `clave_usuario`, `id_rol`, `userAt`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Juan', 'juan@gmail.com', '$2a$10$UaP/VHVpHaJCB1L3TO/gGuDXx8oUWG3NYlDN2uEB0SOOq3opghGK6', 1, NULL, '2022-02-02 04:53:18', '2022-02-02 04:53:18'),
(4, 1, 'Marcelo', 'marcelo@gmail.com', '$2a$10$UaP/VHVpHaJCB1L3TO/gGuDXx8oUWG3NYlDN2uEB0SOOq3opghGK6', 1, NULL, '2022-02-02 04:55:44', '2022-02-02 04:55:44'),
(5, 1, 'Antonia', 'antonia@gmail.com', '$2a$10$UaP/VHVpHaJCB1L3TO/gGuDXx8oUWG3NYlDN2uEB0SOOq3opghGK6', 1, NULL, '2022-02-02 04:56:08', '2022-02-02 04:56:08');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `encuesta`
--
ALTER TABLE `encuesta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEncuestador` (`idEncuestador`);

--
-- Indices de la tabla `encuestadors`
--
ALTER TABLE `encuestadors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `encuestadors_nombre_unique` (`nombre`),
  ADD UNIQUE KEY `encuestadors_nombre` (`nombre`);

--
-- Indices de la tabla `encuestaPersonas`
--
ALTER TABLE `encuestaPersonas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEncuesta` (`idEncuesta`),
  ADD KEY `idPersona` (`idPersona`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rolPermisos`
--
ALTER TABLE `rolPermisos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `permisoId` (`permisoId`),
  ADD KEY `rolUsuarioId` (`rolUsuarioId`);

--
-- Indices de la tabla `rolUsuarios`
--
ALTER TABLE `rolUsuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuarios_email_usuario_unique` (`email_usuario`),
  ADD UNIQUE KEY `usuarios_email_usuario` (`email_usuario`),
  ADD KEY `id_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `encuesta`
--
ALTER TABLE `encuesta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `encuestadors`
--
ALTER TABLE `encuestadors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `encuestaPersonas`
--
ALTER TABLE `encuestaPersonas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rolPermisos`
--
ALTER TABLE `rolPermisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rolUsuarios`
--
ALTER TABLE `rolUsuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `encuesta`
--
ALTER TABLE `encuesta`
  ADD CONSTRAINT `encuesta_ibfk_1` FOREIGN KEY (`idEncuestador`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `encuestaPersonas`
--
ALTER TABLE `encuestaPersonas`
  ADD CONSTRAINT `encuestapersonas_ibfk_3` FOREIGN KEY (`idEncuesta`) REFERENCES `encuesta` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `encuestapersonas_ibfk_4` FOREIGN KEY (`idPersona`) REFERENCES `personas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rolPermisos`
--
ALTER TABLE `rolPermisos`
  ADD CONSTRAINT `rolpermisos_ibfk_3` FOREIGN KEY (`permisoId`) REFERENCES `permisos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rolpermisos_ibfk_4` FOREIGN KEY (`rolUsuarioId`) REFERENCES `rolUsuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `rolUsuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
