import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Los estados permitidos para mantener la consistencia en NUDO.
 * Usamos un tipo personalizado para que TypeScript nos ayude a no cometer errores.
 */
export type EstadoContrato = 'Firmado' | 'Pendiente' | 'Blockchain' | 'Rechazado' | 'En Revisión';

@Component({
  selector: 'app-etiqueta-de-estado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etiqueta-de-estado.html',
  styleUrl: './etiqueta-de-estado.scss',
})
export class EtiquetaDeEstado {
  
  /**
   * 📥 La entrada de datos: Aquí es donde el componente padre define el estado.
   * Por defecto lo ponemos en 'Pendiente'.
   */
  @Input() estado: string = 'Pendiente';

  /**
   * Getter opcional por si necesitas normalizar el texto 
   * antes de que el HTML lo procese.
   */
  get estadoFormateado(): string {
    return this.estado.trim();
  }
}