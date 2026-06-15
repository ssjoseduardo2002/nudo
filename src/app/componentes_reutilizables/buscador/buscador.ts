import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscador.html',
  styleUrl: './buscador.scss',
})
export class Buscador {
  public terminoBusqueda: string = '';
  public resultadosPrevios: any[] = [];

  @Output() onBuscar = new EventEmitter<string>();

  /**
   * Dispara la búsqueda con validación de estado
   */
  public alBuscar(): void {
    this.onBuscar.emit(this.terminoBusqueda);
    
    // Solo simulamos resultados si hay longitud mínima para mejorar rendimiento
    if (this.terminoBusqueda.trim().length > 2) {
      this.simularResultadosRapidos();
    } else {
      this.resultadosPrevios = [];
    }
  }

  public setFiltro(filtro: string): void {
    this.terminoBusqueda = filtro;
    this.alBuscar();
  }

  public limpiarBusqueda(): void {
    this.terminoBusqueda = '';
    this.resultadosPrevios = [];
    this.onBuscar.emit('');
  }

  private simularResultadosRapidos(): void {
    const data = [
      { id: 'ND-001', nombre: 'Contrato Freelance SCSS', estado: 'Firmado' },
      { id: 'ND-002', nombre: 'Blindaje de Marca NUDO', estado: 'Blockchain' },
      { id: 'ND-003', nombre: 'NDA Empresa Consultora', estado: 'Pendiente' }
    ];

    this.resultadosPrevios = data.filter(res => 
      res.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
  }
}
