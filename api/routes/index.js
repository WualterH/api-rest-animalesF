const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

module.exports = function ({ EstadoCivilRoute, PrevisionRoute, AfpRoute, EmpresaRoute, CiudadRoute, SucursalRoute, authMiddleware, UserRoutes, RolRoute, PermisoRoute, RolPermisoRoute, EncuestaRoute, EncuestadorRoute }) {

  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression());

  apiRoute.use("/usuario", UserRoutes);
  apiRoute.use("/rol", RolRoute, authMiddleware);
  apiRoute.use("/permiso", PermisoRoute, authMiddleware);
  apiRoute.use("/rolpermiso", RolPermisoRoute, authMiddleware);
  apiRoute.use("/sucursal", SucursalRoute);
  apiRoute.use("/ciudad", CiudadRoute);
  apiRoute.use("/empresa", EmpresaRoute);
  apiRoute.use("/afp", AfpRoute);
  apiRoute.use("/prevision", PrevisionRoute);
  apiRoute.use("/estado", EstadoCivilRoute);
  apiRoute.use("/encuesta", EncuestaRoute);
  apiRoute.use("/encuestador", EncuestadorRoute);

  //ruta padre
  router.use("/animalesF", apiRoute);

  return router;

}