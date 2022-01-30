module.exports = (sequelize, type) => {

    const EncuestaPersona = sequelize.define('encuestaPersona',
        {
            id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },                        
        },        
    );    
    return EncuestaPersona;
}