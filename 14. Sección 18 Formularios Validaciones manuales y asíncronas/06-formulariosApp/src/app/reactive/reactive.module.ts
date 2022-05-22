import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importamos el modulo de formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';

// NOTA: Este archivo fue generado con ayuda del Angular CLI
//       comando ng g m reactive --routing (Ver archivo de comandos)

@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    // Lo primero para usar los formularios reactivos es importar el modulo de formularios reactivos
    ReactiveFormsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
