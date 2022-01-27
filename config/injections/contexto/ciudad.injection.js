const { asClass, asFunction } = require('awilix');

const { Ciudad, CiudadService, CiudadBusiness, CiudadRepository } = require('../../../context/system');
const { CiudadRoute } = require('../../../api/routes/api');
const { CiudadController } = require('../../../api/controllers');

module.exports = (container) => {

    container.register({

        Ciudad: asClass(Ciudad).singleton(),
        CiudadService: asClass(CiudadService).singleton(),
        CiudadBusiness: asClass(CiudadBusiness).singleton(),
        CiudadRepository: asClass(CiudadRepository).singleton(),
        CiudadRoute: asFunction(CiudadRoute).singleton(),
        CiudadController: asClass(CiudadController).singleton()

    })

    return container;
}