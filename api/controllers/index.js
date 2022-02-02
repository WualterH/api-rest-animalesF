const EncuestadorController = require("./encuestadorController/encuestador.controller");

module.exports = {
  UsuarioController: require("./usuarioController/usuario.controller"),
  AuthController: require("./auth.controller"),
  rolUsuarioController: require("./rolController/rolUsuario.controller"),
  permisoController: require('./rolController/permiso.controller'),
  rolPermisoController: require('./rolController/rolPermiso.controller'), 
  EncuestaController: require('./encuestaController/encuesta.controller'),
  EncuestadorController: require('./encuestadorController/encuestador.controller')
};
