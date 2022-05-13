import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importamos el modulo para las peticiones http dentro del app.module ya que 
// como tenemos nuestros servicios de manera global ocupamos hacer la importación acá
import { HttpClientModule } from '@angular/common/http';

// Importamos el modulo para el manejo de rutas
import { AppRoutingModule } from './app-routing.module';

// Importamos el componene para la pagina de error
import { ErrorPageComponent } from './shared/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
