import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-acceso',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './acceso.html',
  styleUrls: ['./acceso.scss']
})
export class AccesoComponent {
  /**
   * Credenciales preestablecidas para agilizar las pruebas de desarrollo.
   * El CEO de NUDO entra directamente con estos datos.
   */
  public correo: string = 'nudocontratosCEO@nudo.com';
  public contrasena: string = 'contraseña123';

  constructor(private router: Router) {}

  /**
   * Ejecuta la lógica de entrada. 
   * Por ahora, redirige directamente a la vista de inicio.
   */
  public onLogin(): void {
    console.log('--- Iniciando Sesión en NUDO ---');
    console.log('Usuario:', this.correo);
    
    // Saltamos al panel principal
    this.router.navigate(['/inicio']).then(success => {
      if (success) {
        console.log('Navegación exitosa al panel de inicio.');
      } else {
        console.error('Error: La ruta "/inicio" no parece estar configurada.');
      }
    });
  }
}