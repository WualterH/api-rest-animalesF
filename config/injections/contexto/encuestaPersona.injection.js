const { asClass } = require('awilix');

const { EncuestaPersona, EncuestaPersonaRepository } = require('../../../context/system');

module.exports = (container) => {

    container.register({
        EncuestaPersona: asClass(EncuestaPersona).singleton(),                
        EncuestaPersonaRepository: asClass(EncuestaPersonaRepository).singleton(),        
    })

    return container;
}