import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// PrimeNg
// Importamos el modulo de PrimeNg para usar los botones
import { ButtonModule } from 'primeng/button';
// Importamos el modulo de PrimeNg para usar los cards
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
