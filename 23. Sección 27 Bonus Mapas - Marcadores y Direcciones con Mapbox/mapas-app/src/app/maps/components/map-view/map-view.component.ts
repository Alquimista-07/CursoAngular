import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  // Inyectamos el servicio donde tenemos el método para geolocalización
  constructor( private placesService: PlacesService ) { }

  ngOnInit(): void {
    console.log( this.placesService.userLocation );
  }

}
