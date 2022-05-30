import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    // NOTA: Para cambiar el color a la gráfica agregamos otro atributo que es el backgroundColor
    //       adicionalmente una paleta de colores que nos puede ayudar la tenemos disponible en el
    //       siguiente enlace: https://color.adobe.com/es/create/color-wheel
    //       Adicionalmente existe otro parámetro que es el hoverBackgroundColor el cual define el color
    //       que aparece cuando nos paramos sobre cada una de las barras de la gráfica.
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#638CF8', hoverBackgroundColor: 'yellow' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#579DD9', hoverBackgroundColor: 'yellow' },
      { data: [ 8, 33, 40, 66, 86, 45, 100 ], label: 'Series C', backgroundColor: '#6DD5F0', hoverBackgroundColor: 'yellow' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
