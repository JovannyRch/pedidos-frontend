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
    //If user is not logged in, redirect to login page
    if (!localStorage.getItem('user')) {
      this.router.navigate(['/login']);
    }

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
    localStorage.removeItem('user');
    localStorage.removeItem('user_id');
    this.router.navigate(['/login']);
  }
}
