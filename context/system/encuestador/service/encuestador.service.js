const { BaseService } = require('../../base');

class EncuestadorService extends BaseService {

    constructor({ EncuestadorBusiness }) {
        super(EncuestadorBusiness);
        this._EncuestadorRepository = EncuestadorBusiness;
    }
}

module.exports = EncuestadorService;