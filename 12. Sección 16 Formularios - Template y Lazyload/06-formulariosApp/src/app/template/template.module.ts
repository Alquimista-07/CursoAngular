import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Para trabajar con formularios necesitamos importar el form module
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';

// Para poder usar la directiva necesitamos declararla
import { CustomMinDirective } from './directives/custom-min.directive';

// NOTA: Este archivo fue generado con ayuda del Angular CLI
//       comando ng g m template --routing (Ver archivo de comandos)

@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
