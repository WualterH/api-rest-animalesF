module.exports = (sequelize, type) => {

    const Persona = sequelize.define('persona',
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
            },
            apellido: {
                type: type.STRING,
                allowNull: false,
                validate: {
                    len: { arg: [3, 50], msg: 'Minimo 3 y maximo 50 caracteres' },
                    notNull: { msg: "La apellido es requerida" }
                },                
            }
        },
        {
            indexes: [                
                { unique: true, fields: ['nombre'] }
            ]
        }
    );

    Persona.addHook('beforeCreate', (persona) => {        
        persona.nombre = persona.nombre.toUpperCase();
    });
    Persona.addHook('beforeCreate', (persona) => {        
        persona.apellido = persona.apellido.toUpperCase();
    });
    Persona.addHook('beforeValidate', (persona) => {        
        if (persona.nombre && persona.nombre != "") persona.nombre = persona.nombre.toUpperCase();
    });

    return Persona;
}