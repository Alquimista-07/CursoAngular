import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from 'src/environments/environment';

import { AppModule } from './app/app.module';

// Ahora vamos a importra mapbox
// NOTA: Ojo en la web del tutorial usa la anterior forma de importación de EcmaScript que es con el require
//       pero se vería un poco feo, entonces vamos a usarlo con la nueva forma de importación que es usando la 
//       palabra import. 
//       
//       El problema que tenemos es que no tenemos las interfaces ya que es una libraría escrita en JavaScript
//       de tal forma que el mismo lenguaje me esta indicando que es una librería de JavaScript pero no tiene 
//       el tipado de TypeScript por lo cual estaríamos importando un montón de objetos que no tienen un tipo
//       y eso a TypeScript no le gusta. 
//
//       Por lo tanto para solucionar el error existe un paquete enorme que tiene el tipado de librerías que no 
//       fueron escritas en TypeScript, por lo tanto en la solucion que nos sugiere el Visual Studio Code nos 
//       dice que intentemos instalar un paquete usando el comando npm i --save-dev @types/mapbox-gl y como se
//       observa viene de un @types que es básicamente un paquete en el cual se encuentran cientos o miles o tal 
//       vez más librerías que no fueron escritas en TypeScript pero tienen sus anotaciones de TypeScript para 
//       que los podamos usar sin ningún inconveniente y sepamos que objetos usar.
//       
//       Pero lo anterior no nos soluciona todavía todo el problema, ya que nos sigue marcando error yq que nos dice
//       que Este módulo se declara con using'export =', y solo se puede usar con una importación predeterminada cuando 
//       se usa la bandera 'allowSyntheticDefaultImports'. Entonces es necesario usar esa bandera y agregarla al archivo
//       tsconfig.json y colocarla en true
import mapboxgl from 'mapbox-gl';
 
// Y a pesar de que es un token valido nos arreoja un error el cual lo podemos solventar de la siguiente forma:
mapboxgl.accessToken = environment.mapboxToken;

// Verificamos si el dispositivo en el cual se esta accediendo al sitio tiene disponible la geolocalización
// y por lo tanto si no es soportada ni siquiera se hace la renderización de la aplicación
if ( !navigator.geolocation ){
  alert('Navegador no soporta la geolocalización');
  throw new Error('Navegador no soporta la geolocalización');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
