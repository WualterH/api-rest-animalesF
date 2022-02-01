
class EncuestaController {

    constructor({ EncuestaService }) {

        this._encuestaService = EncuestaService;

    }

    async ListarTodasLasEncuestas(req, res) {

        try {            
            const datos = await this._encuestaService.getAllEncuestas();
            if (datos.length == 0) {
                return res.status(200).send({ success: false, msg: "No hay registros" });
            }
            return res.status(200).send({ success: true, data: datos });

        } catch (error) {

            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async buscarEncuestaPorId(req, res) {        
        try {

            const { id } = req.params;
            const encuesta = await this._encuestaService.getPorId(id);
            if (!encuesta) {
                return res.status(200).send({ success: false, msg: "No hay registros" });
            }

            return res.status(200).send({ success: true, data: encuesta });
        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async actualizarEncuesta(req, res) {

        try {

            const { id } = req.params;
            const body = req.body;
            await this._encuestaService.update(id, body);
            return res.status(200).send({ success: true, msg: "Actualizado correctamente" });

        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async eliminarEncuesta(req, res) {
        try {

            const { id } = req.params;
            await this._encuestaService.delete(id);
            return res.status(200).send({ success: true, msg: "Eliminado correctamente" });

        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async crearEncuesta(req, res) {        
        try {

            const body = req.body;
            await this._encuestaService.crearEncuesta(body);
            return res.status(200).send({ succes: true, msg: "Encuesta creada exitosamente" });

        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async upload(req, res) {        
		if (!req.file) {
			console.log("No file received");
			return res.send({
				success: false,
			});
		} else {
			console.log("file received successfully");
			setTimeout(() => {
				return res.status(200).send(req.file.filename);
			}, 2000);
		}
	}

}

module.exports = EncuestaController;