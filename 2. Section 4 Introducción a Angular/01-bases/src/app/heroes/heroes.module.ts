import { CommonModule } from '@angular/common';
import { NgModule }  from '@angular/core'

// Importamos los componentes
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // Los modulos tienen declaraciones las cuales indican que cosas contiene este modulo,
    // por ejemplo que componentes, pipes entre otras cosas.
    // NOTA: Las declaraciones es un arreglo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Otra pieza fundamental en los modulos es indicar que cosas quiero que sean visibles
    // afuera de este modulo
    exports: [
        ListadoComponent
    ],
    // Cuanto veamos esto imports indica que acá adentro van modulos, ya que usualmente solo
    // modulos son objetos que se colocan en los imports
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}