import { NgModule } from '@angular/core';

import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    CustomIfDirective
  ],
  // Como vamos a necesitar la directiva fuera del modulo shared entonces necesitamos exportarla
  exports: [
    ErrorMsgDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
