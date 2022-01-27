const express = require("express");
const cors = require("cors");
var morgan = require('morgan');
const WhiteList = [""];

class Server {


  constructor({ config, router }) {
    this._config = config;
    this._express = express();
    this._express.use(router);
    this._express.use(cors({ origin: WhiteList }));
    this._express.use(morgan('dev'));
  }

  start() {
    return new Promise((resolve, reject) => {
      const http = this._express.listen(this._config.PORT, () => {
        const { port } = http.address();
        console.log("Aplicacion corriendo en el puerto " + port);
        resolve();
      });
    });
  }
}

module.exports = Server;
