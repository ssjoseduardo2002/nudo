import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.scss']
})
export class InicioComponent {
  constructor(private router: Router) {}

  // Botón: Nuevo Contrato
  crearNuevoContrato() {
    this.router.navigate(['/catalogo']);
  }

  // Botón: Mis Documentos
  verDocumentos() {
    // Por ahora lo mandamos al catálogo o una vista de lista
    this.router.navigate(['/catalogo']);
  }

  // Botón: Configuración
  irAPerfil() {
    this.router.navigate(['/perfil-de-usuario']);
  }
}
