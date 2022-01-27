const { Router } = require('express');

module.exports = function ({ RolUsuarioController }) {

    const router = Router();

    router.get('/', RolUsuarioController.todoLosRoles.bind(RolUsuarioController));
    router.get('/:id', RolUsuarioController.buscarRolPorId.bind(RolUsuarioController));
    router.post('/crear', RolUsuarioController.crearRol.bind(RolUsuarioController));
    router.put('/actualizar/:id', RolUsuarioController.actualizarRol.bind(RolUsuarioController));
    return router;
}