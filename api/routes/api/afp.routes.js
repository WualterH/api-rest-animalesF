const { Router } = require('express');

module.exports = ({ AfpController }) => {

    const router = Router();

    router.get('/', AfpController.listarTodasLasAfp.bind(AfpController));
    router.get('/:id', AfpController.buscarAfpPorId.bind(AfpController));
    router.put('/actualizar/:id', AfpController.actualizarAfp.bind(AfpController));
    router.post('/crear', AfpController.crearAfp.bind(AfpController));
    router.delete('/eliminar/:id', AfpController.eliminarAfp.bind(AfpController));

    return router;

}