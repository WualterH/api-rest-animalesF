const { asClass, asFunction } = require('awilix');

const { Prevision, PrevisionService, PrevisionBusiness, PrevisionRepository } = require('../../../context/system');
const { PrevisionController } = require('../../../api/controllers');
const { PrevisionRoute } = require('../../../api/routes/api');

module.exports = (container) => {

    container.register({

        Prevision: asClass(Prevision).singleton(),
        PrevisionRoute: asFunction(PrevisionRoute).singleton(),
        PrevisionService: asClass(PrevisionService).singleton(),
        PrevisionBusiness: asClass(PrevisionBusiness).singleton(),
        PrevisionRepository: asClass(PrevisionRepository).singleton(),
        PrevisionController: asClass(PrevisionController).singleton()

    });

    return container;
}