module.exports = (sequelize, type) => {

    const RolUsuario = sequelize.define("rolUsuario",
        {
            id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombre: {
                type: type.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "El nombre del rol es requerido"
                    },
                    len: { args: [[1, 50]], msg: "El nombre del rol debe tener entre 1 y 50 caracteres" }
                }
            },
            descripcion: {
                type: type.STRING,
                allowNull: true,
                validate: {
                    len: {
                        args: [[10, 300]],
                        msg: "La descripcion debe tener entre 10 y 300 caracteres"
                    }
                }
            },
            estado: {
                type: type.BOOLEAN,
                validate: {
                    notEmpty: {
                        msg: "El estado es requerido"
                    }
                }
            },
            userAt: { type: type.STRING }
        });

    RolUsuario.addHook('beforeCreate', (rolUsuario) => {
        rolUsuario.nombre = rolUsuario.nombre.toUpperCase();
        rolUsuario.descripcion = rolUsuario.descripcion.toUpperCase();
        if (rolUsuario.userAt) rolUsuario.userAt = rolUsuario.userAt.toUpperCase();

    });

    RolUsuario.addHook('beforeValidate', (rolUsuario) => {
        if (rolUsuario.nombre) rolUsuario.nombre = rolUsuario.nombre.toUpperCase();
        if (rolUsuario.descripcion) rolUsuario.descripcion = rolUsuario.descripcion.toUpperCase();
        if (rolUsuario.userAt) rolUsuario.userAt = rolUsuario.userAt.toUpperCase();
    });

    return RolUsuario;
}