import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';

import path from 'node:path';

export const routes: Routes = [
  {path: '',
    component: InicioComponent},
  {path: 'gestion-de-solicitudes',component: ListadoComponent},
  {path: 'gestion-de-solicitudes/detalles',loadComponent: () => import('./pages/detail-page/detail-page.component'),
  },
];
