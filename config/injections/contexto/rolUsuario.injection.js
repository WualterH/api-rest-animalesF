const { asClass, asFunction } = require('awilix');
const {
    RolUsuario, RolUsuarioService, RolUsuarioBusiness, RolUsuarioRepository,
    Permiso, PermisoService, PermisoBusiness, PermisoRepository,
    RolPermiso, RolPermisoService, RolPermisoBusiness, RolPermisoRepository,
} = require('../../../context/system');
const { rolUsuarioController, permisoController, rolPermisoController } = require('../../../api/controllers');
const { RolRoute, PermisoRoute, RolPermisoRoute } = require('../../../api/routes/api');


module.exports = (container) => {

    container.register({

        RolUsuario: asClass(RolUsuario).singleton(),
        RolRoute: asFunction(RolRoute).singleton(),
        RolUsuarioService: asClass(RolUsuarioService).singleton(),
        RolUsuarioBusiness: asClass(RolUsuarioBusiness).singleton(),
        RolUsuarioRepository: asClass(RolUsuarioRepository).singleton(),
        RolUsuarioController: asClass(rolUsuarioController).singleton(),

        Permiso: asClass(Permiso).singleton(),
        PermisoRoute: asFunction(PermisoRoute).singleton(),
        PermisoService: asClass(PermisoService).singleton(),
        PermisoBusiness: asClass(PermisoBusiness).singleton(),
        PermisoRepository: asClass(PermisoRepository).singleton(),
        PermisoController: asClass(permisoController).singleton(),

        RolPermiso: asClass(RolPermiso).singleton(),
        RolPermisoRoute: asFunction(RolPermisoRoute).singleton(),
        RolPermisoService: asClass(RolPermisoService).singleton(),
        RolPermisoBusiness: asClass(RolPermisoBusiness).singleton(),
        RolPermisoRepository: asClass(RolPermisoRepository).singleton(),
        RolPermisoController: asClass(rolPermisoController).singleton(),


    });

    return container;

}