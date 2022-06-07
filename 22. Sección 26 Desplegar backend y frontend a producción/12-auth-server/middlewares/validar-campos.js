const { response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = ( req, res = response, next ) => {

    // Ahora acá viene un objeto que el middleware check de express validator envía a través
    // del req y con el cual trabajaremos las validaciones
    const errors = validationResult( req );

    if( !errors.isEmpty() ){
        // Entonces si el objeto errors no viene vacío, es decir, se presentó un error
        // entonces enviamos un estatus 400 que es un bad request error
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    // Acá ocupamos una nueva función la cual se invoca cuando todo es correcto y por lo tanto
    // procede al siguiente middleware
    next();

}

// Exportamos
module.exports = {
    validarCampos
}