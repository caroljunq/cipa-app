import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticsPage } from './diagnostics.page';

describe('DiagnosticsPage', () => {
  let component: DiagnosticsPage;
  let fixture: ComponentFixture<DiagnosticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
