const { BaseRepository } = require('../../../base');

class EncuestadorRepository extends BaseRepository {

    constructor({ db }) {
        super(db, 'encuestador');
        this._db = db;
        this._encuestador = "encuestador";
    }
    buscar(){
        return this._db[this._encuestador].findAll();
    }
}
module.exports = EncuestadorRepository;