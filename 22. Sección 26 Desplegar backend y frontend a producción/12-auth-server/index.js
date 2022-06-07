// NOTA: Para probrar nuestro backend usaremos Postman el cual nos permite hacer las
//       peticiones Http con su respectiva ruta.


// Importamos express
const express = require('express');

// Ahora para los CORS (Cross Domain) es necesario realizar la siguiente importación
const cors = require('cors');

// Importamos el paquete path
const path = require('path');

// Importamos la configuración de la base de datos
const { dbConnection } = require('./database/config');

// Para congigurar las variables de entorno configuramos usando el paquete dotenv que
// habíamos instalado el cual toma el archivo .env por defecto y para ello hacemos lo 
// siguiente:
require('dotenv').config();

// Adicionalmente este process.env es el que vamos a usar para hacer referencia al PORT que 
// hayamos definido en el archivo .env y vamos a usar en la funcón que levanta el servidor 
// (app.listen())

// Crear el servidor/aplicación de express
const app = express();

// Conexión base de datos
dbConnection();

// Directorio Público para mostrar página web con algo cuando se ingrese
// a la dirección ip o url del servidor desde un navegador web.
app.use( express.static( 'public' ) );

//=================================================================================================================
// CORS
//=================================================================================================================
// NOTA: Para configurar el cors vamos a usar algo que se conoce como un middleware.
//       Y un middleware no es más que una función que se ejecuta cuando el interprete pase evaluando
//       cada una de las líneas de código. En este caso el middleware es el use() el cual recibe la 
//       función cors(), la cual si la dejamos sin parametro ya tendríamos la configuración básica, pero 
//       hay que tener en cuenta que le podemos mandar como parámetro más configuraciones del cors como por
//       ejemplo, si solo necesitaramos aceptar peticiones que vienen de un dominio y ese dominio conocemos cual es
//       se lo podemos definir como parámetro al cors y esto ayuda un poco a la protección del backend, ojo no es que
//       lo haga infalible pero si ayuda un poco a la protección del mismo.
//
//       Ahora hay que tener en cuenta que cuando probamos con el Postman visualmente no se ve nada ya que postman por defecto
//       tiene unas cosas que se saltan el cors, pero ya cuando este montado en un servidor ahí si vamos a ver diferencias como
//       por ejemplo google chrome me va a advertir que mi hosting no esta configurado con el cors y que las peticiones de cross
//       domain no son permitidas.
//
//       Ahora el CORS lo ejecutamos como cualquier otro middleware, entonces lo hacemos de la siguiente
//       manera:
app.use( cors() );

//=================================================================================================================
// Lectura y parseo del body
//=================================================================================================================
// A continuación vamos a implementar otro middleware que me va a permitir poder leer la información que viene en el body.
// Y una ventaja es que este middleware ya viene incluido en el paquete de express y le indicamos que es json() ya que la
// información viene en ese formato.
app.use( express.json() );


// Acá vamos a configurar las rutas
// NOTA: Para configurar las rutas vamos a usar algo que se conoce como un middleware de express.
//       Y un middleware no es más que una función que se ejecuta cuando el interprete pase evaluando
//       cada una de las líneas de código. 
//       En este caso el middleware es el use() el cual recibe como primer parámetro la ruta princiapl que 
//       le queremos dar a la aplicación que en este caso es '/api/auth', y recibe un segundo parámetro el 
//       cual es la importación del archivo donde especificamos las rutas y que en este caso lo llamamos auth.js
//=================================================================================================================
// Rutas
//=================================================================================================================
app.use( '/api/auth', require('./routes/auth') );

// Manejar demás rutas
app.get( '*', ( req, res ) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
});


// Levantamos la aplicación de express indicando que va a ser a través del pueto 4000
// y hacemos un llanado a un callback (función anónima) y le indicamos un console.log 
// que nos va a servir como una confirmación e indicar que efectivamente el servidor 
// se esta ejecutando.
app.listen( process.env.PORT, () => {
    console.log( `Servidor ejecutandose en el puerto ${ process.env.PORT }` );
});