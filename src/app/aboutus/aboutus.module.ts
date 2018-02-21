import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { RouterModule, Routes } from '@angular/router';

const aboutRoute: Routes = [
  { path: 'about-us', component: AboutusComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(aboutRoute)
  ],
  declarations: [AboutusComponent]
})
export class AboutusModule { }
