const { BaseRepository } = require('../../../base');

class EstadoCivilRepository extends BaseRepository {
    constructor({ db }) {
        super(db, 'estadoCivil');
        this._db = db;
    }
}
module.exports = EstadoCivilRepository;