import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-generador-contrato',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './generador-contrato.html',
  styleUrl: './generador-contrato.scss'
})
export class GeneradorContratoComponent {
  pasoActual: number = 1;
  
  // Modelo básico para capturar datos
  datosContrato = {
    tipo: '',
    cliente: '',
    monto: 0,
    fechaEntrega: ''
  };

  siguientePaso() {
    if (this.pasoActual < 3) this.pasoActual++;
  }

  anteriorPaso() {
    if (this.pasoActual > 1) this.pasoActual--;
  }

  finalizarGeneracion() {
    console.log('Generando NUDO con datos:', this.datosContrato);
    alert('¡Contrato generado con éxito socio!');
  }
}