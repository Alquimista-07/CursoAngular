// NOTA: Una buena práctica es hacer primero todas las importaciones que son propiamente
//       de Angular, luego las importaciones de terceros y por último los componentes y modulos
//       que nosotros creamos

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importamos el modulo para el manejo de formularios (tradicional)
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

// Importamos el servicio
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports: [
    // Exportamos el modulo para usarlo fuera del modulo
    MainPageComponent
  ],
  imports: [
    CommonModule,
    // Importamos el modulo para el manejo de formularios (tradicional)
    FormsModule
  ],
  providers: [
    // Los providers son todos los servicios y que se especifican acá
    // Y estos servicios van a servir como singleton, es decir una unica instacia
    // que vamos a tener a lo largo de todo el modulo dbz
    DbzService
  ]
})
export class DbzModule { }
