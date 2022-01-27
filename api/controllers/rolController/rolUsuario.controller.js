const mapper = require('automapper-js');

const { RolUsuarioDto } = require('../../dtos');

class RolUsuarioController {
    constructor({ RolUsuarioService }) {
        this._rolUsuarioService = RolUsuarioService;
    }

    async todoLosRoles(req, res) {
        try {

            let roles = await this._rolUsuarioService.getAll();
            roles = roles.map(rol => mapper(RolUsuarioDto, rol));

            if (!roles) {
                return res.status(404).send({ success: false, msg: 'No se encontraron roles' });
            }
            return res.status(200).send({ success: true, data: roles });

        } catch (error) {
            return res.status(400).send({ success: false, msg: error.message });
        }
    }

    async buscarRolPorId(req, res) {

        const { id } = req.params;
        let rol = await this._rolUsuarioService.get(id);
        rol = mapper(RolUsuarioDto, rol);

        if (!rol) {
            return res.status(404).send({ success: false, msg: 'No se encontró el rol' });
        }
        return res.status(200).send({ success: true, data: rol });
    }

    async crearRol(req, res) {

        try {
            console.log("crear");
            const { body } = req;
            await this._rolUsuarioService.create(body);
            res.status(200).send({ success: true, msg: 'Rol creado correctamente' });

        } catch (error) {
            return res.status(400).send({ success: false, msg: error.message });
        }
    }

    async actualizarRol(req, res) {

        try {
            console.log("update");
            const { id } = req.params;
            const { body } = req;
            await this._rolUsuarioService.update(id, body);
            res.status(200).send({ success: true, msg: 'Rol actualizado correctamente' });

        } catch (error) {
            return res.status(400).send({ success: false, msg: error.message });
        }
    }
}
module.exports = RolUsuarioController;