import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { filter } from 'rxjs/operators';

// --- ESTRUCTURA (Importaciones Unificadas) ---
// Aseguramos que estos archivos existan en estas rutas para aniquilar errores de compilación
import { Encabezado } from './componentes_de_estructura/encabezado/encabezado'; 
import { Footer } from './componentes_de_estructura/pie-de-pagina/pie-de-pagina'; 
import { BarraLateral } from './componentes_de_estructura/barra-lateral/barra-lateral'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    Encabezado, 
    Footer, 
    BarraLateral
  ], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  
  // Control de interfaz para ocultar elementos en Login/Pagos
  public mostrarSoloAcceso: boolean = true; 

  /**
   * ⚡ DESTRUCCIÓN DE ERROR (image_6aab19.png):
   * Declaramos oficialmente esta variable para que el *ngIf del HTML funcione.
   */
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
      
      // Definimos qué rutas activan el "Modo Foco" (sin sidebar)
      const rutasAcceso = ['/acceso', '/', '', '/pago-seguro']; 
      
      this.mostrarSoloAcceso = rutasAcceso.includes(urlActual);

      // UX: Scroll suave al inicio en cada cambio de vista
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}