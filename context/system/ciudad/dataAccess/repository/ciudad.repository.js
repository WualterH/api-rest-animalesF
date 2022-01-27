const { BaseRepository } = require('../../../base');

class CiudadRepository extends BaseRepository {

    constructor({ db }) {
        super(db, 'ciudad');
        this._db = db;
    }

}
module.exports = CiudadRepository;