import { Routes } from '@angular/router';
// Vistas principales
import { AccesoComponent } from './componentes_de_vistas/acceso/acceso';
import { InicioComponent } from './componentes_de_vistas/inicio/inicio';
import { CatalogoComponent } from './componentes_de_vistas/catalogo/catalogo';
import { GeneradorContratoComponent } from './componentes_de_vistas/generador-contrato/generador-contrato';
import { EditorContratoComponent } from './componentes_de_vistas/editor-contrato/editor-contrato';
import { CentroAyudaComponent } from './componentes_de_vistas/centro-ayuda/centro-ayuda';
import { PerfilUsuarioComponent } from './componentes_de_vistas/perfil-de-usuario/perfil-de-usuario';
import { PasarelaPagoComponent } from './componentes_de_vistas/pasarela-pago/pasarela-pago';
import { LaMenteDetrasDeNudoComponent } from './componentes_de_vistas/la-mente-detras-de-nudo/la-mente-detras-de-nudo';

export const routes: Routes = [
  // 1. Redirección inicial
  { 
    path: '', 
    redirectTo: 'acceso', 
    pathMatch: 'full' 
  },
  
  // 2. Rutas de Autenticación
  { 
    path: 'acceso', 
    component: AccesoComponent, 
    title: 'NUDO - Acceso' 
  },

  // 3. Dashboard Principal
  { 
    path: 'inicio', 
    component: InicioComponent, 
    title: 'NUDO - Inicio' 
  },

  // 4. Operatividad de Contratos
  { 
    path: 'catalogo', 
    component: CatalogoComponent, 
    title: 'NUDO - Catálogo' 
  },
  { 
    path: 'generador-contrato', 
    component: GeneradorContratoComponent, 
    title: 'NUDO - Generador' 
  },
  { 
    path: 'editor-contrato', 
    component: EditorContratoComponent, 
    title: 'NUDO - Editor' 
  },

  // 5. Soporte y Usuario
  { 
    path: 'centro-ayuda', 
    component: CentroAyudaComponent, 
    title: 'NUDO - Ayuda' 
  },
  { 
    path: 'perfil-usuario', 
    component: PerfilUsuarioComponent, 
    title: 'NUDO - Mi Perfil' 
  },
  { 
    path: 'pago-seguro', 
    component: PasarelaPagoComponent, 
    title: 'NUDO - Pago Seguro' 
  },

  // 6. Sección Especial del Autor
  { 
    path: 'mente-detras', 
    component: LaMenteDetrasDeNudoComponent, 
    title: 'NUDO - La Mente Detrás' 
  },

  // 7. Comodín
  { 
    path: '**', 
    redirectTo: 'acceso' 
  }
];