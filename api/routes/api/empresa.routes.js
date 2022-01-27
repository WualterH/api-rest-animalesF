const { Router } = require('express');

module.exports = function ({ EmpresaController }) {

    const router = Router();

    router.get('/', EmpresaController.listarTodasLasEmpresas.bind(EmpresaController));
    router.post('/crear', EmpresaController.crearEmpresa.bind(EmpresaController));
    router.get('/run/:run', EmpresaController.buscarEmpresaPorRun.bind(EmpresaController));
    router.get('/:id', EmpresaController.buscarEmpresaPorId.bind(EmpresaController));
    router.put('/actualizar/:id', EmpresaController.actualizarEmpresa.bind(EmpresaController));
    router.delete('/eliminar/:id', EmpresaController.eliminarEmpresaPorId.bind(EmpresaController));

    return router;

}