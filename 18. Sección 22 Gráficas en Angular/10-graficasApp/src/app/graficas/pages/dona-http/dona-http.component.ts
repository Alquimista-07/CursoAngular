import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public colors: Color[] = [
    '#BC76F5',
    '#825FDE',
    '#FABA53',
    '#FA39D7',
    '#FD2D7E'
  ];

  public colorsHover: Color[] = [
    '#69A9FA',
    '#5DB8DE',
    '#5DDEBE'
  ];

  // Creamos una propiedad para los labels
  labels: string[] = [];

  // Creamos una propiedad para la data
  data: number[] = [];

  // Doughnut
  public doughnutChartLabels: string[] = this.labels;

    // NOTA: Podemos usar la paleta de colores disponible en el siguiente enlace: https://color.adobe.com/es/create/color-wheel
    //       Y para cambiar el color a la gráfica tenemos que mandar un arreglo de colores a la propiedad backgroundColor,
    //       adicionalmente podemos cambiar el color cuando nos paremos con el mouse uando la propiedad hoverBackgroundColor
    //       y mandandole nuevamente un arreglo de colores

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.data, backgroundColor: this.colors, hoverBackgroundColor: this.colorsHover }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  // Inyectamos el servicio
  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {

    // Comantamos el siguiente código para ahora implementar lo mismo solo que ahora 
    // se va a usar rxjs el cual nos devuelve ya la data ya lista de la forma que la
    // necesitamos y no tenemos que hacer transformaciones
    /*
    this.graficasService.getUsuariosRedesSociales()
        .subscribe( data =>{

          // console.log( data );

          const labels = Object.keys( data );
          // console.log( labels );

          const valores: number[] = Object.values( data );
          // console.log( valores );

          // Insertamos los labels al arreglo
          labels.forEach( label => {
            this.labels.push( label );
          });

          // Insertamos la data en el arreglo
          valores.forEach( values =>{
            this.data.push( values );
          });

        });
    */

    // Ahora como esto nos devolvía anteriormente un objeto y teníamos que hacerle
    // un ajuste para obtener del objeto y cuadrarla en terminos que la gráfica la 
    // necesitaba. Ahora lo que vamos a hacer es usar un operador de rxjs en el 
    // servicio para hacer lo mismo de una forma más sencilla.
    this.graficasService.getUsuarioRedesSocialesDonaData()
        // Desestructuramos el objeto data proveniente del servicio
        .subscribe( ({ labels, valores }) =>{

          // console.log( data );
          // console.log( labels );
          // console.log( valores );

          // Insertamos los labels al arreglo
          labels.forEach( label => {
            this.labels.push( label );
          });

          // Insertamos la data en el arreglo
          valores.forEach( values =>{
            this.data.push( values );
          });

        })

  }

}
