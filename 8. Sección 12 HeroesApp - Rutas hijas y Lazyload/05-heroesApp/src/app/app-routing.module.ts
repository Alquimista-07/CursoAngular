import { NgModule } from '@angular/core';

// Importamos lo necesario para el manejo de rutas
import { RouterModule, Routes } from '@angular/router';

// Importamos el componente pagina error 404
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  // Ahora en algún punto de mis rutas principales necesito decirle a Angular que si alguien
  // navega a cierta ruta entonces cargue ese modulo, entonces para ello nos definimso una nueva
  // ruta principal
  {
    path: 'auth',
    // Entonces por lo tanto cuando alguién entre a esta ruta va ahí si va a cargar los hijos
    // y lo demás que se definio en las rutas hijas
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },

  // Ahora agregamos la ruta para cargar las rutas hijas del modulo de heroes usando lazyload
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule )
  },

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
