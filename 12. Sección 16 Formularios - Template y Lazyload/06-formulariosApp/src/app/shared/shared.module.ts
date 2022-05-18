import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importamos el router module para que funcionen las rutas
import { RouterModule } from '@angular/router';

import { SidemenuComponent } from './sidemenu/sidemenu.component';

// NOTA: Este archivo fue generado con ayuda del Angular CLI (Ver archivo de comandos)

@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidemenuComponent
  ]
})
export class SharedModule { }
