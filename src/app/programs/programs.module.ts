import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsComponent } from './programs.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

const programRoute: Routes = [
  { path: 'programs', component: ProgramsComponent}
]


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(programRoute)
  ],
  declarations: [ProgramsComponent]
})
export class ProgramsModule { }
