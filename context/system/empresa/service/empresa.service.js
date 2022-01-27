const { BaseService } = require('../../base');

class EmpresaService extends BaseService {

    constructor({ EmpresaBusiness }) {
        super(EmpresaBusiness);

        this._empresaBusiness = EmpresaBusiness;
    }

    async buscarEmpresaPorRun(run) {
        return await this._empresaBusiness.buscarEmpresaPorRun(run);
    }

}
module.exports = EmpresaService;