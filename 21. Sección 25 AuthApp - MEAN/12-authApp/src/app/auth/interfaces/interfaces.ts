// Creamos una interface para la respuesta del login, con el fin de mantener el tipado
export interface AuthResponse {

    ok    : boolean;
    uid  ?: string;
    name ?: string;
    token?: string;
    msg   : string; 

}

// Creamos una interface para el tipado de la información del usuario
export interface Usuario {

    uid: string;
    name: string;

}