const { BaseService } = require('../../base');

class EstadoCivilService extends BaseService {
    constructor({ EstadoCivilBusiness }) {
        super(EstadoCivilBusiness);
        this._estadoCivilBusiness = EstadoCivilBusiness;
    }
}
module.exports = EstadoCivilService;