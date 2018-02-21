import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWeProivdeBoxComponent } from './home-we-proivde-box.component';

describe('HomeWeProivdeBoxComponent', () => {
  let component: HomeWeProivdeBoxComponent;
  let fixture: ComponentFixture<HomeWeProivdeBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWeProivdeBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWeProivdeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
