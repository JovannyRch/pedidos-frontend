import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  address: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    // Aquí puedes agregar la lógica para enviar el formulario al servidor o procesar los datos del registro.
    // Por ejemplo, puedes hacer una solicitud HTTP a un servidor para guardar los datos del usuario.
    console.log('Nombre:', this.name);
    console.log('Correo electrónico:', this.email);
    console.log('Dirección:', this.address);
    console.log('Teléfono:', this.phone);
    console.log('Contraseña:', this.password);
    console.log('Confirmar Contraseña:', this.confirmPassword);

    // Realiza aquí la validación de la confirmación de contraseña
    if (this.password !== this.confirmPassword) {
      console.log('La confirmación de contraseña no coincide.');
    } else {
      // Procesa el registro o envía los datos al servidor
      console.log('Registro exitoso.');
    }
  }
}
