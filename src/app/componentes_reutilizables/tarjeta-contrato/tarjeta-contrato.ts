import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtiquetaDeEstado } from '../etiqueta-de-estado/etiqueta-de-estado';

/**
 * Interfaz para definir la anatomía de un contrato en NUDO.
 * Esto asegura que siempre tengamos los datos necesarios para la tarjeta.
 */
export interface ContratoNudo {
  titulo: string;
  folio: string;
  cliente: string;
  fecha: Date;
  monto: number;
  estado: string;
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
  
  /**
   * 📥 Entrada de datos: El objeto contrato que se va a renderizar.
   * Le ponemos valores por defecto para evitar errores en el template.
   */
  @Input() contrato: ContratoNudo = {
    titulo: 'Contrato sin título',
    folio: 'ND-0000',
    cliente: 'Cargando...',
    fecha: new Date(),
    monto: 0,
    estado: 'Pendiente'
  };

  /**
   * Método para gestionar el contrato.
   * Aquí podrías disparar un evento (Output) para abrir el visor.
   */
  public gestionarContrato(): void {
    console.log(`Gestionando contrato: ${this.contrato.folio}`);
    // Emitir evento o navegar al detalle
  }
}
