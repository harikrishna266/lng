import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';

const registerRoute: Routes = [
  { path: 'programs', component: RegisterComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(registerRoute)
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
