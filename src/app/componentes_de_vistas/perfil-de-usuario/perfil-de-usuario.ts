import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Definimos la estructura profesional del Socio de NUDO
interface UsuarioNudo {
  nombre: string;
  apellido: string;
  email: string;
  profesion: string;
  biografia: string;
  nombreNegocio: string; // La pieza clave que añadimos hoy 🏢
}

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil-de-usuario.html',
  styleUrl: './perfil-de-usuario.scss'
})
export class PerfilDeUsuario implements OnInit {

  // Inicializamos los datos del socio
  public usuario: UsuarioNudo = {
    nombre: 'José',
    apellido: '',
    email: 'jose.nudo@ejemplo.com',
    profesion: 'Ingeniero Informático & CEO',
    biografia: 'Mente detrás del proyecto NUDO, enfocado en blindar el talento creativo.',
    nombreNegocio: 'NUDO' // Al llenar esto, el perfil se vuelve "Empresarial"
  };

  constructor() {}

  ngOnInit(): void {
    console.log('--- Perfil de Socio NUDO cargado ---');
    // Aquí podrías cargar los datos desde un servicio de Firebase o una API
  }

  /**
   * Guarda los cambios y actualiza la identidad en la plataforma
   */
  public guardarCambios(): void {
    if (!this.usuario.nombre || !this.usuario.email) {
      alert('Socio, el nombre y el correo son obligatorios para el blindaje.');
      return;
    }

    // Simulamos la actualización
    console.log('Sincronizando identidad NUDO:', this.usuario);
    
    const mensajeExitose = this.usuario.nombreNegocio 
      ? `¡Identidad corporativa de ${this.usuario.nombreNegocio} actualizada!` 
      : `¡Perfil de ${this.usuario.nombre} actualizado con éxito!`;

    alert(mensajeExitose);
  }

  /**
   * Método extra por si quieres resetear campos (Opcional)
   */
  public cancelarEdicion(): void {
    if(confirm('¿Deseas descartar los cambios no guardados?')) {
      // Lógica para recargar datos originales
    }
  }
}