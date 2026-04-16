import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { filter } from 'rxjs/operators';

// --- COMPONENTES DE ESTRUCTURA ---
import { Encabezado } from './componentes_de_estructura/encabezado/encabezado'; 
import { PieDePagina } from './componentes_de_estructura/pie-de-pagina/pie-de-pagina'; 
import { BarraLateralComponent } from './componentes_de_estructura/barra-lateral/barra-lateral'; 

// --- TODAS LAS VISTAS DE NUDO ---
import { AccesoComponent } from './componentes_de_vistas/acceso/acceso';
import { InicioComponent } from './componentes_de_vistas/inicio/inicio';
import { CatalogoComponent } from './componentes_de_vistas/catalogo/catalogo';
import { GeneradorContratoComponent } from './componentes_de_vistas/generador-contrato/generador-contrato';
import { PerfilUsuarioComponent } from './componentes_de_vistas/perfil-de-usuario/perfil-de-usuario';
import { PasarelaPagoComponent } from './componentes_de_vistas/pasarela-pago/pasarela-pago';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,      
    Encabezado,       
    PieDePagina,      
    BarraLateralComponent,
    // Registramos todas las vistas para que el HTML las reconozca
    AccesoComponent,
    InicioComponent,
    CatalogoComponent,
    GeneradorContratoComponent,
    PerfilUsuarioComponent,
    PasarelaPagoComponent
  ], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {
  title = 'NUDO';
  public mostrarSoloAcceso: boolean = true; 

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const urlActual = event.urlAfterRedirects || event.url;
      // Definimos rutas de "Aterrizaje"
      const rutasDeAcceso = ['/acceso', '/', ''];
      this.mostrarSoloAcceso = rutasDeAcceso.includes(urlActual);
      
      // Aseguramos que el socio siempre empiece arriba al cambiar de vista
      window.scrollTo(0, 0);
    });
  }
}