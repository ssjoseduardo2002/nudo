import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase.config";

@Component({
  selector: 'app-acceso',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './acceso.html',
  styleUrl: './acceso.scss' // 🔥 Sincronizado a la especificación moderna de Angular
})
export class Acceso implements OnInit {
  private auth = getAuth(app);

  // Datos del socio vinculados bidireccionalmente por [(ngModel)]
  public correo: string = '';
  public contrasena: string = '';
  
  // Estado de la interfaz para control de flujos concurrentes
  public cargando: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('--- Guardián de Acceso NUDO Operativo ---');
  }

  /**
   * Ejecuta la lógica de entrada usando Firebase Auth.
   * Blindamos el acceso para el CEO y sus socios. 🛡️
   */
  public async onLogin(): Promise<void> {
    // ⚡ PROTECCIÓN: Si ya está cargando o faltan datos, rompemos la ejecución
    if (!this.correo || !this.contrasena || this.cargando) {
      return;
    }

    this.cargando = true;
    console.log('--- Iniciando protocolo de acceso seguro en NUDO ---');
    
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, this.correo, this.contrasena);
      console.log('¡Acceso autorizado! Bienvenido al panel, socio.', userCredential.user.email);

      // Redirección directa y fluida al búnker central de operaciones
      this.router.navigate(['/inicio']);
      
    } catch (error: any) {
      this.manejarErrorAcceso(error);
    } finally {
      this.cargando = false;
    }
  }

  /**
   * 🔥 ANIKILACIÓN DE ERRORES DE COMPILACIÓN:
   * Hooks interactivos vinculados a los clics del HTML
   */
  public onOlvidoContrasena(): void {
    console.log('Protocolo de recuperación de contraseña solicitado.');
    alert('Socio, el sistema de recuperación vía correo se habilitará en la siguiente fase de Firebase. 🔑');
    // Tip: Aquí conectarás sendPasswordResetEmail(this.auth, this.correo) en el futuro
  }

  public onIrARegistro(): void {
    console.log('Redirigiendo al socio al flujo de registro de gremio.');
    alert('Ecosistema NUDO: La pantalla de creación de cuenta se encuentra en desarrollo. 🚀');
    // Tip: Cuando crees la vista de registro, usarás: this.router.navigate(['/registro']);
  }

  /**
   * Traduce los errores técnicos de Firebase a lenguaje humano corporativo.
   */
  private manejarErrorAcceso(error: any): void {
    console.error('Código de error Firebase detectado:', error.code);
    
    switch (error.code) {
      // Nota: Firebase moderno unifica estos errores para evitar rastreo ilícito de correos
      case 'auth/invalid-credential':
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        alert('Credenciales incorrectas. Revisa tu correo o contraseña, socio. 🔑');
        break;
      case 'auth/too-many-requests':
        alert('Acceso bloqueado temporalmente por exceso de intentos. Intenta más tarde. ⚠️');
        break;
      default:
        alert('Ocurrió un error inesperado al conectar con la bóveda de NUDO.');
    }
  }
}