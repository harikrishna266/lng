import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsComponent } from './sessions.component';
import { RouterModule, Routes } from '@angular/router';

const sessionRoute: Routes = [
  { path: 'sessions', component: SessionsComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sessionRoute)
  ],
  declarations: [SessionsComponent]
})
export class SessionsModule { }
