import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formSubmitted = false;
  showPassword = false;

  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get formControls() {
    return this.registerForm.controls;
  }

  registerUser() {
    this.formSubmitted = true;

    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value)
      .subscribe(data => {
        if (data.success) {
          this.toastr.success(data.message);
          this.router.navigate(['/']);
        }
      });
    }
  }

}
