const { Router } = require('express');

module.exports = function ({ EncuestadorController }) {

    const router = Router();

    router.get('/', EncuestadorController.ListarTodasLasEncuestadors.bind(EncuestadorController));
    router.get('/:id', EncuestadorController.buscarEncuestadorPorId.bind(EncuestadorController));
    router.put('/actualizar/:id', EncuestadorController.actualizarEncuestador.bind(EncuestadorController));
    router.delete('/eliminar/:id', EncuestadorController.eliminarEncuestador.bind(EncuestadorController));
    router.post('/crear', EncuestadorController.crearEncuestador.bind(EncuestadorController));

    return router;
}