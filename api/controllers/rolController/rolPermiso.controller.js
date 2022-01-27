const mapper = require('automapper-js');
const { RolPermisoDto } = require('../../dtos');

class RolPermisoController {

    constructor({ RolPermisoService }) {
        this._rolPermisoService = RolPermisoService;
    }

    async todoLosRolPermisos(req, res) {
        try {
            let rolesPermiso = await this._rolPermisoService.getAll();
            if (rolesPermiso.length == 0) {
                return res.status(200).send({ success: false, msg: 'No hay registros' });
            }

            //rolesPermiso = rolesPermiso.map(roleP => mapper(RolPermisoDto, roleP));

            return res.status(200).send({ success: true, data: rolesPermiso });
        } catch (error) {

            // if (error.errors[0].message) {
            //     return res.status(400).send({ msg: error.errors[0].message });
            // }
            return res.status(400).send({ msg: error.message });
        }

    }

    async listarPermisosPorRol(req, res) {

        try {

            const { id } = req.params;
            let rolPermiso = await this._rolPermisoService.listarPermisosPorRol(id);
            if (rolPermiso.length == 0) {
                return res.status(200).send({ success: false, msg: "No se encontro el registro" });
            }
            // rolPermiso = rolPermiso.map(rolP => mapper(RolPermisoDto, rolP));
            console.log(rolPermiso);

            return res.status(200).send({ success: true, data: rolPermiso });

        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }

    }

    async crearRolPermiso(req, res) {
        try {
            const body = req.body;
            const respuesta = await this._rolPermisoService.validarPorRolYPermiso(body.rolUsuarioId, body.permisoId);
            if (respuesta) {
                return res.status(200).send({ success: false, msg: "El rol ya cuenta con ese permiso" });
            }
            await this._rolPermisoService.create(body);
            return res.status(200).send({ success: true, msg: "Permiso asignado exitosamente" });

        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async eliminarRolYPermiso(req, res) {
        try {

            const body = req.body;
            await this._rolPermisoService.eliminarPorRolYPermiso(body.permisoId, body.rolUsuarioId);

            return res.status(200).send({ success: true, msg: "Registro eliminado exitosamente" });

        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }
}

module.exports = RolPermisoController;