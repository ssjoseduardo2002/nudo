import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pasarela-pago',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pasarela-pago.html',
  styleUrl: './pasarela-pago.scss'
})
export class PasarelaPagoComponent {
  metodoSeleccionado: string = 'tarjeta';
  
  plan = {
    nombre: 'Contrato Único - Blindaje Total',
    precio: 199.00,
    iva: 31.84
  };

  get total() {
    return this.plan.precio + this.plan.iva;
  }

  procesarPago() {
    if (this.metodoSeleccionado === 'transferencia' || this.metodoSeleccionado === 'deposito') {
      return; // No hace nada si está en mantenimiento
    }
    console.log('Iniciando pago en NUDO vía:', this.metodoSeleccionado);
    alert('Conectando con pasarela segura...');
  }
}