import { Component, OnInit } from '@angular/core';

// Importamos el mapbox
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
  .mapa-container {
    width: 100%;
    height: 100%;
  }

  .row {
    background-color: white;
    border-radius: 5px;
    bottom: 50px;
    left: 50px;
    padding: 10px;
    position: fixed;
    z-index: 999;
  }

  `
  ]
})
export class ZoomRangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var map = new mapboxgl.Map({
      container: 'mapa-zoom-range',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -72.56019992138917, 6.318082682981575 ], 
      zoom: 18
    });

  }

}
