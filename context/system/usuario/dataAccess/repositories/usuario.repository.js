const BaseRepository = require("../../../base/dataAcces/repository/base.repository");

class UsuarioRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "usuario");
    this._db = db;
  }

  findLogin(nombre) {
    return this._db.usuario.findOne({ raw: true, where: { nombre_usuario: nombre } });
  }

  async crearUsuarioSiNoExiste(usuario) {
    const respuesta = await this._db.usuario.findOne({ where: { email_usuario: usuario.email_usuario } })
    if (respuesta) {
      console.log("ya existe");
      return ({ error: true, msg: "El usuario ya existe" });
    }
    return await this._db.usuario.create(usuario);
  }

  findAllUsuarios() {

    return this._db.usuario.findAll({
      raw: true,
      nest: true,
      include: [{ model: this._db.rolUsuario }]
    });

  }

}
module.exports = UsuarioRepository;
