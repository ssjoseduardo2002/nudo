import { Routes } from '@angular/router';

// Vistas principales
import { AccesoComponent } from './componentes_de_vistas/acceso/acceso';
import { InicioComponent } from './componentes_de_vistas/inicio/inicio';
import { CatalogoComponent } from './componentes_de_vistas/catalogo/catalogo';
import { GeneradorContratoComponent } from './componentes_de_vistas/generador-contrato/generador-contrato';
import { EditorContratoComponent } from './componentes_de_vistas/editor-contrato/editor-contrato';
import { CentroAyudaComponent } from './componentes_de_vistas/centro-ayuda/centro-ayuda';
import { PerfilDeUsuarioComponent } from './componentes_de_vistas/perfil-de-usuario/perfil-de-usuario';
import { PasarelaPagoComponent } from './componentes_de_vistas/pasarela-pago/pasarela-pago';
import { LaMenteDetrasDeNudoComponent } from './componentes_de_vistas/la-mente-detras-de-nudo/la-mente-detras-de-nudo';

export const routes: Routes = [
  // 1. Redirección inicial
  { path: '', redirectTo: 'acceso', pathMatch: 'full' },
  
  // 2. Rutas de Autenticación e Inicio
  { path: 'acceso', component: AccesoComponent, title: 'NUDO - Acceso' },
  { path: 'inicio', component: InicioComponent, title: 'NUDO - Inicio' },

  // 3. Rutas de Operatividad de Contratos
  { path: 'catalogo', component: CatalogoComponent, title: 'NUDO - Catálogo' },
  { path: 'generador-contrato', component: GeneradorContratoComponent, title: 'NUDO - Generador' },
  { path: 'editor-contrato', component: EditorContratoComponent, title: 'NUDO - Editor' },

  // 4. Rutas de Soporte y Usuario
  { path: 'centro-ayuda', component: CentroAyudaComponent, title: 'NUDO - Ayuda' },
  { path: 'perfil-usuario', component: PerfilDeUsuarioComponent, title: 'NUDO - Mi Perfil' },
  { path: 'pago-seguro', component: PasarelaPagoComponent, title: 'NUDO - Pago Seguro' },

  // 5. SECCIÓN ESPECIAL DEL CEO
  { path: 'mente-detras', component: LaMenteDetrasDeNudoComponent, title: 'NUDO - La Mente Detrás' },

  // 6. Comodín
  { path: '**', redirectTo: 'acceso' }
];