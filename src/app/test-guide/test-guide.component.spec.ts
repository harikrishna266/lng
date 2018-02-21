import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGuideComponent } from './test-guide.component';

describe('TestGuideComponent', () => {
  let component: TestGuideComponent;
  let fixture: ComponentFixture<TestGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
