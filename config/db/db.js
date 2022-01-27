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
const Sucursal = require('../../context/system/sucursal/dataAccess/models/Sucursal.entity')(database, Sequelize);
const Ciudad = require('../../context/system/ciudad/dataAccess/models/ciudad.entity')(database, Sequelize);
const Empresa = require('../../context/system/empresa/dataAccess/models/empresa.entity')(database, Sequelize);
const Afp = require('../../context/system/afp/dataAcces/models/afp.entity')(database, Sequelize);
const Prevision = require('../../context/system/prevision/dataAccess/models/prevision.entity')(database, Sequelize);
const EstadoCivil = require('../../context/system/usuario/dataAccess/models/estadoCivil.entity')(database, Sequelize);

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


//una empresa pertenece a una ciudad
Ciudad.hasMany(Empresa, { foreignKey: { name: "ciudad" }, onDelete: onDelete, onUpdate: onUpdate });






//---------------------------------------------------añadiendo entidades
db.usuario = Usuario;
db.rolUsuario = RolUsuario;
db.permiso = Permiso;
db.rolPermiso = RolPermiso;
db.sucursal = Sucursal;
db.ciudad = Ciudad;
db.empresa = Empresa;
db.afp = Afp;
db.prevision = Prevision;
db.estadoCivil = EstadoCivil;

db.sequelize = database;
db.Sequelize = Sequelize;


//--------------------------------------------------------exportar
module.exports = {
  db,
  Usuario,
  RolUsuario,
  Permiso,
  RolPermiso,
  Sucursal,
  Ciudad,
  Empresa,
  Afp,
  Prevision,
  EstadoCivil

}