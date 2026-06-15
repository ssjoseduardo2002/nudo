import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  
  /**
   * Determina si el footer debe ocultarse en pantallas de acceso/login.
   * La lógica de control residirá en el componente padre.
   */
  @Input() enPantallaAcceso: boolean = false; 

  // Usamos Date directamente para mayor flexibilidad en el template
  public fechaActual: Date = new Date();

  constructor(private router: Router) {}

  /**
   * Navegación segura hacia el Centro de Ayuda.
   */
  public irAyuda(): void {
    this.router.navigate(['/centro-ayuda']).catch((err) => {
      console.error('[NUDO-CORE] Error al navegar a centro-ayuda:', err);
    });
  }

  /**
   * Navegación hacia la identidad de NUDO.
   */
  public irSobreNudo(): void {
    this.router.navigate(['/la-mente-detras']);
  }

  /**
   * Scroll programático optimizado.
   */
  public volverArriba(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}