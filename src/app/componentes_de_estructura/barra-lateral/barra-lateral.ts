import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-barra-lateral',
  standalone: true,
  // CommonModule nos permite usar directivas como *ngIf o pipes en el futuro
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './barra-lateral.html',
  styleUrl: './barra-lateral.scss'
})
export class BarraLateralComponent {
  // DATOS DEL USUARIO (Simulados, luego vendrán de un Servicio)
  public usuarioLogueado = {
    nombre: 'José',
    iniciales: 'JS',
    rol: 'Freelancer / Estudiante'
  };

  // ESTADO DE LA NAVEGACIÓN
  public menuItems = [
    { label: 'Inicio', route: '/vistas/inicio', icon: '🏠' },
    { label: 'Contratos', route: '/vistas/catalogo', icon: '📄' },
    { label: 'Crear', route: '/vistas/editor-contrato', icon: '➕' }
  ];

  constructor() {}

  /**
   * Ejecuta la salida segura del sistema.
   * "Operar sin emociones": Limpieza de datos y redirección.
   */
  public cerrarSesion(): void {
    console.log('Finalizando sesión de NUDO...');
    // Aquí irá la lógica de borrar el Token de seguridad
    // window.location.href = '/login'; 
  }

  public abrirConfiguracion(): void {
    console.log('Abriendo panel de configuración...');
  }
}
