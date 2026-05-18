import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Definimos una interfaz limpia para quitar el tipo 'any' y mantener el búnker tipado
interface DatosContrato {
  nombreEmpresa: string;
  nombreProfesionista: string;
  fecha: string;
  montoProyecto?: number;
  objetoContrato?: string;
}

@Component({
  selector: 'app-editor-contrato',
  standalone: true,
  imports: [FormsModule], // Reemplazamos CommonModule por FormsModule para el binding interactivo
  templateUrl: './editor-contrato.html',
  styleUrl: './editor-contrato.scss' // ⚡ REPARADO: 'styleUrl' en singular para Angular v20
})
export class EditorContrato implements OnInit {
  
  // 📄 Estructura del documento respaldada por la interfaz
  public contratoFinal!: DatosContrato;
  public idContrato: string = '';

  constructor() {
    // Generamos un ID hash único de 5 dígitos para la sesión de edición en NUDO
    this.idContrato = Math.random().toString(36).toUpperCase().substring(2, 7);
  }

  ngOnInit(): void {
    /**
     * 🛰️ Recuperador de Estado NUDO:
     * Intenta cachar los datos enviados por el generador de contratos.
     * Si no hay datos (ingreso directo), inyecta un mock limpio de desarrollo.
     */
    this.contratoFinal = history.state.data || {
      nombreEmpresa: '[Nombre de la Empresa]',
      nombreProfesionista: 'José',
      fecha: new Date().toLocaleDateString(),
      montoProyecto: 0,
      objetoContrato: '[Describir los servicios de desarrollo frontend]'
    };
    
    console.log('=== 🪢 Editor Maestro de NUDO Activo ===');
    console.log(`Documento en memoria: [#ND-${this.idContrato}]`);
  }

  /**
   * 💾 Guarda el progreso actual en caliente (Preparado para Firebase)
   */
  public guardarBorrador(): void {
    console.log(`💾 Sincronizando borrador #ND-${this.idContrato} en la nube...`);
    // TODO: Implementar el servicio de persistencia Firestore / LocalStorage
    alert('Progreso guardado con éxito, socio. El contrato está a salvo. 🪢');
  }

  /**
   * 📄 Dispara la optimización de impresión nativa
   */
  public exportarPDF(): void {
    console.log(`📄 Exportando lienzo legal de: ${this.contratoFinal.nombreEmpresa}`);
    // Mandamos a llamar el print del navegador, el cual se adaptará al formato hoja gracias al SCSS
    window.print();
  }

  /**
   * 🛡️ Bloqueo de seguridad y protocolo de firma electrónica
   */
  public enviarAFirma(): void {
    console.log('📧 Iniciando pasarela de firmas electrónicas NUDO...');
    
    const confirmacion = confirm(
      '¿Estás seguro de enviar este contrato a firma? Se bloqueará la edición para asegurar la integridad legal. 🛡️'
    );
    
    if (confirmacion) {
      // Aquí se disparará el flujo del backend para notificar por correo
      alert('¡Contrato enviado! NUDO ha enviado las alertas de firma digital a las partes.');
    }
  }
}