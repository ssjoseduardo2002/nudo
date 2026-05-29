import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; 

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
export class BarraLateral implements OnInit { 
  
  // 🔥 CORRECCIÓN: "La mente detrás" ahora apunta a su ruta real /la-mente-detras
  public menuItems: MenuItem[] = [
    { label: 'Inicio', route: '/inicio', icon: '' },
    { label: 'Catálogo', route: '/catalogo', icon: '' },
    { label: 'Crear Contrato', route: '/generador-contrato', icon: '' }, 
    { label: 'La mente detrás', route: '/la-mente-detras', icon: '' } // ✨ Reparado
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('--- Sidebar de NUDO Inicializada ---');
  }

  /**
   * Cierra el acceso al búnker, limpia y expulsa al login.
   */
  public cerrarSesion(): void {
    console.log('🚪 Sesión finalizada por el socio.');
    
    this.router.navigate(['/acceso']).then(() => {
      console.log('🔒 Redirigido con éxito a la pantalla de acceso.');
    });
  }
}
