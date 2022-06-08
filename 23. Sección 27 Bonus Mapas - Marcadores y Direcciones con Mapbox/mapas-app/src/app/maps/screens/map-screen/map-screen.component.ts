import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})
export class MapScreenComponent implements OnInit {

  // Inyectamos el servicio places.service.ts que se creo con el método para obtener la geolocalización
  constructor( private placesService: PlacesService ) { }

  ngOnInit(): void {
  }

}
