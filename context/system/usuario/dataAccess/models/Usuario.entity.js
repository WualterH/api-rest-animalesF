

module.exports = (sequelize, type) => {
  const Usuario = sequelize.define("usuario",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estado_usuario: type.BOOLEAN,
      nombre_usuario: {
        type: type.STRING,
        allowNull: false,
        validate: {
          len: { args: [[3, 50]], msg: "Nombre de usuario debe tener entre 3 y 50 caracteres." },
          notEmpty: {
            msg: 'El nombre no puede estar vacío'
          },
        }
      },
      email_usuario: {
        type: type.STRING,
        allowNull: false,
        validate: {
          len: { args: [[15, 50]], msg: "El email debe tener minimo 15 caracteres y maximo 50." },
          isEmail: {
            msg: 'El email no es valido',
          }
        },
        unique: {
          args: true,
          msg: "El EMAIL ya existe"
        }
      },
      clave_usuario: {
        type: type.STRING,
        allowNull: false,
        validate: {
          len: { args: [[6, 50]], msg: "La contraseña debe tener minimo 6 caracteres y maximo 50" },
          notEmpty: {
            msg: "La constraseña no puede estar vacia"
          },
          notNull: {
            msg: "La constraseña no puede estar vacia"
          }
        }
      },
      id_rol: {
        type: type.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "El rol no puede estar vacio"
          }
        }
      },
      userAt: type.STRING
    },
    {
      indexes: [
        { unique: true, fields: ['email_usuario'] }
      ]
    }
  );

  Usuario.addHook('beforeCreate', (usuario) => {
    usuario.nombre_usuario = usuario.nombre_usuario.toUpperCase();
    usuario.email_usuario = usuario.email_usuario.toUpperCase();
  });

  Usuario.addHook('beforeUpdate', (usuario) => {

    if (usuario.nombre_usuario) usuario.nombre_usuario = usuario.nombre_usuario.toUpperCase();
    if (usuario.email_usuario) usuario.email_usuario = usuario.email_usuario.toUpperCase();
    if (usuario.userAt) usuario.userAt = usuario.userAt.toUpperCase();

  });

  return Usuario;

};
