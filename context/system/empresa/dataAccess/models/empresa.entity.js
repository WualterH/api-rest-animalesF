

module.exports = (sequelize, type) => {

    const Empresa = sequelize.define('empresa', {

        id: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: type.STRING,
            allowNull: false,
            validate: {
                len: {
                    arg: { arg: [3, 150], msg: "El nombre es requerido" }
                },
                notEmpty: { msg: "El nombre no puede estar vacío" }
            }
        },
        run: {
            type: type.STRING,
            allowNull: false,
            validate: {
                len: { arg: [5, 20], msg: "Minimo 5 y maximo 20 caracteres" },
                notEmpty: "El run es requerido"
            },
            unique: {
                msg: "El RUN ya existe"
            }

        },
        ubicacion: {
            type: type.STRING,
            allowNull: false,
            validate: {
                len: { arg: [1, 255], msg: "Minimo 1 y maximo 255 caracteres" },
                notEmpty: "La ubicacion es requerida"
            }
        },
        ciudad: {
            type: type.INTEGER,
            allowNull: false,
            validate: {
                notNull: "La ciudad es requerida",
                notEmpty: "La ciudad es requerida"
            }
        },
        representante: {
            type: type.STRING,
            allowNull: false,
            validate: {
                len: { arg: [3, 155], msg: "El minimo son 3 y el maximo 155" },
                notNull: "El representante es requerido",
                notEmpty: "El representante es requerido"
            }
        },
        cedula: {
            type: type.STRING,
            allowNull: false,
            validate: {
                len: { arg: [6, 20], msg: "El minimo son 6 y el maximo 20" },
                notNull: "La cedula es requerido",
                notEmpty: "La cedula es requerido"
            }
        },

        userAt: type.STRING

    },
        {
            indexes: [
                {
                    unique: true, fields: ['run']
                }
            ]
        }
    );

    Empresa.addHook('beforeCreate', (empresa) => {

        empresa.nombre = empresa.nombre.toUpperCase();
        empresa.run = empresa.run.toUpperCase();
        empresa.ubicacion = empresa.ubicacion.toUpperCase();
        empresa.representante = empresa.representante.toUpperCase();
        empresa.cedula = empresa.cedula.toUpperCase();

    });

    Empresa.addHook('beforeValidate', (empresa) => {

        empresa.nombre = empresa.nombre.toUpperCase();
        empresa.run = empresa.run.toUpperCase();
        empresa.ubicacion = empresa.ubicacion.toUpperCase();
        empresa.representante = empresa.representante.toUpperCase();
        empresa.cedula = empresa.cedula.toUpperCase();

    });

    return Empresa;

}