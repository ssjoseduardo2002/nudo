import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { filter } from 'rxjs/operators';

// --- ESTRUCTURA ---
import { Encabezado } from './componentes_de_estructura/encabezado/encabezado'; 
import { PieDePagina } from './componentes_de_estructura/pie-de-pagina/pie-de-pagina'; 
import { BarraLateralComponent } from './componentes_de_estructura/barra-lateral/barra-lateral'; 

// --- VISTAS ---
import { AccesoComponent } from './componentes_de_vistas/acceso/acceso';
import { InicioComponent } from './componentes_de_vistas/inicio/inicio';
import { CatalogoComponent } from './componentes_de_vistas/catalogo/catalogo';
import { GeneradorContratoComponent } from './componentes_de_vistas/generador-contrato/generador-contrato';
// AQUÍ ESTÁ EL CAMBIO CLAVE:
import { PerfilUsuarioComponent } from './componentes_de_vistas/perfil-de-usuario/perfil-de-usuario'; 

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
    CatalogoComponent,
    GeneradorContratoComponent,
    PerfilUsuarioComponent // <--- Registrado para que Angular lo reconozca
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
      const rutasDeAcceso = ['/acceso', '/', ''];
      this.mostrarSoloAcceso = rutasDeAcceso.includes(urlActual);
    });
  }
}