
class CiudadController {

    constructor({ CiudadService }) {

        this._ciudadService = CiudadService;

    }

    async ListarTodasLasCiudades(req, res) {

        try {

            const datos = await this._ciudadService.getAll();
            if (datos.length == 0) {
                return res.status(200).send({ success: false, msg: "No hay registros" });
            }
            return res.status(200).send({ success: true, msg: datos });

        } catch (error) {

            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async buscarCiudadPorId(req, res) {

        try {

            const { id } = req.params;
            const ciudad = await this._ciudadService.get(id);
            if (!ciudad) {
                return res.status(200).send({ success: false, msg: "No hay registros" });
            }

            return res.status(200).send({ success: true, data: ciudad });
        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async actualizarCiudad(req, res) {

        try {

            const { id } = req.params;
            const body = req.body;
            await this._ciudadService.update(id, body);
            return res.status(200).send({ success: true, msg: "Actualizado correctamente" });

        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async eliminarCiudad(req, res) {
        try {

            const { id } = req.params;
            await this._ciudadService.delete(id);
            return res.status(200).send({ success: true, msg: "Eliminado correctamente" });

        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async crearCiudad(req, res) {
        try {

            const body = req.body;
            await this._ciudadService.create(body);
            return res.status(200).send({ succes: true, msg: "Ciudad creada exitosamente" });

        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

}

module.exports = CiudadController;