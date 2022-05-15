import { NgModule } from '@angular/core';

// Ahora si en este proyecto vamos a iniciar a trabajar con angular material ya que anteriormente solo se había 
// instalado ejecutando el comando ng add @angular/material
// Para ver más información sobre Angular Material podemos ir al enlace
// https://material.angular.io/
// Y para ver la documentación de los iconos podemos ir al enlace https://fonts.google.com/icons?selected=Material+Icons:bookmark

// Entonces en este modulo vamos a importar todo lo correspondiente a Angular Material

// Importamos el autocomplete
import { MatAutocompleteModule } from '@angular/material/autocomplete';
// Importamos los botones
import { MatButtonModule } from '@angular/material/button';
// Importamos el mat form field que también lo necesitamos para el autocomplete
import { MatFormFieldModule } from '@angular/material/form-field';
// Importamos el grid
import { MatGridListModule } from '@angular/material/grid-list';
// Importamos el input que también se necesita para el autocomplete
import { MatInputModule } from '@angular/material/input';
// Importamos los iconos
import { MatIconModule } from '@angular/material/icon';
// Importamos los card
import { MatCardModule } from '@angular/material/card';
// Importamos la lista
import { MatListModule } from '@angular/material/list';
// Importamos el progress spiner
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// Importamos el sidenav
import { MatSidenavModule } from '@angular/material/sidenav';
// Importamos el toolbar
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
