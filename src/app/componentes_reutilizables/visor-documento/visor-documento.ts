import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visor-documento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visor-documento.html',
  styleUrl: './visor-documento.scss',
})
export class VisorDocumento {

  // --- Inputs obligatorios para garantizar la integridad ---
  @Input({ required: true }) nombreDocumento!: string;
  @Input({ required: true }) folioDoc!: string;
  @Input() hashBlockchain: string = 'Pendiente de sellado';
  @Input() cargado: boolean = false;

  // --- Estado de la UI ---
  public nivelZoom: number = 100;
  
  @Output() onCerrar = new EventEmitter<void>();

  /**
   * Manejo de teclado para cerrar el visor con ESC (Accesibilidad avanzada)
   */
  @HostListener('document:keydown.escape')
  public onEscKey(): void {
    this.cerrar();
  }

  public cambiarZoom(valor: number): void {
    const nuevoZoom = this.nivelZoom + valor;
    // Límites de seguridad para la UI
    this.nivelZoom = Math.min(Math.max(nuevoZoom, 50), 150);
  }

  public imprimir(): void {
    window.print();
  }

  public descargar(): void {
    // Aquí implementaremos el flujo de descarga firmado cuando conectemos servicios
    console.info(`[NUDO-SECURE] Iniciando descarga de folio: ${this.folioDoc}`);
  }

  public cerrar(): void {
    this.onCerrar.emit();
  }
}
