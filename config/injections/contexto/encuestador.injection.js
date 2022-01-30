const { asClass, asFunction } = require('awilix');

const { Encuestador, EncuestadorService, EncuestadorBusiness, EncuestadorRepository } = require('../../../context/system');
const { EncuestadorRoute } = require('../../../api/routes/api');
const { EncuestadorController } = require('../../../api/controllers');

module.exports = (container) => {

    container.register({

        Encuestador: asClass(Encuestador).singleton(),
        EncuestadorService: asClass(EncuestadorService).singleton(),
        EncuestadorBusiness: asClass(EncuestadorBusiness).singleton(),
        EncuestadorRepository: asClass(EncuestadorRepository).singleton(),
        EncuestadorRoute: asFunction(EncuestadorRoute).singleton(),
        EncuestadorController: asClass(EncuestadorController).singleton()

    })

    return container;
}