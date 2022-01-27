const { BaseBusiness } = require('../../base');
const { Empresa } = require('../../../class');

class EmpresaBusiness extends BaseBusiness {

    constructor({ EmpresaRepository }) {
        super(EmpresaRepository, Empresa);
        this._empresaRepository = EmpresaRepository;
    }

    async buscarEmpresaPorRun(run) {
        return await this._empresaRepository.buscarEmpresaPorRun(run);
    }

}
module.exports = EmpresaBusiness