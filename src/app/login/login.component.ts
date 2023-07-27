// login.component.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get emailErrors() {
    const emailControl = this.loginForm.get('email');
    return (emailControl?.touched && emailControl.errors) || {};
  }

  get passwordErrors() {
    const passwordControl = this.loginForm.get('password');
    return (passwordControl?.touched && passwordControl.errors) || {};
  }

  onSubmit() {
    this.errorMessage = '';
    if (this.loginForm.valid) {
      this.http
        .post('http://localhost:8000/api/login', this.loginForm.value)
        .subscribe(
          (response: any) => {
            if (response?.status === 1) {
              this.router.navigate(['/home']);
            } else {
              alert('Usuario no encontrado');
            }
          },
          (error) => {
            console.error(error);
            // Handle the HTTP request error here
          }
        );
    } else {
      this.errorMessage = 'Formulario inválido';
    }
  }
}
