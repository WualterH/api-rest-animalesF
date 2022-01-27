const { BaseBusiness } = require('../../base');
const { RolPermiso } = require('../../../class');

class RolPermisoBusiness extends BaseBusiness {
    constructor({ RolPermisoRepository }) {
        super(RolPermisoRepository, RolPermiso);
        this._rolPermisoRepository = RolPermisoRepository
    }

    listarPermisosPorRol(id) {
        return this._rolPermisoRepository.listarPermisosPorRol(id);
    }
    eliminarPorRolYPermiso(idRol, idPermiso) {
        return this._rolPermisoRepository.eliminarPorRolYPermiso(idRol, idPermiso);
    }
    validarPorRolYPermiso(rolId, permisoId) {
        return this._rolPermisoRepository.validarPorRolYPermiso(rolId, permisoId);
    }
}
module.exports = RolPermisoBusiness;