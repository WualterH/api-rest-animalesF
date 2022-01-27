const { BaseRepository } = require('../../../base');

class RolPermisoRepository extends BaseRepository {

    constructor({ db }) {
        super(db, "rolPermiso");
        this._db = db;

    }

    listarPermisosPorRol(id) {
        return this._db.rolPermiso.findAll({
            nest: true,
            raw: true,
            where: {
                rolUsuarioId: id
            },
            include: [
                { model: this._db.permiso },
                { model: this._db.rolUsuario, attributes: ["nombre", "estado"] }
            ]
        });

    }

    eliminarPorRolYPermiso(rolId, permisoId) {
        return this._db.rolPermiso.destroy({
            where: {
                rolUsuarioId: rolId,
                permisoId: permisoId
            }
        });
    }

    async validarPorRolYPermiso(rolId, permisoId) {
        const data = await this._db.rolPermiso.count({
            where: { permisoId: permisoId, rolUsuarioId: rolId }
        });
        if (data > 0) {
            return true;
        } else {
            return false;
        }
    }
}
module.exports = RolPermisoRepository;