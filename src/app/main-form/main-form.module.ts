import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainFormRoutingModule } from './main-form-routing.module';
import { InitialDescriptionComponent } from './initial-description/initial-description.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    InitialDescriptionComponent
  ],
  imports: [
    CommonModule,
    MainFormRoutingModule
  ]
})
export class MainFormModule { }
