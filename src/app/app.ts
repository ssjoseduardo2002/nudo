import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// 1. IMPORTACIONES DE TUS COMPONENTES DE ESTRUCTURA
import { BarraLateral } from './componentes_de_estructura/barra-lateral/barra-lateral'; 
import { Encabezado } from './componentes_de_estructura/encabezado/encabezado'; 
import { PieDePagina } from './componentes_de_estructura/pie-de-pagina/pie-de-pagina'; // <--- ESTA ES LA NUEVA PIEZA

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,   
    BarraLateral,   
    Encabezado,
    PieDePagina      // 2. REGISTRAMOS EL PIE DE PÁGINA AQUÍ
  ], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent { 
  title = 'NUDO';
}