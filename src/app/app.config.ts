import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Esto conecta tu archivo de rutas con la aplicación
    provideRouter(routes, withComponentInputBinding())
  ]
};