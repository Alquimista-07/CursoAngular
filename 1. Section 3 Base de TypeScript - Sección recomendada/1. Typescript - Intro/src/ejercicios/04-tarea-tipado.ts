/*
    ===== Código de TypeScript =====
*/

//===========================================
// 18. Tarea sobre objetos e interfaces
//===========================================

interface SuperHeroe {
    
    nombre: string;
    edad: number;
    direccion: Direccion, // Asignamos la interface creada
    mostrarDireccion: () => string;

}

// Para el manejo del objeto anidado creamos otra interface
interface Direccion {

    calle: string;
    pais: string;
    ciudad: string;

}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion );
