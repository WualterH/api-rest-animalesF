const { BaseBusiness } = require('.././../base');
const { EstadoCivil } = require('../../../class');

class EstadoCivilBusiness extends BaseBusiness {
    constructor({ EstadoCivilRepository }) {
        super(EstadoCivilRepository, EstadoCivil);
        this._estadoCivilRepository = EstadoCivilRepository;
    }
}
module.exports = EstadoCivilBusiness;