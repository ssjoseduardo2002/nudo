import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Interfaz para definir las métricas del tablero y asegurar tipado estricto.
 */
interface EstadisticasDashboard {
  activos: number;
  pendientes: number;
  prioridad: string;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio implements OnInit { 

  public nombreUsuario: string = 'José';
  
  // Modelo de datos para las tarjetas del tablero
  public estadisticas: EstadisticasDashboard = {
    activos: 12,
    pendientes: 5,
    prioridad: 'Revisar contrato de "Agencia Creativa"'
  };

  constructor() {}

  ngOnInit(): void {
    // Registro de telemetría inicial
    console.log(`🚀 [NUDO Dashboard] Inicializando sesión para: ${this.nombreUsuario}`);
    this.refrescarTablero();
  }

  /**
   * Método de sincronización: Se conectará a los servicios de Firebase/Firestore
   * para obtener métricas en tiempo real.
   */
  public refrescarTablero(): void {
    console.log('🔄 [NUDO Engine] Sincronizando métricas de blindaje contra búnker...');
    
    // Aquí implementaremos la lógica asíncrona de carga de datos:
    // this.contractService.getDashboardStats().subscribe(...)
  }
}