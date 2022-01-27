"use strict";

module.exports = (sequelize, type) => {

    const Prevision = sequelize.define('prevision', {

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
                len: { arg: [1, 150], msg: "Debe tener minimo 3 y maximo 150 caracteres" },
                notNull: "El nombre es requerido",
                notEmpty: "El nombre es requerido"
            }
        },
        tasa: {
            type: type.FLOAT,
            allowNull: false,
        },
        userAt: type.STRING
    },
        {
            indexes: [{ unique: true, fields: ['nombre'] }]
        });

    Prevision.addHook('beforeCreate', (prevision) => {
        prevision.nombre = prevision.nombre.toUpperCase();
    });

    Prevision.addHook('beforeValidate', (prevision) => {
        if (prevision.nombre) prevision.nombre = prevision.nombre.toUpperCase();
    });

    return Prevision;

}