import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// --- ESTRUCTURA (Importaciones Unificadas NUDO) ---
import { Encabezado } from './componentes_de_estructura/encabezado/encabezado'; 
import { Footer } from './componentes_de_estructura/pie-de-pagina/pie-de-pagina'; 
import { BarraLateral } from './componentes_de_estructura/barra-lateral/barra-lateral'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    Encabezado, 
    Footer, 
    BarraLateral
  ], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  
  // 🛡️ CONTROL DE INTERFAZ: Cambiamos por defecto a false para forzar el renderizado del ecosistema
  public mostrarSoloAcceso: boolean = false; 

  // ⏳ UX: Estado de carga global del búnker
  public cargandoSistema: boolean = false; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    /**
     * 🕵️ Rastreador de Navegación NUDO:
     * Detecta cambios de ruta para adaptar el Layout automáticamente.
     */
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const urlActual = event.urlAfterRedirects || event.url;
      
      // 📝 Rutas de Modo Foco (Login, Registro, Pasarela de Pagos)
      // Agregamos '/login' o '/registro' si los usas, quitamos la raíz si queremos forzar el menú inicial.
      const rutasAcceso = ['/acceso', '/pago-seguro']; 
      
      this.mostrarSoloAcceso = rutasAcceso.includes(urlActual);

      // ⚡ UX PREMIUM: Reset de scroll suave al cambiar de vista
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}