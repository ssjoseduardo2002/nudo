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
  // El término que el usuario escribe
  public terminoBusqueda: string = '';

  // Lista de resultados rápidos (puedes alimentarla desde un servicio después)
  public resultadosPrevios: any[] = [];

  // 📢 El altavoz: Avisa al componente padre cada que el usuario busca algo
  @Output() onBuscar = new EventEmitter<string>();

  /**
   * Se ejecuta en cada pulsación de tecla o cambio en el input
   */
  public alBuscar(): void {
    this.onBuscar.emit(this.terminoBusqueda);
    
    // Aquí podrías filtrar resultados rápidos localmente si quisieras
    if (this.terminoBusqueda.length > 2) {
      this.simularResultadosRapidos();
    }
  }

  /**
   * Lógica para los chips de sugerencias
   */
  public setFiltro(filtro: string): void {
    this.terminoBusqueda = filtro;
    this.alBuscar(); // Disparamos la búsqueda automáticamente
  }

  /**
   * Limpia el buscador y resetea la vista
   */
  public limpiarBusqueda(): void {
    this.terminoBusqueda = '';
    this.resultadosPrevios = [];
    this.onBuscar.emit('');
  }

  /**
   * Una pequeña simulación para que veas cómo luciría el dropdown
   */
  private simularResultadosRapidos(): void {
    // Esto es solo visual para que pruebes tu SCSS
    this.resultadosPrevios = [
      { id: 'ND-001', nombre: 'Contrato Freelance SCSS', estado: 'Firmado' },
      { id: 'ND-002', nombre: 'Blindaje de Marca NUDO', estado: 'Blockchain' }
    ].filter(res => res.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase()));
  }
}
