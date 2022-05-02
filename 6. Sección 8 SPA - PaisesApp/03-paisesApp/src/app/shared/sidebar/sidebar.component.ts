import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  // En los estilos definimos una propidad para que solo los li del componente
  // sidebar aparezcan con el cursor (manita) para que el usuario sepa que es 
  // un link y que puede hacer click en ellos. Y esto se puede hacer ya que 
  // Angular permite manejar el css de manera encapsulada por componente
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
