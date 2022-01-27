const { asClass, asFunction } = require('awilix');

const { Sucursal, SucursalService, SucursalBusiness, SucursalRepository } = require('../../../context/system');
const { sucursalController } = require('../../../api/controllers')
const SucursalRoute = require('../../../api/routes/api/sucursal.routes')
module.exports = (container) => {

    container.register({

        Sucursal: asClass(Sucursal).singleton(),
        SucursalService: asClass(SucursalService).singleton(),
        SucursalBusiness: asClass(SucursalBusiness).singleton(),
        SucursalRepository: asClass(SucursalRepository).singleton(),
        sucursalController: asClass(sucursalController).singleton(),
        SucursalRoute: asFunction(SucursalRoute).singleton()
    });

    return container;

}