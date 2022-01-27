
module.exports = (sequelize, type) => {

    const Permiso = sequelize.define("permiso",
        {
            id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombre: {
                type: type.STRING,
                allowNull: false,
                validate: {
                    len: {
                        args: [3, 255],
                        msg: "El nombre debe contener minimo 3 caracteres y maximo 255"
                    },
                    notEmpty: {
                        msg: 'El nombre no puede estar vacío'
                    }
                }
            },
            descripcion: {
                type: type.STRING,
                validate: {
                    len: {
                        args: [3, 255],
                        msg: "El nombre debe tener minimo 3 caracteres y maximo 255"
                    },

                    notEmpty: {
                        msg: 'La descripcion no puede estar vacía'
                    },
                }
            },

            userAt: type.STRING

        }
    );

    Permiso.addHook('beforeCreate', (permiso) => {
        permiso.nombre = permiso.nombre.toUpperCase();
        permiso.descripcion = permiso.descripcion.toUpperCase();
        permiso.userAt = permiso.userAt.toUpperCase();
    });

    Permiso.addHook('beforeValidate', (permiso) => {
        if (permiso.nombre) permiso.nombre = permiso.nombre.toUpperCase();
        if (permiso.descripcion) permiso.descripcion = permiso.descripcion.toUpperCase();
        if (permiso.userAt) permiso.userAt = permiso.userAt.toUpperCase();
    });

    return Permiso;

}