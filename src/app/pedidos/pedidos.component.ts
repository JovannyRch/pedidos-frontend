import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent {
  constructor(private router: Router, private http: HttpClient) {}

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}
