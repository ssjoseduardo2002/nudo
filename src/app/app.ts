import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 

// Asegúrate de que los nombres de los archivos sean exactos
import { FooterComponent } from './footer/footer'; 
import { BarraLateralComponent } from './componentes_de_estructura/barra-lateral/barra-lateral'; 
import { AccesoComponent } from './componentes_de_vistas/acceso/acceso';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,      
    FooterComponent,   // Este es el que te marcaba error
    AccesoComponent,   
    BarraLateralComponent 
  ], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'NUDO';
  mostrarSoloAcceso: boolean = false; 
}