const jwt = require('jsonwebtoken');

const authConfig = require('../../config/injections/auth');
const moment = require("moment");

module.exports = (req, res, next) => {

    //comprobar token
    if (!req.headers.authorization) {
        res.status(401).send({ msg: "Acceso no autorizado" });
    }

    //comprobar validez de este token
    let token = req.headers.authorization.split(' ')[1];
    let decode = jwt.decode(token, authConfig.secret);
    console.log(decode)
    let userAt = req.headers.userat;
    console.log(token)


    //se comprueba si el token expiro
    if (decode.exp < moment().unix()) {
        return res.status(320).json({

            msg: "La sesion a expirado, reinicie",
        });
    }

    //comprobar la validez de este token
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
            res.status(500).send({ msg: "Ha ocurrido un problema al decodificar el token", err });
        } else {
            console.log(req.headers);

            req.user = decoded;
            req.body.userAt = userAt;
            next();
        }
    });

}
