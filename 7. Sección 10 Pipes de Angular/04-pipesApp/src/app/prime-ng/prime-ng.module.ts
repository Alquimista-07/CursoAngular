import { NgModule } from '@angular/core';

// PrimeNg
// Importamos el modulo de PrimeNg para usar los cards
import { CardModule } from 'primeng/card';
// Importamos el modulo de PrimeNg para usar los botones
import { ButtonModule } from 'primeng/button';
// Importamos el menu bar de PrimeNg
import { MenubarModule } from 'primeng/menubar'
// Importamos el fieldset de PrimeNg
import { FieldsetModule } from 'primeng/fieldset'

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
