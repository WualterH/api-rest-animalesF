const mapper = require('automapper-js');
const { Permiso } = require('../../../context/class');
const { PermisoDto } = require('../../dtos');

class PermisoController {

    constructor({ PermisoService }) {
        this._permisoService = PermisoService

    }

    async getAllPermisos(req, res) {

        try {

            let permisos = await this._permisoService.getAll();
            if (permisos.length == 0) {
                return res.status(200).send({ success: false, msg: "No se encontraron registros registros" });
            }
            permisos = permisos.map(permiso => mapper(PermisoDto, permiso));            
            return res.status(200).send({ success: true, data: permisos });

        } catch (error) {

            return res.status(500).send({ succes: false, msg: error.message });

        }

    }

    async getPermisoById(req, res) {

        try {

            const { id } = req.params;
            let permiso = await this._permisoService.get(id);
            if (!permiso) {
                return res.status(204).send({ success: false, msg: "No se encontraron registros" })
            }
            permiso = mapper(PermisoDto, permiso)
            return res.status(200).send({ success: true, data: permiso });

        } catch (error) {
            return res.status(500).send({ succes: false, msg: error.message });
        }
    }

    async updatePermiso(req, res) {

        try {
            const { id } = req.params;
            const body = req.body;
            await this._permisoService.update(id, body);
            return res.status(200).send({ success: true, msg: "Permiso actualizado" });

        } catch (error) {
            return res.status(500).send({ succes: false, msg: error.message });
        }
    }


    async deletePermiso(req, res) {

        try {
            const { id } = req.params;
            await this._permisoService.delete(id);
            return res.status(200).send({ success: true, msg: "Permiso eliminado" });

        } catch (error) {

            return res.status(500).send({ succes: false, msg: error.message });

        }

    }

    async createPermiso(req, res) {

        try {
            const body = req.body;
            await this._permisoService.create(body);
            return res.status(200).send({ success: true, msg: "Permiso creado" });

        } catch (error) {

            if (error.errors[0].message) {
                return res.status(500).send({ succes: false, msg: error.errors[0].message });
            }
            return res.status(500).send({ succes: false, msg: error.message });



        }


    }


}

module.exports = PermisoController;
