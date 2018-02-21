import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestGuideComponent } from './test-guide.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [TestGuideComponent],
  exports: [TestGuideComponent]
})
export class TestGuideModule { }
