import { Routes } from '@angular/router';

/**
 * NUDO - CORE ROUTING ENGINE (Grado Ingeniería)
 * Optimizaciones aplicadas: Lazy loading, rutas protegidas (placeholder)
 * y resolución de componentes de alta prioridad.
 */
export const routes: Routes = [
  // --- 1. Entrada al Sistema ---
  { path: '', redirectTo: 'acceso', pathMatch: 'full' },
  { 
    path: 'acceso', 
    loadComponent: () => import('./componentes_de_vistas/acceso/acceso').then(m => m.Acceso), 
    title: 'NUDO | Acceso Blindado' 
  },

  // --- 2. Centro de Operaciones ---
  { 
    path: 'inicio', 
    loadComponent: () => import('./componentes_de_vistas/inicio/inicio').then(m => m.Inicio), 
    title: 'NUDO | Panel de Control'
  },

  // --- 3. Legal-Tech Suite ---
  { 
    path: 'catalogo', 
    loadComponent: () => import('./componentes_de_vistas/catalogo/catalogo').then(m => m.Catalogo), 
    title: 'NUDO | Catálogo' 
  },
  { 
    path: 'generador-contrato', 
    loadComponent: () => import('./componentes_de_vistas/generador-contrato/generador-contrato').then(m => m.GeneradorContrato), 
    title: 'NUDO | Generador' 
  },
  { 
    path: 'editor-contrato', 
    loadComponent: () => import('./componentes_de_vistas/editor-contrato/editor-contrato').then(m => m.EditorContrato), 
    title: 'NUDO | Editor' 
  },

  // --- 4. Identidad y Finanzas ---
  { 
    path: 'perfil-usuario', 
    loadComponent: () => import('./componentes_de_vistas/perfil-de-usuario/perfil-de-usuario').then(m => m.PerfilDeUsuario), 
    title: 'NUDO | Mi Perfil' 
  },
  { 
    path: 'pago-seguro', 
    loadComponent: () => import('./componentes_de_vistas/pasarela-pago/pasarela-pago').then(m => m.PasarelaPago), 
    title: 'NUDO | Pago Seguro' 
  },

  // --- 5. Soporte y Cultura ---
  { 
    path: 'centro-ayuda', 
    loadComponent: () => import('./componentes_de_vistas/centro-ayuda/centro-ayuda').then(m => m.CentroAyuda), 
    title: 'NUDO | Soporte' 
  },
  { 
    path: 'la-mente-detras', 
    loadComponent: () => import('./componentes_de_vistas/la-mente-detras-de-nudo/la-mente-detras-de-nudo').then(m => m.LaMenteDetrasDeNUDO), 
    title: 'NUDO | La Mente' 
  },

  // --- 5.1 Footer - Rutas de cumplimiento ---
  {
    path: 'privacidad',
    loadComponent: () => import('./componentes_de_vistas/centro-ayuda/centro-ayuda').then(m => m.CentroAyuda),
    title: 'NUDO | Privacidad'
  },
  {
    path: 'terminos',
    loadComponent: () => import('./componentes_de_vistas/centro-ayuda/centro-ayuda').then(m => m.CentroAyuda),
    title: 'NUDO | Términos'
  },

  // --- 6. Manejo de Errores (Catch-all) ---
  { path: '**', redirectTo: 'acceso' }
];