import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Importamos el modulo personalizado que creamos y que nos permite mantener
// de una forma ordenada y centralizada todas las importaciones de PrimeNg que necesitemos
import { PrimeNgModule } from './prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
