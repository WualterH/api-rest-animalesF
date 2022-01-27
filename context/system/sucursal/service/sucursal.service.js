const { BaseService } = require('../../base');

class SucursalService extends BaseService {
    constructor({ SucursalBusiness }) {
        super(SucursalBusiness);
        this._SucursalBusiness = SucursalBusiness;
    }
}

module.exports = SucursalService;
