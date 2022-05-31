import { NgModule } from '@angular/core';

import { ErrorMsgDirective } from './directives/error-msg.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective
  ],
  // Como vamos a necesitar la directiva fuera del modulo shared entonces necesitamos exportarla
  exports: [
    ErrorMsgDirective
  ]
})
export class SharedModule { }
