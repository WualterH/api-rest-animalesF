const { Router } = require('express');

module.exports = function ({ PermisoController }) {
    const router = Router();

    router.get('/', PermisoController.getAllPermisos.bind(PermisoController));
    router.get('/:id', PermisoController.getPermisoById.bind(PermisoController));
    router.put('/actualizar/:id', PermisoController.updatePermiso.bind(PermisoController));
    router.delete('/eliminar/:id', PermisoController.deletePermiso.bind(PermisoController));
    router.post('/crear', PermisoController.createPermiso.bind(PermisoController));
    return router;
}