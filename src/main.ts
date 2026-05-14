import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app'; // ⚡ SINCRONIZADO: Importamos 'App' en lugar de 'AppComponent'

/**
 * 🛰️ LANZAMIENTO DE NUDO
 * bootstrapApplication es el comando que eleva nuestra arquitectura Standalone
 * al navegador, inyectando la configuración global (appConfig).
 */
bootstrapApplication(App, appConfig)
  .catch((err) => {
    console.error('--- 🚨 ERROR CRÍTICO EN EL ARRANQUE DE NUDO ---');
    console.error(err);
  });