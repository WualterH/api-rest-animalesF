module.exports = (sequelize, type) => {
    const Sucursal = sequelize.define("sucursal", {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: type.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "El nombre de la sucursal es requerido" },
                len: { args: [3, 50], msg: "El nombre de la sucursal debe tener entre 3 y 50 caracteres" },

            },
            unique: {
                args: true,
                msg: "El nombre ya existe"
            }
        },
        userAt: type.STRING
    },
        {
            indexes: [
                { unique: true, fields: ['nombre'] }
            ]
        });

    Sucursal.addHook('beforeCreate', (sucursal) => {
        sucursal.nombre = sucursal.nombre.toUpperCase();
    });

    Sucursal.addHook('beforeUpdate', (sucursal) => {
        if (sucursal.nombre) sucursal.nombre = sucursal.nombre.toUpperCase();
    });

    return Sucursal;
}