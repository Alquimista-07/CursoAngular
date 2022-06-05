import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  // Expresión regular para validar el el email.
  // NOTA: Tome la decisión de hacerlo por expresión regular ya que la validación del Validators.email no me parece
  //       muy efectiva.
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }
}
