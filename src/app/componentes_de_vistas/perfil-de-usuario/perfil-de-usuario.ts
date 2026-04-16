import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil-de-usuario.html',
  styleUrl: './perfil-de-usuario.scss'
})
export class PerfilUsuarioComponent {
  // Datos del socio de NUDO
  usuario = {
    nombre: 'José',
    apellido: 'Freelancer',
    email: 'jose.nudo@ejemplo.com',
    profesion: 'Ingeniero Informático',
    biografia: 'Mente detrás del proyecto NUDO, enfocado en simplificar lo legal.'
  };

  guardarCambios() {
    console.log('Datos actualizados en NUDO:', this.usuario);
    alert('¡Perfil actualizado con éxito, socio!');
  }
}