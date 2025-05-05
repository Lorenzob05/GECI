import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';

import path from 'node:path';

export const routes: Routes = [
  {path: '',
    component: InicioComponent},
  {path: 'gestión-de-solicitudes',component: ListadoComponent},
  {path: 'detalles',loadComponent: () => import('./pages/detail-page/detail-page.component'),
  },
];
