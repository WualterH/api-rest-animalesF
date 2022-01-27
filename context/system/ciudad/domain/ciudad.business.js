const { BaseBusiness } = require('../../base');
const { Ciudad } = require('../../../class');

class CiudadBusiness extends BaseBusiness {
    constructor({ CiudadRepository }) {
        super(CiudadRepository, Ciudad);
    }

}
module.exports = CiudadBusiness;