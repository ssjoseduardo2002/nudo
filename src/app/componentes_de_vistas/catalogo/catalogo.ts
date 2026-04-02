import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.scss']
})
export class CatalogoComponent {
  constructor(private router: Router) {}

  // Al hacer clic en "Usar este modelo"
  seleccionarModelo(tipo: string) {
    console.log(`Modelo seleccionado: ${tipo}`);
    this.router.navigate(['/generador-contrato']);
  }
}
