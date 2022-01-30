const { BaseRepository } = require('../../../base');

class EncuestaPersonaRepository extends BaseRepository {

    constructor({ db }) {
        super(db, 'encuestaPersona');
        this._db = db;
        this._encuestaPersona = "encuestaPersona";        
    }
    crearEncuestaPersona(entity) {        
        return this._db[this._encuestaPersona].create(entity).catch((err) => {
            throw new Error(err.errors[0].message || err.message);
        });
    }    
}
module.exports = EncuestaPersonaRepository;