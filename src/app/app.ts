import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FooterComponent } from './footer/footer'; 

// Importación de Vistas
import { AccesoComponent } from './componentes_de_vistas/acceso/acceso';

// RUTA CORREGIDA: Usamos './' para buscar desde la carpeta app
import { BarraLateralComponent } from './componentes_de_estructura/barra-lateral/barra-lateral'; 

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
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'NUDO';
  mostrarSoloAcceso: boolean = false; 
}