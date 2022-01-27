const { BaseBusiness } = require('../../base');
const { RolUsuario } = require('../../../class');

class RolUsuarioBusiness extends BaseBusiness {

    constructor({ RolUsuarioRepository }) {
        super(RolUsuarioRepository, RolUsuario);
        this._rolUsuarioRepository = RolUsuarioRepository;
    }

    async todoLosRoles() {
        return await this._rolUsuarioRepository.todoLosRoles();
    }

}
module.exports = RolUsuarioBusiness;