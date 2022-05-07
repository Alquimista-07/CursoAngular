import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Importamos el modulo app router para poder usar las rutas
import { AppRouterModule } from './app-router.module';

// Importamos el shared module que creamos
import { SharedModule } from './shared/shared.module';

// Importamos el modulo de ventas
import { VentasModule } from './ventas/ventas.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
