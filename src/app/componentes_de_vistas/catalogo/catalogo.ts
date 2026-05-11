import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Definimos la estructura de un "Nudo" para mayor orden
interface Contrato {
  id: string;
  nombre: string;
  fecha: string;
  estado: 'Completado' | 'Pendiente'; // Alineado con tus clases de SCSS
}

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss'
})
export class Catalogo implements OnInit { // Nombre simplificado para el spec.ts

  // Datos de prueba con el formato corregido para evitar errores de substring
  public misContratos: Contrato[] = [
    { id: 'NUDO-7721-AX', nombre: 'Contrato de Servicios Web', fecha: '12/04/2026', estado: 'Completado' },
    { id: 'NUDO-8832-BY', nombre: 'NDA - Proyecto Creativo', fecha: '10/04/2026', estado: 'Pendiente' },
    { id: 'NUDO-9943-CZ', nombre: 'Acuerdo de Colaboración', fecha: '05/04/2026', estado: 'Completado' }
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('--- Catálogo de NUDOS cargado correctamente ---');
  }

  /**
   * Acción para visualizar el documento generado
   * @param id Identificador único del contrato
   */
  public verDocumento(id: string): void {
    console.log(`📄 Abriendo vista previa del contrato: ${id}`);
    // Aquí irá la lógica para abrir el PDF generado
  }

  /**
   * Acción para editar o revisar detalles del acuerdo
   */
  public gestionarContrato(id: string): void {
    console.log(`🛠️ Entrando a la gestión del contrato: ${id}`);
    // Próximamente: this.router.navigate(['/gestor', id]);
  }
}
