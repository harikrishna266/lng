import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramBoxComponent } from './program-box.component';

describe('ProgramBoxComponent', () => {
  let component: ProgramBoxComponent;
  let fixture: ComponentFixture<ProgramBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
