import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class LoginComponent {
  //These are the form groups for the login and register forms. The login form has two form controls (groups): email and password. The register form has three form controls: username, email, and password.
  loginForm: any;
  registerForm: any;
  activeForm: 'login' | 'register' = 'login';

  //The constructor injects the FormBuilder service into the component. The FormBuilder service is used to create form groups.
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    //The login form is created using the FormBuilder service. The form group has two form controls: email and password. The email form control is required and must be a valid email address. The password form control is required and must have a minimum length of 6 characters.
    this.loginForm = this.fb.group({
      email: ['', Validators.required, ],
      password: ['', Validators.required],
    });
    //The register form is created using the FormBuilder service. The form group has three form controls: username, email, and password. The username form control is required. The email form control is required and must be a valid email address. The password form control is required and must have a minimum length of 6 characters.
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required, ],
      password: ['', Validators.required],
    });
  }
  //The toggleForm method is used to switch between the login and register forms. The activeForm property is used to determine which form is currently active. The login form is reset when the register form is active, and the register form is reset when the login form is active.
  toggleForm(form: 'login' | 'register') {
    this.activeForm = form;
  }

  //The login method is called when the login form is submitted. If the form is valid, the login logic is executed. Otherwise, an error message is displayed using the MatSnackBar service.
  login() {
    if (this.loginForm.valid) {
      // login logic
      console.log('Login info => ', this.loginForm.value);
      this.router.navigate(['/budget-planner/dashboard']);
    } else {
      this.snackBar.open('Please enter valid login details', 'Close', {
        duration: 3000,
      });
    }
    if (!this.loginForm.valid) {
      console.log('Email errors:', this.loginForm.controls.email.errors);
      console.log('Password errors:', this.loginForm.controls.password.errors);
    }
  }
  //The register method is called when the register form is submitted. If the form is valid, the registration logic is executed. Otherwise, an error message is displayed using the MatSnackBar service.
  register() {
    if (this.registerForm.valid) {
      // register logic
      console.log('Register info => ', this.registerForm.value);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      this.router.navigate(['/budget-planner/dashboard']);
    } else {
      this.snackBar.open('Please enter valid registration details', 'Close', {
        duration: 3000,
      });
    }
  }
}
