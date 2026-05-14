import { Component, Input } from '@angular/core'; // 👈 Importamos Input para recibir datos del padre
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
   * ⚡ DESTRUCCIÓN DE ERROR: 
   * Con esto, el binding [enPantallaAcceso]="mostrarSoloAcceso" del app.html ya funciona.
   */
  @Input() enPantallaAcceso: boolean = false; 

  public fechaActual: number = new Date().getFullYear();

  constructor(private router: Router) {}

  /**
   * Navega hacia el Centro de Ayuda.
   */
  public irAyuda(): void {
    console.log('--- NUDO: Contactando Soporte ---');
    this.router.navigate(['/centro-ayuda']).catch(err => {
      console.error('Error al navegar a ayuda:', err);
    });
  }

  /**
   * Navega a la sección biográfica del fundador.
   */
  public irSobreNudo(): void {
    this.router.navigate(['/la-mente-detras-de-nudo']);
  }

  /**
   * Scroll suave al inicio.
   */
  public volverArriba(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}