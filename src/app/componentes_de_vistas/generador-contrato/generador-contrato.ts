import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generador-contrato',
  templateUrl: './generador-contrato.html',
  styleUrls: ['./generador-contrato.scss']
})
export class GeneradorContratoComponent {
  pasoActual: number = 1;

  constructor(private router: Router) {}

  siguientePaso() {
    if (this.pasoActual < 3) {
      this.pasoActual++;
    } else {
      // Si ya está en el último paso, va al editor
      this.router.navigate(['/editor-contrato']);
    }
  }

  retrocederPaso() {
    if (this.pasoActual > 1) {
      this.pasoActual--;
    } else {
      this.router.navigate(['/catalogo']);
    }
  }
}