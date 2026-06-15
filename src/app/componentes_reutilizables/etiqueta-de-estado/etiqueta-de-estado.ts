import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Estados estrictos para garantizar consistencia en la UI.
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
   * Entrada de estado. 
   * Usamos el tipo EstadoContrato para guiar al desarrollador.
   */
  @Input({ required: true }) estado: EstadoContrato | string = 'Pendiente';

  /**
   * Getter para normalización rápida y segura.
   */
  get estadoNormalizado(): string {
    return this.estado.trim();
  }
}