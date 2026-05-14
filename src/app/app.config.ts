import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

/**
 * appConfig - El ADN técnico de NUDO.
 * Aquí configuramos los proveedores globales que darán vida a la plataforma.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    // Optimizamos la detección de cambios para un rendimiento de grado ingeniería
    provideZoneChangeDetection({ eventCoalescing: true }), 
    
    // Configuración avanzada del Router
    provideRouter(
      routes, 
      withComponentInputBinding(), // Permite recibir parámetros de URL directamente como @Input()
      withViewTransitions()        // Añade transiciones suaves entre vistas automáticamente 🚀
    ),

    // Habilitamos el motor de animaciones para los efectos de las tarjetas y visores
    provideAnimations()
  ]
};