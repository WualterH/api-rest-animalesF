module.exports = (sequelize, type) => {

    const Ciudad = sequelize.define('ciudad',
        {
            id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nombre: {
                type: type.STRING,
                allowNull: false,
                validate: {
                    len: { arg: [3, 50], msg: 'Minimo 3 y maximo 50 caracteres' },
                    notNull: { msg: "El nombre es requerido" }
                },
                unique: {
                    args: true,
                    msg: "El nombre ya existe"
                }
            }
        },
        {
            indexes: [
                { unique: true, fields: ['nombre'] }
            ]
        }
    );

    Ciudad.addHook('beforeCreate', (ciudad) => {
        ciudad.nombre = ciudad.nombre.toUpperCase();
    });
    Ciudad.addHook('beforeValidate', (ciudad) => {
        if (ciudad.nombre && ciudad.nombre != "") ciudad.nombre = ciudad.nombre.toUpperCase();
    });

    return Ciudad;
}