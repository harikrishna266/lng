import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestResultsComponent } from './test-results.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [TestResultsComponent]
})
export class TestResultsModule { }
