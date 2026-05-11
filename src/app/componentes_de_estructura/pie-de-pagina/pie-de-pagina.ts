import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pie-de-pagina',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule 
  ],
  templateUrl: './pie-de-pagina.html',
  styleUrl: './pie-de-pagina.scss'
})
export class PieDePagina implements OnInit {
  
  /**
   * Determina la visibilidad del footer. 
   * Se oculta automáticamente en la pantalla de Acceso para mantener el enfoque.
   */
  @Input() enPantallaAcceso: boolean = false; 
  
  // Propiedades dinámicas para el branding y gestión
  public anioActual: number = new Date().getFullYear();
  public versionApp: string = 'v1.0.4-beta'; // Control de versión para NUDO

  constructor() {}

  ngOnInit(): void {
    console.log(`--- Pie de Página NUDO ${this.versionApp} Inicializado ---`);
  }

  /**
   * Método para redirigir al socio a soporte externo si fuera necesario
   */
  public contactarSoporte(): void {
    const mensaje = "Hola NUDO, necesito asistencia con un contrato.";
    window.open(`mailto:soporte@nudo.com?subject=Asistencia&body=${mensaje}`);
  }
}