import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importamos el modulo para trabajar con formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';

import { ProductosRoutingModule } from './productos-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';


@NgModule({
  declarations: [
    AgregarComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }
