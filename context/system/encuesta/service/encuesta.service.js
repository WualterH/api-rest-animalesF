const { BaseService } = require('../../base');

class EncuestaService extends BaseService {

    constructor({ EncuestaBusiness }) {
        super(EncuestaBusiness);
        this._encuestaBusiness = EncuestaBusiness;
    }
    async crearEncuesta(entity){        
        return await this._encuestaBusiness.crearEncuesta(entity);
    }
    async getAllEncuestas() {
        const entities = await this._entityBusiness.getAllEncuestas();
        return entities;
    }
    async getPorId(id) {
        const entity = await this._entityBusiness.getPorId(id);
        return entity;
    }
    async encuestaPorId(id) {
        const entity = await this._entityBusiness.encuestaPorId(id);
        return entity;
    }
    async updateEncuesta(id, entity) {
        const updatedEntity = await this._entityBusiness.updateEncuesta(id, entity);
        return updatedEntity;
      }
      async getAnimal(id) {
        const entity = await this._entityBusiness.getAnimal(id);
        return entity;
      }
}

module.exports = EncuestaService;