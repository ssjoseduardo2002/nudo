import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.scss']
})
export class InicioComponent {
  constructor(private router: Router) {}

  crearNuevoContrato(): void {
    this.router.navigate(['/catalogo']);
  }
}