// NOTA: Una buena práctica es hacer primero todas las importaciones que son propiamente
//       de Angular, luego las importaciones de terceros y por último los componentes y modulos
//       que nosotros creamos

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importamos el modulo para el manejo de formularios (tradicional)
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent
  ],
  exports: [
    // Exportamos el modulo para usarlo fuera del modulo
    MainPageComponent
  ],
  imports: [
    CommonModule,
    // Importamos el modulo para el manejo de formularios (tradicional)
    FormsModule
  ]
})
export class DbzModule { }
