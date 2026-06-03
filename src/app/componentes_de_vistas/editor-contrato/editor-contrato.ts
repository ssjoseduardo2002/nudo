import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Definimos una interfaz limpia para quitar el tipo 'any' y mantener el búnker tipado
interface DatosContrato {
  nombreEmpresa: string;
  nombreProfesionista: string;
  fecha: string;
  montoProyecto?: number;
  objetoContrato?: string;
  // ⚖️ Propiedades para el blindaje legal mexicano
  noEscritura?: string;
  noNotario?: string;
  nombreNotario?: string;
  estadoNotario?: string;
  ciudadJurisdiccion?: string;
}

@Component({
  selector: 'app-editor-contrato',
  standalone: true,
  imports: [FormsModule], // FormsModule activo para habilitar el binding interactivo [(ngModel)]
  templateUrl: './editor-contrato.html',
  styleUrl: './editor-contrato.scss' // ⚡ Singuralizado con éxito para compatibilidad estricta
})
export class EditorContrato implements OnInit {
  
  // 📄 Estructura del documento respaldada por la interfaz
  public contratoFinal!: DatosContrato;
  public idContrato: string = '';
  
  // Clave única para identificar el almacenamiento seguro en LocalStorage
  private readonly STORAGE_KEY = 'nudo_borrador_actual';

  constructor() {
    // 🛰️ Intentamos recuperar primero si ya había un ID de contrato guardado en la sesión local
    const idGuardado = localStorage.getItem(`${this.STORAGE_KEY}_id`);
    
    if (idGuardado) {
      this.idContrato = idGuardado;
    } else {
      // Generamos un hash de 5 dígitos único para el consecutivo del folio NUDO
      this.idContrato = Math.random().toString(36).toUpperCase().substring(2, 7);
    }
  }

  ngOnInit(): void {
    /**
     * 🛰️ Recuperador de Estado Avanzado NUDO:
     * 1. Primero intenta capturar los datos frescos que vengan del ruteo/navegación (Flujo del catálogo).
     * 2. Si no hay datos de navegación (recarga forzada/F5), busca el borrador en LocalStorage.
     * 3. Si el búnker local está vacío, inyecta el mock inicial optimizado.
     */
    const datosNavegacion = history.state.data;
    
    if (datosNavegacion) {
      this.contratoFinal = datosNavegacion;
      console.log('📦 Datos obtenidos via router state.');
    } else {
      this.recuperarBorradorLocal();
    }
    
    console.log('=== 🪢 Editor Maestro de NUDO Activo ===');
    console.log(`Documento en memoria: [#ND-${this.idContrato}]`);
  }

  /**
   * 🔄 Recuperador defensivo de caché local
   */
  private recuperarBorradorLocal(): void {
    const datosLocales = localStorage.getItem(this.STORAGE_KEY);
    
    if (datosLocales) {
      try {
        this.contratoFinal = JSON.parse(datosLocales);
        console.log('📦 Borrador local recuperado exitosamente tras recarga.');
        return;
      } catch (error) {
        console.error('⚠️ Error al parsear el caché local corrompido, reestableciendo búnker:', error);
      }
    }

    // Inicializadores vacíos para permitir que los fallbacks inteligentes del HTML actúen
    this.contratoFinal = {
      nombreEmpresa: '',
      nombreProfesionista: 'Socio Diseñador', // Puede ligarse dinámicamente al perfil del usuario posterior
      fecha: new Date().toLocaleDateString('es-MX'),
      montoProyecto: undefined,
      objetoContrato: '',
      noEscritura: '',
      noNotario: '',
      nombreNotario: '',
      estadoNotario: '',
      ciudadJurisdiccion: 'Ciudad de México'
    };
  }

  /**
   * 💾 Guarda el progreso actual en caliente (Persistencia Local -> Compuerta para Firebase)
   */
  public guardarBorrador(): void {
    console.log(`💾 Sincronizando borrador #ND-${this.idContrato} en el búnker local...`);
    
    try {
      // Serializamos el objeto y lo mandamos a congelar de forma segura en LocalStorage
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.contratoFinal));
      localStorage.setItem(`${this.STORAGE_KEY}_id`, this.idContrato);
      
      console.log('✅ Sincronización local exitosa.');
      
      /**
       * 🚀 TO-DO: Integración Firebase Cloud Firestore
       * Aquí se disparará el servicio: this.firestoreService.updateContrato(this.idContrato, this.contratoFinal)
       */
      
      alert('Progreso guardado con éxito, socio. El contrato está a salvo localmente. 🪢');
    } catch (error) {
      console.error('❌ Error fatal al salvar en el búnker local:', error);
      alert('Hubo un problema al guardar, revisa la consola socio.');
    }
  }

  /**
   * 📄 Dispara la optimización de impresión nativa y guardado en PDF local
   */
  public exportarPDF(): void {
    console.log(`📄 Exportando lienzo legal de: ${this.contratoFinal.nombreEmpresa || 'Documento sin título'}`);
    window.print();
  }

  /**
   * 🛡️ Bloqueo de seguridad y protocolo de firma electrónica
   */
  public enviarAFirma(): void {
    console.log('📧 Iniciando pasarela de firmas electrónicas NUDO...');
    
    if (!this.contratoFinal.nombreEmpresa || !this.contratoFinal.objetoContrato) {
      alert('⚠️ No puedes enviar a firma un contrato incompleto. Llena los campos core en el panel izquierdo.');
      return;
    }

    const confirmacion = confirm(
      '¿Estás seguro de enviar este contrato a firma? Se bloqueará la edición en la nube para asegurar la integridad legal de las partes. 🛡️'
    );
    
    if (confirmacion) {
      /**
       * 🚀 TO-DO: Trigger de función serverless en Node.js para envío de correos verificados con Firebase Functions
       */
      alert('¡Contrato enviado! NUDO ha iniciado el protocolo seguro y enviado las alertas de firma digital.');
    }
  }
}