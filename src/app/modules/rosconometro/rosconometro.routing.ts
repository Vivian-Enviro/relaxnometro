import { Routes, RouterModule } from '@angular/router';
import { RosconometroComponent } from './rosconometro.component';

const routes: Routes = [
  { 
    path: '',
    component: RosconometroComponent,
   },
];

export const RosconometroRoutes = RouterModule.forChild(routes);