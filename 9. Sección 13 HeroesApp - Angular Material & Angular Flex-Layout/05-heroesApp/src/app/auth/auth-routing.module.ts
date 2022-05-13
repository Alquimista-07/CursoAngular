import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

// Este es otro modulo de rutas literalmente igual a cualquier otro modulo
// de rutas. Por lo tanto hacemos lo mismo para el tema de rutas

const routes: Routes = [
  {
    // Acá basicamente le indicamos que no me importa que path sea
    // y cuando entren a este modulo acá es donde se va a trabajar
    path: '', 
    // Entonces definimos la rutas hijas (children) que el path '' va a tener
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [
    // NOTA: Cabe resaltar que en nuestra aplicación solo vamos a tener un único modulo de rutas princiapl
    //       o forRoot y las demás van a ser rutas hijas que se van a cargar mediante la carga peresoza o 
    //       lazyload
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
