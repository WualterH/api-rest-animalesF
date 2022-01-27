const { Router } = require('express');

module.exports = function ({ PrevisionController }) {
    const router = Router();

    router.get('/', PrevisionController.listarPrevisiones.bind(PrevisionController));
    router.get('/:id', PrevisionController.buscarPrevisionPorId.bind(PrevisionController));
    router.put('/actualizar/:id', PrevisionController.actualizarPrevision.bind(PrevisionController));
    router.post('/crear', PrevisionController.crearPrevision.bind(PrevisionController));
    router.delete('/eliminar/:id', PrevisionController.eliminarPrevision.bind(PrevisionController));

    return router;
}