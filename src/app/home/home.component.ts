import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Counts {
  users: number;
  products: number;
  orders: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  totalUsuarios: number = 0;
  totalProductos: number = 0;
  totalPedidos: number = 0;
  isLoading: boolean = false;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.http.get<Counts>('http://localhost:8000/api/counts').subscribe({
      next: (counts) => {
        this.totalUsuarios = counts.users;
        this.totalProductos = counts.products;
        this.totalPedidos = counts.orders;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al obtener los totales:', error);
        this.isLoading = false;
      },
    });
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}
