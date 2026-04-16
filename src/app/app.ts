import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { filter } from 'rxjs/operators';

// IMPORTACIONES CON NOMBRES CORRECTOS
// Nota: Verifica que en 'encabezado.ts' la clase se llame 'Encabezado'
import { Encabezado } from './componentes_de_estructura/encabezado/encabezado'; 
// Nota: Verifica que en 'pie-de-pagina.ts' la clase se llame 'PieDePagina'
import { PieDePagina } from './componentes_de_estructura/pie-de-pagina/pie-de-pagina'; 
// IMPORTANTE: Aquí cambiamos 'BarraLateral' por el nombre real de la clase
import { BarraLateralComponent } from './componentes_de_estructura/barra-lateral/barra-lateral'; 
import { AccesoComponent } from './componentes_de_vistas/acceso/acceso';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,      
    Encabezado,       
    PieDePagina,      
    BarraLateralComponent, // <--- Usamos el nombre correcto aquí también
    AccesoComponent   
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