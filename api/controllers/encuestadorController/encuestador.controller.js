
class EncuestadorController {

    constructor({ EncuestadorService }) {

        this._encuestadorService = EncuestadorService;

    }

    async ListarTodasLasEncuestadors(req, res) {

        try {

            const datos = await this._encuestadorService.getAll();
            if (datos.length == 0) {
                return res.status(200).send({ success: false, msg: "No hay registros" });
            }
            return res.status(200).send({ success: true, data: datos });

        } catch (error) {

            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async buscarEncuestadorPorId(req, res) {

        try {

            const { id } = req.params;
            const encuestador = await this._encuestadorService.get(id);
            if (!encuestador) {
                return res.status(200).send({ success: false, msg: "No hay registros" });
            }

            return res.status(200).send({ success: true, data: encuestador });
        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async actualizarEncuestador(req, res) {

        try {

            const { id } = req.params;
            const body = req.body;
            await this._encuestadorService.update(id, body);
            return res.status(200).send({ success: true, msg: "Actualizado correctamente" });

        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async eliminarEncuestador(req, res) {
        try {

            const { id } = req.params;
            await this._encuestadorService.delete(id);
            return res.status(200).send({ success: true, msg: "Eliminado correctamente" });

        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async crearEncuestador(req, res) {        
        try {

            const body = req.body;
            await this._encuestadorService.create(body);
            return res.status(200).send({ succes: true, msg: "Encuestador creada exitosamente" });

        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

}

module.exports = EncuestadorController;