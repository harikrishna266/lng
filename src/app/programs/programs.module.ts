import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsComponent } from './programs.component';
import { RouterModule, Routes } from '@angular/router';

const programRoute: Routes = [
  { path: 'programs', component: ProgramsComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(programRoute)
  ],
  declarations: [ProgramsComponent]
})
export class ProgramsModule { }
