module.exports = {
  UsuarioController: require("./usuarioController/usuario.controller"),
  AuthController: require("./auth.controller"),
  rolUsuarioController: require("./rolController/rolUsuario.controller"),
  permisoController: require('./rolController/permiso.controller'),
  rolPermisoController: require('./rolController/rolPermiso.controller'),
  sucursalController: require('./sucursalController/sucursal.controller'),
  CiudadController: require('./ciudadController/ciudad.controller'),
  EmpresaController: require('./empresaController/empresa.controller'),
  AfpController: require('./afpController/afp.controller'),
  PrevisionController: require('./previsionController/prevision.controller'),
  EstadoCivilController: require('./usuarioController/estadoCivil.controller')
};
