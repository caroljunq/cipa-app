import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionsPage } from './interventions.page';

describe('InterventionsPage', () => {
  let component: InterventionsPage;
  let fixture: ComponentFixture<InterventionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
