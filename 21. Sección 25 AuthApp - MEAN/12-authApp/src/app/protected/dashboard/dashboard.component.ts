import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    /* Indicamos que todo va a tener un margen de 15px */
    * {
      margin: 15px;
    }
  `
  ]
})
export class DashboardComponent {

  constructor( private router: Router ) { }

  logout() {
    // Anteriormente se había usado el método navigate pero ahora usamos uno nuevo que funciona 
    // igual que el navigate
    this.router.navigateByUrl('/auth');
  }

}
