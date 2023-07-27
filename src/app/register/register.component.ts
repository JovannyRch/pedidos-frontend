import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = 'jovanny';
  email: string = 'jovannyrch@gmail.com';
  address: string = 'address';
  phone: string = 'phone';
  password: string = '123qwe';
  confirmPassword: string = '123qwe';
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    this.errorMessage = '';

    //Valid all fields
    if (
      this.name === '' ||
      this.email === '' ||
      this.address === '' ||
      this.phone === '' ||
      this.password === '' ||
      this.confirmPassword === ''
    ) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'La confirmación de contraseña no coincide.';
    } else {
      const userData = {
        name: this.name,
        email: this.email,
        password: this.password,
      };

      const detailsData = {
        user_id: 0,
        address: this.address,
        phone_number: this.phone,
      };

      this.http
        .post('http://localhost:8000/api/users', userData)
        .subscribe((response: any) => {
          if (response?.status === 1) {
            const userId = response.user_id;
            detailsData.user_id = userId;

            this.http
              .post('http://localhost:8000/api/udetails', detailsData)
              .subscribe((response: any) => {
                if (response?.status === 1) {
                  alert('Usuario registrado correctamente');
                  this.router.navigate(['/login']);
                } else {
                  this.errorMessage = 'Errror al registrar usuario';
                }
              });

            //Create
          } else {
            this.errorMessage =
              response?.message || 'Errror al registrar usuario';
          }
        });
    }
  }
}
