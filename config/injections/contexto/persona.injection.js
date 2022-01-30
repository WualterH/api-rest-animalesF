const { asClass } = require('awilix');

const { Persona, PersonaRepository } = require('../../../context/system');

module.exports = (container) => {

    container.register({
        Persona: asClass(Persona).singleton(),                
        PersonaRepository: asClass(PersonaRepository).singleton(),        
    })

    return container;
}