import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinProgramComponent } from './join-program.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

const joinprogramRoute: Routes = [
  { path: 'join-program', component: JoinProgramComponent}
]

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(joinprogramRoute)
  ],
  declarations: [JoinProgramComponent]
})
export class JoinProgramModule { }
