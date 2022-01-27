
class PrevisionController {

    constructor({ PrevisionService }) {
        this._previsionService = PrevisionService;
    }

    async listarPrevisiones(req, res) {
        await this._previsionService.getAll().then((previsiones) => {
            return res.status(200).send({ success: true, data: previsiones });
        }).catch(err => {
            return res.status(500).send({ success: false, data: err.message });
        })
    }

    async buscarPrevisionPorId(req, res) {
        const { id } = req.params;
        await this._previsionService.get(id).then(prevision => {
            return res.status(200).send({ success: true, data: prevision });
        }).catch(err => {
            return res.status(500).send({ success: false, msg: err.message });
        });
    }

    async actualizarPrevision(req, res) {
        const { id } = req.params;
        const body = req.body;
        await this._previsionService.update(id, body).then(() => {
            return res.status(200).send({ success: false, msg: "Se actualizo correctamente" });
        }).catch(err => {
            return res.status(500).send({ success: false, msg: err.message });
        })
    }

    async crearPrevision(req, res) {
        const body = req.body;
        await this._previsionService.create(body).then(() => {
            return res.status(200).send({ success: true, msg: "Prevision creada exitosamente" });
        }).catch(err => {
            return res.status(500).send({ success: false, msg: err.message });
        });
    }

    async eliminarPrevision(req, res) {
        const { id } = req.params;
        await this._previsionService.delete(id).then(() => {
            res.status(200).send({ success: true, msg: "Prevision eliminada correctamente" });
        }).catch(err => {
            return res.status(500).send({ success: false, msg: err.message });
        });
    }

}
module.exports = PrevisionController;