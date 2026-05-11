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

  // Modelo de datos para redes sociales (listo para expandir)
  public redesSociales = {
    instagram: 'https://instagram.com/tu_usuario',
    linkedin: 'https://linkedin.com/in/tu_perfil',
    github: 'https://github.com/tu_repo'
  };

  constructor() {}

  ngOnInit(): void {
    console.log('--- Manifiesto de NUDO cargado ---');
    console.log('CEO: José | Misión: Blindar el talento creativo.');
  }

  /**
   * Método para navegación externa a redes sociales
   */
  public irARed(url: string): void {
    window.open(url, '_blank');
  }
}