import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Ariadna';

  // Entonces para determinar el género y cambiar las palabras que contengan género
  // necesitamos hacer lo siguiente:
  genero: string = 'femenino';

  // Como el pipe i18nSelect recibe obligatoriamente otro argumento el cual es el mapping,
  // nosotros debemos definir un objeto con las propiedades que queremos que se muestren en 
  // este caso dependiendo del genero.
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  // i18nPlural
  // Este pipe i18nPlural también recibe el argumento pluralMap el cual es obligatorio y el valor locale
  // el cual es opcional.
  clientes: string[] = [ 'Maria', 'Pedro', 'Juan', 'Ariadna', 'Fernando' ];

  // Como necesitamos el mapa lo creamos y el cual es un objeto que tiene que tener las diferentes opciones
  // que puede tener el valor clientes.length el cual trabaja con valores tanto positivos como negativos
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.', // Si el length es igual a cero entonces lo que se va a mostrar es el valor asignado
    '=1': 'tenemos un cliente esperando.',        // Si el length es igual a uno entonces cambiamos el mensaje
    '=2': 'tenemos 2 clientes esperando',         // Si el length es igual a 2 cambiamos el mensaje
    // Ahora para no hacer todo esto de repetir a cada rato entonces tenemos un valor por defecto que
    // es el other al cual le asignamos el signo numeral (#) y este se encarga ya de asignar automáticamente el valor que nos esta danado
    // el length de la variable.
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = "Juan";
    this.genero = 'masculino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

}
