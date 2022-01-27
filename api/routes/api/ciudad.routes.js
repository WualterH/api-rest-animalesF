const { Router } = require('express');

module.exports = function ({ CiudadController }) {

    const router = Router();

    router.get('/', CiudadController.ListarTodasLasCiudades.bind(CiudadController));
    router.get('/:id', CiudadController.buscarCiudadPorId.bind(CiudadController));
    router.put('/actualizar/:id', CiudadController.actualizarCiudad.bind(CiudadController));
    router.delete('/eliminar/:id', CiudadController.eliminarCiudad.bind(CiudadController));
    router.post('/crear', CiudadController.crearCiudad.bind(CiudadController));

    return router;
}