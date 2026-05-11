import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editor-contrato',
  standalone: true, // Aseguramos que sea standalone como el resto de NUDO
  imports: [CommonModule],
  templateUrl: './editor-contrato.html',
  styleUrls: ['./editor-contrato.scss']
})
export class EditorContrato implements OnInit {
  // Datos del contrato
  public contratoFinal: any;
  public idContrato: string = '';

  constructor() {
    // Generamos un ID temporal para la sesión de edición
    this.idContrato = Math.random().toString(36).toUpperCase().substring(2, 7);
  }

  ngOnInit(): void {
    // Recuperamos los datos del estado de navegación (desde el generador)
    this.contratoFinal = history.state.data || {
      nombreEmpresa: '[Nombre de la Empresa]',
      nombreProfesionista: 'José',
      fecha: new Date().toLocaleDateString()
    };
    
    console.log('--- Editor de NUDO activo ---');
    console.log('Cargando documento:', this.idContrato);
  }

  /**
   * Guarda el estado actual del contenteditable en la "nube" de NUDO
   */
  public guardarBorrador(): void {
    console.log('💾 Guardando progreso del contrato ' + this.idContrato + '...');
    // Aquí iría la lógica para guardar el innerHTML en Firebase
    alert('Borrador guardado con éxito, socio. 🪢');
  }

  /**
   * Lógica para el botón "Exportar PDF"
   */
  public exportarPDF(): void {
    console.log('📄 Generando documento legal para:', this.contratoFinal.nombreEmpresa);
    // Usamos el print del navegador optimizado por nuestro SCSS
    window.print();
  }

  /**
   * Inicia el protocolo de envío para firma digital
   */
  public enviarAFirma(): void {
    console.log('📧 Iniciando protocolo de firma electrónica...');
    const confirmacion = confirm('¿Estás seguro de enviar este contrato a firma? Se bloqueará la edición. 🛡️');
    
    if (confirmacion) {
      alert('Contrato enviado. NUDO notificará a las partes involucradas.');
    }
  }
}