import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainFormRoutingModule } from './main-form-routing.module';
import { InitialDescriptionComponent } from './initial-description/initial-description.component';
import { AboutYouFormComponent } from './about-you-form/about-you-form.component';
import { FlowbiteModule } from 'flowbite-angular';
import { AboutYourCommunityComponent } from './about-your-community/about-your-community.component';
import { UserChoiceComponent } from './user-choice/user-choice.component';




@NgModule({
  declarations: [
    WelcomeComponent,
    InitialDescriptionComponent,
    AboutYouFormComponent,
    AboutYourCommunityComponent,
    UserChoiceComponent
  ],
  imports: [
    CommonModule,
    MainFormRoutingModule,
    FlowbiteModule

  ]
})
export class MainFormModule { }
