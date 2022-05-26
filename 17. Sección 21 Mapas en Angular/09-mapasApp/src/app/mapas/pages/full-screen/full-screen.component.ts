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
    
    var map = new mapboxgl.Map({
      // Ahora nos dice que debemos cambiar el container: 'YOUR_CONTAINER_ELEMENT_ID' por nuesto elemento
      // entonces en este caso creamos un div con un id llamado mapa en nuestro componente html el cual lo
      // asigmanos acá:
      // container: 'YOUR_CONTAINER_ELEMENT_ID',
      // y eso sería todo lo que nos indica que hagamos en la página de mapbox y hay más tutoriales
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      // Ahora para establecer el punto central en el mapa tenemos que usar una propiedad llamada center la cual viene
      // en formato de longitud y latitud que son numéricos. Otra cosa es que esta es una diferencia con Google Maps ya 
      // que en google maps empieza con latitud y luego longitud pero en Mapbox es latitud y logngitud
      center: [ -72.56019992138917, 6.318082682981575 ], 
      // Ahora necesitamos el nivel de zoom o nivel de acercamiento que queramos el cual lo hacemos de la siguiente manera:
      zoom: 18
    });

  }

}
