// Creamos un middleware que me va a servir para validar el JWT

// Importamos el response del express para tener el tipado
const { response } = require("express");

// Importamos el paquete de jsonwebtoken para el tema de la validación
const jwt = require('jsonwebtoken');

const validarJWT = ( req, res = response, next ) => {

    // NOTA: Ahora en postman vamos a recibir el token por los header, también se podría como un query param pero generalmente se
    //       acostumbra hacerlo por los headers, entonces en postamn vamos a la petición que creamos para renovar el token, damos 
    //       click en headers y posteriormente colocamos la key que en este caso la llamamos x-token (header personalizado que aunque 
    //       sirve un poco a manera de seguridad no lo hace infalible) y le pasamos un valor por defecto solo para probar como recibimos 
    //       la información acá porque como tal ese valor no es nuesto token. Entonces para leer el header que quiero leer hacemos lo siguiente.
    const token = req.header( 'x-token' );

    // Ahora si no tenemos el token
    if( !token ){
        // Retornamos un status 401 - unauthorized (No autenticado) y lo sacamos para que no se pueda hacer nada más
        return res.status(401).json({
            ok: false,
            msg: 'Error en el token'
        });
    }

    try {

        // Acá hacemos la validación del JWT propiamente, para ello ocupamos importar
        // el paquete jsonwebtoken. Y le mandamos el token y el seed que definimos en 
        // las variables de entorno, adicionalmente cabe resaltar que si se cambia almenos 
        // 1 letra en el seed eso inhabilita todos los JWT generados.
        // Ahora si el JWT se logra verificar voy a a obtener un objeto el cual es el payload
        // y como sabemos allá tenemos el uid, y el name entonces desestructuramos para obtenerlos
        const { uid, name } = jwt.verify( token, process.env.SECRET_JWT_SEED );

        // Ahora si el JWT es correcto necesitamos pasar el pyaload del middleware al controlador
        // porque necesito almacenarla y saber que usuario es, etc, en el lado de front-end.
        // Entonces para pasar la información del middleware al controlador express ya nos ofrece
        // una funcionalidad muy conveniente que nosotros podemos modificar o añadir propiedades en
        // la request ya que esta request es la misma que va a llegar al controlador ya que como sabemos
        // todos los objetos pasan por referencia en JavaSript
        req.uid = uid;
        req.name = name;

    }
    catch (err) {
        console.log( err );
        // Si tenemos un error significa que el token no se pudo leer, entonces mandamos un
        // status 401 - unauthorized (No autenticado)
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }

    // TODO OK.
    // Como se había mencionado cuando se creo el middleware para validar campos
    // tenemos que usar la función next() para proceda al siguiente middleware si
    // todo sale bien.
    next();

}

// La exportamos
module.exports = {
    validarJWT
}