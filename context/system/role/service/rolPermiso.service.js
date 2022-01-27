const { BaseService } = require('../../base');
class RolPermisoService extends BaseService {

    constructor({ RolPermisoBusiness }) {
        super(RolPermisoBusiness);
        this._rolPermisoBusiness = RolPermisoBusiness;
    }

    listarPermisosPorRol(id) {
        return this._rolPermisoBusiness.listarPermisosPorRol(id);
    }

    eliminarPorRolYPermiso(idRol, idPermiso) {
        return this._rolPermisoBusiness.eliminarPorRolYPermiso(idRol, idPermiso);
    }

    validarPorRolYPermiso(idRol, idPermiso) {
        return this._rolPermisoBusiness.validarPorRolYPermiso(idRol, idPermiso);
    }
}
module.exports = RolPermisoService;