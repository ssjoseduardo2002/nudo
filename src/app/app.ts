import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// Importación de tus componentes de estructura
import { BarraLateral } from './componentes_de_estructura/barra-lateral/barra-lateral'; 
import { Encabezado } from './componentes_de_estructura/encabezado/encabezado'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,   // Para directivas básicas de Angular
    RouterOutlet,   // Para que funcionen las rutas
    BarraLateral,   // Tu barra superior
    Encabezado      // Tu encabezado de bienvenida
  ], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent { 
  title = 'NUDO';
}