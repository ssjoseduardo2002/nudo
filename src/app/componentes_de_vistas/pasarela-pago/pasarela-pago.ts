import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * COMPONENTE: Pasarela de Pago NUDO
 * Estatus: Blindaje Transaccional V1.0
 */
interface PlanDetalle {
  nombre: string;
  precio: number;
  iva: number;
}

@Component({
  selector: 'app-pasarela-pago',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pasarela-pago.html',
  styleUrl: './pasarela-pago.scss'
})
export class PasarelaPago implements OnInit {
  
  public metodoSeleccionado: string = 'tarjeta';
  public idContrato: string = '';
  
  // Datos tipados y listos para inyección de servicio
  public plan: PlanDetalle = {
    nombre: 'Contrato Único - Blindaje Total',
    precio: 199.00,
    iva: 31.84
  };

  constructor() {}

  ngOnInit(): void {
    // Generación de ID de Auditoría
    this.idContrato = Math.floor(1000 + Math.random() * 9000).toString();
    console.log('[NUDO-SYSTEM] Pasarela de Pago inicializada con ID:', this.idContrato);
  }

  get total(): number {
    return Number((this.plan.precio + this.plan.iva).toFixed(2));
  }

  public procesarPago(): void {
    if (this.metodoSeleccionado === 'transferencia' || this.metodoSeleccionado === 'deposito') {
      console.warn('>>> [NUDO-LOG] Flujo offline iniciado');
      alert('Instrucciones generadas. Completa tu pago para activar el blindaje.');
      return;
    }

    console.log(`>>> [NUDO-PAY] Transacción segura iniciada vía ${this.metodoSeleccionado.toUpperCase()}`);
    this.simularValidacionBancaria();
  }

  private simularValidacionBancaria(): void {
    const confirmacion = confirm('¿Confirmar autorización de pago en NUDO?');
    if (confirmacion) {
      alert('✅ Transacción confirmada. Contrato sellado.');
    }
  }
}