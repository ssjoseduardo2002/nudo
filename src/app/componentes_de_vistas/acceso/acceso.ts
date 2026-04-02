import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.html',
  styleUrls: ['./acceso.scss']
})
export class AccesoComponent {
  constructor(private router: Router) {}

  // Acción del botón "Iniciar Sesión"
  onLogin() {
    console.log('Accediendo a NUDO...');
    // Aquí iría la validación de credenciales
    this.router.navigate(['/inicio']); 
  }

  // Acción del enlace "Regístrate gratis"
  goToRegistro() {
    this.router.navigate(['/registro']);
  }
}
