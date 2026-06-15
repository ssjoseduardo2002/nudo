import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Estructura profesional del Socio de NUDO
 * Define la identidad visual y legal en la plataforma.
 */
interface UsuarioNudo {
  nombre: string;
  apellido: string;
  email: string;
  profesion: string;
  biografia: string;
  nombreNegocio: string; 
}

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil-de-usuario.html',
  styleUrl: './perfil-de-usuario.scss'
})
export class PerfilDeUsuario implements OnInit {

  // Estado del perfil del socio
  public usuario: UsuarioNudo = {
    nombre: 'José',
    apellido: '',
    email: 'jose.nudo@ejemplo.com',
    profesion: 'Ingeniero Informático & CEO',
    biografia: 'Mente detrás del proyecto NUDO, enfocado en blindar el talento creativo.',
    nombreNegocio: 'NUDO'
  };

  constructor() {}

  ngOnInit(): void {
    console.log('[NUDO-SYSTEM] Perfil de Socio cargado y verificado.');
  }

  /**
   * Guarda los cambios y sincroniza la identidad en la plataforma
   */
  public guardarCambios(): void {
    if (!this.usuario.nombre || !this.usuario.email) {
      alert('Socio, el nombre y el correo son obligatorios para el blindaje.');
      return;
    }

    // Aquí iría el servicio de Firebase: this.authService.updateProfile(...)
    console.log('[NUDO-SYSTEM] Sincronizando identidad...', this.usuario);
    
    const mensaje = this.usuario.nombreNegocio 
      ? `¡Identidad corporativa de ${this.usuario.nombreNegocio} actualizada!` 
      : `¡Perfil de ${this.usuario.nombre} actualizado con éxito!`;

    alert(mensaje);
  }

  /**
   * Preparación para la integración de cambio de imagen
   */
  public actualizarFoto(): void {
    console.log('[NUDO-SYSTEM] Iniciando selector de archivos para avatar...');
    // Lógica para abrir explorador de archivos o modal de recorte
  }

  public cancelarEdicion(): void {
    if(confirm('¿Deseas descartar los cambios no guardados?')) {
      console.log('[NUDO-SYSTEM] Edición descartada.');
    }
  }
}