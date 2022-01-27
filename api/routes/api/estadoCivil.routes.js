const { Router } = require('express');

module.exports = function ({ EstadoCivilController }) {
    const router = Router();

    router.get('/', EstadoCivilController.listarEstadoCivil.bind(EstadoCivilController));
    router.get('/:id', EstadoCivilController.buscarEstadoCivil.bind(EstadoCivilController));
    router.post('/', EstadoCivilController.crearEstadoCivil.bind(EstadoCivilController));
    router.put('/:id', EstadoCivilController.actualizarEstadoCivil.bind(EstadoCivilController));
    router.delete('/:id', EstadoCivilController.eliminarEstadoCivil.bind(EstadoCivilController));

    return router;

}