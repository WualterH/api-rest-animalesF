const { BaseService } = require('../../base');

class PermisoService extends BaseService {

    constructor({ PermisoBusiness }) {

        super(PermisoBusiness)
        this._permisoBusiness = PermisoBusiness;

    }

}
module.exports = PermisoService;
