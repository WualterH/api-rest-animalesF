const BaseService = require("../../base/services/base.service");
class UsuarioService extends BaseService {
  constructor({ UsuarioBusiness }) {
    super(UsuarioBusiness);
    this._usuarioBusiness = UsuarioBusiness
  }

  async getFindLogin(nombre) {
    return await this._usuarioBusiness.getFindLogin(nombre);
  }

  async crearUsuarioSiNoExiste(usuario) {
    return await this._usuarioBusiness.crearUsuarioSiNoExiste(usuario);
  }

  async findAllUsuarios() {
    return await this._usuarioBusiness.findAllUsuarios();
  }

}
module.exports = UsuarioService;
