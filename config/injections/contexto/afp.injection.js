const { asClass, asFunction } = require('awilix');

const { Afp, AfpService, AfpBusiness, AfpRepository } = require('../../../context/system');
const { AfpController } = require('../../../api/controllers');
const { AfpRoute } = require('../../../api/routes/api');

module.exports = (container) => {

    container.register({
        Afp: asClass(Afp).singleton(),
        AfpRoute: asFunction(AfpRoute).singleton(),
        AfpService: asClass(AfpService).singleton(),
        AfpBusiness: asClass(AfpBusiness).singleton(),
        AfpRepository: asClass(AfpRepository).singleton(),
        AfpController: asClass(AfpController).singleton()
    })

    return container;
}