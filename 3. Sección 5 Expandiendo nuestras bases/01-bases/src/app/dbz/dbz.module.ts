import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    // Exportamos el modulo para usarlo fuera del modulo
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
