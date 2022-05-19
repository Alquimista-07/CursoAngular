import { Component } from '@angular/core';

// Creamos las intrefaces para definir como va a lucir la data
interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  // Creamos una nueva propiedad que me va a ayudar para agregar juegos
  nuevoJuego: string = '';

  // Creamos el objeto inicializador del formularios
  persona: Persona = {
    nombre: 'Ariadna',
    favoritos: [
      {
        id: 1,
        nombre: 'Metal Gear'
      },
      {
        id: 2,
        nombre: 'Call of dutty'
      }
    ]
  }

  guardar() {
    console.log( 'Formulario Posteado' )
  }

  eliminar( index: number ) {
    this.persona.favoritos.splice(index,1);
  }

  // Agregar juegos favoritos
  agregarJuego() {

    if( this.nuevoJuego !== '' ){

      const nuevoFavorito: Favorito = {
        id: this.persona.favoritos.length + 1,
        nombre: this.nuevoJuego
      };
  
      // Mandamos el arreglo como un nuevo objeto usando el operado spred para 
      // esparcir todas sus propiedades y de esta forma asegurarme de que no voy 
      // a mandar ninguna referencia al objeto ya que como sabemos los objetos y 
      // arreglos se pasan por referencia
      this.persona.favoritos.push( {...nuevoFavorito} );
  
      // Limpiamos el campo
      this.nuevoJuego = '';
      
    }

  }

}
