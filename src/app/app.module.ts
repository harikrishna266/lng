import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SessionsModule } from './sessions/sessions.module';
import { ProgramsModule } from './programs/programs.module';
import { AboutusModule } from './aboutus/aboutus.module';
import { ContactusModule } from './contactus/contactus.module';


import { ComponentsModule } from './components/components.module';

//provider

import { LoginService } from './provider/login.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HttpModule,
    LoginModule,
    SessionsModule,
    ComponentsModule,
    ProgramsModule,
    RegisterModule,
    ContactusModule,
    AboutusModule,
    RouterModule.forRoot([])
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
