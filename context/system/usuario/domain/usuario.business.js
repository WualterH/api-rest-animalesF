const BaseBusiness = require("../../base/domain/base.business");
const { Usuario } = require('../../../class');
const mapper = require("automapper-js");


class UsuarioBusiness extends BaseBusiness {

  constructor({ UsuarioRepository }) {
    super(UsuarioRepository, Usuario);
    this._usuarioRepository = UsuarioRepository;
  }

  async getFindLogin(nombre) {
    const usuario = await this._usuarioRepository.findLogin(nombre);
    return usuario;
  }

  async crearUsuarioSiNoExiste(usuario) {
    return await this._usuarioRepository.crearUsuarioSiNoExiste(usuario);
  }

  async findAllUsuarios() {
    return await this._usuarioRepository.findAllUsuarios();
  }

}
module.exports = UsuarioBusiness;
