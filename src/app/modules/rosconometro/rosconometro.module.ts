import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RosconometroComponent } from './rosconometro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RosconometroRoutes } from './rosconometro.routing';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RosconometroRoutes
  ],
  declarations: [RosconometroComponent]
})
export class RosconometroModule { }
