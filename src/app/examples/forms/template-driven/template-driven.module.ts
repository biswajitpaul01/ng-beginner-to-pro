import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenRoutingModule } from './template-driven-routing.module';
import { TemplateDrivenComponent } from './template-driven.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/core/components/shared/shared.module';


@NgModule({
  declarations: [
    TemplateDrivenComponent
  ],
  imports: [
    CommonModule,
    TemplateDrivenRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class TemplateDrivenModule { }
