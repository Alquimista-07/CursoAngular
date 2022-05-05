import { NgModule } from '@angular/core';

// PrimeNg
// Importamos el modulo de PrimeNg para usar los cards
import { CardModule } from 'primeng/card';
// Importamos el modulo de PrimeNg para usar los botones
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }
