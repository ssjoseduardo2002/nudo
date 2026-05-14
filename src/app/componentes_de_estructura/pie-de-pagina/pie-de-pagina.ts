import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer', // Sincronizado con app.html y app.ts
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule 
  ],
  templateUrl: './pie-de-pagina.html',
  styleUrl: './pie-de-pagina.scss'
})
export class Footer implements OnInit { // Nombre unificado para los tests y app.ts
  
  /**
   * ⚡ ANIKILACIÓN DE ERROR (image_6afcaf.png):
   * Con este @Input, Angular ya permite recibir la variable desde el app.html
   */
  @Input() enPantallaAcceso: boolean = false; 
  
  // Propiedades dinámicas para profesionalismo de NUDO
  public fechaActual: number = new Date().getFullYear();
  public versionApp: string = 'v1.0.4-beta';

  constructor() {}

  ngOnInit(): void {
    console.log(`--- Footer NUDO ${this.versionApp} Operativo ---`);
  }

  /**
   * Abre el canal de comunicación directa para el socio.
   */
  public contactarSoporte(): void {
    const mensaje = "Hola NUDO, necesito asistencia técnica o legal.";
    window.open(`mailto:soporte@nudo.com?subject=Asistencia&body=${encodeURIComponent(mensaje)}`);
  }

  /**
   * Método irAyuda (llamado desde el HTML que vimos antes)
   */
  public irAyuda(): void {
    this.contactarSoporte();
  }
}