const { BaseService } = require('../../base');

class CiudadService extends BaseService {

    constructor({ CiudadBusiness }) {
        super(CiudadBusiness);
    }
}

module.exports = CiudadService;