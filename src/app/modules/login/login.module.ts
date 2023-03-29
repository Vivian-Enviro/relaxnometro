
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './pages/signin-page/signin-page.component';
import { LoginContainerComponent } from './container/login-container/login-container.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ConfluxErrorModule } from 'src/app/conflux/shared/confluxerror/confluxerror.module';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    LoginContainerComponent,
    SignInPageComponent,
  ],
  imports: [
    //CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   // MaterialModule,
    //ConfluxErrorModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
