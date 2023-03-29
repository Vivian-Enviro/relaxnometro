import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { RoleGuard } from '../../guards/role.guard';

// GateKeeper
import { GateKeeperContainerComponent } from './container/gatekeeper-container/gatekeeper-container.component';

const routes: Routes = [
  {
    path: '',
    component: GateKeeperContainerComponent,
    children: [

      // route: administrator (role)
      {
        path: 'rosco',
       // canActivate: [RoleGuard], 
        data : {role : 0},
      
        loadChildren: () => import('../rosconometro/rosconometro.module').then(m => m.RosconometroModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GateKeeperRoutingModule { }