import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importamos el modulo personalizado que creamos y que nos permite mantener
// de una forma ordenada y centralizada todas las importaciones de PrimeNg que necesitemos
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
