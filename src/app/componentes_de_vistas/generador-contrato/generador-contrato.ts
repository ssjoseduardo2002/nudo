import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generador-contrato',
  templateUrl: './generador-contrato.html',
  styleUrls: ['./generador-contrato.scss']
})
export class GeneradorContratoComponent {
  // Estructura basada en tu documento de apoyo
  datosContrato = {
    nombreEmpresa: '',        // 
    representanteLegal: '',   // 
    nombreProfesionista: '',  // [cite: 2]
    cedulaProfesional: '',    // [cite: 8]
    objetoServicio: '',       // [cite: 12]
    honorariosTotales: 0      // [cite: 15]
  };

  pasoActual: number = 1;

  constructor(private router: Router) {}

  siguientePaso() {
    if (this.pasoActual < 3) {
      this.pasoActual++;
    } else {
      // Al finalizar, enviamos los datos al editor
      this.router.navigate(['/editor-contrato'], { state: { data: this.datosContrato } });
    }
  }

  retrocederPaso() {
    if (this.pasoActual > 1) this.pasoActual--;
  }
}