import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

// Creamos una variable para las rutas principales de la aplicación
const routes: Routes = [

    // Ahora definimos cada una de mis rutas
    
    // Configuración de la ruta principal de mi aplicación, es decir, el primer componente que 
    // quero mostrar
    {
        path: '', // index o la pagina inicial que se muestra
        component: PorPaisComponent,
        pathMatch: 'full' // Indica que cuando estemos en la url sin especificar caiga directamente en dicho lugar ya que si por ejemplo tenemos localhost:4200/pais también cumple ya que coincidiría con que empiece con un string vacío
    },
    
    // Ahora definimos el otro path que es el componente que se va a mostrar cuando
    // alguien entre a /region
    {
        path: 'region',
        component: PorRegionComponent
    },

    // Ahora definimos el otro path que es el componente que se va a mostrar cuando
    // alguien entre a /capital
    {
        path: 'capital',
        component: PorCapitalComponent
    },

    // Ahora existe una ruta especial que es para ver pais en la cual como dicho path
    // necesita el id del pais ese se debería pasar para mostrar el pais, y como el id
    // del pais no lo podemos definir quemado en código usamos los : y el nombre del 
    // argumento que se va a mandar que en este caso es codigoPais
    {
        path: 'pais/:idPais',
        component: VerPaisComponent
    },

    // Ahora añandimos una excepción que va a servir para que cuando la persona navegue a una
    // ruta inexistente lo lleve a una ruta por defecto que podría ser por ejemplo un 404Component. 
    // Usualmente esta excepciones se agregan
    // al final.
    {
        path: '**', // Cualquier otro path de los que están definidos arriba
        redirectTo: '' // Redireccione al inicio en este caso para el ejercicio pero como se menciono se puede llevar a un pagina de error 404 personalizada
    }

]

@NgModule({
    imports: [
        // Ahora para las rutas usamos un modulo de angular que es el RouterModule
        // el cual nos ayuda a manjar las rutas y puede ser forRoot para las rutas
        // principales o forChild para las rutas hijas
        RouterModule.forRoot( routes )
    ],
    exports: [
        // Para usar el modulo de rutas hay que exportarlo
        RouterModule
    ]
})
export class AppRoutingModule {



}