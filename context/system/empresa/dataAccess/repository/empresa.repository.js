const { BaseRepository } = require('../../../base');

class EmpresaRepository extends BaseRepository {

    constructor({ db }) {

        super(db, 'empresa');
        this._db = db;

    }

    buscarEmpresaPorRun(run) {
        return this._db.empresa.findOne({
            raw: true, nest: true, where: { run: run }
        }).then((empresa) => {
            console.log(empresa);
            if (!empresa) throw new Error("No hay registro");
            return empresa;
        });
    }

}

module.exports = EmpresaRepository;