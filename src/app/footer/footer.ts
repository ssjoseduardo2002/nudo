import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  // Unificamos el selector para que coincida con la etiqueta en app.html
  selector: 'app-footer', 
  standalone: true,
  imports: [CommonModule], // Añadimos CommonModule por si usas directivas en el HTML
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  
  // El año actual para el copyright, un detalle de profesionalismo
  anioActual: number = new Date().getFullYear();

  constructor(private router: Router) {}

  /**
   * Navega hacia el Centro de Ayuda.
   * "Operar sin emociones": Un clic, una acción directa.
   */
  irAyuda(): void {
    console.log('Navegando al Centro de Ayuda...');
    // Asegúrate de que esta ruta coincida exactamente con la de tu app.routes.ts
    this.router.navigate(['/centro-ayuda']); 
  }

  /**
   * Navega a la vista de la mente detrás del proyecto.
   */
  irSobreNudo(): void {
    this.router.navigate(['/la-mente-detras-de-nudo']);
  }
}