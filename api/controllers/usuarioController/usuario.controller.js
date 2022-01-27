const mapper = require("automapper-js");

const { UsuarioDto } = require("../../dtos");
class UsuarioController {
  constructor({ UsuarioService }) {
    this._UsuarioService = UsuarioService;
  }

  async getUsuarios(req, res) {

    try {

      let Usuarios = await this._UsuarioService.findAllUsuarios();

      if (Usuarios.length == 0) {
        return res.status(204).send({ success: false, msg: "No hay registros" });
      }

      let usuario = await Usuarios.map(usuario => {
        delete usuario.clave_usuario;
        return usuario;
      });

      return res.send({
        success: true,
        data: usuario
      });

    } catch (error) {
      return res.status(400).send({ success: false, msg: error.message });
    }
  }

  async getUsuario(req, res) {
    const { id } = req.params;
    let usuario = await this._UsuarioService.get(id);
    if (!usuario) {
      return res.status(204).send({ success: false, msg: "No hay registros" });
    }
    delete usuario.clave_usuario;
    usuario = mapper(UsuarioDto, usuario);
    return res.send({
      success: true,
      data: usuario
    });
  }


  async updateUsuario(req, res) {
    try {

      const { body } = req;
      const { id } = req.params;

      await this._UsuarioService.update(id, body);
      return res.status(200).send({ success: true, msg: "Usuario actualizado" });

    } catch (error) {
      return res.status(400).send({ success: false, msg: error.message });
    }
  }

  async deleteUsuario(req, res) {
    try {

      const { id } = req.params;
      await this._UsuarioService.delete(id);
      return res.status(200).send({ success: true, msg: "Usuario eliminado" });

    } catch (error) {
      return res.status(400).send({ success: false, msg: error.message });
    }

  }
}

module.exports = UsuarioController;
