import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidator {

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') !== -1) {
      return {
        cannotContainSpace: true
      };
    }

    return null;
  }

  static checkUniqueUsername(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
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
