import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Importa la variable del archivo anterior

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};