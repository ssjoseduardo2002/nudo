import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio implements OnInit { // Nombre simplificado para el spec.ts

  // Aquí vive el nombre que se imprime en el banner de bienvenida
  public nombreUsuario: string = 'José';

  constructor() {}

  ngOnInit(): void {
    // Aquí es donde en el futuro podrías llamar a un servicio de Firebase
    // para traer los datos reales de los "Contratos Activos"
    console.log(`--- Dashboard NUDO: Bienvenido de nuevo, ${this.nombreUsuario} ---`);
  }

  /**
   * Método opcional por si quieres refrescar las estadísticas
   * del tablero sin recargar la página.
   */
  public refrescarTablero(): void {
    console.log('🔄 Sincronizando métricas de blindaje...');
  }
}