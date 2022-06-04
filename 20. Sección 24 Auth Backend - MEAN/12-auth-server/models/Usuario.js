// Schema para los usuario que se van a encontrar en la base de datos de MongoDB

// Importamos el schema y el model de mongoose
const { Schema, model } = require("mongoose");

// Este es el modelo de mi schema de base de datos y es todo lo que ocupamos 
// para hacer inserciones, lecturas, actualizaciones, eliminaciones, etc.

const UsuarioSchema = Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

});

// Exportamos el modelo el cual usa la función model que recibe como 
// parámetro el nombre del modelo y el schema, cabe resaltar que 
// nosotros colocamos el nombre del modelo en singular y mongoose 
// se encarga de pasarlo a plural.
module.exports = model( 'Usuario', UsuarioSchema );