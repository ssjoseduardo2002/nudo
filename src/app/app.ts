import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 

// Importación de Estructura
import { FooterComponent } from './footer/footer'; 
import { BarraLateralComponent } from './componentes_de_estructura/barra-lateral/barra-lateral'; 

// Importación de Vistas
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
  styleUrl: './app.scss' // Nota: 'styleUrl' en singular es el estándar actual
})
export class AppComponent {
  title = 'NUDO';
  
  // Esta variable controlará si vemos la app completa o solo el login
  mostrarSoloAcceso: boolean = false; 

  constructor() {
    // Aquí podrías añadir lógica para detectar si el usuario está en la ruta de acceso
  }
}