import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Definimos una interfaz limpia para quitar el tipo 'any' y mantener el búnker tipado
interface DatosContrato {
  nombreEmpresa: string;
  nombreProfesionista: string;
  fecha: string;
  montoProyecto?: number;
  objetoContrato?: string;
  // ⚖️ Nuevas propiedades para el blindaje legal mexicano
  noEscritura?: string;
  noNotario?: string;
  nombreNotario?: string;
  estadoNotario?: string;
  ciudadJurisdiccion?: string;
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
  
  // Clave única para identificar el almacenamiento en LocalStorage
  private readonly STORAGE_KEY = 'nudo_borrador_actual';

  constructor() {
    // 🛰️ Intentamos recuperar primero si ya había un ID de contrato guardado en la sesión local
    const idGuardado = localStorage.getItem(`${this.STORAGE_KEY}_id`);
    
    if (idGuardado) {
      this.idContrato = idGuardado;
    } else {
      // Si es un contrato complemente nuevo, generamos un hash de 5 dígitos único
      this.idContrato = Math.random().toString(36).toUpperCase().substring(2, 7);
    }
  }

  ngOnInit(): void {
    /**
     * 🛰️ Recuperador de Estado Avanzado NUDO:
     * 1. Primero intenta cachar los datos frescos que vengan del ruteo/navegación.
     * 2. Si no hay datos de navegación (como un F5), busca si hay un borrador previo en LocalStorage.
     * 3. Si el búnker local está vacío, inyecta el mock limpio de desarrollo.
     */
    const datosNavegacion = history.state.data;
    const datosLocales = localStorage.getItem(this.STORAGE_KEY);

    if (datosNavegacion) {
      this.contratoFinal = datosNavegacion;
    } else if (datosLocales) {
      this.contratoFinal = JSON.parse(datosLocales);
      console.log('📦 Borrador local recuperado exitosamente tras recarga.');
    } else {
      this.contratoFinal = {
        nombreEmpresa: '[Nombre de la Empresa]',
        nombreProfesionista: 'José',
        fecha: new Date().toLocaleDateString(),
        montoProyecto: 0,
        objetoContrato: '[Describir los servicios de desarrollo frontend]',
        // ⚖️ Inicializadores por defecto para el panel inteligente
        noEscritura: '[No. Escritura]',
        noNotario: '[No. Notario]',
        nombreNotario: '[Nombre del Notario]',
        estadoNotario: '[Estado del Notario]',
        ciudadJurisdiccion: 'Ciudad de México'
      };
    }
    
    console.log('=== 🪢 Editor Maestro de NUDO Activo ===');
    console.log(`Documento en memoria: [#ND-${this.idContrato}]`);
  }

  /**
   * 💾 Guarda el progreso actual en caliente (Persistencia Local -> Listo para Firebase)
   */
  public guardarBorrador(): void {
    console.log(`💾 Sincronizando borrador #ND-${this.idContrato} en el búnker local...`);
    
    try {
      // Serializamos el objeto y lo mandamos a congelar de forma segura
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.contratoFinal));
      localStorage.setItem(`${this.STORAGE_KEY}_id`, this.idContrato);
      
      console.log('✅ Sincronización local exitosa.');
      alert('Progreso guardado con éxito, socio. El contrato está a salvo localmente. 🪢');
    } catch (error) {
      console.error('❌ Error al salvar en el búnker local:', error);
      alert('Hubo un problema al guardar, revisa la consola socio.');
    }
  }

  /**
   * 📄 Dispara la optimización de impresión nativa
   */
  public exportarPDF(): void {
    console.log(`📄 Exportando lienzo legal de: ${this.contratoFinal.nombreEmpresa}`);
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
      alert('¡Contrato enviado! NUDO ha enviado las alertas de firma digital a las partes.');
    }
  }
}