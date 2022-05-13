import { NgModule } from '@angular/core';

// Ahora si en este proyecto vamos a iniciar a trabajar con angular material ya que anteriormente solo se había 
// instalado ejecutando el comando ng add @angular/material
// Para ver más información sobre Angular Material podemos ir al enlace
// https://material.angular.io/
// Y para ver la documentación de los iconos podemos ir al enlace https://fonts.google.com/icons?selected=Material+Icons:bookmark

// Entonces en este modulo vamos a importar todo lo correspondiente a Angular Material

// Importamos los botones
import { MatButtonModule } from '@angular/material/button';
// Importamos los iconos
import { MatIconModule } from '@angular/material/icon';
// Importamos los card
import { MatCardModule } from '@angular/material/card';
// Importamos la lista
import { MatListModule } from '@angular/material/list';
// Importamos el sidenav
import { MatSidenavModule } from '@angular/material/sidenav';
// Importamos el toolbar
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
