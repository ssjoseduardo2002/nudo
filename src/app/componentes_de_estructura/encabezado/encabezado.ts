import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.scss'
})
export class Encabezado {
  @Input() usuario: string = 'Invitado';
  @Input() seccion: string = '';
  
  // Añadimos esta propiedad para controlar la visibilidad
  @Input() enPantallaAcceso: boolean = false; 
}
