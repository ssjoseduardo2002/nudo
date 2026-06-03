import { Routes } from '@angular/router';

/**
 * Definición de Rutas NUDO - Grado Ingeniería
 * Centralizamos la navegación para asegurar que el "Blindaje Legal" sea accesible.
 * Implementa Lazy Loading (carga perezosa) para optimizar el rendimiento y la velocidad de carga inicial.
 */
export const routes: Routes = [
  // --- 1. Entrada al Sistema ---
  { 
    path: '', 
    redirectTo: 'acceso', 
    pathMatch: 'full' 
  },
  
  { 
    path: 'acceso', 
    loadComponent: () => import('./componentes_de_vistas/acceso/acceso').then(m => m.Acceso), 
    title: 'NUDO - Acceso Blindado' 
  },

  // --- 2. Centro de Operaciones (Dashboard - Requiere AuthGuard a futuro) ---
  { 
    path: 'inicio', 
    loadComponent: () => import('./componentes_de_vistas/inicio/inicio').then(m => m.Inicio), 
    title: 'NUDO - Panel de Control'
    // canActivate: [authGuard] <-- Compuerta de seguridad Firebase listoneada
  },

  // --- 3. Gestión Documental y Legal-Tech ---
  { 
    path: 'catalogo', 
    loadComponent: () => import('./componentes_de_vistas/catalogo/catalogo').then(m => m.Catalogo), 
    title: 'NUDO - Catálogo de Contratos' 
  },
  { 
    path: 'generador-contrato', 
    loadComponent: () => import('./componentes_de_vistas/generador-contrato/generador-contrato').then(m => m.GeneradorContrato), 
    title: 'NUDO - Generador Inteligente' 
  },
  { 
    path: 'editor-contrato', 
    loadComponent: () => import('./componentes_de_vistas/editor-contrato/editor-contrato').then(m => m.EditorContrato), 
    title: 'NUDO - Editor de Cláusulas' 
  },

  // --- 4. Identidad y Finanzas del Socio ---
  { 
    path: 'perfil-usuario', 
    loadComponent: () => import('./componentes_de_vistas/perfil-de-usuario/perfil-de-usuario').then(m => m.PerfilDeUsuario), 
    title: 'NUDO - Mi Perfil de Socio' 
  },
  { 
    path: 'pago-seguro', 
    loadComponent: () => import('./componentes_de_vistas/pasarela-pago/pasarela-pago').then(m => m.PasarelaPago), 
    title: 'NUDO - Pasarela de Pago Seguro' 
  },

  // --- 5. Soporte y Cultura NUDO ---
  { 
    path: 'centro-ayuda', 
    loadComponent: () => import('./componentes_de_vistas/centro-ayuda/centro-ayuda').then(m => m.CentroAyuda), 
    title: 'NUDO - Centro de Soporte' 
  },
  { 
    path: 'la-mente-detras', 
    loadComponent: () => import('./componentes_de_vistas/la-mente-detras-de-nudo/la-mente-detras-de-nudo').then(m => m.LaMenteDetrasDeNUDO), 
    title: 'NUDO - La Mente Detrás' 
  },

  // --- 5.1 Parches dinámicos para el Footer (Consumen el mismo búnker de soporte de forma inteligente) ---
  {
    path: 'privacidad',
    loadComponent: () => import('./componentes_de_vistas/centro-ayuda/centro-ayuda').then(m => m.CentroAyuda),
    title: 'NUDO - Aviso de Privacidad'
  },
  {
    path: 'terminos',
    loadComponent: () => import('./componentes_de_vistas/centro-ayuda/centro-ayuda').then(m => m.CentroAyuda),
    title: 'NUDO - Términos de Servicio'
  },

  // --- 6. Seguridad Extrema (Wildcard / Comodín de Redirección para URLs rotas) ---
  { 
    path: '**', 
    redirectTo: 'acceso' 
  }
];