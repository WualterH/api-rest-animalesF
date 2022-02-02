const Sequelize = require("sequelize");
const { DB } = require('../environments')
const config = DB;
const db = {}
const database = new Sequelize(config.database, config.username, config.password, config);

//conectar modelo con base de datos
const Usuario = require("../../context/system/usuario/dataAccess/models/Usuario.entity")(database, Sequelize);
const RolUsuario = require("../../context/system/role/dataAccess/models/rolUsuario.entity")(database, Sequelize);
const Permiso = require('../../context/system/role/dataAccess/models/permiso.entity')(database, Sequelize);
const RolPermiso = require('../../context/system/role/dataAccess/models/rolPermiso.entity')(database, Sequelize);
const Encuesta = require('../../context/system/encuesta/dataAccess/models/encuesta.entity')(database, Sequelize);
const Encuestador = require('../../context/system/encuestador/dataAccess/models/encuestador.entity')(database, Sequelize);
const Persona = require('../../context/system/persona/dataAccess/models/persona.entity')(database, Sequelize);
const EncuestaPersona = require('../../context/system/EncuestaPersona/dataAccess/models/encuestaPersona.entity')(database, Sequelize);

//acciones en cascadas por defecto
const onDelete = "CASCADE";
const onUpdate = "CASCADE";




//---------------------------------------------------Relaciones




//un rol tiene muchos registros en rolPermiso y un rolPermiso pertenece a un rol
RolUsuario.hasMany(RolPermiso, { foreignKey: 'rolUsuarioId', sourceKey: 'id', onDelete: onDelete, onUpdate: onUpdate });
RolPermiso.belongsTo(RolUsuario, { foreignKey: 'rolUsuarioId', targetKey: 'id', onDelete: onDelete, onUpdate: onUpdate });

//un permiso tiene muchos registros en rolPermiso y un rolPermiso pertenece a un permiso
Permiso.hasMany(RolPermiso, { foreignKey: 'permisoId', sourceKey: 'id', onDelete: onDelete, onUpdate: onUpdate });
RolPermiso.belongsTo(Permiso, { foreignKey: 'permisoId', targetKey: 'id', onDelete: onDelete, onUpdate: onUpdate });


// un rol pertenece a un usuario
Usuario.belongsTo(RolUsuario, { foreignKey: { name: "id_rol" }, onDelete: onDelete, onUpdate: onUpdate });

// relacion entre encuesta y usuario
Encuesta.belongsTo(Usuario, { foreignKey: "idEncuestador", as: "encuestadores", onDelete: onDelete, onUpdate: onUpdate });
Usuario.hasMany(Encuesta, { foreignKey: "idEncuestador", as: "encuestadores", onDelete: onDelete, onUpdate: onUpdate });

// relacion entre encuesta y encuestaPersona
EncuestaPersona.belongsTo(Encuesta, { foreignKey: "idEncuesta", as: "encuestaPersona", onDelete: onDelete, onUpdate: onUpdate });
Encuesta.hasMany(EncuestaPersona, { foreignKey: "idEncuesta", as: "encuestaPersona", onDelete: onDelete, onUpdate: onUpdate });

// relacion entre persona y encuestaPersona
EncuestaPersona.belongsTo(Persona, { foreignKey: "idPersona", as: "personas", onDelete: onDelete, onUpdate: onUpdate });
Persona.hasMany(EncuestaPersona, { foreignKey: "idPersona", as: "personas", onDelete: onDelete, onUpdate: onUpdate });

//---------------------------------------------------añadiendo entidades
db.usuario = Usuario;
db.rolUsuario = RolUsuario;
db.permiso = Permiso;
db.rolPermiso = RolPermiso;
db.encuesta = Encuesta;
db.encuestador = Encuestador;
db.persona = Persona;
db.encuestaPersona = EncuestaPersona;

db.sequelize = database;
db.Sequelize = Sequelize;


//--------------------------------------------------------exportar
module.exports = {
  db,
  Usuario,
  RolUsuario,
  Permiso,
  RolPermiso,
  Encuesta,
  Encuestador,
  Persona,
  EncuestaPersona
}