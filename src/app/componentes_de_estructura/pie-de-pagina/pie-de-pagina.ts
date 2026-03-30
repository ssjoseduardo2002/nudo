import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pie-de-pagina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pie-de-pagina.html',
  styleUrl: './pie-de-pagina.scss'
})
export class PieDePagina implements OnInit {
  anioActual: number = 0;

  ngOnInit(): void {
    // Esto captura el año actual del sistema automáticamente
    this.anioActual = new Date().getFullYear();
  }
}