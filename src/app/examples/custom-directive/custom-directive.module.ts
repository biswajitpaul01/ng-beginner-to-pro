import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomDirectiveRoutingModule } from './custom-directive-routing.module';
import { CustomDirectiveComponent } from './custom-directive.component';
import { DirectivesModule } from 'src/app/core/directives/directives.module';


@NgModule({
  declarations: [
    CustomDirectiveComponent
  ],
  imports: [
    CommonModule,
    CustomDirectiveRoutingModule,
    DirectivesModule
  ]
})
export class CustomDirectiveModule { }
