import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface para asegurar la integridad de la prueba social.
 */
interface Referencia {
  cliente: string;
  empresa: string;
  comentario: string;
  idHash: string;
  servicioAdquirido: string;
}

@Component({
  selector: 'app-referencias-de-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './referencias-de-clientes.html',
  styleUrl: './referencias-de-clientes.scss',
})
export class ReferenciasDeClientes implements OnInit {

  // Lista de testimonios (Ready for Service Injection)
  public referencias: Referencia[] = [
    {
      cliente: 'Carlos Rivera',
      empresa: 'RivTech Solutions',
      comentario: 'NUDO cambió las reglas del juego. Ahora mis contratos de software están sellados en la blockchain y mis clientes sienten esa seguridad desde el minuto uno.',
      idHash: 'ND-TX-8829-BK',
      servicioAdquirido: 'Blindaje Corporativo'
    },
    {
      cliente: 'Ana Sofía',
      empresa: 'Estudio Creativo Luna',
      comentario: 'Como creadora de contenido, siempre temía por mi propiedad intelectual. Con NUDO, el proceso es tan fácil que ya no necesito abogados costosos.',
      idHash: 'ND-TX-4410-CL',
      servicioAdquirido: 'Protección de Autoría'
    },
    {
      cliente: 'Roberto Gómez',
      empresa: 'Gómez & Asociados',
      comentario: 'La simplicidad de la pasarela y la claridad de los perfiles profesionales hacen que NUDO sea la herramienta que todo freelancer en México necesita.',
      idHash: 'ND-TX-1205-GA',
      servicioAdquirido: 'Contrato de Servicios'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('[NUDO-SYSTEM] Muro de Confianza cargado. Prueba social activa.');
  }

  /**
   * Navegación hacia el flujo de adquisición de blindaje.
   */
  public irABlindaje(): void {
    console.log('[NUDO-SYSTEM] Redirigiendo al flujo de blindaje...');
    // Implementar navegación a 'pago-seguro' o 'generador-contrato'
  }
}