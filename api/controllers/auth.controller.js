
const mapper = require("automapper-js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/injections/auth');
const { UsuarioDto } = require("../dtos");


class AuthController {
    constructor({ UsuarioService }) {
        this._UsuarioService = UsuarioService;
    }

    //login
    async login(req, res) {
        try {
            const { nombre_usuario, clave_usuario } = req.body;
            let usuario = await this._UsuarioService.getFindLogin(nombre_usuario);
            if (!usuario) {
                return res.status(404).send({ msg: "Usuario no encontrado" });
            } else {
                if (bcrypt.compareSync(clave_usuario, usuario.clave_usuario)) {
                    usuario = {
                        nombre: usuario.nombre_usuario,
                        id: usuario.id,
                        estado: usuario.estado_usuario,
                        rol: "ADMIN"
                    };
                    let token = jwt.sign({ user: usuario }, authConfig.secret, { expiresIn: authConfig.expires })
                    return res.status(200).send({
                        msg: "Usuario creado exitosamente",
                        token: token
                    });
                } else {
                    return res.status(401).send({ msg: "Contraseña incorrecta" });
                }
            }
        } catch (error) {
            return res.status(400).send({ msg: "Error al iniciar sesion" });
        }
    }

    //CREAR USUARIO
    async createUsuario(req, res) {
        try {
            const { body } = req;
            if (body.clave_usuario == '' || body.clave_usuario == null || body.clave_usuario == undefined || body.clave_usuario.length < 6) {
                return res.status(400).send({ msg: "La clave debe ser minimo de 6 de caracteres" });
            } else {
                body.clave_usuario = await bcrypt.hash(body.clave_usuario, Number.parseInt(authConfig.rounds));
                const createdUsuario = await this._UsuarioService.crearUsuarioSiNoExiste(body);
                if (createdUsuario.error) {
                    return res.status(404).send({ success: false, msg: createdUsuario.msg });
                }
                return res.status(201).send({
                    success: true,
                    msg: "Usuario creado exitosamente",
                    payload: createdUsuario,
                });
            }
        } catch (error) {

            return res.status(400).send({ msg: error.message });

        }

    }
}

module.exports = AuthController;
