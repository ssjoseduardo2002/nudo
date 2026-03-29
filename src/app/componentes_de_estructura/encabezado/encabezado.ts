import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.scss'
})
export class Encabezado implements OnInit {
  
  /**
   * @Input permite que este componente reciba datos desde fuera.
   * Si no se le pasa nada, usará estos valores por defecto.
   */
  @Input() titulo: string = 'Bienvenido a NUDO';
  @Input() subtitulo: string = 'Protege tu trabajo de manera profesional y segura.';

  constructor() {
    // El constructor se mantiene limpio, siguiendo la mentalidad de trading:
    // Solo lo necesario para inicializar.
  }

  ngOnInit(): void {
    // Aquí podrías añadir lógica que se ejecute al cargar el componente,
    // como verificar la hora del día para decir "Buenos días" o "Buenas tardes".
    console.log('Encabezado de NUDO inicializado correctamente.');
  }

}
