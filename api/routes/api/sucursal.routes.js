const { Router } = require('express');

module.exports = function ({ sucursalController }) {

    const router = Router();

    router.get('/', sucursalController.listarTodosLasSucursales.bind(sucursalController));
    router.get('/:id', sucursalController.buscarSucursalPorId.bind(sucursalController));
    router.put('/:id', sucursalController.actualizarSucursal.bind(sucursalController));
    router.post('/', sucursalController.crearSucursal.bind(sucursalController));
    router.delete('/:id', sucursalController.eliminarSucursal.bind(sucursalController));
    return router;
}