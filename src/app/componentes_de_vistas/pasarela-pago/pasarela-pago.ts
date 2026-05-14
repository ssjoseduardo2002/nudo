import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Definimos una interfaz para que el plan sea siempre sólido
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
  // Estado inicial
  public metodoSeleccionado: string = 'tarjeta';
  public idContrato: string = '';
  
  // Datos del plan (Podrían venir de un servicio en el futuro)
  public plan: PlanDetalle = {
    nombre: 'Contrato Único - Blindaje Total',
    precio: 199.00,
    iva: 31.84
  };

  constructor() {}

  ngOnInit(): void {
    // Generamos un ID de orden aleatorio para el ticket
    this.idContrato = Math.floor(1000 + Math.random() * 9000).toString();
  }

  // Getter para calcular el total automáticamente
  get total(): number {
    return this.plan.precio + this.plan.iva;
  }

  /**
   * Lógica de procesamiento de pago
   */
  public procesarPago(): void {
    // 1. Validamos si el método es offline (Transferencia u OXXO)
    if (this.metodoSeleccionado === 'transferencia' || this.metodoSeleccionado === 'deposito') {
      console.warn('⚠️ El usuario seleccionó un método de pago manual.');
      alert('Se han generado tus instrucciones de pago. Por favor, realiza el depósito para activar tu blindaje.');
      return;
    }

    // 2. Simulación de pasarela online (Tarjeta o PayPal)
    console.log(`🚀 NUDO PAY: Procesando ${this.total} vía ${this.metodoSeleccionado.toUpperCase()}`);
    
    // Aquí es donde entraría la lógica de Stripe o PayPal SDK
    this.simularValidacionBancaria();
  }

  private simularValidacionBancaria(): void {
    const confirmacion = confirm('¿Deseas autorizar la transacción segura en NUDO?');
    if (confirmacion) {
      alert('✅ ¡Blindaje Exitoso! Tu contrato ha sido procesado y sellado en la blockchain.');
      // Aquí redirigirías al usuario a su catálogo
    }
  }
}