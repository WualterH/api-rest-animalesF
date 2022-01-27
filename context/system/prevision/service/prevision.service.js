const { BaseService } = require('../../base');

class PrevisionService extends BaseService {
    constructor({ PrevisionBusiness }) {
        super(PrevisionBusiness);
        this._previsionBusiness = PrevisionBusiness;
    }
}
module.exports = PrevisionService;