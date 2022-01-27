const { BaseBusiness } = require('../../base');
const { Permiso } = require('../../../class');

class PermisoBusiness extends BaseBusiness {

    constructor({ PermisoRepository }) {
        super(PermisoRepository, Permiso)
        this._permisoRepository = PermisoRepository;
    }

}
module.exports = PermisoBusiness;
