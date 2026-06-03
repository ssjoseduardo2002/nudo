import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

// Contratos de interfaces para asegurar tipado estricto en el ecosistema NUDO
interface CategoriaAyuda {
  id: string;
  icono: string;
  titulo: string;
  descripcion: string;
  cantidad: string;
}

interface SeccionLegal {
  subtitulo: string;
  contenido: string;
}

interface DocumentoLegal {
  titulo: string;
  fechaActualizacion: string;
  secciones: SeccionLegal[];
}

@Component({
  selector: 'app-centro-ayuda',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './centro-ayuda.html',
  styleUrl: './centro-ayuda.scss'
})
export class CentroAyuda implements OnInit {

  // ⚡ CONTROL DE ESTADO HÍBRIDO
  public vistaActual: 'ayuda' | 'legal' = 'ayuda';

  // Colección reactiva de categorías para soporte rápido
  public categoriasAyuda: CategoriaAyuda[] = [
    { 
      id: 'primeros-pasos', 
      icono: '🚀', 
      titulo: 'Primeros Pasos', 
      descripcion: 'Configura tu perfil de socio y crea tu primer blindaje legal en minutos.', 
      cantidad: '5 guías' 
    },
    { 
      id: 'seguridad-legal', 
      icono: '🛡️', 
      titulo: 'Legal y Seguridad', 
      descripcion: 'Validez de las firmas digitales y cómo protegemos tu propiedad intelectual.', 
      cantidad: '8 artículos' 
    },
    { 
      id: 'pagos-creditos', 
      icono: '💳', 
      titulo: 'Pagos y Créditos', 
      descripcion: 'Gestión de planes, facturación y cómo adquirir más créditos de contrato.', 
      cantidad: '4 tutoriales' 
    }
  ];

  // Modelo reactivo para el renderizado editorial de textos legales
  public documentoLegal: DocumentoLegal = {
    titulo: '',
    fechaActualizacion: '',
    secciones: []
  };

  // Inyectamos las herramientas de ruteo para auditar el acceso del usuario
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 🧠 AUDITORÍA DE RUTA: Detectamos el path exacto configurado en app.routes.ts
    const urlActual = this.route.snapshot.routeConfig?.path;
    console.log(`--- [Ecosistema NUDO] Entrada registrada mediante path: /${urlActual} ---`);

    if (urlActual === 'privacidad') {
      this.cargarAvisoPrivacidad();
    } else if (urlActual === 'terminos') {
      this.cargarTerminosServicio();
    } else {
      this.vistaActual = 'ayuda';
    }
  }

  /**
   * Ejecuta la búsqueda reactiva en la base de conocimientos
   * @param termino Palabra clave ingresada por el socio
   */
  public buscarSolucion(termino: string): void {
    if (!termino || !termino.trim()) return;
    console.log(`🔍 [Buscador] Escaneando base de conocimientos NUDO para: "${termino.trim()}"`);
    alert(`Ecosistema NUDO: Buscando soluciones para "${termino}"... (Módulo de indexación próximamente activo)`);
  }

  /**
   * Direcciona al socio a la lista detallada de una categoría de soporte
   */
  public seleccionarCategoria(id: string): void {
    console.log(`📁 [Categorías] Abriendo búnker de documentación: ${id}`);
    // Próximamente: Navegación interna o filtrado de artículos
  }

  /**
   * Rompe el estado legal y devuelve al usuario al Centro de Soporte principal
   */
  public regresarAlSoporte(): void {
    console.log('🔄 [Navegación] Solicitando retorno seguro al Hub de Soporte.');
    this.vistaActual = 'ayuda';
    this.router.navigate(['/centro-ayuda']);
  }

  /**
   * Abre un canal VIP de comunicación directa por correo con los fundadores
   */
  public contactarSoporte(): void {
    console.log('🤝 [Soporte VIP] El socio necesita refuerzos de ingeniería. Abriendo canal...');
    
    const email = 'soporte@nudo.com';
    const asunto = encodeURIComponent('Asistencia NUDO: Consulta de Socio Activo');
    const cuerpo = encodeURIComponent('Hola, equipo de NUDO. Estoy desarrollando mis operaciones en la app y necesito asistencia personalizada con lo siguiente:\n\n');
    
    window.open(`mailto:${email}?subject=${asunto}&body=${cuerpo}`, '_blank');
  }

  // =========================================================================
  // 🏛️ SECCIÓN DE TEXTOS LEGALES (Sincronizados con la visión Legal-Tech de NUDO)
  // =========================================================================
  
  private cargarAvisoPrivacidad(): void {
    this.vistaActual = 'legal';
    this.documentoLegal = {
      titulo: 'Aviso de Privacidad Blindado',
      fechaActualizacion: '03/06/2026',
      secciones: [
        {
          subtitulo: '1. Protección de Datos del Ecosistema',
          contenido: 'En NUDO, la seguridad de tus contratos, firmas digitales y datos de transacciones monetarias es nuestra máxima prioridad. Toda la información ingresada para la generación de contratos y validación de identidad se procesa bajo estrictos protocolos de cifrado de grado militar.'
        },
        {
          subtitulo: '2. Tratamiento de Información en Firebase',
          contenido: 'Tus credenciales de acceso, perfiles de socio e información de facturación están resguardados mediante arquitecturas seguras integradas con Google Firebase. NUDO no vende, comercializa ni transfiere tus documentos generados a terceras entidades bajo ninguna circunstancia.'
        }
      ]
    };
  }

  private cargarTerminosServicio(): void {
    this.vistaActual = 'legal';
    this.documentoLegal = {
      titulo: 'Términos y Condiciones de Servicio',
      fechaActualizacion: '03/06/2026',
      secciones: [
        {
          subtitulo: '1. Legalidad de los Contratos Generados',
          contenido: 'Los acuerdos y contratos civiles, comerciales o de servicios digitales generados e hilados a través de la infraestructura automatizada de NUDO cumplen rigurosamente con los lineamientos del Código Civil vigente. El socio acepta que la plataforma actúa como una suite inteligente de automatización de cláusulas.'
        },
        {
          subtitulo: '2. Uso de Créditos y Pasarela de Pagos',
          contenido: 'La adquisición de paquetes para la maquila y descarga en formato PDF de tus contratos se gestiona de manera transparente a través de nuestra pasarela de pagos blindada. Cada descarga exitosa consume un crédito asignado a la billetera del socio de forma irreversible.'
        }
      ]
    };
  }
}