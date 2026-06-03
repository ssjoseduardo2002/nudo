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

  // ⚡ Identidad y Perfil del Socio
  public perfil = {
    nombre: 'José',
    edad: 24,
    inspiracion: {
      cita: '"Para obtener algo, es necesario sacrificar algo de igual valor. Pero creo que no es la única verdad del mundo. Si te esfuerzas y trabajas duro, puedes llegar a algo más grande que ese sacrificio."',
      autor: 'Alphonse Elric',
      obra: 'Fullmetal Alchemist: Brotherhood'
    }
  };

  public redesSociales = {
    instagram: 'https://instagram.com/tu_usuario',
    linkedin: 'https://linkedin.com/in/tu_perfil',
    github: 'https://github.com/tu_repo'
  };

  constructor() {}

  ngOnInit(): void {
    /**
     * 🕵️ Registro de Auditoría:
     * El manifiesto se carga solo cuando el socio busca conocer el origen de la protección.
     */
    console.log('--- Manifiesto de NUDO cargado ---');
    console.log(`CEO: ${this.perfil.nombre} | Misión: Blindar el talento creativo.`);
  }

  /**
   * Método de navegación segura hacia perfiles externos.
   */
  public irARed(url: string): void {
    if (url) {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  }
}