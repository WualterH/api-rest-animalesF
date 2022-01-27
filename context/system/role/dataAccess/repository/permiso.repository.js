const { BaseRepository } = require('../../../base');

class PermisosRepository extends BaseRepository {

    constructor({ db }) {
        super(db, 'permiso');
        this._db = db;

    }
}
module.exports = PermisosRepository;