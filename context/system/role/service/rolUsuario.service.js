const { BaseService } = require('../../base');
class RolUsuarioService extends BaseService {

    constructor({ RolUsuarioBusiness }) {
        super(RolUsuarioBusiness);
        this._rolUsuarioBusiness = RolUsuarioBusiness;
    }

    async todoLosRole() {        
        return await this._rolUsuarioBusiness.todoLosRole();
    }

}
module.exports = RolUsuarioService;