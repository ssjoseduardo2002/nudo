import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-centro-ayuda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './centro-ayuda.html',
  styleUrl: './centro-ayuda.scss'
})
// Simplificamos el nombre a 'CentroAyuda' para que haga match con tu spec.ts
export class CentroAyuda implements OnInit {

  constructor() {}

  ngOnInit(): void {
    console.log('--- Centro de Ayuda NUDO: Operativo ---');
  }

  /**
   * Esta es la función que te faltaba, socio. 
   * Con esto el error rojo desaparece de inmediato.
   */
  public contactarSoporte(): void {
    console.log('🤝 El socio necesita refuerzos. Abriendo canal de soporte...');
    
    // Abrimos el correo del CEO para atención personalizada
    const email = 'soporte@nudo.com';
    const asunto = 'Asistencia NUDO: Consulta de Socio';
    const cuerpo = 'Hola, equipo de NUDO. Necesito ayuda con lo siguiente: ';
    
    window.open(`mailto:${email}?subject=${asunto}&body=${cuerpo}`, '_blank');
  }

  /**
   * Lógica para el buscador (Próximamente conectada a una base de conocimientos)
   */
  public buscarAyuda(termino: string): void {
    if (!termino) return;
    console.log(`🔍 Buscando en la base legal de NUDO: ${termino}`);
    // Aquí podrías filtrar una lista de artículos en el futuro
  }
}
