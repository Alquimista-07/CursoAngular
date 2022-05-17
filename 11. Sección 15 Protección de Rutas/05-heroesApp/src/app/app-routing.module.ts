import { NgModule } from '@angular/core';

// Importamos lo necesario para el manejo de rutas
import { RouterModule, Routes } from '@angular/router';

// Importamos el componente pagina error 404
import { ErrorPageComponent } from './shared/error-page/error-page.component';

// Importamos el guard
import { AuthGuard } from './auth/guards/auth.guard';


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
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule ),

     // NOTA: Entonces así como los servicios debemos usar el guard, entonces en este caso lo vamos a usar
    //       en el sistema de rutas principal, pero lo podemos usar en cualquier lugar donde tengamos rutas
    //       definidas porque puede que necesitemos que pueda activar ciertas rutas y otras rutas no. Por lo
    //       tanto en este caso queremos evitar que pueda cargar el modulo heroes si no esta autenticado:

    canLoad: [ AuthGuard ], // Aca podemos especificar cuantos guards queramos definidos en un arreglo y el único argumento
                            // que se especifica acá es como se llama el guard.

    // Entonces aca vamos a prevenir que se pueda activar así como prevenimos que se pudiera cargar
    canActivate: [ AuthGuard ]   // Aca podemos especificar cuantos guards queramos definidos en un arreglo y el único argumento
                                 // que se especifica acá es como se llama el guard.

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
