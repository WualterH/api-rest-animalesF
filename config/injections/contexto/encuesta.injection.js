const { asClass, asFunction } = require('awilix');

const { Encuesta, EncuestaService, EncuestaBusiness, EncuestaRepository } = require('../../../context/system');
const { EncuestaRoute } = require('../../../api/routes/api');
const { EncuestaController } = require('../../../api/controllers');

module.exports = (container) => {

    container.register({

        Encuesta: asClass(Encuesta).singleton(),
        EncuestaService: asClass(EncuestaService).singleton(),
        EncuestaBusiness: asClass(EncuestaBusiness).singleton(),
        EncuestaRepository: asClass(EncuestaRepository).singleton(),
        EncuestaRoute: asFunction(EncuestaRoute).singleton(),
        EncuestaController: asClass(EncuestaController).singleton()

    })

    return container;
}