import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // Obtenemos el id
    this.activatedRoute.params
        .subscribe(({ id }) => console.log( id ) );
        
  }

}
