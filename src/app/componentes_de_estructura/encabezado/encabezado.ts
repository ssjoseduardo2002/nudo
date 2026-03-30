import { Component, Input, OnInit } from '@angular/core'; // Importamos OnInit
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.scss'
})
export class Encabezado implements OnInit {
  @Input() usuario: string = 'José'; 
  @Input() seccion: string = 'Inicio'; 

  saludoDinamico: string = '';

  ngOnInit(): void {
    // Lógica de tiempo para un saludo profesional
    const hora = new Date().getHours();
    if (hora < 12) {
      this.saludoDinamico = '¡Buenos días';
    } else if (hora < 19) {
      this.saludoDinamico = '¡Buenas tardes';
    } else {
      this.saludoDinamico = '¡Buenas noches';
    }
    console.log('Encabezado dinámico listo para ' + this.usuario);
  }
}
