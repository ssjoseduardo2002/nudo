import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Estructura de datos para un menú de grado ingeniería
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
export class BarraLateral implements OnInit { // ⚡ CLAVE: Nombre unificado sin "Component"
  
  // Definición del ecosistema de navegación de NUDO
  public menuItems: MenuItem[] = [
    { label: 'Inicio', route: '/inicio', icon: 'grid_view' },
    { label: 'Catálogo', route: '/catalogo', icon: 'description' },
    { label: 'Crear Contrato', route: '/generador-contrato', icon: 'border_color' },
    { label: 'Mis Documentos', route: '/perfil-usuario', icon: 'folder_shared' }
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('--- Sidebar de NUDO Inicializada ---');
  }

  /**
   * Abre el panel de control técnico.
   */
  public abrirConfiguracion(): void {
    console.log('⚙️ NUDO: Accediendo a configuración del sistema...');
  }

  /**
   * Cierra el acceso al búnker (Preparado para la lógica de Firebase).
   */
  public cerrarSesion(): void {
    console.log('🚪 Sesión finalizada por el socio.');
    // Aquí conectarás con tu authService de Firebase más adelante
  }
}
