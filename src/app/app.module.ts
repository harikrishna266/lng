import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { RegisterModule } from './register/register.module';
import { SessionsModule } from './sessions/sessions.module';
import { ProgramsModule } from './programs/programs.module';
import { AboutusModule } from './aboutus/aboutus.module';
import { ContactusModule } from './contactus/contactus.module';
import { TestModule } from './test/test.module';
import { TestGuideModule } from './test-guide/test-guide.module';
import { TestResultsModule } from './test-results/test-results.module';

import { TestGuideComponent } from './test-guide/test-guide.component';
import { GalleryModule}  from './gallery/gallery.module';
import { ComponentsModule } from './components/components.module';
import { JoinProgramModule } from './join-program/join-program.module';
import { ProgramDetailsModule } from './program-details/program-details.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestResultsComponent } from './test-results/test-results.component';

import { LoginService } from './provider/login.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents:[
    TestGuideComponent,
    TestResultsComponent
    ],
  imports: [
    BrowserModule,
    HttpModule,
    
    GalleryModule,
    SessionsModule,
    ComponentsModule,
    TestResultsModule,
    TestGuideModule,
    TestModule,
    ProgramsModule,
    JoinProgramModule,
    ProgramDetailsModule,
    RegisterModule,
    ContactusModule,
    // PaymentModule,
    BrowserAnimationsModule,
    AboutusModule,
    HomeModule,
    RouterModule.forRoot([])
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
