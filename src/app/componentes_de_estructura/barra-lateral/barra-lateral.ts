import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Definimos una interfaz sencilla para que el menú sea ordenado
interface MenuItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-barra-lateral',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './barra-lateral.html',
  styleUrl: './barra-lateral.scss'
})
// IMPORTANTE: El nombre de la clase debe ser exactamente 'BarraLateral'
export class BarraLateral implements OnInit {
  
  // Aquí definimos los items que se dibujarán en tu Sidebar
  public menuItems: MenuItem[] = [
    { label: 'Inicio', route: '/inicio', icon: '🏠' },
    { label: 'Catálogo', route: '/catalogo', icon: '📜' },
    { label: 'Crear Contrato', route: '/generador-contrato', icon: '✍️' },
    { label: 'Mis Documentos', route: '/perfil-usuario', icon: '📂' }
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('--- Sidebar de NUDO Inicializada ---');
  }

  /**
   * Navega a la configuración (Lógica creativa)
   */
  public abrirConfiguracion(): void {
    console.log('⚙️ Abriendo panel de ajustes...');
    // Aquí podrías disparar un modal o navegar a una ruta de ajustes
  }

  /**
   * Cierra la sesión del usuario (Preparado para Firebase)
   */
  public cerrarSesion(): void {
    console.log('🚪 El socio ha decidido salir. Cerrando sesión...');
    // Próximamente: this.authService.logout();
  }
}
