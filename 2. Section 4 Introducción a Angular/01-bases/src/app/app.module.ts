import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Importamos el componente ya que si no lo agregamos al module nos va a dar error
// cuando tratemos de usarlo en el template del app.component
import { contadorComponent } from './contador/contador.component';

// Importamos el modulo HeroesModule que creamos en el archivo heroes.module.ts
import { HeroesModule } from './heroes/heroes.module';

// Comentamos lo siguiente ya que los tenemos ya creados e importados en el modulo que creamos
// llamado heroes.module.ts
// Impoertamos el heroe component
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    contadorComponent,
    // Comentamos lo siguiente ya que los tenemos ya creados e importados en el modulo que creamos
    // llamado heroes.module.ts
    //HeroeComponent
    //ListadoComponent
  ],
  imports: [
    BrowserModule,
    // Ahora recordando que los imports indica que acá adentro van modulos entonces
    // importamos el modulo HeroesModule que creamos en el archivo heroes.module.ts
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
