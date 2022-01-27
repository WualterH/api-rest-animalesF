const { asClass, createContainer, asFunction, asValue } = require("awilix");

//App start
const StartUp = require('../../api/startup');
const Server = require('../../api/server');
const config = require('../environments');

//routes
const Routes = require("../../api/routes");

//db
const { db } = require("../db/db");

let container = createContainer();

container
  .register({
    db: asValue(db),
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    config: asValue(config)

  });

container = require("./middlewares.injection")(container);
container = require('./contexto/usuario.injection')(container);
container = require('./contexto/rolUsuario.injection')(container);
container = require('./contexto/sucursal.injection')(container);
container = require('./contexto/ciudad.injection')(container);
container = require('./contexto/empresa.injection')(container);
container = require('./contexto/afp.injection')(container);
container = require('./contexto/prevision.injection')(container);

module.exports = container;