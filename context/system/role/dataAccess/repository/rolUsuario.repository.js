const { BaseRepository } = require('../../../base');

class RolUsuarioRepository extends BaseRepository {

    constructor({ db }) {
        super(db, "rolUsuario")
        this._db = db;
    }

    async todoLosRoles() {
        return await this._db.RolUsuario.findAll({
            include: [{
                model: this._db.rolPermiso
            }]
        });
    }

}

module.exports = RolUsuarioRepository;