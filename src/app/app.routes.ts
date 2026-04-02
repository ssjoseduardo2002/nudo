import { Routes } from '@angular/router';

import { AccesoComponent } from './componentes_de_vistas/acceso/acceso';
import { InicioComponent } from './componentes_de_vistas/inicio/inicio';
import { CatalogoComponent } from './componentes_de_vistas/catalogo/catalogo';
import { GeneradorContratoComponent } from './componentes_de_vistas/generador-contrato/generador-contrato';
import { EditorContratoComponent } from './componentes_de_vistas/editor-contrato/editor-contrato';
import { CentroAyudaComponent } from './componentes_de_vistas/centro-ayuda/centro-ayuda';
import { PerfilDeUsuarioComponent } from './componentes_de_vistas/perfil-de-usuario/perfil-de-usuario';
import { PasarelaPagoComponent } from './componentes_de_vistas/pasarela-pago./pasarela-pago.';
import { LaMenteDetrasDeNudoComponent } from './componentes_de_vistas/la-mente-detras-de-nudo/la-mente-detras-de-nudo';

export const routes: Routes = [
  { path: '', redirectTo: 'acceso', pathMatch: 'full' },
  { path: 'acceso', component: AccesoComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'generador-contrato', component: GeneradorContratoComponent },
  { path: 'editor-contrato', component: EditorContratoComponent },
  { path: 'centro-ayuda', component: CentroAyudaComponent },
  { path: 'perfil-de-usuario', component: PerfilDeUsuarioComponent },
  { path: 'pasarela-pago', component: PasarelaPagoComponent },
  { path: 'la-mente-detras-de-nudo', component: LaMenteDetrasDeNudoComponent },
  { path: '**', redirectTo: 'acceso' }
];