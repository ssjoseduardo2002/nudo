import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// 1. IMPORTACIONES DE ESTRUCTURA
import { BarraLateral } from './componentes_de_estructura/barra-lateral/barra-lateral'; 
import { Encabezado } from './componentes_de_estructura/encabezado/encabezado'; 
import { PieDePagina } from './componentes_de_estructura/pie-de-pagina/pie-de-pagina'; 

// 2. IMPORTACIÓN DE LAS VISTAS
import { Inicio } from './componentes_de_vistas/inicio/inicio'; 
import { LaMenteDetrasDeNudo } from './componentes_de_vistas/la-mente-detras-de-nudo/la-mente-detras-de-nudo';
import { Acceso } from "./componentes_de_vistas/acceso/acceso"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BarraLateral,
    Encabezado,
    PieDePagina,
    Inicio,
    LaMenteDetrasDeNudo // REGISTRAMOS TU BIOGRAFÍA AQUÍ
    ,
    Acceso
], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent { 
  title = 'NUDO';
}