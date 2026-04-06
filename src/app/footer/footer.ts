import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // Cambiamos el selector para que coincida con lo que espera tu HTML
  selector: 'app-pie-de-pagina', 
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss' // Nota: Angular moderno usa 'styleUrl' (en singular)
})
export class FooterComponent {
  
  constructor(private router: Router) {}

  /**
   * Navega hacia el Centro de Ayuda.
   * "Operar sin emociones": Un clic, una acción directa.
   */
  irAyuda(): void {
    console.log('Navegando al Centro de Ayuda...');
    this.router.navigate(['/vistas/centro-ayuda']); 
    // Nota: Revisa si tu ruta en app.routes.ts incluye el prefijo '/vistas/'
  }
}