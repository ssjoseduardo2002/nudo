import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule
  ],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.scss'
})
export class Encabezado implements OnInit {
  // Datos del usuario que vienen desde el componente principal
  @Input() usuario: string = 'Socio';
  @Input() seccion: string = '';
  
  // Control de visibilidad para el flujo de autenticación
  @Input() enPantallaAcceso: boolean = false; 

  // Propiedad para el saludo dinámico (Creatividad NUDO)
  public saludoBienvenida: string = '';

  constructor() {}

  ngOnInit(): void {
    this.establecerSaludo();
  }

  /**
   * Genera un saludo personalizado basado en la hora del sistema.
   * Porque un CEO siempre recibe a sus socios con propiedad. 👔
   */
  private establecerSaludo(): void {
    const hora = new Date().getHours();
    
    if (hora >= 5 && hora < 12) {
      this.saludoBienvenida = '¡Buenos días';
    } else if (hora >= 12 && hora < 19) {
      this.saludoBienvenida = '¡Buenas tardes';
    } else {
      this.saludoBienvenida = '¡Buenas noches';
    }
  }

  /**
   * Lógica para cerrar sesión (Pensando en el futuro cercano de Firebase) 🚀
   */
  public onLogout(): void {
    console.log('--- Cerrando sesión en NUDO ---');
    // Aquí integraremos auth.signOut() de Firebase más adelante
  }
}
