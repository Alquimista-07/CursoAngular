import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Importamos el modulo de las rutas
    AppRoutingModule,
    // Importamos el modulo para el manejo de las peticionea HTTP a la API
    HttpClientModule,
    PaisModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
