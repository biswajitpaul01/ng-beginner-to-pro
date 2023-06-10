import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/core/components/shared/shared.module';
import { CustomAsyncValidatorDirective } from 'src/app/core/directives/form-field-async-validator.directive';
import { ReactiveRoutingModule } from './reactive-routing.module';
import { ReactiveComponent } from './reactive.component';


@NgModule({
  declarations: [
    ReactiveComponent,
    CustomAsyncValidatorDirective
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class ReactiveModule { }
