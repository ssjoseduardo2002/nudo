import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 

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

  /**
   * Cambiamos esto a 'true' para que el sistema sepa 
   * que estamos en la fase de login y oculte la barra lateral y el footer.
   */
  public mostrarSoloAcceso: boolean = true; 
}