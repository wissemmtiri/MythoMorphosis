// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { UserLoginDto } from 'src/app/models/user/user-login-dto';
import FormValidator from '../../helpers/validateform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private userStore: UserStoreService
  ) {}

  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // onSubmit() method handles form submission
  onSubmit() {
    // Check if the form is valid
    if (this.loginForm.valid) {
      // If the form is valid, create a UserLoginDto object from form values
      const userLoginDto = new UserLoginDto(
        this.loginForm.value.email,
        this.loginForm.value.password
      );
      // Call the signIn method with userLoginDto
      this.auth.signIn(userLoginDto).subscribe({
        // If sign in is successful, handle next
        next: (res) => {
          // Log the success message received
          //console.log(res.access_token);
          // Reset the form
          //this.loginForm.reset();
          // Store the access token
          this.auth.storeToken(res.access_token);
          // Store the refresh token
          //this.auth.storeRefreshToken(res.refreshToken);
          // Decode the token payload
          //const tokenPayload = this.auth.decodedToken();
          // Set the full name for store
          //this.userStore.setFullNameForStore(tokenPayload.name);
          // Set the role for store
          //this.userStore.setRoleForStore(tokenPayload.role);
          // Navigate to the dashboard
          this.router.navigate(['dashboard']);
        },
        // If an error occurs during sign in, handle error
        error: (err) => {
          // Log the error
          console.log(err);
        },
      });
    } else {
      // If the form is invalid, mark the form group as touched
      FormValidator.markFormGroupTouched(this.loginForm);
    }
  }
}
