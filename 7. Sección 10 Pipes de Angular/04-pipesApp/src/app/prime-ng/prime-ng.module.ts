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

// Importamos el modulo necesario para el efecto ripple de los botones
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    RippleModule
  ]
})
export class PrimeNgModule { }
