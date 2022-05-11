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
// Importamos el toolbar de PrimeNg
import { ToolbarModule } from 'primeng/toolbar';
// Importamos la tabla de primeNg
// NOTA: Adicionalmente para usar este modulo table de PrimeNg debemos hacer una instalación
//       obligatoria para poder usarla, entonces para poder instalarla ejecutamos el comando 
//       npm install @angular/cdk --save
import { TableModule } from 'primeng/table'

// Importamos el modulo necesario para el efecto ripple de los botones
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule,
    RippleModule
  ]
})
export class PrimeNgModule { }
