import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramDetailsComponent } from './program-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

const programDetailsRoute: Routes = [
  { path: 'join-program', component: ProgramDetailsComponent}
]


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(programDetailsRoute)
  ],
  declarations: [ProgramDetailsComponent]
})
export class ProgramDetailsModule { }
