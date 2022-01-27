const { BaseService } = require('../../base');

class Afp extends BaseService {
    constructor({ AfpBusiness }) {
        super(AfpBusiness);
        this._afpBusiness = AfpBusiness;
    }
}
module.exports = Afp;