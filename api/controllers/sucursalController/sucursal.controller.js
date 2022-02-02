


class SucursalController {

    constructor({ SucursalService }) {
        this._sucursalService = SucursalService
    }

    async listarTodosLasSucursales(req, res) {
        try {
            const datos = await this._sucursalService.getAll();            
            if (datos.length == 0) {
                return res.status(200).send({ succes: false, msg: "No hay registros" });
            }
            return res.status(200).send({ success: true, data: datos });
        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async buscarSucursalPorId(req, res) {
        try {
            const { id } = req.params;
            const data = await this._sucursalService.get(id);
            if (!data) {
                return res.status(200).send({ success: false, msg: "No se encontro el registro" });
            }
            return res.status(200).send({ success: true, data: data })
        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async actualizarSucursal(req, res) {
        try {
            const { id } = req.params;
            const body = req.body;
            await this._sucursalService.update(id, body);
            return res.status(200).send({ success: false, msg: "Registro actualizado" });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }

    async crearSucursal(req, res) {
        try {
            const body = req.body;            
            const data = await this._sucursalService.create(body);            
            return res.status(200).send({ success: true, data: data });
        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async eliminarSucursal(req, res) {
        try {
            const { id } = req.params;
            await this._sucursalService.delete(id);
            return res.status(200).send({ success: true, msg: "Se elimino correctamente" });
        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }
}
module.exports = SucursalController;