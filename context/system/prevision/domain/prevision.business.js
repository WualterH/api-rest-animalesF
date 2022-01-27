const { BaseBusiness } = require('../../base');
const { Prevision } = require('../../../class')

class PrevisionBusiness extends BaseBusiness {
    constructor({ PrevisionRepository }) {
        super(PrevisionRepository, Prevision);
        this._previsionRepository = PrevisionRepository;
    }
}
module.exports = PrevisionBusiness;