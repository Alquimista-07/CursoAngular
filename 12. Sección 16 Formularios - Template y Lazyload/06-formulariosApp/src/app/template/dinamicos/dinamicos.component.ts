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

}
