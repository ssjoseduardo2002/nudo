import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-la-mente-detras-de-nudo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './la-mente-detras-de-nudo.html',
  styleUrl: './la-mente-detras-de-nudo.scss'
})
export class LaMenteDetrasDeNUDO implements OnInit {

  // ⚡ ANIKILACIÓN DE ERRORES: Sincronización de Identidad NUDO
  public redesSociales = {
    instagram: 'https://instagram.com/tu_usuario',
    linkedin: 'https://linkedin.com/in/tu_perfil',
    github: 'https://github.com/tu_repo'
  };

  // Datos biográficos para el "About"
  public nombreFundador: string = 'José';
  public cargo: string = 'CEO de NUDO';

  constructor() {}

  ngOnInit(): void {
    /**
     * 🕵️ Registro de Auditoría:
     * El manifiesto se carga solo cuando el socio busca conocer el origen de la protección.
     */
    console.log('--- Manifiesto de NUDO cargado ---');
    console.log(`${this.cargo}: ${this.nombreFundador} | Misión: Blindar el talento creativo.`);
  }

  /**
   * Método de navegación segura hacia perfiles externos.
   * "Operar sin emociones": Un clic, una ventana nueva, conexión total.
   */
  public irARed(url: string): void {
    if (url) {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  }
}