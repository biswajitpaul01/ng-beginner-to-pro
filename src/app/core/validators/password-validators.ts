import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {

  static passwordsShouldMatch(control: AbstractControl) : ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword)
      return { mismatchPassword: true };

    return null;
  }

}
