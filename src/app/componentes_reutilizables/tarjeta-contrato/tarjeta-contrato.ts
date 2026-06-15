import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtiquetaDeEstado } from '../etiqueta-de-estado/etiqueta-de-estado';

export interface ContratoNudo {
  titulo: string;
  folio: string;
  cliente: string;
  fecha: Date;
  monto: number;
  estado: string; // Considerar usar el tipo 'EstadoContrato' de la etiqueta
  hashBlockchain?: string;
}

@Component({
  selector: 'app-tarjeta-contrato',
  standalone: true,
  imports: [CommonModule, EtiquetaDeEstado],
  templateUrl: './tarjeta-contrato.html',
  styleUrl: './tarjeta-contrato.scss',
})
export class TarjetaContrato {
  
  // Input requerido para forzar buena práctica desde el padre
  @Input({ required: true }) contrato!: ContratoNudo;

  // Outputs para comunicación ascendente (Patrón Smart/Dumb)
  @Output() onGestionar = new EventEmitter<string>();
  @Output() onDescargar = new EventEmitter<string>();

  public gestionarContrato(): void {
    this.onGestionar.emit(this.contrato.folio);
  }

  public descargarPdf(): void {
    this.onDescargar.emit(this.contrato.folio);
  }

  public verDetalles(): void {
    console.log(`Navegando a visor de: ${this.contrato.folio}`);
  }
}
