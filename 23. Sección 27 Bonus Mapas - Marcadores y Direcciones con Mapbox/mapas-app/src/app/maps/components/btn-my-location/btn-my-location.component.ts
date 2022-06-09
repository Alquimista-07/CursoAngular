import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor() { }

  // Este metodo me va a llevar a donde esta mi ubicación cuando demos click
  goToMyLocation() {
    console.log('Ir a mi ubicación');
  }

}
