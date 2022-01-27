const { BaseBusiness } = require('../../base');
const { Afp } = require('../../../class');

class AfpBusiness extends BaseBusiness {
    constructor({ AfpRepository }) {
        super(AfpRepository, Afp);
        this._afpRepository = AfpRepository;
    }
}
module.exports = AfpBusiness;