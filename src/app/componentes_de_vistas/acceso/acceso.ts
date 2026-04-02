import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.html',
  styleUrls: ['./acceso.scss']
})
export class AccesoComponent {
  constructor(private router: Router) {}

  onLogin() {
    // Redirección inmediata al Inicio como lo configuramos
    this.router.navigate(['/inicio']);
  }

  onRegistro() {
    // Acción para el enlace "¿Aún no eres parte? Regístrate gratis"
    console.log('Navegando a registro...');
  }
}
