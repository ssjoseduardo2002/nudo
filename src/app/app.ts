import { Component, OnInit } from '@angular/core';
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
import { PerfilUsuarioComponent } from './componentes_de_vistas/perfil-de-usuario/perfil-de-usuario';
import { PasarelaPagoComponent } from './componentes_de_vistas/pasarela-pago/pasarela-pago';
import { CentroAyudaComponent } from './componentes_de_vistas/centro-ayuda/centro-ayuda';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, CommonModule, Encabezado, PieDePagina, BarraLateralComponent,
    AccesoComponent, InicioComponent, CatalogoComponent, GeneradorContratoComponent,
    PerfilUsuarioComponent, PasarelaPagoComponent, CentroAyudaComponent
  ], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {
  public mostrarSoloAcceso: boolean = true; 

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const urlActual = event.urlAfterRedirects || event.url;
      this.mostrarSoloAcceso = ['/acceso', '/', ''].includes(urlActual);
      window.scrollTo(0, 0);
    });
  }
}