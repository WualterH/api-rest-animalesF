const { Router } = require('express');

module.exports = function ({ RolPermisoController }) {
    const router = Router();

    router.get('/', RolPermisoController.todoLosRolPermisos.bind(RolPermisoController));
    router.get('/:id', RolPermisoController.listarPermisosPorRol.bind(RolPermisoController));
    router.post('/crear', RolPermisoController.crearRolPermiso.bind(RolPermisoController));
    router.delete('/eliminar', RolPermisoController.eliminarRolYPermiso.bind(RolPermisoController));
    return router;
}