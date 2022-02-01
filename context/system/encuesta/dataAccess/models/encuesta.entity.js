module.exports = (sequelize, type) => {

    const Encuesta = sequelize.define('encuesta',
        {
            id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },            
            animal: {
                type: type.STRING,
                allowNull: false,
                validate: {
                    len: { arg: [3, 50], msg: 'Minimo 3 y maximo 50 caracteres' },
                    notNull: { msg: "El animal es requerido" }
                },                
            },
            url: {
                type: type.STRING,
                allowNull: false,
                validate: {
                    len: { arg: [3, 50], msg: 'Minimo 3 y maximo 50 caracteres' },
                    notNull: { msg: "La url es requerida" }
                },                
            }
        },
        {
            // indexes: [                
            //     { unique: true, fields: ['animal'] }
            // ]
        }
    );

    Encuesta.addHook('beforeCreate', (encuesta) => {        
        encuesta.animal = encuesta.animal.toUpperCase();
    });
    Encuesta.addHook('beforeValidate', (encuesta) => {        
        if (encuesta.animal && encuesta.animal != "") encuesta.animal = encuesta.animal.toUpperCase();
    });

    return Encuesta;
}