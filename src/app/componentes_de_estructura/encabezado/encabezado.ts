import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <--- 1. IMPORTANTE: Importar el módulo de rutas

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule // <--- 2. VITAL: Agregarlo aquí para que los routerLink funcionen
  ],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.scss'
})
export class Encabezado {
  @Input() usuario: string = 'Invitado';
  @Input() seccion: string = '';
  
  // Propiedad para ocultar el menú en el login (Acceso)
  @Input() enPantallaAcceso: boolean = false; 

  constructor() {
    // Aquí puedes añadir lógica futura si necesitas detectar cambios de ruta
  }
}
