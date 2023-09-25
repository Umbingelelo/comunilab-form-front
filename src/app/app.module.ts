import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFormModule } from './main-form/main-form.module';
import { FlowbiteModule } from 'flowbite-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainFormModule,
    FlowbiteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
