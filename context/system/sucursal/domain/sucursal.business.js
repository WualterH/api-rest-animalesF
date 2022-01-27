const { BaseBusiness } = require('../../base');
const { Sucursal } = require('../../../class');

class SucursalBusiness extends BaseBusiness {
    constructor({ SucursalRepository }) {
        super(SucursalRepository, Sucursal);
    }
}
module.exports = SucursalBusiness;