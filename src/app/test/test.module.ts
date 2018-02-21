import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { PagingPipe } from '../pipes/paging.pipe';
import {MatRadioModule} from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TestGuideModule } from '../test-guide/test-guide.module';
const testRoute: Routes = [
  { path: 'test', component: TestComponent}
]



@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    TestGuideModule,
    MatRadioModule,
    MatPaginatorModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    RouterModule.forChild(testRoute)
  ],
  
  declarations: [TestComponent, PagingPipe]
})
export class TestModule { }
