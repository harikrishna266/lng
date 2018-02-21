import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerTopBarComponent } from './lower-top-bar.component';

describe('LowerTopBarComponent', () => {
  let component: LowerTopBarComponent;
  let fixture: ComponentFixture<LowerTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowerTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
