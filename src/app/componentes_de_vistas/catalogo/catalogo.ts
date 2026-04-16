import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss'
})
export class CatalogoComponent {
  // Datos de prueba para que veas cómo luce el diseño
  misContratos = [
    { id: 1, nombre: 'Contrato de Servicios Web', fecha: '12/04/2026', estado: 'Protegido' },
    { id: 2, nombre: 'NDA - Proyecto Creativo', fecha: '10/04/2026', estado: 'Pendiente' },
    { id: 3, nombre: 'Acuerdo de Colaboración', fecha: '05/04/2026', estado: 'Protegido' }
  ];

  constructor() {}
}
