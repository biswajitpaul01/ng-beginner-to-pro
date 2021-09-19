import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputOutputRoutingModule } from './input-output-routing.module';
import { InputOutputComponent } from './input-output.component';
import { InputOutputChildModule } from './input-output-child/input-output-child.module';


@NgModule({
  declarations: [
    InputOutputComponent
  ],
  imports: [
    CommonModule,
    InputOutputRoutingModule,
    InputOutputChildModule
  ]
})
export class InputOutputModule { }
