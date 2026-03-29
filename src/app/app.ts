// app.component.ts - Versión Final Blindada
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// IMPORTACIÓN DE TUS COMPONENTES (Asegúrate de que las rutas coincidan con tus carpetas)
import { BarraLateral } from './componentes_de_estructura/barra-lateral/barra-lateral'; 
import { Encabezado } from './componentes_de_estructura/encabezado/encabezado'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,   // Necesario para que funcione el <router-outlet>
    BarraLateral,   // Tu componente de navegación superior
    Encabezado      // Tu nuevo componente de bienvenida
  ], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  // Aquí puedes definir lógica global de la aplicación más adelante
  title = 'NUDO';
}