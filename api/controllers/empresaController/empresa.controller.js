const { EmpresaDto } = require('../../dtos');
const mapper = require("automapper-js");

class EmpresaController {

    constructor({ EmpresaService }) {
        this._empresaService = EmpresaService;
    }

    async listarTodasLasEmpresas(req, res) {
        try {

            const empresas = await this._empresaService.getAll();
            if (empresas.length == 0) {
                return res.status(200).send({ success: false, msg: "No hay registros" });
            }
            return res.status(200).send({ success: true, data: empresas });

        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async crearEmpresa(req, res) {
        try {

            const body = req.body;
            await this._empresaService.create(body);
            return res.status(200).send({ success: true, msg: "Empresa creada exitosamente" });

        } catch (error) {
            console.error(error.message)
            return res.status(500).send({ success: false, msg: error.message });
        }
    }

    async buscarEmpresaPorRun(req, res) {
        try {

            const { run } = req.params;
            await this._empresaService.buscarEmpresaPorRun(run).then((empresa) => {
                return res.status(200).send({ success: true, data: empresa });
            }).catch(err => {
                return res.status(500).send({ success: false, msg: err.message })
            });

        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message })
        }
    }

    async buscarEmpresaPorId(req, res) {
        try {

            const { id } = req.params;
            let empresa = await this._empresaService.get(id);
            if (!empresa) {
                return res.status(200).send({ success: false, msg: "No hay registro" });
            }


            const empresadto = mapper(EmpresaDto, empresa);
            console.log(empresadto);

            return res.status(200).send({ success: true, msg: empresa });

        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message })
        }
    }

    async actualizarEmpresa(req, res) {
        try {

            const body = req.body;
            const { id } = req.params;

            await this._empresaService.update(id, body);
            return res.status(200).send({ success: true, msg: "Empresa acualizada correctamente" });

        } catch (error) {
            return res.status(500).send({ success: false, msg: error.message });
        }


    }

    async eliminarEmpresaPorId(req, res) {
        try {

            const { id } = req.params;
            await this._empresaService.delete(id);
            res.status(200).send({ success: true, msg: "Empresa eliminada exitosamente" });

        } catch (error) {
            res.status(500).send({ success: false, msg: error.message });
        }
    }

}

module.exports = EmpresaController;