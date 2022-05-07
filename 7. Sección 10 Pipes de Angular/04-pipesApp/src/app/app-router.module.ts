import { NgModule } from '@angular/core';

// Importamos los modulos para el manejo de rutas
import { RouterModule, Routes } from '@angular/router';

// Importamos los componentes que usa cada una de las rutas
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';

const routes: Routes = [

  // Definimos cada una de las rutas principales
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full' // Indica que cuando estemos en la url sin especificar caiga directamente en dicho lugar ya que si por ejemplo tenemos localhost:4200/pais también cumple ya que coincidiría con que empiece con un string vacío
  },
  {
    path: 'numeros',
    component: NumerosComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'ordenar',
    component: OrdenarComponent
  },
  // Ahora añandimos una excepción o comodín que va a servir para que cuando la persona navegue a una
  // ruta inexistente lo lleve a una ruta por defecto que podría ser por ejemplo un 404Component. 
  // Y Usualmente esta excepciones se agregan al final.
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  // Exportamos el componente router module para poder usarlo
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
