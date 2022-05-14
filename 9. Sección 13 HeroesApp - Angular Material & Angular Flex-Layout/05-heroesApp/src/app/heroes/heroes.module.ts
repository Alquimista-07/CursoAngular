import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
