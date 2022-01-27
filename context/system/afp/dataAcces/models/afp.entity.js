
module.exports = (sequelize, type) => {

    const Afp = sequelize.define('afp',
        {

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
                    len: { arg: [1, 150], msg: "El nombre de    be tener minimo 1 caracter y maximo 150" },
                    notNull: { msg: "El nombre es requerido" },
                    notEmpty: { msg: "El nombre es requerido" },
                },
                unique: {
                    args: true,
                    msg: "El nombre ya existe"
                }
            },
            tasa: {
                type: type.FLOAT,
                allowNull: false,
                validate: {
                    notNull: { msg: "La tasa es requerida" }
                }
            },
            userAt: type.STRING
        },
        {
            indexes: [
                { unique: true, fields: ['nombre'] }
            ]
        }
    );
    Afp.addHook("beforeCreate", (afp) => {
        if (afp.nombre) afp.nombre = afp.nombre.toUpperCase();
        if (afp.userAt) afp.userAt = afp.userAt.toUpperCase();
    });
    Afp.addHook("beforeValidate", (afp) => {
        if (afp.nombre) afp.nombre = afp.nombre.toUpperCase();
        if (afp.userAt) afp.userAt = afp.userAt.toUpperCase();
    })

    return Afp;
}