import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './hover.directive';
import { ChangeCaseDirective } from './change-case.directive';



@NgModule({
  declarations: [
    HoverDirective, // import directive
    ChangeCaseDirective // import directive
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HoverDirective, // don't forget to export
    ChangeCaseDirective // don't forget to export
  ]
})
export class DirectivesModule { }
