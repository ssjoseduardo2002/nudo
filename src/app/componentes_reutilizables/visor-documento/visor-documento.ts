import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visor-documento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visor-documento.html',
  styleUrl: './visor-documento.scss',
})
export class VisorDocumento {

  // --- Propiedades de Identidad del Documento ---
  @Input() nombreDocumento: string = 'Documento sin título';
  @Input() folioDoc: string = 'ND-0000-000';
  @Input() hashBlockchain: string = 'Sin sellado en red';
  @Input() cargado: boolean = true;

  // --- Lógica de Interacción ---
  public nivelZoom: number = 100;
  
  // 📢 El altavoz para avisar que el socio terminó de leer
  @Output() onCerrar = new EventEmitter<void>();

  /**
   * Ajusta el tamaño de la hoja digital.
   * Limitamos entre 50% y 150% para no romper la experiencia.
   */
  public cambiarZoom(valor: number): void {
    const nuevoZoom = this.nivelZoom + valor;
    if (nuevoZoom >= 50 && nuevoZoom <= 150) {
      this.nivelZoom = nuevoZoom;
    }
  }

  /**
   * Lógica de impresión nativa
   */
  public imprimir(): void {
    window.print();
  }

  /**
   * Simulación de descarga de archivo blindado
   */
  public descargar(): void {
    console.log(`Iniciando descarga segura de: ${this.folioDoc}`);
    // Aquí conectarías con tu lógica de generación de PDF o descarga de Firebase
  }

  /**
   * Cierra el visor y regresa al dashboard
   */
  public cerrar(): void {
    this.onCerrar.emit();
  }
}
