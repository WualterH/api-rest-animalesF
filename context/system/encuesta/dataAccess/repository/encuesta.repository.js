const {
    BaseRepository
} = require('../../../base');

class EncuestaRepository extends BaseRepository {

    constructor({
        db
    }) {
        super(db, 'encuesta');
        this._db = db;
        this._encuesta = "encuesta";
    }
    crearEncuesta(entity) {
        return this._db[this._encuesta].create(entity).catch((err) => {
            throw new Error(err.errors[0].message || err.message);
        });
    }

    async getAllEncuestas() {
        return await this._db[this.entity].findAll({
            raw: true,
            nest: true
        }).then(data => {
            if (data.length == 0) throw new Error("No hay registros");
            return data;
        }).catch((err) => {
            throw new Error(err.message[0].message || err.message);
        });;
    }

    getPorId(id) {
        return this._db[this.entity].findAll({
            include: [                
                {model: this._db.encuestaPersona, as: 'encuestaPersona', 
                include: [{model: this._db.persona, as: 'personas', required: false}] }
            ],
            raw: true,
            nest: true,
            where: {
                idEncuestador: id
            }
        }).then((data) => {
            if (!data) throw new Error("No hay registro");
            return data;
        }).catch((err) => {
            throw new Error(err.message[0].message || err.message);
        });
    }    
}
module.exports = EncuestaRepository;
