import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public colors: Color[] = [
    '#BC76F5',
    '#825FDE',
    '#FABA53'
  ];

  public colorsHover: Color[] = [
    '#69A9FA',
    '#5DB8DE',
    '#5DDEBE'
  ]

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];

    // NOTA: Podemos usar la paleta de colores disponible en el siguiente enlace: https://color.adobe.com/es/create/color-wheel
    //       Y para cambiar el color a la gráfica tenemos que mandar un arreglo de colores a la propiedad backgroundColor,
    //       adicionalmente podemos cambiar el color cuando nos paremos con el mouse uando la propiedad hoverBackgroundColor
    //       y mandandole nuevamente un arreglo de colores

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor: this.colors, hoverBackgroundColor: this.colorsHover }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';



}
