import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
const homeRoute: Routes = [
  { path: 'home', component: HomeComponent}
]

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(homeRoute)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
