// Hay que tener en cuenta que acá no es necesario hacer la siguiente importación pero esta nos va a servir
// como ayuda ya que si no la hacemos tendríamos un inconveniente el cual es que no tendríamos la ayuda del tipado
const { response } = require('express');

// Importamos el modelo
const Usuario = require('../models/Usuario');

// Como se había mencionado cada uno de los callback o controladores en nuestro archivo de rutas auth.js pueden crecer bastante
// por lo tanto se recomienda separar el controlador del manejador de la ruta con el fin de mantenerlo lo más ordenado posible, 
// y para esto lo vamos a hacer dentro de este archivo que también lo llamamos auth.js al igual que el archivo de rutas.
// OJO. No es necesario llamarlo igual pero sirve a modo de tener un orden

// Entonces ahora vamos a crear los controladores.

//NOTA: Como se realizo la importación del response entonces vamos a igualar el res al response y le indicaría que res 
//      es de tipo response y por lo tanto ya tenemos la ayuda del tipado.
//================================
// Crear un nuevo usuario
//================================
const crearUsuario = async(req, res = response)=>{

    //NOTA: Entonces para probar lo que estamos mandando por el body usamos postman, el cual en los en los endpoint de
    //      tipo POST (crearUsuario, loginUsuario) configuramos en el postman el body y le indicamos ras y luego el formato 
    //      que es JSON y en la caja de texto que se muestra configuramos el objeto que vamos a enviar por el body. otra cosa
    //      que se puede hacer con postman es genera la documentación de los endpoint que hayamos creado pero eso es tema que 
    //      se debe investigar ya que en el curso no lo explican.

    // Y al darle enviar en el postman podemos hacer un console.log para ver como llega la información
    // console.log( req.body );
    
    // Entonces por lo tanto ya podemos extraer los datos que me intersan podemos desestructurar
    const { email, name, password } = req.body;
    // console.log( email );
    // console.log( name );
    // console.log( password );

    try {

        // 1. Verificar si no existe un email igual ya que el email lo definimos como único.
        //    Para ello buscamos algo cuyo email sea igual al email que estoy recibiendo 
        //    usando una función que ya trae mongoose que es el findOne() y le pasamos el objeto
        //    { email : email } o simplemente como estamos usando el estándar de ES6 solo indicamos
        //    la propiedad ya que ambas variables se llaman igual y ya ES6 lo infiere por nosotros
        const usuario = await Usuario.findOne({ email });

        // Lo anterior va a regresar un objeto y si encuentra un objeto que exista con dicho email
        // entonces la variable usuario va a tener un valor y si tiene un valor tengo que indicarle 
        // que no puedo crear el usuario porque ya el email esta registrado
        if( usuario ){
            // Hacemos el return con un bad request para que se salga y no continue
            return res.status(400).json({
                ok: false,
                msg: 'El email ya existe'
            });
        }

        // 2. Crear usuario con el modelo
        const dbUser = new Usuario( req.body );
        
        // 3. Hashear (encriptar) la constraseña
        
        // 4. Generar el JSON Web Token (JWT) el cual se le va a enviar a Angular para que lo use
        //    como un méotodo de autenticación pasiva

        // 5. Insertar el usuario en la base de datos
        await dbUser.save();
        
        // 6. Generar respuesta exitosa.
        //    Le colocamos un status 201 que indica que se creo un nuevo registro
        //    y cabe resaltar que cualquier status en el rango de 200 es exitoso
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name
        });

    }
    catch (error) {
        console.log( error );
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

}

//================================
// Login de usuario
//================================
const loginUsuario = (req, res = response)=>{

    const { email, password } = req.body;
    console.log( email );
    console.log( password );

    return res.json({
        ok: true,
        msg: 'Login de usuario /'
    });

}

//================================
// Validar y revalidar token
//================================
const revalidarToken = (req, res = response)=>{

    // Y en este caso respondemos con un archivo json
    return res.json({
        ok: true,
        msg: 'Validar y revalidar token /renew'
    });

    // NOTA: Acionalmente si queremos cambiar el status de la respuesta
    //       podemos Agregar el statud de la siguiente manera:
    /*
    res.status(500).json({
            ok: true,
            msg: 'Prueba!',
        });
    */

}

// Ahora necesitamos exportar el controlador nuevamente.
// NOTA: Recordando que anteriormente cuando se creo el archivo de rutas se había mencionado que se puede
//       exportar algo por defecto o un objeto, entonces acá vamos a exportarlo como un objeto ya que requiero
//       exportar varias cosas.
module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}

//NOTA: Adicionalmente acordemonos que no es necesario asignar en el objeto el {crearUsuario : crearUsuario}
//      a no ser de que quisieramos por ejemplo dejarlo como {crear: crearUsuario}