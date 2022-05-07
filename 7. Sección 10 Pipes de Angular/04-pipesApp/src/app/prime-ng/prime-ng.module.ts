import { NgModule } from '@angular/core';

// PrimeNg
// Importamos el modulo de PrimeNg para usar los cards
import { CardModule } from 'primeng/card';
// Importamos el modulo de PrimeNg para usar los botones
import { ButtonModule } from 'primeng/button';
// Importamos el menu bar de PrimeNg
import { MenubarModule } from 'primeng/menubar'

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
