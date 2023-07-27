import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  constructor(private router: Router, private http: HttpClient) {}

  cerrarSesion() {
    localStorage.removeItem('user');
    localStorage.removeItem('user_id');
    this.router.navigate(['/login']);
  }
}
