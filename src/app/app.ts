import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { filter } from 'rxjs/operators';

// --- IMPORTACIONES DE ESTRUCTURA ---
import { Encabezado } from './componentes_de_estructura/encabezado/encabezado'; 
import { PieDePagina } from './componentes_de_estructura/pie-de-pagina/pie-de-pagina'; 
import { BarraLateralComponent } from './componentes_de_estructura/barra-lateral/barra-lateral'; 

// --- IMPORTACIONES DE VISTAS ---
import { AccesoComponent } from './componentes_de_vistas/acceso/acceso';
import { InicioComponent } from './componentes_de_vistas/inicio/inicio';
import { CatalogoComponent } from './componentes_de_vistas/catalogo/catalogo';
import { GeneradorContratoComponent } from './componentes_de_vistas/generador-contrato/generador-contrato';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,      
    // Estructura
    Encabezado,       
    PieDePagina,      
    BarraLateralComponent,
    // Vistas
    AccesoComponent,
    InicioComponent,
    CatalogoComponent,
    GeneradorContratoComponent
  ], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'NUDO';
  
  // Controla si se muestra el layout profesional o solo el login/acceso
  public mostrarSoloAcceso: boolean = true; 

  constructor(private router: Router) {
    // Sistema de detección de ruta para cambiar el layout automáticamente
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const urlActual = event.urlAfterRedirects || event.url;
      
      // Si el socio está en estas rutas, ocultamos sidebar y encabezado profesional
      const rutasPrivadas = ['/acceso', '/', ''];
      this.mostrarSoloAcceso = rutasPrivadas.includes(urlActual);
      
      console.log('Navegando a:', urlActual, '| Modo Acceso:', this.mostrarSoloAcceso);
    });
  }
}