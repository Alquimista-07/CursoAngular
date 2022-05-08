import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Para poder usar el fieldset de PrimeNg es necesario importar otro modulo que es importante
// y el cual contiene las animaciones y que son propias de Angular, entonces para ello importamos
// el siguiente modulo
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Importamos el modulo app router para poder usar las rutas
import { AppRouterModule } from './app-router.module';

// Importamos el shared module que creamos
import { SharedModule } from './shared/shared.module';

// Importamos el modulo de ventas
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app para el cambio de idioma.
// Que en este caso se eligió español Colombia pero Angular
// nos provee de muchos paquetes en difetentes idiomas
import localEsCo from '@angular/common/locales/es-CO';
// Ahora si quisieramos ocupar otro idioma como el francés hacemos lo siguiente:
import localFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common';
registerLocaleData( localEsCo );
// Ahora es necesario registrar el nuevo idioma
registerLocaleData( localFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    // Ahora podríamos usar el parametro locale del pipe date (ver documentación oficial) pero 
    // lo que quiero hacer es cambiar el idioma de manera global, por lo tanto lo registramos en 
    // los providers de la siguiente forma:
    { provide: LOCALE_ID, useValue: 'es-CO' } // Este parametro usevalue proviene del valor que especificamos arriba en la importación
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
