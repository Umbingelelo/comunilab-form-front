import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainFormRoutingModule } from './main-form-routing.module';
import { InitialDescriptionComponent } from './initial-description/initial-description.component';
import { AboutYouFormComponent } from './about-you-form/about-you-form.component';
import { FlowbiteModule } from 'flowbite-angular';
import { AboutYourCommunityComponent } from './about-your-community/about-your-community.component';
import { UserChoiceComponent } from './user-choice/user-choice.component';
import { InitialNeedComponent } from './initial-need/initial-need.component';
import { InitialProjectComponent } from './initial-project/initial-project.component';
import { DreamNeedComponent } from './dream-need/dream-need.component';
import { ManagerProjectComponent } from './manager-project/manager-project.component';
import { StrengthsNeedComponent } from './strengths-need/strengths-need.component';
import { ConcernsNeedComponent } from './concerns-need/concerns-need.component';
import { InformationProjectComponent } from './information-project/information-project.component';
import { OdsInputComponent } from './ods-input/ods-input.component';
import { ProcessingInfoComponent } from './processing-info/processing-info.component';
import { SendEmailComponent } from './send-email/send-email.component';




@NgModule({
  declarations: [
    WelcomeComponent,
    InitialDescriptionComponent,
    AboutYouFormComponent,
    AboutYourCommunityComponent,
    UserChoiceComponent,
    InitialNeedComponent,
    InitialProjectComponent,
    DreamNeedComponent,
    ManagerProjectComponent,
    StrengthsNeedComponent,
    ConcernsNeedComponent,
    InformationProjectComponent,
    OdsInputComponent,
    ProcessingInfoComponent,
    SendEmailComponent
  ],
  imports: [
    CommonModule,
    MainFormRoutingModule,
    FlowbiteModule

  ]
})
export class MainFormModule { }
