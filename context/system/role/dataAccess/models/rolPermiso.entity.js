module.exports = (sequelize, type) => {

    const RolPermiso = sequelize.define("rolPermiso", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        permisoId: {
            type: type.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "El campo Permiso es requerido"
                }
            },

        },
        rolUsuarioId: {
            type: type.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "El campo Rol es requerido"
                }
            }
        },
        userAt: type.STRING,

    });

    return RolPermiso;
}


