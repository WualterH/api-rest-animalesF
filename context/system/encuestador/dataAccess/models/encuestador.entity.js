module.exports = (sequelize, type) => {

    const Encuestador = sequelize.define('encuestador',
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
            },                       
        },
        {
            indexes: [
                { unique: true, fields: ['nombre'] }
            ]
        }
    );

    Encuestador.addHook('beforeCreate', (encuestador) => {
        encuestador.nombre = encuestador.nombre.toUpperCase();
    });
    Encuestador.addHook('beforeValidate', (encuestador) => {
        if (encuestador.nombre && encuestador.nombre != "") encuestador.nombre = encuestador.nombre.toUpperCase();
    });

    return Encuestador;
}