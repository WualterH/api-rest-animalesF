const { BaseRepository } = require('../../../base');

class SucursalRepository extends BaseRepository {
    constructor({ db }) {
        super(db, 'sucursal');
        this._db = db;
    }
}
module.exports = SucursalRepository;