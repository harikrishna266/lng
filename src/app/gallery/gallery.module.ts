import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule, Routes } from '@angular/router';

const galleyRoute: Routes = [
  { path: 'login', component: GalleryComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(galleyRoute)
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }
