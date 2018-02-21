import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const loginRoute: Routes = [
  { path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginRoute)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
