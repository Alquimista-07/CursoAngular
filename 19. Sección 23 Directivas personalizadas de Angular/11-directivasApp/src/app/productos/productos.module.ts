import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importamos el modulo para trabajar con formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';

import { ProductosRoutingModule } from './productos-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';

// Ahora como requerimos usar la directiva que esta dentro del shared module y la cual fue exportada
// entonces es necesario importar el shared module dentro de los demás modulos los que vayamos a usar
// las directivas y demás funcionalidades que se tengan dentro del shared module
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AgregarComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductosModule { }
