module.exports = (sequelize, type) => {

    const EstadoCivil = sequelize.define("estadoCivil", {
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
                notEmpty: { msg: "El nombre de Estado Civil es requerido" },
                len: { args: [3, 150], msg: "Minimo 3 y maximo 150 caracteres" },
            },
            unique: {
                args: true,
                msg: "El Nombre del Estado Civil ya existe"
            }
        },
        userAt: type.STRING
    },
        {
            indexes: [
                { unique: true, fields: ['nombre'] }
            ]
        });

    EstadoCivil.addHook('beforeCreate', (estadoCivil) => {
        estadoCivil.nombre = estadoCivil.nombre.toUpperCase();
        estadoCivil.userAt = estadoCivil.userAt.toUpperCase();
    });
    EstadoCivil.addHook('beforeValidate', (estadoCivil) => {
        if (estadoCivil.nombre) estadoCivil.nombre = estadoCivil.nombre.toUpperCase();
        if (estadoCivil.userAt) estadoCivil.userAt = estadoCivil.userAt.toUpperCase();
    });

    return EstadoCivil;

}