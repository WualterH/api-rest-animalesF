class EstadoCivilController {
    constructor({ EstadoCivilService }) {
        this._estadoCivilService = EstadoCivilService;
    }

    async listarEstadoCivil(req, res) {
        await this._estadoCivilService.getAll().then((estados) => {
            return res.status(200).send({ success: true, msg: estados });
        }).catch(err => {
            return res.status(500).send({ success: false, msg: err.message });
        });
    }

    async buscarEstadoCivil(req, res) {
        const { id } = req.params;
        await this._estadoCivilService.get(id).then((estado) => {
            return res.status(200).send({ success: true, data: estado });
        }).catch(err => {
            return res.status(500).send({ success: false, msg: err.message });
        });
    }

    async crearEstadoCivil(req, res) {
        const body = req.body;
        await this._estadoCivilService.create(body).then(() => {
            return res.status(200).send({ success: true, msg: "Estado creado exitosamente" });
        }).catch(err => {
            return res.status(500).send({ success: false, msg: err.message });
        });
    }

    async actualizarEstadoCivil(req, res) {
        const { id } = req.params;
        const body = req.body;
        await this._estadoCivilService.update(id, body).then(() => {
            return res.status(200).send({ success: true, msg: "Estado actualizado correctamente" });
        }).catch(err => {
            return res.status(500).send({ success: false, msg: err.message });
        });
    }

    async eliminarEstadoCivil(req, res) {
        const { id } = req.params;
        await this._estadoCivilService.delete(id).then(() => {
            return res.status(200).send({ success: true, msg: "Estado Eliminado correctamente" });
        }).catch(err => {
            return res.status(500).send({ success: false, msg: err.message });
        })
    }
}
module.exports = EstadoCivilController;