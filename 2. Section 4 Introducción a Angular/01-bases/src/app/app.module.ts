import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Importamos el componente ya que si no lo agregamos al module nos va a dar error
// cuando tratemos de usarlo en el template del app.component
import { contadorComponent } from './contador.component';

@NgModule({
  declarations: [
    AppComponent,
    contadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
