const mapper = require("automapper-js");

class BaseBusiness {
  constructor(EntityRepository, entityToMap) {
    this._entityRepository = EntityRepository;
    this.entityToMap = entityToMap;
  }

  async getAll() {
    return await this._entityRepository.getAll();
  }

  async get(id) {
    return await this._entityRepository.get(id)
  }

  async create(entity) {
    entity = mapper(this.entityToMap, entity);
    const createdEntity = await this._entityRepository.create(entity);
    return createdEntity;
  }

  async update(id, entity) {
    entity.id = id;
    const updatedEntity = await this._entityRepository.update(id, entity);
    return mapper(this.entityToMap, updatedEntity);
  }

  async delete(id) {
    return await this._entityRepository.delete(id);
  }
}

module.exports = BaseBusiness;
