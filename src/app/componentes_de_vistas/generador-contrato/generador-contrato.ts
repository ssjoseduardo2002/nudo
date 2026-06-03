import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

/**
 * Interfaz de Control Estricto para Modelos de Contratos NUDO
 */
export interface ContratoModel {
  tipo: string;
  cliente: string;
  monto: number;
  fechaEntrega: string;
}

@Component({
  selector: 'app-generador-contrato',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './generador-contrato.html',
  styleUrl: './generador-contrato.scss'
})
export class GeneradorContrato {
  
  // Estado del flujo del Asistente Virtual
  public pasoActual: number = 1;
  public isProcesando: boolean = false;
  
  // Inicialización del Modelo de Negocio con Tipado Estricto
  public datosContrato: ContratoModel = {
    tipo: '',
    cliente: '',
    monto: 0,
    fechaEntrega: new Date().toISOString().split('T')[0] // Formato ISO AAAA-MM-DD
  };

  constructor(private router: Router) {}

  /**
   * Avanza al siguiente nivel de configuración del asistente legal
   */
  public siguientePaso(): void {
    if (this.pasoActual < 3) {
      this.pasoActual++;
      console.log(`🪢 [NUDO Engine] Avanzando a la etapa: ${this.pasoActual}`);
    }
  }

  /**
   * Regresa un paso en el flujo para corrección de variables comerciales
   */
  public anteriorPaso(): void {
    if (this.pasoActual > 1) {
      this.pasoActual--;
      console.log(`🪢 [NUDO Engine] Retrocediendo a la etapa: ${this.pasoActual}`);
    }
  }

  /**
   * Procesa el formulario, inyecta datos limpios en la navegación y redirige al Editor de Cláusulas
   */
  public finalizarGeneracion(): void {
    // Evitar doble envío en clics rápidos
    if (this.isProcesando) return;

    // Validación estricta final antes del despliegue
    if (!this.datosContrato.tipo) {
      console.error('❌ Error de Validación: No se ha seleccionado una matriz legal base.');
      return;
    }

    // Activamos feedback visual en la UI
    this.isProcesando = true;
    console.log('🏗️ [NUDO Engine] Compilando variables comerciales para blindaje digital...', this.datosContrato);

    // Sanitización preventiva de variables comerciales
    const payloadLimpio: ContratoModel = {
      tipo: this.datosContrato.tipo,
      cliente: this.datosContrato.cliente ? this.datosContrato.cliente.trim() : '',
      monto: Number(this.datosContrato.monto) || 0,
      fechaEntrega: this.datosContrato.fechaEntrega
    };

    // Simulamos un delay de 800ms de procesamiento criptográfico (UX Premium)
    setTimeout(() => {
      try {
        // Despachamos al socio al editor pasando el payload seguro en el historial de navegación
        this.router.navigate(['/editor-contrato'], { 
          state: { data: payloadLimpio } 
        });
        
        console.log('🚀 [NUDO Engine] Despegue e inyección de datos exitosa hacia el Editor de Cláusulas.');
      } catch (error) {
        console.error('❌ Error crítico durante la teletransportación de datos:', error);
      } finally {
        this.isProcesando = false;
      }
    }, 800);
  }
}