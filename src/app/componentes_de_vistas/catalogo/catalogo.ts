import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

// Estructura blindada para los contratos del ecosistema NUDO
export interface Contrato {
  id: string;
  nombre: string;
  fecha: string;
  estado: 'Completado' | 'Pendiente'; // En perfecta sincronía con los estilos SCSS
}

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss'
})
export class Catalogo implements OnInit {

  // ⚡ CONTROL DE ESTADO: Filtro inicial por defecto
  public filtroActivo: string = 'todos';

  // Colección de contratos (Próximamente conectada en tiempo real a Firebase Firestore 📁)
  public misContratos: Contrato[] = [
    { id: 'NUDO-7721-AX', nombre: 'Contrato de Servicios Web', fecha: '12/04/2026', estado: 'Completado' },
    { id: 'NUDO-8832-BY', nombre: 'NDA - Proyecto Creativo', fecha: '10/04/2026', estado: 'Pendiente' },
    { id: 'NUDO-9943-CZ', nombre: 'Acuerdo de Colaboración', fecha: '05/04/2026', estado: 'Completado' }
  ];

  // Inyectamos el Router para la navegación entre búnkers de la app
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('--- 📂 Panel del Catálogo NUDO Operativo y Blindado ---');
  }

  /**
   * 🔥 GETTER DE ALTO RENDIMIENTO:
   * Filtra dinámicamente los contratos basándose en la selección del socio.
   * Evita fugas de memoria y optimiza el renderizado del ciclo de vida de Angular.
   */
  get contratosFiltrados(): Contrato[] {
    if (this.filtroActivo === 'todos') {
      return this.misContratos;
    }
    return this.misContratos.filter(contrato => 
      contrato.estado.toLowerCase() === this.filtroActivo
    );
  }

  /**
   * Modifica el estado del filtro global y dispara la reactividad del Grid
   * @param nuevoFiltro Destino seleccionado ('todos' | 'completado' | 'pendiente')
   */
  public cambiarFiltro(nuevoFiltro: string): void {
    console.log(`[Filtros] Transición interna hacia: ${nuevoFiltro.toUpperCase()}`);
    this.filtroActivo = nuevoFiltro;
  }

  /**
   * Ejecuta el protocolo de descarga y compilación del acuerdo en PDF
   */
  public descargarPDF(contrato: Contrato): void {
    console.log(`[PDF] Compilando bytes seguros para el folio: ${contrato.id}`);
    alert(`Ecosistema NUDO: Generando descarga segura para "${contrato.nombre}"... 📄⚡`);
    // Tip futuro: Aquí integrarás tu librería de PDF (como pdfmake o jspdf) o el microservicio de Python
  }

  /**
   * Redirige al socio a la suite avanzada de gestión y edición de cláusulas
   */
  public gestionarContrato(contrato: Contrato): void {
    console.log(`[Gestor] Accediendo a la suite de control del folio: ${contrato.id}`);
    
    // Navegación fluida y directa hacia el editor inteligente
    this.router.navigate(['/editor-contrato']);
  }

  /**
   * Despliega el menú flotante de acciones avanzadas de la tarjeta
   */
  public abrirOpciones(contrato: Contrato): void {
    console.log(`[Seguridad] Abriendo bitácora de opciones avanzadas para: ${contrato.id}`);
    alert(`Módulo de opciones para el folio ${contrato.id} en desarrollo. ⚙️`);
  }
}
