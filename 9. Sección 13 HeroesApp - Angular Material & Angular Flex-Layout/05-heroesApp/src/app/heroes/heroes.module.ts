import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importamos el forms module para habilitar el ng-model
import { FormsModule } from '@angular/forms';

// Importamos el flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Importamos las rutas hijas para heroes
import { HeroesRoutingModule } from './heroes-routing.module';

// Importamos el modulo especializado de los componentes de Angular Material
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
// Importamos el nuevo componente que va a contenera la tarjeta
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';




@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
