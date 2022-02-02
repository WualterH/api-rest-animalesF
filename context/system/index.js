module.exports = {

    Usuario: require("./usuario/dataAccess/models/Usuario.entity"),
    UsuarioService: require("./usuario/service/usuario.service"),
    UsuarioBusiness: require("./usuario/domain/usuario.business"),
    UsuarioRepository: require("./usuario/dataAccess/repositories/usuario.repository"),

    RolUsuario: require("./role/dataAccess/models/rolUsuario.entity"),
    RolUsuarioService: require("./role/service/rolUsuario.service"),
    RolUsuarioBusiness: require("./role/domain/rolUsuario.business"),
    RolUsuarioRepository: require("./role/dataAccess/repository/rolUsuario.repository"),

    Permiso: require('./role/dataAccess/models/permiso.entity'),
    PermisoService: require('./role/service/permiso.service'),
    PermisoBusiness: require('./role/domain/permiso.business'),
    PermisoRepository: require('./role/dataAccess/repository/permiso.repository'),

    RolPermiso: require('./role/dataAccess/models/rolPermiso.entity'),
    RolPermisoService: require('./role/service/rolPermiso.service'),
    RolPermisoBusiness: require('./role/domain/rolPermiso.business'),
    RolPermisoRepository: require('./role/dataAccess/repository/rolPermiso.repository'),


    Encuesta: require('./encuesta/dataAccess/models/encuesta.entity'),
    EncuestaService: require('./encuesta/service/encuesta.service'),
    EncuestaBusiness: require('./encuesta/domain/encuesta.business'),
    EncuestaRepository: require('./encuesta/dataAccess/repository/encuesta.repository'),

    Persona: require('./persona/dataAccess/models/persona.entity'),   
    PersonaRepository: require('./persona/dataAccess/repository/persona.repository'),

    EncuestaPersona: require('./encuestaPersona/dataAccess/models/encuestaPersona.entity'), 
    EncuestaPersonaRepository: require('./encuestaPersona/dataAccess/repository/encuestaPersona.repository'),

    Encuestador: require('./encuestador/dataAccess/models/encuestador.entity'),
    EncuestadorService: require('./encuestador/service/encuestador.service'),
    EncuestadorBusiness: require('./encuestador/domain/encuestador.business'),
    EncuestadorRepository: require('./encuestador/dataAccess/repository/encuestador.repository'),
}