class AfpController {
    constructor({ AfpService }) {
        this._afpService = AfpService;
        this._status = `status(500).send({ success: false, msg: err.message })`;
    }



    async listarTodasLasAfp(req, res) {

        await this._afpService.getAll().then((data) => {
            return res.status(200).send({ success: false, msg: data });
        }).catch(err => {
            return res.status(500).send({ success: false, msg: err.message });
        });
    };

    async buscarAfpPorId(req, res) {

        const { id } = req.params;
        await this._afpService.get(id).then((afp) => {
            return res.status(200).send({ success: true, data: afp });
        }).catch(err => {
            return res.status(500).send({ success: false, msg: err.message });
        })

    };

    async actualizarAfp(req, res) {

        const { id } = req.params;
        const body = req.body;

        await this._afpService.update(id, body).then(() => {
            return res.status(200).send({ success: true, msg: "Afp actualizada correctamente" });
        }).catch((err) => {
            return res.status(500).send({ success: false, msg: err.message });
        });

    }

    async crearAfp(req, res) {

        const body = req.body;
        await this._afpService.create(body).then(() => {
            return res.status(200).send({ success: true, msg: "Afp creada exitosamente" });
        }).catch(err => {
            return res.status(500).send({ success: false, msg: err.message });
        });

    }

    async eliminarAfp(req, res) {

        const { id } = req.params;
        await this._afpService.delete(id).then(() => {
            return res.status(200).send({ success: false, msg: "Afp eliminada" });
        }).catch(err => {
            return res.status(500).send({ success: false, msg: err.errors.message });
        })

    }
}

module.exports = AfpController;