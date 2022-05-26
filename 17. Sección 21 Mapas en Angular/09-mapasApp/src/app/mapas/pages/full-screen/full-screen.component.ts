import { Component, OnInit } from '@angular/core';

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
//       Pero lo anterior no nos soluciona todavía tod el problema, ya que nos dice que mapboxgl esta declarado 
//       pero no se ha usado y que no es un móduglo, etc. Y para solucionarlo es muy sencillo solo le indicamos
//       que lo que quiero es que tome toda la librería de JavaScript (indicadolo con el *) y le decimos que la
//       va a conocer en el archivo como mapboxgl (indicandolo con el as) y listo eso es todo.
import * as mapboxgl from 'mapbox-gl';

// Importamos los environment para usarlo
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [`
  #mapa {
    width: 100%;
    height: 100%;
  }
  `
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Posteriormente en la web de mapbox nos dice que insertemos otra parte de codigo
    // la cual es la siguiente:
    //
    // Adicionalmente acá tenemos otro problema ya que en la web viende de la siguiente manera:
    //
    // mapboxgl.accessToken = 'pk.eyJ1IjoidGhlYWxjaGVtaXN0MDciLCJhIjoiY2wzbTVkNm1pMDFhYzNvdXZrMGk5MGRiYiJ9.pOxa86N0FzW03dQiFKcQKA';
    //
    // Y a pesar de que es un token valido nos arreoja un error el cual lo podemos solventar de la siguiente forma:
    (mapboxgl as any).accessToken = environment.mapboxToken; // y debemos pasarle el token de los environments que habíamos definido para cuando requiramos cambiarlo solo lo cambiemos allá
    
    var map = new mapboxgl.Map({
      // Ahora nos dice que debemos cambiar el container: 'YOUR_CONTAINER_ELEMENT_ID' por nuesto elemento
      // entonces en este caso creamos un div con un id llamado mapa en nuestro componente html el cual lo
      // asigmanos acá:
      // container: 'YOUR_CONTAINER_ELEMENT_ID',
      // y eso sería todo lo que nos indica que hagamos en la página de mapbox y hay más tutoriales
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11'
    });

  }

}
