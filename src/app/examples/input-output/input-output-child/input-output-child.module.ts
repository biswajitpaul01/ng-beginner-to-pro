import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputOutputChildComponent } from './input-output-child.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from 'src/app/core/directives/directives.module';

@NgModule({
  declarations: [
    InputOutputChildComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DirectivesModule
  ],
  exports: [
    InputOutputChildComponent
  ]
})
export class InputOutputChildModule { }
