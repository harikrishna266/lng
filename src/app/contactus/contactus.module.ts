import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus.component';
import { RouterModule, Routes } from '@angular/router';

const contactRoute: Routes = [
  { path: 'contact-us', component: ContactusComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contactRoute)
  ],
  declarations: [ContactusComponent]
})
export class ContactusModule { }
