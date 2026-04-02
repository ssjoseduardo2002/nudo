import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-acceso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './acceso.html',
  styleUrl: './acceso.scss'
})
export class Acceso {
  esRegistro: boolean = false;

  alternarModo() {
    this.esRegistro = !this.esRegistro;
  }

  onSubmit() {
    console.log(this.esRegistro ? 'Registrando usuario...' : 'Iniciando sesión...');
    // Aquí conectaremos luego con Firebase o tu Backend
  }
}
