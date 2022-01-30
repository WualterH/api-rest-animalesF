const { Router } = require('express');

module.exports = function ({ EncuestaController }) {

    const router = Router();

    router.get('/', EncuestaController.ListarTodasLasEncuestas.bind(EncuestaController));
    router.get('/:id', EncuestaController.buscarEncuestaPorId.bind(EncuestaController));
    router.put('/actualizar/:id', EncuestaController.actualizarEncuesta.bind(EncuestaController));
    router.delete('/eliminar/:id', EncuestaController.eliminarEncuesta.bind(EncuestaController));
    router.post('/crear', EncuestaController.crearEncuesta.bind(EncuestaController));

    return router;
}