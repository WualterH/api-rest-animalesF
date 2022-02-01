const { Router } = require('express');
const multer = require("multer");
var express = require("express");
var app = express();
const path = require("path");

var DIR = "../uploads/encuesta";
express.static(DIR);
let storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, DIR);
	},
	filename: (req, file, cb) => {
		cb(
			null,
			file.fieldname + "-" + Date.now() + path.extname(file.originalname)
		);
	},
});

const upload = multer({ storage: storage });

module.exports = function ({ EncuestaController }) {

    const router = Router();

    router.get('/', EncuestaController.ListarTodasLasEncuestas.bind(EncuestaController));
    router.get('/:id', EncuestaController.buscarEncuestaPorId.bind(EncuestaController));
    router.put('/actualizar/:id', EncuestaController.actualizarEncuesta.bind(EncuestaController));
    router.delete('/eliminar/:id', EncuestaController.eliminarEncuesta.bind(EncuestaController));
    router.post('/crear', EncuestaController.crearEncuesta.bind(EncuestaController));
    router.post('/upload', upload.single("video"), EncuestaController.upload.bind(EncuestaController));

    return router;
}