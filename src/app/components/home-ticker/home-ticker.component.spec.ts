import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTickerComponent } from './home-ticker.component';

describe('HomeTickerComponent', () => {
  let component: HomeTickerComponent;
  let fixture: ComponentFixture<HomeTickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
