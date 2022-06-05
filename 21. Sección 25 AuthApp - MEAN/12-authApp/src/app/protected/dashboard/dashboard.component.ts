import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

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

  // Creamos un getter para imprimir la información del usuario proveniente del servicio authService
  // y mostrarla en el componente dashboard.html
  get usuario() {
    return this.authService.usuario;
  }

  constructor( private router: Router,
               private authService: AuthService ) { }

  logout() {
    // Anteriormente se había usado el método navigate pero ahora usamos uno nuevo que funciona 
    // igual que el navigate
    this.router.navigateByUrl('/auth');
  }

}
