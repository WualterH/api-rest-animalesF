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
ontainer = require('./contexto/encuesta.injection')(container);
container = require('./contexto/encuestador.injection')(container);
container = require('./contexto/persona.injection')(container);
container = require('./contexto/encuestaPersona.injection')(container);

module.exports = container;