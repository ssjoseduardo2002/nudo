import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; // Necesario para el *ngIf del botón
import { getAuth, signInWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { app } from "../../firebase.config";

@Component({
  selector: 'app-acceso',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './acceso.html',
  styleUrls: ['./acceso.scss']
})
export class Acceso { // Nombre simplificado para coincidir con tu spec.ts
  private auth = getAuth(app);

  // Datos del socio
  public correo: string = '';
  public contrasena: string = '';
  
  // Estado de la interfaz
  public cargando: boolean = false;

  constructor(private router: Router) {}

  /**
   * Ejecuta la lógica de entrada usando Firebase Auth.
   * Blindamos el acceso para el CEO y sus socios. 🛡️
   */
  public async onLogin(): Promise<void> {
    if (!this.correo || !this.contrasena) {
      alert('Socio, por favor llena ambos campos para continuar. 🪢');
      return;
    }

    this.cargando = true;
    console.log('--- Iniciando protocolo de acceso en NUDO ---');
    
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, this.correo, this.contrasena);
      console.log('¡Acceso autorizado! Bienvenido al panel, CEO.', userCredential.user.email);

      // Navegación fluida al panel principal
      this.router.navigate(['/inicio']);
      
    } catch (error: any) {
      this.manejarErrorAcceso(error);
    } finally {
      this.cargando = false;
    }
  }

  /**
   * Traduce los errores técnicos de Firebase a lenguaje humano.
   */
  private manejarErrorAcceso(error: any): void {
    console.error('Error detectado:', error.code);
    
    switch (error.code) {
      case 'auth/invalid-credential':
        alert('Credenciales incorrectas. Revisa tu correo o contraseña, socio. 🔑');
        break;
      case 'auth/user-not-found':
        alert('Este usuario no está registrado en el gremio de NUDO. 🚫');
        break;
      case 'auth/wrong-password':
        alert('La contraseña no coincide con nuestros registros. 🔐');
        break;
      default:
        alert('Ocurrió un error inesperado al conectar con la bóveda de NUDO.');
    }
  }
}