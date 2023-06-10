import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { } from '@fortawesome/free-regular-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { PasswordValidators } from 'src/app/core/validators/password-validators';
import { UsernameValidator } from 'src/app/core/validators/username-validators';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;
  faSpinner = faSpinner;

  constructor(private toastr: ToastrService) {
    this.form = new FormGroup(
      {
        username: new FormControl(
          '',
          [
            Validators.required,
            Validators.minLength(3),
            UsernameValidator.cannotContainSpace,
          ],
          // [UsernameValidator.checkUniqueUsername]
        ),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
        agree: new FormControl(null, [Validators.requiredTrue]),
      },
      {
        validators: PasswordValidators.passwordsShouldMatch,
      }
    );
  }

  ngOnInit(): void {
    // Silence is golden
  }

  get formControls() {
    return this.form.controls;
  }

  submit() {
    this.formSubmitted = true;
    if (this.form.invalid) {
      this.toastr.error('Please validate the form!');
    } else {
      this.form.reset();
    }
    console.log(this.form);
  }
}
