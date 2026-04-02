import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// --- IMPORTACIONES DE ESTRUCTURA ---
import { BarraLateral } from './componentes_de_estructura/barra-lateral/barra-lateral'; 
import { Encabezado } from './componentes_de_estructura/encabezado/encabezado'; 
import { PieDePagina } from './componentes_de_estructura/pie-de-pagina/pie-de-pagina'; 

// --- IMPORTACIONES DE VISTAS ---
import { Inicio } from './componentes_de_vistas/inicio/inicio'; 
import { LaMenteDetrasDeNudo } from './componentes_de_vistas/la-mente-detras-de-nudo/la-mente-detras-de-nudo'; 
import { Acceso } from './componentes_de_vistas/acceso/acceso'; 

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
    LaMenteDetrasDeNudo,
    Acceso // Registramos el nuevo componente de Acceso
  ], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent { 
  title = 'NUDO';

  // CONTROL DE VISTA:
  // Cambia a 'true' para ver solo el Login (oculta la barra lateral).
  // Cambia a 'false' cuando quieras volver al panel principal.
  mostrarSoloAcceso: boolean = true; 

  // Datos para el encabezado (se usarán cuando no estemos en Acceso)
  usuarioActual: string = 'José';
}