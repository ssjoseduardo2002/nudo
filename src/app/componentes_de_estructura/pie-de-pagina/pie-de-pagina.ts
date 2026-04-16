import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // VITAL para los routerLink

@Component({
  selector: 'app-pie-de-pagina',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule // Agregamos esto para que el HTML reconozca la navegación
  ],
  templateUrl: './pie-de-pagina.html',
  styleUrl: './pie-de-pagina.scss'
})
export class PieDePagina implements OnInit {
  
  // Esta propiedad permite que el componente padre le diga al pie si debe ocultarse
  @Input() enPantallaAcceso: boolean = false; 
  
  anioActual: number = 0;

  ngOnInit(): void {
    // Captura el año actual para que el copyright siempre esté al día
    this.anioActual = new Date().getFullYear();
  }
}