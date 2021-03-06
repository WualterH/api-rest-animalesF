const { BaseRepository } = require('../../../base');

class PersonaRepository extends BaseRepository {

    constructor({ db }) {
        super(db, 'persona');
        this._db = db;
        this._persona = "persona";        
    }
    crearPersona(entity) {        
        return this._db[this._persona].create(entity).catch((err) => {
            throw new Error(err.errors[0].message || err.message);
        });
    }    
    updateNombre(id, nombre) {        
        return this._db.persona.update(
			{ nombre: nombre },            
			{ where: { id: id } }
		);		
    }
    updateApellido(id, apellido) {        
        return this._db.persona.update(
			{ apellido: apellido },            
			{ where: { id: id } }
		);		
    }
}
module.exports = PersonaRepository;