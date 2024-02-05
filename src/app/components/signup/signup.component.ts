import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from 'src/app/helpers/password-match-validator';
import FormValidator from 'src/app/helpers/validateform';
import { UserSignUpDTO } from 'src/app/models/user/user-signup-dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signUpForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        passwordConfirm: ['', Validators.required],
      },
      {
        validator: passwordMatchValidator('password', 'passwordConfirm'), // Apply custom validator
      }
    );
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const signUpObj = new UserSignUpDTO(
        this.signUpForm.value.firstName,
        this.signUpForm.value.lastName,
        this.signUpForm.value.email,
        this.signUpForm.value.password
      );

      this.auth.signUp(signUpObj).subscribe({
        next: (res) => {
          //console.log(res);
          this.auth.storeToken(res.access_token);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          alert(err?.error.message);
        },
      });
    } else {
      FormValidator.markFormGroupTouched(this.signUpForm);
    }
  }
}
