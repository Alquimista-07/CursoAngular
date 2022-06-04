// Importamos mongoose
const mongoose = require('mongoose');

// Creamos la función para la conexión de la base de datos y usmos el async
// ya que necesitamos usar el await ya que no quiero que la aplicaión continue
// hasta que se levante la base de datos
const dbConnection = async() => {

    // Usamos un try y catch ya que puede que suceda un error entonces esto nos ayuda a controlarlo
    try {

        // la función connect recibe la cadena de conexión y la cual definimos en una variable de entorno.
        // Adicionalmente recibe un objeto con la configuración que en la página oficial de mongoose recomiendan
        await mongoose.connect( process.env.DB_MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true // Se comento ya que en el video colocan esta propiedad pero arroja error en consola y no conecta la DB
        });

        // Si pasa entonces mostramos un mensaje de información
        console.log( 'DB Online' );

    }
    catch (error) {
        // Imprimimos en consola unos mensajes para saber el detalle del error y adicionalmente si se muestran
        // ya se que nada va a funcionar, ni siquiera los servicios REST
        console.log( error );
        throw new Error('Error a la hora de inicializar la DB');
    }

}

// Ahora como necesito usar la función y demás cosas que tenemos acá
// necesitamos exportarla
module.exports = {
    dbConnection
}