const { BaseBusiness } = require('../../base');
const { Encuesta } = require('../../../class');

class EncuestaBusiness extends BaseBusiness {
    constructor({ EncuestaRepository, PersonaRepository, EncuestaPersonaRepository }) {
        super(EncuestaRepository, Encuesta);
        this._encuestaRepository = EncuestaRepository;
        this._personaRepository = PersonaRepository;
        this._encuestaPersonaRepository = EncuestaPersonaRepository;
    }
    async crearEncuesta(entity){            
        const createPersona = await this._personaRepository.crearPersona(entity);        
        entity.idPersona = createPersona.id;
        const createEncuesta = await this._encuestaRepository.crearEncuesta(entity);        
        entity.idEncuesta = createEncuesta.id;
        const createEncuestaPersona = await this._encuestaPersonaRepository.crearEncuestaPersona(entity);        
        return createEncuesta;      
    }

    async getAllEncuestas() {
        return await this._entityRepository.getAllEncuestas();
    }

    async getPorId(id) {
        const getEncuestas = await this._entityRepository.getPorId(id);        
        return getEncuestas
    }

    async encuestaPorId(id) {
        return await this._entityRepository.encuestaPorId(id)
    }

    async updateEncuesta(id, entity) {
        entity.id = id;
        const updatedEntity = await this._entityRepository.updateEncuesta(id, entity.animal);
        const idPersona = await this._entityRepository.encuestaPorId(entity.id)        
        const updateNombre = await this._personaRepository.updateNombre(idPersona.encuestaPersona.personas.id, entity.nombre);                
        const updateApellido = await this._personaRepository.updateApellido(idPersona.encuestaPersona.personas.id, entity.apellido);                
        return "Encuesta editado con exito"
      }

}
module.exports = EncuestaBusiness;