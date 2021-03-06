import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importamos el modulo personalizado que creamos el cual contiene los elementos que vamos
// a necesitar y usar de PrimeNg
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

// Ahora para poder usar el pipe tenemos que importarlo y declararlo
import { MayusculasPipe } from './pipes/mayusculas.pipe';

// Importamos el nuevo pipe creado
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    // Components
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,

    // Pipes
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ]
})
export class VentasModule { }
