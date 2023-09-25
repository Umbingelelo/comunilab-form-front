import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { InitialDescriptionComponent } from './initial-description/initial-description.component';
import { AboutYouFormComponent } from './about-you-form/about-you-form.component';
import { AboutYourCommunityComponent } from './about-your-community/about-your-community.component';
import { UserChoiceComponent } from './user-choice/user-choice.component';


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
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainFormRoutingModule { }
