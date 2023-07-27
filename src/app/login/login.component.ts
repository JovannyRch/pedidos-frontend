// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Aquí puedes agregar la lógica para enviar el formulario al servidor o autenticar al usuario.
    // Por ejemplo, puedes hacer una solicitud HTTP a un servidor para autenticar el correo y la contraseña.
    console.log('Correo electrónico:', this.email);
    console.log('Contraseña:', this.password);
  }
}
