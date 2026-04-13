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
  // Redirección inicial: Si el usuario entra a la raíz, lo mandamos al login (Acceso)
  { path: '', redirectTo: 'acceso', pathMatch: 'full' },
  
  { path: 'acceso', component: AccesoComponent, title: 'NUDO - Acceso' },
  { path: 'inicio', component: InicioComponent, title: 'NUDO - Inicio' },
  { path: 'catalogo', component: CatalogoComponent, title: 'NUDO - Catálogo' },
  { path: 'generador-contrato', component: GeneradorContratoComponent, title: 'NUDO - Generador' },
  { path: 'editor-contrato', component: EditorContratoComponent, title: 'NUDO - Editor' },
  { path: 'centro-ayuda', component: CentroAyudaComponent, title: 'NUDO - Ayuda' },
  { path: 'perfil-de-usuario', component: PerfilDeUsuarioComponent, title: 'NUDO - Mi Perfil' },
  { path: 'pasarela-pago', component: PasarelaPagoComponent, title: 'NUDO - Pago Seguro' },
  { path: 'la-mente-detras-de-nudo', component: LaMenteDetrasDeNudoComponent, title: 'La Mente Detrás' },

  // Comodín: Si escriben cualquier cosa mal en la URL, los regresa al acceso
  { path: '**', redirectTo: 'acceso' }
];