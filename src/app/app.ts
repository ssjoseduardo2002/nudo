import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { filter } from 'rxjs/operators';

// Importaciones de Estructura
import { Encabezado } from './componentes_de_estructura/encabezado/encabezado'; 
import { PieDePagina } from './componentes_de_estructura/pie-de-pagina/pie-de-pagina'; 
import { BarraLateralComponent } from './componentes_de_estructura/barra-lateral/barra-lateral'; 

// Importaciones de Vistas
import { AccesoComponent } from './componentes_de_vistas/acceso/acceso';
import { InicioComponent } from './componentes_de_vistas/inicio/inicio';
import { CatalogoComponent } from './componentes_de_vistas/catalogo/catalogo'; // <--- NUEVO

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,      
    Encabezado,       
    PieDePagina,      
    BarraLateralComponent,
    AccesoComponent,
    InicioComponent,
    CatalogoComponent // <--- IMPORTANTE: Agregado a la lista
  ], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'NUDO';
  public mostrarSoloAcceso: boolean = true; 

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const urlActual = event.urlAfterRedirects || event.url;
      // Definimos qué rutas NO muestran la estructura profesional
      const rutasDeAcceso = ['/acceso', '/', ''];
      this.mostrarSoloAcceso = rutasDeAcceso.includes(urlActual);
      
      console.log('Ruta activa:', urlActual, '| ¿Modo Acceso?:', this.mostrarSoloAcceso);
    });
  }
}