import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './top-header/top-header.component';
import { LowerTopBarComponent } from './lower-top-bar/lower-top-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeBoxComponent } from './home-box/home-box.component';
import { HomeWeProivdeBoxComponent } from './home-we-proivde-box/home-we-proivde-box.component';
import { HomeTickerComponent } from './home-ticker/home-ticker.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { TestModule } from '../test/test.module';
import { ProgramBoxComponent } from './program-box/program-box.component';
import { SliderComponent } from './slider/slider.component';
import { Ng2OdometerModule } from 'ng2-odometer';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TestModule,
    MatDialogModule,
    Ng2OdometerModule
  ],
  declarations: [
    TopHeaderComponent,
    LowerTopBarComponent,
    NavBarComponent,
    HomeBoxComponent,
    HomeWeProivdeBoxComponent,
    HomeTickerComponent,
    ProgramBoxComponent,
    SliderComponent
  ],
  exports: [
    TopHeaderComponent,
    LowerTopBarComponent,
    NavBarComponent,
    HomeBoxComponent,
    HomeWeProivdeBoxComponent,
    HomeTickerComponent,
    ProgramBoxComponent,
    SliderComponent
  ]
})
export class ComponentsModule { }
