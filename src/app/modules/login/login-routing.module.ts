import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LoginContainerComponent } from './container/login-container/login-container.component';
import { SignInPageComponent } from './pages/signin-page/signin-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginContainerComponent,
    children: [

      // route: default (first child to render)
      {
        path:       '',
        redirectTo: 'login-page',
        pathMatch:  'full'
      },

      // route: login-page
      {
        path: 'login-page',
        component: SignInPageComponent
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }