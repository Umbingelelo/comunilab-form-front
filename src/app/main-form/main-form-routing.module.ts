import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { InitialDescriptionComponent } from './initial-description/initial-description.component';
import { AboutYouFormComponent } from './about-you-form/about-you-form.component';
import { AboutYourCommunityComponent } from './about-your-community/about-your-community.component';
import { UserChoiceComponent } from './user-choice/user-choice.component';
import { InitialNeedComponent } from './initial-need/initial-need.component';
import { InitialProjectComponent } from './initial-project/initial-project.component';
import { DreamNeedComponent } from './dream-need/dream-need.component';
import { StrengthsNeedComponent } from './strengths-need/strengths-need.component';
import { ConcernsNeedComponent } from './concerns-need/concerns-need.component';
import { OdsInputComponent } from './ods-input/ods-input.component';
import { ProcessingInfoComponent } from './processing-info/processing-info.component';
import { SendEmailComponent } from './send-email/send-email.component';


const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'initial-description',
    component: InitialDescriptionComponent
  },
  {
    path: 'about-you',
    component: AboutYouFormComponent
  },
  {
    path: 'community-transition',
    component: AboutYourCommunityComponent
  },
  {
    path: 'user-choice',
    component: UserChoiceComponent
  },
  {
    path: 'need',
    component: InitialNeedComponent
  },
  {
    path: 'project',
    component: InitialProjectComponent
  },
  {
    path: 'need/dream',
    component: DreamNeedComponent
  },
  {
    path: 'need/strengths',
    component: StrengthsNeedComponent
  },
  {
    path: 'need/concerns',
    component: ConcernsNeedComponent
  }, {
    path: 'ods',
    component: OdsInputComponent
  },
  {
    path: 'load-info',
    component: ProcessingInfoComponent
  },
  {
    path: 'send-email',
    component: SendEmailComponent
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainFormRoutingModule { }
