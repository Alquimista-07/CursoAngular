import { NgModule } from '@angular/core';

// Importamos lo necesario para el manejo de rutas
import { RouterModule, Routes } from '@angular/router';

// Importamos el componente pagina error 404
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    // Importamos el router module para las rutas principales
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
