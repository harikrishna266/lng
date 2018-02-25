import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinProgramComponent } from './join-program.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { ModalModule } from '@angular/material/modal';
const joinprogramRoute: Routes = [
  { path: 'join-program', component: JoinProgramComponent}
]

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ModalModule,
    RouterModule.forChild(joinprogramRoute)
  ],
  declarations: [JoinProgramComponent]
})
export class JoinProgramModule {
	
}
