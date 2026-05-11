import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-generador-contrato',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './generador-contrato.html',
  styleUrl: './generador-contrato.scss'
})
export class GeneradorContrato { // Nombre simplificado para que el spec.ts no llore
  
  public pasoActual: number = 1;
  
  // Modelo de datos blindado
  public datosContrato = {
    tipo: '',
    cliente: '',
    monto: 0,
    fechaEntrega: new Date().toISOString().split('T')[0] // Fecha de hoy por defecto
  };

  constructor(private router: Router) {}

  /**
   * Avanza en el stepper de blindaje
   */
  public siguientePaso(): void {
    if (this.pasoActual < 3) {
      this.pasoActual++;
      console.log(`➡️ Avanzando al paso ${this.pasoActual}`);
    }
  }

  /**
   * Retrocede para corregir datos
   */
  public anteriorPaso(): void {
    if (this.pasoActual > 1) {
      this.pasoActual--;
      console.log(`⬅️ Retrocediendo al paso ${this.pasoActual}`);
    }
  }

  /**
   * El gran final: Genera el NUDO y teletransporta al socio al Editor
   */
  public finalizarGeneracion(): void {
    console.log('🏗️ Generando NUDO inteligente...', this.datosContrato);
    
    // Simulamos una pequeña carga de procesamiento legal
    const confirmacion = confirm('¿Confirmas que los datos son correctos para el blindaje digital? 🪢');
    
    if (confirmacion) {
      // Usamos el Router para navegar al editor pasando los datos en el estado
      // Así el Editor podrá leerlos y llenar la "hoja" automáticamente
      this.router.navigate(['/editor-contrato'], { 
        state: { data: this.datosContrato } 
      });
      
      console.log('🚀 Despegue exitoso hacia el Editor.');
    }
  }
}