const { BaseBusiness } = require('../../base');
const { Encuestador } = require('../../../class');

class EncuestadorBusiness extends BaseBusiness {
    constructor({ EncuestadorRepository }) {
        super(EncuestadorRepository, Encuestador);
        this._EncuestadorRepository = EncuestadorRepository;
    }

}
module.exports = EncuestadorBusiness;