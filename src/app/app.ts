import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { filter } from 'rxjs/operators';

// Importaciones de componentes de estructura y vistas
import { FooterComponent } from './footer/footer'; 
import { BarraLateralComponent } from './componentes_de_estructura/barra-lateral/barra-lateral'; 
import { AccesoComponent } from './componentes_de_vistas/acceso/acceso';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,      
    FooterComponent,   
    AccesoComponent,   
    BarraLateralComponent 
  ], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'NUDO';
  
  // Por defecto empezamos en true, pero el constructor se encargará de actualizarlo
  public mostrarSoloAcceso: boolean = true; 

  constructor(private router: Router) {
    // Escuchamos los cambios de ruta
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Si la URL es la raíz o el acceso, ocultamos la estructura profesional
      // Si es /inicio o cualquier otra cosa, mostramos la barra lateral y el footer
      const urlActual = event.urlAfterRedirects || event.url;
      this.mostrarSoloAcceso = (urlActual === '/acceso' || urlActual === '/' || urlActual === '');
      
      console.log('¿Modo Acceso?:', this.mostrarSoloAcceso); // Para que verifiques en la consola
    });
  }
}