import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagSelectGroupPage } from './diag-select-group.page';

describe('DiagSelectGroupPage', () => {
  let component: DiagSelectGroupPage;
  let fixture: ComponentFixture<DiagSelectGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagSelectGroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagSelectGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
