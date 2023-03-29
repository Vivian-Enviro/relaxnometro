import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GateKeeperContainerComponent } from './modules/gatekeeper/container/gatekeeper-container/gatekeeper-container.component';

const routes: Routes = [
  {
    path:'', 
    component: GateKeeperContainerComponent
  },

  // route: login
  /*{
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    //loadChildren: () => import('./modules/gatekeeper/gatekeeper.module').then(m => m.GateKeeperModule)
  },*/

  // route: gatekeeper
  {
    path: '',
    loadChildren: () => import('./modules/gatekeeper/gatekeeper.module').then(m => m.GateKeeperModule)
  },

   // route: default
  /* {
    path:'',
    pathMatch: 'full',
    redirectTo: 'login'
  },*/

  // route: default-notFount
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
