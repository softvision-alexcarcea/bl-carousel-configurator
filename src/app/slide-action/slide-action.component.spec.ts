import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideActionComponent } from './slide-action.component';

describe('SlideActionComponent', () => {
  let component: SlideActionComponent;
  let fixture: ComponentFixture<SlideActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
