import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {Lib1Module} from '@light-weight-injection-token/lib1'
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule,Lib1Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
