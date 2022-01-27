const { asClass, asFunction } = require('awilix');

const { Empresa, EmpresaBusiness, EmpresaRepository, EmpresaService } = require('../../../context/system');
const { EmpresaController } = require('../../../api/controllers');
const { EmpresaRoute } = require('../../../api/routes/api');

module.exports = (container) => {

    container.register({

        Empresa: asClass(Empresa).singleton(),
        EmpresaRoute: asFunction(EmpresaRoute).singleton(),
        EmpresaBusiness: asClass(EmpresaBusiness).singleton(),
        EmpresaRepository: asClass(EmpresaRepository).singleton(),
        EmpresaService: asClass(EmpresaService).singleton(),
        EmpresaController: asClass(EmpresaController).singleton(),

    });

    return container;
}