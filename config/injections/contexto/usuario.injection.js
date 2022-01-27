const { asClass, asFunction } = require('awilix');


const { UsuarioRepository, UsuarioService, UsuarioBusiness, EstadoCivil, EstadoCivilService, EstadoCivilBusiness, EstadoCivilRepository } = require('../../../context/system');
const { UsuarioController, AuthController, EstadoCivilController } = require('../../../api/controllers');
const { UsuarioRoute, EstadoCivilRoute } = require('../../../api/routes/api');


module.exports = (container) => {

    container.register({
        AuthController: asClass(AuthController).singleton(),
        UserRoutes: asFunction(UsuarioRoute).singleton(),
        UsuarioRepository: asClass(UsuarioRepository).singleton(),
        UsuarioService: asClass(UsuarioService).singleton(),
        UsuarioBusiness: asClass(UsuarioBusiness).singleton(),
        UsuarioController: asClass(UsuarioController).singleton(),

        EstadoCivil: asClass(EstadoCivil).singleton(),
        EstadoCivilRoute: asFunction(EstadoCivilRoute).singleton(),
        EstadoCivilService: asClass(EstadoCivilService).singleton(),
        EstadoCivilBusiness: asClass(EstadoCivilBusiness).singleton(),
        EstadoCivilRepository: asClass(EstadoCivilRepository).singleton(),
        EstadoCivilController: asClass(EstadoCivilController).singleton(),
    });

    return container;
}