import { Directive } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[customAsyncValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: CustomAsyncValidatorDirective,
      multi: true,
    },
  ],
})
export class CustomAsyncValidatorDirective implements AsyncValidator {
  validate(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value == 'john') {
          resolve({
            checkUniqueUsername: true
          });
        } else {
          resolve(null);
        }
      }, 3000)
    })
  }
}
