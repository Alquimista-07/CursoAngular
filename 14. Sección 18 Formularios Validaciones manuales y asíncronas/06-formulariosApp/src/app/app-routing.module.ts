import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// NOTA: Este archivo de rutas fue generado automáticamente con el Angular CLI cuando creamos la aplicación
//       y no fue creado como veníamos haciendolo de forma manual en la cual creabamos el archivo, luego
//       definiamos las rutas, importabamos y exportabamos los modulos para posteriormente importar este
//       app-routing.module en el app.module

const routes: Routes = [
  {
    path: 'template',
    loadChildren: () => import('./template/template.module').then( m => m.TemplateModule )
  },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then( m => m.ReactiveModule )
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: '**',
    redirectTo: 'template'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
