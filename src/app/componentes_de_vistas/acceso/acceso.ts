import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
// Importamos los servicios de Firebase y nuestra configuración
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase.config";

@Component({
  selector: 'app-acceso',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './acceso.html',
  styleUrls: ['./acceso.scss']
})
export class AccesoComponent {
  // Inicializamos el servicio de autenticación
  private auth = getAuth(app);

  public correo: string = 'nudocontratosCEO@nudo.com';
  public contrasena: string = 'contraseña123';

  constructor(private router: Router) {}

  /**
   * Ejecuta la lógica de entrada usando Firebase.
   */
  public async onLogin(): Promise<void> {
    console.log('--- Intentando conectar con NUDO ---');
    
    try {
      // Intentamos autenticar con Firebase
      const userCredential = await signInWithEmailAndPassword(this.auth, this.correo, this.contrasena);
      console.log('¡Conexión exitosa, CEO!', userCredential.user);

      // Si todo sale bien, navegamos al inicio
      this.router.navigate(['/inicio']);
      
    } catch (error) {
      console.error('Error al conectar con Firebase:', error);
      alert('Hubo un problema al conectar. Revisa tus credenciales.');
    }
  }
}